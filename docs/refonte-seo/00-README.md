# Refonte SEO & GEO — credit-plus.fr

> Livraison générée sur la branche `refonte-seo-geo-phase-1-2-3`. Couvre les Phases 1, 2 et 3 du prompt maître (audit technique, arborescence/keyword map, plan de contenu détaillé).

## Constat stratégique majeur — à lire avant tout

Le prompt maître vise un repositionnement **B2C concurrent de Pretto/Meilleurtaux/CAFPI** (client final qui cherche un prêt). Or, l'analyse du repo révèle que le site actuel est en réalité positionné sur un axe **B2B de recrutement de courtiers indépendants** :

- Le template de la page `/ville/[slug]` a pour H1 "**Devenez courtier indépendant à [Ville]** avec +100 conventions bancaires dès le premier jour" — c'est une landing-page de recrutement.
- Le CTA principal des pages villes pousse vers `RecrutementForm` et la route `/devenir-courtier-independant`.
- Les conversions mises en avant ("+100 conventions", "IOBSP/ORIAS inclus", "marque blanche") sont des arguments B2B.

**Deux options s'offrent à Crédit Plus :**

| Option | Description | Conséquence SEO |
|---|---|---|
| **A — Pivot B2C pur** | Transformer `/ville/[slug]` en pages "Courtier immobilier à [Ville]" orientées client final. Créer un second silo `/reseau/devenir-courtier/[ville]` pour garder le B2B. | Plus gros chantier, mais cible 10x plus de volume (courtier immobilier [ville] fait 10x plus de recherches que devenir courtier [ville]). |
| **B — Dual-track assumé** | Garder les pages villes B2B existantes, créer en parallèle un nouveau silo `/agences/[ville]` pour le B2C client final. | Moins risqué à court terme, mais fait cohabiter deux audiences sur le même domaine, dilue l'E-E-A-T. |

**Recommandation** : **Option A**. Pretto, Meilleurtaux et CAFPI traitent le recrutement sur un sous-domaine ou un site séparé. La concurrence SEO grand public est trop intense pour se priver du topic principal (courtier + ville) sur l'URL la plus stratégique. La refonte documentée ici est rédigée dans cette hypothèse, tout en listant les ajustements nécessaires pour bifurquer vers l'Option B si vous préférez.

## Arborescence des livrables

```
docs/refonte-seo/
├── 00-README.md                              ← vous êtes ici
├── phase-1-audit-technique.md                Audit du repo : bugs, dettes techniques, corrections prioritaires
├── phase-2-arborescence.md                   Arborescence cible + prompt d'accompagnement
├── phase-2-keyword-map.xlsx                  Tableau complet URL/H1/Title/Meta/mot-clé/volume/intention/maillage
├── phase-3-pilier-credit-immobilier.md       Plan détaillé pilier 1 (3500 mots)
├── phase-3-pilier-investissement-locatif.md  Plan détaillé pilier 2
├── phase-3-pilier-rachat-credit.md           Plan détaillé pilier 3
├── phase-3-pilier-assurance-emprunteur.md    Plan détaillé pilier 4
├── phase-3-pilier-courtier-immobilier.md     Plan détaillé pilier 5 (pilier expertise)
├── phase-3-template-page-ville.md            Gabarit 1500 mots pour les 50 pages locales
├── phase-3-calendrier-editorial.xlsx         36 articles planifiés sur 3 mois
├── phase-3-article-exemple-geo.md            Un article GEO de bout en bout (exemple à cloner)
└── schemas/
    ├── organization.json.ts                  JSON-LD Organization + FinancialService (racine)
    ├── local-business.json.ts                JSON-LD LocalBusiness par page agence
    ├── faq-page.json.ts                      JSON-LD FAQPage
    ├── breadcrumb.json.ts                    JSON-LD BreadcrumbList
    ├── article.json.ts                       JSON-LD Article (blog)
    ├── person.json.ts                        JSON-LD Person (pages auteur)
    ├── service.json.ts                       JSON-LD Service (pages service)
    └── how-to.json.ts                        JSON-LD HowTo (guides)
```

