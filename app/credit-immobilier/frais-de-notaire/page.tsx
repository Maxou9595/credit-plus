import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Frais de notaire 2026 : calcul ancien et neuf",
  description: "Décomposition précise des frais de notaire en 2026 : droits de mutation, émoluments, débours. Ancien 7-8 %, neuf 2-3 %.",
  alternates: { canonical: "/credit-immobilier/frais-de-notaire" },
}

const faqs = [
  { q: "Quel est le pourcentage des frais de notaire en 2026 ?", a: "Environ 7-8 % du prix dans l'ancien, et 2-3 % dans le neuf. La différence vient des droits de mutation (DMTO) à 5,80 % dans l'ancien contre 0,715 % dans le neuf (car TVA déjà intégrée au prix)." },
  { q: "Qui encaisse vraiment les frais de notaire ?", a: "Sur 100 € de « frais de notaire », environ 80 € vont à l'État et aux collectivités (droits de mutation), 10 € au notaire (émoluments nets), et 10 € aux débours et taxes diverses. Le notaire ne perçoit qu'une fraction de ces frais." },
  { q: "Peut-on négocier les frais de notaire ?", a: "Partiellement. Les émoluments du notaire peuvent être négociés de 10 à 20 % au-delà de 150 000 € de tranche (décret 2016). Les droits de mutation, eux, sont fixés par la loi et non négociables." },
  { q: "Le PTZ couvre-t-il les frais de notaire ?", a: "Le PTZ est un prêt complémentaire qui réduit le capital à la banque principale — il ne paie pas spécifiquement les frais de notaire. Votre apport personnel doit couvrir frais de notaire + garantie (d'où la règle des 10 % d'apport)." },
  { q: "Peut-on emprunter les frais de notaire ?", a: "Oui via un emprunt à 110 %, mais c'est réservé aux profils solides (CDI long, revenus élevés, reste-à-vivre solide). Un courtier identifie les banques utilisant leur flexibilité HCSF 20 % sur ce type de dossier." },
]

export default function FraisNotairePage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "Frais de notaire", url: "/credit-immobilier/frais-de-notaire" },
      ]}
      eyebrow="Pilier crédit immobilier"
      h1="Frais de notaire 2026 : calcul, décomposition, optimisation"
      intro={<p>Les frais de notaire sont la deuxième charge majeure de l'achat immobilier après le prix du bien. Composition exacte, comparaison ancien vs neuf, négociation possible.</p>}
      tldr={[
        <>Ancien : <strong>7-8 % du prix</strong>. Neuf : <strong>2-3 % du prix</strong>.</>,
        <>Composition : <strong>80 % droits de mutation</strong> (État + collectivités), 10 % émoluments notaire, 10 % débours.</>,
        <>Négociation possible sur les <strong>émoluments</strong> (10-20 %) au-delà de 150 000 €.</>,
        <>Les frais doivent être couverts par votre <strong>apport personnel</strong> en général.</>,
      ]}
      ctaPrimary={{ label: "Calculer mes frais de notaire", href: "/outils/calcul-frais-de-notaire" }}
      ctaSecondary={{ label: "Simuler mon crédit", href: "/credit-immobilier/simulation" }}
      faqs={faqs}
    >
      <h2>Composition des frais de notaire</h2>
      <ol>
        <li><strong>Droits de mutation à titre onéreux (DMTO)</strong> — 5,80 % dans l'ancien (5,09 % pour Indre et Isère), 0,715 % dans le neuf. Taxe collectée au profit de l'État, du département et de la commune.</li>
        <li><strong>Émoluments du notaire</strong> — rémunération du notaire selon un barème dégressif par tranches : 3,87 % jusqu'à 6 500 €, puis 1,596 %, 1,064 %, et 0,799 % au-delà de 60 000 €.</li>
        <li><strong>Contribution de sécurité immobilière</strong> — 0,10 % du prix pour l'inscription au fichier immobilier.</li>
        <li><strong>Débours</strong> — forfait de 800 à 1 500 € pour les frais engagés par le notaire (cadastre, hypothèque, copies, extraits d'état civil).</li>
      </ol>

      <h2>Comparaison ancien vs neuf</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Poste</th>
              <th className="text-right p-3 border border-gray-200">Ancien (250 000 €)</th>
              <th className="text-right p-3 border border-gray-200">Neuf (250 000 €)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-gray-200">Droits de mutation</td><td className="p-3 border border-gray-200 text-right">14 500 €</td><td className="p-3 border border-gray-200 text-right">1 788 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Émoluments notaire</td><td className="p-3 border border-gray-200 text-right">2 880 €</td><td className="p-3 border border-gray-200 text-right">2 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Sécurité immobilière</td><td className="p-3 border border-gray-200 text-right">250 €</td><td className="p-3 border border-gray-200 text-right">250 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Débours</td><td className="p-3 border border-gray-200 text-right">1 000 €</td><td className="p-3 border border-gray-200 text-right">1 000 €</td></tr>
            <tr className="bg-primary/10"><td className="p-3 border border-gray-200 font-bold">Total</td><td className="p-3 border border-gray-200 text-right font-bold">≈ 18 630 €</td><td className="p-3 border border-gray-200 text-right font-bold">≈ 5 038 €</td></tr>
            <tr><td className="p-3 border border-gray-200">Soit du prix</td><td className="p-3 border border-gray-200 text-right">7,45 %</td><td className="p-3 border border-gray-200 text-right">2,02 %</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Négociation des émoluments</h2>
      <p>
        Depuis un décret de 2016, les notaires peuvent <strong>remiser les émoluments</strong> de 10 à 20 % sur la tranche au-delà de 150 000 €. Cette remise est collective (tous les clients éligibles en bénéficient) et doit être affichée publiquement par le notaire.
      </p>
      <p>
        <strong>Exemple</strong> : achat à 300 000 € → émoluments ≈ 3 300 € → remise potentielle 330-660 €.
      </p>

      <h2>Outils et pages liées</h2>
      <ul>
        <li><Link href="/outils/calcul-frais-de-notaire">Calculateur de frais de notaire</Link></li>
        <li><Link href="/credit-immobilier/apport-personnel">Apport personnel</Link></li>
        <li><Link href="/credit-immobilier/primo-accedant">Primo-accédant : guide</Link></li>
      </ul>
    </PillarSubPage>
  )
}
