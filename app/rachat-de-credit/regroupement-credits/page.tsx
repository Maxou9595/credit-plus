import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Regroupement de crédits 2026 : consommation + immobilier",
  description: "Regrouper tous vos crédits (auto, conso, revolving, immobilier) en un seul prêt. Mensualité unique, taux renégocié.",
  alternates: { canonical: "/rachat-de-credit/regroupement-credits" },
}

const faqs = [
  { q: "Qui peut bénéficier d'un regroupement de crédits ?", a: "Tout emprunteur avec au moins 2 crédits en cours (auto, conso, revolving, immobilier). Particulièrement adapté aux ménages dont le taux d'endettement dépasse 40 % et qui souhaitent retrouver de la trésorerie mensuelle sans procédure de surendettement." },
  { q: "Quel taux pour un regroupement ?", a: "Dépend de la composition : regroupement conso pur (sans immobilier) = 6-9 % TAEG typique. Regroupement conso + immobilier (avec garantie sur un bien) = 3,5-5 % TAEG. Toujours plus cher qu'un prêt immobilier classique car le risque est plus élevé." },
  { q: "Quelle est la durée maximale ?", a: "Variable selon le montage : regroupement conso 7-12 ans, regroupement immobilier + conso jusqu'à 25 ans (règle HCSF). Allonger la durée réduit la mensualité mais augmente le coût total — c'est le principal arbitrage à peser." },
  { q: "Le regroupement affecte-t-il mon fichage Banque de France ?", a: "Non, le regroupement n'implique pas de fichage FICP. En revanche, si vous êtes déjà FICP, l'accès au regroupement est très difficile (seules quelques banques spécialisées acceptent ces dossiers à taux élevés)." },
  { q: "Comment calculer si c'est rentable ?", a: "Le gain principal n'est pas l'économie d'intérêts (souvent minime ou négative car la durée s'allonge) mais la RÉCUPÉRATION DE TRÉSORERIE mensuelle. Si votre mensualité cumulée passe de 2 400 € à 1 280 €, vous libérez 1 120 €/mois. À évaluer selon votre priorité : trésorerie immédiate ou coût total minimisé." },
]

export default function RegroupementPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Rachat de crédit", url: "/rachat-de-credit" },
        { name: "Regroupement de crédits", url: "/rachat-de-credit/regroupement-credits" },
      ]}
      eyebrow="Pilier rachat de crédit"
      h1="Regroupement de crédits : consolider vos mensualités"
      intro={<p>Le regroupement de crédits (ou rachat global) rassemble plusieurs crédits en cours (immobilier, auto, conso, revolving) en un unique prêt à mensualité plus basse. Outil puissant de gestion de trésorerie, à manier avec stratégie.</p>}
      tldr={[
        <>Taux typique : <strong>3,5-5 %</strong> avec immobilier, <strong>6-9 %</strong> sans immobilier.</>,
        <>Durée maximale : <strong>25 ans</strong> (avec immobilier), <strong>12 ans</strong> (conso pur).</>,
        <>Gain principal : <strong>trésorerie mensuelle retrouvée</strong> (pas forcément économie de coût total).</>,
        <>Attention : <strong>allonger la durée augmente le coût total</strong> des intérêts.</>,
      ]}
      ctaPrimary={{ label: "Simuler mon regroupement", href: "/outils/calcul-rachat-credit" }}
      faqs={faqs}
    >
      <h2>Les deux types de regroupement</h2>

      <h3>Regroupement conso pur</h3>
      <p>Rassemble uniquement les crédits à la consommation (auto, travaux, revolving). Taux typique 6-9 %, durée 7-12 ans. Pas de garantie sur un bien immobilier. Adapté aux emprunteurs non-propriétaires ou à ceux qui ne souhaitent pas hypothéquer leur bien.</p>

      <h3>Regroupement conso + immobilier</h3>
      <p>Rassemble le prêt immobilier principal ET les crédits conso en un seul prêt. Garantie sur le bien immobilier (hypothèque nouvelle ou caution). Taux 3,5-5 % TAEG, durée jusqu'à 25 ans. Nettement plus avantageux sur le plan tarifaire mais plus complexe à monter.</p>

      <h2>Quand c'est pertinent</h2>
      <ul>
        <li>Taux d'endettement &gt; 40 % : le regroupement ramène sous 35 % et débloque l'accès à un nouveau crédit éventuel.</li>
        <li>Multiplicité de crédits (3+) : simplicité de gestion, une seule mensualité.</li>
        <li>Anticipation d'une baisse de revenu (congé parental, reconversion, retraite proche).</li>
        <li>Tension familiale autour de la gestion des multiples crédits.</li>
      </ul>

      <h2>Quand éviter</h2>
      <ul>
        <li>Si votre taux d'endettement est déjà &lt; 35 %, un simple remboursement anticipé des crédits les plus chers est plus efficace.</li>
        <li>Si la durée restante de vos crédits existants est courte (&lt; 5 ans), le regroupement allongerait inutilement votre engagement.</li>
        <li>Si vous êtes déjà fiché FICP — seules quelques banques acceptent, à des taux prohibitifs.</li>
      </ul>

      <h2>Exemple chiffré</h2>
      <p>Profil : couple, revenus 3 800 €/mois, 4 crédits cumulés (immobilier + auto + travaux + revolving).</p>
      <ul>
        <li>Avant : mensualités cumulées 2 400 €/mois, endettement 63 %, durée moyenne 11 ans.</li>
        <li>Après regroupement : mensualité unique 1 280 €/mois, endettement 33,7 %, durée 20 ans.</li>
        <li>Marge mensuelle retrouvée : <strong>1 120 €/mois</strong>.</li>
        <li>Coût total : <strong>+77 000 €</strong> vs statu quo (allongement de durée).</li>
      </ul>
      <p>Le gain « trésorerie » justifie ou non le surcoût selon votre situation. Voir notre <Link href="/blog/etude-cas-rachat-4-credits-metz">étude de cas détaillée à Metz</Link>.</p>

      <h2>Stratégie de remboursement anticipé post-regroupement</h2>
      <p>
        Pour limiter le surcoût, une bonne pratique consiste à <strong>rembourser par anticipation</strong> dès que la trésorerie retrouvée le permet. Si vous mettez de côté les 1 120 €/mois libérés pendant 2-3 ans, vous accumulez 30 000 €+ que vous pouvez injecter en remboursement anticipé, raccourcissant mécaniquement la durée et le coût total.
      </p>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/rachat-de-credit">Guide rachat de crédit</Link></li>
        <li><Link href="/rachat-de-credit/renegociation-pret">Renégociation de prêt</Link></li>
        <li><Link href="/outils/calcul-rachat-credit">Calculateur rachat</Link></li>
        <li><Link href="/blog/etude-cas-rachat-4-credits-metz">Étude de cas Metz (blog)</Link></li>
      </ul>
    </PillarSubPage>
  )
}
