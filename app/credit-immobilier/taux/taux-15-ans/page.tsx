import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"
import { currentMarketRates } from "@/lib/market-rates"

const t15 = currentMarketRates.byDuration[0]

export const metadata: Metadata = {
  title: `Taux crédit immobilier 15 ans ${currentMarketRates.periodLabel}`,
  description: `Taux moyen d'un prêt immobilier sur 15 ans en ${currentMarketRates.periodLabel} : ${t15.averageAll} %. Pour qui, quelle économie.`,
  alternates: { canonical: "/credit-immobilier/taux/taux-15-ans" },
}

const faqs = [
  { q: `Quel est le taux moyen sur 15 ans en ${currentMarketRates.periodLabel} ?`, a: `${t15.averageAll} % pour un dossier standard, ${t15.averageGood} % pour un bon profil. C'est la durée avec le taux le plus bas — les banques prennent moins de risque sur une durée courte.` },
  { q: "Pour quel profil 15 ans est-il pertinent ?", a: "Pour les profils avec revenus élevés et une capacité d'emprunt confortable. Une mensualité sur 15 ans représente ≈ 15 % de plus que sur 20 ans. Il faut donc 15 % de marge supplémentaire sur le taux d'endettement." },
  { q: "Combien j'économise en 15 ans vs 20 ans ?", a: "Sur un prêt de 200 000 €, 15 ans à 3,05 % vs 20 ans à 3,25 % = économie d'environ 35 000 € d'intérêts cumulés (coût total 50 000 € vs 85 000 €)." },
  { q: "Peut-on combiner 15 ans avec un PTZ ?", a: "Oui. Le PTZ est indépendant de la durée du prêt principal. Un emprunteur peut financer 40 % via un PTZ sur 25 ans et le reste via un prêt principal sur 15 ans." },
  { q: "Les banques acceptent-elles facilement 15 ans ?", a: "Oui, c'est la durée qu'elles préfèrent (moins de risque, moins de capital à gérer). En revanche, elles exigent une capacité d'emprunt solide car la mensualité est plus élevée." },
]

export default function Taux15AnsPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "Taux", url: "/credit-immobilier/taux" },
        { name: "15 ans", url: "/credit-immobilier/taux/taux-15-ans" },
      ]}
      eyebrow="Taux par durée"
      h1={`Taux crédit immobilier sur 15 ans — ${currentMarketRates.periodLabel}`}
      intro={<p>Le 15 ans est la durée la moins chère en taux, mais implique une mensualité plus élevée. Idéale pour les profils avec capacité d'emprunt confortable qui veulent minimiser le coût total.</p>}
      tldr={[
        <>Taux moyen 15 ans : <strong>{t15.averageAll} %</strong>.</>,
        <>Taux bons dossiers : <strong>{t15.averageGood} %</strong> — la durée avec le taux le plus bas.</>,
        <>Mensualité <strong>≈ 15 % plus élevée</strong> qu'à 20 ans.</>,
        <>Coût total <strong>≈ 45 % inférieur</strong> à un prêt sur 20 ans.</>,
      ]}
      ctaSecondary={{ label: "Calcul de mensualités", href: "/outils/calcul-mensualites" }}
      faqs={faqs}
    >
      <h2>Pour qui le 15 ans est-il adapté</h2>
      <ul>
        <li><strong>Revenus élevés</strong> : la mensualité élevée demande des revenus confortables pour rester sous 35 % d'endettement HCSF.</li>
        <li><strong>Objectif d'optimisation fiscale / patrimoniale</strong> : payer plus pour posséder plus vite.</li>
        <li><strong>Primo-accédant jeune</strong> avec perspective d'évolution salariale : payer plus maintenant, libérer les ressources plus tôt.</li>
        <li><strong>Achat résidence principale fin de carrière</strong> pour solder avant la retraite.</li>
      </ul>

      <h2>Exemple chiffré — prêt 200 000 €</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Scénario</th>
              <th className="text-right p-3 border border-gray-200">15 ans</th>
              <th className="text-right p-3 border border-gray-200">20 ans</th>
              <th className="text-right p-3 border border-gray-200">25 ans</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-gray-200">Taux nominal</td><td className="p-3 border border-gray-200 text-right">{t15.averageAll} %</td><td className="p-3 border border-gray-200 text-right">{currentMarketRates.byDuration[1].averageAll} %</td><td className="p-3 border border-gray-200 text-right">{currentMarketRates.byDuration[2].averageAll} %</td></tr>
            <tr><td className="p-3 border border-gray-200">Mensualité</td><td className="p-3 border border-gray-200 text-right">≈ 1 380 €</td><td className="p-3 border border-gray-200 text-right">≈ 1 140 €</td><td className="p-3 border border-gray-200 text-right">≈ 980 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Coût total intérêts</td><td className="p-3 border border-gray-200 text-right text-emerald-700 font-semibold">≈ 48 000 €</td><td className="p-3 border border-gray-200 text-right">≈ 74 000 €</td><td className="p-3 border border-gray-200 text-right">≈ 94 000 €</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Stratégies pour rendre accessible le 15 ans</h2>
      <ul>
        <li>Augmenter l'apport pour réduire le capital emprunté.</li>
        <li>Combiner avec un <Link href="/credit-immobilier/pret-taux-zero-ptz">PTZ</Link> sur 25 ans : seul le prêt principal est sur 15 ans, le PTZ étale le reste.</li>
        <li>Viser un remboursement anticipé à 10 ans pour racheter si les taux baissent davantage.</li>
      </ul>

      <h2>Autres durées</h2>
      <ul>
        <li><Link href="/credit-immobilier/taux/taux-20-ans">Taux sur 20 ans</Link></li>
        <li><Link href="/credit-immobilier/taux/taux-25-ans">Taux sur 25 ans</Link></li>
        <li><Link href="/credit-immobilier/taux">Baromètre complet</Link></li>
      </ul>
    </PillarSubPage>
  )
}
