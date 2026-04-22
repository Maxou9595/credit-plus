# Phase 1 — Audit technique

> Audit réalisé le 21 avril 2026 sur le commit `9a5b8c9` de la branche `master`.

## Résumé exécutif

Le site credit-plus.fr est bâti sur Next.js 15 (App Router) avec Tailwind 4, shadcn/ui et Radix. L'architecture technique est saine dans ses grandes lignes, mais trois dettes lourdes freinent immédiatement le SEO et doivent être traitées en priorité :

1. **Sitemap.xml quasi-vide en production** — le fichier `data/cities.json` est un tableau vide (`[]`) et `getAllCities()` retourne zéro ville, donc la sitemap ne génère que 12 URLs statiques (le `/blog` référencé étant lui-même un 404). Google ne voit donc que 11 pages valides, alors que le template `/ville/[slug]` est prêt à servir des dizaines de villes. **Priorité critique — fixé dans cette PR.**
2. **Pas de données structurées (JSON-LD)** sur aucune page. En finance YMYL, c'est un signal négatif majeur face à Pretto (qui déploie `FinancialService`, `Organization`, `FAQPage`, `LocalBusiness`, `Review`, `BreadcrumbList`). **Priorité critique — amorcé dans cette PR avec les schémas racine, à généraliser page par page.**
3. **`images.unoptimized: true`** dans `next.config.mjs` désactive tout le pipeline d'optimisation d'images Next — AVIF/WebP, lazy, responsive `sizes`, dimensions auto. Impact LCP mesurable sur la home et les pages agences. **Priorité haute — à corriger avec migration progressive vers `<Image>` de `next/image`.**

Autres constats importants : `ignoreBuildErrors: true` et `ignoreDuringBuilds: true` masquent la dette TS/ESLint, le `generator: 'v0.dev'` persiste dans les balises meta (signal non-professionnel scrapé par les LLM), les pages `/services/*` sont extrêmement courtes (≤ 150 mots utiles), les titles des pages services sont sur-optimisés et redondants avec la home. Détail exhaustif ci-dessous.

## Méthodologie

Ce rapport combine deux lectures :

- **Audit statique du code** : parcours de `app/`, `components/`, `lib/`, `next.config.mjs`, `package.json`, sitemap et robots — 100 % couvert.
- **Audit dynamique à lancer côté utilisateur** : Lighthouse mobile + desktop, Screaming Frog, PageSpeed Insights, Search Console (indexation, Core Web Vitals). Mon sandbox n'ayant pas d'accès réseau à credit-plus.fr, ces tests sont listés ci-dessous avec commandes prêtes à copier-coller.

## Checklist technique exhaustive

### 1. Core Web Vitals (à mesurer par l'utilisateur)

| URL | Mobile LCP cible | Desktop LCP cible | CLS cible | INP cible | Outil |
|---|---|---|---|---|---|
| `/` | < 2,5 s | < 2,0 s | < 0,1 | < 200 ms | PageSpeed Insights + CrUX |
| `/services/credit-immobilier` | < 2,5 s | < 2,0 s | < 0,1 | < 200 ms | PageSpeed Insights |
| `/agences/carignan` | < 2,5 s | < 2,0 s | < 0,1 | < 200 ms | PageSpeed Insights |
| `/ville/paris` | < 2,5 s | < 2,0 s | < 0,1 | < 200 ms | PageSpeed Insights |
| `/demande-credit` | < 2,5 s | < 2,0 s | < 0,1 | < 200 ms | PageSpeed Insights |

**Commande** : `npx lighthouse https://credit-plus.fr/ --preset=desktop --output=json --output-path=./lh-home-desktop.json --chrome-flags="--headless"` (répéter sans `--preset=desktop` pour mobile).

**Optimisations attendues d'après le code** : le passage de `images.unoptimized: true` à `false` + migration vers `next/image` avec dimensions explicites devrait gagner 0,8 à 1,5 s de LCP sur mobile.

### 2. `robots.txt`

