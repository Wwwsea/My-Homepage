// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: '某省三甲医院 | 成都天鹿捷科技有限公司',
      title: '后端开发工程师（实习 + 在职）',
      logo: 'coffee',
      start: '2023-05',
      end: '2025-12'
    },
  ]