# Documentation - Pages Ville SEO

## Vue d'ensemble

Ce système génère automatiquement 500 pages ville optimisées pour le SEO local dans la région Grand-Est. Chaque page est statiquement générée avec Next.js pour des performances optimales.

## Structure des fichiers

\`\`\`
├── app/
│   ├── ville/
│   │   └── [slug]/
│   │       ├── page.tsx          # Template de page ville
│   │       └── not-found.tsx     # Page 404 personnalisée
│   ├── sitemap.ts                # Sitemap dynamique
│   └── robots.ts                 # Configuration robots.txt
├── components/
│   ├── city-faq.tsx              # Composant FAQ
│   ├── city-services.tsx         # Composant services
│   ├── city-cta.tsx              # Composant CTA
│   └── other-cities-grid.tsx     # Maillage interne
├── lib/
│   ├── types/
│   │   └── city.ts               # Types TypeScript
│   ├── helpers/
│   │   └── city-helpers.ts       # Fonctions utilitaires
│   └── data/
│       └── city-data.ts          # Accès aux données
├── data/
│   ├── cities.json               # Base de données des villes
│   └── cities-input.csv          # Fichier CSV source
└── scripts/
    └── convert-csv-to-json.js    # Script de conversion
\`\`\`

## Utilisation du script de conversion CSV

### 1. Préparer le fichier CSV

Créez un fichier `data/cities-input.csv` avec le format suivant :

\`\`\`csv
nom_commune,code_postal,nom_departement,code_departement,nom_region,population,latitude,longitude
Strasbourg,67000,Bas-Rhin,67,Grand Est,280966,48.5734,7.7521
Reims,51100,Marne,51,Grand Est,182592,49.2583,4.0317
\`\`\`

**Colonnes requises :**
- `nom_commune` : Nom de la ville
- `code_postal` : Code postal
- `nom_departement` : Nom du département
- `code_departement` : Code du département (2 chiffres)
- `nom_region` : Nom de la région (doit être "Grand Est")
- `population` : Population (nombre entier)
- `latitude` : Latitude (décimal)
- `longitude` : Longitude (décimal)

### 2. Exécuter le script

\`\`\`bash
node scripts/convert-csv-to-json.js
\`\`\`

Le script va :
- Lire le fichier CSV
- Générer des slugs URL-friendly (ex: "Saint-Étienne" → "saint-etienne")
- Détecter et ignorer les doublons
- Trier les villes par population
- Générer `data/cities.json`

### 3. Vérifier la sortie

Le fichier `data/cities.json` sera créé avec la structure :

\`\`\`json
[
  {
    "slug": "strasbourg",
    "name": "Strasbourg",
    "postalCode": "67000",
    "department": "Bas-Rhin",
    "departmentCode": "67",
    "region": "Grand Est",
    "population": 280966,
    "latitude": 48.5734,
    "longitude": 7.7521
  }
]
\`\`\`

## Génération des pages

Les pages sont générées statiquement au build via `generateStaticParams()`. Pour chaque ville :

### Contenu généré automatiquement

1. **Meta tags SEO**
   - Title : "Courtier en Crédit Immobilier à {Ville} ({Département}) | Crédit Time"
   - Description : Personnalisée avec ville, département et population

2. **Contenu de page**
   - H1 personnalisé
   - Texte d'introduction avec données réelles
   - Section services adaptée à la localité
   - 10 questions FAQ localisées
   - Maillage interne vers 10 villes du même département

3. **Structure SEO**
   - Balises sémantiques HTML5
   - Schema.org (à ajouter si nécessaire)
   - URLs propres : `/ville/{slug}`

## Maillage interne

Chaque page ville affiche jusqu'à 10 autres villes du même département, triées par population. Cela crée un réseau de liens internes puissant pour le SEO.

## Sitemap

Le sitemap est généré dynamiquement et inclut :
- Toutes les pages statiques du site
- Les 500 pages ville avec priorité 0.8
- Fréquence de mise à jour : monthly

Accessible à : `https://credit-time.fr/sitemap.xml`

## Contraintes et bonnes pratiques

### ✅ À faire
- Utiliser uniquement des données réelles (INSEE)
- Personnaliser le contenu par ville/département
- Maintenir une cohérence dans les templates
- Tester les pages générées

### ❌ À éviter
- Inventer des données (adresses, horaires, etc.)
- Dupliquer du contenu identique
- Créer des pages pour des villes hors Grand-Est
- Utiliser des slugs en double

## Ajout de nouvelles villes

1. Ajouter les données dans `cities-input.csv`
2. Exécuter `node scripts/convert-csv-to-json.js`
3. Rebuild le site : `npm run build`
4. Les nouvelles pages seront automatiquement générées

## Performance

- **Build time** : ~2-3 secondes pour 500 pages
- **Page size** : ~15-20 KB (HTML + CSS)
- **Lighthouse score** : 95+ (Performance, SEO, Accessibility)

## Maintenance

Le système est conçu pour être autonome. Une fois les données CSV importées, aucune maintenance manuelle n'est nécessaire pour les pages individuelles.

Pour modifier le template de toutes les pages, éditez simplement `app/ville/[slug]/page.tsx` et les composants associés.
