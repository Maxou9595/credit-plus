# Phase 2 — Arborescence cible & keyword map

> Cet arbre est la cible à 18 mois. Le keyword map complet (150+ URLs, tous avec title/meta/mot-clé/volume/intention/maillage) est livré dans `phase-2-keyword-map.xlsx`.

## Principes

1. **Silos thématiques profonds** — cinq piliers, chacun avec ses pages filles hyper-spécialisées sur la longue traîne.
2. **Une seule URL par mot-clé principal** — pas de cannibalisation. Le keyword map Excel sert de source de vérité.
3. **Profondeur ≤ 3 clics** depuis la home pour toute page stratégique.
4. **Breadcrumb obligatoire partout** avec JSON-LD `BreadcrumbList`.
5. **URLs en slug court, français, sans stop-word, sans majuscule, sans accent** (ex. `/rachat-de-credit/renegociation-pret/` et non `/rachat-crédit/renégocier/`).
6. **Pas de trailing slash** par défaut ; redirection 301 `/foo/` → `/foo` gérée via `next.config.mjs` ou middleware.

## Arborescence cible (vue compacte)

```
/                                                          [home]
│
├── /credit-immobilier/                                    [Pilier 1]
│   ├── /simulation/
│   ├── /taux/
│   │   ├── /taux-15-ans/
│   │   ├── /taux-20-ans/
│   │   ├── /taux-25-ans/
│   │   ├── /taux-30-ans/
│   │   └── /historique/                                   [archive mensuelle]
│   ├── /capacite-emprunt/
│   ├── /apport-personnel/
│   ├── /pret-taux-zero-ptz/
│   ├── /frais-de-notaire/
│   ├── /pret-relais/
│   ├── /primo-accedant/
│   ├── /sans-cdi/
│   │   ├── /profession-liberale/
│   │   ├── /medecin/
│   │   ├── /chef-entreprise/
│   │   ├── /intermittent-spectacle/
│   │   └── /freelance-auto-entrepreneur/
│   ├── /non-resident-expatrie/
│   └── /pret-relais-vente-achat/
│
├── /investissement-locatif/                               [Pilier 2]
│   ├── /simulation/
│   ├── /sci/
│   ├── /lmnp/
│   ├── /pinel/
│   ├── /deficit-foncier/
│   ├── /location-meublee-lmp/
│   └── /rendement-locatif-calcul/
│
├── /rachat-de-credit/                                     [Pilier 3]
│   ├── /simulation/
│   ├── /renegociation-pret/
│   ├── /regroupement-credits/
│   ├── /quand-racheter-son-credit/
│   ├── /rachat-credit-immobilier/
│   └── /rachat-credit-consommation/
│
├── /assurance-emprunteur/                                 [Pilier 4]
│   ├── /delegation/
│   ├── /loi-lemoine/
│   ├── /comparateur/
│   ├── /garanties/
│   ├── /quotite/
│   └── /assurance-emprunteur-sans-questionnaire/
│
├── /courtier-immobilier/                                  [Pilier 5 — expertise]
│   ├── /comment-ca-marche/
│   ├── /prix-courtier/
│   ├── /en-ligne/
│   ├── /avis/
│   └── /vs-banque-directe/
│
├── /agences/                                              [SEO local B2C]
│   ├── /carignan-08/                                      [renommé pour le département]
│   ├── /sedan-08/
│   ├── /charleville-mezieres-08/
│   ├── /reims-51/
│   ├── /chalons-en-champagne-51/
│   ├── /epernay-51/
│   ├── /troyes-10/
│   ├── /verdun-55/
│   ├── /bar-le-duc-55/
│   ├── /metz-57/
│   ├── /thionville-57/
│   ├── /nancy-54/
│   ├── /luneville-54/
│   ├── /epinal-88/
│   ├── /saint-die-des-vosges-88/
│   ├── /strasbourg-67/
│   ├── /colmar-68/
│   ├── /mulhouse-68/
│   ├── /chaumont-52/
│   ├── /dax-40/                                          [existe, hors Grand Est, stratégique]
│   └── /partout-en-france/                                [hub national]
│
├── /reseau/                                               [B2B — recrutement courtiers, ISOLÉ]
│   ├── /devenir-courtier-independant/
│   ├── /commissions/
│   ├── /conventions-bancaires/
│   └── /villes/                                           [ancienne arbo /ville/[slug]]
│       ├── /paris/, /lyon/, /marseille/, …
│
├── /blog/                                                 [Éditorial]
│   ├── /                                                  [index paginé]
│   ├── /actualites/
│   ├── /analyses-taux/
│   │   └── /YYYY-MM/                                      [baromètre mensuel]
│   ├── /guides/
│   ├── /etudes-de-cas/
│   └── /[article-slug]/                                   [dynamique]
│
├── /outils/                                               [Outils & calculatrices]
│   ├── /calcul-mensualites/
│   ├── /calcul-capacite-emprunt/
│   ├── /calcul-taux-endettement/
│   ├── /calcul-frais-de-notaire/
│   ├── /simulation-ptz/
│   ├── /tableau-amortissement/
│   ├── /calcul-rachat-credit/
│   ├── /comparateur-assurance-emprunteur/
│   ├── /attestation-financabilite/
│   └── /calcul-transfert-pret/
│
├── /glossaire/                                            [Lexique]
│   └── /[terme]/                                          [60-80 entrées]
│
├── /equipe/                                               [E-E-A-T]
│   └── /[prenom-nom]/                                     [pages auteurs]
│
├── /avis/
├── /faq/                                                  [existante, à enrichir]
├── /presse/                                               [mentions médias]
├── /a-propos/
├── /contact/
├── /mentions-legales/
├── /cgu/
├── /cgv/
└── /politique-de-confidentialite/
```

