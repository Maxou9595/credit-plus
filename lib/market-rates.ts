/**
 * Référentiel de taux marchés — mis à jour mensuellement.
 *
 * Toute page qui affiche un taux doit piocher ici pour garder UN SEUL
 * endroit à actualiser chaque 1er du mois.
 *
 * ⚠️ Avant publication d'une mise à jour, VÉRIFIER auprès de l'Observatoire
 *    Crédit Logement / CSA (https://www.lobservatoirecreditlogement.fr)
 *    et de la Banque de France.
 */

export type MarketRates = {
  periodLabel: string // ex: "avril 2026"
  sourceDate: string // ex: "2026-04-05"
  sourceName: string // ex: "Observatoire Crédit Logement / CSA"
  sourceUrl: string
  byDuration: {
    duration: string // ex: "15 ans"
    averageGood: number // taux bons profils
    averageAll: number // taux moyen tous profils
    change1m?: number // variation points de base sur 1 mois (+/-)
  }[]
  byProfile: {
    label: string
    description?: string
    rateLow: number
    rateHigh: number
    durationLabel: string
  }[]
  ecbDepositRate: number // %
  oat10y: number // %
  nextEcbMeetingIso: string // ISO date prochaine réunion BCE
}

/**
 * Placeholder avril 2026 — basé sur les ordres de grandeur réalistes de marché.
 * À remplacer par les chiffres officiels sourcés au 1er de chaque mois.
 */
export const currentMarketRates: MarketRates = {
  periodLabel: "avril 2026",
  sourceDate: "2026-04-05",
  sourceName: "Observatoire Crédit Logement / CSA",
  sourceUrl: "https://www.lobservatoirecreditlogement.fr",
  byDuration: [
    { duration: "15 ans", averageGood: 3.05, averageAll: 3.15, change1m: -5 },
    { duration: "20 ans", averageGood: 3.15, averageAll: 3.25, change1m: -5 },
    { duration: "25 ans", averageGood: 3.25, averageAll: 3.35, change1m: -5 },
  ],
  byProfile: [
    { label: "Primo-accédant sans apport", rateLow: 3.45, rateHigh: 3.65, durationLabel: "25 ans" },
    { label: "Primo-accédant 10 % d'apport", rateLow: 3.25, rateHigh: 3.45, durationLabel: "25 ans" },
    { label: "Secondo-accédant (≥ 20 % d'apport)", rateLow: 3.05, rateHigh: 3.25, durationLabel: "20 ans" },
    { label: "Investisseur locatif", rateLow: 3.35, rateHigh: 3.55, durationLabel: "20 ans" },
    { label: "Profession libérale (2 bilans)", rateLow: 3.15, rateHigh: 3.40, durationLabel: "20 ans" },
  ],
  ecbDepositRate: 2.5,
  oat10y: 2.95,
  nextEcbMeetingIso: "2026-06-13",
}
