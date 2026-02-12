'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { PublicationCard } from '@/components/publication-card';
import type { PublicationMeta } from '@/lib/content';
import type { Locale } from '@/data/site';

type PublicationsListClientProps = {
  locale: Locale;
  items: PublicationMeta[];
  noResultsText: string;
};

export function PublicationsListClient({ items, noResultsText }: PublicationsListClientProps) {
  const searchParams = useSearchParams();

  const filtered = useMemo(() => {
    const q = (searchParams.get('q') || '').toLowerCase().trim();
    const year = searchParams.get('year') || '';
    const tag = searchParams.get('tag') || '';
    const difficulty = searchParams.get('difficulty') || '';

    return items.filter((item) => {
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((t) => t.includes(q));
      const matchesYear = !year || year === 'all' || item.year === year;
      const matchesTag = !tag || tag === 'all' || item.tags.includes(tag);
      const matchesDifficulty = !difficulty || difficulty === 'all' || item.difficulty === difficulty;
      return matchesQuery && matchesYear && matchesTag && matchesDifficulty;
    });
  }, [items, searchParams]);

  if (!filtered.length) {
    return <p className="text-sm text-foreground/70">{noResultsText}</p>;
  }

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((item) => (
        <PublicationCard key={item.slug} publication={item} />
      ))}
    </section>
  );
}
