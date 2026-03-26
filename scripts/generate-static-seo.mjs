import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const contentDir = path.join(rootDir, 'content', 'zh', 'publications');

const siteUrl = 'https://shsbnuchem.com';
const locales = ['zh', 'en'];
const staticRoutes = ['', '/about', '/team', '/publications', '/contact'];
const categorySlugs = ['fun-experiments', 'chem-explained', 'chem-in-life', 'green-chemistry'];

function normalizeTag(tag) {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toAbsoluteUrl(route) {
  return new URL(encodeURI(route), `${siteUrl}/`).toString();
}

function getPublicationMeta() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(contentDir, fileName);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(raw);

      return {
        slug: String(data.slug),
        tags: Array.isArray(data.tags) ? data.tags.map((tag) => normalizeTag(String(tag))) : []
      };
    });
}

function buildSitemapXml(routes) {
  const lastModified = new Date().toISOString();
  const entries = routes
    .map(
      (route) => `  <url>
    <loc>${escapeXml(toAbsoluteUrl(route))}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.endsWith('/contact') ? '0.6' : '0.8'}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-Agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function main() {
  fs.mkdirSync(publicDir, { recursive: true });

  const publicationMeta = getPublicationMeta();
  const publicationRoutes = publicationMeta.flatMap((item) =>
    locales.map((locale) => `/${locale}/publications/${item.slug}`)
  );
  const tagRoutes = Array.from(new Set(publicationMeta.flatMap((item) => item.tags))).flatMap((tag) =>
    locales.map((locale) => `/${locale}/tags/${tag}`)
  );
  const categoryRoutes = categorySlugs.flatMap((category) =>
    locales.map((locale) => `/${locale}/publications/category/${category}`)
  );
  const localeStaticRoutes = locales.flatMap((locale) => staticRoutes.map((route) => `/${locale}${route}`));

  const routes = Array.from(new Set([...localeStaticRoutes, ...categoryRoutes, ...publicationRoutes, ...tagRoutes]));

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), buildRobotsTxt(), 'utf8');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), buildSitemapXml(routes), 'utf8');
}

main();
