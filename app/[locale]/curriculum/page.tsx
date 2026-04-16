import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

const partNamesZh = ['第一部分', '第二部分', '第三部分', '第四部分'] as const;

const courseDecks = [
  {
    key: 'section5-energy-enthalpy-change',
    zhTitle: '录课 1：Section 5 Energy - Enthalpy Change',
    enTitle: 'Lesson 1: Section 5 Energy - Enthalpy Change',
    zhNote: '点击即可打开或下载课件。若课件中包含内嵌音频，请使用 PowerPoint 或 WPS 打开。',
    enNote:
      'Click to open or download the slide deck. To hear embedded slide audio, open it in PowerPoint or WPS.',
    href: '/downloads/curriculum/lesson-1-section5-energy-enthalpy-change.pptx'
  },
  {
    key: 'section5-dynamics-reaction-rates',
    zhTitle: '录课 2：Section 5 Dynamics - Reaction Rates',
    enTitle: 'Lesson 2: Section 5 Dynamics - Reaction Rates',
    zhNote: '点击即可打开或下载课件。若课件中包含内嵌音频，请使用 PowerPoint 或 WPS 打开。',
    enNote:
      'Click to open or download the slide deck. To hear embedded slide audio, open it in PowerPoint or WPS.',
    href: '/downloads/curriculum/lesson-2-section5-dynamics-reaction-rates.pptx'
  },
  {
    key: 'ch5-equilibrium',
    zhTitle: '录课 3：Ch.5 Equilibrium',
    enTitle: 'Lesson 3: Ch.5 Equilibrium',
    zhNote: '点击即可打开或下载课件。若课件中包含内嵌音频，请使用 PowerPoint 或 WPS 打开。',
    enNote:
      'Click to open or download the slide deck. To hear embedded slide audio, open it in PowerPoint or WPS.',
    href: '/downloads/curriculum/lesson-3-ch5-equilibrium.pptx'
  }
] as const;

const lessons = [
  {
    key: 'voltaic-cell',
    zhTitle: '原电池',
    enTitle: 'Voltaic Cell',
    zhDescription: '课堂演示视频已切分为 4 段并接入站内播放器，便于在线加载、分段复习和定位重点内容。',
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
    zhTitle: '金属的制备和应用',
    enTitle: 'Extraction and Application of Metals',
    zhDescription: '这节课的回放同样已切分为 4 段，方便在网页端快速加载，并按章节节奏逐段复习。',
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
    zhTitle: '电解',
    enTitle: 'Electrolysis',
    zhDescription: '这节课也已切成 4 段，适合按知识点拆分观看，回看时加载更快、定位更直观。',
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
        <p className="text-sm font-medium text-foreground/60">{isZh ? '课程板块' : 'Curriculum'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">{isZh ? '课程回放' : 'Course Replay'}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/70">
          {isZh
            ? '这里整理校内国家课程的课堂回放与补充讲解，方便课后复习与实验回顾。'
            : 'This section collects school chemistry class replays and follow-up explanations for review after class.'}
        </p>
      </section>

      <section className="rounded-3xl border border-border/80 bg-white/90 p-6 shadow-[0_16px_40px_rgba(31,41,55,0.08)]">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
            {isZh ? '国家课程录课课件' : 'Curriculum Slide Decks'}
          </p>
          <h2 className="text-2xl font-semibold text-foreground">{isZh ? '国家课程录课栏' : 'National Curriculum Lesson Decks'}</h2>
          <p className="text-sm leading-7 text-foreground/70">
            {isZh
              ? '这里可以直接打开录课对应的 PPT 课件。网页会直接提供文件，若课件里包含声音，请用 PowerPoint 或 WPS 播放以保证音频正常。'
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
                {isZh ? '点击打开 PPTX' : 'Open PPTX'}
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
              {isZh ? '国家课程课程回放' : 'School Chemistry Replay'}
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
                    {isZh ? '时间范围：' : 'Time range: '}
                    {part.time}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
                  <video
                    controls
                    preload="metadata"
                    className="aspect-video w-full"
                    aria-label={`${isZh ? `${lesson.zhTitle}课程回放` : `${lesson.enTitle} class replay`} ${part.index}`}
                  >
                    <source src={part.src} type="video/mp4" />
                    {isZh ? '你的浏览器不支持 video 标签。' : 'Your browser does not support the video tag.'}
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
