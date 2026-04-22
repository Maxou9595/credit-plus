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
        "@id": "https://creditplus-france.com/#organization",
        "name": "Crédit Plus",
        "legalName": "SAS IM COURTAGE",
        "url": "https://creditplus-france.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://creditplus-france.com/logo.png",
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
        "@id": "https://creditplus-france.com/#financialservice",
        "name": "Crédit Plus",
        "url": "https://creditplus-france.com",
        "parentOrganization": { "@id": "https://creditplus-france.com/#organization" },
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
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crédit immobilier", "url": "https://creditplus-france.com/credit-immobilier/" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Investissement locatif", "url": "https://creditplus-france.com/investissement-locatif/" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rachat de crédit", "url": "https://creditplus-france.com/rachat-de-credit/" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assurance emprunteur", "url": "https://creditplus-france.com/assurance-emprunteur/" } },
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
