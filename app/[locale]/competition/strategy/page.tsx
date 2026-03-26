import { Container } from '@/components/ui';
import { getLocaleFromParams } from '@/lib/i18n';

export default function CompetitionStrategyPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const isZh = locale === 'zh';

  return (
    <Container className="space-y-8 py-12">
      <section className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium text-foreground/60">{isZh ? '化学竞赛' : 'Competition'}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          {isZh ? '备考策略' : 'Preparation Strategy'}
        </h1>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <p className="text-sm font-semibold leading-8 text-foreground/90">
          {isZh
            ? '高一夯实基础，暑假提前学学校化学加速课，开学跟进竞赛辅导。基础优异可同步备考 AP 化学，搭建完整知识框架；高一必须自学有机化学，借助网上系统课程掌握核心反应与机理，弥补校内进度不足。高二按学校节奏深化知识，针对性攻克 UKCho 偏重的有机推断、机理书写，以及 CCC/CCO 的无机、物理化学考点，分模块刷题并整理错题。高三聚焦有机化学进阶学习，强化三大竞赛的真题模拟，提升答题速度与逻辑严谨性，兼顾知识点融会贯通与应试技巧，冲刺高含金量奖项。'
            : 'Build strong foundations in the first year, move ahead with accelerated chemistry in the summer, and then follow competition coaching while continuing AP Chemistry and organic chemistry self-study. In the second year, deepen knowledge with targeted practice for UKChO organic reasoning and mechanisms as well as CCC/CCO inorganic and physical chemistry topics. In the third year, focus on advanced organic chemistry, intensive mock exams, faster problem solving, and high-level competition technique.'}
        </p>
      </section>
    </Container>
  );
}
