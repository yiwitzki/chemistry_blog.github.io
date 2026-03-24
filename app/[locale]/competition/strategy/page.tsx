import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function CompetitionStrategyPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '化学竞赛' : 'Competition'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '备考策略' : 'Preparation Strategy'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm leading-7 text-foreground/75">
          {isZh
            ? '建议按专题建立复习计划，先夯实无机、热化学、平衡、电化学和有机基础，再通过历年题与限时训练提升综合解题速度。'
            : 'Study by topic, solidify fundamentals first, and then use timed past-paper practice to improve integrated problem-solving speed.'}
        </p>
      </section>
    </Container>
  );
}
