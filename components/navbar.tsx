'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig, type Locale } from '@/data/site';
import { Container } from '@/components/ui';
import { LanguageSwitcher } from '@/components/language-switcher';
import { cn } from '@/lib/utils';

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const navItems = siteConfig.navItems[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="font-semibold text-foreground no-underline">
          {siteConfig.name[locale]}
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`} className="text-sm no-underline hover:text-accent">
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
        </nav>

        <button
          className="inline-flex rounded-lg border border-border p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div id="mobile-nav" className={cn('border-t border-border md:hidden', open ? 'block' : 'hidden')}>
        <Container className="grid gap-2 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="rounded-lg px-2 py-2 text-sm no-underline hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
        </Container>
      </div>
    </header>
  );
}
