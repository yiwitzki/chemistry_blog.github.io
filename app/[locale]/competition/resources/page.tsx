import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function CompetitionResourcesPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '化学竞赛' : 'Competition'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '复习资料' : 'Study Resources'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm leading-7 text-foreground/75">
          {isZh
            ? '这里可以继续补充竞赛讲义、专题练习、真题汇编和实验资料，后续你只要把内容往这个页面里加就行。'
            : 'Use this page to collect handouts, topic exercises, past papers, and lab resources for competition review.'}
        </p>
      </section>
    </Container>
  );
}
