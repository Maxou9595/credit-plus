import type { MetadataRoute } from "next"
import { getAllB2CSlugs } from "@/lib/cities-b2c"
import { getAllGlossarySlugs } from "@/lib/glossary"
import { blogPosts } from "@/lib/blog-posts"
import { authors } from "@/lib/authors"

/**
 * Sitemap dynamique de credit-plus.fr — refonte Phase 2.
 *
 * Sources :
 *   - Pages statiques piliers/outils/avis/équipe/contact/légal : hardcodées ici.
 *   - Pages villes B2C : lib/cities-b2c.ts
 *   - Glossaire : lib/glossary.ts
 *   - Blog : lib/blog-posts.ts
 *   - Équipe : lib/authors.ts
 *   - B2B recrutement (silo isolé) : slugs hardcodés, à migrer ultérieurement.
 */

const SITE = "https://credit-plus.fr"

// Silo B2B recrutement courtiers — isolé du silo B2C.
const RESEAU_VILLE_SLUGS_B2B = [
  "paris", "lyon", "marseille", "toulouse", "nice", "nantes",
  "strasbourg", "montpellier", "bordeaux", "lille", "rennes", "reims",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/credit-immobilier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/credit-immobilier/simulation`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/investissement-locatif`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/rachat-de-credit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/assurance-emprunteur`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/courtier-immobilier`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/outils/calcul-mensualites`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/equipe`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/avis`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/glossaire`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/faq/carignan`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/faq/dax`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/parrainage`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/agences/partout-en-france`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE}/reseau/devenir-courtier-independant`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cgv`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const cityPages: MetadataRoute.Sitemap = getAllB2CSlugs().map((slug) => ({
    url: `${SITE}/agences/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const networkCityPages: MetadataRoute.Sitemap = RESEAU_VILLE_SLUGS_B2B.map((slug) => ({
    url: `${SITE}/reseau/villes/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }))

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }))

  const glossaryPages: MetadataRoute.Sitemap = getAllGlossarySlugs().map((slug) => ({
    url: `${SITE}/glossaire/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  const authorPages: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${SITE}/equipe/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [
    ...staticPages,
    ...cityPages,
    ...networkCityPages,
    ...blogPostPages,
    ...glossaryPages,
    ...authorPages,
  ]
}
