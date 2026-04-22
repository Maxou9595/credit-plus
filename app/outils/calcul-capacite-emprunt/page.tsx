import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { CapaciteEmpruntCalc } from "@/components/calculators/capacite-emprunt-calc"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Capacité d'emprunt : calcul en 30 secondes",
  description: "Calculez votre capacité d'emprunt 2026 selon la règle HCSF 35 %. Résultat instantané, mensualité max, budget total.",
  alternates: { canonical: "/outils/calcul-capacite-emprunt" },
}

const jsonLdTool = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculateur de capacité d'emprunt — Crédit Plus",
  url: "https://credit-plus.fr/outils/calcul-capacite-emprunt",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
}

const faqs = [
  { q: "Comment se calcule la capacité d'emprunt ?", a: "La capacité d'emprunt correspond au capital maximum que vous pouvez emprunter, calculé à partir de votre mensualité maximale (règle HCSF 35 % des revenus nets, assurance incluse) actualisée au taux et à la durée du prêt. Plus la durée est longue, plus la capacité est élevée (limite HCSF : 25 ans)." },
  { q: "Ce calcul respecte-t-il la règle des 35 % du HCSF ?", a: "Oui. Notre calculateur applique strictement la règle HCSF : la mensualité maximale est plafonnée à 35 % des revenus nets mensuels après déduction des charges crédit en cours. Aucun dépassement n'est simulé." },
  { q: "Puis-je dépasser 35 % d'endettement dans la vraie vie ?", a: "Oui, via la flexibilité HCSF 20 % : chaque banque peut déroger pour 20 % de sa production trimestrielle, dont 70 % réservés aux primo-accédants et résidences principales. En pratique, des dossiers à 37-40 % sont financés si le reste-à-vivre est solide." },
  { q: "Faut-il inclure l'assurance emprunteur dans la mensualité max ?", a: "Oui. La règle HCSF impose d'inclure l'assurance dans les 35 %. Notre calculateur le fait automatiquement : vous saisissez le taux d'assurance et il soustrait la part assurance avant de calculer le capital empruntable." },
  { q: "Le résultat est-il une offre ferme ?", a: "Non. C'est une estimation théorique basée sur les paramètres saisis. La capacité réelle dépend aussi du reste-à-vivre, de votre historique bancaire, de votre profession, de la durée en poste et de l'avis final de chaque banque." },
]

export default function CalculCapacitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Capacité d'emprunt", url: "/outils/calcul-capacite-emprunt" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Calcul de capacité d'emprunt</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Combien pouvez-vous emprunter ? Saisissez vos revenus, vos charges et les conditions de prêt envisagées pour obtenir votre capacité d'emprunt maximale selon la règle HCSF 35 %.
            </p>
          </header>

          <CapaciteEmpruntCalc />

          <article className="prose prose-lg max-w-none mt-10 prose-a:text-primary prose-headings:text-gray-900">
            <h2>Comment interpréter le résultat</h2>
            <p>
              La <strong>mensualité maximale HCSF</strong> est le plafond absolu imposé par le Haut Conseil de Stabilité Financière : 35 % des revenus nets mensuels, assurance emprunteur incluse. Notre calculateur déduit la part assurance puis inverse la formule des annuités constantes pour trouver le capital empruntable.
            </p>
            <p>
              Le <strong>budget total</strong> ajoute l'apport à la capacité d'emprunt. C'est le montant maximum que vous pouvez acheter. Pensez à soustraire les frais de notaire (7-8 % ancien, 2-3 % neuf) pour obtenir le prix maximum d'acquisition réelle.
            </p>

            <h2>Exemples chiffrés</h2>
            <ul>
              <li><strong>Couple 4 500 €/mois nets, sans crédit conso, 25 ans à 3,35 %</strong> → mensualité max 1 575 € → capital emprunté ≈ 310 000 €. Avec 30 000 € d'apport → budget total 340 000 €.</li>
              <li><strong>Personne seule 2 800 €/mois, 15 ans à 3,05 %</strong> → mensualité max 980 € → capital 140 000 €. Avec 15 000 € d'apport → budget 155 000 €.</li>
              <li><strong>Couple 6 000 €/mois, 600 €/mois de prêt auto, 25 ans à 3,35 %</strong> → mensualité max 1 500 € → capital ≈ 295 000 €.</li>
            </ul>

            <h2>Autres outils Crédit Plus</h2>
            <ul>
              <li><Link href="/outils/calcul-mensualites">Calcul de mensualités</Link></li>
              <li><Link href="/outils/calcul-taux-endettement">Calcul du taux d'endettement</Link></li>
              <li><Link href="/outils/calcul-frais-de-notaire">Calcul des frais de notaire</Link></li>
              <li><Link href="/outils/simulation-ptz">Simulation PTZ 2026</Link></li>
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
