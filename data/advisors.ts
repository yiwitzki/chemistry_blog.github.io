export type Advisor = {
  slug: string;
  name: string;
  title: string;
  bioZh: string;
  bioEn: string;
  avatar: string;
  links?: {
    email?: string;
    website?: string;
  };
};

export const advisors: Advisor[] = [
  {
    slug: 'yang-dongyue',
    name: '杨冬月 / Dongyue Yang',
    title: 'Faculty Advisor',
    bioZh: '杨冬月老师毕业于北京师范大学化学系物理化学专业，任职北京师大二附中国际部，作为化学老师，科学拓展老师，AP化学老师，竞赛辅导老师和社团指导老师。2017年担任化学社团指导老师，组织学生每学期进行20余次实验，旨在培养学生的科学能力和批判思维，从而提升科学态度和社会责任。带领社长通过预实验，创新实验操作和实验报告等，讲授符合社员学情并具有一定挑战性的知识，小组合作中交流互助，资源共享，我们在2024年成立了化学社公众号“二附chem club”在其中发布社团的趣味实验，科普化学知识，在2026年初成立了趣味化学网站，希望通过此机会带动同学们学习化学的积极性，培养学习热情，并鼓励同学们观察生活与世界，用化学的视角看待问题。',
    bioEn:
      'Ms. Dongyue Yang graduated from the Department of Chemistry at Beijing Normal University with a specialization in physical chemistry, and she now teaches in the International Department of The Second High School Attached to BNU. She serves as a chemistry teacher, science extension teacher, AP Chemistry teacher, competition coach, and faculty advisor for the chemistry club. Since 2017, she has worked as the club advisor, organizing more than twenty experiments each semester to cultivate students\' scientific ability and critical thinking, thereby strengthening their scientific attitude and sense of social responsibility. By leading club presidents through trial experiments, innovative experimental procedures, and lab report writing, she teaches knowledge that matches students\' learning needs while still offering an appropriate level of challenge. Through group collaboration, mutual support, and resource sharing, the team launched the "Second High Chem Club" public account in 2024 to publish fun club experiments and chemistry popular-science content, and then established the Fun Chemistry website in early 2026. She hopes this work will inspire students to learn chemistry with greater enthusiasm, nurture their passion for study, and encourage them to observe life and the world through a chemical perspective.',
    avatar: '/images/team/yang-dongyue.png',
    links: {
      email: 'advisor@example.com'
    }
  }
];
