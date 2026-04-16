import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

const partNamesZh = ['绗竴閮ㄥ垎', '绗簩閮ㄥ垎', '绗笁閮ㄥ垎', '绗洓閮ㄥ垎'] as const;

const courseDecks = [
  {
    key: 'section5-energy-enthalpy-change',
    zhTitle: '褰曡 1锛歋ection 5 Energy - Enthalpy Change',
    enTitle: 'Lesson 1: Section 5 Energy - Enthalpy Change',
    zhNote: '鐐瑰嚮鍗冲彲鎵撳紑鎴栦笅杞借浠躲€傝嫢闇€鎾斁璇句欢鍐呭祵闊抽锛岃浣跨敤 PowerPoint 鎴?WPS 鎵撳紑銆?,
    enNote:
      'Click to open or download the slide deck. To hear embedded slide audio, open it in PowerPoint or WPS.',
    href: '/downloads/curriculum/lesson-1-section5-energy-enthalpy-change.pptx'
  },
  {
    key: 'section5-dynamics-reaction-rates',
    zhTitle: '褰曡 2锛歋ection 5 Dynamics - Reaction Rates',
    enTitle: 'Lesson 2: Section 5 Dynamics - Reaction Rates',
    zhNote: '鐐瑰嚮鍗冲彲鎵撳紑鎴栦笅杞借浠躲€傝嫢闇€鎾斁璇句欢鍐呭祵闊抽锛岃浣跨敤 PowerPoint 鎴?WPS 鎵撳紑銆?,
    enNote:
      'Click to open or download the slide deck. To hear embedded slide audio, open it in PowerPoint or WPS.',
    href: '/downloads/curriculum/lesson-2-section5-dynamics-reaction-rates.pptx'
  },
  {
    key: 'ch5-equilibrium',
    zhTitle: 'Lesson 3 - Ch.5 Equilibrium',
    enTitle: 'Lesson 3: Ch.5 Equilibrium',
    zhNote: 'Open or download the slide deck. Use PowerPoint or WPS if the file contains embedded audio.',
    enNote:
      'Click to open or download the slide deck. To hear embedded slide audio, open it in PowerPoint or WPS.',
    href: '/downloads/curriculum/lesson-3-ch5-equilibrium.pptx'
  }
] as const;

const lessons = [
  {
    key: 'voltaic-cell',
    zhTitle: '鍘熺數姹?,
    enTitle: 'Voltaic Cell',
    zhDescription: '璇惧爞婕旂ず瑙嗛宸插垏鍒嗕负 4 娈靛苟鎺ュ叆绔欏唴鎾斁鍣紝渚夸簬鍦ㄧ嚎鍔犺浇銆佸垎娈靛涔犲拰瀹氫綅閲嶇偣鍐呭銆?,
    enDescription:
      'The lesson video is split into 4 sections and embedded with the site player for easier loading, review, and navigation.',
    parts: [
      { index: 1, time: '00:00 - 10:39', src: '/videos/curriculum/parts/voltaic-cell-part-1.mp4' },
      { index: 2, time: '10:39 - 21:18', src: '/videos/curriculum/parts/voltaic-cell-part-2.mp4' },
      { index: 3, time: '21:18 - 31:57', src: '/videos/curriculum/parts/voltaic-cell-part-3.mp4' },
      { index: 4, time: '31:57 - 42:36', src: '/videos/curriculum/parts/voltaic-cell-part-4.mp4' }
    ]
  },
  {
    key: 'metals-extraction-application',
    zhTitle: '閲戝睘鐨勫埗澶囧拰搴旂敤',
    enTitle: 'Extraction and Application of Metals',
    zhDescription: '杩欒妭璇剧殑鍥炴斁鍚屾牱宸插垏鍒嗕负 4 娈碉紝鏂逛究鍦ㄧ綉椤电蹇€熷姞杞斤紝骞舵寜绔犺妭鑺傚閫愭澶嶄範銆?,
    enDescription:
      'This lesson is also split into 4 sections for faster loading on the site and easier step-by-step review.',
    parts: [
      { index: 1, time: '00:00 - 07:57', src: '/videos/curriculum/parts/metals-extraction-application-part-1.mp4' },
      { index: 2, time: '07:57 - 15:55', src: '/videos/curriculum/parts/metals-extraction-application-part-2.mp4' },
      { index: 3, time: '15:55 - 23:53', src: '/videos/curriculum/parts/metals-extraction-application-part-3.mp4' },
      { index: 4, time: '23:53 - 31:51', src: '/videos/curriculum/parts/metals-extraction-application-part-4.mp4' }
    ]
  },
  {
    key: 'electrolysis',
    zhTitle: '鐢佃В',
    enTitle: 'Electrolysis',
    zhDescription: '杩欒妭璇句篃宸插垏鎴?4 娈碉紝閫傚悎鎸夌煡璇嗙偣鎷嗗垎瑙傜湅锛屽洖鐪嬫椂鍔犺浇鏇村揩銆佸畾浣嶆洿鐩磋銆?,
    enDescription:
      'This lesson is also split into 4 sections so students can review by topic with faster loading and clearer navigation.',
    parts: [
      { index: 1, time: '00:00 - 04:24', src: '/videos/curriculum/parts/electrolysis-part-1.mp4' },
      { index: 2, time: '04:24 - 08:49', src: '/videos/curriculum/parts/electrolysis-part-2.mp4' },
      { index: 3, time: '08:49 - 13:14', src: '/videos/curriculum/parts/electrolysis-part-3.mp4' },
      { index: 4, time: '13:14 - 17:39', src: '/videos/curriculum/parts/electrolysis-part-4.mp4' }
    ]
  }
] as const;

