import Link from 'next/link';
import { siteConfig, socialLinks, type Locale } from '@/data/site';
import { Container } from '@/components/ui';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="relative mt-8 border-t border-border py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(111,176,103,0.65)] to-transparent"
      />
      <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-sm text-foreground/80">© {new Date().getFullYear()} {siteConfig.name[locale]}</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href={`/${locale}/contact`}>{locale === 'zh' ? '联系' : 'Contact'}</Link>
          {socialLinks.map((item) =>
            item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : null
          )}
        </div>
      </Container>
    </footer>
  );
}
