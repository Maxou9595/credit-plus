/**
 * Banques et assureurs partenaires de Crédit Plus.
 *
 * Liste des 20 principales banques françaises actives sur le crédit immobilier
 * aux particuliers en 2026, + les assureurs emprunteur délégués.
 *
 * Utilisée dans les pages piliers, les pages agences et la page /presse.
 */

export type Partner = {
  name: string
  type: "bank" | "insurer"
  category: "national" | "regional" | "online" | "specialized" | "insurance"
  strengths?: string[] // profils favoris
}

export const bankPartners: Partner[] = [
  // ─── Grandes banques nationales ─────────────────────────────────────
  { name: "BNP Paribas", type: "bank", category: "national", strengths: ["cadres", "primo-accédants urbains", "VEFA"] },
  { name: "Société Générale", type: "bank", category: "national", strengths: ["primo-accédants salariés", "cadres"] },
  { name: "LCL", type: "bank", category: "national", strengths: ["primo-accédants", "rachats"] },
  { name: "La Banque Postale", type: "bank", category: "national", strengths: ["primo-accédants modestes", "PTZ"] },
  { name: "Crédit du Nord (Société Générale)", type: "bank", category: "national", strengths: ["professions libérales"] },
  { name: "HSBC (CCF)", type: "bank", category: "national", strengths: ["hauts revenus", "expatriés"] },

  // ─── Mutualistes ─────────────────────────────────────────────────────
  { name: "Crédit Agricole (toutes caisses régionales)", type: "bank", category: "regional", strengths: ["primo-accédants locaux", "investisseurs", "tout profil"] },
  { name: "Caisse d'Épargne (groupe BPCE)", type: "bank", category: "regional", strengths: ["primo-accédants", "SCI"] },
  { name: "Banque Populaire (groupe BPCE)", type: "bank", category: "regional", strengths: ["TNS", "chefs d'entreprise", "investisseurs"] },
  { name: "Crédit Mutuel Alliance Fédérale", type: "bank", category: "regional", strengths: ["primo-accédants", "jeunes actifs"] },
  { name: "Crédit Mutuel Arkéa", type: "bank", category: "regional", strengths: ["Ouest de la France", "professions libérales"] },
  { name: "CIC", type: "bank", category: "national", strengths: ["cadres", "professions libérales", "dossiers atypiques"] },

  // ─── Banques en ligne ───────────────────────────────────────────────
  { name: "BoursoBank (ex-Boursorama)", type: "bank", category: "online", strengths: ["CSP+ digitaux", "taux agressifs"] },
  { name: "Fortuneo", type: "bank", category: "online", strengths: ["primo-accédants digitaux"] },
  { name: "Hello bank! (BNP)", type: "bank", category: "online", strengths: ["jeunes actifs", "primo-accédants"] },
  { name: "Monabanq", type: "bank", category: "online", strengths: ["primo-accédants", "rachats"] },

  // ─── Spécialisées ────────────────────────────────────────────────────
  { name: "AXA Banque Patrimoine", type: "bank", category: "specialized", strengths: ["patrimoniaux", "hauts revenus"] },
  { name: "Milleis Banque", type: "bank", category: "specialized", strengths: ["CSP+ urbains", "investisseurs"] },
  { name: "Crédit Foncier (en gestion extinctive)", type: "bank", category: "specialized", strengths: ["dossiers en cours"] },
  { name: "BGL BNP Paribas (Luxembourg)", type: "bank", category: "specialized", strengths: ["frontaliers Luxembourg"] },
]

export const insurancePartners: Partner[] = [
  { name: "April", type: "insurer", category: "insurance", strengths: ["tous profils", "loi Lemoine"] },
  { name: "Cardif (BNP Paribas)", type: "insurer", category: "insurance", strengths: ["contrats groupe"] },
  { name: "Generali", type: "insurer", category: "insurance", strengths: ["cadres", "seniors"] },
  { name: "MetLife", type: "insurer", category: "insurance", strengths: ["tarifs compétitifs jeunes"] },
  { name: "SwissLife", type: "insurer", category: "insurance", strengths: ["patrimoniaux"] },
  { name: "MNCAP", type: "insurer", category: "insurance", strengths: ["convention AERAS"] },
  { name: "UNIM", type: "insurer", category: "insurance", strengths: ["professions médicales"] },
  { name: "Allianz", type: "insurer", category: "insurance", strengths: ["profils standards"] },
]

export const allPartners = [...bankPartners, ...insurancePartners]

export function getBanksByCategory(category: Partner["category"]): Partner[] {
  return bankPartners.filter((p) => p.category === category)
}
