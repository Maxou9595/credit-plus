/**
 * Composant JSON-LD Article — à utiliser sur les pages /blog/*.
 * Support des auteurs multiples, citations, et dateModified (crucial pour SEO + GEO).
 */
import React from "react";

type Author = { name: string; slug: string; oriasNumber?: string; jobTitle?: string };

type ArticleSchemaProps = {
  headline: string;
  description: string;
  urlPath: string;
  datePublished: string; // ISO
  dateModified?: string; // ISO
  author: Author;
  image?: string;
  citations?: { name: string; url: string }[];
};

export function ArticleSchema({
  headline,
  description,
  urlPath,
  datePublished,
  dateModified,
  author,
  image,
  citations = [],
}: ArticleSchemaProps) {
  const url = `https://credit-plus.fr${urlPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image ?? "https://credit-plus.fr/credit-plus-og.png",
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      url: `https://credit-plus.fr/equipe/${author.slug}/`,
      jobTitle: author.jobTitle ?? "Courtier IOBSP",
      ...(author.oriasNumber && {
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: `ORIAS n°${author.oriasNumber}`,
        },
      }),
    },
    publisher: {
      "@id": "https://credit-plus.fr/#organization",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(citations.length > 0 && {
      citation: citations.map((c) => ({
        "@type": "CreativeWork",
        name: c.name,
        url: c.url,
      })),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
