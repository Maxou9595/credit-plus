import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "LMNP 2026 : régime, fiscalité, amortissement",
  description: "LMNP micro-BIC ou régime réel : fiscalité, amortissement, seuils 2026. Le meilleur statut pour l'investissement meublé.",
  alternates: { canonical: "/investissement-locatif/lmnp" },
}

const faqs = [
  { q: "LMNP micro-BIC ou régime réel : lequel choisir ?", a: "Micro-BIC (abattement forfaitaire 50 %) : simple, adapté si charges et amortissement < 50 % des loyers. Régime réel : déduction de toutes les charges + amortissement du bien (≈ 3-4 % par an du prix) et du mobilier. Dans 80 % des cas, le régime réel est plus avantageux." },
  { q: "Quel est le seuil LMNP micro-BIC en 2026 ?", a: "77 700 € de recettes annuelles. Au-delà, passage automatique au régime réel. L'option pour le réel est possible volontairement en-dessous, et elle est irrévocable pendant 2 ans." },
  { q: "L'amortissement LMNP réduit-il vraiment l'impôt ?", a: "Oui. L'amortissement comptable (environ 3 à 4 % par an du prix hors terrain) neutralise fiscalement la majorité des loyers pendant 10 à 20 ans. Le revenu net imposable devient proche de zéro, voire nul. Vos loyers sont perçus sans impôt sur le revenu ni prélèvements sociaux." },
  { q: "Faut-il passer en LMP à partir d'un certain seuil ?", a: "Le statut LMP s'applique automatiquement si : recettes > 23 000 €/an ET recettes > 50 % des revenus du foyer fiscal. En LMP : assujetti SSI, possibilité d'IS, fiscalité plus complexe. Beaucoup d'investisseurs limitent leurs recettes pour rester en LMNP." },
  { q: "Puis-je déduire les intérêts d'emprunt en LMNP ?", a: "Oui, en régime réel. Les intérêts sont une charge déductible des loyers. En micro-BIC, ils sont inclus dans l'abattement forfaitaire 50 %." },
]

export default function LMNPPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Investissement locatif", url: "/investissement-locatif" },
        { name: "LMNP", url: "/investissement-locatif/lmnp" },
      ]}
      eyebrow="Pilier investissement locatif"
      h1="LMNP 2026 : régime fiscal, amortissement, seuils"
      intro={<p>Le statut de Loueur en Meublé Non Professionnel (LMNP) est le régime fiscal le plus avantageux pour l'investissement locatif meublé en France. Comment le choisir, quand passer au réel, comment maximiser l'amortissement.</p>}
      tldr={[
        <>Deux régimes : <strong>micro-BIC</strong> (abattement 50 %) ou <strong>réel</strong> (toutes charges + amortissement).</>,
        <>Seuil micro-BIC : <strong>77 700 €</strong> de recettes annuelles. Au-delà, réel obligatoire.</>,
        <>L'<strong>amortissement comptable</strong> (3-4 %/an) neutralise l'impôt pendant 10-20 ans.</>,
        <>Passage au statut <strong>LMP</strong> si recettes &gt; 23 000 € ET &gt; 50 % des revenus du foyer.</>,
      ]}
      ctaPrimary={{ label: "Simuler mon investissement", href: "/credit-immobilier/simulation" }}
      faqs={faqs}
    >
      <h2>Comparatif micro-BIC vs régime réel</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Critère</th>
              <th className="text-left p-3 border border-gray-200">Micro-BIC</th>
              <th className="text-left p-3 border border-gray-200">Régime réel</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-gray-200">Abattement forfaitaire</td><td className="p-3 border border-gray-200">50 %</td><td className="p-3 border border-gray-200">Aucun</td></tr>
            <tr><td className="p-3 border border-gray-200">Déduction charges réelles</td><td className="p-3 border border-gray-200">Non</td><td className="p-3 border border-gray-200">Oui (intégralement)</td></tr>
            <tr><td className="p-3 border border-gray-200">Amortissement bien + mobilier</td><td className="p-3 border border-gray-200">Non</td><td className="p-3 border border-gray-200">Oui</td></tr>
            <tr><td className="p-3 border border-gray-200">Seuil</td><td className="p-3 border border-gray-200">≤ 77 700 €</td><td className="p-3 border border-gray-200">Pas de plafond</td></tr>
            <tr><td className="p-3 border border-gray-200">Complexité comptable</td><td className="p-3 border border-gray-200">Faible</td><td className="p-3 border border-gray-200">Élevée (comptable recommandé)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>L'amortissement expliqué</h2>
      <p>
        En régime réel, vous pouvez déduire des loyers chaque année un montant représentant la dépréciation comptable du bien et du mobilier :
      </p>
      <ul>
        <li><strong>Bien immobilier (hors terrain)</strong> : 2,5 à 4 % par an du prix d'achat hors terrain (durée d'amortissement 25-40 ans). Le terrain ne s'amortit pas.</li>
        <li><strong>Mobilier et équipements</strong> : 10 à 20 % par an (durée 5-10 ans).</li>
        <li><strong>Gros travaux</strong> : immobilisés et amortis sur 10-20 ans.</li>
      </ul>
      <p>
        <strong>Exemple</strong> : T2 de 150 000 € (terrain 15 % du prix), mobilier 3 000 €. Amortissement annuel ≈ (127 500 × 3 %) + (3 000 × 14 %) = 3 825 + 420 = <strong>4 245 €/an</strong>.
      </p>

      <h2>Exemple complet de fiscalité LMNP réel</h2>
      <p>T2 à Nancy acheté 150 000 €, loué 580 €/mois meublé.</p>
      <ul>
        <li>Recettes annuelles : 6 960 €</li>
        <li>Charges déductibles : intérêts prêt 5 200 € + taxe foncière 800 € + copropriété 950 € + assurance PNO 120 € = 7 070 €</li>
        <li>Amortissement bien + mobilier : 4 245 €</li>
        <li><strong>Résultat fiscal : 6 960 – 7 070 – 4 245 = –4 355 €</strong> (déficit)</li>
      </ul>
      <p>
        Le déficit d'amortissement est reportable sur 10 ans, neutralisant l'impôt sur plusieurs années. En micro-BIC, le même bien aurait généré un revenu imposable de 3 480 € (après abattement 50 %), taxé au TMI.
      </p>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/investissement-locatif">Guide investissement locatif</Link></li>
        <li><Link href="/investissement-locatif/sci">Comparatif SCI IR / IS</Link></li>
        <li><Link href="/investissement-locatif/deficit-foncier">Déficit foncier</Link></li>
        <li><Link href="/glossaire/amortissement">Définition amortissement</Link></li>
      </ul>
    </PillarSubPage>
  )
}
