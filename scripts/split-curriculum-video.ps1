param(
  [Parameter(Mandatory = $true)]
  [string]$SourcePath,

  [Parameter(Mandatory = $true)]
  [string]$OutputDir,

  [int]$Parts = 4
)

Add-Type -AssemblyName System.Runtime.WindowsRuntime
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
[void][Windows.Storage.StorageFolder, Windows.Storage, ContentType=WindowsRuntime]
[void][Windows.Storage.CreationCollisionOption, Windows.Storage, ContentType=WindowsRuntime]
[void][Windows.Media.Editing.MediaClip, Windows.Media.Editing, ContentType=WindowsRuntime]
[void][Windows.Media.Editing.MediaComposition, Windows.Media.Editing, ContentType=WindowsRuntime]
[void][Windows.Media.Editing.MediaTrimmingPreference, Windows.Media.Editing, ContentType=WindowsRuntime]
[void][Windows.Media.Transcoding.TranscodeFailureReason, Windows.Media.Transcoding, ContentType=WindowsRuntime]

function Await-AsyncOperation {
  param(
    [Parameter(Mandatory = $true)]
    $Operation,

    [Parameter(Mandatory = $true)]
    [Type]$ResultType
  )

  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq 'AsTask' -and
      $_.IsGenericMethod -and
      $_.GetGenericArguments().Count -eq 1 -and
      $_.GetParameters().Count -eq 1
    } |
    Select-Object -First 1

  $task = $method.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  $task.Wait()
  $task.Result
}

function Await-AsyncOperationWithProgress {
  param(
    [Parameter(Mandatory = $true)]
    $Operation,

    [Parameter(Mandatory = $true)]
    [Type]$ResultType,

    [Parameter(Mandatory = $true)]
    [Type]$ProgressType
  )

  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq 'AsTask' -and
      $_.IsGenericMethod -and
      $_.GetGenericArguments().Count -eq 2 -and
      $_.GetParameters().Count -eq 1
    } |
    Select-Object -First 1

  $task = $method.MakeGenericMethod(@($ResultType, $ProgressType)).Invoke($null, @($Operation))
  $task.Wait()
  $task.Result
}

function Get-ProjectedProperty {
  param(
    [Parameter(Mandatory = $true)]
    $Instance,

    [Parameter(Mandatory = $true)]
    [string]$InterfaceName,

    [Parameter(Mandatory = $true)]
    [string]$PropertyName
  )

  $interface = $Instance.GetType().GetInterfaces() | Where-Object { $_.Name -eq $InterfaceName } | Select-Object -First 1
  if (-not $interface) {
    throw "Could not find interface $InterfaceName on $($Instance.GetType().FullName)."
  }

  $property = $interface.GetProperty($PropertyName)
  if (-not $property) {
    throw "Could not find property $PropertyName on $InterfaceName."
  }

  [pscustomobject]@{
    Interface = $interface
    Property = $property
    Value = $property.GetValue($Instance)
  }
}

$resolvedSource = (Resolve-Path -LiteralPath $SourcePath).Path
if (-not (Test-Path -LiteralPath $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}
$resolvedOutput = (Resolve-Path -LiteralPath $OutputDir).Path

$sourceFile = Await-AsyncOperation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($resolvedSource)) ([Windows.Storage.StorageFile])
$baseClip = Await-AsyncOperation ([Windows.Media.Editing.MediaClip]::CreateFromFileAsync($sourceFile)) ([Windows.Media.Editing.MediaClip])

$totalDuration = $baseClip.OriginalDuration
$totalSeconds = $totalDuration.TotalSeconds
$segmentSeconds = $totalSeconds / $Parts

$outputFolder = Await-AsyncOperation ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync($resolvedOutput)) ([Windows.Storage.StorageFolder])

for ($index = 0; $index -lt $Parts; $index++) {
  $partNumber = $index + 1
  $segmentStart = [TimeSpan]::FromSeconds($segmentSeconds * $index)
  $segmentEnd = if ($partNumber -eq $Parts) { $totalDuration } else { [TimeSpan]::FromSeconds($segmentSeconds * $partNumber) }

  $segmentClip = $baseClip.Clone()
  $segmentClip.TrimTimeFromStart = $segmentStart
  $segmentClip.TrimTimeFromEnd = $totalDuration - $segmentEnd

  $composition = [Windows.Media.Editing.MediaComposition]::new()
  $clips = Get-ProjectedProperty -Instance $composition -InterfaceName 'IMediaComposition' -PropertyName 'Clips'
  $insertMethod = $clips.Property.PropertyType.GetMethod('Insert')
  $insertMethod.Invoke($clips.Value, @([int]0, $segmentClip)) | Out-Null

  $outputName = "voltaic-cell-part-$partNumber.mp4"
  $outputFile = Await-AsyncOperation (
    $outputFolder.CreateFileAsync($outputName, [Windows.Storage.CreationCollisionOption]::ReplaceExisting)
  ) ([Windows.Storage.StorageFile])

  $renderResult = Await-AsyncOperationWithProgress (
    $composition.RenderToFileAsync($outputFile, [Windows.Media.Editing.MediaTrimmingPreference]::Fast)
  ) ([Windows.Media.Transcoding.TranscodeFailureReason]) ([double])

  if ($renderResult -ne [Windows.Media.Transcoding.TranscodeFailureReason]::None) {
    throw "Failed to render $outputName. Reason: $renderResult"
  }

  $outputPath = Join-Path $resolvedOutput $outputName
  $outputInfo = Get-Item -LiteralPath $outputPath
  [pscustomobject]@{
    Part = $partNumber
    Start = $segmentStart.ToString()
    End = $segmentEnd.ToString()
    File = $outputInfo.FullName
    SizeMB = [Math]::Round($outputInfo.Length / 1MB, 2)
  }
}
