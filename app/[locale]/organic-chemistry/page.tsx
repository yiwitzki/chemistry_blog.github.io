import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

const organicCourseLink = 'https://m.shsbnu.net/course/view.php?id=477';

export default function OrganicChemistryPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '课程板块' : 'Curriculum'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '有机化学' : 'Organic Chemistry'}
        </h1>
      </section>

      <a
        href={organicCourseLink}
        target="_blank"
        rel="noreferrer"
        className="block rounded-3xl border border-border bg-card p-8 md:p-10 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {isZh ? '点此进入有机化学课程与资料' : 'Open Organic Chemistry Course and Materials'}
        </h2>
        <p className="mt-4 text-base font-medium leading-8 text-foreground/85 md:text-lg">
          {isZh ? '点开后即可获得资料和课程。' : 'Open this link to access the course and study materials.'}
        </p>
        <p className="mt-4 text-sm text-foreground/65 md:text-base">{organicCourseLink}</p>
      </a>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-lg font-semibold text-foreground">{isZh ? '下一步' : 'Next Step'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/80">
          {isZh
            ? '进入链接后，先查看课程目录，再按顺序打开讲义或课程内容开始学习；如果需要复习，优先看对应专题资料。'
            : 'After opening the link, check the course directory first, then open the lectures or materials in order; if you are reviewing, start with the topic handouts you need most.'}
        </p>
      </section>
    </Container>
  );
}
