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
  }
];
