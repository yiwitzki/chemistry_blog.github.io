import Image from 'next/image';
import Link from 'next/link';
import { Badge, Card, Container } from '@/components/ui';
import { teamMembers } from '@/data/team';
import { getLocaleFromParams } from '@/lib/i18n';
import { assetPath } from '@/lib/asset';

export default function TeamPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);

  return (
    <Container className="space-y-8 py-12">
      <section>
        <h1 className="text-3xl font-bold">{locale === 'zh' ? '团队成员' : 'Team Members'}</h1>
        <p className="mt-2 text-foreground/75">
          {locale === 'zh' ? '跨学科协作，覆盖实验、写作、审稿与传播。' : 'Cross-functional members covering lab work, writing, review, and outreach.'}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <Card key={member.slug} className="space-y-3">
            <Image
              src={assetPath(member.avatar)}
              alt={member.name}
              width={360}
              height={360}
              className="aspect-square rounded-xl object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">
                <Link href={`/${locale}/team/${member.slug}`} className="no-underline">
                  {member.name}
                </Link>
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>{member.role}</Badge>
                {member.focus ? <Badge>{member.focus}</Badge> : null}
              </div>
            </div>
          </Card>
        ))}
      </section>
    </Container>
  );
}
