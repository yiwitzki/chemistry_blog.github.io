import { Card, Container } from '@/components/ui';
import { dictionary, getLocaleFromParams } from '@/lib/i18n';

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  const t = dictionary[locale];

  const content =
    locale === 'zh'
      ? {
          intro:
            '本项目由高中化学团队发起，目标是将实验课程中的真实问题转化为高质量、可复现、可传播的成果文章。',
          profile:
            '申请者长期参与化学社团活动与课堂实验改进，重视安全规范、数据可信度与科学表达。我们通过双语写作让更多同龄学习者受益。',
          safety:
            '所有实验必须在教师监管下开展，进行风险评估、试剂管理与废弃物处置。我们反对夸大结论，强调可复核与诚实报告。',
          impact: '近一年组织讲座 8 场、校内外科普活动 14 次，覆盖学生与家长超过 5000 人次。',
          steps: ['选题', '实验/调研', '撰写', '审稿', '发布']
        }
      : {
          intro:
            'This project is led by a high school chemistry team to turn authentic lab questions into reproducible, high-quality articles.',
          profile:
            'The applicant has been active in chemistry clubs and classroom lab improvements, with a strong focus on safety, data quality, and scientific writing.',
          safety:
            'All experiments are teacher-supervised with risk assessment, reagent control, and proper waste disposal. We value transparent and verifiable reporting.',
          impact: 'In the past year, we delivered 8 talks and 14 outreach events, reaching over 5,000 students and families.',
          steps: ['Topic Selection', 'Experiment / Research', 'Writing', 'Peer Review', 'Publication']
        };

  return (
    <Container className="space-y-10 py-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">{t.aboutTitle}</h1>
        <p className="max-w-3xl text-foreground/85">{content.intro}</p>
        <p className="max-w-3xl text-foreground/80">{content.profile}</p>
      </section>

      <section className="rounded-2xl border-2 border-amber-500 bg-amber-50/60 p-6 dark:bg-amber-500/10">
        <h2 className="text-xl font-semibold">{t.safetyTitle}</h2>
        <p className="mt-2 text-sm">{content.safety}</p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">{t.workflow}</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {content.steps.map((step, idx) => (
            <Card key={step}>
              <p className="text-xs text-foreground/70">0{idx + 1}</p>
              <p className="mt-1 font-semibold">{step}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-xl font-semibold">Impact & Outreach</h2>
        <p className="mt-2 text-sm text-foreground/80">{content.impact}</p>
      </section>
    </Container>
  );
}
