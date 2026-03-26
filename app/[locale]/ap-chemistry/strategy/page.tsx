import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function ApChemistryStrategyPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? 'AP 化学' : 'AP Chemistry'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '备考策略' : 'Preparation Strategy'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm font-semibold leading-7 text-foreground/90">
          {isZh
            ? 'AP化学复习建议分三步走。首先，依据官方课程框架明确重点，把分子间作用力、平衡、热力学等高权重单元吃透，建立“宏观现象—微观粒子—符号表达”三者对应的思维习惯。其次，用近五年真题进行限时训练，尤其是简答题（FRQ）要对照评分标准逐句分析。最后，通过选择题巩固计算速度，熟悉公式表的使用，考前集中回顾错题，把常见的模型（如RICE table）练到熟练。整体上，把精力放在理解化学逻辑而非单纯记忆，应对选择题的广度和简答题的深度都会更从容。'
            : 'A strong AP Chemistry review plan works best in three steps. First, use the official course framework to identify priorities and master the highest-weight units, especially intermolecular forces, equilibrium, and thermodynamics, while building the habit of connecting macroscopic observations, particulate-level reasoning, and symbolic representation. Second, do timed practice with official questions from the past five years, and for FRQs, analyze each line against the scoring guidelines. Finally, use multiple-choice practice to improve calculation speed, get comfortable with the formula sheet, and review mistakes intensively before the exam until common models such as the RICE table become automatic. Overall, focus more on understanding chemical logic than on memorization alone, and both the breadth of MCQs and the depth of FRQs will feel more manageable.'}
        </p>
      </section>
    </Container>
  );
}
