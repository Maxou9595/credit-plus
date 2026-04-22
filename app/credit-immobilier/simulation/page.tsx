import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Clock, Shield, Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import CreditApplicationForm from "@/components/credit-application-form"
import { FAQPageSchema } from "@/components/schemas/faq-page"
import { ServiceSchema } from "@/components/schemas/service"

export const metadata: Metadata = {
  title: "Simulation de crédit immobilier gratuite",
  description:
    "Simulez gratuitement votre crédit immobilier : mensualités, taux, capacité. Réponse sous 24h, sans engagement.",
  alternates: { canonical: "/credit-immobilier/simulation" },
}

const faqs = [
  { q: "La simulation est-elle gratuite et sans engagement ?", a: "Oui. Remplir ce formulaire ne vous engage à rien. Aucun frais n'est dû tant qu'aucune offre de prêt n'est signée. Nos honoraires client sont uniquement au succès, à la signature de l'offre de prêt obtenue par notre intermédiaire." },
  { q: "En combien de temps ai-je une réponse ?", a: "Notre équipe analyse chaque demande sous 24h ouvrées. Un courtier vous rappelle pour compléter votre dossier, puis dépose votre demande auprès de 3 à 5 banques partenaires. L'accord de principe arrive sous 10 à 15 jours." },
  { q: "Quelles informations dois-je fournir ?", a: "Pour une simulation initiale : revenus nets mensuels, nature du contrat (CDI, TNS, fonctionnaire…), apport disponible, montant envisagé, type de projet. Pour un dossier complet ensuite : bulletins de salaire, relevés bancaires, avis d'imposition." },
  { q: "Mon dossier est-il confidentiel ?", a: "Oui. Vos données sont stockées selon le RGPD, utilisées uniquement pour traiter votre demande de crédit, et transmises aux banques partenaires sélectionnées avec votre consentement explicite. Notre politique de confidentialité est consultable en bas de page." },
]

export default function SimulationPage() {
  return (
    <>
      <ServiceSchema
        name="Simulation de crédit immobilier — Crédit Plus"
        description="Simulation gratuite de crédit immobilier auprès de +100 banques partenaires."
        urlPath="/credit-immobilier/simulation"
      />
      <FAQPageSchema questions={faqs} />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[
            { name: "Crédit immobilier", url: "/credit-immobilier" },
            { name: "Simulation", url: "/credit-immobilier/simulation" },
          ]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Simulation de crédit immobilier gratuite
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Obtenez une simulation personnalisée de votre crédit immobilier en 2 minutes. Notre équipe analyse votre demande sous 24h, la présente à 3-5 banques partenaires, et vous communique les meilleures conditions obtenues.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: CheckCircle2, label: "Sans engagement" },
              { icon: Clock, label: "Réponse sous 24h" },
              { icon: Shield, label: "Honoraires au succès uniquement" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <b.icon className="h-5 w-5 text-primary flex-shrink-0" aria-hidden />
                <span className="text-sm font-medium text-gray-800">{b.label}</span>
              </div>
            ))}
          </div>

          <CreditApplicationForm />

          <section className="mt-14" aria-labelledby="faq-simulation-title">
            <h2 id="faq-simulation-title" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
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

          <div className="mt-10"><YmylDisclaimer /></div>
        </section>
      </main>
    </>
  )
}
