import { Container } from '@/components/ui';
import { assetPath } from '@/lib/asset';
import { getLocaleFromParams } from '@/lib/i18n';

const resourceFiles = [
  '0. 加拿大化学思维挑战CCC（Revision Guide）-Safety.pdf',
  '1. 加拿大化学思维挑战CCC（Revision Guide）-Organi.pdf',
  '2. 加拿大化学思维挑战CCC（Revision Guide）-Acids .pdf',
  '3. 加拿大化学思维挑战CCC（Revision Guide）-From S.pdf',
  '4. 加拿大化学思维挑战CCC（Revision Guide）-Electr.pdf',
  '5A . 加拿大化学思维挑战CCC（Revision Guide）-Solu.pdf',
  '5B. 加拿大化学思维挑战CCC（Revision Guide）-The G.pdf',
  '6A. 加拿大化学思维挑战CCC（Revision Guide）-Therm.pdf',
  '6B. 加拿大化学思维挑战CCC（Revision Guide）-React.pdf',
  '7. 加拿大化学思维挑战CCC（Revision Guide）-Equili.pdf'
];

export default function CccCcoKnowledgeSummaryPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? 'CCC/CCO' : 'CCC/CCO'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '知识汇总' : 'Knowledge Summary'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <ul className="grid gap-3">
          {resourceFiles.map((fileName) => (
            <li key={fileName}>
              <a
                href={assetPath(`/downloads/ccc-cco/${encodeURIComponent(fileName)}`)}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground no-underline transition hover:border-neutral-300 hover:bg-neutral-50"
              >
                {fileName}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
