import type { MetadataRoute } from "next"
import { getAllB2CSlugs } from "@/lib/cities-b2c"
import { getAllGlossarySlugs } from "@/lib/glossary"
import { blogPosts } from "@/lib/blog-posts"
import { authors } from "@/lib/authors"

const SITE = "https://creditplus-france.com"

const RESEAU_VILLE_SLUGS_B2B = [
  "paris", "lyon", "marseille", "toulouse", "nice", "nantes",
  "strasbourg", "montpellier", "bordeaux", "lille", "rennes", "reims",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Piliers
    { url: `${SITE}/credit-immobilier`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE}/credit-immobilier/simulation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/investissement-locatif`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE}/rachat-de-credit`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE}/assurance-emprunteur`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE}/courtier-immobilier`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Pages filles — Crédit immobilier
    { url: `${SITE}/credit-immobilier/taux`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/credit-immobilier/taux/taux-15-ans`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${SITE}/credit-immobilier/taux/taux-20-ans`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/credit-immobilier/taux/taux-25-ans`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${SITE}/credit-immobilier/capacite-emprunt`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/credit-immobilier/apport-personnel`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/credit-immobilier/frais-de-notaire`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/credit-immobilier/pret-taux-zero-ptz`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/credit-immobilier/primo-accedant`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Pages filles — Investissement locatif
    { url: `${SITE}/investissement-locatif/lmnp`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/investissement-locatif/sci`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/investissement-locatif/deficit-foncier`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/investissement-locatif/pinel`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Pages filles — Rachat de crédit
    { url: `${SITE}/rachat-de-credit/renegociation-pret`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/rachat-de-credit/regroupement-credits`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Pages filles — Assurance emprunteur
    { url: `${SITE}/assurance-emprunteur/loi-lemoine`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/assurance-emprunteur/delegation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Outils
    { url: `${SITE}/outils/calcul-mensualites`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/outils/calcul-capacite-emprunt`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/outils/calcul-frais-de-notaire`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/outils/calcul-taux-endettement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/outils/simulation-ptz`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/outils/calcul-rachat-credit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/outils/tableau-amortissement`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE}/outils/comparateur-assurance-emprunteur`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/outils/attestation-financabilite`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/outils/calcul-transfert-pret`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },

    // E-E-A-T
    { url: `${SITE}/equipe`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE}/avis`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${SITE}/presse`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${SITE}/widgets/taux/embed-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },

    // Blog & Glossaire
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE}/glossaire`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // FAQ
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/faq/carignan`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/faq/dax`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Parrainage / contact
    { url: `${SITE}/parrainage`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Hub agences
    { url: `${SITE}/agences/partout-en-france`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // B2B
    { url: `${SITE}/reseau/devenir-courtier-independant`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Légal
    { url: `${SITE}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cgv`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const cityPages: MetadataRoute.Sitemap = getAllB2CSlugs().map((slug) => ({
    url: `${SITE}/agences/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
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
    priority: 0.7,
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
    priority: 0.55,
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
