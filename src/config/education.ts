// education
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: '大连理工大学城市学院',
    major: '软件工程 | GPA: 3.66/4.0（专业前5%）',
    logo: 'college',
    start: '2020',
    end: '2024',
  },
]
