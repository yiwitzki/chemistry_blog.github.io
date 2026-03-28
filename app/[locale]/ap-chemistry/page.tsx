import Link from 'next/link';
import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

const apCourseLink = 'https://m.shsbnu.net/course/view.php?id=481';
const apPastPaperVideoLink = 'https://space.bilibili.com/346055941';

export default function ApChemistryPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '课程板块' : 'Curriculum'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? 'AP化学' : 'AP Chemistry'}
        </h1>
      </section>

      <Link
        href={`/${locale}/ap-chemistry/strategy`}
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">{isZh ? '备考策略' : 'Preparation Strategy'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '围绕 AP Chemistry 各单元建立复习节奏，重点训练概念理解、方程式书写、FRQ 作答和实验设计表达。'
            : 'Review AP Chemistry by unit, with emphasis on concept mastery, equation writing, FRQ response structure, and lab-design explanations.'}
        </p>
      </Link>

      <Link
        href={`/${locale}/ap-chemistry/resources`}
        className="block rounded-2xl border border-border bg-card p-6 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md"
      >
        <h2 className="text-xl font-semibold text-foreground">{isZh ? '复习资料' : 'Study Resources'}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/75">
          {isZh
            ? '汇总 AP Chemistry 单元笔记、公式清单、实验题素材和真题资源，方便分专题整理与回顾。'
            : 'A collection of AP Chemistry unit notes, formula sheets, lab prompts, and past-paper resources for focused revision.'}
        </p>
      </Link>

      <a
        href={apCourseLink}
        target="_blank"
        rel="noreferrer"
        className="block rounded-3xl border border-border bg-card p-8 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md md:p-10"
      >
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {isZh ? '点此进入 AP 化学先修课程' : 'Open the AP Chemistry Preparatory Course'}
        </h2>
        <p className="mt-4 text-base font-medium leading-8 text-foreground/85 md:text-lg">
          {isZh
            ? '点击后可直接进入 Moodle 的“高级化学先修课程”，查看课程目录、讲义、测试和相关资料。'
            : 'Open the Moodle Advanced Chemistry Preparatory Course directly to access lessons, materials, quizzes, and course sections.'}
        </p>
        <p className="mt-4 text-sm text-foreground/65 md:text-base">{apCourseLink}</p>
      </a>

      <a
        href={apPastPaperVideoLink}
        target="_blank"
        rel="noreferrer"
        className="block rounded-3xl border border-border bg-card p-8 no-underline shadow-soft transition hover:border-neutral-300 hover:shadow-md md:p-10"
      >
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {isZh ? '历年真题讲解' : 'Past Paper Walkthroughs'}
        </h2>
        <p className="mt-4 text-base font-medium leading-8 text-foreground/85 md:text-lg">
          {isZh
            ? '点开后进入这个网页即可学习 AP 化学历年真题讲解视频。'
            : 'Open this page to study AP Chemistry past-paper walkthrough videos.'}
        </p>
        <p className="mt-4 text-sm text-foreground/65 md:text-base">{apPastPaperVideoLink}</p>
      </a>
    </Container>
  );
}
