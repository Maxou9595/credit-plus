/**
 * Référentiel de taux marchés — mis à jour mensuellement.
 *
 * Unique source pour toutes les pages affichant un taux : pages piliers,
 * outils, baromètre blog, widget iframe, agences locales.
 *
 * ⚠️ Avant publication d'une mise à jour, VÉRIFIER auprès de l'Observatoire
 *    Crédit Logement / CSA (https://www.lobservatoirecreditlogement.fr)
 *    et de la Banque de France.
 */

export type MarketRates = {
  periodLabel: string
  sourceDate: string
  sourceName: string
  sourceUrl: string
  byDuration: {
    duration: string
    averageGood: number // taux bons profils
    averageAll: number // taux moyen tous profils
    change1m?: number // variation points de base sur 1 mois
  }[]
  byProfile: {
    label: string
    description?: string
    rateLow: number
    rateHigh: number
    durationLabel: string
  }[]
  ecbDepositRate: number
  oat10y: number
  nextEcbMeetingIso: string
}

/**
 * Taux de marché actuels — avril 2026.
 *
 * Taux « à partir de 2,90 % » pour les meilleurs dossiers sur 15 ans.
 * Les moyennes « tous dossiers » restent plus élevées.
 */
export const currentMarketRates: MarketRates = {
  periodLabel: "avril 2026",
  sourceDate: "2026-04-05",
  sourceName: "Observatoire Crédit Logement / CSA",
  sourceUrl: "https://www.lobservatoirecreditlogement.fr",
  byDuration: [
    { duration: "15 ans", averageGood: 2.9, averageAll: 3.1, change1m: -5 },
    { duration: "20 ans", averageGood: 3.05, averageAll: 3.25, change1m: -5 },
    { duration: "25 ans", averageGood: 3.2, averageAll: 3.4, change1m: -5 },
  ],
  byProfile: [
    { label: "Primo-accédant sans apport", rateLow: 3.45, rateHigh: 3.65, durationLabel: "25 ans" },
    { label: "Primo-accédant 10 % d'apport", rateLow: 3.2, rateHigh: 3.45, durationLabel: "25 ans" },
    { label: "Secondo-accédant (≥ 20 % d'apport)", rateLow: 2.9, rateHigh: 3.15, durationLabel: "20 ans" },
    { label: "Investisseur locatif", rateLow: 3.25, rateHigh: 3.55, durationLabel: "20 ans" },
    { label: "Profession libérale (2 bilans)", rateLow: 3.05, rateHigh: 3.4, durationLabel: "20 ans" },
  ],
  ecbDepositRate: 2.5,
  oat10y: 2.95,
  nextEcbMeetingIso: "2026-06-13",
}
