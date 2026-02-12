'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeNames, type Locale } from '@/data/site';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || '/';

  const altLocale: Locale = locale === 'en' ? 'zh' : 'en';
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    segments[0] = altLocale;
  }

  return (
    <Link
      href={`/${segments.join('/')}`}
      className="rounded-lg border border-border px-3 py-1 text-sm no-underline hover:border-accent"
      aria-label={`Switch language to ${localeNames[altLocale]}`}
    >
      {localeNames[altLocale]}
    </Link>
  );
}
