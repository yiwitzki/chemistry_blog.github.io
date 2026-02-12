export const categories = [
  {
    slug: 'fun-experiments',
    zh: '化学趣味实验',
    en: 'Fun Experiments',
    descriptionZh: '可复现、现象明显、适合展示的实验设计。',
    descriptionEn: 'Hands-on experiments with clear observations and reproducible steps.',
    icon: 'FlaskConical'
  },
  {
    slug: 'chem-explained',
    zh: '化学知识科普',
    en: 'Chemistry Explained',
    descriptionZh: '把抽象概念讲清楚，连接课程知识与科学思维。',
    descriptionEn: 'Clear explainers connecting textbook concepts to scientific thinking.',
    icon: 'BookOpen'
  },
  {
    slug: 'chem-in-life',
    zh: '生活与化学',
    en: 'Chemistry in Daily Life',
    descriptionZh: '从日常现象切入，理解化学在真实世界中的作用。',
    descriptionEn: 'Chemistry insights drawn from daily life and practical decisions.',
    icon: 'Home'
  },
  {
    slug: 'green-chemistry',
    zh: '绿色化学',
    en: 'Green Chemistry',
    descriptionZh: '围绕低风险、低废弃、可持续的实验与研究实践。',
    descriptionEn: 'Sustainable, low-risk, low-waste chemistry practices for schools.',
    icon: 'Leaf'
  }
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export const categoryMap = Object.fromEntries(categories.map((item) => [item.slug, item])) as Record<CategorySlug, (typeof categories)[number]>;

export function isCategorySlug(value: string): value is CategorySlug {
  return categories.some((item) => item.slug === value);
}
