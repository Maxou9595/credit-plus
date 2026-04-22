import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { TableauAmortissementCalc } from "@/components/calculators/tableau-amortissement-calc"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Tableau d'amortissement : générer et exporter en CSV",
  description: "Générez votre tableau d'amortissement immobilier : capital, intérêts, CRD mois par mois. Export CSV pour Excel.",
  alternates: { canonical: "/outils/tableau-amortissement" },
}

const jsonLdTool = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tableau d'amortissement — Crédit Plus",
  url: "https://creditplus-france.com/outils/tableau-amortissement",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
}

const faqs = [
  { q: "Qu'est-ce qu'un tableau d'amortissement ?", a: "C'est le document qui détaille mois par mois la décomposition de chaque mensualité en part capital, part intérêts, et capital restant dû (CRD). Il est annexé à toute offre de prêt immobilier et juridiquement opposable." },
  { q: "Pourquoi la part d'intérêts diminue-t-elle avec le temps ?", a: "Parce que les intérêts sont calculés sur le capital restant dû. Au début du prêt, le CRD est élevé donc les intérêts aussi. Au fil des mensualités, le CRD baisse, la part d'intérêts diminue et la part capital augmente. En fin de prêt, la mensualité rembourse presque exclusivement du capital." },
  { q: "Pourquoi un rachat de crédit est plus rentable en début de prêt ?", a: "Parce qu'en début de prêt, la part d'intérêts dans chaque mensualité est maximale. Racheter tôt permet donc d'économiser sur une large partie de ces intérêts futurs. En fin de prêt, l'essentiel est déjà remboursé : l'économie possible devient marginale." },
  { q: "Puis-je faire des remboursements anticipés à partir de ce tableau ?", a: "Oui. Tout remboursement anticipé diminue le CRD donc les intérêts futurs. Votre tableau d'amortissement officiel vous indique le CRD à tout moment. Attention aux IRA applicables (plafonnées à 3 % du CRD ou 6 mois d'intérêts)." },
  { q: "Pourquoi l'assurance n'apparaît-elle pas sur ce tableau ?", a: "L'assurance emprunteur est versée séparément en prime, souvent calculée sur le capital initial. Elle ne figure pas dans le tableau d'amortissement du prêt principal. Votre offre de prêt officielle détaille les deux postes : capital + intérêts d'une part, prime d'assurance de l'autre." },
]

export default function TableauAmortissementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-5xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Tableau d'amortissement", url: "/outils/tableau-amortissement" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Tableau d'amortissement</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Générez votre tableau d'amortissement en 30 secondes : mensualité, part capital, part intérêts, capital restant dû pour chaque mois du prêt. Export CSV pour Excel.
            </p>
          </header>

          <TableauAmortissementCalc />

          <article className="prose prose-lg max-w-none mt-10 prose-a:text-primary prose-headings:text-gray-900">
            <h2>Lire un tableau d'amortissement</h2>
            <ul>
              <li><strong>Mensualité</strong> : constante si annuités constantes, change si progressives.</li>
              <li><strong>Intérêts</strong> : élevés en début de prêt, faibles en fin.</li>
              <li><strong>Capital</strong> : faible en début, fort en fin.</li>
              <li><strong>CRD</strong> : capital restant dû à la fin du mois.</li>
            </ul>

            <h2>Intérêt pratique</h2>
            <p>
              Le tableau sert à : (1) préparer un rachat de crédit en connaissant le CRD actuel, (2) calculer l'IRA applicable en cas de remboursement anticipé, (3) vérifier la cohérence de l'offre bancaire, (4) simuler un remboursement partiel anticipé (5-10 % sans IRA selon contrats).
            </p>

            <h2>Autres outils</h2>
            <ul>
              <li><Link href="/outils/calcul-mensualites">Calcul de mensualités</Link></li>
              <li><Link href="/outils/calcul-rachat-credit">Calcul de rachat de crédit</Link></li>
              <li><Link href="/glossaire/amortissement">Définition amortissement</Link></li>
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
