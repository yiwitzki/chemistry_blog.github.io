import Link from 'next/link';
import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

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

      <Link
        href={`/${locale}/organic-chemistry/strategy`}
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">{isZh ? '备考策略' : 'Preparation Strategy'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '建议从官能团、命名、反应类型与机理入手建立知识框架，配合例题训练和反应网络整理，提升有机推断与书写能力。'
            : 'Build a study framework around functional groups, nomenclature, reaction types, and mechanisms, then reinforce it with reaction mapping and practice.'}
        </p>
      </Link>

      <Link
        href={`/${locale}/organic-chemistry/resources`}
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">{isZh ? '复习资料' : 'Study Resources'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '这里可以集中整理有机化学反应汇总、结构推断练习、机理讲义和专题笔记，方便后续系统复习。'
            : 'Use this section to organize reaction summaries, structure-deduction drills, mechanism notes, and topic-based materials.'}
        </p>
      </Link>
    </Container>
  );
}
