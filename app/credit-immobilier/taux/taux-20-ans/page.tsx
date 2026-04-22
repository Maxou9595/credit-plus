import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"
import { currentMarketRates } from "@/lib/market-rates"

const t20 = currentMarketRates.byDuration[1]

export const metadata: Metadata = {
  title: `Taux crédit immobilier 20 ans ${currentMarketRates.periodLabel}`,
  description: `Taux moyen d'un prêt immobilier sur 20 ans en ${currentMarketRates.periodLabel} : ${t20.averageAll} %. Simulation gratuite.`,
  alternates: { canonical: "/credit-immobilier/taux/taux-20-ans" },
}

const faqs = [
  { q: `Quel est le taux moyen d'un prêt immobilier sur 20 ans en ${currentMarketRates.periodLabel} ?`, a: `Le taux moyen en ${currentMarketRates.periodLabel} est de ${t20.averageAll} % pour un dossier standard, et ${t20.averageGood} % pour un dossier « bons profils » (CDI long, apport ≥ 20 %, reste-à-vivre solide). Source : ${currentMarketRates.sourceName}.` },
  { q: "Pourquoi le 20 ans est la durée la plus demandée ?", a: "Sur un prêt immobilier, 20 ans offre le meilleur compromis entre mensualité raisonnable et coût total maîtrisé. La mensualité est ≈ 15 % plus basse qu'à 15 ans mais seulement 10 % plus élevée qu'à 25 ans. C'est pour cette raison que 60 % des primo-accédants optent pour 20 ans." },
  { q: "Combien rembourse-t-on sur 20 ans pour 250 000 € empruntés ?", a: `À ${t20.averageAll} % sur 20 ans, la mensualité hors assurance est d'environ 1 425 € pour 250 000 € empruntés. Le coût total du crédit (intérêts) ressort à ≈ 92 000 €. Avec assurance (≈ 0,25 % annuel), la mensualité totale est de ≈ 1 490 €.` },
  { q: "Peut-on passer de 25 ans à 20 ans en renégociation ?", a: "Oui. La renégociation permet de raccourcir ou d'allonger la durée. Raccourcir augmente la mensualité mais réduit le coût total. Allonger fait l'inverse. Les banques acceptent généralement les deux, sous conditions de reste-à-vivre." },
  { q: "Un apport plus élevé baisse-t-il le taux 20 ans ?", a: "Oui. Passer de 10 % à 20 % d'apport apporte typiquement 15 à 25 points de base. Au-delà de 30 %, le gain marginal devient faible (5-10 pb)." },
]

export default function Taux20AnsPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "Taux", url: "/credit-immobilier/taux" },
        { name: "20 ans", url: "/credit-immobilier/taux/taux-20-ans" },
      ]}
      eyebrow="Taux par durée"
      h1={`Taux crédit immobilier sur 20 ans — ${currentMarketRates.periodLabel}`}
      intro={<p>Le 20 ans est la durée la plus demandée en France : elle représente 55 à 60 % des prêts immobiliers souscrits en 2026. Taux moyen, mensualité, comparaison avec les autres durées.</p>}
      tldr={[
        <>Taux moyen sur 20 ans en {currentMarketRates.periodLabel} : <strong>{t20.averageAll} %</strong>.</>,
        <>Taux bons dossiers : <strong>{t20.averageGood} %</strong>.</>,
        <>Évolution 1 mois : {t20.change1m} pb.</>,
        <>Source : <a href={currentMarketRates.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline text-primary">{currentMarketRates.sourceName}</a>.</>,
      ]}
      ctaSecondary={{ label: "Calcul de mensualités", href: "/outils/calcul-mensualites" }}
      faqs={faqs}
    >
      <h2>Pourquoi choisir 20 ans plutôt que 15 ou 25 ?</h2>
      <p>Le 20 ans est souvent le <strong>sweet spot</strong> du crédit immobilier :</p>
      <ul>
        <li><strong>Mensualité acceptable</strong> : vs 15 ans, la mensualité baisse d'environ 15 %. Vs 25 ans, elle monte de 10 %.</li>
        <li><strong>Coût maîtrisé</strong> : le coût total (intérêts) reste raisonnable — 92 000 € sur un prêt de 250 000 € à {t20.averageAll} %, vs 120 000 € sur 25 ans.</li>
        <li><strong>Accès HCSF facilité</strong> : un prêt sur 20 ans passe plus facilement la règle 35 % d'endettement qu'un prêt sur 15 ans pour un même capital.</li>
      </ul>

      <h2>Exemple chiffré — prêt 250 000 € sur 20 ans</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Poste</th>
              <th className="text-right p-3 border border-gray-200">Montant</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-gray-200">Capital emprunté</td><td className="p-3 border border-gray-200 text-right">250 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Taux ({t20.averageAll} %)</td><td className="p-3 border border-gray-200 text-right">—</td></tr>
            <tr><td className="p-3 border border-gray-200">Mensualité hors assurance</td><td className="p-3 border border-gray-200 text-right font-semibold">≈ 1 425 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Assurance emprunteur (0,25 %)</td><td className="p-3 border border-gray-200 text-right">≈ 52 €</td></tr>
            <tr><td className="p-3 border border-gray-200 font-semibold">Mensualité TOTALE</td><td className="p-3 border border-gray-200 text-right font-bold">≈ 1 477 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Coût total du crédit (intérêts)</td><td className="p-3 border border-gray-200 text-right">≈ 92 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Coût total assurance</td><td className="p-3 border border-gray-200 text-right">≈ 12 500 €</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Autres durées</h2>
      <ul>
        <li><Link href="/credit-immobilier/taux/taux-15-ans">Taux sur 15 ans</Link> — plus court, mensualité plus élevée, coût total plus bas.</li>
        <li><Link href="/credit-immobilier/taux/taux-25-ans">Taux sur 25 ans</Link> — plus long, mensualité minimisée, coût total plus élevé.</li>
      </ul>

      <h2>Outils utiles</h2>
      <ul>
        <li><Link href="/outils/calcul-mensualites">Calcul de mensualités</Link></li>
        <li><Link href="/outils/calcul-capacite-emprunt">Calcul de capacité d'emprunt</Link></li>
        <li><Link href="/outils/tableau-amortissement">Tableau d'amortissement</Link></li>
      </ul>
    </PillarSubPage>
  )
}
