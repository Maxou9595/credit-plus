import citiesData from "@/data/cities.json"
import type { City, CityPageData } from "@/lib/city"
import {
  generateMetaTitle,
  generateMetaDescription,
  generateH1,
  generateIntroText,
  generateFAQQuestions,
  getOtherCitiesInDepartment,
} from "@/lib/helpers/city-helpers"

/**
 * Get all cities
 */
export function getAllCities(): City[] {
  return citiesData as City[]
}

/**
 * Get a city by slug
 */
export function getCityBySlug(slug: string): City | undefined {
  return getAllCities().find((city) => city.slug === slug)
}

/**
 * Get all city slugs for static generation
 */
export function getAllCitySlugs(): string[] {
  return getAllCities().map((city) => city.slug)
}

/**
 * Get complete page data for a city
 */
export function getCityPageData(slug: string): CityPageData | null {
  const city = getCityBySlug(slug)
  if (!city) return null

  const allCities = getAllCities()

  return {
    ...city,
    metaTitle: generateMetaTitle(city.name, city.department),
    metaDescription: generateMetaDescription(city.name, city.department, city.population),
    h1: generateH1(city.name, city.department),
    introText: generateIntroText(city.name, city.department, city.population),
    faqQuestions: generateFAQQuestions(city.name, city.department, city.postalCode),
    otherCities: getOtherCitiesInDepartment(allCities, slug, city.departmentCode, 10),
  }
}

/**
 * Get cities grouped by department
 */
export function getCitiesByDepartment(): Record<string, City[]> {
  const cities = getAllCities()
  const grouped: Record<string, City[]> = {}

  cities.forEach((city) => {
    if (!grouped[city.departmentCode]) {
      grouped[city.departmentCode] = []
    }
    grouped[city.departmentCode].push(city)
  })

  return grouped
}
