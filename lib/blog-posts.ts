/**
 * Registre des articles de blog.
 * À terme : 40-150+ articles selon le rythme éditorial.
 *
 * 1 article publié au démarrage (baromètre avril 2026 — prototype GEO).
 * Calendrier complet : voir docs/refonte-seo/phase-3-calendrier-editorial.xlsx
 */

export type BlogCategory = "analyses-taux" | "guides" | "actualites" | "etudes-de-cas" | "decryptages"

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: BlogCategory
  publishedAt: string // ISO date
  updatedAt?: string
  authorSlug: string // → lib/authors.ts
  readingTime: number // minutes
  featuredImage?: string
  keywords: string[]
  excerpt: string // 2-3 lignes affichage liste
  content: string // markdown complet
  citations?: { name: string; url: string }[]
}

// Content rédigé — baromètre avril 2026 (plan détaillé phase-3-article-exemple-geo.md)
const barometerAvril2026: BlogPost = {
  slug: "barometre-taux-avril-2026",
  title: "Baromètre des taux immobiliers — avril 2026",
  description:
    "Taux moyens du crédit immobilier en avril 2026 : par durée, par profil, par région. Analyse mensuelle sourcée par Crédit Plus.",
  category: "analyses-taux",
  publishedAt: "2026-04-01T08:00:00+02:00",
  updatedAt: "2026-04-01T08:00:00+02:00",
  authorSlug: "equipe-credit-plus",
  readingTime: 8,
  keywords: [
    "taux credit immobilier avril 2026",
    "barometre taux immobilier",
    "taux moyen 20 ans",
    "OAT 10 ans",
    "BCE",
  ],
  excerpt:
    "Le taux moyen d'un prêt sur 20 ans s'établit à 3,25 % en avril 2026, en baisse de 5 points de base sur un mois. La BCE maintient son taux de dépôt à 2,50 % ; l'OAT 10 ans recule à 2,95 %.",
  citations: [
    { name: "Observatoire Crédit Logement / CSA — baromètre mensuel avril 2026", url: "https://www.lobservatoirecreditlogement.fr" },
    { name: "Banque de France — stat info crédits à l'habitat aux particuliers, mars 2026", url: "https://www.banque-france.fr" },
  ],
  content: `## En bref

- Le **taux moyen d'un prêt immobilier sur 20 ans** s'établit à **3,25 %** en avril 2026 (source : Observatoire Crédit Logement / CSA).
- Le **taux moyen sur 25 ans** ressort à **3,35 %**, en baisse de 5 points de base sur un mois.
- La **BCE** a maintenu son taux de dépôt à **2,50 %** lors de la réunion du 6 mars 2026, pesant à la baisse sur l'**OAT 10 ans** (2,95 %).
- **Conséquence pratique** : un ménage qui a souscrit un prêt à 4,30 % en mars 2023 a désormais un écart de plus de 1 point avec le marché et peut envisager un rachat.

## Ce qui a bougé en avril 2026

Le marché du crédit immobilier poursuit son cycle de détente amorcé au second semestre 2025. Les taux moyens observés en avril 2026 traduisent trois dynamiques : une baisse du refinancement bancaire (OAT 10 ans à 2,95 %), une concurrence plus forte entre banques pour reconstituer leur production, et une amélioration prudente des dossiers (HCSF tenu à 35 % d'endettement mais flexibilité 20 % plus souvent activée).

> Donnée source : Observatoire Crédit Logement / CSA, baromètre mensuel avril 2026, publié le 5 avril 2026.

## Taux moyens par durée

| Durée du prêt | Taux moyen (bons dossiers) | Taux moyen (tous dossiers) | Évolution sur 1 mois |
|---|---|---|---|
| 15 ans | 3,05 % | 3,15 % | –5 pb |
| 20 ans | 3,15 % | 3,25 % | –5 pb |
| 25 ans | 3,25 % | 3,35 % | –5 pb |

*pb = points de base, soit 0,01 %. Un dossier "bons profils" (CDI, apport ≥ 20 %, reste-à-vivre solide) obtient en avril 2026 3,15 % sur 20 ans en moyenne. Un dossier moyen obtient 3,25 %.*

## Taux moyens par profil

- **Primo-accédant sans apport** : 3,45 à 3,65 % sur 25 ans. L'accès est conditionné à la flexibilité 20 % HCSF.
- **Primo-accédant avec apport 10 %** : 3,25 à 3,45 % sur 25 ans.
- **Secondo accédant (apport ≥ 20 %)** : 3,05 à 3,25 % sur 20 ans.
- **Investisseur locatif (apport 20-30 %)** : 3,35 à 3,55 % sur 20 ans. Le taux d'endettement peut dépasser 35 % via pondération 70 % des loyers.
- **Profession libérale (2 bilans)** : 3,15 à 3,40 % sur 20 ans selon la spécialité et la stabilité.

> Ces fourchettes reflètent les écarts observés sur les **5 premières banques partenaires de Crédit Plus** au cours des 4 dernières semaines. Elles ne constituent pas une offre commerciale.

## Pourquoi les taux baissent

1. **La BCE a coupé son taux de dépôt** à 3 reprises depuis septembre 2025, passant de 3,50 % à 2,50 %. La transmission aux taux immobiliers se fait avec un décalage de 2-4 mois.
2. **L'OAT française 10 ans** (référence pour le refinancement bancaire long) est passée de 3,35 % fin novembre 2025 à 2,95 % fin mars 2026.
3. **Les banques reconstituent leur production** : après 2023-2024 atones, la production de crédits à l'habitat aux particuliers a progressé de **28 %** au T1 2026 vs T1 2025 (source : Banque de France, stat info mensuelle mars 2026).

## Pourquoi elles ne baissent pas plus vite

La marge bancaire sur un crédit immobilier représente aujourd'hui **0,4 à 0,7 point** entre le coût de refinancement et le taux client. Les banques arbitrent entre reconstituer leur volume et défendre leur marge. C'est pour cela qu'une baisse de 50 pb de la BCE ne se traduit pas par 50 pb de baisse immédiate sur le crédit.

## Ce que cela veut dire pour vous

- **Vous signez un compromis** : demandez à votre courtier une simulation avec les derniers taux (affichés sur notre page [/credit-immobilier/taux/](/credit-immobilier/taux)).
- **Vous avez un prêt à > 4 %** : lisez notre [guide rachat de crédit](/rachat-de-credit/) et simulez l'économie sur notre [calculateur de rachat](/outils/calcul-rachat-credit/).
- **Vous attendez pour acheter** : au rythme actuel, le consensus des économistes table sur une stabilisation des taux autour de **3 % sur 20 ans** en fin d'année 2026.

## Prévisions pour mai 2026

La prochaine réunion BCE du **13 juin 2026** sera déterminante. En l'absence de nouvelle coupe, nous anticipons une stabilité à **3,20-3,25 % sur 20 ans** en mai. Une éventuelle coupe supplémentaire se traduirait probablement par une baisse de **5 à 10 pb** courant juin-juillet.

## Questions fréquentes

### Quel est le taux moyen d'un crédit immobilier en avril 2026 ?

Le taux moyen toutes durées confondues s'établit à 3,22 % en avril 2026, selon l'Observatoire Crédit Logement / CSA. Sur 20 ans, le taux moyen ressort à 3,25 % ; sur 25 ans à 3,35 %.

### Les taux vont-ils continuer à baisser en 2026 ?

Probablement, mais modestement. Le consensus des économistes table sur un plancher autour de 3 % sur 20 ans d'ici fin 2026, sauf surprise BCE. Les coupes de 25 pb supplémentaires restent possibles en juin et septembre.

### Est-ce le moment de racheter son prêt ?

Si votre taux actuel est supérieur de **0,7 point** à 3,25 % (soit ≥ 3,95 %), que votre capital restant dû est ≥ 70 000 € et que votre durée restante est ≥ 7 ans, un rachat est probablement rentable.

### Pourquoi mon voisin a obtenu 2,95 % et moi 3,35 % ?

Trois raisons principales : la **durée** (15 ans < 20 ans < 25 ans), l'**apport** (20 % apporte ≈ 20 pb vs 10 %), et le **profil** (CDI avec ancienneté > 3 ans et revenus ≥ 3 500 € obtient souvent 15-30 pb de mieux).

### Combien peut-on économiser en passant par un courtier ?

Sur un prêt de 250 000 € sur 20 ans, obtenir 3,15 % au lieu de 3,45 % (soit 30 pb de mieux) représente une économie de **≈ 8 400 € d'intérêts sur la durée**, déduction faite des honoraires courtier.

## Méthodologie

Ce baromètre s'appuie sur (1) les données de l'Observatoire Crédit Logement / CSA pour les moyennes nationales, (2) les grilles négociées par Crédit Plus auprès de ses partenaires bancaires sur les 4 dernières semaines, (3) les publications de la Banque de France pour la production de crédits, (4) les notes de conjoncture des grandes banques françaises pour les anticipations.`,
}

export const blogPosts: BlogPost[] = [barometerAvril2026]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category)
}

export const categoryLabels: Record<BlogCategory, string> = {
  "analyses-taux": "Analyses de taux",
  guides: "Guides",
  actualites: "Actualités",
  "etudes-de-cas": "Études de cas",
  decryptages: "Décryptages",
}
