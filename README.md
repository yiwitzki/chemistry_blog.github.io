# High School Chemistry Team Showcase (Bilingual)

A Next.js 14 bilingual showcase website for a high school chemistry team.

- Chinese routes: `/zh/*`
- English routes: `/en/*`
- Designed for **GitHub Pages static hosting**

## Tech Stack

- Next.js 14+ (App Router) + TypeScript
- TailwindCSS + `@tailwindcss/typography`
- Local MDX content system (`content/zh/publications`, `content/en/publications`)
- Static export (`output: export`)
- SEO: `sitemap.xml`, `robots.txt`, OpenGraph, Twitter Card

## Implemented Pages

- Home: `/zh`, `/en`
- About: `/zh/about`, `/en/about`
- Team list/detail: `/zh/team`, `/en/team`, `/zh/team/[slug]`, `/en/team/[slug]`
- Publications list:
  - `/zh/publications`
  - `/en/publications`
  - `/zh/publications/category/[category]`
  - `/en/publications/category/[category]`
- Publication detail:
  - `/zh/publications/[slug]`
  - `/en/publications/[slug]`
- Contact: `/zh/contact`, `/en/contact`
- Tags: `/zh/tags/[tag]`, `/en/tags/[tag]`

## Categories (Built-in)

- `fun-experiments` -> 化学趣味实验
- `chem-explained` -> 化学知识科普
- `chem-in-life` -> 生活与化学
- `green-chemistry` -> 绿色化学

Configured in `data/categories.ts`.

## Content System

Frontmatter supported in each MDX:

- `title: string`
- `slug: string`
- `date: ISO string`
- `summary: string`
- `category: "fun-experiments" | "chem-explained" | "chem-in-life" | "green-chemistry"`
- `categoryLabelZh?: string`
- `tags: string[]`
- `cover?: string`
- `authors: string[]`
- `contributors?: string[]` (team slug)
- `readingTime?: number`
- `difficulty?: "Intro" | "Intermediate" | "Advanced"`

If `readingTime` is missing, it is auto-calculated.

## Sample Data Included

- 20 Chinese publications (4 categories, each 5)
- 6 English publications
- 4 team members with contributor linkage
- MDX component demos: `Callout`, `Figure`, `VideoEmbed`, `Gallery`

## Local Development

Node.js 18+

```bash
npm install
npm run dev
```

Open:

- [http://localhost:3000/zh](http://localhost:3000/zh)
- [http://localhost:3000/en](http://localhost:3000/en)

## Build (Static Export)

```bash
npm run build
```

Exported static files are in `out/`.

## Deploy to GitHub Pages (Recommended)

This repo includes workflow: `.github/workflows/deploy-pages.yml`

1. Push to GitHub `main` branch.
2. Go to GitHub repo `Settings -> Pages`.
3. Set Source to `GitHub Actions`.
4. Workflow will build and deploy `out/` automatically.

### Important

`next.config.mjs` auto-detects GitHub Actions and sets `basePath/assetPrefix` using repo name.

## Contact Form on GitHub Pages

GitHub Pages is static-only, so server API routes are not available.

Current behavior:
- Form uses honeypot field for basic anti-spam.
- Submission opens a `mailto:` draft to `chem.team@example.com`.

If you need backend email sending (Resend/SendGrid/rate-limit API), deploy on Vercel or another platform with server functions.
