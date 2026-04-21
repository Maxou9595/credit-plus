import type { MetadataRoute } from "next"

/**
 * Sitemap dynamique de credit-plus.fr.
 *
 * IMPORTANT — correctif de la phase 1 de la refonte SEO :
 * - L'ancienne version appelait `getAllCities()` qui lit `data/cities.json`,
 *   mais ce fichier est vide (`[]`). Résultat : ZÉRO URL ville dans la sitemap
 *   alors que le template `/ville/[slug]/page.tsx` sert déjà 10+ villes.
 * - L'URL `https://credit-plus.fr/blog` était listée mais la route n'existe pas
 *   → 404 = perte de crawl budget. Retirée jusqu'à la création du blog.
 * - `/partenaire/alpha-assurance` idem : page fantôme. Retirée.
 *
 * La source de vérité de la liste des villes est désormais ici, en attendant
 * la future migration vers une arbo `/agences/[slug]/` avec données déportées.
 */

const SITE = "https://credit-plus.fr"

// Liste B2B existante (recrutement courtiers) — alignée sur /ville/[slug]/page.tsx
const CITY_SLUGS_B2B = [
  "paris",
  "lyon",
  "marseille",
  "toulouse",
  "nice",
  "nantes",
  "strasbourg",
  "montpellier",
  "bordeaux",
  "lille",
  "rennes",
  "reims",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Pages services (piliers actuels — à migrer vers /credit-immobilier/ etc.)
    { url: `${SITE}/services/credit-immobilier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/services/investissement-locatif`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/services/rachat-de-credit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/services/assurance-emprunteur`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Agences physiques
    { url: `${SITE}/agences/carignan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/agences/dax`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/agences/partout-en-france`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Conversion / simulation
    { url: `${SITE}/demande-credit`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Réseau / B2B
    { url: `${SITE}/devenir-courtier-independant`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Preuve sociale & FAQ
    { url: `${SITE}/temoignages`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/faq/carignan`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/faq/dax`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Parrainage & contact
    { url: `${SITE}/parrainage`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Légal (priority basse mais à indexer)
    { url: `${SITE}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cgv`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  // Pages villes B2B — priority modérée pour ne pas phagocyter les pages piliers
  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS_B2B.map((slug) => ({
    url: `${SITE}/ville/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...cityPages]
}
