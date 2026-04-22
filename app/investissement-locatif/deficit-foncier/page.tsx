import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Déficit foncier 2026 : plafond 21 400 € pour travaux",
  description: "Déficit foncier 2026 : plafond standard 10 700 €, plafond étendu 21 400 € pour travaux énergétiques (jusqu'en 2027).",
  alternates: { canonical: "/investissement-locatif/deficit-foncier" },
}

const faqs = [
  { q: "Qu'est-ce que le déficit foncier ?", a: "Le déficit foncier apparaît quand les charges déductibles des loyers (hors intérêts d'emprunt) dépassent les loyers encaissés. Ce déficit est imputable sur le revenu global dans la limite de 10 700 €/an (ou 21 400 € pour travaux énergétiques jusqu'en 2027)." },
  { q: "Qui est concerné par le dispositif 21 400 € ?", a: "Les bailleurs en location nue qui réalisent des travaux de rénovation énergétique permettant de faire passer le logement de l'étiquette E, F ou G à D, C, B ou A (ou mieux). Dispositif en vigueur jusqu'au 31 décembre 2027." },
  { q: "Les intérêts d'emprunt comptent-ils dans le déficit foncier ?", a: "Oui, mais ils ne sont imputables QUE sur les revenus fonciers, pas sur le revenu global. L'excédent est reportable sur 10 ans sur les revenus fonciers futurs. Seules les autres charges (travaux, taxe foncière, gestion) peuvent créer un déficit sur le revenu global." },
  { q: "Le déficit foncier fonctionne-t-il en LMNP meublé ?", a: "Non. Le déficit foncier concerne uniquement la location nue (régime foncier, revenus fonciers). En LMNP (meublé, régime BIC), on parle de déficit BIC, imputable uniquement sur les revenus BIC futurs (pas sur le revenu global)." },
  { q: "Combien puis-je économiser avec le déficit foncier ?", a: "Si vous êtes en TMI 30 %, un déficit foncier de 10 700 € réduit votre impôt de 3 210 €. En TMI 41 %, de 4 387 €. Avec le plafond travaux énergétiques à 21 400 €, l'économie peut atteindre 8 774 € (TMI 41 %)." },
]

export default function DeficitFoncierPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Investissement locatif", url: "/investissement-locatif" },
        { name: "Déficit foncier", url: "/investissement-locatif/deficit-foncier" },
      ]}
      eyebrow="Pilier investissement locatif"
      h1="Déficit foncier 2026 : mécanisme, plafond 21 400 €, exemples"
      intro={<p>Le déficit foncier est l'un des outils d'optimisation fiscale les plus puissants en location nue — surtout depuis le plafond exceptionnel de 21 400 € pour travaux énergétiques (jusqu'en 2027).</p>}
      tldr={[
        <>Plafond standard : <strong>10 700 €/an</strong> imputable sur le revenu global.</>,
        <>Plafond travaux énergétiques : <strong>21 400 €/an</strong> jusqu'au 31 décembre 2027.</>,
        <>Excédent reportable sur <strong>10 ans</strong> sur les revenus fonciers futurs.</>,
        <>Uniquement en <strong>location nue</strong> (pas en LMNP meublé).</>,
      ]}
      ctaPrimary={{ label: "Simuler mon projet", href: "/credit-immobilier/simulation" }}
      faqs={faqs}
    >
      <h2>Le mécanisme du déficit foncier</h2>
      <p>
        En location nue, vos revenus fonciers sont imposés au barème progressif de l'IR + prélèvements sociaux (17,2 %). Le calcul :
      </p>
      <p><code>Revenu foncier net = Loyers encaissés – Charges déductibles</code></p>
      <p>
        Si les charges dépassent les loyers, vous êtes en déficit foncier. Ce déficit peut être imputé sur votre revenu global (salaire, pension…) dans la limite de <strong>10 700 €/an</strong>. L'excédent (au-delà de 10 700 €) est reportable pendant 10 ans sur les revenus fonciers futurs.
      </p>

      <h2>Le plafond étendu 21 400 € pour travaux énergétiques</h2>
      <p>
        Depuis la loi de finances 2022, pour les travaux de rénovation énergétique permettant une amélioration significative du DPE (de E/F/G vers D ou mieux), le plafond est <strong>doublé à 21 400 €</strong>. Dispositif en vigueur jusqu'au 31 décembre 2027.
      </p>
      <p>Travaux éligibles : isolation thermique, changement de chaudière (pour une pompe à chaleur), remplacement de fenêtres double/triple vitrage, ventilation VMC double flux, etc. Les travaux doivent être réalisés par des professionnels RGE.</p>

      <h2>Exemple chiffré — investissement avec travaux énergétiques</h2>
      <p>Un investisseur TMI 41 % achète un T3 à rénover en zone tendue pour 150 000 € + 60 000 € de travaux énergétiques.</p>
      <ul>
        <li>Loyers annuels année 1 (après rénovation) : 9 600 €</li>
        <li>Charges courantes (TF, assurance, gestion) : 1 500 €</li>
        <li>Travaux déductibles année 1 : 21 400 € (plafond étendu)</li>
        <li>Déficit foncier : 9 600 – 1 500 – 21 400 = <strong>–13 300 €</strong></li>
        <li>Imputation sur revenu global : 10 700 € → économie d'impôt 10 700 × 41 % = <strong>4 387 €</strong></li>
        <li>Excédent 2 600 € reporté sur revenus fonciers futurs</li>
      </ul>
      <p>
        Sur 3 à 4 ans en répartissant les travaux, l'investisseur peut amortir fiscalement jusqu'à 40-50 000 € de travaux énergétiques, soit une économie d'impôt totale supérieure à 15 000 €.
      </p>

      <h2>Charges déductibles en location nue</h2>
      <ul>
        <li>Travaux d'entretien, réparation, amélioration (pas de construction / agrandissement).</li>
        <li>Intérêts d'emprunt (imputables uniquement sur les revenus fonciers).</li>
        <li>Taxe foncière.</li>
        <li>Charges de copropriété non récupérables.</li>
        <li>Assurance propriétaire non occupant (PNO).</li>
        <li>Frais de gestion (agence immobilière).</li>
      </ul>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/investissement-locatif">Guide investissement locatif</Link></li>
        <li><Link href="/investissement-locatif/sci">SCI à l'IR</Link></li>
        <li><Link href="/investissement-locatif/pinel">Alternatives à Pinel</Link></li>
      </ul>
    </PillarSubPage>
  )
}
