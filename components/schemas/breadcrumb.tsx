/**
 * Composant JSON-LD BreadcrumbList — à utiliser sur toutes les pages internes.
 * Google utilise ce schema pour afficher le fil d'Ariane dans les SERP.
 */
import React from "react";

export type BreadcrumbItem = { name: string; url: string };

export function BreadcrumbListSchema({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `https://creditplus-france.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
