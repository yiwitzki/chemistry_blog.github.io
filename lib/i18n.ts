import { defaultLocale, locales, type Locale } from '@/data/site';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromParams(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export function withLocale(locale: Locale, path = '') {
  return `/${locale}${path}`;
}

export const dictionary = {
  en: {
    mission: 'We turn high school chemistry curiosity into safe, rigorous, and shareable science outcomes.',
    ctaPublications: 'View Publications',
    ctaTeam: 'Meet the Team',
    highlights: 'Highlights',
    fourPillars: 'Four Pillars',
    featured: 'Featured',
    latestUpdates: 'Latest Updates',
    totalArticles: 'Total Articles',
    activities: 'Experiments / Activities',
    reach: 'People Reached',
    aboutTitle: 'About This Project',
    safetyTitle: 'Safety & Ethics',
    workflow: 'How We Work',
    publications: 'Publications',
    noResults: 'No articles found for current filters.',
    related: 'Related Articles',
    contributors: 'Contributors',
    authors: 'Authors',
    contactIntro: 'Send us your collaboration ideas, questions, or feedback.',
    submit: 'Send Message',
    sent: 'Your message has been sent.',
    backToList: 'Back to list',
    openArticle: 'Open article'
  },
  zh: {
    mission: '我们将化学知识融入趣味实验与生活中，运用生动的语言呈现给大家~',
    ctaPublications: '查看成果',
    ctaTeam: '认识团队',
    highlights: '团队亮点',
    fourPillars: '文章系列',
    featured: '精选推荐',
    latestUpdates: '最新更新',
    totalArticles: '文章总数',
    activities: '实验/活动数',
    reach: '覆盖人数',
    aboutTitle: '项目介绍',
    safetyTitle: '安全与伦理',
    workflow: '我们的工作流',
    publications: '成果文章',
    noResults: '当前筛选条件下暂无文章。',
    related: '相关文章',
    contributors: '贡献成员',
    authors: '作者',
    contactIntro: '欢迎联系合作、提问或反馈。',
    submit: '发送消息',
    sent: '消息发送成功。',
    backToList: '返回列表',
    openArticle: '阅读文章'
  }
};
