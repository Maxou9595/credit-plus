import type { City } from "@/lib/city"

export function generateMetaTitle(city: City): string {
  return `Crédit immobilier à ${city.name} (${city.postalCode}) | Crédit Plus`
}
export function generateMetaDescription(city: City): string {
  return `Courtier en crédit immobilier à ${city.name}. Obtenez le meilleur taux pour votre projet immobilier dans les ${city.department}.`
}
export function generateH1(city: City): string {
  return `Courtier en crédit immobilier à ${city.name}`
}
export function generateIntroText(city: City): string {
  return `Crédit Plus vous accompagne dans votre projet de financement à ${city.name} et dans tout le département des ${city.department}.`
}
export function generateFAQQuestions(city: City) {
  return []
}
export function getOtherCitiesInDepartment(cities: City[], current: City): City[] {
  return cities.filter((c) => c.departmentCode === current.departmentCode && c.slug !== current.slug).slice(0, 5)
}
