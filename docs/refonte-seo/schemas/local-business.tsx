/**
 * Composant JSON-LD LocalBusiness — à utiliser sur chaque page /agences/[slug]/
 */
import React from "react";

type LocalBusinessProps = {
  name?: string;
  city: string;
  region?: string;
  postalCode?: string;
  streetAddress?: string;
  latitude?: number;
  longitude?: number;
  slug: string; // ex "reims-51"
  areaServed?: string[];
  openingHours?: string[]; // Schema.org format, ex ["Mo-Fr 09:00-18:00"]
  phone?: string;
};

export function LocalBusinessSchema({
  name = "Crédit Plus",
  city,
  region = "Grand Est",
  postalCode,
  streetAddress,
  latitude,
  longitude,
  slug,
  areaServed,
  openingHours = ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
  phone,
}: LocalBusinessProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    "@id": `https://credit-plus.fr/agences/${slug}/#localbusiness`,
    name: `${name} — ${city}`,
    url: `https://credit-plus.fr/agences/${slug}/`,
    image: "https://credit-plus.fr/logo.png",
    parentOrganization: { "@id": "https://credit-plus.fr/#organization" },
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: region,
      addressCountry: "FR",
      ...(streetAddress && { streetAddress }),
      ...(postalCode && { postalCode }),
    },
    ...(latitude && longitude && {
      geo: { "@type": "GeoCoordinates", latitude, longitude },
    }),
    areaServed: areaServed ?? [city, region],
    openingHoursSpecification: openingHours.map((oh) => ({
      "@type": "OpeningHoursSpecification",
      openingHours: oh,
    })),
    ...(phone && { telephone: phone }),
    serviceType: "Courtage en crédit immobilier",
    priceRange: "€€", // convention schema.org
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
