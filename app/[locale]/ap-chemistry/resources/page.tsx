import { Container } from '@/components/ui';
import { assetPath } from '@/lib/asset';
import { getLocaleFromParams } from '@/lib/i18n';

const apCourseLink = 'https://m.shsbnu.net/course/view.php?id=481';

const apResources = [
  {
    title: 'AP Chemistry Course at a Glance 2026',
    fileName: 'AP Chemistry Course at a Glance 2026.xlsx'
  },
  {
    title: 'AP Chemistry Notes',
    fileName: 'AP chemistry notes-stephen akiki(1).pdf'
  },
  {
    title: 'AP 化学真题集 1',
    fileName: 'AP化学真题集 (1).pdf'
  },
  {
    title: 'AP 化学真题集 2',
    fileName: 'AP化学真题集 (2).pdf'
  },
  {
    title: 'AP 化学真题集 3',
    fileName: 'AP化学真题集 (3).pdf'
  },
  {
    title: 'AP 化学真题集 3 Answer',
    fileName: 'AP化学真题集 (3)answer.pdf'
  },
  {
    title: 'AP 化学真题集 5',
    fileName: 'AP化学真题集 (5).pdf'
  },
  {
    title: 'AP 化学真题集 6',
    fileName: 'AP化学真题集 (6).pdf'
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

      <a
        href={apCourseLink}
        target="_blank"
        rel="noreferrer"
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">
          {isZh ? 'AP 化学先修课程入口' : 'AP Chemistry Preparatory Course'}
        </h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '点击后可直接进入 Moodle 的“高级化学先修课程”，使用课程中的讲义、测试与资料。'
            : 'Open the Moodle Advanced Chemistry Preparatory Course directly for lectures, quizzes, and supporting materials.'}
        </p>
        <p className="mt-2 text-xs text-foreground/60">{apCourseLink}</p>
      </a>
    </Container>
  );
}
