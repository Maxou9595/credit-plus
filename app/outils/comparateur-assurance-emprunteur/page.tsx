import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { AssuranceComparateur } from "@/components/calculators/assurance-comparateur"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Comparateur d'assurance emprunteur : économie potentielle",
  description: "Comparez l'assurance bancaire à la délégation externe et chiffrez votre économie. Loi Lemoine, délégation, quotité.",
  alternates: { canonical: "/outils/comparateur-assurance-emprunteur" },
}

const jsonLdTool = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Comparateur assurance emprunteur — Crédit Plus",
  url: "https://credit-plus.fr/outils/comparateur-assurance-emprunteur",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
}

const faqs = [
  { q: "Le contrat bancaire est-il toujours plus cher ?", a: "Dans 85 à 95 % des cas oui. Le contrat groupe bancaire mutualise les risques entre tous les emprunteurs de la banque, donc surtaxe les profils jeunes, non-fumeurs, sans antécédent. Une délégation individuelle tarife au profil exact : jeune non-fumeur = prime très basse." },
  { q: "Puis-je changer même après quelques années ?", a: "Oui, depuis la loi Lemoine de février 2022 : résiliation à tout moment, sans date anniversaire. Cela vaut aussi bien pour les contrats nouvellement souscrits que pour les contrats en cours." },
  { q: "Quels sont les 18 critères d'équivalence CCSF ?", a: "Le Comité Consultatif du Secteur Financier a fixé 18 critères que le contrat externe doit égaler au minimum : garanties DC/PTIA/IPT obligatoires, IPP/ITT si exigées, quotité, territorialité, exclusions, franchise, délai de carence, etc. La fiche standardisée d'information (FSI) de la banque liste ces critères précisément pour votre prêt." },
  { q: "Pourquoi la banque peut-elle refuser ?", a: "La banque peut refuser si les garanties du contrat externe ne sont pas équivalentes aux siennes sur les 18 critères CCSF. Elle ne peut JAMAIS refuser pour cause de tarif plus bas. Un refus doit être motivé par écrit. En cas de refus abusif, saisir le médiateur ACPR (gratuit)." },
  { q: "Quand est-il trop tard pour changer ?", a: "Jamais, tant que le prêt est en cours de remboursement. Même en fin de prêt, un gain résiduel peut exister. Cela dit, le gain est proportionnel au capital restant dû et à la durée restante : au-delà de 15 ans de prêt restant, l'économie se chiffre en milliers voire dizaines de milliers d'euros." },
]

export default function ComparateurAssurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Comparateur assurance", url: "/outils/comparateur-assurance-emprunteur" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Comparateur d'assurance emprunteur</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Calculez votre économie potentielle en passant du contrat groupe bancaire à une délégation externe. La loi Lemoine vous autorise à changer à tout moment depuis 2022.
            </p>
          </header>

          <AssuranceComparateur />

          <article className="prose prose-lg max-w-none mt-10 prose-a:text-primary prose-headings:text-gray-900">
            <h2>Pourquoi la délégation est presque toujours plus compétitive</h2>
            <p>
              Le contrat groupe bancaire est mutualisé : la prime est calculée pour l'ensemble de la clientèle de la banque, tous âges et profils confondus. Pour un jeune emprunteur non-fumeur en bonne santé, cette mutualisation signifie qu'il paie pour compenser les profils plus risqués.
            </p>
            <p>
              La délégation externe individuelle tarife au profil exact : âge, statut fumeur/non-fumeur, sport à risque, profession. Un couple 30 ans non-fumeurs paye souvent 60 % moins cher qu'avec le groupe.
            </p>

            <h2>Comment faire concrètement</h2>
            <ol>
              <li>Demander la FSI à votre banque (elle liste les 18 critères d'équivalence).</li>
              <li>Comparer avec 3-5 assureurs externes (April, Cardif, Generali, MetLife, SwissLife, UNIM…).</li>
              <li>Choisir le contrat avec la meilleure combinaison garanties équivalentes + prime.</li>
              <li>Envoyer votre demande de substitution à la banque par recommandé (modèle disponible en ligne).</li>
              <li>Attendre 10 jours ouvrés la réponse de la banque.</li>
              <li>Si accord : mise en place, première prime prélevée, ancienne assurance résiliée automatiquement.</li>
            </ol>

            <h2>Autres outils et pages</h2>
            <ul>
              <li><Link href="/assurance-emprunteur">Guide complet assurance emprunteur</Link></li>
              <li><Link href="/assurance-emprunteur/loi-lemoine">Loi Lemoine 2026</Link></li>
              <li><Link href="/assurance-emprunteur/delegation">Délégation d'assurance</Link></li>
            </ul>
          </article>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="group border border-gray-200 rounded-lg">
                  <summary className="cursor-pointer list-none flex items-start justify-between p-4 gap-3 hover:bg-gray-50">
                    <span className="font-semibold text-gray-900 text-base">{item.q}</span>
                    <Info className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform" aria-hidden />
                  </summary>
                  <p className="px-4 pb-4 text-gray-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <YmylDisclaimer className="mt-10" />
        </section>
        <CTA />
      </main>
    </>
  )
}
