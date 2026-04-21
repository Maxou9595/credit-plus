# Phase 3 — Template page ville B2C (`/agences/[slug]/`)

> Ce template sert de gabarit pour les 20 pages villes prioritaires listées dans `phase-2-keyword-map.xlsx` (onglet "Pages Villes B2C"). Longueur cible **1500-1800 mots** chacune. Les variables en `{{double accolades}}` sont à personnaliser par ville.

## Métadonnées

- URL : `/agences/{{slug-ville-dept}}/` (ex. `/agences/reims-51/`)
- H1 : `Courtier immobilier à {{Ville}} — Crédit Plus`
- Title : `Courtier immobilier {{Ville}} — simulation gratuite | Crédit Plus` (≤60c)
- Meta : `Courtier immobilier à {{Ville}} : négociation bancaire, simulation gratuite, accompagnement de A à Z. Réponse sous 24h.` (≤155c)
- Mot-clé principal : `courtier immobilier {{ville_minuscule}}`
- Intention : Commerciale locale

## Plan Hn

### Intro (100 mots)
> "Obtenir un crédit immobilier à {{Ville}} en 2026, c'est composer avec un marché local précis : prix au m² autour de {{prix_m2}}, tissu bancaire dominé par {{banques_locales}}, profils d'acheteurs entre {{profils_dominants}}. Crédit Plus accompagne les projets immobiliers à {{Ville}} depuis [année] avec +100 partenaires bancaires et des taux négociés au plus près du marché."

### En bref
- Prix moyen au m² à {{Ville}} en 2026 : **{{prix_m2}}** (source : Meilleurs Agents / SeLoger).
- Délai médian de vente : **{{delai_vente}} jours**.
- Taux moyen d'un prêt 20 ans à {{Ville}} en avril 2026 : **3,25 %** (source : Observatoire Crédit Logement/CSA).
- Apport moyen : **{{apport_moyen}}** du prix d'achat.

### H2 — Le marché immobilier à {{Ville}} en 2026 (300 mots)
- Prix au m² par quartier (tableau).
- Évolution sur 3 ans.
- Typologie d'acheteurs (primo, secundo, investisseurs).
- Délais de vente.
- Références sourcées : Meilleurs Agents, SeLoger, INSEE.

### H2 — Les banques à {{Ville}} et leurs spécificités (300 mots)
- Lister **3-5 banques régionales** majeures et ce qu'elles font de mieux :
  - Ex. Reims : Crédit Agricole du Nord Est, Caisse d'Épargne Grand Est Europe, Banque Populaire Alsace Lorraine Champagne, CIC Est.
  - Ex. Strasbourg : Crédit Mutuel Sud-Europe Méditerranée, Caisse d'Épargne Grand Est Europe, Crédit Agricole Alsace Vosges.
- Préciser les orientations : primo, investissement, profession libérale, etc.
- Crédit Plus est partenaire de ces banques → traçabilité crédible.

### H2 — Combien coûte un courtier immobilier à {{Ville}} (200 mots)
- Grille tarifaire publique Crédit Plus.
- Pas de "gratuit" — mention de la commission bancaire.
- Lien profond `/courtier-immobilier/prix-courtier/`.

### H2 — Comment se déroule un dossier à {{Ville}} (200 mots, HowTo)
1. Premier contact téléphonique ou formulaire.
2. Analyse du dossier sous 48h.
3. Simulation et plan de financement.
4. Dépôt auprès de 3-5 banques partenaires.
5. Accord de principe sous 10-15 jours.
6. Signature de l'offre et accompagnement jusqu'au notaire.

### H2 — Exemple réel de financement à {{Ville}} en 2026 (200 mots)
- Anonymiser mais détailler : profil, projet, montant, durée, taux obtenu, assurance, économie vs offre initiale.
- Un seul exemple par page.

### H2 — FAQ locale (6-8 questions, schema `FAQPage`)
Exemples adaptables :

1. Combien faut-il gagner pour acheter un appartement à {{Ville}} ?
2. Quelles banques prêtent le plus facilement à {{Ville}} ?
3. Le marché immobilier à {{Ville}} est-il en baisse en 2026 ?
4. Peut-on obtenir un PTZ à {{Ville}} en 2026 ?
5. Crédit Plus a-t-il un agent dans ma zone ?
6. Combien de temps pour obtenir un crédit à {{Ville}} ?
7. Un investissement locatif à {{Ville}} est-il intéressant ?
8. Quels quartiers privilégier pour un primo-accédant à {{Ville}} ?

### Bloc agence + contact
- Adresse physique (si Carignan, Dax).
- Pour les villes sans agence physique : "Accompagnement 100 % à distance depuis notre bureau de Carignan, avec rendez-vous visio".
- Numéro, email, formulaire.
- Carte Google Maps intégrée (si agence physique).

### Bloc auteur
- Signature d'un courtier ayant une connaissance locale (ou de l'équipe).
- Éventuellement : "Rédigé par [NOM], courtier IOBSP ayant monté [X] dossiers à {{Ville}} ces 12 derniers mois".

### Bloc CTA final
- CTA simulateur + CTA contact.

## Schémas JSON-LD

Sur chaque page ville :

- `LocalBusiness` (avec `address`, `geo`, `areaServed`, `priceRange`, `openingHours`, `hasOfferCatalog`).
- `FAQPage` (liste des FAQ locales).
- `BreadcrumbList` (Home → Agences → {{Ville}}).
- Si agence physique : `FinancialService` en plus de `LocalBusiness`.

## Règles anti-cannibalisation

- **Ne pas dupliquer** le contenu entre 2 pages villes. Chaque page doit avoir au minimum 60 % de contenu unique (données locales, banques, prix au m², exemple).
- **Un seul mot-clé "courtier immobilier {{ville}}"** par URL. Pas de variante "meilleur courtier {{ville}}" sur une autre page.
- **Pas de listing de toutes les villes alentours** en bas de page (footer sale).

## Checklist avant mise en ligne

- [ ] Contenu ≥ 1500 mots utiles.
- [ ] Prix au m² sourcé (Meilleurs Agents, SeLoger, Notaires) avec date.
- [ ] 3 banques locales citées avec leur spécificité.
- [ ] Exemple client concret (anonymisé mais chiffré).
- [ ] FAQ 6-8 questions avec schema.
- [ ] 3 liens internes (home, `/credit-immobilier/`, `/courtier-immobilier/`).
- [ ] Breadcrumb.
- [ ] Mentions légales YMYL + ORIAS.
- [ ] Auteur nommé.
- [ ] PageSpeed mobile ≥ 85.
