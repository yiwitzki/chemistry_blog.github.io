import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function ApChemistryResourcesPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? 'AP化学' : 'AP Chemistry'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '复习资料' : 'Study Resources'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm leading-7 text-foreground/75">
          {isZh
            ? '这里可以放 AP Chemistry 的单元笔记、FRQ 训练、公式总结和实验题资料，方便后续持续整理。'
            : 'Use this page for AP Chemistry unit notes, FRQ drills, formula summaries, and lab-related resources.'}
        </p>
      </section>
    </Container>
  );
}
