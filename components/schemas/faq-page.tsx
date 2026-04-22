/**
 * Composant JSON-LD FAQPage — à utiliser sur toute page avec FAQ VISIBLE.
 * Règle Google : les questions/réponses doivent être visibles sur la page HTML,
 * sinon risque de pénalité "hidden content".
 */
import React from "react";

export type FAQItem = { q: string; a: string };

export function FAQPageSchema({ questions }: { questions: FAQItem[] }) {
  if (!questions || questions.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
