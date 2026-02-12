import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | 化学成果展示`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description.zh,
  openGraph: {
    title: `${siteConfig.shortName} | 化学成果展示`,
    description: siteConfig.description.zh,
    images: [siteConfig.ogImage],
    type: 'website',
    url: siteConfig.url
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.shortName} | 化学成果展示`,
    description: siteConfig.description.zh,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
