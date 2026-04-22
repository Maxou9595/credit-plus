import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"
import { currentMarketRates } from "@/lib/market-rates"

const t25 = currentMarketRates.byDuration[2]

export const metadata: Metadata = {
  title: `Taux crédit immobilier 25 ans ${currentMarketRates.periodLabel}`,
  description: `Taux moyen d'un prêt 25 ans en ${currentMarketRates.periodLabel} : ${t25.averageAll} %. Durée maximale HCSF, mensualité minimisée.`,
  alternates: { canonical: "/credit-immobilier/taux/taux-25-ans" },
}

const faqs = [
  { q: `Le 25 ans est-il encore autorisé en ${currentMarketRates.periodLabel} ?`, a: "Oui. C'est la durée maximale imposée par le HCSF depuis 2022. Elle peut être étendue à 27 ans en VEFA ou ancien avec travaux lourds (différé de 2 ans)." },
  { q: "Pour qui le 25 ans est-il pertinent ?", a: "Pour les primo-accédants qui veulent minimiser la mensualité, les emprunteurs sans apport majeur, et les investisseurs qui veulent maximiser l'effet de levier bancaire." },
  { q: "Pourquoi le 25 ans coûte-t-il plus cher que le 20 ans ?", a: `Sur 5 ans de plus, les intérêts s'accumulent. Sur un prêt de 250 000 €, 25 ans à ${t25.averageAll} % coûte ≈ 25 000 € de plus en intérêts qu'à 20 ans à ${currentMarketRates.byDuration[1].averageAll} %.` },
  { q: "Peut-on rembourser en avance un prêt sur 25 ans ?", a: "Oui, avec IRA plafonnée à 3 % du CRD ou 6 mois d'intérêts. Beaucoup d'emprunteurs souscrivent sur 25 ans pour la sécurité de la mensualité basse, puis remboursent par anticipation dès que leur situation le permet." },
  { q: "Les 25 ans empêche-t-il d'obtenir un bon taux ?", a: "Non, mais le taux est légèrement plus élevé que sur 20 ou 15 ans (écart de 10 à 25 pb). Les banques majorent pour compenser le risque d'une durée plus longue." },
]

export default function Taux25AnsPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "Taux", url: "/credit-immobilier/taux" },
        { name: "25 ans", url: "/credit-immobilier/taux/taux-25-ans" },
      ]}
      eyebrow="Taux par durée"
      h1={`Taux crédit immobilier sur 25 ans — ${currentMarketRates.periodLabel}`}
      intro={<p>Le 25 ans est la durée maximale autorisée par la règle HCSF (27 ans avec différé VEFA). Elle permet la mensualité la plus basse pour un capital donné, au prix d'un coût total plus élevé.</p>}
      tldr={[
        <>Taux moyen 25 ans : <strong>{t25.averageAll} %</strong>.</>,
        <>Taux bons dossiers : <strong>{t25.averageGood} %</strong>.</>,
        <>Durée maximale HCSF, avec dérogation VEFA jusqu'à 27 ans.</>,
        <>Mensualité <strong>≈ 15 % plus basse</strong> qu'à 20 ans.</>,
      ]}
      ctaSecondary={{ label: "Calcul de mensualités", href: "/outils/calcul-mensualites" }}
      faqs={faqs}
    >
      <h2>Quand choisir 25 ans</h2>
      <ul>
        <li><strong>Primo-accédant</strong> sans apport ou avec apport faible : maximiser la capacité d'emprunt.</li>
        <li><strong>Jeune couple</strong> démarrant sa carrière : mensualité modérée, perspective de rachat dans 5-7 ans.</li>
        <li><strong>Investisseur locatif</strong> : maximiser l'effet de levier, les loyers couvrent une grande partie de la mensualité.</li>
        <li><strong>Flexibilité HCSF</strong> : avec un reste-à-vivre solide, 25 ans permet de rester sous 35 % d'endettement.</li>
      </ul>

      <h2>Limites et attention</h2>
      <ul>
        <li>Coût total plus élevé que sur 20 ans (+ 25 000 € sur 250 000 € empruntés).</li>
        <li>Assurance emprunteur plus chère (durée plus longue = risque cumulé plus grand).</li>
        <li>Âge à la fin du prêt : attention si vous avez plus de 50 ans à la souscription (75 ans max à la fin chez la plupart des banques).</li>
      </ul>

      <h2>Stratégie recommandée</h2>
      <p>
        Souscrire sur 25 ans pour sécuriser la mensualité, puis prévoir des <strong>remboursements anticipés partiels</strong> dès que la situation financière le permet (bonus, prime, héritage, hausse de revenu). Cela revient à payer progressivement « comme sur 20 ans » sans s'engager dès le départ.
      </p>

      <h2>Autres durées</h2>
      <ul>
        <li><Link href="/credit-immobilier/taux/taux-15-ans">Taux sur 15 ans</Link></li>
        <li><Link href="/credit-immobilier/taux/taux-20-ans">Taux sur 20 ans</Link></li>
        <li><Link href="/credit-immobilier/taux">Baromètre complet</Link></li>
      </ul>
    </PillarSubPage>
  )
}
