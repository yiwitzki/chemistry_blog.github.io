import type { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { locales, siteConfig } from '@/data/site';
import { getAllTags, getPublicationIndex } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/team', '/publications', '/contact'];

  const routes = locales.flatMap((locale) => {
    const categoryRoutes = categories.map((category) => `/${locale}/publications/category/${category.slug}`);
    const publicationRoutes = getPublicationIndex(locale).map((item) => `/${locale}/publications/${item.slug}`);
    const tagRoutes = getAllTags(locale).map((tag) => `/${locale}/tags/${tag}`);
    return [...staticRoutes.map((route) => `/${locale}${route}`), ...categoryRoutes, ...publicationRoutes, ...tagRoutes];
  });

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route.endsWith('/contact') ? 0.6 : 0.8
  }));
}
