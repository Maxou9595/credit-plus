import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"
import { currentMarketRates } from "@/lib/market-rates"

export const metadata: Metadata = {
  title: "Taux de crédit immobilier — baromètre du mois",
  description: `Taux moyens du crédit immobilier en ${currentMarketRates.periodLabel} : par durée, profil, région. Baromètre Crédit Plus.`,
  alternates: { canonical: "/credit-immobilier/taux" },
}

const faqs = [
  { q: "Comment sont calculés les taux moyens ?", a: `Nos taux sont issus de l'Observatoire Crédit Logement / CSA (baromètre mensuel) et de notre propre base de 100+ banques partenaires mise à jour en continu. Les moyennes publiées en ${currentMarketRates.periodLabel} sont celles du dernier trimestre glissant.` },
  { q: "Pourquoi un écart entre taux bons dossiers et taux moyen ?", a: "Les \"bons dossiers\" (CDI long, apport ≥ 20 %, reste-à-vivre solide) obtiennent 10 à 30 points de base de mieux que la moyenne. Un dossier standard touche le taux moyen." },
  { q: "Les taux vont-ils continuer à baisser ?", a: `Le consensus économique table sur une stabilisation autour de 3 % sur 20 ans d'ici fin 2026, avec des fluctuations de ±10 pb selon les décisions BCE. La prochaine réunion est prévue le ${new Date(currentMarketRates.nextEcbMeetingIso).toLocaleDateString("fr-FR")}.` },
  { q: "Quelle durée choisir pour minimiser le coût ?", a: "Plus la durée est courte, plus le taux est bas et le coût total faible. Mais la mensualité est plus élevée. Règle empirique : choisir la plus courte durée qui vous laisse un reste-à-vivre confortable (≥ 700 €/pers. + 300 €/enfant)." },
  { q: "Ces taux incluent-ils l'assurance emprunteur ?", a: "Non. Les taux publiés sont des taux nominaux (hors assurance). Le TAEG (taux légal comparatif) inclut l'assurance + frais de dossier + garantie. Un écart de 0,5 à 1 point peut exister entre taux nominal et TAEG." },
]

export default function TauxCreditImmobilierPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "Taux", url: "/credit-immobilier/taux" },
      ]}
      eyebrow={`Taux du mois — ${currentMarketRates.periodLabel}`}
      h1={`Taux de crédit immobilier — ${currentMarketRates.periodLabel}`}
      intro={
        <p>
          Les taux moyens du crédit immobilier en {currentMarketRates.periodLabel} selon l'<a href={currentMarketRates.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline text-primary">{currentMarketRates.sourceName}</a>. Mise à jour le 1er de chaque mois avec les données du trimestre glissant. Ces chiffres sont des moyennes — votre taux personnel dépend de votre profil, de la durée et du package négocié.
        </p>
      }
      tldr={[
        <>Taux moyen <strong>20 ans : {currentMarketRates.byDuration[1].averageAll} %</strong> pour un dossier moyen, {currentMarketRates.byDuration[1].averageGood} % pour un bon profil.</>,
        <>Taux moyen <strong>25 ans : {currentMarketRates.byDuration[2].averageAll} %</strong>.</>,
        <>BCE taux de dépôt : <strong>{currentMarketRates.ecbDepositRate} %</strong>, OAT 10 ans : <strong>{currentMarketRates.oat10y} %</strong>.</>,
        <>Le taux n'est pas un indicateur isolé : négociez le <strong>package complet</strong> (taux + assurance + frais + garantie).</>,
      ]}
      ctaSecondary={{ label: "Baromètre détaillé (blog)", href: "/blog/barometre-taux-avril-2026" }}
      faqs={faqs}
    >
      <h2>Tableau des taux moyens {currentMarketRates.periodLabel}</h2>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Durée</th>
              <th className="text-left p-3 border border-gray-200">Bons dossiers</th>
              <th className="text-left p-3 border border-gray-200">Tous dossiers</th>
              <th className="text-left p-3 border border-gray-200">Évolution 1 mois</th>
            </tr>
          </thead>
          <tbody>
            {currentMarketRates.byDuration.map((r) => (
              <tr key={r.duration}>
                <td className="p-3 border border-gray-200 font-medium">{r.duration}</td>
                <td className="p-3 border border-gray-200">{r.averageGood.toFixed(2)} %</td>
                <td className="p-3 border border-gray-200">{r.averageAll.toFixed(2)} %</td>
                <td className="p-3 border border-gray-200 text-gray-600">{r.change1m ?? 0} pb</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Taux par profil emprunteur</h2>
      <ul>
        {currentMarketRates.byProfile.map((p) => (
          <li key={p.label}><strong>{p.label}</strong> : {p.rateLow.toFixed(2)} à {p.rateHigh.toFixed(2)} % sur {p.durationLabel}.</li>
        ))}
      </ul>

      <h2>Les 5 leviers qui font varier votre taux</h2>
      <ol>
        <li><strong>Le profil</strong> : CDI long &gt; TNS &gt; freelance &gt; intermittent. Chaque profil subit une majoration différente.</li>
        <li><strong>La durée</strong> : 15 ans &lt; 20 ans &lt; 25 ans en termes de taux. Les 20 ans sont l'optimum taux/mensualité.</li>
        <li><strong>L'apport</strong> : 10 % → 20 % apporte ≈ 20 pb de mieux. Au-delà de 30 %, le gain marginal devient faible.</li>
        <li><strong>La quotité d'assurance</strong> : 100/100 (chacun à 100 %) coûte plus cher mais protège davantage.</li>
        <li><strong>La domiciliation</strong> : certaines banques conditionnent le meilleur taux au transfert de vos revenus.</li>
      </ol>

      <h2>Comment obtenir le meilleur taux</h2>
      <p>
        Un conseiller bancaire ne propose que les grilles de sa banque. Un <Link href="/courtier-immobilier">courtier IOBSP</Link> comme Crédit Plus met <strong>3 à 5 banques en concurrence</strong> en parallèle, négocie les 5 leviers simultanément, et obtient en moyenne 20 à 40 points de base de mieux qu'une négociation solo.
      </p>

      <h2>Variantes par durée — pages dédiées</h2>
      <ul>
        <li><Link href="/credit-immobilier/taux/taux-15-ans">Taux sur 15 ans</Link> — durée courte, taux plus bas, mensualité plus élevée.</li>
        <li><Link href="/credit-immobilier/taux/taux-20-ans">Taux sur 20 ans</Link> — durée la plus demandée, bon compromis.</li>
        <li><Link href="/credit-immobilier/taux/taux-25-ans">Taux sur 25 ans</Link> — durée maximale HCSF, mensualité minimisée.</li>
      </ul>

      <h2>Sources et méthodologie</h2>
      <p>
        Les taux sont issus de l'<a href={currentMarketRates.sourceUrl} target="_blank" rel="noopener noreferrer">{currentMarketRates.sourceName}</a>, complétés par nos observations sur les 100+ banques partenaires. Les chiffres sont mis à jour le 1er de chaque mois. Pour l'historique mensuel détaillé, voir notre <Link href="/blog?category=analyses-taux">blog analyses de taux</Link>.
      </p>
    </PillarSubPage>
  )
}
