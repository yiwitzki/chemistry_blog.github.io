import type { CategorySlug } from '@/data/categories';

export const locales = ['zh'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  zh: '中文'
};

export const defaultLocale: Locale = 'zh';

export const siteConfig = {
  name: {
    en: 'SHSBNU. Chem',
    zh: 'SHSBNU. Chem'
  },
  shortName: 'SHSBNU. Chem',
  description: {
    en: 'A bilingual showcase for high school chemistry experiments, explainers, life applications, and green chemistry.',
    zh: '面向高中化学团队的中英双语成果展示站，聚焦实验、科普、生活应用与绿色化学。'
  },
  url: 'https://example.vercel.app',
  ogImage: '/images/covers/titration.svg',
  author: {
    name: 'Chem Team Editorial Group',
    email: 'chem.team@example.com'
  },
  stats: {
    activities: 42,
    reach: '2500+'
  },
  navItems: {
    en: [
      { href: '/about', label: 'About' },
      { href: '/team', label: 'Team' },
      { href: '/publications', label: 'Publications' },
      { href: '/contact', label: 'Contact' }
    ],
    zh: [
      { href: '/about', label: '关于' },
      { href: '/team', label: '团队' },
      { href: '/publications', label: '成果' },
      { href: '/contact', label: '联系' }
    ]
  } as const,
  defaultCategory: 'fun-experiments' as CategorySlug
};

export const socialLinks = [
  { label: 'GitHub', href: '' },
  { label: 'Bilibili', href: '' },
  { label: 'YouTube', href: '' }
];
