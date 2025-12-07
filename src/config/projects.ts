// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = '荣誉奖项'
export const awardsIntro = '学术与专业成就的认可。'

export const awards: Array<ActivityItemType> = [
  {
    name: '数据库工程师（软考中级）',
    description: '全国计算机技术与软件专业技术资格（水平）考试',
    date: '2024',
    location: '全国',
  },
  {
    name: '三好学生',
    description: '校级荣誉',
    date: '2024',
    location: '大连理工大学',
  },
  {
    name: '2024届优秀毕业论文',
    description: '校级荣誉',
    date: '2024',
    location: '大连理工大学',
  },
  {
    name: '校级一等奖学金',
    description: '专业成绩排名前5%',
    date: '2024',
    location: '大连理工大学',
  },
  {
    name: '大学英语四级（CET-4）',
    description: '英语能力认证',
    date: '2024',
    location: '全国',
  },
  {
    name: '广宁杯羽毛球比赛 - 女子双打冠军',
    description: '体育竞赛',
    date: '2024',
    location: '广宁',
  },
]

// Research & Projects
export const projectHeadLine = '项目经历'
export const projectIntro = '我参与开发的技术项目与实践经验。'

export const projects: Array<ProjectItemType> = [
  {
    name: 'FlowWise流式项目管控平台',
    description:
      '基于 Spring Cloud Alibaba 微服务架构的智能项目管理平台，通过项目创建、任务指派、自定义流程、灵活的角色权限管理等核心功能，提升企业项目管理效率，实现项目全生命周期的流程化、智能化管控。',
    link: { href: '#', label: '项目详情' },
    tags: [
      'SpringBoot',
      'SpringCloud Alibaba',
      'Mybatis-Plus',
      'PostgreSQL',
      'Redis',
      'Nacos',
      'Sentinel',
      'RocketMQ',
      'Seata',
      'Docker',
    ],
  },
  {
    name: 'CaLM-ADRD阿尔茨海默病护理对话AI系统',
    description:
      '面向阿尔茨海默病护理者的智能 RAG 知识问答系统，集成大语言模型和检索增强生成技术，支持医疗专业咨询和同伴情感支持。系统采用微服务架构，为护理者提供24小时智能辅助服务。',
    link: { href: '#', label: '项目详情' },
    tags: [
      'Java',
      'SpringBoot',
      'SpringSecurity',
      'Python',
      'Redis',
      'ElasticSearch',
      'PostgreSQL',
      'RAG',
      'Docker',
      'RabbitMQ',
    ],
  },
  {
    name: 'MYDB数据库手写轮子项目',
    description:
      '手写实现的数据库系统，深入理解数据库底层原理，包括存储引擎、事务处理、索引实现等核心功能。',
    link: { href: '#', label: '项目详情' },
    tags: ['Java', '数据库', '底层实现'],
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = '社团和组织经历'
export const activitiesIntro = '在校期间的社团活动与组织经历。'

export const activities: Array<ActivityItemType> = [
  {
    name: '武协社团 - 活动策划人员',
    description:
      '在学校武协社团中担任活动策划人员，在学院第一届才艺大赛中带领团队取得第一名的成绩。组织社团内五十余人的活动，成功让更多武打爱好者加入，具有一定的领导力、沟通协调技巧和组织能力，增强团队间的信任。',
    date: '2020-10',
    location: '大连理工大学',
  },
]
