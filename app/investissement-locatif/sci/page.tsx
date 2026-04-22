import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "SCI 2026 : IR ou IS, crédit immobilier, fiscalité",
  description: "Société Civile Immobilière : comparatif SCI à l'IR vs IS, crédit associé, banques, fiscalité. Exemples 2026.",
  alternates: { canonical: "/investissement-locatif/sci" },
}

const faqs = [
  { q: "SCI à l'IR ou à l'IS : laquelle choisir ?", a: "SCI IR : transparence fiscale, les revenus remontent dans le foyer fiscal des associés, déficit imputable. Bien pour transmission familiale. SCI IS : amortissement comptable, réinvestissement à IS 15-25 %, mais taxation plus-values à la revente. Bien pour holding patrimoniale." },
  { q: "Peut-on souscrire un crédit en SCI ?", a: "Oui. Les banques prêtent aux SCI sous conditions : minimum 2 associés, garanties personnelles (cautions) des associés, apport de la SCI (10-20 % typiquement). Le montage est un peu plus complexe qu'en nom propre mais accepté par la majorité des banques." },
  { q: "Les banques préfèrent-elles SCI IR ou IS ?", a: "Légèrement plus simple en IR (transparence fiscale = plus lisible pour la banque). Certaines banques, surtout régionales, sont réticentes à l'IS sur un premier investissement. Un courtier identifie les banques ouvertes à votre montage." },
  { q: "Une SCI peut-elle détenir la résidence principale ?", a: "Techniquement oui, mais fiscalement défavorable : perte de l'exonération plus-value de la RP à la revente. Réservé aux cas de transmission patrimoniale (héritiers avec enfants d'une union antérieure, par exemple)." },
  { q: "Quel coût pour créer une SCI ?", a: "Environ 1 500-2 500 € : statuts (notaire ou juriste : 800-1 500 €), publication légale (200 €), immatriculation au RCS (70 €), frais divers. La SCI n'a pas de capital minimum obligatoire." },
]

export default function SCIPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Investissement locatif", url: "/investissement-locatif" },
        { name: "SCI", url: "/investissement-locatif/sci" },
      ]}
      eyebrow="Pilier investissement locatif"
      h1="SCI 2026 : comparatif IR / IS, crédit, fiscalité"
      intro={<p>La Société Civile Immobilière (SCI) est l'outil classique d'investissement patrimonial en famille ou entre associés. Le choix IR ou IS détermine 20 ans de fiscalité — il ne se rattrape pas facilement.</p>}
      tldr={[
        <><strong>SCI IR</strong> : transparence fiscale, idéale pour transmission et déficit foncier.</>,
        <><strong>SCI IS</strong> : amortissement comptable, holding patrimoniale, taxation plus-value à la revente.</>,
        <>Crédit immobilier en SCI : possible, sous conditions (cautions personnelles des associés).</>,
        <>Coût de création : <strong>1 500-2 500 €</strong>. Gestion comptable annuelle obligatoire.</>,
      ]}
      ctaPrimary={{ label: "Simuler mon projet", href: "/credit-immobilier/simulation" }}
      faqs={faqs}
    >
      <h2>SCI IR — transparence fiscale</h2>
      <p>Dans une SCI à l'IR (Impôt sur le Revenu), la SCI n'est pas imposée directement. Les revenus fonciers (ou BIC si meublé) sont répartis entre les associés au prorata de leurs parts, et intégrés dans leur foyer fiscal. Avantages :</p>
      <ul>
        <li><strong>Déficit foncier imputable</strong> sur le revenu global jusqu'à 10 700 €/an (ou 21 400 € travaux énergétiques).</li>
        <li><strong>Exonération plus-value</strong> après 22 ans de détention (puis prélèvements sociaux après 30 ans).</li>
        <li><strong>Simplicité comptable</strong> : pas de comptabilité d'entreprise, déclaration simplifiée.</li>
        <li><strong>Bon pour transmission</strong> : les parts se transmettent par donation avec abattement 100 000 € / parent / 15 ans.</li>
      </ul>

      <h2>SCI IS — holding patrimoniale</h2>
      <p>Dans une SCI à l'IS (Impôt sur les Sociétés), la SCI paie directement l'impôt sur ses bénéfices (15 % jusqu'à 42 500 €, puis 25 %). Avantages :</p>
      <ul>
        <li><strong>Amortissement du bien</strong> (3-4 %/an hors terrain) — neutralise l'impôt pendant 15-20 ans.</li>
        <li><strong>Réinvestissement facilité</strong> à IS 15-25 % (vs TMI 30-45 % en nom propre).</li>
        <li><strong>Hautes rémunérations des dirigeants</strong> possibles en salaire.</li>
      </ul>
      <p>Inconvénient majeur : à la revente, la <strong>plus-value professionnelle</strong> est taxée à l'IS (25 %) sans abattement pour durée de détention. Peut représenter 30-35 % du gain réalisé.</p>

      <h2>Tableau décisionnel</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Objectif</th>
              <th className="text-left p-3 border border-gray-200">SCI IR</th>
              <th className="text-left p-3 border border-gray-200">SCI IS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-gray-200">Location nue + déficit foncier</td><td className="p-3 border border-gray-200">✅ Idéal</td><td className="p-3 border border-gray-200">❌ Pas pertinent</td></tr>
            <tr><td className="p-3 border border-gray-200">Location meublée (LMNP possible)</td><td className="p-3 border border-gray-200">⚠️ Bascule en IS automatique si meublé &gt; 10 % recettes</td><td className="p-3 border border-gray-200">✅ Compatible</td></tr>
            <tr><td className="p-3 border border-gray-200">Transmission familiale</td><td className="p-3 border border-gray-200">✅ Optimal</td><td className="p-3 border border-gray-200">❌ Défavorable</td></tr>
            <tr><td className="p-3 border border-gray-200">Réinvestissement long terme</td><td className="p-3 border border-gray-200">❌ Taxation annuelle TMI</td><td className="p-3 border border-gray-200">✅ Amortissement + IS 15-25 %</td></tr>
            <tr><td className="p-3 border border-gray-200">Revente prévue dans 5-10 ans</td><td className="p-3 border border-gray-200">⚠️ Abattement limité</td><td className="p-3 border border-gray-200">❌ Plus-value professionnelle 25 %</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Banques qui prêtent aux SCI</h2>
      <p>La majorité des banques prêtent aux SCI, avec des approches différentes :</p>
      <ul>
        <li><strong>Crédit Agricole régional, Caisse d'Épargne, Banque Populaire</strong> — très ouvertes aux SCI familiales.</li>
        <li><strong>BNP Paribas, Société Générale, LCL</strong> — SCI acceptées, analyse du profil des associés poussée.</li>
        <li><strong>CIC, Crédit Mutuel</strong> — bien pour les SCI à l'IS avec projet patrimonial structuré.</li>
      </ul>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/investissement-locatif">Guide investissement locatif</Link></li>
        <li><Link href="/investissement-locatif/lmnp">LMNP au réel</Link></li>
        <li><Link href="/investissement-locatif/deficit-foncier">Déficit foncier</Link></li>
      </ul>
    </PillarSubPage>
  )
}
