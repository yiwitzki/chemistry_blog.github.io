import Link from 'next/link';
import Image from 'next/image';
import { Beaker, BookOpen, Home, Leaf } from 'lucide-react';
import { Badge, Container } from '@/components/ui';
import { HomeQuickNav } from '@/components/home-quick-nav';
import { categories } from '@/data/categories';
import { getPublicationIndex, type PublicationMeta } from '@/lib/content';
import { dictionary, getLocaleFromParams } from '@/lib/i18n';
import { assetPath } from '@/lib/asset';

const iconMap = {
  FlaskConical: Beaker,
  BookOpen,
  Home,
  Leaf
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const t = dictionary[locale];
  const publications = getPublicationIndex(locale);
  const latest = publications.slice(0, 6);
  const heroBackground = assetPath('/images/uploads/wechat/wechat-20250619-257f60c7/cover-cuso4-rose.jpg');

  const featured = categories
    .map((category) => publications.find((item) => item.category === category.slug))
    .filter((item): item is PublicationMeta => Boolean(item))
    .slice(0, 4);

  return (
    <Container className="space-y-12 py-12">
      <section className="relative overflow-hidden rounded-3xl border border-sky-100/70 bg-slate-950 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
        <Image
          src={heroBackground}
          alt={locale === 'zh' ? '硫酸铜玫瑰背景图' : 'Copper sulfate rose background'}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.66)_10%,rgba(8,47,73,0.42)_42%,rgba(15,23,42,0.56)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative z-10 grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex h-full flex-col items-start">
            <Badge className="border-white/70 bg-white/90 text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.18)] backdrop-blur-sm">
              Fun Chemistry
            </Badge>
            <h1 className="mt-8 max-w-3xl text-2xl font-bold leading-relaxed tracking-tight text-white drop-shadow-[0_8px_24px_rgba(15,23,42,0.45)] md:mt-10 md:text-4xl">
              {t.mission}
            </h1>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Link
                href={`/${locale}/publications`}
                className="rounded-xl border border-sky-300/70 bg-sky-500/92 px-4 py-2 text-sm font-medium text-white no-underline shadow-[0_12px_24px_rgba(14,116,144,0.28)] backdrop-blur-sm transition hover:bg-sky-400"
              >
                {t.ctaPublications}
              </Link>
              <Link
                href={`/${locale}/team`}
                className="rounded-xl border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white no-underline backdrop-blur-sm transition hover:bg-white/18"
              >
                {t.ctaTeam}
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[260px] md:max-w-[300px]">
            <Image
              src={assetPath('/images/home/club.jpg')}
              alt={locale === 'zh' ? 'Chem Club logo' : 'Chem Club logo'}
              width={680}
              height={680}
              className="h-auto w-full rounded-2xl border border-white/25 bg-black/25 object-cover shadow-[0_20px_45px_rgba(2,6,23,0.4)] backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      <HomeQuickNav locale={locale} />

      <section>
        <h2 className="mb-4 text-2xl font-semibold">{t.fourPillars}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Beaker;
            const categoryCount = publications.filter((item) => item.category === category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/${locale}/publications/category/${category.slug}`}
                className="group min-h-[128px] rounded-2xl border border-border/90 bg-gradient-to-b from-white to-neutral-50 p-5 no-underline shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-foreground/90">
                    <Icon size={18} />
                  </span>
                  <span className="rounded-full border border-border bg-white px-2.5 py-1 text-xs font-medium text-foreground/75">
                    {locale === 'zh' ? `${categoryCount} posts` : `${categoryCount} posts`}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-foreground">{locale === 'zh' ? category.zh : category.en}</h3>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">{t.featured}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/publications/${item.slug}`}
              className="rounded-xl border border-border bg-card p-4 no-underline shadow-soft"
            >
              <p className="text-sm text-foreground/70">{item.readingTimeText}</p>
              <p className="mt-1 font-semibold">{item.title}</p>
              <p className="text-sm text-foreground/75">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">{t.latestUpdates}</h2>
        <ul className="grid gap-3">
          {latest.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/${locale}/publications/${item.slug}`}
                className="block rounded-xl border border-border bg-card px-4 py-3 no-underline shadow-soft hover:border-accent"
              >
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-foreground/75">{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
