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
    slug: 'wei-yuhan',
    name: '尉钰涵 / Yuhan Wei',
    role: 'co-leader',
    focus: 'designer',
    bioZh: '我是尉钰涵，是这个网站的领导者之一，我在高一加入了化学社并在高一下半学期结束之后与化学社其他三位成员开始经营化学社公众号。在公众号里，我们会发布化学社每周实验的实验原理解释和过程性图片，也会在周末或闲暇时间发布一些有关生活中化学知识的科普文章和与废物利用有关的研究性文章。我希望能够通过“二附chem club”公众号让更多的人对化学这门学科感兴趣，并且能在生活中运用化学知识解决问题。',
    bioEn: 'Polishes language and aligns content with high-school learning contexts.',
    avatar: '/images/team/wei-yuhan.jpg',
    links: {
      email: 'weiyuhan@example.com'
    }
  },
  {
    slug: 'zhang-bowen',
    name: '张博文 / Bowen Zhang',
    role: 'co-leader',
    focus: '',
    bioZh: '我是张博文，化学社社长之一。我平时和另一位社长负责轮流准备实验，进行预实验，以及讲解和指导社员进行实验。我认真细心，带领同学们制做了水中花园、海洋之心、碘钟等有着精彩实验现象的无机实验。我计划在下学期继续提升自己的学科知识储备，同时在化学社尝试一些基础的有机实验。',
    bioEn: 'Provides experiment photography and organizes visual assets for publications.',
    avatar: '/images/team/zhang-bowen.jpg',
    links: {
      email: 'zhangbowen@example.com'
    }
  },
  {
    slug: 'wang-yifei',
    name: '王艺霏 / Yifei Wang',
    role: 'co-leader',
    focus: '',
    bioZh: '我是王艺霏，化学社社长之一。平时会和另一位社长一起轮流进行预实验，实验准备，进行讲解并和社员们一起探索反应机理。我带领同学们制做了焰色实验，大象牙膏，银镜反应等等有各种不同现象的化学实验。下学期我计划继续提升自己的学科知识储备，和社员们一起探索和讨论更多更复杂也更深层的分子之间的连接，在简单基础的化学反应上做更多创新。',
    bioEn: 'Leads experiment prep, demos, and mechanism discussions with club members.',
    avatar: '/images/team/wang-yifei.jpg',
    links: {
      email: 'wangyifei@example.com'
    }
  }
];
