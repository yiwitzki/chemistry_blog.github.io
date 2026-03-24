import Link from 'next/link';
import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function CompetitionPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '课程板块' : 'Curriculum'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '化学竞赛（CCC/UKChO）' : 'Chemistry Competition (CCC/UKChO)'}
        </h1>
      </section>

      <Link
        href={`/${locale}/competition/strategy`}
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">{isZh ? '备考策略' : 'Preparation Strategy'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '以知识模块为主线梳理无机、物化与有机基础，配合真题训练和错题回顾，逐步提升计算、推理与实验分析能力。'
            : 'Build a study plan around core chemistry topics, past-paper practice, and error review to strengthen calculation, reasoning, and experimental analysis.'}
        </p>
      </Link>

      <Link
        href={`/${locale}/competition/resources`}
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">{isZh ? '复习资料' : 'Study Resources'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '整理竞赛常用讲义、专题笔记、历年真题与阶段训练材料，方便按模块持续复习与查漏补缺。'
            : 'A curated set of competition notes, topic handouts, past papers, and training materials for structured review.'}
        </p>
      </Link>
    </Container>
  );
}
