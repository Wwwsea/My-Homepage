export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '子飞鱼'
export const headline = '求职中 | 后端开发工程师'
export const introduction =
  '熟悉高并发、高可用架构，有微服务实战经验。感兴趣各类前言技术，自学RAG，有医疗行业开发经验。'
export const email = 'wwwsea0516@outlook.com'
export const phone = '18940946732'
export const wechat = 'Lokhd0516'
export const githubUsername = 'wwwsea'

// about page
export const aboutMeHeadline = '关于我'
export const aboutParagraphs = [
  '你好，我是子飞鱼，一名后端开发工程师。我毕业于大连理工大学城市学院软件工程专业，GPA 3.66/4.0（专业前5%），目前处于求职状态。',
  '在技术方面，我熟悉 Java 和 Python 语言，深入理解 JVM 内存结构、GC 算法、双亲委派机制、类加载机制等 Java 底层原理，以及 CPython 内存模型、GIL 机制、垃圾回收底层实现等 Python 核心机制。',
  '在数据库方面，我熟练掌握 MySQL，深刻理解事务 ACID 特性、索引、MVCC、日志等，具有一定的 SQL 优化能力，并手写轮子项目 MYDB。',
  '在高并发和高可用方面，我熟悉 synchronized、线程池、TransmittableThreadLocal 等实现原理，熟悉 RocketMQ 消息队列、ElasticSearch 搜索引擎、Netty 高性能架构等。',
  '在框架方面，我熟练使用 Spring、SpringMVC、Spring Boot、Spring Security、Mybatis、Mybatis-Plus 等主流开发框架，熟悉 IOC、AOP 原理，熟悉 Spring Boot 自动装配原理，并且自定义过 starter。',
  '在微服务方面，我熟悉微服务架构，对主流技术栈如 SpringCloud、SpringCloud Alibaba 有深入了解，有独立搭建微服务系统以及单体项目微服务化实战经验。',
  '在 RAG 方面，我熟悉 RAG 的核心框架（如 LangChain、LlamaIndex）、主流 embedding 模型和 LLM 模型的选用，有设计 PB 级知识库分层方案的经验，支持百万级 QPS 的语义检索。',
  '此外，我有医疗行业经验，懂得医疗器械法规，熟悉医疗 HIS 流程，有相关的 HIS 开发经验。我具备较强的文档阅读能力、问题解决能力和突发问题处理能力。',
]

// blog
export const blogHeadLine = '我的思考'
export const blogIntro = '记录我在技术学习、项目实践和生活中的思考与感悟。'

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/Wwwsea',
  },
  {
    name: 'WeChat',
    icon: 'wechat',
    href: '#',
    ariaLabel: '微信：Lokhd0516',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'java',
  'python',
  'javascript',
  'typescript',
  'mysql',
  'postgresql',
  'redis',
  'elasticsearch',
  'spring',
  'docker',
  'nginx',
  'git',
  'github',
  'rocketmq',
  'rabbitmq',
  'netty',
  'vue',
  'flutter',
  'dart',
  'linux',
  'visualstudiocode',
]
