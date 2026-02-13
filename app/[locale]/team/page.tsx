import Image from 'next/image';
import Link from 'next/link';
import { Badge, Card, Container } from '@/components/ui';
import { advisors } from '@/data/advisors';
import { teamMembers } from '@/data/team';
import { getLocaleFromParams } from '@/lib/i18n';
import { assetPath } from '@/lib/asset';

export default function TeamPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);

  return (
    <Container className="space-y-6 py-4 md:py-6">
      <section>
        <h1 className="text-3xl font-bold">{locale === 'zh' ? '团队成员' : 'Team Members'}</h1>
        <p className="mt-2 hidden text-foreground/75 md:block">
          {locale === 'zh' ? '跨学科协作，覆盖实验、写作、审稿与传播。' : 'Cross-functional members covering lab work, writing, review, and outreach.'}
        </p>
      </section>

      <section className="mt-6 space-y-6 md:mt-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.slug} className="w-full max-w-[236px] justify-self-center space-y-3">
              <Image
                src={assetPath(member.avatar)}
                alt={member.name}
                width={360}
                height={360}
                className="aspect-square rounded-xl object-cover"
              />
              <div>
                <h2 className="truncate text-base font-semibold">
                  <Link href={`/${locale}/team/${member.slug}`} className="block truncate whitespace-nowrap no-underline">
                    {member.name}
                  </Link>
                </h2>
                <div className="mt-2 flex flex-nowrap gap-2 overflow-hidden">
                  <Badge className="shrink-0 whitespace-nowrap">{member.role}</Badge>
                  {member.focus ? <Badge className="shrink-0 whitespace-nowrap">{member.focus}</Badge> : null}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="w-full max-w-[236px]">
              <Card className="space-y-3">
                <Image
                  src={assetPath(advisor.avatar)}
                  alt={advisor.name}
                  width={360}
                  height={360}
                  className="aspect-square rounded-xl object-cover"
                />
                <div>
                  <h3 className="truncate text-base font-semibold">
                    <Link href={`/${locale}/team/advisors/${advisor.slug}`} className="block truncate whitespace-nowrap no-underline">
                      {advisor.name}
                    </Link>
                  </h3>
                  <div className="mt-2">
                    <Badge className="whitespace-nowrap">{advisor.title}</Badge>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
