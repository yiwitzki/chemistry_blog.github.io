import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge, Container } from '@/components/ui';
import { TOC } from '@/components/toc';
import { MDXRenderer } from '@/components/mdx-renderer';
import { teamMembers } from '@/data/team';
import { getCategoryLabel, getPublicationContent, getPublicationIndex, getRelatedArticles } from '@/lib/content';
import { dictionary, getLocaleFromParams } from '@/lib/i18n';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  const en = getPublicationIndex('en').map((item) => ({ locale: 'en', slug: item.slug }));
  const zh = getPublicationIndex('zh').map((item) => ({ locale: 'zh', slug: item.slug }));
  return [...en, ...zh];
}

export default async function PublicationDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const t = dictionary[locale];

  const article = getPublicationContent(locale, params.slug);
  if (!article) notFound();

  const meta = getPublicationIndex(locale).find((item) => item.slug === article.slug);
  const related = meta ? getRelatedArticles(locale, meta, 3) : [];
  const contributors = teamMembers.filter((member) => article.contributors?.includes(member.slug));

  return (
    <Container className="py-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <Link href={`/${locale}/publications/category/${article.category}`} className="text-sm">
            {locale === 'zh' ? '← 返回分类列表' : '← Back to category'}
          </Link>

          <header className="space-y-3">
            <div className="flex flex-wrap gap-2 text-xs text-foreground/70">
              <Badge>{getCategoryLabel(article.category, locale)}</Badge>
              {article.difficulty ? <Badge>{article.difficulty}</Badge> : null}
              <Badge>{formatDate(article.date, locale)}</Badge>
              <Badge>{article.readingTimeText}</Badge>
            </div>
            <h1 className="text-3xl font-bold leading-tight">{article.title}</h1>
            <p className="text-foreground/80">{article.summary}</p>
            <p className="text-sm text-foreground/70">
              {t.authors}: {article.authors.join(', ')}
            </p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link key={tag} href={`/${locale}/tags/${tag}`}>
                  <Badge>#{tag}</Badge>
                </Link>
              ))}
            </div>
          </header>

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <MDXRenderer source={article.body} />
          </div>

          {article.references?.length ? (
            <section className="rounded-xl border border-border p-4">
              <h2 className="text-lg font-semibold">References</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
                {article.references.map((ref) => (
                  <li key={ref}>{ref}</li>
                ))}
              </ol>
            </section>
          ) : null}

          <section className="rounded-xl border border-border p-4">
            <h2 className="text-lg font-semibold">{t.contributors}</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {contributors.map((member) => (
                <li key={member.slug}>
                  <Link
                    href={`/${locale}/team/${member.slug}`}
                    className="block rounded-xl border border-border px-4 py-3 no-underline transition hover:bg-secondary/50"
                  >
                    <p className="text-sm font-semibold">{member.name}</p>
                    <p className="mt-1 text-xs text-foreground/70">
                      {locale === 'zh' ? '角色' : 'Role'}: {member.role}
                    </p>
                    <p className="text-xs text-foreground/70">
                      {locale === 'zh' ? '职责' : 'Focus'}: {member.focus}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border p-4">
            <h2 className="text-lg font-semibold">{t.related}</h2>
            <ul className="mt-2 grid gap-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${locale}/publications/${item.slug}`} className="text-sm no-underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <TOC headings={article.toc} />
        </div>
      </div>
    </Container>
  );
}
