export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  bioZh: string;
  bioEn: string;
  avatar: string;
  links: {
    email?: string;
    github?: string;
    website?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    slug: 'tang-zelin',
    name: '唐泽霖 / Tang Zelin',
    role: 'founder',
    focus: 'leader',
    bioZh: '我是唐泽霖，是这个网站的建立者，高一时因为对化学的喜爱，加入了化学社，高一下半学期结束时，我与其他3位化学社成员开始在“二附chem club”化学公众号上撰写并发布10余篇文章，内容包括一些社团活动的趣味实验及其原理，和生活中的化学，和化学知识科普等不同题材的文章，后面我们也将会同步在网站和公众号上发出绿色化学与环境保护等系列的文章。 希望通过发表一些有趣和有深度的内容来激起大家对化学的兴趣，并从各个角度来认识化学这门学科。',
    bioEn: 'Drafts article manuscripts and refines narrative flow for clarity.',
    avatar: '/images/team/tang-zelin.jpg',
    links: {
      email: 'tangzelin@example.com'
    }
  },
  {
    slug: 'xin-minrui',
    name: '辛敏睿 / Xin Minrui',
    role: '排版 Layout',
    focus: '图文编排与阅读体验',
    bioZh: '负责图文排版、段落节奏与视觉一致性，提升文章在网页端的可读性。',
    bioEn: 'Handles layout, visual rhythm, and article readability across devices.',
    avatar: '/images/team/member-placeholder.svg',
    links: {
      email: 'xinminrui@example.com'
    }
  },
  {
    slug: 'meng-yumeng',
    name: '孟禹萌 / Meng Yumeng',
    role: '审核 Review',
    focus: '事实核对与术语统一',
    bioZh: '负责术语规范、事实核对与细节检查，保证内容准确性与一致性。',
    bioEn: 'Reviews terminology consistency, factual accuracy, and detail quality.',
    avatar: '/images/team/member-placeholder.svg',
    links: {
      email: 'mengyumeng@example.com'
    }
  },
  {
    slug: 'wei-yuhan',
    name: '尉钰涵 / Wei Yuhan',
    role: '审核 Review',
    focus: '表达优化与教学适配',
    bioZh: '负责语言润色与教学场景适配，帮助文章更贴近高中生学习语境。',
    bioEn: 'Polishes language and aligns content with high-school learning contexts.',
    avatar: '/images/team/member-placeholder.svg',
    links: {
      email: 'weiyuhan@example.com'
    }
  },
  {
    slug: 'zhang-ruofan',
    name: '张若凡 / Zhang Ruofan',
    role: '审核 Review',
    focus: '科学严谨性与引用检查',
    bioZh: '负责科学表述严谨性把关与引用检查，降低知识性错误风险。',
    bioEn: 'Checks scientific rigor and citation reliability before publication.',
    avatar: '/images/team/member-placeholder.svg',
    links: {
      email: 'zhangruofan@example.com'
    }
  },
  {
    slug: 'zhang-bowen',
    name: '张博文 / Zhang Bowen',
    role: '图片支持 Visual Support',
    focus: '实验摄影与素材整理',
    bioZh: '负责实验过程与成品的拍摄记录，并整理文章配图素材。',
    bioEn: 'Provides experiment photography and organizes visual assets for publications.',
    avatar: '/images/team/member-placeholder.svg',
    links: {
      email: 'zhangbowen@example.com'
    }
  }
];
