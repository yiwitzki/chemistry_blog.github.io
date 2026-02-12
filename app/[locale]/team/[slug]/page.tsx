import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Card, Container } from '@/components/ui';
import { teamMembers } from '@/data/team';
import { getPublicationIndex } from '@/lib/content';
import { getLocaleFromParams } from '@/lib/i18n';
import { assetPath } from '@/lib/asset';

export function generateStaticParams() {
  return teamMembers.flatMap((member) => [{ locale: 'en', slug: member.slug }, { locale: 'zh', slug: member.slug }]);
}

export default function TeamMemberPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const member = teamMembers.find((item) => item.slug === params.slug);
  if (!member) notFound();

  const publications = getPublicationIndex(locale).filter((item) => item.contributors?.includes(member.slug));

  return (
    <Container className="space-y-8 py-12">
      <section className="grid gap-6 md:grid-cols-[280px_1fr]">
        <Image
          src={assetPath(member.avatar)}
          alt={member.name}
          width={560}
          height={560}
          className="aspect-square rounded-2xl border border-border object-cover"
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{member.name}</h1>
          <p>{member.role}</p>
          <Badge>{member.focus}</Badge>
          <p className="max-w-2xl text-foreground/80">{locale === 'zh' ? member.bioZh : member.bioEn}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {member.links.email ? <a href={`mailto:${member.links.email}`}>Email</a> : null}
            {member.links.github ? <a href={member.links.github}>GitHub</a> : null}
            {member.links.website ? <a href={member.links.website}>Website</a> : null}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{locale === 'zh' ? '参与文章' : 'Contributed Articles'}</h2>
        <div className="grid gap-3">
          {publications.map((item) => (
            <Card key={item.slug}>
              <h3 className="font-semibold">
                <Link href={`/${locale}/publications/${item.slug}`} className="no-underline">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-foreground/75">{item.summary}</p>
            </Card>
          ))}
          {!publications.length ? <p className="text-sm text-foreground/70">No linked articles yet.</p> : null}
        </div>
      </section>
    </Container>
  );
}
