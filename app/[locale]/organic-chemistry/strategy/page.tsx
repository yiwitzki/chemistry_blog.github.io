import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function OrganicChemistryStrategyPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '有机化学' : 'Organic Chemistry'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '备考策略' : 'Preparation Strategy'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm leading-7 text-foreground/75">
          {isZh
            ? '建议先按官能团梳理常见反应，再结合机理分析、条件判断和结构推断练习，逐步形成完整的有机知识网络。'
            : 'Review by functional group first, then connect mechanisms, reaction conditions, and structure-deduction practice into a complete organic framework.'}
        </p>
      </section>
    </Container>
  );
}
