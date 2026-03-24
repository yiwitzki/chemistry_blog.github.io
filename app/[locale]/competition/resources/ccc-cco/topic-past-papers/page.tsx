import { Container } from '@/components/ui';
import { assetPath } from '@/lib/asset';
import { getLocaleFromParams } from '@/lib/i18n';

const topicPastPapers = [
  '加拿大化学思维挑战CCC历年真题-0. 安全性问.pdf',
  '加拿大化学思维挑战CCC历年真题-1. 有机化学.pdf',
  '加拿大化学思维挑战CCC历年真题-2. 酸和碱.pdf',
  '加拿大化学思维挑战CCC历年真题-3. 从结构到.pdf',
  '加拿大化学思维挑战CCC历年真题-4. 电化学.pdf',
  '加拿大化学思维挑战CCC历年真题-5A. 溶液和化.pdf',
  '加拿大化学思维挑战CCC历年真题-5B. 气体定律.pdf',
  '加拿大化学思维挑战CCC历年真题-6A. 热化学.pdf',
  '加拿大化学思维挑战CCC历年真题-6B. 反应动力.pdf',
  '加拿大化学思维挑战CCC历年真题-7. 平衡.pdf'
];

export default function TopicPastPapersPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? 'CCC/CCO' : 'CCC/CCO'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '知识点对应真题' : 'Topic-Based Past Papers'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <ul className="grid gap-3">
          {topicPastPapers.map((fileName) => (
            <li key={fileName}>
              <a
                href={assetPath(`/downloads/ccc-cco/topic-past-papers/${encodeURIComponent(fileName)}`)}
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