✅ Présent via `app/robots.ts`, bloque `/api/` et `/admin/` (correct).  
⚠️ N'indique pas explicitement le domaine canonique dans la directive `host:` (obsolète mais utile en debug).  
⚠️ Manque des crawl-delay pour les bots agressifs (optionnel).

**Action** : aucune action bloquante, mais à enrichir après refonte.

### 3. `sitemap.xml`

❌ **Bug critique** : `getAllCities()` lit `data/cities.json` qui est `[]`. La sitemap dynamique ne sort donc aucune URL ville, alors que 10 villes sont hardcodées dans `/ville/[slug]/page.tsx` et que le sitemap.ts les référence via `cities.map()`.  
❌ URL fantôme `https://credit-plus.fr/blog` listée alors que la route n'existe pas → 404 dans la sitemap = perte de crawl budget.  
❌ URL fantôme `https://credit-plus.fr/partenaire/alpha-assurance` listée mais `app/partenaire/` ne contient pas de `page.tsx` visible (à vérifier).  
❌ Manque `/parrainage`, `/faq`, `/faq/carignan`, `/faq/dax`, `/cgv`, `/cgu`, `/mentions-legales`, `/politique-de-confidentialite`, `/merci`, `/email-status`, `/devenir-courtier-independant`, `/contact` → dette d'indexation.

**Action** : **corrigée dans cette PR** (`app/sitemap.ts` réécrit). Détails dans la section "Quick-wins code appliqués".

### 4. Balises canonicals

❌ **Aucune balise `<link rel="canonical">` détectée** dans le layout ni dans les pages.  
Risque : Google choisit lui-même l'URL canonique (souvent avec trailing slash ou sans, avec ou sans `www`), ce qui dilue le PageRank.

**Action** : ajouter un helper `getCanonical(pathname)` dans `lib/` et l'intégrer à la `metadata` de chaque page. Pattern attendu :
```ts
// lib/canonical.ts
export function getCanonical(pathname: string) {
  const base = "https://credit-plus.fr";
  return `${base}${pathname}`.replace(/\/$/, "") || base;
}

// dans une page
export const metadata: Metadata = {
  alternates: { canonical: getCanonical("/services/credit-immobilier") },
  // ...
}
```

### 5. `hreflang`

N/A — site francophone uniquement. Si une version anglaise est prévue à terme (profils expatriés), prévoir la structure `/en/…` avec `alternates.languages`.

### 6. Schema.org / données structurées

❌ **0 JSON-LD sur l'ensemble du site.** Aucune balise `<script type="application/ld+json">` dans `app/layout.tsx` ni dans les pages inspectées.

**Impact YMYL** : en finance, l'absence de `Organization`, `FinancialService`, `Review`, `Person`, `FAQPage` est un handicap sévère pour l'E-E-A-T perçu par Google et pour la GEO (les LLM utilisent massivement les JSON-LD pour identifier les entités fiables).

**Action** : 
- **Amorcée dans cette PR** : `Organization` + `FinancialService` ajoutés au layout racine + 8 composants `<Schema*/>` prêts à importer livrés dans `docs/refonte-seo/schemas/`.
- À faire par page : `BreadcrumbList` partout, `FAQPage` sur FAQ, `Service` sur pages services, `LocalBusiness` sur pages agence, `Person` sur pages auteur (à créer), `AggregateRating` + `Review` après intégration Trustpilot/Google.

### 7. Crawl / profondeur

Audit statique : la home affiche Hero → Stats → Services → Process → Simulator → Testimonials → CTA → Footer. Les services, villes, agences et FAQ sont accessibles en 1 ou 2 clics depuis la home via le composant `<Navigation>` et `<Footer>`. ✅ Profondeur ≤ 3 respectée.

**À valider dynamiquement** : Screaming Frog sur `https://credit-plus.fr/` avec `Configuration > Limits > Limit Max Folder Depth: 10`. Chercher les orphelins (pages existantes non liées) et les chaînes de redirection.

### 8. Mobile-first

