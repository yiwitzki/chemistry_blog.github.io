import Link from 'next/link';
import { siteConfig, socialLinks, type Locale } from '@/data/site';
import { Container } from '@/components/ui';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-20 border-t border-border py-8">
      <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-sm text-foreground/80">© {new Date().getFullYear()} {siteConfig.name[locale]}</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href={`/${locale}/contact`}>Contact</Link>
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
