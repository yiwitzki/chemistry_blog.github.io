import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function CurriculumPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';
  const parts = [
    {
      index: 1,
      zhTitle: '第一部分',
      enTitle: 'Part 1',
      zhTime: '00:00 - 10:39',
      enTime: '00:00 - 10:39',
      src: '/videos/curriculum/parts/voltaic-cell-part-1.mp4'
    },
    {
      index: 2,
      zhTitle: '第二部分',
      enTitle: 'Part 2',
      zhTime: '10:39 - 21:18',
      enTime: '10:39 - 21:18',
      src: '/videos/curriculum/parts/voltaic-cell-part-2.mp4'
    },
    {
      index: 3,
      zhTitle: '第三部分',
      enTitle: 'Part 3',
      zhTime: '21:18 - 31:57',
      enTime: '21:18 - 31:57',
      src: '/videos/curriculum/parts/voltaic-cell-part-3.mp4'
    },
    {
      index: 4,
      zhTitle: '第四部分',
      enTitle: 'Part 4',
      zhTime: '31:57 - 42:36',
      enTime: '31:57 - 42:36',
      src: '/videos/curriculum/parts/voltaic-cell-part-4.mp4'
    }
  ];

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
            {isZh ? '国家课程课程回放' : 'School Chemistry Replay'}
          </p>
          <h2 className="text-2xl font-semibold text-foreground">{isZh ? '原电池' : 'Voltaic Cell'}</h2>
          <p className="text-sm leading-7 text-foreground/70">
            {isZh
              ? '课堂演示视频已切分为 4 段并接入站内播放器，便于在线加载、分段复习和定位重点内容。'
              : 'The lesson video is split into 4 sections and embedded with the site player for easier loading, review, and navigation.'}
          </p>
        </div>

        <div className="mt-6 grid gap-6">
          {parts.map((part) => (
            <article key={part.index} className="rounded-2xl border border-border/80 bg-neutral-50/70 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <div className="mb-3 flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {isZh ? part.zhTitle : part.enTitle}
                </h3>
                <p className="text-sm text-foreground/65">
                  {isZh ? '时间范围：' : 'Time range: '}
                  {isZh ? part.zhTime : part.enTime}
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
                <video
                  controls
                  preload="metadata"
                  className="aspect-video w-full"
                  aria-label={`${isZh ? '原电池课程回放' : 'Voltaic cell class replay'} ${part.index}`}
                >
                  <source src={part.src} type="video/mp4" />
                  {isZh ? '你的浏览器不支持 video 标签。' : 'Your browser does not support the video tag.'}
                </video>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
