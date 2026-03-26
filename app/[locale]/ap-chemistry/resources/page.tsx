import { Container } from '@/components/ui';
import { assetPath } from '@/lib/asset';
import { getLocaleFromParams } from '@/lib/i18n';

const apResources = [
  {
    title: 'AP Chemistry Course at a Glance 2026',
    fileName: 'AP Chemistry Course at a Glance 2026.xlsx',
    descriptionZh: 'AP 化学课程总览表，便于按单元查看全年进度与内容安排。',
    descriptionEn: 'A course-at-a-glance spreadsheet for tracking AP Chemistry units and pacing.'
  },
  {
    title: 'AP Chemistry Notes',
    fileName: 'AP chemistry notes-stephen akiki(1).pdf',
    descriptionZh: 'AP 化学笔记资料，适合复习核心知识点与考前回顾。',
    descriptionEn: 'A concise AP Chemistry notes PDF for reviewing key concepts.'
  }
];

export default function ApChemistryResourcesPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? 'AP 化学' : 'AP Chemistry'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '复习资料' : 'Study Resources'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <ul className="grid gap-3">
          {apResources.map((resource) => (
            <li key={resource.fileName}>
              <a
                href={assetPath(`/downloads/ap-chemistry/${encodeURIComponent(resource.fileName)}`)}
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
