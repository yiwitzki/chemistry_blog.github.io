#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import TurndownService from 'turndown';

const cwd = process.cwd();

const CATEGORY_SET = new Set([
  'fun-experiments',
  'chem-explained',
  'chem-in-life',
  'green-chemistry'
]);

function parseArgs(argv) {
  const args = {
    input: '',
    locale: 'zh',
    category: 'chem-explained',
    author: '公众号转载',
    tags: '',
    difficulty: 'Intro',
    dryRun: false
  };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input') args.input = argv[++i] || '';
    else if (token === '--locale') args.locale = argv[++i] || 'zh';
    else if (token === '--category') args.category = argv[++i] || 'chem-explained';
    else if (token === '--author') args.author = argv[++i] || '公众号转载';
    else if (token === '--tags') args.tags = argv[++i] || '';
    else if (token === '--difficulty') args.difficulty = argv[++i] || 'Intro';
    else if (token === '--dry-run') args.dryRun = true;
    else if (token === '--help' || token === '-h') args.help = true;
  }
  return args;
}

function usage() {
  console.log(`Usage:
  npm run import:wechat -- --input scripts/wechat-links.txt [options]

Options:
  --locale zh|en
  --category fun-experiments|chem-explained|chem-in-life|green-chemistry
  --author "作者名"
  --tags "标签1,标签2"
  --difficulty Intro|Intermediate|Advanced
  --dry-run

Input file format (one line one item):
  URL
  URL|title=自定义标题|date=2026-02-12|category=chem-explained|tags=电解质,科普`);
}

