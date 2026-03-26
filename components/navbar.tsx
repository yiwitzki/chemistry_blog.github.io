'use client';

import Image from 'next/image';
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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex min-w-0 items-center gap-3 font-semibold text-foreground no-underline">
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-white/90 shadow-sm">
            <Image
              src="/images/school-badge.png"
              alt="The Second High School Attached to BNU badge"
              fill
              sizes="56px"
              className="object-contain p-0.5"
              priority
            />
          </span>
          <span className="truncate">{siteConfig.name[locale]}</span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav
            className="items-center gap-2 rounded-full border border-white/50 bg-white/45 px-3 py-2 shadow-[0_10px_30px_rgba(104,150,98,0.08)] md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="rounded-full px-3 py-1.5 text-sm no-underline transition hover:bg-white/80 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} />
        </div>

        <button
          className="inline-flex rounded-lg border border-border bg-white/60 p-2 shadow-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div id="mobile-nav" className={cn('border-t border-border bg-white/75 backdrop-blur md:hidden', open ? 'block' : 'hidden')}>
        <Container className="grid gap-2 py-3">
          <LanguageSwitcher locale={locale} className="mb-2 w-fit" />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="rounded-lg px-2 py-2 text-sm no-underline transition hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
