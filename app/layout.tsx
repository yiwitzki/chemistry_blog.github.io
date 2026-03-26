import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-touch-icon.svg'
  },
  title: {
    default: `${siteConfig.shortName} | Chemistry Showcase`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description.en,
  openGraph: {
    title: `${siteConfig.shortName} | Chemistry Showcase`,
    description: siteConfig.description.en,
    images: [siteConfig.ogImage],
    type: 'website',
    url: siteConfig.url
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.shortName} | Chemistry Showcase`,
    description: siteConfig.description.en,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
