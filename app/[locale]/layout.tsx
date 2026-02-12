import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Container } from '@/components/ui';
import { isLocale } from '@/lib/i18n';
import { defaultLocale, locales, siteConfig } from '@/data/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return {
    title: siteConfig.name[locale],
    description: siteConfig.description[locale],
    alternates: {
      canonical: `/${locale}`
    }
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar locale={locale} />
      <Container className="pt-4">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </Container>
      <main id="main-content">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
