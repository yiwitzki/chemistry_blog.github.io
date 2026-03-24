'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeNames, locales, type Locale } from '@/data/site';
import { cn } from '@/lib/utils';

function swapLocale(pathname: string, nextLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) return `/${nextLocale}`;

  if (locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
    return `/${segments.join('/')}`;
  }

  return `/${nextLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}

export function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div className={cn('inline-flex items-center gap-1 rounded-full border border-border bg-white/70 p-1', className)}>
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={swapLocale(pathname, item)}
            className={cn(
              'rounded-full px-3 py-1 text-xs font-medium no-underline transition',
              active ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white hover:text-foreground'
            )}
          >
            {localeNames[item]}
          </Link>
        );
      })}
    </div>
  );
}
