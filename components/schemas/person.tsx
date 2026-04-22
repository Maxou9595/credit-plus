/**
 * Composant JSON-LD Person — pour les pages /equipe/[slug]/
 * Critique E-E-A-T : identité nominative + credential ORIAS + sameAs LinkedIn.
 */
import React from "react";

type PersonSchemaProps = {
  name: string;
  slug: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  oriasNumber?: string;
  linkedin?: string;
  alumniOf?: string[];
  knowsAbout?: string[];
  foundingDate?: string;
};

export function PersonSchema({
  name,
  slug,
  jobTitle = "Courtier IOBSP",
  description,
  image,
  oriasNumber,
  linkedin,
  alumniOf,
  knowsAbout,
  foundingDate,
}: PersonSchemaProps) {
  const url = `https://creditplus-france.com/equipe/${slug}/`;
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name,
    url,
    jobTitle,
    worksFor: { "@id": "https://creditplus-france.com/#organization" },
  };
  if (description) jsonLd.description = description;
  if (image) jsonLd.image = image;
  if (oriasNumber) {
    jsonLd.hasCredential = {
      "@type": "EducationalOccupationalCredential",
      name: `ORIAS n°${oriasNumber}`,
      recognizedBy: { "@type": "Organization", name: "ORIAS" },
    };
  }
  const sameAs = [linkedin].filter(Boolean);
  if (sameAs.length) jsonLd.sameAs = sameAs;
  if (alumniOf?.length) {
    jsonLd.alumniOf = alumniOf.map((name) => ({ "@type": "EducationalOrganization", name }));
  }
  if (knowsAbout?.length) jsonLd.knowsAbout = knowsAbout;
  if (foundingDate) jsonLd.foundingDate = foundingDate;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