function slugify(input) {
  const ascii = input
    .toLowerCase()
    .replace(/[^\x00-\x7F]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return ascii || '';
}

function hash8(value) {
  return crypto.createHash('sha1').update(value).digest('hex').slice(0, 8);
}

function pickFirst(...items) {
  return items.find((item) => item && String(item).trim()) || '';
}

function extractByRegex(html, pattern) {
  const match = pattern.exec(html);
  return match?.[1]?.trim() || '';
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripTags(text) {
  return decodeHtmlEntities(text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function normalizeDate(raw) {
  if (!raw) return '';
  const text = String(raw).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text;
  if (/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(text)) {
    const [y, m, d] = text.split('/').map((v) => Number(v));
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }
  const zhFull = /^(\d{4})年(\d{1,2})月(\d{1,2})[日号]?$/u.exec(text);
  if (zhFull) {
    const y = Number(zhFull[1]);
    const m = Number(zhFull[2]);
    const d = Number(zhFull[3]);
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }
  const zhMD = /^(\d{1,2})月(\d{1,2})[日号]?$/u.exec(text);
  if (zhMD) {
    const nowYear = new Date().getFullYear();
    const m = Number(zhMD[1]);
    const d = Number(zhMD[2]);
    return `${nowYear}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }
  if (/^\d{10}$/.test(text)) return new Date(Number(text) * 1000).toISOString().slice(0, 10);
  const dt = new Date(text);
  if (Number.isNaN(dt.getTime())) return '';
  return dt.toISOString().slice(0, 10);
}

function parseInputLine(line) {
  const segments = line.split('|').map((s) => s.trim()).filter(Boolean);
  const url = segments[0];
  const options = {};
  for (const seg of segments.slice(1)) {
    const idx = seg.indexOf('=');
    if (idx === -1) continue;
    const key = seg.slice(0, idx).trim();
    const value = seg.slice(idx + 1).trim();
    options[key] = value;
  }
  return { url, options };
}

async function fetchHtml(url) {
  const resp = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    }
  });
  if (!resp.ok) {
    throw new Error(`Fetch failed: ${resp.status} ${resp.statusText}`);
  }
  return resp.text();
}

function extractWechatPayload(html) {
  const title = pickFirst(
    extractByRegex(html, /<meta\s+property="og:title"\s+content="([^"]+)"/i),
    extractByRegex(html, /<title[^>]*>([^<]+)<\/title>/i)
  );
  const contentHtml = pickFirst(
    extractByRegex(html, /<div[^>]+id="js_content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i),
    extractByRegex(html, /<div[^>]+id="js_content"[^>]*>([\s\S]*?)<\/div>/i)
  );
  const createTime = pickFirst(
    extractByRegex(html, /var\s+createTime\s*=\s*['"]?(\d{10})['"]?/i),
    extractByRegex(html, /d\.ct\s*=\s*['"]?(\d{10})['"]?/i)
  );
  return {
    title: stripTags(title),
    contentHtml,
    date: normalizeDate(createTime)
  };
}

function getAttr(tag, key) {
  const pattern = new RegExp(`${key}=["']([^"']+)["']`, 'i');
  const m = pattern.exec(tag);
  return m?.[1]?.trim() || '';
}

function normalizeImgUrl(raw) {
  if (!raw) return '';
  const decoded = decodeHtmlEntities(raw).trim();
  const withProtocol = decoded.startsWith('//') ? `https:${decoded}` : decoded;
  if (!/^https?:\/\//i.test(withProtocol)) return '';
  if (withProtocol.startsWith('data:')) return '';
  return withProtocol;
}

function extractImageUrls(html) {
  const result = [];
  const tags = html.match(/<img[^>]*>/gi) || [];
  for (const tag of tags) {
    const src = normalizeImgUrl(getAttr(tag, 'data-src')) || normalizeImgUrl(getAttr(tag, 'src'));
    if (src) result.push(src);
  }
  return [...new Set(result)];
}

function rewriteImageTags(html, imageUrlMap) {
  return html.replace(/<img[^>]*>/gi, (tag) => {
    const src = normalizeImgUrl(getAttr(tag, 'data-src')) || normalizeImgUrl(getAttr(tag, 'src'));
    if (!src) return '';
    const mapped = imageUrlMap.get(src) || src;
    const alt = decodeHtmlEntities(getAttr(tag, 'alt') || '');
    return `<img src="${mapped}" alt="${alt.replace(/"/g, "'")}" />`;
  });
}

async function downloadImage(url, targetDir, idx) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Image fetch failed: ${resp.status} ${url}`);
  const mime = resp.headers.get('content-type') || '';
  const ext =
    mime.includes('png') ? 'png' : mime.includes('webp') ? 'webp' : mime.includes('gif') ? 'gif' : 'jpg';
  const fileName = `img-${String(idx + 1).padStart(2, '0')}.${ext}`;
  const abs = path.join(targetDir, fileName);
  const rel = fileName;
  const buf = Buffer.from(await resp.arrayBuffer());
  await fs.writeFile(abs, buf);
  return rel;
}

function cleanHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\sstyle=["'][^"']*["']/gi, '')
    .replace(/<section[^>]*>/gi, '')
    .replace(/<\/section>/gi, '')
    .trim();
}

function htmlToMarkdown(html) {
  const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });
  td.keep(['iframe']);
  td.addRule('removeSpan', {
    filter: 'span',
    replacement(content) {
      return content;
    }
  });
  let md = td.turndown(html);
  md = md.replace(/\n{3,}/g, '\n\n').trim();
  return md;
}

function injectFigureBlocks(markdown) {
  return markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, src) => {
    const escapedAlt = String(alt || '').replace(/"/g, "'");
    return `<Figure src="${src}" alt="${escapedAlt}" />`;
  });
}

function makeFrontmatter(meta) {
  const tags = meta.tags.length ? meta.tags.map((t) => `"${t}"`).join(', ') : '"公众号", "化学"';
  const contributors = meta.contributors.length ? meta.contributors.map((c) => `"${c}"`).join(', ') : '';
  return `---
title: "${meta.title.replace(/"/g, "'")}"
slug: "${meta.slug}"
date: "${meta.date}"
summary: "${meta.summary.replace(/"/g, "'")}"
category: "${meta.category}"
categoryLabelZh: "${meta.categoryLabelZh}"
tags: [${tags}]
cover: "${meta.cover}"
authors: ["${meta.author.replace(/"/g, "'")}"]
contributors: [${contributors}]
difficulty: "${meta.difficulty}"
---
`;
}

async function run() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || !args.input) {
    usage();
    process.exit(args.help ? 0 : 1);
  }
  if (!CATEGORY_SET.has(args.category)) {
    throw new Error(`Invalid category: ${args.category}`);
  }

  const inputPath = path.resolve(cwd, args.input);
  const rawInput = await fs.readFile(inputPath, 'utf8');
  const lines = rawInput
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));

  const outDir = path.join(cwd, 'content', args.locale, 'publications');
  const publicRoot = path.join(cwd, 'public', 'images', 'uploads', 'wechat');
  await fs.mkdir(outDir, { recursive: true });
  await fs.mkdir(publicRoot, { recursive: true });

  const labelByCategory = {
    'fun-experiments': '化学趣味实验',
    'chem-explained': '化学知识科普',
    'chem-in-life': '生活与化学',
    'green-chemistry': '绿色化学'
  };

  const report = [];

  for (let i = 0; i < lines.length; i += 1) {
    const { url, options } = parseInputLine(lines[i]);
    if (!/^https?:\/\//i.test(url)) {
      console.warn(`[skip] invalid url: ${url}`);
      continue;
    }

    console.log(`[${i + 1}/${lines.length}] Fetching ${url}`);
    const html = await fetchHtml(url);
    const payload = extractWechatPayload(html);
    if (!payload.contentHtml) {
      console.warn(`[skip] no js_content found: ${url}`);
      continue;
    }

    const date = normalizeDate(options.date || payload.date) || new Date().toISOString().slice(0, 10);
    const title = options.title || payload.title || `公众号文章 ${i + 1}`;
    const slugBase = slugify(title);
    const slug = slugBase || `wechat-${date.replace(/-/g, '')}-${hash8(url)}`;

    const category = CATEGORY_SET.has(options.category) ? options.category : args.category;
    const tags = pickFirst(options.tags, args.tags)
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const imageUrls = extractImageUrls(payload.contentHtml);
    const imageDir = path.join(publicRoot, slug);
    const imageUrlMap = new Map();

    if (!args.dryRun && imageUrls.length) {
      await fs.mkdir(imageDir, { recursive: true });
      for (let j = 0; j < imageUrls.length; j += 1) {
        try {
          const rel = await downloadImage(imageUrls[j], imageDir, j);
          imageUrlMap.set(imageUrls[j], `/images/uploads/wechat/${slug}/${rel}`);
        } catch (err) {
          console.warn(`[warn] download image failed: ${imageUrls[j]} (${err.message})`);
        }
      }
    }

    let contentHtml = cleanHtml(payload.contentHtml);
    contentHtml = rewriteImageTags(contentHtml, imageUrlMap);

    let markdown = htmlToMarkdown(contentHtml);
    markdown = injectFigureBlocks(markdown);
    if (!markdown.includes('##')) {
      markdown = `## 正文\n\n${markdown}`;
    }

    const summary = stripTags(payload.contentHtml).slice(0, 120);
    const cover =
      imageUrlMap.size > 0
        ? Array.from(imageUrlMap.values())[0]
        : '/images/covers/titration.svg';

    const frontmatter = makeFrontmatter({
      title,
      slug,
      date,
      summary,
      category,
      categoryLabelZh: labelByCategory[category],
      tags,
      cover,
      author: options.author || args.author,
      contributors: options.contributors ? options.contributors.split(',').map((v) => v.trim()) : [],
      difficulty: options.difficulty || args.difficulty
    });

    const outFile = path.join(outDir, `${slug}.mdx`);
    if (!args.dryRun) {
      await fs.writeFile(outFile, `${frontmatter}\n${markdown}\n`, 'utf8');
    }

    report.push({ url, title, slug, outFile });
    console.log(`[ok] ${slug}`);
  }

  const reportPath = path.join(cwd, 'scripts', 'wechat-import-report.json');
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`Done. ${report.length} article(s) processed.`);
  console.log(`Report: ${reportPath}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
