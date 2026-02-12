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
    slug: 'lin-yue',
    name: '林玥 / Lin Yue',
    role: '团队负责人 Team Lead',
    focus: '分析化学与项目统筹',
    bioZh: '负责课题规划、安全审查、成果发布节奏管理，并组织双语编辑流程。',
    bioEn: 'Coordinates project planning, safety checks, and bilingual publication workflow.',
    avatar: '/images/team/lin-yue.svg',
    links: {
      email: 'linyue@example.com',
      github: 'https://github.com/example'
    }
  },
  {
    slug: 'zhang-hao',
    name: '张昊 / Zhang Hao',
    role: '实验设计 Experimental Designer',
    focus: '有机合成与实验复现',
    bioZh: '擅长把复杂实验拆解为可复现实验步骤，并优化课堂可操作性。',
    bioEn: 'Designs reproducible workflows and adapts complex experiments for classroom settings.',
    avatar: '/images/team/zhang-hao.svg',
    links: {
      email: 'zhanghao@example.com'
    }
  },
  {
    slug: 'chen-xinyi',
    name: '陈欣怡 / Chen Xinyi',
    role: '科普传播 Science Communicator',
    focus: '化学教育与内容可视化',
    bioZh: '负责将实验结论转化为面向同龄人的图文与短视频科普内容。',
    bioEn: 'Transforms lab outcomes into accessible explainers and outreach materials.',
    avatar: '/images/team/chen-xinyi.svg',
    links: {
      email: 'chenxinyi@example.com',
      website: 'https://example.com'
    }
  },
  {
    slug: 'wang-jia',
    name: '王嘉 / Wang Jia',
    role: '数据与审稿 Data & Review',
    focus: '误差分析与文献核对',
    bioZh: '负责数据核验、不确定度分析、引用检查与同伴审稿组织。',
    bioEn: 'Validates calculations, uncertainty analysis, and citation quality.',
    avatar: '/images/team/wang-jia.svg',
    links: {
      email: 'wangjia@example.com',
      github: 'https://github.com/example'
    }
  },
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
