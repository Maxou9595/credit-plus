/**
 * Registre des courtiers / auteurs Crédit Plus.
 *
 * IMPORTANT — E-E-A-T YMYL :
 *   Chaque courtier doit avoir son ORIAS individuel (différent du ORIAS entreprise).
 *   Les champs marqués // TODO sont à compléter par la direction avant publication.
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
  // TODO — compléter avec les fiches individuelles des courtiers Crédit Plus :
  //
  // {
  //   slug: "prenom-nom",
  //   name: "Prénom NOM",
  //   jobTitle: "Courtier IOBSP — Crédit Plus",
  //   oriasNumber: "XXXXXXXX",            // ORIAS individuel
  //   photo: "/team/prenom-nom.jpg",      // photo pro visage, fond neutre
  //   shortBio: "X ans d'expérience en courtage. Spécialisé en ...",
  //   longBio: "Paragraphe long : parcours, formations, expériences précédentes.",
  //   linkedin: "https://www.linkedin.com/in/...",
  //   email: "prenom.nom@credit-plus.fr",
  //   yearsOfExperience: X,
  //   specialties: ["Primo-accédants", "SCI", "Non-résidents"],
  //   credentials: [
  //     "IOBSP niveau 1 (arrêté du 17 octobre 2013)",
  //     "BTS Banque — conseiller de clientèle (ou équivalent)",
  //     "Certification AMF (si applicable)",
  //   ],
  //   city: "Carignan",
  // },
]

/** Auteur par défaut utilisé tant que les fiches individuelles ne sont pas renseignées. */
export const defaultAuthor: Author = authors[0]

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
