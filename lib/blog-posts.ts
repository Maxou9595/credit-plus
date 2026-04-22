/**
 * Registre des articles de blog.
 * À terme : 40-150+ articles selon le rythme éditorial.
 *
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

// ───────────────────────────────────────────────────────────────────────
// Baromètre avril 2026 — prototype GEO
// ───────────────────────────────────────────────────────────────────────
const barometerAvril2026: BlogPost = {
  slug: "barometre-taux-avril-2026",
  title: "Baromètre des taux immobiliers — avril 2026",
  description:
    "Taux moyens du crédit immobilier en avril 2026 : par durée, par profil, par région. Analyse mensuelle sourcée par Crédit Plus.",
  category: "analyses-taux",
  publishedAt: "2026-04-01T08:00:00+02:00",
  updatedAt: "2026-04-01T08:00:00+02:00",
  authorSlug: "maxime-iori",
  readingTime: 8,
  keywords: ["taux credit immobilier avril 2026", "barometre taux immobilier", "taux moyen 20 ans", "OAT 10 ans", "BCE"],
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

*pb = points de base, soit 0,01 %. Un dossier « bons profils » obtient en avril 2026 3,15 % sur 20 ans en moyenne. Un dossier moyen obtient 3,25 %.*

## Taux moyens par profil

- **Primo-accédant sans apport** : 3,45 à 3,65 % sur 25 ans. L'accès est conditionné à la flexibilité 20 % HCSF.
- **Primo-accédant avec apport 10 %** : 3,25 à 3,45 % sur 25 ans.
- **Secondo-accédant (apport ≥ 20 %)** : 3,05 à 3,25 % sur 20 ans.
- **Investisseur locatif (apport 20-30 %)** : 3,35 à 3,55 % sur 20 ans. Le taux d'endettement peut dépasser 35 % via pondération 70 % des loyers.
- **Profession libérale (2 bilans)** : 3,15 à 3,40 % sur 20 ans selon la spécialité.

## Pourquoi les taux baissent

1. **La BCE a coupé son taux de dépôt** à 3 reprises depuis septembre 2025, passant de 3,50 % à 2,50 %. La transmission aux taux immobiliers se fait avec un décalage de 2-4 mois.
2. **L'OAT française 10 ans** est passée de 3,35 % fin novembre 2025 à 2,95 % fin mars 2026.
3. **Les banques reconstituent leur production** : après 2023-2024 atones, la production de crédits à l'habitat aux particuliers a progressé de 28 % au T1 2026 vs T1 2025.

## Ce que cela veut dire pour vous

- **Vous signez un compromis** : demandez une simulation avec les derniers taux.
- **Vous avez un prêt à > 4 %** : lisez notre [guide rachat de crédit](/rachat-de-credit/) et simulez l'économie sur [/outils/calcul-rachat-credit/](/outils/calcul-rachat-credit/).
- **Vous attendez pour acheter** : le consensus des économistes table sur une stabilisation autour de 3 % sur 20 ans en fin d'année 2026.

## Prévisions pour mai 2026

La prochaine réunion BCE du 13 juin 2026 sera déterminante. En l'absence de nouvelle coupe, nous anticipons une stabilité à 3,20-3,25 % sur 20 ans en mai.`,
}

// ───────────────────────────────────────────────────────────────────────
// Guide — PTZ 2026 complet
// ───────────────────────────────────────────────────────────────────────
const ptzGuide2026: BlogPost = {
  slug: "ptz-2026-guide-complet",
  title: "PTZ 2026 : guide complet des zones, plafonds et montants",
  description: "Tout savoir sur le Prêt à Taux Zéro 2026 : zonage A/B1/B2/C, plafonds de ressources, montant prêtable, durée de remboursement.",
  category: "guides",
  publishedAt: "2026-05-03T08:00:00+02:00",
  authorSlug: "maxime-iori",
  readingTime: 10,
  keywords: ["PTZ 2026", "prêt à taux zéro", "zone A B1 B2 C", "plafond ressources PTZ", "primo-accédant"],
  excerpt: "Le PTZ 2026 finance jusqu'à 40 % d'un neuf collectif en zone A, sous conditions de ressources. Éligibilité, zonage, montant : le guide officiel de Crédit Plus.",
  citations: [
    { name: "Arrêté du 29 décembre 2023 relatif au PTZ 2024-2027", url: "https://www.legifrance.gouv.fr" },
    { name: "ANIL — Agence Nationale pour l'Information sur le Logement", url: "https://www.anil.org" },
  ],
  content: `## En bref

- Le **PTZ 2026** finance entre **10 % et 40 %** du projet, **sans intérêts ni frais**.
- Réservé aux **primo-accédants** (ne pas avoir été propriétaire de sa résidence principale depuis 2 ans).
- Éligible : **neuf collectif** en zones A/B1/B2, **ancien avec travaux de rénovation énergétique** en zones B2/C.
- Plafonds de ressources variables selon **taille du foyer** et **zone géographique**.
- Durée de remboursement jusqu'à **25 ans** avec différé de 5 à 15 ans selon les revenus.

## Qu'est-ce que le PTZ

Le Prêt à Taux Zéro (PTZ) est une aide publique au financement du premier achat de résidence principale. Il prend la forme d'un prêt complémentaire au prêt principal, sans intérêts ni frais de dossier. L'État compense la perte pour la banque qui accorde le PTZ.

Le PTZ a été créé en 1995 et renouvelé à plusieurs reprises. La version 2024-2027, issue de l'arrêté du 29 décembre 2023, concentre le dispositif sur le logement collectif neuf en zones tendues et l'ancien rénové en zones détendues.

## Qui peut en bénéficier en 2026

Trois conditions cumulatives :

1. **Être primo-accédant** : ne pas avoir été propriétaire de sa résidence principale au cours des 2 dernières années (avec quelques exceptions : titulaires de la carte d'invalidité, bénéficiaires de l'AAH ou de l'AEEH, victimes d'une catastrophe naturelle rendant leur logement définitivement inhabitable).
2. **Respecter les plafonds de ressources** : définis selon la zone et la taille du foyer (voir tableau ci-dessous).
3. **Acheter une résidence principale** : le logement doit être occupé au moins 8 mois par an, au plus tard 1 an après l'achat ou la fin des travaux.

## Les zones du PTZ en 2026

Le territoire français est découpé en 4 zones selon la tension du marché immobilier :

- **Zone A bis** : Paris et petite couronne.
- **Zone A** : agglomération parisienne étendue, Côte d'Azur, frontière suisse.
- **Zone B1** : métropoles de plus de 250 000 habitants (Lyon, Marseille, Toulouse, Strasbourg, Reims, Rennes, Nantes, etc.).
- **Zone B2** : villes moyennes (entre 50 000 et 250 000 hab.) et agglomérations périphériques.
- **Zone C** : reste du territoire (zones rurales, petites villes).

Charleville-Mézières, Reims, Metz, Nancy, Strasbourg et Dijon relèvent de la **zone B1** ; Sedan, Carignan et la plupart des Ardennes sont en **zone C**.

## Montant prêtable en 2026

Le PTZ couvre un pourcentage du coût total de l'opération, plafonné selon la zone et la nature du projet :

| Zone | Neuf collectif | Ancien rénové | Tranche 1 (bas revenus) | Tranche 4 (revenus plus élevés) |
|---|---|---|---|---|
| A | 40 % | Non éligible | 100 k€ max | 40 k€ max |
| B1 | 40 % | Non éligible | 80 k€ max | 32 k€ max |
| B2 | 40 % | 20 % | 60 k€ max | 24 k€ max |
| C | Non éligible | 20 % | 40 k€ max | 16 k€ max |

*Chiffres indicatifs, à vérifier avec les barèmes officiels en vigueur au jour de la demande.*

## Plafonds de ressources

Les plafonds de ressources sont calculés sur le revenu fiscal de référence N-2 divisé par un **coefficient familial**. En 2026, pour une demande déposée :

| Personnes | Zone A bis / A | Zone B1 | Zone B2 | Zone C |
|---|---|---|---|---|
| 1 | 49 000 € | 34 500 € | 31 500 € | 28 500 € |
| 2 | 73 500 € | 51 750 € | 47 250 € | 42 750 € |
| 3 | 88 200 € | 62 100 € | 56 700 € | 51 300 € |
| 4 | 102 900 € | 72 450 € | 66 150 € | 59 850 € |
| 5+ | 117 600 € | 82 800 € | 75 600 € | 68 400 € |

*Plafonds indicatifs 2026. À confirmer sur la base du barème officiel.*

## Durée du prêt et différé

La durée totale du PTZ est de 20 à 25 ans. Le remboursement se fait en deux phases :

- **Phase 1 (différé)** : 5, 10 ou 15 ans selon la tranche de revenus. Aucun remboursement n'est demandé pendant cette période.
- **Phase 2 (remboursement)** : le capital est remboursé en mensualités constantes sur la période restante.

Exemple : pour un PTZ de 40 000 € en tranche 1, la durée est typiquement 25 ans avec 15 ans de différé, puis 10 ans de remboursement à environ 334 €/mois.

## Le PTZ se cumule

Le PTZ doit obligatoirement être couplé à un **prêt principal** (crédit immobilier classique). Il peut également se cumuler avec :

- Un **prêt Action Logement (1 % logement)** sous conditions d'employeur.
- Un **prêt conventionné** ou un prêt à l'accession sociale (PAS).
- Un **PEL / CEL** mobilisé en apport.
- Des **aides locales** (certaines collectivités proposent des prêts à taux bonifié en complément du PTZ).

## Comment en faire la demande

Le PTZ n'est pas demandé à l'État directement : c'est la **banque partenaire** qui l'accorde en même temps que le prêt principal. Toutes les banques ne distribuent pas le PTZ. Un courtier IOBSP comme Crédit Plus identifie les banques PTZ partenaires les plus adaptées à votre profil et dépose le dossier complet.

## Cas pratiques

**Cas 1** — Couple primo-accédant à Reims (zone B1), revenus 45 000 €/an, achat d'un T3 neuf à 220 000 €. PTZ maximal = 40 % × 220 000 € = 88 000 €, mais plafonné à 80 000 € en zone B1 → PTZ de 80 000 €. Complété par un prêt classique de 140 000 € sur 25 ans à 3,35 % → mensualité totale ≈ 900 €.

**Cas 2** — Célibataire primo-accédant à Charleville-Mézières (zone C), revenus 28 000 €/an, achat d'un appartement ancien à 110 000 € avec 20 000 € de travaux énergétiques. PTZ maximal = 20 % × 130 000 € = 26 000 €, plafonné à 40 000 € en tranche 1 → PTZ de 26 000 €. Complété par un prêt classique de 104 000 €.

## Limites et points de vigilance

- Le PTZ 2026 ne finance **pas les maisons individuelles neuves** (exclues depuis le recentrage de 2024).
- Les travaux de rénovation énergétique doivent représenter **au moins 25 %** du coût total, et la performance énergétique cible doit être atteinte.
- Le PTZ ne peut être accordé qu'**une seule fois** (sauf cas exceptionnels).
- Les plafonds de ressources sont vérifiés à la **signature de l'offre de prêt**, pas au moment du compromis.

## Faire simuler son PTZ

Utilisez notre [simulateur PTZ 2026](/outils/simulation-ptz/) pour chiffrer votre éligibilité et le montant mobilisable en 2 minutes.`,
}

// ───────────────────────────────────────────────────────────────────────
// Guide — HCSF 35 % : les 4 règles 2026
// ───────────────────────────────────────────────────────────────────────
const hcsfRules: BlogPost = {
  slug: "hcsf-35-pourcent-regles-2026",
  title: "HCSF : les 4 règles qui s'appliquent à votre crédit immobilier en 2026",
  description: "Règle 35 % d'endettement, plafond 25 ans, flexibilité 20 %, sanctions. Tout ce que vous devez savoir sur le HCSF avant de déposer un dossier.",
  category: "guides",
  publishedAt: "2026-05-06T08:00:00+02:00",
  authorSlug: "maxime-iori",
  readingTime: 8,
  keywords: ["HCSF 2026", "règle 35 %", "taux endettement", "durée crédit 25 ans", "flexibilité 20 %"],
  excerpt: "Le HCSF impose depuis 2022 quatre règles juridiquement contraignantes aux banques. Synthèse des 4 règles et des dérogations possibles.",
  citations: [
    { name: "Décision HCSF n°D-HCSF-2021-7 (Journal Officiel du 29 septembre 2021)", url: "https://www.legifrance.gouv.fr" },
    { name: "ACPR — rapport sur l'application des règles HCSF", url: "https://acpr.banque-france.fr" },
  ],
  content: `## En bref

- **4 règles** contraignantes imposées aux banques depuis le 1er janvier 2022.
- **Plafond d'endettement 35 %** des revenus nets, assurance emprunteur incluse.
- **Durée maximale 25 ans** (27 ans avec différé VEFA).
- **Flexibilité 20 %** : les banques peuvent déroger pour 20 % de leur production trimestrielle, dont 70 % pour les primo-accédants.
- Sanctions ACPR en cas de non-respect.

## Qu'est-ce que le HCSF

Le Haut Conseil de Stabilité Financière (HCSF) est l'autorité macroprudentielle française. Présidé par le ministre de l'Économie, il réunit le gouverneur de la Banque de France, le président de l'ACPR, celui de l'AMF et celui de l'ANC (Autorité des Normes Comptables).

Jusqu'en 2021, le HCSF formulait des **recommandations** aux banques sur les conditions d'octroi des crédits immobiliers. Depuis la décision du 29 septembre 2021, ces recommandations sont devenues **juridiquement contraignantes** — toute banque qui ne les respecte pas s'expose à des sanctions de l'ACPR.

## Les 4 règles en détail

### Règle 1 — Taux d'endettement ≤ 35 %

Le taux d'endettement est calculé comme suit :

\`\`\`
Taux d'endettement = (mensualité totale + mensualités des autres crédits) / revenus nets mensuels
\`\`\`

La mensualité totale inclut : le capital, les intérêts, l'assurance emprunteur. Les revenus nets pris en compte sont nets de cotisations sociales mais bruts d'impôt sur le revenu.

**Exemple** : un couple aux revenus nets de 5 000 €/mois peut rembourser au maximum 1 750 €/mois (5 000 × 35 %), assurance comprise.

### Règle 2 — Durée maximale 25 ans

La durée totale du prêt ne peut excéder 25 ans. Deux exceptions :

- **VEFA (vente en l'état futur d'achèvement)** : durée maximale portée à 27 ans avec un différé de 2 ans.
- **Ancien avec travaux lourds (≥ 25 % du coût total)** : même règle, 27 ans avec différé.

### Règle 3 — Flexibilité 20 %

Les banques peuvent déroger aux règles 1 et 2 pour **20 % de leur production trimestrielle de crédits immobiliers**. Cette flexibilité est encadrée :

- **70 %** de ces dérogations doivent bénéficier à des **primo-accédants** ou à des **achats de résidence principale**.
- **30 %** restent à la discrétion de la banque (investisseurs, secondo-accédants, projets atypiques).

En pratique, cette flexibilité permet de financer des dossiers à 37-40 % d'endettement si le reste-à-vivre est très solide, ou des durées de 27-30 ans dans des cas exceptionnels.

### Règle 4 — Pas de flexibilité au-delà de 40 % d'endettement

Même avec la flexibilité 20 %, aucune banque ne peut accorder un crédit dépassant **40 % d'endettement**. C'est un plafond absolu.

## Ce qui est INCLU dans le calcul du taux d'endettement

- Toutes les mensualités de crédits à la consommation, auto, revolving, étudiants en cours.
- Les pensions alimentaires versées.
- Les loyers en cours (si conservation de la résidence actuelle).
- La mensualité du nouveau crédit immobilier (capital + intérêts + assurance).

## Ce qui est EXCLU du calcul

- Les charges courantes (énergie, télécom, alimentation) — elles sont analysées via le reste-à-vivre.
- Les impôts sur le revenu.
- Les crédits qui seront soldés par le rachat (dans le cas d'un regroupement).

## Le reste-à-vivre — complément non HCSF

Le HCSF fixe le plafond à 35 % mais n'impose pas de reste-à-vivre minimum. Chaque banque définit le sien, typiquement :

- **700-900 €/mois pour une personne seule**
- **1 200-1 500 €/mois pour un couple**
- **+ 300-400 €/mois par enfant à charge**

Ces seuils peuvent être ajustés selon la zone géographique et le profil.

## Sanctions en cas de non-respect

L'ACPR contrôle trimestriellement les banques. Un établissement qui dépasserait les seuils s'expose à :

1. Un **avertissement** administratif.
2. Une **amende** pouvant atteindre plusieurs millions d'euros.
3. Dans les cas extrêmes, un **retrait d'agrément**.

C'est pour cette raison que les banques appliquent la règle strictement, même sur des dossiers individuellement très solides.

## Comment un courtier négocie avec le HCSF

Un courtier IOBSP connaît pour chaque banque :

- Le **taux de remplissage** de sa flexibilité 20 % au trimestre en cours.
- Les **profils prioritaires** (certaines banques utilisent leur flexibilité surtout sur les primo, d'autres sur les TNS).
- Les **périodes favorables** (début ou fin de trimestre).

Il oriente votre dossier vers la banque la plus favorable à votre cas au moment de la demande. Cette connaissance du marché bancaire fait une différence concrète sur les dossiers à la limite des 35 %.

## Questions fréquentes

**Le HCSF s'applique-t-il à toutes les banques ?** Oui, toutes les banques françaises, quelle que soit leur taille ou leur forme (réseau national, caisse régionale, néobanque).

**Les banques étrangères sont-elles soumises au HCSF ?** Oui si elles commercialisent des crédits immobiliers en France à des résidents français.

**Puis-je contester un refus de crédit au motif du HCSF ?** Non. La banque n'est pas obligée de motiver son refus et applique ses propres règles internes en plus du HCSF.

**Le HCSF va-t-il évoluer en 2026 ?** Le HCSF réexamine ses règles deux fois par an. Pour 2026, aucune modification majeure n'a été annoncée.`,
}

// ───────────────────────────────────────────────────────────────────────
// Guide — Apport personnel 2026
// ───────────────────────────────────────────────────────────────────────
const apportGuide: BlogPost = {
  slug: "apport-personnel-credit-immobilier-2026",
  title: "Apport personnel 2026 : combien vraiment et pour quels profils ?",
  description: "Règle des 10 %, profils qui peuvent emprunter à 110 %, sources d'apport acceptées, exemples chiffrés. Le guide complet.",
  category: "guides",
  publishedAt: "2026-05-08T08:00:00+02:00",
  authorSlug: "maxime-iori",
  readingTime: 9,
  keywords: ["apport personnel credit immobilier", "apport 10 %", "sans apport", "emprunt 110 %", "primo-accedant"],
  excerpt: "Les banques attendent 10 % d'apport pour couvrir les frais de notaire. Sans apport, c'est possible mais sous conditions strictes. Chiffres 2026.",
  citations: [
    { name: "Observatoire Crédit Logement / CSA — rapports mensuels 2026", url: "https://www.lobservatoirecreditlogement.fr" },
  ],
  content: `## En bref

- La **règle des 10 %** : l'apport minimum couvre les frais de notaire et de garantie.
- **Sans apport** (emprunt à 110 %), c'est possible pour les profils CDI long, revenus élevés, reste-à-vivre solide, via la flexibilité 20 % HCSF.
- L'**apport idéal** est de 20 % : il améliore le taux de 15-25 points de base et accroît l'acceptation bancaire.
- Sources d'apport acceptées : épargne personnelle, donation, PEL/CEL, participation, prêts aidés.

## La règle des 10 % expliquée

En 2026, les banques françaises demandent en moyenne un apport personnel équivalent à **10 % du prix d'achat**. Ce chiffre est un ordre de grandeur : il peut descendre à 5 % pour les profils exceptionnels et monter à 20-30 % pour les dossiers fragiles.

À quoi sert cet apport ? Il couvre **les frais annexes** que la banque ne finance pas ou rarement :

- **Frais de notaire** : 7-8 % dans l'ancien, 2-3 % dans le neuf.
- **Frais de garantie** : 0,8-1,5 % (caution Crédit Logement) ou 1-2 % (hypothèque).
- **Frais de dossier bancaire** : 500-1 500 €, souvent négociables.

**Exemple** : achat d'un appartement à 250 000 € dans l'ancien. Frais annexes = 250 000 × 9 % ≈ 22 500 €. L'apport minimum pour couvrir ces frais est donc autour de 22 500 €, soit 9 % du prix. Les banques demandent typiquement au moins cette somme, plus souvent un peu plus pour sécuriser le dossier.

## Peut-on emprunter sans apport en 2026 ?

Oui, mais sous conditions. L'**emprunt à 110 %** (la banque finance 100 % du bien + les frais annexes) existe toujours en 2026, mais il est réservé à :

- **Les primo-accédants avec un CDI long** (≥ 3 ans dans l'entreprise).
- **Les profils CSP+ avec revenus élevés** (≥ 4 500 € nets individuels ou 6 000 € en couple).
- **Les dossiers avec un reste-à-vivre très confortable** (> 2 000 € après déduction de la nouvelle mensualité).
- **Les jeunes actifs démarrant leur carrière** (banques acceptant le raisonnement "capacité d'épargne future").

La banque utilise alors sa **flexibilité HCSF 20 %** : rappel, chaque banque peut déroger à 20 % de sa production trimestrielle, dont 70 % pour les primo-accédants ou résidences principales.

En pratique, un dossier à 110 % demande :

- Un **courtier IOBSP** qui connaît les banques utilisant leur flexibilité sur ce type de dossier.
- Un **dossier solide** côté bulletins de salaire, relevés de compte sans découvert, pas de crédit consommation.

## L'apport idéal : 20 %

Si l'apport de 10 % est un minimum fonctionnel, l'apport de 20 % est **l'optimum économique** :

- **Taux amélioré** de 15 à 25 points de base (ex. 3,15 % au lieu de 3,40 %).
- **Accord bancaire** plus facile à obtenir — la banque prend moins de risque.
- **Moins de dette totale** — l'économie sur les intérêts couvre largement le coût d'opportunité de l'apport.

**Exemple chiffré** : achat 250 000 €, prêt sur 20 ans.
- Avec 10 % d'apport (25 000 €) → prêt 247 500 € à 3,40 %, coût total ≈ 90 000 € d'intérêts.
- Avec 20 % d'apport (50 000 €) → prêt 220 000 € à 3,15 %, coût total ≈ 73 700 € d'intérêts.
- **Différence** : 16 300 € d'intérêts économisés.

## Au-delà de 30 %, le gain marginal devient faible

Au-delà de 30 % d'apport, les taux bancaires ne descendent plus significativement. L'argent bloqué en apport ne rapporte plus suffisamment par rapport à un placement ailleurs (même un livret A à 3 % rapporte davantage que les 5-10 points de base gagnés au-delà de 30 %).

Recommandation : **ne pas dépasser 30 % d'apport** pour préserver votre liquidité et diversifier votre patrimoine.

## Sources d'apport acceptées par les banques

- **Épargne personnelle** (livrets A/LDDS, comptes courants, assurance-vie) — la source la plus simple et universellement acceptée.
- **PEL / CEL** — apport + droit à prêt aidé (PEL) à taux fixé à l'ouverture.
- **Donation familiale** — à justifier par un acte notarié ou une attestation de don manuel.
- **Participation / intéressement** débloqué — à condition d'être disponible à la signature.
- **PEE / PERCO** déblocage anticipé pour achat de résidence principale (cas de déblocage légal).
- **Action Logement (1 % logement)** — employeurs cotisants, jusqu'à 40 000 € à taux bonifié.
- **Épargne longue** (PEA, PEP en liquidation) — à arbitrer selon la fiscalité.

## Ce que les banques N'ACCEPTENT PAS comme apport

- Un **crédit à la consommation** souscrit en parallèle pour financer l'apport (pratique interdite).
- Une **donation non déclarée** ou non formalisée.
- Des **revenus futurs** ou une promesse d'intéressement non versée.
- Des **cryptomonnaies** non converties en euros (trop volatiles).

## Les profils pour lesquels un apport fort est demandé

Certaines catégories de dossiers demandent un apport supérieur à la moyenne :

- **Investisseurs locatifs** : 10-20 % d'apport typique, parfois plus sur des biens atypiques.
- **Non-résidents / expatriés** : 20-30 % d'apport demandé par toutes les banques.
- **TNS avec 2 bilans ou moins** : la banque compense l'incertitude revenus par un apport plus élevé.
- **Seniors** (> 55 ans) : apport plus élevé exigé par certaines banques.

## Stratégies pour renforcer son apport en peu de temps

- **Mobiliser un PEL** même peu rempli (le droit à prêt peut valoir quelques milliers d'euros).
- **Solliciter Action Logement** auprès de son employeur — souvent oublié mais très intéressant.
- **Anticiper une donation familiale** et la formaliser avant le dépôt de dossier.
- **Consolider son épargne liquide** sur 12-24 mois avant le projet (1 000 €/mois = 12-24 000 € d'apport supplémentaire).

## Questions fréquentes

**Je n'ai pas d'apport, dois-je renoncer à acheter ?** Non. L'emprunt à 110 % existe pour les profils solides. Un courtier vous oriente vers les 3-5 banques les plus ouvertes à ce type de dossier.

**Mon donateur peut-il m'aider sans apport déclaré ?** Non. Toute donation doit être formalisée (acte notarié ou déclaration) pour être recevable par la banque.

**Puis-je utiliser mon PEA comme apport ?** Oui après liquidation, mais attention à la fiscalité (imposition des plus-values). Comparez avec d'autres sources avant.

**Mes parents peuvent-ils se porter caution au lieu d'apporter ?** Oui, c'est une alternative. La caution parentale peut remplacer ou compléter un apport faible.`,
}

// ───────────────────────────────────────────────────────────────────────
// Étude de cas — Primo-accédant Reims
// ───────────────────────────────────────────────────────────────────────
const casePrimoReims: BlogPost = {
  slug: "etude-cas-primo-accedant-reims-25k-apport",
  title: "Cas client : primo-accédant à Reims avec 25 000 € d'apport",
  description: "Étude de cas anonymisée — un couple primo-accédant finance un T3 à Reims. Profil, projet, solution, résultat chiffré.",
  category: "etudes-de-cas",
  publishedAt: "2026-05-10T08:00:00+02:00",
  authorSlug: "maxime-iori",
  readingTime: 5,
  keywords: ["étude de cas credit immobilier", "primo-accédant Reims", "apport 25000", "T3 Reims"],
  excerpt: "Un couple de cadres de 32 ans, 25 000 € d'apport, achète un T3 de 72 m² à Reims pour 218 000 €. Taux obtenu : 3,15 % sur 25 ans. Mensualité 1 080 €.",
  content: `## En bref

- **Profil** : couple 32 ans, cadres du tertiaire, 4 400 € nets cumulés/mois.
- **Projet** : T3 de 72 m² à Reims, secteur Cormontreuil, 218 000 € + 17 000 € frais de notaire.
- **Difficulté** : 25 000 € d'apport seulement (11 %), ne couvrant pas tous les frais annexes.
- **Solution Crédit Plus** : dépôt auprès de 4 banques + PTZ 80 000 €.
- **Résultat** : taux 3,15 % sur 25 ans, mensualité 1 080 € (assurance incluse), économie ≈ 11 000 € vs offre initiale.

## Le profil

Julien et Claire, 32 ans tous les deux, cadres (Julien dans une SSII à Reims, Claire dans une agence de communication). Revenus nets mensuels cumulés : **4 400 €**. Tous deux en CDI depuis plus de 4 ans. Pas de crédit conso en cours. Épargne cumulée : 25 000 € sur livret A, LDDS et un PEL de 4 ans.

## Le projet

Acheter un T3 de 70-75 m² à Reims en résidence principale. Budget cible : 220 000 €. Secteur privilégié : Cormontreuil (proche Reims, marché plus accessible que le centre-ville, bon ratio prix/qualité).

Ils ont identifié un appartement en bon état à **218 000 €** dans une résidence de 2010. Frais de notaire (ancien) : ≈ 17 000 €, soit un budget total de 235 000 €.

## La difficulté

Avec 25 000 € d'apport, ils ne couvrent que **10,6 %** du budget total. Les banques préfèrent en général un apport qui couvre entièrement les frais annexes. Julien et Claire avaient reçu une première proposition de leur banque habituelle :

- **Taux** : 3,55 % sur 25 ans
- **Mensualité** : 1 165 € (assurance groupe incluse)
- **Coût total du crédit** : ≈ 139 000 € d'intérêts + assurance

Ils trouvaient la mensualité acceptable mais se demandaient si un courtier pouvait faire mieux.

## La solution Crédit Plus

### Étape 1 — Bilan et simulation

Notre courtier a analysé le dossier et identifié deux leviers :

1. **Le PTZ 2026** : Reims est en zone B1, couple primo-accédant, revenus sous plafond → éligibilité PTZ pour 80 000 € environ.
2. **La négociation package** : taux + assurance en délégation + frais de dossier + garantie via caution (plutôt qu'hypothèque, moins chère pour ce profil).

### Étape 2 — Dépôt auprès de 4 banques

Le dossier a été présenté en parallèle à 4 banques :

- **Crédit Agricole du Nord Est** (présence locale historique)
- **Caisse d'Épargne Grand Est Europe**
- **CIC Est**
- **Société Générale**

Toutes ont accepté l'ouverture d'un dossier PTZ avec la banque principale.

### Étape 3 — Négociation

Après 2 semaines, trois banques ont retourné un accord de principe :

| Banque | Taux prêt principal | Assurance | Frais dossier |
|---|---|---|---|
| CA Nord Est | 3,25 % | 65 €/mois (groupe) | 950 € |
| CE Grand Est Europe | 3,20 % | 60 €/mois (groupe) | 1 200 € |
| CIC Est | 3,15 % | 58 €/mois (groupe) | 700 € |

Le CIC Est affichait le meilleur taux. Notre courtier a ensuite substitué l'assurance groupe par une **délégation externe** (April, prime 28 €/mois pour les 2 au lieu de 58 €/mois → économie supplémentaire de 30 €/mois).

### Étape 4 — Offre finale

- **Prêt principal** : 130 000 € sur 25 ans à **3,15 %**
- **PTZ** : 80 000 € sur 25 ans (dont 15 ans de différé)
- **Apport** : 25 000 €
- **Assurance déléguée** : 28 €/mois
- **Frais de dossier** négociés à 500 €
- **Garantie** : caution Crédit Logement (2 100 €)

**Mensualité totale** : 1 080 € (capital + intérêts + assurance)

## Le résultat chiffré

Comparatif avec l'offre initiale de la banque habituelle :

| Poste | Offre initiale | Offre finale | Économie |
|---|---|---|---|
| Taux | 3,55 % | 3,15 % | –40 pb |
| Mensualité | 1 165 € | 1 080 € | –85 €/mois |
| Coût total crédit | 139 000 € | 128 000 € | **–11 000 €** |
| Économie sur 25 ans | — | — | **11 000 € net** |

**Honoraires courtier** : 1 500 € (payés à la signature de l'offre)

**Gain net après honoraires** : 9 500 € sur la durée du prêt.

## Ce qu'il faut retenir

1. La **première offre** de la banque historique n'est jamais la meilleure. La négociation courtier a ajouté 40 points de base de taux.
2. Le **PTZ** est un levier majeur — beaucoup d'acheteurs ne savent pas qu'ils y sont éligibles.
3. La **délégation d'assurance** (loi Lemoine) est presque toujours plus compétitive que l'assurance groupe bancaire, surtout pour les moins de 40 ans non-fumeurs.
4. L'**apport de 11 %** aurait été considéré comme limite par une banque seule. Via la mise en concurrence, 3 banques l'ont accepté sans difficulté.

> Vous êtes dans une situation similaire ? [Simulez votre crédit](/credit-immobilier/simulation/) en 2 minutes. Notre équipe vous rappelle sous 24h.

*Étude de cas anonymisée. Prénoms modifiés. Chiffres réels issus d'un dossier Crédit Plus clôturé en mars 2026.*`,
}

// ───────────────────────────────────────────────────────────────────────
// Étude de cas — Investissement LMNP Nancy
// ───────────────────────────────────────────────────────────────────────
const caseLMNPNancy: BlogPost = {
  slug: "etude-cas-investissement-locatif-lmnp-nancy",
  title: "Cas client : investissement locatif en LMNP à Nancy, rendement net 4,8 %",
  description: "Cadre 38 ans finance un T2 à Nancy en LMNP au régime réel. Profil, financement, fiscalité, rentabilité.",
  category: "etudes-de-cas",
  publishedAt: "2026-05-13T08:00:00+02:00",
  authorSlug: "maxime-iori",
  readingTime: 6,
  keywords: ["étude cas investissement locatif", "LMNP Nancy", "investissement locatif cadre", "T2 Nancy rentabilité"],
  excerpt: "Un cadre de 38 ans finance un T2 de 45 m² à Nancy pour 145 000 €. Loyer 580 €/mois, rendement brut 4,8 %, net après LMNP réel 4,8 % grâce à l'amortissement.",
  content: `## En bref

- **Profil** : cadre 38 ans, revenus 4 200 € nets/mois, TMI 30 %, patrimoine diversifié.
- **Projet** : T2 de 45 m² à Nancy, secteur Haussonville, 145 000 € + 11 000 € frais.
- **Montage** : prêt 156 000 € sur 25 ans (financement à 100 %), LMNP au régime réel.
- **Résultat** : loyer 580 €/mois, rendement brut 4,80 %, net après LMNP 4,80 % (neutralisation fiscale via amortissement).

## Le profil

Marc, 38 ans, cadre ingénieur dans une ETI lorraine, revenus nets **4 200 €/mois**. CDI depuis 12 ans, épargne diversifiée : PEE bloqué, assurance-vie, livrets. Déjà propriétaire de sa résidence principale (acquise en 2019).

Il souhaite démarrer une stratégie d'investissement locatif. Objectif : construire un patrimoine immobilier net d'impôt, en visant un rendement supérieur à celui de son assurance-vie (2,5 % net après fiscalité).

## Le projet

Un T2 de 45 m² à Nancy (54), secteur Haussonville, dans une résidence de standing des années 2000. Bien meublé (LMNP) pour louer à un jeune cadre ou une profession médicale du CHU voisin. Prix : **145 000 €**. Frais de notaire (ancien) : ≈ 11 000 €. Budget total : 156 000 €.

Loyer cible : 580 €/mois charges comprises, confirmé par comparaison sur SeLoger et LocService.

## Le montage financier

### Financement

Marc préfère conserver son épargne (arbitrage trésorerie/rendement). Objectif : **financer à 100 %**, soit un prêt de 156 000 €.

Notre courtier identifie 3 banques qui acceptent ce type de montage pour un investisseur CDI avec une résidence principale déjà acquise :

- **Crédit Agricole de Lorraine** (grille dédiée investisseurs)
- **Caisse d'Épargne Grand Est Europe** (primo-investisseur)
- **CIC Est** (cadres du tertiaire lorrain)

### Conditions obtenues

- **Prêt** : 156 000 € sur 25 ans à 3,45 %
- **Mensualité** : 778 € (capital + intérêts)
- **Assurance** : délégation externe 22 €/mois (quotité 100 %)
- **Mensualité totale** : 800 €

### Pondération des loyers

La banque pondère les loyers futurs à **70 %** (norme HCSF investisseurs) :

- Loyer comptabilisé en revenus : 580 × 70 % = **406 €**
- Revenus recalculés pour le HCSF : 4 200 + 406 = **4 606 €**
- Charges : mensualité RP 1 100 € + nouvelle mensualité 800 € = 1 900 €
- Taux d'endettement : 1 900 / 4 606 = **41,3 %**

Au-delà des 35 %, donc ? Oui — mais la banque utilise sa flexibilité HCSF 20 % pour les **bons profils**. Marc coche toutes les cases : CDI long, revenus stables, reste-à-vivre ≥ 2 700 €, pas de conso.

## Le régime fiscal — LMNP au réel

Marc opte pour le **régime LMNP réel** plutôt que micro-BIC (abattement forfaitaire 50 %), plus avantageux dans son cas.

### Calcul des charges déductibles

- Intérêts d'emprunt année 1 : ≈ 5 280 €
- Assurance emprunteur : 264 €
- Taxe foncière : 820 €
- Charges de copropriété non récupérables : 950 €
- Frais de gestion (si délégation) : 0 € (Marc gère lui-même)
- **Amortissement du bien (hors terrain)** : 145 000 € × 85 % ÷ 30 ans = **4 108 €/an**
- **Amortissement du mobilier** : 3 000 € ÷ 7 ans = **428 €/an**
- **Total charges + amortissements** : ≈ 11 850 €

### Résultat fiscal

- Recettes locatives annuelles : 580 × 12 = **6 960 €**
- Charges et amortissements : **11 850 €**
- **Résultat BIC année 1 : –4 890 €** (déficit)

Le déficit amortissement est **reportable** sur 10 ans et neutralise toute imposition future des loyers. Marc ne paie **aucun impôt** sur les revenus LMNP pendant environ 12-15 ans.

## La rentabilité

### Rendement brut

6 960 € / 156 000 € = **4,46 %** sur le prix total (avec frais de notaire).
6 960 € / 145 000 € = **4,80 %** sur le prix hors frais.

### Rendement net après charges

6 960 € – 1 770 € (taxe + copropriété + assurance PNO) = 5 190 €
5 190 € / 156 000 € = **3,33 %**

### Rendement net-net (après impôt)

Grâce à l'amortissement LMNP réel, l'impôt est nul pendant 12-15 ans → **rendement net-net = rendement net = 3,33 %**.

Pour comparaison : son assurance-vie rapporte 2,5 % net de fiscalité. L'effet de levier bancaire + l'amortissement LMNP génèrent un gain patrimonial bien supérieur sur 25 ans.

### Cash-flow mensuel

- Loyer encaissé : 580 €
- Mensualité prêt : 800 €
- Charges moyennes mensuelles : 150 €
- **Cash-flow mensuel : –370 € / mois** (effort d'épargne)

Marc accepte cet effort d'épargne sur 25 ans parce que :

1. Le bien sera **totalement payé** à son 63e anniversaire.
2. La **valorisation** du bien (même à 0 % de plus-value, juste l'inflation moyenne 1,5 %) le portera à environ 220 000 €.
3. Les loyers continueront, générant un revenu complémentaire retraite **net d'impôt** de ≈ 7 000 €/an.

## Ce qu'il faut retenir

1. La **LMNP au réel** est presque toujours plus avantageuse que le micro-BIC dès qu'on a des charges et un crédit.
2. Le **financement à 100 %** est possible pour un investisseur cadre avec une résidence principale déjà acquise.
3. La **pondération 70 % des loyers** permet de dépasser 35 % d'endettement via la flexibilité HCSF 20 %.
4. Le **cash-flow négatif** n'est pas un échec : c'est un effort d'épargne patrimoniale très efficace sur 25 ans.

> Vous envisagez un investissement locatif ? [Simulez votre projet](/investissement-locatif/simulation/) ou lisez notre [guide investissement locatif 2026](/investissement-locatif/).

*Étude de cas anonymisée. Prénoms modifiés. Dossier clôturé en février 2026.*`,
}

// ───────────────────────────────────────────────────────────────────────
// Étude de cas — Rachat de crédit Metz
// ───────────────────────────────────────────────────────────────────────
const caseRachatMetz: BlogPost = {
  slug: "etude-cas-rachat-4-credits-metz",
  title: "Cas client : rachat de 4 crédits conso + immobilier à Metz",
  description: "Une famille mosellane regroupe 4 crédits (immobilier, auto, conso, revolving) et divise sa mensualité totale par 2.",
  category: "etudes-de-cas",
  publishedAt: "2026-05-16T08:00:00+02:00",
  authorSlug: "maxime-iori",
  readingTime: 5,
  keywords: ["étude cas rachat crédit", "regroupement crédits Metz", "rachat consommation immobilier", "division mensualité"],
  excerpt: "Famille mosellane avec 4 crédits cumulés (2 400 €/mois de mensualités) regroupe dans un unique rachat : nouvelle mensualité 1 280 €/mois sur 20 ans.",
  content: `## En bref

- **Profil** : couple 42 et 39 ans, 2 enfants, revenus 3 800 € nets/mois, 4 crédits en cours.
- **Problématique** : 2 400 € de mensualités cumulées, taux d'endettement 63 %, situation tendue.
- **Solution Crédit Plus** : regroupement conso + immobilier sur 20 ans à 4,2 %.
- **Résultat** : nouvelle mensualité unique **1 280 €/mois**, taux d'endettement ramené à **33,7 %**, marge retrouvée pour épargner.

## Le profil

Thomas (42 ans, technicien Orange) et Sophie (39 ans, infirmière libérale), 2 enfants de 8 et 11 ans. Revenus nets **3 800 €/mois** cumulés. Propriétaires d'une maison à Metz acquise en 2014. Situation administrativement saine mais financièrement tendue.

## Le problème — 4 crédits cumulés

Au fil des années, plusieurs crédits se sont superposés :

| Crédit | Capital restant dû | Mensualité | Taux | Durée restante |
|---|---|---|---|---|
| Crédit immobilier (2014) | 142 000 € | 1 180 € | 3,80 % | 14 ans |
| Crédit auto (2024) | 18 500 € | 370 € | 5,20 % | 5 ans |
| Crédit travaux (2022) | 12 000 € | 310 € | 4,60 % | 4 ans |
| Crédit revolving (ouvert 2020) | 5 500 € | 540 € | 19,90 % | Non défini |
| **TOTAL** | **178 000 €** | **2 400 €** | — | — |

**Taux d'endettement** : 2 400 / 3 800 = **63 %**. Bien au-delà de toute norme bancaire. Aucune marge pour épargner ou faire face à un imprévu.

## La difficulté

Sophie, en profession libérale, commence à envisager une 3ème enfant et un congé partiel. Le taux d'endettement actuel est intenable avec une baisse de revenu. Une première banque a refusé le rachat sans explication détaillée.

## La solution Crédit Plus

### Étape 1 — Audit de la situation

Notre courtier a identifié 3 banques spécialisées dans le **regroupement conso + immobilier** ouvertes à ce profil :

- **Caisse d'Épargne Grand Est Europe** (accord sur dossier simulé)
- **CGI Hypothèques / Sofinco** (spécialiste rachat)
- **BPCE via filiale regroupement**

### Étape 2 — Montage du rachat

- **Montant du nouveau crédit** : 178 000 € (capital tous crédits cumulés) + IRA sur l'immobilier (3 120 €) + frais dossier (1 500 €) = **182 620 €**.
- **Garantie** : nouvelle hypothèque sur la maison (coût 3 100 €) ou caution — la banque acceptante a préféré l'hypothèque compte tenu du profil.
- **Durée** : 20 ans.
- **Taux négocié** : **4,20 %** (plus élevé qu'un simple prêt immo car le regroupement inclut de la conso).
- **Assurance** : nouveau contrat (loi Lemoine s'applique — seuil 200 k€ atteint mais âge sous 60 ans → pas de questionnaire santé obligatoire).

### Étape 3 — Mise en place

- **Nouvelle mensualité totale** : **1 280 €/mois** (capital + intérêts + assurance).
- **Taux d'endettement post-rachat** : 1 280 / 3 800 = **33,7 %** ✅ conforme HCSF.
- **Marge mensuelle retrouvée** : 2 400 – 1 280 = **1 120 €/mois** de pouvoir d'achat libéré.

## Le résultat chiffré

| Indicateur | Avant rachat | Après rachat | Différence |
|---|---|---|---|
| Mensualités cumulées | 2 400 € | 1 280 € | **–1 120 €/mois** |
| Taux d'endettement | 63 % | 33,7 % | **–29 points** |
| Durée restante moyenne | ~11 ans | 20 ans | +9 ans |
| Coût total des crédits | ≈ 230 000 € (restants) | ≈ 307 000 € (nouveau) | **+77 000 €** |

**Attention** : le rachat fait **baisser la mensualité** mais **augmente le coût total**. Allonger la durée de 11 ans à 20 ans, à un taux proche, ajoute mécaniquement des intérêts.

**Le vrai gain** n'est pas le coût total : c'est la **trésorerie immédiate retrouvée** (1 120 €/mois) et la **soutenabilité** du budget familial.

## Les arbitrages faits par Thomas et Sophie

1. **Remboursements anticipés partiels prévus** : chaque fois qu'un bonus ou qu'une rentrée d'argent le permet. Objectif : raccourcir progressivement la durée.
2. **Épargne de précaution** reconstituée grâce aux 1 120 €/mois libérés : 10 000 € mis de côté en 12 mois.
3. **Plan d'épargne logement** ouvert pour les enfants.

## Ce qu'il faut retenir

1. Un rachat de crédit n'est **pas un miracle financier** : il rallonge la durée et augmente le coût total. C'est un outil de **gestion de trésorerie**.
2. Pour un taux d'endettement > 50 %, le rachat est souvent la seule alternative à une procédure de surendettement.
3. Un courtier identifie les **banques spécialisées** en regroupement — elles sont rares et appliquent des règles très différentes des banques classiques.
4. La loi **Lemoine** s'applique au rachat : questionnaire santé supprimé sous conditions, économie supplémentaire sur l'assurance.
5. **Prévoir des remboursements anticipés** dès que la trésorerie le permet, pour compenser l'allongement de durée.

> Vous êtes dans une situation d'endettement tendue ? [Simulez un rachat de crédit](/outils/calcul-rachat-credit/) en 2 minutes, ou contactez-nous pour un bilan gratuit.

*Étude de cas anonymisée. Prénoms modifiés. Dossier clôturé en janvier 2026.*`,
}

// ───────────────────────────────────────────────────────────────────────
// Guide — Quand racheter son crédit immobilier
// ───────────────────────────────────────────────────────────────────────
const rachatGuide: BlogPost = {
  slug: "quand-racheter-son-credit-immobilier-2026",
  title: "Quand racheter son crédit immobilier : les 3 règles d'or en 2026",
  description: "Écart de taux ≥ 0,7 pt, capital restant dû ≥ 70 000 €, durée restante ≥ 7 ans. Les 3 règles pour qu'un rachat soit rentable.",
  category: "guides",
  publishedAt: "2026-05-20T08:00:00+02:00",
  authorSlug: "maxime-iori",
  readingTime: 7,
  keywords: ["quand racheter credit", "rachat credit rentable", "regle des 3", "IRA plafond"],
  excerpt: "La règle empirique du courtage : un rachat est rentable si 3 critères simultanés sont remplis. Calcul concret, frais à absorber, exemple chiffré.",
  content: `## En bref

- **Règle 1** : écart de taux entre votre taux actuel et le taux marché ≥ **0,7 point**.
- **Règle 2** : capital restant dû (CRD) ≥ **70 000 €**.
- **Règle 3** : durée restante ≥ **7 ans**.
- Les 3 règles doivent être **simultanément** remplies pour que le rachat soit rentable après absorption des frais (IRA, dossier, garantie).

## Pourquoi trois règles ?

Un rachat de crédit externe génère des **frais significatifs** : indemnité de remboursement anticipé (IRA) de votre ancien prêt, frais de dossier de la nouvelle banque, nouvelle garantie (caution ou hypothèque), éventuellement nouvelle assurance emprunteur.

Pour que l'économie obtenue grâce au taux plus bas compense ces frais, trois conditions cumulatives doivent être réunies.

## Règle 1 — L'écart de taux

L'écart entre votre taux actuel (TAEG) et le taux obtenu en rachat doit être d'**au moins 0,7 point**. En-dessous, l'économie ne couvre pas les frais.

**Exemple** : vous payez 4,10 % sur votre prêt actuel. Le marché 2026 est à 3,25 % → écart 0,85 point ✅ rentable.

Vous payez 3,85 % sur un prêt récent. Le marché est à 3,25 % → écart 0,60 point ❌ pas rentable.

**Pourquoi 0,7 point ?** C'est le seuil empirique observé chez les courtiers : au-delà, l'économie d'intérêts sur la durée restante dépasse typiquement les 3 000-5 000 € de frais de rachat.

## Règle 2 — Le capital restant dû

Le capital restant dû (CRD) doit être **≥ 70 000 €**. En-dessous, les frais sont proportionnellement trop lourds.

**Pourquoi 70 000 € ?** L'IRA est plafonnée à 3 % du CRD ou 6 mois d'intérêts. Les frais de dossier et garantie sont presque fixes. En-dessous de 70 000 €, le ratio frais / économie devient défavorable.

**Exemple** : CRD de 30 000 €, taux actuel 4 %, rachat à 3 %. Économie annuelle brute : 300 €. IRA + frais : ≈ 2 000 €. **Retour sur investissement : 6,6 ans** — possible mais fragile.

Idéal : CRD ≥ 100 000 €.

## Règle 3 — La durée restante

La durée restante doit être **≥ 7 ans**. En-dessous, il ne reste pas assez d'intérêts à économiser pour rentabiliser les frais.

**Pourquoi 7 ans ?** Les frais fixes du rachat s'amortissent sur la durée restante. Au-delà de 7 ans, l'économie cumulée dépasse largement ces frais. En-deçà, le calcul devient trop juste.

**Astuce** : si vous voulez racheter un prêt à moins de 7 ans de sa fin, la **renégociation interne** (avec votre banque actuelle, sans frais de garantie) est souvent plus pertinente.

## Calcul concret : exemple complet

**Situation** : prêt souscrit en mars 2023, 220 000 € sur 25 ans à 4,20 %.

**Après 3 ans** :
- CRD : 202 000 €
- Durée restante : 22 ans
- Mensualité actuelle : 1 175 € (capital + intérêts)
- Coût total restant à rembourser : 310 000 €

**Marché 2026** : 3,15 % sur 22 ans (même profil).

**Calcul des règles** :
- Règle 1 : 4,20 – 3,15 = **1,05 point** ✅
- Règle 2 : CRD 202 000 € ✅
- Règle 3 : 22 ans restants ✅

Les 3 règles sont remplies → **rachat a priori rentable**.

**Frais du rachat** :
- IRA : plafonnée à 3 % × 202 000 = **6 060 €** ou 6 mois d'intérêts (202 000 × 4,20 % × 6/12 = 4 242 €) → **4 242 €** (le plus faible des deux)
- Frais de dossier nouvelle banque : **1 200 €**
- Nouvelle caution Crédit Logement : **2 700 €**
- **Total frais** : **8 142 €**

**Économie après rachat** :
- Nouvelle mensualité : 1 075 € → **–100 €/mois**
- Économie annuelle : 1 200 €
- Sur 22 ans : **26 400 € bruts**
- Déduction frais : **18 258 € nets**

**Retour sur investissement** : 8 142 / 1 200 = **6,8 ans** (on atteint la rentabilité après 6 ans et 10 mois).

## Les exceptions à la règle des 3

### Renégociation interne (sans frais)

Si votre banque accepte une renégociation (avenant), il n'y a **ni IRA ni frais de garantie**. Seuls les frais de dossier (200-500 €) s'appliquent. Dans ce cas, l'écart de taux rentabilisable descend à **0,3 point**.

### Rachat pour libérer de la trésorerie (pas pour économiser)

Certains emprunteurs rachètent pour **baisser leur mensualité** (en allongeant la durée) même si le coût total augmente. Exemple : mensualité qui passe de 1 400 € à 1 100 € libère 300 €/mois pour épargner ou investir ailleurs. Le gain n'est pas une économie comptable, mais une flexibilité de trésorerie.

### Regroupement avec conso

Si vous rachetez votre immobilier + des crédits conso en un seul prêt, la logique change : le **coût moyen pondéré** de tous vos crédits est généralement bien plus élevé que le marché immo, donc le rachat peut être rentable même avec un écart plus faible sur la seule partie immobilière.

## Notre calculateur de rachat

Utilisez notre [calculateur de rachat de crédit](/outils/calcul-rachat-credit/) pour simuler votre cas en 30 secondes.

## Questions fréquentes

**L'IRA est-elle toujours de 3 % ?** Non. Elle est plafonnée par la loi à 3 % du CRD **ou** 6 mois d'intérêts, selon le plus faible. Elle peut aussi être contractuellement inférieure (lire votre offre de prêt initiale). Certains prêts (ex. taux variables) excluent toute IRA.

**Puis-je négocier l'IRA ?** Dans certains cas, oui. Si vous rachetez chez une banque partenaire de votre banque actuelle, ou si vous devez vendre pour raison professionnelle / personnelle, des exonérations existent.

**Quand ne pas racheter ?** Si le CRD est < 50 000 €, si la durée restante est < 5 ans, ou si votre banque accepte une renégociation interne sans frais.`,
}

// ───────────────────────────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  barometerAvril2026,
  ptzGuide2026,
  hcsfRules,
  apportGuide,
  rachatGuide,
  casePrimoReims,
  caseLMNPNancy,
  caseRachatMetz,
]

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
