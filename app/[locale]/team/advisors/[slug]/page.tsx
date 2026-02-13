import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge, Container } from '@/components/ui';
import { advisors } from '@/data/advisors';
import { getLocaleFromParams } from '@/lib/i18n';
import { assetPath } from '@/lib/asset';

export function generateStaticParams() {
  return advisors.map((advisor) => ({ locale: 'zh', slug: advisor.slug }));
}

export default function AdvisorDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const advisor = advisors.find((item) => item.slug === params.slug);
  if (!advisor) notFound();

  const [zhNameRaw, enNameRaw] = advisor.name.split('/').map((v) => v.trim());
  const zhName = zhNameRaw ?? advisor.name;
  const enName = enNameRaw ?? '';

  return (
    <Container className="space-y-8 py-12">
      <section className="grid gap-6 md:grid-cols-[280px_1fr]">
        <Image
          src={assetPath(advisor.avatar)}
          alt={advisor.name}
          width={560}
          height={560}
          className="aspect-square rounded-2xl border border-border object-cover"
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{enName ? `${zhName} / ${enName}` : advisor.name}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge>{advisor.title}</Badge>
          </div>
          <p className="max-w-2xl text-foreground/80">{locale === 'zh' ? advisor.bioZh : advisor.bioEn}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {advisor.links?.email ? <a href={`mailto:${advisor.links.email}`}>Email</a> : null}
            {advisor.links?.website ? <a href={advisor.links.website}>Website</a> : null}
          </div>
        </div>
      </section>
    </Container>
  );
}
