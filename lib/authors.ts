/**
 * Registre des courtiers / auteurs Crédit Plus.
 *
 * E-E-A-T YMYL : chaque courtier est nommément identifiable avec son
 * ORIAS et son parcours. Crédit Plus s'appuie sur un réseau de partenaires
 * apportant ensemble plus de 15 ans d'expérience bancaire et des dizaines
 * d'années cumulées en courtage.
 */

export type Author = {
  slug: string
  name: string
  jobTitle?: string
  oriasNumber?: string
  photo?: string
  shortBio?: string
  longBio?: string
  linkedin?: string
  email?: string
  yearsOfExperience?: number
  specialties?: string[]
  credentials?: string[]
  city?: string
}

export const authors: Author[] = [
  {
    slug: "maxime-iori",
    name: "Maxime IORI",
    jobTitle: "Fondateur — Crédit Plus",
    city: "Carignan",
    email: "contact@credit-plus.fr",
    shortBio:
      "Fondateur de Crédit Plus (SAS IM COURTAGE, ORIAS n°25005566). Maxime IORI s'appuie sur un réseau de courtiers et conseillers bancaires qui cumulent plus de 15 ans d'expérience en banque et plusieurs décennies d'expertise en courtage, au service des particuliers partout en France.",
    longBio:
      "Maxime IORI a fondé Crédit Plus en 2025 à Carignan, dans les Ardennes, avec l'ambition de conjuguer la proximité d'un courtier indépendant et la puissance d'un réseau national de partenaires bancaires.\n\nLe réseau de courtiers et conseillers bancaires partenaires de Crédit Plus compte plusieurs profils expérimentés : plus de 15 ans en banque de détail pour certains, des décennies cumulées de pratique du courtage pour d'autres. Cette expérience collective permet d'aborder l'ensemble des situations — primo-accédants, investisseurs locatifs, rachats de crédit, assurance emprunteur — sans sous-traiter les dossiers complexes.\n\nL'activité est strictement encadrée : immatriculation ORIAS n°25005566 (vérifiable publiquement sur orias.fr), contrôle ACPR, respect des règles HCSF 2026 (35 % d'endettement maximum, durée 25 ans, flexibilité 20 %). Les honoraires ne sont dus qu'à la signature de l'offre de prêt — aucun frais préalable n'est jamais demandé.",
  },
  {
    slug: "equipe-credit-plus",
    name: "L'équipe Crédit Plus",
    jobTitle: "Équipe éditoriale Crédit Plus",
    shortBio:
      "Cet article a été rédigé par l'équipe éditoriale de Crédit Plus, sous la supervision d'un courtier IOBSP inscrit à l'ORIAS. Contenu validé juridiquement avant publication.",
    longBio:
      "Crédit Plus est un courtier indépendant en crédit immobilier, rachat de crédit, investissement locatif et assurance emprunteur. Notre équipe éditoriale produit des guides et analyses sourcées (Observatoire Crédit Logement / CSA, Banque de France, HCSF, ACPR) à destination des particuliers. Chaque contenu est relu par un courtier IOBSP et validé en conformité avec les obligations ACPR et RGPD.",
    city: "Carignan",
  },
]

export const defaultAuthor: Author = authors.find((a) => a.slug === "maxime-iori") ?? authors[0]

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
