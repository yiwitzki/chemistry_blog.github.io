import { Container } from '@/components/ui';
import { assetPath } from '@/lib/asset';
import { getLocaleFromParams } from '@/lib/i18n';

const ukchoResources = [
  {
    title: 'UKCHO Lecture 1',
    fileName: 'UKCHO Lecture 1.pdf'
  },
  {
    title: 'UKCHO Lecture 2',
    fileName: 'UKCHO Lecture 2.pdf'
  },
  {
    title: 'UKCHO Lecture 3',
    fileName: 'UKCHO Lecture 3.pdf'
  },
  {
    title: 'UKCHO Lecture 4 Organic',
    fileName: 'UKCHO Lecture 4 Organic(1).pdf'
  },
  {
    title: 'UKCHO Lecture 5 Spectrum',
    fileName: 'UKCHO Lecture 5 Spectrum.pdf'
  },
  {
    title: 'UKCHO Lecture 6 Physical',
    fileName: 'UKCHO Lecture 6 Physical.pdf'
  },
  {
    title: 'UKChO 化学讲义电子版 2022',
    fileName: 'UKChO化学讲义-电子版 TD 无任何水印 2022(1).pdf'
  }
];

export default function UkchoResourcesPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '化学竞赛' : 'Competition'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">UKChO</h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm leading-7 text-foreground/75">
          {isZh
            ? '这里统一收录 UKChO 复习讲义与专题资料。点击任意文件后会直接在新页面打开 PDF，方便在线查看。'
            : 'This page collects UKChO lecture notes and revision handouts. Click any file to open the PDF in a new tab.'}
        </p>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <ul className="grid gap-3">
          {ukchoResources.map((resource) => (
            <li key={resource.fileName}>
              <a
                href={assetPath(`/downloads/ukcho/${encodeURIComponent(resource.fileName)}`)}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-border bg-white px-4 py-3 no-underline transition hover:border-neutral-300 hover:bg-neutral-50"
              >
                <p className="text-sm font-medium text-foreground">{resource.title}</p>
                <p className="mt-1 text-xs text-foreground/60">{resource.fileName}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
