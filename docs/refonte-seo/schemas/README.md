# Composants JSON-LD — prêts à importer

Chaque fichier `*.tsx` exporte un **composant React Server** qui injecte un `<script type="application/ld+json">` dans le DOM. Pour utiliser :

```tsx
// dans une page Next App Router
import { OrganizationSchema } from "@/docs/refonte-seo/schemas/organization";
import { LocalBusinessSchema } from "@/docs/refonte-seo/schemas/local-business";
import { FAQPageSchema } from "@/docs/refonte-seo/schemas/faq-page";

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema city="Reims" {...} />
      <FAQPageSchema questions={[{ q: "…", a: "…" }]} />
      {/* … reste de la page */}
    </>
  );
}
```

Déplacer ces fichiers vers `components/schemas/` en production pour qu'ils soient importables sous `@/components/schemas/*`.

## Checklist JSON-LD par type de page

| Type de page | Schémas à injecter |
|---|---|
| Home | Organization + FinancialService + BreadcrumbList |
| Pilier | Service + FAQPage + HowTo (si étapes) + BreadcrumbList |
| Page ville (B2C) | LocalBusiness + FAQPage + BreadcrumbList |
| Agence physique | LocalBusiness (avec address + geo + openingHours) + BreadcrumbList |
| Article blog | Article + BreadcrumbList + FAQPage (si FAQ) |
| Page auteur | Person + BreadcrumbList |
| Service | Service + BreadcrumbList + FAQPage |
| Glossaire (entrée) | DefinedTerm + BreadcrumbList |
| Outil | SoftwareApplication ou WebApplication + BreadcrumbList |
| FAQ globale | FAQPage + BreadcrumbList |

## Règles anti-pénalité

- **Ne jamais** injecter un schema `FAQPage` si les questions/réponses ne sont pas visibles sur la page HTML (Google pénalise les rich snippets "hidden content").
- **Ne jamais** gonfler artificiellement `AggregateRating` : fournir uniquement les avis réellement collectés (Google + Trustpilot vérifiés).
- **Toujours** mettre la même URL canonique dans `mainEntityOfPage` que celle de `alternates.canonical` de la `metadata`.
- **Toujours** mettre à jour `dateModified` à chaque refonte éditoriale.
