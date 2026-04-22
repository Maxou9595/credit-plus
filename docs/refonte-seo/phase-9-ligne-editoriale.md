# Phase 9 — Ligne éditoriale, gouvernance & mesure

Cette phase conclut la refonte SEO & GEO : elle documente la **charte rédactionnelle**, le **processus de validation** en 3 temps, et les **KPIs de suivi**.

## 🖋️ Charte rédactionnelle Crédit Plus

### Positionnement éditorial

Crédit Plus se positionne comme **le courtier indépendant qui explique** le crédit immobilier aux particuliers — pédagogique, transparent, factuel, sans promesses creuses. Face à Pretto (digital premium), Meilleurtaux (historique institutionnel) et CAFPI (réseau physique), notre angle est **l'expertise accessible** : chaque article vulgarise un sujet YMYL avec des chiffres sourcés et des exemples chiffrés.

### Ton de marque

- **Voix** : courtier senior qui parle à un ami. Pédagogue mais jamais condescendant.
- **Rythme** : phrases courtes et denses. Une idée par phrase. Alterner avec des listes et tableaux.
- **Vocabulaire** : technique mais défini. À chaque acronyme ou terme bancaire, soit une explication entre parenthèses, soit un lien vers `/glossaire/[terme]`.
- **Posture** : jamais hautaine, jamais alarmiste. On informe, on donne les règles du jeu, on laisse le lecteur décider.

### Formules proscrites (ACPR / YMYL)

Interdit dans tous les contenus :

- « **Meilleur taux garanti** » — trompeur, risque sanction ACPR.
- « **100 % gratuit** », « **sans frais** », « **gratuitement** » seul — proscrit, aucun courtier IOBSP ne peut l'être légalement.
- « **Taux imbattable** », « **taux le plus bas** », « **taux record** » — superlatifs non vérifiables.
- « **Crédit facile** », « **crédit rapide** », « **crédit express** » — allusions à une déresponsabilisation.
- « **Sans perdre de TIME** » ou tout franglish décoratif — héritage Credit Time à bannir.
- « **Comme une banque, en mieux** » — ambiguïté sur le statut IOBSP.

Formules de remplacement :

- « Conditions optimisées auprès de nos 100+ partenaires bancaires »
- « Honoraires au succès uniquement »
- « Sans frais à la charge du client avant obtention de l'offre »
- « Grille tarifaire transparente, disponible en page mentions légales »
- « Réponse sous 24h »
- « Accompagnement de A à Z »

### Formules obligatoires (YMYL)

À inclure systématiquement sur toute page mentionnant un taux, un montant ou un produit bancaire :

- **« Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. »**
- Mention ORIAS : **« Crédit Plus — SAS IM COURTAGE — ORIAS n°25005566 — ACPR »**
- Disclaimer simulation : **« Résultat théorique et indicatif, ne constitue pas une offre de prêt. »**

Le composant `<YmylDisclaimer />` et le footer global les injectent automatiquement.

### Règles de citation et de chiffres

