import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "PTZ 2026 : conditions, zones, plafonds, montant",
  description: "Tout sur le PTZ 2026 : éligibilité primo-accédant, zonage A/B1/B2/C, plafonds de ressources, montant prêtable, durée.",
  alternates: { canonical: "/credit-immobilier/pret-taux-zero-ptz" },
}

const faqs = [
  { q: "Qui peut bénéficier du PTZ en 2026 ?", a: "Trois conditions cumulatives : être primo-accédant (pas propriétaire de sa résidence principale depuis 2 ans), respecter les plafonds de ressources selon zone/foyer, acheter une résidence principale (occupée ≥ 8 mois/an)." },
  { q: "Les maisons neuves sont-elles éligibles au PTZ 2026 ?", a: "Non. Depuis le recentrage 2024, le PTZ ne finance plus les maisons individuelles neuves. Éligible : neuf collectif en zones A/B1/B2, ancien avec rénovation énergétique en zones B2/C." },
  { q: "Quel est le montant maximum du PTZ ?", a: "Entre 10 et 40 % du projet selon la zone et la nature. Plafonné à 100 000 € en zone A, 80 000 € en B1, 60 000 € en B2, 40 000 € en C. Il doit toujours être couplé à un prêt principal." },
  { q: "Combien de temps dure le remboursement du PTZ ?", a: "20 à 25 ans au total, avec un différé de 5, 10 ou 15 ans selon la tranche de revenus. Pendant le différé, aucun remboursement n'est demandé. Ensuite, remboursement en mensualités constantes." },
  { q: "Puis-je cumuler PTZ et autres aides ?", a: "Oui. Le PTZ se cumule avec : Action Logement (1 % logement), prêts conventionnés, PAS, PEL/CEL en apport, aides locales. Il doit obligatoirement être couplé à un prêt immobilier classique." },
]

export default function PTZPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "PTZ 2026", url: "/credit-immobilier/pret-taux-zero-ptz" },
      ]}
      eyebrow="Pilier crédit immobilier"
      h1="Prêt à Taux Zéro 2026 : conditions, zones, montant"
      intro={<p>Le PTZ 2026 est une aide publique au premier achat de résidence principale. Sans intérêts, sans frais, il finance jusqu'à 40 % du projet pour les primo-accédants sous conditions de ressources.</p>}
      tldr={[
        <>Réservé aux <strong>primo-accédants</strong> (pas propriétaire de sa RP depuis 2 ans).</>,
        <>Éligible : <strong>neuf collectif</strong> en zones A/B1/B2, <strong>ancien rénové</strong> en zones B2/C.</>,
        <>Finance <strong>10 à 40 %</strong> du projet, plafonné selon la zone.</>,
        <>Durée <strong>20-25 ans</strong> avec différé de 5 à 15 ans selon revenus.</>,
      ]}
      ctaPrimary={{ label: "Simuler mon PTZ", href: "/outils/simulation-ptz" }}
      ctaSecondary={{ label: "Guide blog complet", href: "/blog/ptz-2026-guide-complet" }}
      faqs={faqs}
    >
      <h2>Les zones PTZ en 2026</h2>
      <ul>
        <li><strong>Zone A bis / A</strong> — Paris, petite couronne, Côte d'Azur, frontière suisse.</li>
        <li><strong>Zone B1</strong> — métropoles de plus de 250 000 habitants (Reims, Strasbourg, Nancy, Metz, Lyon, Marseille, Toulouse, Nantes, Bordeaux, Rennes…).</li>
        <li><strong>Zone B2</strong> — villes moyennes (50 000 à 250 000 habitants).</li>
        <li><strong>Zone C</strong> — reste du territoire (Ardennes, zones rurales, petites villes).</li>
      </ul>

      <h2>Quotité et plafond de montant</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Zone</th>
              <th className="text-left p-3 border border-gray-200">Neuf collectif</th>
              <th className="text-left p-3 border border-gray-200">Ancien + travaux énergie</th>
              <th className="text-left p-3 border border-gray-200">Plafond montant</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-gray-200">A / A bis</td><td className="p-3 border border-gray-200">40 %</td><td className="p-3 border border-gray-200">Non éligible</td><td className="p-3 border border-gray-200">100 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">B1</td><td className="p-3 border border-gray-200">40 %</td><td className="p-3 border border-gray-200">Non éligible</td><td className="p-3 border border-gray-200">80 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">B2</td><td className="p-3 border border-gray-200">40 %</td><td className="p-3 border border-gray-200">20 %</td><td className="p-3 border border-gray-200">60 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">C</td><td className="p-3 border border-gray-200">Non éligible</td><td className="p-3 border border-gray-200">20 %</td><td className="p-3 border border-gray-200">40 000 €</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Exemples concrets</h2>
      <ul>
        <li><strong>Couple Reims (B1), revenus 45 000 €, achat neuf 220 000 €</strong> → PTZ = 40 % × 220 000 = 88 000 €, plafonné à 80 000 €. Reste à financer : 140 000 € + frais.</li>
        <li><strong>Célibataire Charleville (C), revenus 28 000 €, achat ancien 110 000 € + 20 000 € travaux énergétiques</strong> → PTZ = 20 % × 130 000 = 26 000 €.</li>
        <li><strong>Cadre Paris (A), revenus 65 000 €, achat neuf 380 000 €</strong> → PTZ = 40 % × 380 000 = 152 000 €, plafonné à 100 000 €.</li>
      </ul>

      <h2>Outils et pages liées</h2>
      <ul>
        <li><Link href="/outils/simulation-ptz">Simulateur PTZ 2026</Link></li>
        <li><Link href="/credit-immobilier/primo-accedant">Guide primo-accédant</Link></li>
        <li><Link href="/glossaire/ptz">Définition PTZ</Link></li>
        <li><Link href="/blog/ptz-2026-guide-complet">Guide PTZ détaillé (blog)</Link></li>
      </ul>
    </PillarSubPage>
  )
}
