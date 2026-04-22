import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Capacité d'emprunt 2026 : calcul et règle HCSF 35 %",
  description: "Comment calculer votre capacité d'emprunt en 2026. Règle HCSF 35 %, flexibilité 20 %, reste-à-vivre. Exemples chiffrés.",
  alternates: { canonical: "/credit-immobilier/capacite-emprunt" },
}

const faqs = [
  { q: "Comment se calcule la capacité d'emprunt ?", a: "Capacité = mensualité maximale × nombre de mois, actualisé au taux du prêt. La mensualité max est plafonnée à 35 % des revenus nets (règle HCSF), assurance incluse. Plus la durée est longue (25 ans max), plus la capacité est élevée." },
  { q: "Quel salaire pour emprunter 200 000 € ?", a: "Sur 20 ans à 3,25 %, la mensualité d'un prêt de 200 000 € hors assurance est ≈ 1 135 €. Avec assurance, ≈ 1 185 €. Pour rester sous 35 %, il faut ≈ 3 385 € nets mensuels (ou 1 700 € par personne en couple)." },
  { q: "Peut-on dépasser 35 % d'endettement ?", a: "Oui, via la flexibilité HCSF 20 % : chaque banque peut déroger pour 20 % de sa production, dont 70 % aux primo-accédants. En pratique, des dossiers à 37-40 % sont financés si le reste-à-vivre est ≥ 2 000 €." },
  { q: "Qu'est-ce que le reste-à-vivre ?", a: "C'est ce qu'il vous reste une fois toutes les charges crédit payées. Chaque banque fixe son seuil : 700-900 €/personne seule, 1 200-1 500 €/couple, + 300-400 €/enfant. Un dossier à 34 % d'endettement avec reste-à-vivre trop faible peut être refusé." },
  { q: "Les revenus variables (primes, intéressement) comptent-ils ?", a: "Partiellement. Les banques lissent généralement sur 3 ans pour les primes/intéressements. Les revenus 100 % variables (commerciaux à commission) peuvent être pondérés à 70 %. Les revenus TNS sont analysés sur 2-3 bilans." },
]

export default function CapaciteEmpruntPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "Capacité d'emprunt", url: "/credit-immobilier/capacite-emprunt" },
      ]}
      eyebrow="Pilier crédit immobilier"
      h1="Capacité d'emprunt en 2026 : méthode de calcul"
      intro={<p>Votre capacité d'emprunt est plafonnée par la règle HCSF 35 %. Comment la calculer, comment l'optimiser, à quoi s'attendre des banques.</p>}
      tldr={[
        <><strong>Règle HCSF 35 %</strong> : mensualité maximale = 35 % des revenus nets, assurance incluse.</>,
        <>Durée maximale : <strong>25 ans</strong> (27 avec différé VEFA).</>,
        <><strong>Flexibilité 20 %</strong> : chaque banque peut déroger pour 20 % de sa production trimestrielle.</>,
        <>Le <strong>reste-à-vivre</strong> (typiquement 700 à 1 500 €/mois selon composition) peut bloquer un dossier même à 35 %.</>,
      ]}
      ctaPrimary={{ label: "Calculer ma capacité", href: "/outils/calcul-capacite-emprunt" }}
      ctaSecondary={{ label: "Simuler un dossier", href: "/credit-immobilier/simulation" }}
      faqs={faqs}
    >
      <h2>La formule du taux d'endettement</h2>
      <p>
        Taux d'endettement = (mensualité du nouveau crédit + mensualités des autres crédits + pensions alimentaires) / revenus nets cumulés. Le HCSF impose que ce taux ne dépasse pas <strong>35 %</strong>.
      </p>

      <h2>Exemples chiffrés — combien pouvez-vous emprunter ?</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Revenus nets cumulés</th>
              <th className="text-right p-3 border border-gray-200">Mensualité max HCSF</th>
              <th className="text-right p-3 border border-gray-200">Capacité sur 20 ans à 3,25 %</th>
              <th className="text-right p-3 border border-gray-200">Capacité sur 25 ans à 3,35 %</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-gray-200">2 500 €/mois</td><td className="p-3 border border-gray-200 text-right">875 €</td><td className="p-3 border border-gray-200 text-right">≈ 153 000 €</td><td className="p-3 border border-gray-200 text-right">≈ 177 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">3 500 €/mois</td><td className="p-3 border border-gray-200 text-right">1 225 €</td><td className="p-3 border border-gray-200 text-right">≈ 214 000 €</td><td className="p-3 border border-gray-200 text-right">≈ 247 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">4 500 €/mois (couple)</td><td className="p-3 border border-gray-200 text-right">1 575 €</td><td className="p-3 border border-gray-200 text-right">≈ 276 000 €</td><td className="p-3 border border-gray-200 text-right">≈ 318 000 €</td></tr>
            <tr><td className="p-3 border border-gray-200">6 000 €/mois (couple)</td><td className="p-3 border border-gray-200 text-right">2 100 €</td><td className="p-3 border border-gray-200 text-right">≈ 368 000 €</td><td className="p-3 border border-gray-200 text-right">≈ 425 000 €</td></tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">Hypothèse : pas de crédit conso en cours, assurance 0,25 %. Chiffres arrondis.</p>
      </div>

      <h2>Ce qui réduit votre capacité</h2>
      <ul>
        <li><strong>Crédits en cours</strong> : chaque mensualité existante (auto, conso, revolving) se soustrait au plafond.</li>
        <li><strong>Pensions alimentaires</strong> versées.</li>
        <li><strong>Loyer</strong> si vous gardez votre logement actuel (cas d'un achat résidence secondaire ou locatif sans vendre).</li>
        <li><strong>Durée courte</strong> : sur 15 ans, la capacité est ≈ 20 % plus faible que sur 25 ans.</li>
      </ul>

      <h2>Comment optimiser votre capacité</h2>
      <ul>
        <li>Solder vos crédits conso avant de déposer le dossier.</li>
        <li>Renégocier votre assurance groupe pour baisser la mensualité.</li>
        <li>Augmenter l'apport — cela ne change pas la capacité directe mais améliore le taux → plus de capacité.</li>
        <li>Choisir la durée maximale compatible avec votre reste-à-vivre cible.</li>
      </ul>

      <h2>Outils et pages liées</h2>
      <ul>
        <li><Link href="/outils/calcul-capacite-emprunt">Calculateur de capacité d'emprunt</Link></li>
        <li><Link href="/outils/calcul-taux-endettement">Calcul du taux d'endettement</Link></li>
        <li><Link href="/credit-immobilier/apport-personnel">Apport personnel : combien faut-il ?</Link></li>
        <li><Link href="/glossaire/hcsf">Définition HCSF</Link></li>
      </ul>
    </PillarSubPage>
  )
}
