/**
 * Composant JSON-LD Organization + FinancialService
 * À injecter une seule fois dans app/layout.tsx
 */
import React from "react";

export function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://credit-plus.fr/#organization",
        "name": "Crédit Plus",
        "legalName": "SAS IM COURTAGE",
        "url": "https://credit-plus.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://credit-plus.fr/logo.png",
          "width": 512,
          "height": 512,
        },
        "sameAs": [
          // à compléter par l'équipe
          "https://www.linkedin.com/company/credit-plus-fr",
          "https://www.facebook.com/creditplusfr",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "À compléter",
          "addressLocality": "Carignan",
          "postalCode": "08110",
          "addressRegion": "Grand Est",
          "addressCountry": "FR",
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": "FR",
          "availableLanguage": "fr",
          "telephone": "+33-XXX-XXX-XXX", // à renseigner
        },
        "foundingDate": "2025",
        "identifier": [
          {
            "@type": "PropertyValue",
            "name": "ORIAS",
            "value": "25005566",
          },
        ],
      },
      {
        "@type": "FinancialService",
        "@id": "https://credit-plus.fr/#financialservice",
        "name": "Crédit Plus",
        "url": "https://credit-plus.fr",
        "parentOrganization": { "@id": "https://credit-plus.fr/#organization" },
        "areaServed": { "@type": "Country", "name": "France" },
        "serviceType": [
          "Courtage en crédit immobilier",
          "Courtage en rachat de crédit",
          "Intermédiation en assurance emprunteur",
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Crédit Plus",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crédit immobilier", "url": "https://credit-plus.fr/credit-immobilier/" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Investissement locatif", "url": "https://credit-plus.fr/investissement-locatif/" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rachat de crédit", "url": "https://credit-plus.fr/rachat-de-credit/" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assurance emprunteur", "url": "https://credit-plus.fr/assurance-emprunteur/" } },
          ],
        },
        "brand": { "@type": "Brand", "name": "Crédit Plus" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
