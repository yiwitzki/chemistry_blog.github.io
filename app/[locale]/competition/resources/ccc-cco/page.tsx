import Link from 'next/link';
import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function CccCcoResourcesPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '化学竞赛' : 'Competition'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">CCC/CCO</h1>
      </section>

      <Link
        href={`/${locale}/competition/resources/ccc-cco/knowledge-summary`}
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">{isZh ? '知识汇总' : 'Knowledge Summary'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '将 CCC/CCO 的讲义与复习资料统一汇总在这里，点击后即可查看全部文件。'
            : 'A single entry point for CCC/CCO handouts and revision materials.'}
        </p>
      </Link>

      <Link
        href={`/${locale}/competition/resources/ccc-cco/topic-past-papers`}
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">{isZh ? '知识点对应真题' : 'Topic-Based Past Papers'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '按知识点整理 CCC/CCO 真题，方便针对性复习与查缺补漏。'
            : 'Practice CCC/CCO past-paper questions grouped by topic.'}
        </p>
      </Link>
    </Container>
  );
}
