import type { Metadata } from "next"
import Link from "next/link"
import { Star, CheckCircle2, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import GoogleReviews from "@/components/google-reviews"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Avis clients Crédit Plus — témoignages vérifiés",
  description:
    "Avis clients vérifiés Google sur Crédit Plus : ce que disent nos emprunteurs. Note moyenne, témoignages, exemples de dossiers.",
  alternates: { canonical: "/avis" },
}

export default function AvisPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Avis clients", url: "/avis" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Avis clients Crédit Plus
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Toutes les expériences client partagées ci-dessous sont des avis réels vérifiés via Google. Nous avons fait le choix de la transparence totale : pas de témoignages anonymes ni de citations inventées. Notre objectif est de vous donner une image fidèle de ce que vivent nos emprunteurs.
            </p>
          </header>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" aria-hidden />
              <span className="text-xl font-bold text-gray-900">Avis Google vérifiés</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Chaque avis affiché ci-dessous provient directement de Google Business Profile de Crédit Plus. Nous ne modifions ni ne filtrons les avis publiés — les bonnes comme les critiques.
              <a href="https://g.page/r/credit-plus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary underline ml-1">laisser un avis sur Google <ExternalLink className="h-3.5 w-3.5" /></a>
            </p>
          </div>

          <GoogleReviews />

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Témoignages clients</h2>
            <Testimonials />
          </section>

          <section className="mt-14 p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre engagement transparence</h2>
            <ul className="space-y-3">
              {[
                "Tous nos avis sont des avis Google vérifiés — aucun avis fictif ou rédigé par nos soins.",
                "Chaque client financé reçoit une invitation automatique à laisser un avis 7 jours après signature de l'offre.",
                "Nous répondons à 100 % des avis publiés, bons comme critiques.",
                "Nous travaillons à mettre en place un second canal de collecte via Trustpilot au 2e semestre 2026.",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10"><YmylDisclaimer /></div>
        </section>

        <CTA />
      </main>
    </>
  )
}
