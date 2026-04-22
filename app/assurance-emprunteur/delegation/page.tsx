import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Délégation d'assurance emprunteur : mode d'emploi",
  description: "Délégation d'assurance emprunteur en 2026 : équivalence 18 critères CCSF, procédure, économie moyenne 9 600-19 200 €.",
  alternates: { canonical: "/assurance-emprunteur/delegation" },
}

const faqs = [
  { q: "Qu'est-ce que la délégation d'assurance ?", a: "C'est le remplacement de l'assurance groupe de votre banque par un contrat individuel souscrit auprès d'un assureur externe (April, Cardif, Generali, MetLife, SwissLife, UNIM…). Les garanties doivent être équivalentes selon 18 critères fixés par le CCSF." },
  { q: "Quand déléguer : à la souscription ou plus tard ?", a: "Les deux sont possibles. À la souscription du prêt : meilleur ratio économie / effort car vous évitez de cotiser à deux contrats. Plus tard grâce à la loi Lemoine (résiliation any time depuis 2022) : vous pouvez substituer à tout moment, même après plusieurs années." },
  { q: "Combien peut-on économiser ?", a: "En moyenne 40 à 60 % du coût de l'assurance. Sur un prêt de 250 000 € sur 20 ans, cela représente 9 600 à 19 200 € sur la durée. Pour un jeune non-fumeur, l'économie peut dépasser 60 % (20 000 €+)." },
  { q: "Quels sont les 18 critères CCSF ?", a: "Le Comité Consultatif du Secteur Financier a fixé 18 critères d'équivalence : garanties obligatoires (DC, PTIA, IPT), garanties optionnelles (IPP, ITT), quotité, territorialité, exclusions, franchise, délai de carence, évaluation du taux d'invalidité, etc. La FSI de votre banque détaille ces critères pour votre prêt." },
  { q: "La banque peut-elle refuser ?", a: "Uniquement pour non-équivalence des garanties sur les 18 critères CCSF. Elle ne peut JAMAIS refuser pour motif tarifaire. Un refus doit être motivé par écrit. En cas de refus abusif, saisir le médiateur ACPR (gratuit et efficace)." },
]

export default function DelegationPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Assurance emprunteur", url: "/assurance-emprunteur" },
        { name: "Délégation", url: "/assurance-emprunteur/delegation" },
      ]}
      eyebrow="Pilier assurance emprunteur"
      h1="Délégation d'assurance emprunteur : économiser 40-60 %"
      intro={<p>La délégation d'assurance consiste à remplacer l'assurance groupe bancaire par un contrat individuel plus compétitif. En 2026, c'est le levier d'économie le plus puissant sur un crédit immobilier.</p>}
      tldr={[
        <>Économie moyenne : <strong>40 à 60 %</strong> du coût de l'assurance.</>,
        <>Sur 250 k€ / 20 ans : <strong>9 600 à 19 200 €</strong> économisés.</>,
        <>Procédure simple : FSI → comparaison → demande substitution → 10 jours ouvrés de réponse bancaire.</>,
        <>La banque ne peut pas refuser pour motif tarifaire — seulement sur l'équivalence des garanties.</>,
      ]}
      ctaPrimary={{ label: "Comparer les devis", href: "/outils/comparateur-assurance-emprunteur" }}
      faqs={faqs}
    >
      <h2>Pourquoi la délégation est presque toujours plus compétitive</h2>
      <p>
        L'assurance groupe bancaire est <strong>mutualisée</strong> : la prime est calculée pour l'ensemble de la clientèle de la banque, tous âges et profils confondus. Pour un jeune emprunteur non-fumeur en bonne santé, cette mutualisation signifie qu'il paie pour compenser les profils plus risqués (seniors, fumeurs, antécédents médicaux).
      </p>
      <p>
        La délégation externe individuelle tarife au <strong>profil exact</strong> : âge, statut fumeur/non-fumeur, profession, sports pratiqués. Un couple 30 ans non-fumeurs en couple 100/100 peut payer 60 % moins cher en délégation qu'avec le groupe bancaire.
      </p>

      <h2>Les 6 étapes de la délégation</h2>
      <ol>
        <li><strong>Demander la FSI</strong> (Fiche Standardisée d'Information) à votre banque : elle liste les 18 critères d'équivalence exigés pour votre prêt.</li>
        <li><strong>Comparer via un comparateur indépendant</strong> ou un courtier : obtenir 3 à 5 devis avec garanties équivalentes.</li>
        <li><strong>Vérifier l'équivalence</strong> des garanties sur les 18 critères (simplement : chaque garantie du contrat externe doit égaler ou dépasser celle du groupe).</li>
        <li><strong>Envoyer la demande de substitution</strong> à la banque par lettre recommandée, avec le nouveau contrat en pièce jointe.</li>
        <li><strong>Attendre la réponse bancaire</strong> sous 10 jours ouvrés. Acceptation : délai standard. Refus : doit être motivé par écrit sur les 18 critères CCSF.</li>
        <li><strong>Mise en place</strong> : le nouveau contrat commence à la date de substitution, l'ancien est résilié automatiquement par la banque.</li>
      </ol>

      <h2>Exemple chiffré — délégation à la souscription</h2>
      <p>Couple 35 ans non-fumeurs, prêt 250 000 € sur 20 ans, quotité 100/100 :</p>
      <ul>
        <li><strong>Contrat groupe bancaire</strong> : 0,36 % du capital initial → 75 €/mois cumulés (2 × 37,5 €)</li>
        <li><strong>Contrat délégation externe</strong> : 0,14 % → 29 €/mois cumulés</li>
        <li><strong>Économie mensuelle</strong> : 46 € × 12 × 20 = <strong>11 040 €</strong></li>
      </ul>

      <h2>Les 18 critères CCSF</h2>
      <p>Le Comité Consultatif du Secteur Financier a codifié 18 critères d'équivalence. Principaux :</p>
      <ul>
        <li>Garanties obligatoires : DC, PTIA, IPT.</li>
        <li>Garanties optionnelles si exigées par la banque : IPP, ITT.</li>
        <li>Quotité demandée (100/100, 50/50, 70/30…).</li>
        <li>Territorialité (couverture mondiale ou pays d'exercice).</li>
        <li>Exclusions classiques (sports extrêmes, professions à risque).</li>
        <li>Franchise et délai de carence (IPT/ITT typiquement 60-90 jours).</li>
        <li>Mode d'évaluation du taux d'invalidité (tables officielles ou contractuelles).</li>
        <li>Maintien ou non de la couverture à la retraite.</li>
      </ul>
      <p>Un comparateur sérieux ou un courtier vérifie automatiquement ces 18 points avant de vous présenter un devis.</p>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/assurance-emprunteur">Guide assurance emprunteur</Link></li>
        <li><Link href="/assurance-emprunteur/loi-lemoine">Loi Lemoine 2026</Link></li>
        <li><Link href="/outils/comparateur-assurance-emprunteur">Comparateur en ligne</Link></li>
      </ul>
    </PillarSubPage>
  )
}
