'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Input, Select } from '@/components/ui';

type PublicationsFiltersProps = {
  years: string[];
  tags: string[];
  difficulties: string[];
};

export function PublicationsFilters({ years, tags, difficulties }: PublicationsFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string) {
    const next = new URLSearchParams(searchParams.toString());
    if (!value || value === 'all') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    router.push(`?${next.toString()}`);
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-soft">
      <div className="grid gap-3 md:grid-cols-5">
        <label className="md:col-span-2">
          <span className="mb-1 block text-xs font-medium">Search</span>
          <Input
            defaultValue={searchParams.get('q') ?? ''}
            placeholder="title, summary, tag"
            onChange={(e) => updateParam('q', e.target.value)}
          />
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium">Year</span>
          <Select defaultValue={searchParams.get('year') ?? 'all'} onChange={(e) => updateParam('year', e.target.value)}>
            <option value="all">All</option>
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium">Tag</span>
          <Select defaultValue={searchParams.get('tag') ?? 'all'} onChange={(e) => updateParam('tag', e.target.value)}>
            <option value="all">All</option>
            {tags.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium">Difficulty</span>
          <Select
            defaultValue={searchParams.get('difficulty') ?? 'all'}
            onChange={(e) => updateParam('difficulty', e.target.value)}
          >
            <option value="all">All</option>
            {difficulties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </label>
      </div>
    </section>
  );
}
