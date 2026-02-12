import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { cache } from 'react';
import { z } from 'zod';
import { categories, categoryMap, isCategorySlug, type CategorySlug } from '@/data/categories';
import type { Locale } from '@/data/site';
import { normalizeTag } from '@/lib/utils';

const contentRoot = path.join(process.cwd(), 'content');

const publicationSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  summary: z.string(),
  category: z.enum(['fun-experiments', 'chem-explained', 'chem-in-life', 'green-chemistry']),
  categoryLabelZh: z.string().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  authors: z.array(z.string()).default([]),
  contributors: z.array(z.string()).default([]),
  readingTime: z.number().optional(),
  difficulty: z.enum(['Intro', 'Intermediate', 'Advanced']).optional(),
  references: z.array(z.string()).optional()
});

export type PublicationMeta = z.infer<typeof publicationSchema> & {
  locale: Locale;
  year: string;
  readingTimeText: string;
};

export type PublicationDetail = PublicationMeta & {
  body: string;
  toc: Heading[];
};

export type Heading = {
  level: 2 | 3;
  text: string;
  id: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fa5\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function getContentDir(locale: Locale) {
  return path.join(contentRoot, locale, 'publications');
}

function getFiles(locale: Locale) {
  const dir = getContentDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

function parseFrontmatter(locale: Locale, fileName: string): PublicationMeta {
  const fullPath = path.join(getContentDir(locale), fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  const meta = publicationSchema.parse(data);
  const minutes = meta.readingTime ?? Math.max(1, Math.ceil(readingTime(content).minutes));

  return {
    ...meta,
    tags: meta.tags.map((tag) => normalizeTag(tag)),
    locale,
    year: new Date(meta.date).getFullYear().toString(),
    readingTime: minutes,
    readingTimeText: `${minutes} min read`
  };
}

function extractHeadings(source: string): Heading[] {
  return source
    .split('\n')
    .map((line) => /^(#{2,3})\s+(.+)$/.exec(line.trim()))
    .filter((line): line is RegExpExecArray => Boolean(line))
    .map((match) => ({
      level: match[1].length as 2 | 3,
      text: match[2].replace(/`/g, '').trim(),
      id: slugify(match[2].replace(/`/g, '').trim())
    }));
}

export const getPublicationIndex = cache((locale: Locale) => {
  return getFiles(locale)
    .map((fileName) => parseFrontmatter(locale, fileName))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
});

export function getPublicationFilters(locale: Locale) {
  const items = getPublicationIndex(locale);
  const years = Array.from(new Set(items.map((item) => item.year))).sort((a, b) => +b - +a);
  const tags = Array.from(new Set(items.flatMap((item) => item.tags))).sort();
  const difficulties = Array.from(new Set(items.map((item) => item.difficulty).filter(Boolean))) as Array<
    NonNullable<PublicationMeta['difficulty']>
  >;

  return { years, tags, difficulties };
}

export function filterPublications(
  items: PublicationMeta[],
  filters: {
    category?: string;
    q?: string;
    year?: string;
    tag?: string;
    difficulty?: string;
  }
) {
  return items.filter((item) => {
    const matchesCategory = !filters.category || filters.category === item.category;
    const q = filters.q?.toLowerCase().trim();
    const matchesQuery =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.includes(q));
    const matchesYear = !filters.year || filters.year === 'all' || item.year === filters.year;
    const matchesTag = !filters.tag || filters.tag === 'all' || item.tags.includes(filters.tag);
    const matchesDifficulty =
      !filters.difficulty || filters.difficulty === 'all' || item.difficulty === filters.difficulty;

    return matchesCategory && matchesQuery && matchesYear && matchesTag && matchesDifficulty;
  });
}

export function getRelatedArticles(locale: Locale, article: PublicationMeta, limit = 3) {
  const all = getPublicationIndex(locale).filter((item) => item.slug !== article.slug && item.category === article.category);
  const scored = all
    .map((item) => {
      const overlap = item.tags.filter((tag) => article.tags.includes(tag)).length;
      return { item, score: overlap };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return +new Date(b.item.date) - +new Date(a.item.date);
    })
    .slice(0, limit)
    .map((entry) => entry.item);

  return scored;
}

export const getAllTags = cache((locale: Locale) => {
  return Array.from(new Set(getPublicationIndex(locale).flatMap((item) => item.tags))).sort();
});

export const getPublicationContent = cache((locale: Locale, slug: string): PublicationDetail | null => {
  const filePath = path.join(getContentDir(locale), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const meta = publicationSchema.parse(data);
  const minutes = meta.readingTime ?? Math.max(1, Math.ceil(readingTime(content).minutes));

  return {
    ...meta,
    locale,
    year: new Date(meta.date).getFullYear().toString(),
    readingTime: minutes,
    readingTimeText: `${minutes} min read`,
    tags: meta.tags.map((tag) => normalizeTag(tag)),
    body: content,
    toc: extractHeadings(content)
  };
});

export function getCategoryLabel(category: CategorySlug, locale: Locale) {
  const item = categoryMap[category];
  return locale === 'zh' ? item.zh : item.en;
}

export function ensureCategory(category: string): CategorySlug {
  return isCategorySlug(category) ? category : categories[0].slug;
}
