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
    name: '唐泽霖 / Zelin Tang',
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
    name: '辛敏睿 / Minrui Xin',
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
    name: '孟禹萌 / Yumeng Meng',
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
    name: '尉钰涵 / Yuhan Wei',
    role: 'co-leader',
    focus: '',
    bioZh: '我是尉钰涵，是这个网站的领导者之一，我在高一加入了化学社并在高一下半学期结束之后与化学社其他三位成员开始经营化学社公众号。在公众号里，我们会发布化学社每周实验的实验原理解释和过程性图片，也会在周末或闲暇时间发布一些有关生活中化学知识的科普文章和与废物利用有关的研究性文章。我希望能够通过“二附chem club”公众号让更多的人对化学这门学科感兴趣，并且能在生活中运用化学知识解决问题。',
    bioEn: 'Polishes language and aligns content with high-school learning contexts.',
    avatar: '/images/team/wei-yuhan.jpg',
    links: {
      email: 'weiyuhan@example.com'
    }
  },
  {
    slug: 'zhang-ruofan',
    name: '张若凡 / Ruofan Zhang',
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
    name: '张博文 / Bowen Zhang',
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
