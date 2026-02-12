import Image from 'next/image';
import Link from 'next/link';
import type { PublicationMeta } from '@/lib/content';
import { categoryMap } from '@/data/categories';
import { Badge, Card } from '@/components/ui';
import { assetPath } from '@/lib/asset';
import { formatDate } from '@/lib/utils';

export function PublicationCard({ publication }: { publication: PublicationMeta }) {
  const link = `/${publication.locale}/publications/${publication.slug}`;
  const category = categoryMap[publication.category];

  return (
    <Card className="flex h-full flex-col gap-4">
      {publication.cover ? (
        <Image
          src={assetPath(publication.cover)}
          alt={publication.title}
          width={1200}
          height={675}
          className="aspect-video rounded-xl object-cover"
        />
      ) : null}

      <div className="flex items-center gap-2 text-xs text-foreground/70">
        <span>{formatDate(publication.date, publication.locale)}</span>
        <span>•</span>
        <span>{publication.readingTimeText}</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          <Link href={link} className="no-underline">
            {publication.title}
          </Link>
        </h3>
        <p className="text-sm text-foreground/85">{publication.summary}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        <Badge>{publication.locale === 'zh' ? category.zh : category.en}</Badge>
        {publication.difficulty ? <Badge>{publication.difficulty}</Badge> : null}
        {publication.tags.slice(0, 3).map((tag) => (
          <Link key={tag} href={`/${publication.locale}/tags/${tag}`} className="no-underline">
            <Badge>#{tag}</Badge>
          </Link>
        ))}
      </div>
    </Card>
  );
}
