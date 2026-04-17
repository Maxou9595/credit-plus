export interface City {
  slug: string
  name: string
  postalCode: string
  department: string
  departmentCode: string
  region: string
  regionCode?: string // Added region code for French communes
  population: number
  latitude: number
  longitude: number
}

export interface CityPageData extends City {
  metaTitle: string
  metaDescription: string
  h1: string
  introText: string
  faqQuestions: FAQQuestion[]
  otherCities: City[]
}

export interface FAQQuestion {
  question: string
  answer: string
}

export interface DepartmentInfo {
  code: string
  name: string
  cities: string[] // slugs
}
