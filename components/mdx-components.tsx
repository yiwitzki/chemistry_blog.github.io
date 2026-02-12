import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function Callout({ type = 'info', children }: { type?: 'info' | 'warning' | 'success'; children: ReactNode }) {
  const styles = {
    info: 'border-blue-300 bg-blue-50/60 text-blue-900 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-100',
    warning:
      'border-amber-300 bg-amber-50/80 text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100',
    success:
      'border-emerald-300 bg-emerald-50/70 text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-100'
  };
  return <div className={cn('my-6 rounded-xl border p-4 text-sm', styles[type])}>{children}</div>;
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-8">
      <Image src={src} alt={alt} width={1200} height={800} className="rounded-xl border border-border" />
      {caption ? <figcaption className="mt-2 text-center text-sm text-foreground/70">{caption}</figcaption> : null}
    </figure>
  );
}

export function Gallery({ images }: { images: Array<{ src: string; alt: string }> }) {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={1200}
          height={900}
          loading="lazy"
          className="rounded-xl border border-border object-cover"
        />
      ))}
    </div>
  );
}

export function VideoEmbed({
  title,
  platform = 'youtube',
  id
}: {
  title: string;
  platform?: 'youtube' | 'bilibili';
  id: string;
}) {
  const src =
    platform === 'youtube'
      ? `https://www.youtube.com/embed/${id}`
      : `https://player.bilibili.com/player.html?bvid=${id}&page=1`;

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full"
      />
    </div>
  );
}

export const mdxComponents = {
  Callout,
  Figure,
  Gallery,
  VideoEmbed
};