## Mapping migration depuis l'existant

| URL existante | Statut | URL cible | Action |
|---|---|---|---|
| `/` | ✅ Garder | `/` | Refonte contenu (cf. plan home dans phase-3) |
| `/services/credit-immobilier` | 🔄 Migrer | `/credit-immobilier/` | Redirection 301 + refonte contenu 2500-4000 mots |
| `/services/investissement-locatif` | 🔄 Migrer | `/investissement-locatif/` | Redirection 301 + refonte |
| `/services/rachat-de-credit` | 🔄 Migrer | `/rachat-de-credit/` | Redirection 301 + refonte |
| `/services/assurance-emprunteur` | 🔄 Migrer | `/assurance-emprunteur/` | Redirection 301 + refonte |
| `/ville/[slug]` (B2B recrutement) | ⚠️ Isoler | `/reseau/villes/[slug]/` | Redirection 301 ; remplacer sur `/ville/[slug]` par pages B2C "Courtier immobilier à [Ville]" |
| `/agences/carignan` | ✅ Garder | `/agences/carignan-08/` | Ajouter code département dans slug pour désambiguïser |
| `/agences/dax` | ✅ Garder | `/agences/dax-40/` | Idem |
| `/agences/partout-en-france` | ✅ Garder | `/agences/partout-en-france/` | Refonte contenu pour hub national |
| `/devenir-courtier-independant` | ✅ Garder | `/reseau/devenir-courtier-independant/` | Redirection 301 |
| `/faq` | ✅ Garder | `/faq/` | Enrichir + `FAQPage` schema |
| `/faq/carignan`, `/faq/dax` | ✅ Garder | `/faq/` (merge) ou `/agences/carignan-08/#faq` | Décider si FAQ locale ou FAQ sectionnée par ville |
| `/demande-credit` | ✅ Garder | `/credit-immobilier/simulation/` | Redirection 301 + unification avec simulateur enrichi |
| `/contact` | ✅ Garder | `/contact/` | Enrichir avec horaires, adresse vérifiée, map |
| `/temoignages` | ✅ Garder | `/avis/` | Renommer + intégrer widget Google/Trustpilot |
| `/parrainage` | ✅ Garder | `/parrainage/` | Pas de SEO, mais à linker depuis `/equipe/` |
| `/email-status` | 🚫 Deindex | `/email-status/` | `robots` disallow + `noindex` |
| `/merci` | 🚫 Deindex | `/merci/` | `robots` disallow + `noindex` |
| `/partenaire/alpha-assurance` | ❓ Vérifier | N/A | Page absente mais listée dans sitemap — retirer ou créer |

## Règles de nommage d'URL

- Tout en minuscules, sans accent.
- Tirets, jamais d'underscores.
- Verbes évités (on écrit `/calcul-mensualites/` et non `/calculer-mensualites/`).
- Articles et prépositions évités sauf si sémantiquement cruciaux (`/pret-a-taux-zero/` est borderline, on préfère `/pret-taux-zero-ptz/`).
- Pour les villes : `ville-CODE-DEPARTEMENT` (ex. `reims-51`) pour désambiguïser Reims de d'éventuels homonymes, améliorer le signal local et anticiper les recherches "courtier reims 51".
- Pour les archives temporelles : `YYYY-MM` (ex. `/blog/analyses-taux/2026-04/`). Toujours ISO.

## Profondeur de crawl cible

| Niveau | Nb de pages | Exemples |
|---|---|---|
| N0 (home) | 1 | `/` |
| N1 | ~25 | Piliers, pages agence phares, blog index, outils index, FAQ, contact, à-propos |
| N2 | ~120 | Pages filles des piliers, chaque agence, chaque article, chaque outil, chaque terme du glossaire |
| N3 | ~50 | Archives mensuelles, études de cas, pages auteurs, sous-variantes (profil médecin, SCI…) |

Total cible à 18 mois : **~200 pages indexables de qualité**. Aujourd'hui : 11 réellement exploitables → **x18**.

## Hub pages (sections-clés pour PageRank interne)

Les 5 piliers sont les hubs principaux. Chaque hub :
- Reçoit des liens internes depuis la home, le footer, le blog et toutes ses pages filles.
- Redistribue vers ses 5-12 pages filles via un bloc "Explorer" en bas de page.
- Linke latéralement vers les 2 autres piliers les plus proches (ex. Crédit immobilier ↔ Assurance emprunteur).

Cette structure produit un PageRank interne concentré sur les piliers, qui remontent naturellement dans les SERP courte-traîne.
