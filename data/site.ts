import type { CategorySlug } from '@/data/categories';

export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English'
};

export const defaultLocale: Locale = 'zh';

export const siteConfig = {
  name: {
    en: 'Fun Chemistry',
    zh: 'Fun Chemistry'
  },
  shortName: 'Fun Chemistry',
  description: {
    en: 'A bilingual high-school chemistry site featuring club publications, curriculum review, competition prep, AP Chemistry, and organic chemistry resources.',
    zh: '面向高中化学团队的中英双语展示网站，聚焦社团成果、课程回放、竞赛备考、AP化学与有机化学。'
  },
  url: 'https://shsbnuchem.com',
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
      { href: '/publications', label: 'Original Articles' },
      { href: '/curriculum', label: 'School Chemistry' },
      { href: '/competition', label: 'Competition' },
      { href: '/ap-chemistry', label: 'AP Chemistry' },
      { href: '/organic-chemistry', label: 'Organic Chemistry' },
      { href: '/contact', label: 'Contact' }
    ],
    zh: [
      { href: '/about', label: '关于' },
      { href: '/team', label: '团队' },
      { href: '/publications', label: '社团原创文章' },
      { href: '/curriculum', label: '校内国家课程' },
      { href: '/competition', label: '化学竞赛（CCC/UKChO）' },
      { href: '/ap-chemistry', label: 'AP化学' },
      { href: '/organic-chemistry', label: '有机化学' },
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
