/**
 * Registre des courtiers / auteurs Crédit Plus.
 *
 * IMPORTANT — E-E-A-T YMYL :
 *   Chaque courtier doit avoir son ORIAS individuel (différent du ORIAS entreprise).
 *   Les champs marqués // TODO sont à compléter par la direction avant publication définitive.
 */

export type Author = {
  slug: string
  name: string
  jobTitle?: string
  oriasNumber?: string // numéro ORIAS individuel
  photo?: string // chemin dans /public
  shortBio?: string
  longBio?: string
  linkedin?: string
  email?: string
  yearsOfExperience?: number
  specialties?: string[]
  credentials?: string[] // formations, diplômes, certifications
  city?: string
}

export const authors: Author[] = [
  // ── Fiche founder ─────────────────────────────────────────────────────
  // Infos publiques (ORIAS entreprise 25005566, SIREN 944 645 217, Carignan,
  // email maximeiori08@gmail.com). Les champs `TODO` ci-dessous sont à
  // compléter par Maxime avant mise en production définitive.
  {
    slug: "maxime-iori",
    name: "Maxime Iori", // TODO — confirmer l'orthographe exacte du nom civil
    jobTitle: "Fondateur & courtier IOBSP — Crédit Plus",
    city: "Carignan",
    email: "maximeiori08@gmail.com",
    // photo: "/team/maxime-iori.jpg",       // TODO — ajouter photo pro, fond neutre, 600×600 minimum
    // oriasNumber: "XXXXXXXX",              // TODO — ORIAS individuel (différent de 25005566 qui est celui de la société)
    // linkedin: "https://www.linkedin.com/in/maxime-iori",  // TODO — compléter
    // yearsOfExperience: X,                  // TODO — nombre d'années d'expérience en courtage
    specialties: [
      "Crédit immobilier",
      "Rachat de crédit",
      "Investissement locatif",
      "Assurance emprunteur",
    ],
    shortBio:
      "Fondateur de Crédit Plus (SAS IM COURTAGE, ORIAS n°25005566). Courtier IOBSP basé à Carignan dans les Ardennes, Maxime accompagne des particuliers partout en France pour leurs projets de crédit immobilier, rachat, investissement locatif et assurance emprunteur.",
    longBio:
      "Maxime a fondé Crédit Plus (SAS IM COURTAGE) en 2025 à Carignan, dans les Ardennes, avec une conviction simple : un bon courtier doit être joignable, transparent sur ses honoraires et rigoureux dans la négociation. Cette triple exigence structure l'ensemble des dossiers traités par le réseau.\n\nL'activité de Crédit Plus est strictement encadrée : immatriculation ORIAS n°25005566 (vérifiable publiquement sur orias.fr), contrôle par l'ACPR, respect des règles HCSF en 2026 (35 % d'endettement maximum, durée 25 ans max, flexibilité 20 %) et transparence tarifaire complète. Les honoraires client sont dus uniquement à la signature de l'offre de prêt, ce qui aligne les intérêts du courtier et du client.\n\nMaxime intervient sur l'ensemble du territoire avec deux implantations physiques (Carignan 08 et Dax 40) et des rendez-vous en visioconférence pour les autres régions. La grille tarifaire publique figure sur la page mentions légales.",
    credentials: [
      // TODO — compléter les formations / certifications obtenues :
      // "IOBSP niveau 1 — capacité professionnelle d'intermédiaire en opérations de banque et services de paiement (arrêté du 17 octobre 2013)",
      // "Formation initiale de X années (BTS Banque, licence, etc.)",
    ],
  },

  // Auteur-paravent pour les contenus signés par l'équipe éditoriale (pas
  // strictement personnalisables). Utile pour les articles de synthèse
  // produits en atelier éditorial avant validation par un courtier référent.
  {
    slug: "equipe-credit-plus",
    name: "L'équipe Crédit Plus",
    jobTitle: "Équipe éditoriale Crédit Plus",
    shortBio:
      "Cet article a été rédigé par l'équipe éditoriale de Crédit Plus, sous la supervision d'un courtier IOBSP inscrit à l'ORIAS. Contenu validé juridiquement avant publication.",
    longBio:
      "Crédit Plus est un courtier indépendant en crédit immobilier, rachat de crédit, investissement locatif et assurance emprunteur. Notre équipe éditoriale produit des guides et analyses sourcées (Observatoire Crédit Logement / CSA, Banque de France, HCSF, ACPR) à destination des particuliers. Chaque contenu est relu par un courtier IOBSP et validé en conformité avec les obligations ACPR et RGPD.",
    specialties: ["Crédit immobilier", "Rachat de crédit", "Investissement locatif"],
    city: "Carignan",
  },
]

/** Auteur par défaut utilisé pour les contenus qui ne sont pas signés nominativement. */
export const defaultAuthor: Author = authors.find((a) => a.slug === "maxime-iori") ?? authors[0]

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
