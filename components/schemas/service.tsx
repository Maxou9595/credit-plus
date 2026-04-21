/**
 * Composant JSON-LD Service — à utiliser sur les pages piliers
 * (/credit-immobilier/, /rachat-de-credit/, etc.)
 */
import React from "react";

type ServiceSchemaProps = {
  name: string;
  description: string;
  urlPath: string;
  serviceType?: string;
  areaServed?: string;
  provider?: boolean; // si true, lie à #organization
};

export function ServiceSchema({
  name,
  description,
  urlPath,
  serviceType = "FinancialService",
  areaServed = "France",
  provider = true,
}: ServiceSchemaProps) {
  const url = `https://credit-plus.fr${urlPath}`;
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    areaServed: { "@type": "Country", name: areaServed },
  };
  if (provider) {
    jsonLd.provider = { "@id": "https://credit-plus.fr/#organization" };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
