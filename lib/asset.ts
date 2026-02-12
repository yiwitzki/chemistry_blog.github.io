const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetPath(src: string) {
  if (!src) return src;
  if (!PUBLIC_BASE_PATH) return src;
  if (!src.startsWith('/')) return src;
  if (src.startsWith(`${PUBLIC_BASE_PATH}/`) || src === PUBLIC_BASE_PATH) return src;
  return `${PUBLIC_BASE_PATH}${src}`;
}