- **Tout chiffre doit avoir une source** et une date.
- Format standard : « X % en [mois année] (source : [organisme], [lien facultatif]) ».
- Sources privilégiées dans l'ordre :
  1. Observatoire Crédit Logement / CSA (taux mensuels)
  2. Banque de France (production de crédits, taux d'usure)
  3. HCSF (règles prudentielles)
  4. ACPR (régulation)
  5. INSEE (démographie, pouvoir d'achat)
  6. BOFIP (fiscalité)
  7. ANIL (logement, PTZ)
  8. Journal Officiel / Legifrance (textes réglementaires)
  9. Notaires de France (prix au m², délais)
  10. Meilleurs Agents, SeLoger (données locales)
- Données propriétaires Crédit Plus (baromètre mensuel, études) : attribution obligatoire « Source : données Crédit Plus sur X dossiers traités entre [période] ».

### Structure-type d'un article

Tout article de blog ou page pilier respecte cette trame :

1. **H1** unique, contient le mot-clé principal ou une variante sémantique.
2. **Chapô** (50-120 mots) avec mot-clé dans les 100 premiers mots.
3. **« En bref » (TL;DR GEO)** — 3-4 bullets citables par les LLM.
4. **CTA primaire** en haut de page.
5. **5-10 H2** avec hiérarchie claire.
6. **Chiffres sourcés** : un exemple chiffré par section majeure.
7. **Tableau** dès qu'il y a 3+ lignes comparables.
8. **FAQ (H2 + accordéon)** : 5-12 questions, schema FAQPage.
9. **Bloc auteur** avec `<AuthorBio />` et ORIAS.
10. **Mentions YMYL** avec `<YmylDisclaimer />`.
11. **CTA final** + maillage interne 3-5 liens.

## ✅ Processus de validation en 3 temps

Tout contenu publié passe par **3 revues séquentielles** :

### 1. Revue SEO (brief initial)

Avant rédaction, vérifier :

- [ ] Mot-clé principal validé et non-cannibalisant (consulter `docs/refonte-seo/phase-2-keyword-map.xlsx`).
- [ ] URL slug court, en français, sans accent.
- [ ] Title ≤ 60 caractères avec mot-clé en premier.
- [ ] Meta description ≤ 155 caractères avec CTA.
- [ ] Intention de recherche cible claire (info / commercial / transactionnel).
- [ ] Maillage interne prévu : 3-5 liens entrants + 3-5 liens sortants.
- [ ] Source externe à citer identifiée (obligation GEO).

### 2. Revue éditoriale (rédaction)

Pendant ou après rédaction :

- [ ] H1 présent et unique.
- [ ] Chapô avec mot-clé dans les 100 premiers mots.
- [ ] Bloc « En bref » TL;DR conforme au format.
- [ ] 5+ H2 avec cohérence hiérarchique.
- [ ] Au moins 1 tableau et 1 exemple chiffré.
- [ ] FAQ (5-12 questions) avec schema.
- [ ] Zéro formule proscrite (cf. liste).
- [ ] Toutes les formules obligatoires YMYL présentes.
- [ ] Maillage interne intégré dans le corps du texte.

### 3. Revue juridique / conformité ACPR (avant publication)

Dernière étape, réalisée par un **courtier IOBSP ou un juriste** :

- [ ] Aucune promesse non tenable (taux, délai, montant).
- [ ] Mention YMYL « Un crédit vous engage et doit être remboursé » visible.
- [ ] Mention ORIAS + ACPR visible (footer suffit).
- [ ] Chiffres vérifiés par rapport aux sources officielles.
- [ ] Exemples chiffrés cohérents avec la réglementation actuelle (HCSF, taux d'usure).
- [ ] Pas de mention d'une banque comme « meilleure » ou « la plus compétitive » de manière absolue.
- [ ] Pas de témoignage fictif ou non documenté.
- [ ] Contenu signé par un auteur identifié.

### Traçabilité

Chaque publication laisse une trace de validation :

- Issue GitHub créée avec la checklist des 3 revues cochée.
- Fichier commité avec commit message `content: published [slug] — reviewed-by: [auteur]`.
- Mention dans le CHANGELOG (optionnel mais recommandé).

## 📊 KPIs de suivi (dashboard mensuel)

### Trafic & indexation

1. **Pages indexées** (Google Search Console → Couverture). Cible : 150-200 à 18 mois.
2. **Impressions moyennes mensuelles** (GSC). Cible : 50 000+ à 12 mois.
3. **Clics moyens mensuels** (GSC). Cible : 3 000+ à 12 mois.
4. **Taux de clic moyen** (CTR). Cible : 4 %+ (moyenne secteur finance).
5. **Position moyenne** sur les mots-clés surveillés (Ahrefs). Cible : < 15.

### Positions par cluster

6. **Mots-clés top 3** toutes pages. Cible : 30 à 12 mois, 100 à 18 mois.
7. **Mots-clés top 10**. Cible : 150 à 12 mois, 350 à 18 mois.
8. **Mots-clés top 20**. Cible : 400 à 12 mois.
9. **Mots-clés locaux** (courtier + ville). Cible : top 10 sur 30 villes à 18 mois.

### Backlinks & autorité

10. **Domain Rating Ahrefs**. Cible : 20 à 12 mois, 35 à 18 mois.
11. **Domaines référents totaux**. Cible : 50 à 12 mois, 150 à 18 mois.
12. **Domaines référents DR ≥ 30**. Cible : 15 à 12 mois, 50 à 18 mois.

### Conversions

13. **Leads organiques mensuels** (formulaires / appels). Cible : 50/mois à 12 mois.
14. **Coût d'acquisition SEO** vs Google Ads. Cible : 3-5× moins cher.

### GEO (citations LLM)

15. **Taux de citation dans ChatGPT / Claude / Perplexity / Gemini** sur 50 requêtes cibles. Cible : 10 % à 18 mois.

### Performance technique

16. **Lighthouse mobile home**. Cible : ≥ 90.
17. **LCP médian mobile** (Google CrUX). Cible : < 2,5 s.
18. **CLS médian**. Cible : < 0,1.

## 🛠️ Stack outils recommandée

| Besoin | Outil | Coût mensuel | Alternative gratuite |
|---|---|---|---|
| Suivi positions SEO | Ahrefs | 129 $ | Ubersuggest (limité) |
| Suivi backlinks | Ahrefs | inclus | OpenLinkProfiler |
| Audit technique | Screaming Frog | 20 € (licence annuelle 239 €) | Sitebulb (gratuit limité) |
| Emails journalistes | Hunter.io | 49 $ | Recherche LinkedIn manuelle |
| CRM outreach | BuzzStream | 24 $ | Notion / Airtable |
| Analytics | Google Analytics 4 | gratuit | — |
| Search Console | GSC | gratuit | — |
| Dashboard consolidé | Looker Studio | gratuit | Notion / Sheets |
| Monitoring citations LLM | script Node interne | 50 $ (clés API) | script Node + tests manuels |
| **Total min** | — | **≈ 220 €/mois** | **≈ 60 €/mois** |

## 📅 Rythme de gouvernance

### Quotidien
- Vérifier les nouvelles demandes HARO / SourceBottle (10 min).

### Hebdomadaire (30 min, vendredi après-midi)
- Revue Search Console : nouvelles pages indexées, erreurs 404, impressions.
- Revue des positions (Ahrefs) : variations > 5 places.
- Planification du contenu de la semaine suivante.

### Mensuel (2 h, début de mois)
- Publier le baromètre des taux du mois (article blog).
- Mettre à jour `lib/market-rates.ts` avec les vraies données.
- Tour de table des KPIs (dashboard Looker).
- Test de citations LLM sur 10 requêtes cibles.
- Planifier les actions netlinking du mois (pitchs, guest posts, HARO).

### Trimestriel (½ journée)
- Revue stratégique : comparer l'avancement aux objectifs.
- Audit Screaming Frog complet.
- Identification de nouveaux clusters de mots-clés à cibler.
- Revue de la ligne éditoriale (évolutions ACPR, HCSF, marché).
- Mise à jour des piliers (datePublished + dateModified des pages clés).

### Annuel
- Publication de l'étude « Primo-accédant en Grand Est » (septembre).
- Audit backlinks complet : identification des liens toxiques (Disavow si nécessaire).
- Revue budgétaire SEO.
- Mise à jour du prompt maître avec les apprentissages terrain.

## 📁 Fichiers de référence

- `docs/refonte-seo/phase-1-audit-technique.md` — audit initial
- `docs/refonte-seo/phase-2-arborescence.md` — arborescence cible
- `docs/refonte-seo/phase-2-keyword-map.xlsx` — source de vérité mots-clés
- `docs/refonte-seo/phase-3-calendrier-editorial.xlsx` — calendrier 40 articles
- `docs/refonte-seo/phase-8-netlinking.md` — plan netlinking
- `docs/refonte-seo/phase-9-ligne-editoriale.md` — **ce document**
- `lib/market-rates.ts` — données taux centralisées
- `lib/authors.ts` — registre auteurs
- `lib/partners.ts` — liste des banques partenaires
- `lib/blog-posts.ts` — registre des articles publiés
- `lib/glossary.ts` — glossaire (à étendre vers 80 termes)
- `lib/cities-b2c.ts` — données villes B2C

## 📝 Exemple de checklist avant publication

```markdown
## Nouvelle publication : /blog/[slug]

### Revue SEO (brief)
- [ ] Mot-clé principal : ____
- [ ] URL : ____
- [ ] Title ≤ 60c : ____
- [ ] Meta ≤ 155c : ____
- [ ] Source externe obligatoire : ____

### Revue éditoriale
- [ ] H1 unique avec mot-clé
- [ ] Chapô 50-120 mots
- [ ] TL;DR en bref (3-4 bullets)
- [ ] ≥ 5 H2
- [ ] ≥ 1 tableau + 1 exemple chiffré
- [ ] FAQ (5-12 questions) avec schema
- [ ] Maillage interne 3-5 liens
- [ ] Zéro formule proscrite

### Revue conformité ACPR
- [ ] Formule YMYL présente
- [ ] Mention ORIAS visible
- [ ] Chiffres vérifiés vs sources officielles
- [ ] Exemples cohérents avec HCSF 2026
- [ ] Signature auteur (AuthorBio)
- [ ] Validation par : ____ le ____
```

Copier cette checklist dans chaque pull request de contenu pour garantir la traçabilité.