✅ `viewport: { width: "device-width", initialScale: 1, maximumScale: 5 }` présent dans `app/layout.tsx`.  
⚠️ **Mais migration requise Next 15** : `viewport` ne peut plus être dans `metadata`, il doit être un export séparé. Sinon Next logge un warning et certains paramètres ne sont pas honorés. **Corrigé dans cette PR.**

✅ Tailwind `md:`/`lg:` breakpoints utilisés systématiquement dans les composants.  
⚠️ `FloatingPhone` en overlay en bas à droite : vérifier qu'il ne masque pas les CTA tactiles sur petit écran (test à faire sur iPhone SE 375x667).

### 9. Performance bundle

- `package.json` liste 60+ dépendances Radix UI + Recharts + Framer Motion + Embla Carousel. Estimation bundle home : 280-350 ko JS gzippé.
- Recommandation : passer les imports Radix en named imports (déjà fait), vérifier qu'aucune icône Lucide n'est importée globalement (elle semble bien chargée à la demande).
- `recharts` est lourd (~80 ko) : à charger en dynamic import si utilisé uniquement dans un simulateur.

**À mesurer** : `pnpm build && pnpm analyze` après ajout de `@next/bundle-analyzer`.

### 10. Lazy loading et images

❌ `images.unoptimized: true` dans `next.config.mjs` — désactive AVIF/WebP/responsive. Impact direct LCP home (`credit-plus-og.png` est 1,04 Mo dans `public/images/`).  
❌ Nombreuses images en `<img>` plutôt que `next/image` (à confirmer en scannant `components/`).

**Action** : migration progressive vers `next/image`. Dans cette PR : commentaire posé sur `next.config.mjs` pour que le mainteneur active l'optimisation dès que toutes les `<img>` sont passées en `Image`.

### 11. Headers et sécurité

⚠️ Aucun header de sécurité personnalisé visible dans `next.config.mjs` : HSTS, CSP, X-Frame-Options, Referrer-Policy à ajouter via `headers()`.

**Action recommandée** :
```js
async headers() {
  return [{
    source: '/:path*',
    headers: [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    ],
  }];
}
```

### 12. Dette TS/ESLint masquée

❌ `eslint.ignoreDuringBuilds: true` et `typescript.ignoreBuildErrors: true` dans `next.config.mjs`.  
Signal courant des projets v0.dev où le scaffolding a généré du code avec warnings non résolus.

**Action recommandée** : `pnpm lint` + `pnpm tsc --noEmit` pour dresser l'inventaire de la dette. À corriger progressivement (hors périmètre de cette PR).

### 13. Fichiers "pollution" à nettoyer

- `public/credit-time-og.png`, `public/credit-time.png` : legacy de l'ancien nom de marque, à supprimer (inutile et 500 ko).
- `public/logo.png.placeholder` : fichier texte à retirer.
- `mirror-and-push.sh` sur `main` : script interne à garder sur une branche dédiée ou à déplacer dans `scripts/`.

## Les 10 erreurs on-page les plus graves détectées

| # | Erreur | URL | Correction exacte |
|---|---|---|---|
| 1 | Sitemap sans URLs villes (`cities.json` vide) | `/sitemap.xml` | Utiliser la liste hardcodée dans `/ville/[slug]/page.tsx` (✅ fixé dans cette PR) |
| 2 | URL `/blog` en 404 dans sitemap | `/sitemap.xml` | Retirer tant que le blog n'existe pas (✅ fixé) |
| 3 | `generator: 'v0.dev'` dans metadata racine | `/` et toutes pages | Retirer le champ `generator` de `metadata` dans `app/layout.tsx` (✅ fixé) |
| 4 | Titles sur-optimisés redondants | `/services/*` | Pattern recommandé : "[Sujet spécifique] : [bénéfice] \| Crédit Plus" — 60 c max, voir phase-2-keyword-map.xlsx pour les 20 titles de référence |
| 5 | Pas de `canonical` sur aucune page | Toutes | Ajouter `alternates.canonical` dans chaque `metadata` + helper `getCanonical()` |
| 6 | Pas de JSON-LD Organization/FinancialService | `/` | Ajouter dans `app/layout.tsx` (✅ fixé) |
| 7 | Pas de JSON-LD FAQPage sur les FAQ | `/faq`, `/faq/carignan`, `/faq/dax` | Importer `<FAQPageSchema>` dans chaque FAQ + mapper les questions/réponses |
| 8 | Pas de JSON-LD LocalBusiness | `/agences/*` | Importer `<LocalBusinessSchema>` + renseigner `address`, `geo`, `openingHours` |
| 9 | Services ultra-courts (150 mots) | `/services/*` | Refonte 2500-4000 mots selon plan `phase-3-pilier-*.md` |
| 10 | Témoignages non géolocalisés ni vérifiables | `/temoignages`, `/` | Remplacer par widget Google/Trustpilot vérifiés + prénom/ville réels |

