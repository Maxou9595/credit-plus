import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Loi Lemoine 2026 : résilier son assurance emprunteur",
  description: "Tout sur la loi Lemoine : résiliation à tout moment, fin du questionnaire santé sous conditions, droit à l'oubli 5 ans.",
  alternates: { canonical: "/assurance-emprunteur/loi-lemoine" },
}

const faqs = [
  { q: "Qu'est-ce que la loi Lemoine exactement ?", a: "La loi Lemoine du 28 février 2022 apporte 3 changements : (1) résiliation à tout moment de l'assurance emprunteur, (2) suppression du questionnaire santé si prêt ≤ 200 000 € et remboursement avant 60 ans, (3) droit à l'oubli ramené à 5 ans pour cancer et hépatite C." },
  { q: "Depuis quand la résiliation any time est-elle effective ?", a: "Depuis septembre 2022 pour les nouveaux contrats, et depuis septembre 2023 pour tous les contrats existants. En 2026, tout emprunteur peut changer son assurance à tout moment, sans attendre une date anniversaire." },
  { q: "Qui est exclu du bénéfice « sans questionnaire santé » ?", a: "Les emprunteurs dont le prêt > 200 000 € (par emprunteur) ET ceux dont le remboursement s'achève après 60 ans. En couple 100/100, chacun est évalué individuellement, donc un couple peut cumuler 2 × 200 k€ = 400 k€ sans questionnaire." },
  { q: "Le droit à l'oubli à 5 ans, comment fonctionne-t-il ?", a: "Un ancien malade (cancer ou hépatite C) peut ne plus déclarer sa maladie à l'assureur si le protocole thérapeutique est terminé depuis au moins 5 ans et qu'il n'y a pas eu de rechute. L'assureur ne peut alors plus appliquer de surprime ni d'exclusion sur ce motif." },
  { q: "La loi Lemoine va-t-elle être encore modifiée ?", a: "Aucune modification n'est prévue en 2026. Le législateur observe actuellement son impact : seuls 30 % des emprunteurs éligibles ont effectivement changé d'assurance, ce qui suggère un manque d'information plutôt qu'un problème de cadre légal." },
]

export default function LoiLemoinePage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Assurance emprunteur", url: "/assurance-emprunteur" },
        { name: "Loi Lemoine", url: "/assurance-emprunteur/loi-lemoine" },
      ]}
      eyebrow="Pilier assurance emprunteur"
      h1="Loi Lemoine 2026 : résiliation any time, fin du questionnaire"
      intro={<p>Depuis la loi Lemoine du 28 février 2022, les règles de l'assurance emprunteur ont changé en profondeur. Quatre ans plus tard, beaucoup d'emprunteurs ignorent encore leurs nouveaux droits.</p>}
      tldr={[
        <>Résiliation à tout moment depuis <strong>septembre 2022</strong> (nouveaux contrats) et <strong>septembre 2023</strong> (contrats existants).</>,
        <>Plus de <strong>questionnaire santé</strong> si prêt ≤ 200 k€ + remboursement avant 60 ans.</>,
        <>Droit à l'oubli ramené à <strong>5 ans</strong> pour cancer et hépatite C.</>,
        <>Économies moyennes observées : <strong>9 600 à 19 200 €</strong> sur un prêt de 250 k€ sur 20 ans.</>,
      ]}
      ctaPrimary={{ label: "Comparateur assurance", href: "/outils/comparateur-assurance-emprunteur" }}
      faqs={faqs}
    >
      <h2>Les trois piliers de la loi Lemoine</h2>

      <h3>1. Résiliation à tout moment</h3>
      <p>
        Avant la loi Lemoine, le changement d'assurance emprunteur était contraint à certaines dates : première année (loi Hamon 2014), ou dates anniversaires du contrat (loi Bourquin 2017). Depuis la loi Lemoine, vous pouvez résilier et substituer <strong>à tout moment</strong>, sans condition de durée.
      </p>
      <p>Procédure : envoi d'un courrier recommandé avec le nouveau contrat à la banque. La banque dispose de <strong>10 jours ouvrés</strong> pour accepter ou refuser (avec motif sur les 18 critères CCSF).</p>

      <h3>2. Suppression du questionnaire santé</h3>
      <p>Depuis la loi Lemoine, le questionnaire médical est <strong>interdit</strong> si deux conditions cumulatives sont remplies :</p>
      <ol>
        <li><strong>Part de prêt assurée ≤ 200 000 €</strong> par emprunteur (donc 400 000 € en couple 100/100).</li>
        <li><strong>Remboursement avant 60 ans</strong> de l'emprunteur (au 60e anniversaire).</li>
      </ol>
      <p>L'assureur ne peut plus demander d'informations médicales, ni appliquer de surprime ou exclusion pour raison de santé. Cette règle est particulièrement favorable aux jeunes emprunteurs avec un prêt de taille modeste.</p>

      <h3>3. Droit à l'oubli à 5 ans</h3>
      <p>
        Avant la loi Lemoine, le droit à l'oubli pour cancer et hépatite C était fixé à 10 ans. Il est désormais ramené à <strong>5 ans</strong>. Un emprunteur dont le protocole thérapeutique est terminé depuis ≥ 5 ans sans rechute n'a plus à déclarer sa maladie — l'assureur ne peut appliquer ni surprime ni exclusion.
      </p>

      <h2>Pourquoi seulement 30 % des emprunteurs ont changé</h2>
      <p>Quatre ans après la loi, seuls 30 % des emprunteurs éligibles ont effectivement changé leur assurance. Trois raisons principales :</p>
      <ul>
        <li><strong>Méconnaissance</strong> : beaucoup ignorent leurs nouveaux droits.</li>
        <li><strong>Inertie</strong> : le contrat bancaire est souvent signé « en même temps que le prêt » sans réflexion ultérieure.</li>
        <li><strong>Peur de la complexité</strong> : les 18 critères d'équivalence CCSF semblent opaques. Un courtier simplifie radicalement la démarche.</li>
      </ul>

      <h2>Comment en profiter concrètement</h2>
      <ol>
        <li>Demander la <strong>fiche standardisée d'information</strong> (FSI) à votre banque — elle liste précisément les garanties exigées.</li>
        <li>Comparer via un comparateur ou un courtier — obtenir 3-5 devis.</li>
        <li>Vérifier l'<strong>équivalence des garanties</strong> sur les 18 critères CCSF.</li>
        <li>Envoyer la demande de substitution à la banque par recommandé.</li>
        <li>Attendre 10 jours ouvrés la réponse bancaire.</li>
        <li>Mettre en place le nouveau contrat, résiliation automatique de l'ancien.</li>
      </ol>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/assurance-emprunteur">Guide assurance emprunteur</Link></li>
        <li><Link href="/assurance-emprunteur/delegation">Délégation d'assurance</Link></li>
        <li><Link href="/outils/comparateur-assurance-emprunteur">Comparateur en ligne</Link></li>
      </ul>
    </PillarSubPage>
  )
}
