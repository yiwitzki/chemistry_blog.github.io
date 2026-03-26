import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

const organicCourseLink = 'https://m.shsbnu.net/course/view.php?id=477';

export default function OrganicChemistryResourcesPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '有机化学' : 'Organic Chemistry'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '复习资料' : 'Study Resources'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm leading-7 text-foreground/75">
          {isZh
            ? '这里可以继续整理有机化学反应清单、机理图谱、专题讲义和结构推断题，后续补内容会很方便。'
            : 'Use this page for reaction lists, mechanism maps, topic handouts, and structure-deduction exercises.'}
        </p>
      </section>

      <a
        href={organicCourseLink}
        target="_blank"
        rel="noreferrer"
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">
          {isZh ? '有机化学课程与资料入口' : 'Organic Chemistry Course and Materials'}
        </h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '点开后即可获得资料和课程。'
            : 'Open this link to access the course and study materials.'}
        </p>
        <p className="mt-2 text-xs text-foreground/60">{organicCourseLink}</p>
      </a>
    </Container>
  );
}
