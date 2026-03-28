import Image from 'next/image';
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
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm text-foreground/80">
            &copy; {new Date().getFullYear()} {siteConfig.name[locale]}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href={`/${locale}/contact`}>{locale === 'zh' ? '\u8054\u7cfb' : 'Contact'}</Link>
            {socialLinks.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ) : null
            )}
          </div>
        </div>

        <div className="ml-auto">
          <Image
            src="/images/branding/bnu-attached-school-wordmark-hd.png"
            alt="The Second High School Attached to BNU"
            width={2358}
            height={648}
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 280px"
            className="h-auto w-[180px] max-w-full opacity-95 sm:w-[220px] md:w-[280px]"
          />
        </div>
      </Container>
    </footer>
  );
}
