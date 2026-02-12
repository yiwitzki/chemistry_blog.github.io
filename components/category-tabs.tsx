import Link from 'next/link';
import { categories, type CategorySlug } from '@/data/categories';
import type { Locale } from '@/data/site';
import { cn } from '@/lib/utils';

type CategoryTabsProps = {
  locale: Locale;
  current: CategorySlug;
};

export function CategoryTabs({ locale, current }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((item) => {
        const href = `/${locale}/publications/category/${item.slug}`;
        return (
          <Link
            key={item.slug}
            href={href}
            className={cn(
              'rounded-full border px-4 py-2 text-sm no-underline',
              current === item.slug ? 'border-primary bg-primary text-white' : 'border-border hover:border-accent'
            )}
          >
            {locale === 'zh' ? item.zh : item.en}
          </Link>
        );
      })}
    </div>
  );
}