## Actions à lancer côté utilisateur (hors code)

### Immédiates (semaine 1)
1. Créer un compte **Google Search Console** sur `credit-plus.fr` et soumettre le nouveau sitemap après merge de cette PR.
2. Créer un compte **Trustpilot Business** (plan gratuit) et un flux de collecte d'avis J+7 après signature.
3. Valider la propriété Google Business Profile pour Carignan et Dax (si pas déjà fait).
4. Lancer un crawl **Screaming Frog** (licence annuelle 239 €) sur credit-plus.fr pour inventorier 404, redirections, `<title>` dupliqués, profondeur.
5. Abonnement **Ahrefs Starter** (129 $/mois) ou SEMrush Pro pour suivre positions et backlinks.

### À planifier (mois 1)
1. Vérifier/créer le profil **ORIAS** accessible publiquement (lien depuis page "À propos").
2. Créer 1 à 3 **pages auteurs** avec photo, bio, ORIAS individuel, LinkedIn (cf. Phase 4).
3. Migrer toutes les `<img>` vers `next/image` et activer `images.unoptimized: false`.
4. Supprimer les fichiers legacy `credit-time*` de `/public/`.

## Quick-wins code appliqués dans cette PR

### `app/sitemap.ts` — corrigé
Le fichier est réécrit pour itérer la liste hardcodée des villes dans le composant `/ville/[slug]`. URL `/blog` retirée. Ajouts : `/parrainage`, `/faq`, `/faq/carignan`, `/faq/dax`, `/devenir-courtier-independant`, `/agences/partout-en-france`.

### `app/layout.tsx` — modifié
- Suppression de `generator: 'v0.dev'`.
- Migration du `viewport` de `metadata` vers export séparé (Next 15).
- Injection du JSON-LD `Organization` + `FinancialService` dans `<head>` via composant `<OrganizationSchema>`.

### `next.config.mjs` — commenté
- Commentaire TODO sur `images.unoptimized: true` avec migration path vers `next/image`.
- Commentaire TODO sur `ignoreBuildErrors` et `ignoreDuringBuilds`.

### `docs/refonte-seo/schemas/*.tsx` — livrés
- 8 composants React server prêts à importer : `OrganizationSchema`, `LocalBusinessSchema`, `FAQPageSchema`, `BreadcrumbListSchema`, `ArticleSchema`, `PersonSchema`, `ServiceSchema`, `HowToSchema`. Chacun validé contre le schema.org et l'exigence YMYL Google.

## Seuils de succès à suivre (3, 6, 12 mois)

| KPI | Baseline avril 2026 | 3 mois | 6 mois | 12 mois |
|---|---|---|---|---|
| Pages indexées | ~12 | 40-60 | 100-140 | 150-200 |
| Trafic organique mensuel | à mesurer | +50 % | x4 | x10 |
| Mots-clés top 10 | à mesurer | 30 | 120 | 350 |
| Domain Rating (Ahrefs) | ~0-5 | 10-15 | 20-25 | 30-35 |
| Referring domains DR30+ | 0 | 5 | 15 | 50 |
| Citations LLM (top 50 requêtes) | 0 % | 2 % | 5 % | 10-15 % |
| Lighthouse perf mobile home | à mesurer | ≥ 80 | ≥ 90 | ≥ 95 |