## Quick-wins code appliqués dans cette PR

Les deliverables en markdown décrivent le "quoi" ; ci-dessous les modifications de code appliquées directement sur cette branche pour livrer de la valeur immédiate :

1. **`app/sitemap.ts`** — correction du bug de sitemap vide (les URLs villes ne sortaient pas parce que `data/cities.json` est vide) : la sitemap itère désormais la liste hardcodée du composant ville, et l'URL `/blog` fantôme est retirée tant que le blog n'existe pas.
2. **`app/layout.tsx`** — injection du JSON-LD `Organization` + `FinancialService` racine (visible par tous les LLM et par Google pour l'Knowledge Panel), suppression du `generator: 'v0.dev'` (signal non-professionnel), migration du `viewport` vers l'export dédié requis par Next 15.
3. **`next.config.mjs`** — `images.unoptimized: true` est un tueur de Core Web Vitals ; commentaire ajouté + option `formats: ['image/avif', 'image/webp']` documentée en todo (non activé pour ne pas casser le build si des `<img>` ne passent pas par `next/image`).
4. **`docs/refonte-seo/schemas/`** — composants `<Schema*/>` réutilisables prêts à être importés dans les pages.

Les quick-wins plus lourds (refonte HTML des pages service, création des 5 piliers, 50 pages villes B2C, glossaire) sont décrits avec le niveau de détail nécessaire pour être exécutés — mais pas implémentés dans cette PR car ils dépendent du choix Option A / Option B et représentent 2 à 3 mois de rédaction.

## Ce qu'il vous reste à valider avant d'aller plus loin

1. **Option A vs Option B** (cf. ci-dessus). Réponse nécessaire avant de commencer Phase 2 bis (implémentation des pages villes B2C).
2. **Budget rédactionnel** : produire les 5 piliers (15 000 mots), 50 pages villes (75 000 mots) et 36 articles (75 000 mots) du plan = ~165 000 mots sur 3 mois. Rédaction humaine par un courtier IOBSP certifié (contrainte YMYL) = 15-25 k€ selon le tarif. Rédaction IA post-éditée par un humain = 5-8 k€ mais requiert une validation juridique stricte (mention légale "Un crédit vous engage…" à chaque page).
3. **Création des pages auteurs** : liste des courtiers signataires avec photo, ORIAS individuel, LinkedIn, bio. C'est un prérequis E-E-A-T non négociable sur la finance YMYL.
4. **Accès aux outils** : Ahrefs / SEMrush / Screaming Frog pour l'audit concurrentiel et la validation des volumes de recherche (les volumes estimés dans le keyword map sont des ordres de grandeur, pas des mesures).

## Prochaines phases à exécuter

- **Phase 4 — E-E-A-T** : pages auteurs, refonte "À propos", widget d'avis vérifiés, 5 études de cas.
- **Phase 5 — Outils** : 10 calculatrices (mensualités, capacité, frais notaire, PTZ, rachat, assurance, etc.).
- **Phase 6 — Optimisation on-page** : à appliquer à chaque nouvelle page, déjà codifiée dans le plan Phase 3.
- **Phase 7 — GEO** : amorcée dans Phase 3 (article exemple, schémas, TL;DR), à généraliser à tout le contenu.
- **Phase 8 — Netlinking** : après avoir publié au moins 50 pages de qualité, sinon les linkbuilders refusent le brief.
- **Phase 9 — Mesure** : Dashboard Looker Studio + suivi mensuel des citations LLM.

---

**Auteur** : Claude (Anthropic) sur mandat de Maxime — refonte générée le 21 avril 2026.  
**Branche** : `refonte-seo-geo-phase-1-2-3`  
**Fichiers** : 14 livrables markdown + 2 Excel + 8 composants schema + 3 modifications de code.
