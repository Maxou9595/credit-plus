import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { TauxEndettementCalc } from "@/components/calculators/taux-endettement-calc"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Taux d'endettement : calcul HCSF 2026",
  description: "Calculez votre taux d'endettement conforme HCSF. Seuil 35 %, flexibilité 20 %, plafond absolu 40 %.",
  alternates: { canonical: "/outils/calcul-taux-endettement" },
}

const jsonLdTool = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculateur de taux d'endettement — Crédit Plus",
  url: "https://creditplus-france.com/outils/calcul-taux-endettement",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
}

const faqs = [
  { q: "Quelle est la formule officielle du taux d'endettement ?", a: "Taux d'endettement = (mensualité du futur crédit + mensualités des autres crédits + pensions alimentaires versées) / revenus nets mensuels cumulés. La mensualité inclut le capital, les intérêts et l'assurance emprunteur obligatoire." },
  { q: "Que signifie la flexibilité 20 % HCSF ?", a: "Les banques peuvent déroger à la règle 35 % pour 20 % de leur production trimestrielle, dont 70 % réservés aux primo-accédants et résidences principales. En pratique, des dossiers à 37-40 % sont financés si le reste-à-vivre et le profil sont solides." },
  { q: "Peut-on prêter au-delà de 40 % d'endettement ?", a: "Non. Aucune banque française ne peut accorder un crédit dépassant 40 % d'endettement, même avec la flexibilité HCSF. C'est le plafond absolu imposé par la décision HCSF du 29 septembre 2021." },
  { q: "Le loyer actuel compte-t-il dans mon taux ?", a: "Oui, si vous conservez votre logement actuel. Non, si vous vendez votre résidence principale actuelle pour acheter. La banque vous demande une attestation de vente ou de fin de bail avant de finaliser le dossier." },
  { q: "Pourquoi mon taux d'endettement calculé est différent de celui de la banque ?", a: "Trois raisons possibles : (1) votre banque inclut/exclut des charges différemment, (2) elle utilise un salaire moyen sur 12 mois pour les TNS, (3) elle applique une pondération 70 % aux loyers futurs si vous investissez. Notre calculateur utilise la méthode HCSF standard." },
]

export default function CalculTauxEndettementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Taux d'endettement", url: "/outils/calcul-taux-endettement" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Calcul du taux d'endettement (HCSF 35 %)</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vérifiez instantanément si votre dossier respecte la règle HCSF : taux d'endettement plafonné à 35 % des revenus nets (flexibilité 20 % possible jusqu'à 40 %).
            </p>
          </header>

          <TauxEndettementCalc />

          <article className="prose prose-lg max-w-none mt-10 prose-a:text-primary prose-headings:text-gray-900">
            <h2>La règle HCSF 35 % en détail</h2>
            <p>
              Depuis le 1er janvier 2022, le Haut Conseil de Stabilité Financière (<Link href="/glossaire/hcsf">HCSF</Link>) impose un taux d'endettement maximum de 35 % aux banques qui accordent un crédit immobilier. Cette règle est <strong>juridiquement contraignante</strong> — l'ACPR sanctionne les banques qui la franchiraient hors flexibilité.
            </p>

            <h2>Ce qui compte dans les charges</h2>
            <ul>
              <li><strong>Mensualité du nouveau crédit</strong> : capital + intérêts + <Link href="/assurance-emprunteur">assurance emprunteur</Link>.</li>
              <li><strong>Mensualités des crédits en cours</strong> : auto, conso, revolving, étudiants, travaux.</li>
              <li><strong>Pensions alimentaires</strong> versées (déductibles fiscalement mais comptées dans l'endettement).</li>
              <li><strong>Loyer actuel</strong> si conservation du logement actuel.</li>
            </ul>

            <h2>Ce qui NE compte PAS</h2>
            <ul>
              <li>Charges courantes (énergie, télécom, alimentation).</li>
              <li>Impôts sur le revenu.</li>
              <li>Crédits qui seront soldés par le rachat (cas du regroupement).</li>
            </ul>

            <h2>Le reste-à-vivre — complément non HCSF</h2>
            <p>
              Le HCSF ne fixe pas de reste-à-vivre minimum, mais chaque banque le calcule. Seuils typiques 2026 :
            </p>
            <ul>
              <li>Personne seule : 700-900 €/mois minimum.</li>
              <li>Couple : 1 200-1 500 €/mois.</li>
              <li>+ 300-400 €/mois par enfant à charge.</li>
            </ul>
            <p>
              Un dossier qui respecte les 35 % mais avec un reste-à-vivre faible sera refusé. Inversement, un dossier à 37-38 % avec un reste-à-vivre supérieur à 2 500 € sera souvent accepté via la flexibilité 20 %.
            </p>

            <h2>Autres outils</h2>
            <ul>
              <li><Link href="/outils/calcul-capacite-emprunt">Calcul de capacité d'emprunt</Link></li>
              <li><Link href="/outils/calcul-mensualites">Calcul de mensualités</Link></li>
              <li><Link href="/credit-immobilier/capacite-emprunt">Guide capacité d'emprunt</Link></li>
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
