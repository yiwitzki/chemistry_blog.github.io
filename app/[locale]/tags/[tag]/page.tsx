import { Container } from '@/components/ui';
import { PublicationCard } from '@/components/publication-card';
import { locales } from '@/data/site';
import { getAllTags, getPublicationIndex } from '@/lib/content';
import { getLocaleFromParams } from '@/lib/i18n';

export function generateStaticParams() {
  const tags = getAllTags('zh');
  return locales.flatMap((locale) => tags.map((tag) => ({ locale, tag })));
}

export default function TagPage({ params }: { params: { locale: string; tag: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const publications = getPublicationIndex(locale).filter((item) => item.tags.includes(params.tag));

  return (
    <Container className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">#{params.tag}</h1>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {publications.map((item) => (
          <PublicationCard key={item.slug} publication={item} />
        ))}
      </section>
    </Container>
  );
}