export default function CurriculumPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '璇剧▼鏉垮潡' : 'Curriculum'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">{isZh ? '璇剧▼鍥炴斁' : 'Course Replay'}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/70">
          {isZh
            ? '杩欓噷鏁寸悊鏍″唴鍥藉璇剧▼鐨勮鍫傚洖鏀句笌琛ュ厖璁茶В锛屾柟渚胯鍚庡涔犱笌瀹為獙鍥為【銆?
            : 'This section collects school chemistry class replays and follow-up explanations for review after class.'}
        </p>
      </section>

      <section className="rounded-3xl border border-border/80 bg-white/90 p-6 shadow-[0_16px_40px_rgba(31,41,55,0.08)]">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
            {isZh ? '鍥藉璇剧▼褰曡璇句欢' : 'Curriculum Slide Decks'}
          </p>
          <h2 className="text-2xl font-semibold text-foreground">{isZh ? '鍥藉璇剧▼褰曡鏍? : 'National Curriculum Lesson Decks'}</h2>
          <p className="text-sm leading-7 text-foreground/70">
            {isZh
              ? '杩欓噷鍙互鐩存帴鎵撳紑褰曡瀵瑰簲鐨?PPT 璇句欢銆傜綉椤典細鐩存帴鎻愪緵鏂囦欢锛岃嫢璇句欢閲屽寘鍚０闊筹紝璇风敤 PowerPoint 鎴?WPS 鎾斁浠ヤ繚璇侀煶棰戞甯搞€?
              : 'Open the PPT slide decks for the recorded lessons here. The website serves the files directly, but embedded audio is best played in PowerPoint or WPS.'}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {courseDecks.map((deck) => (
            <a
              key={deck.key}
              href={deck.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border/80 bg-neutral-50/70 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              <p className="text-sm font-semibold text-foreground">{isZh ? deck.zhTitle : deck.enTitle}</p>
              <p className="mt-2 text-sm leading-6 text-foreground/70">{isZh ? deck.zhNote : deck.enNote}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                {isZh ? '鐐瑰嚮鎵撳紑 PPTX' : 'Open PPTX'}
              </p>
            </a>
          ))}
        </div>
      </section>

      {lessons.map((lesson) => (
        <section
          key={lesson.key}
          className="rounded-3xl border border-border/80 bg-white/90 p-6 shadow-[0_16px_40px_rgba(31,41,55,0.08)]"
        >
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
              {isZh ? '鍥藉璇剧▼璇剧▼鍥炴斁' : 'School Chemistry Replay'}
            </p>
            <h2 className="text-2xl font-semibold text-foreground">{isZh ? lesson.zhTitle : lesson.enTitle}</h2>
            <p className="text-sm leading-7 text-foreground/70">{isZh ? lesson.zhDescription : lesson.enDescription}</p>
          </div>

          <div className="mt-6 grid gap-6">
            {lesson.parts.map((part) => (
              <article
                key={`${lesson.key}-${part.index}`}
                className="rounded-2xl border border-border/80 bg-neutral-50/70 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-3 flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {isZh ? partNamesZh[part.index - 1] : `Part ${part.index}`}
                  </h3>
                  <p className="text-sm text-foreground/65">
                    {isZh ? '鏃堕棿鑼冨洿锛? : 'Time range: '}
                    {part.time}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
                  <video
                    controls
                    preload="metadata"
                    className="aspect-video w-full"
                    aria-label={`${isZh ? `${lesson.zhTitle}璇剧▼鍥炴斁` : `${lesson.enTitle} class replay`} ${part.index}`}
                  >
                    <source src={part.src} type="video/mp4" />
                    {isZh ? '浣犵殑娴忚鍣ㄤ笉鏀寔 video 鏍囩銆? : 'Your browser does not support the video tag.'}
                  </video>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </Container>
  );
}

