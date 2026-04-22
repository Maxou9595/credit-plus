/**
 * Composant JSON-LD HowTo — pour les guides étape par étape.
 * Les LLM et Google adorent les HowTo pour les featured snippets et les AIO.
 */
import React from "react";

type HowToStep = { name: string; text: string; url?: string };

type HowToSchemaProps = {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, ex "P30D" = 30 jours
  estimatedCost?: { currency: string; value: number };
  steps: HowToStep[];
};

export function HowToSchema({
  name,
  description,
  totalTime,
  estimatedCost,
  steps,
}: HowToSchemaProps) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url && { url: s.url }),
    })),
  };
  if (totalTime) jsonLd.totalTime = totalTime;
  if (estimatedCost) {
    jsonLd.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
