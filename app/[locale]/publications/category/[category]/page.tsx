import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui';
import { CategoryTabs } from '@/components/category-tabs';
import { PublicationsFilters } from '@/components/publications-filters';
import { PublicationsListClient } from '@/components/publications-list-client';
import { categories, isCategorySlug } from '@/data/categories';
import { getPublicationFilters, getPublicationIndex } from '@/lib/content';
import { dictionary, getLocaleFromParams } from '@/lib/i18n';

export function generateStaticParams() {
  return categories.map((category) => ({ locale: 'zh', category: category.slug }));
}

export default function PublicationsCategoryPage({ params }: { params: { locale: string; category: string } }) {
  const locale = getLocaleFromParams(params.locale);
  if (!isCategorySlug(params.category)) notFound();

  const t = dictionary[locale];
  const category = params.category;

  const all = getPublicationIndex(locale);
  const items = all.filter((item) => item.category === category);
  const filterOptions = getPublicationFilters(locale);

  return (
    <Container className="space-y-6 py-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">{t.publications}</h1>
        <p className="text-sm text-foreground/75">
          {locale === 'zh'
            ? '按四大方向、关键词与标签筛选，默认按日期倒序。'
            : 'Filter by category, keyword, and tags. Articles are sorted by latest date.'}
        </p>
        <CategoryTabs locale={locale} current={category} />
      </section>

      <Suspense fallback={<div className="rounded-2xl border border-border bg-card p-4 text-sm">Loading filters...</div>}>
        <PublicationsFilters
          years={filterOptions.years}
          tags={filterOptions.tags}
          difficulties={filterOptions.difficulties}
        />
      </Suspense>

      <Suspense fallback={<p className="text-sm text-foreground/70">Loading articles...</p>}>
        <PublicationsListClient locale={locale} items={items} noResultsText={t.noResults} />
      </Suspense>
    </Container>
  );
}
