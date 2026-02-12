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
    role: '撰稿 Writing',
    focus: '科普写作与内容结构',
    bioZh: '负责初稿撰写与论述逻辑梳理，确保内容通顺、层次清晰、易于理解。',
    bioEn: 'Drafts article manuscripts and refines narrative flow for clarity.',
    avatar: '/images/team/member-placeholder.svg',
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
