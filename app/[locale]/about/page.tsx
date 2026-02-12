import Link from "next/link";

const pillars = [
  {
    title: "化学趣味实验",
    description: "用可观察、可讨论的现象引入核心化学概念，提升学习兴趣与课堂参与度。",
  },
  {
    title: "化学知识科普",
    description: "围绕关键知识点进行结构化解释，帮助同学把零散概念建立为完整框架。",
  },
  {
    title: "生活与化学",
    description: "从日常材料、饮食与用品出发，理解化学原理在现实生活中的真实应用。",
  },
  {
    title: "绿色化学",
    description: "用化学知识解释环境问题，倡导从身边小事做起的可持续实践意识。",
  },
];

const chips = ["化学实验", "科普写作", "科学传播", "绿色化学"];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">关于我们</h1>
          <p className="mt-3 text-base leading-6 text-neutral-700">
            2017年，高二的学长舒江找到杨冬月老师并和她一起成立了化学社团。一开始杨冬月老师需要负责实验策划、PPT讲解与报告整理。后来才慢慢的开始逐渐让社长们接手讲解和指导实验的工作。社长们热心负责，化学社不断创新，在共同探索中不断成长。前几年化学社是一个更倾向于化学竞赛的社团近几年社长们不断在化学实验的领域和社员们一起探索，让社团变得更加有趣。
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
              >
                {chip}
              </li>
            ))}
          </ul>
        </header>

        <section className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:mt-10 md:p-8">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">关于本网站</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
            这是一个由高中生创建的网站。文章包含四个系列：化学趣味实验、化学知识科普、生活与化学、绿色化学。我们希望借此传播化学知识，把知识融入有趣实验与日常生活，激起大家对化学的兴趣；同时通过绿色化学系列，用化学知识讲解环境问题，倡导大家从身边小事做起。
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-700">{item.description}</p>
              </article>
            ))}
          </div>

        </section>



        <section className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2">
          <article className="rounded-xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-indigo-900 md:text-lg">我们如何保证严谨与安全</h2>
            <p className="mt-2 text-sm leading-6 text-indigo-900/90">
              我们遵守学校实验规范，强调在教师指导下进行实验活动；在内容呈现中坚持负责任表达，不鼓励危险操作，不传播未经核实结论。
            </p>
          </article>

          <nav className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" aria-label="快速入口">
            <h2 className="text-base font-semibold text-neutral-900 md:text-lg">快速入口</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/zh/publications/category/fun-experiments"
                className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              >
                实验栏目
              </Link>
              <Link
                href="/zh/publications/category/chem-explained"
                className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              >
                文章栏目
              </Link>
            </div>
          </nav>
        </section>
      </div>
    </main>
  );
}
