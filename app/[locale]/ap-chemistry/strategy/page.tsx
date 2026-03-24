import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function ApChemistryStrategyPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? 'AP化学' : 'AP Chemistry'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '备考策略' : 'Preparation Strategy'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm leading-7 text-foreground/75">
          {isZh
            ? '建议按单元复习并同步整理 FRQ 与 MCQ 错题，重点关注实验设计、数据分析、平衡体系和电化学等高频考点。'
            : 'Review by unit while tracking FRQ and MCQ mistakes, with special focus on lab design, data analysis, equilibrium systems, and electrochemistry.'}
        </p>
      </section>
    </Container>
  );
}
