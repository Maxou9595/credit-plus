import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Simulator } from "@/components/simulator"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { FAQPageSchema } from "@/components/schemas/faq-page"
import { Info } from "lucide-react"

/**
 * Home page.
 *
 * Le Footer est injectée par app/layout.tsx, pas besoin de la doubler ici.
 * Les FAQ sont rendues en accordéon ET exposées en JSON-LD — jamais de
 * contenu caché.
 */

const homeFaqs = [
  { q: "Qu'est-ce que Crédit Plus ?", a: "Crédit Plus est un courtier indépendant en crédit immobilier, rachat de crédit, investissement locatif et assurance emprunteur. Basé à Carignan (08), nous accompagnons les clients partout en France avec plus de 100 banques partenaires. Notre enregistrement ORIAS est le 25005566." },
  { q: "Comment Crédit Plus négocie mon crédit immobilier ?", a: "Nous analysons votre dossier, sélectionnons 3 à 5 banques partenaires adaptées à votre profil, déposons le dossier en parallèle, puis négocions le package complet (taux, assurance, frais, garantie). Vous choisissez l'offre gagnante. Nos honoraires sont dus uniquement au succès — à la signature de l'offre." },
  { q: "Crédit Plus est-il vraiment gratuit ?", a: "Non, aucun courtier IOBSP ne l'est légalement. Nos honoraires client sont au succès, et la banque verse une commission séparée au courtier. La grille tarifaire est publique sur la page Mentions légales. Cette transparence est une obligation ACPR." },
  { q: "Combien de temps faut-il pour obtenir un crédit via Crédit Plus ?", a: "De l'appel initial à la signature chez le notaire : 6 à 10 semaines pour un dossier standard. Nous obtenons l'accord de principe bancaire sous 10 à 15 jours, l'offre de prêt suit sous 2 à 3 semaines, puis s'applique le délai légal de réflexion de 11 jours." },
  { q: "Crédit Plus couvre-t-il toute la France ?", a: "Oui. Siège à Carignan (Ardennes), accompagnement 100 % à distance pour l'ensemble du territoire français via rendez-vous visio, échange de documents sécurisé, et suivi jusqu'à la signature chez votre notaire local." },
  { q: "Quelles sont les spécialités de Crédit Plus ?", a: "Primo-accédants, rachats de crédit, investissement locatif (LMNP, SCI), profils atypiques (TNS, profession libérale, expatriés, non-résidents), assurance emprunteur en délégation. Pour chaque spécialité, nous avons identifié les banques les plus ouvertes et les grilles les plus compétitives." },
]

export default function Home() {
  return (
    <>
      <FAQPageSchema questions={homeFaqs} />

      <main className="min-h-screen">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Simulator />
        <Testimonials />

        <section className="py-20 bg-white" aria-labelledby="home-faq-title">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 id="home-faq-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Questions fréquentes</h2>
              <p className="text-lg text-gray-600">Les réponses aux questions les plus courantes sur Crédit Plus.</p>
            </div>
            <div className="space-y-3">
              {homeFaqs.map((item) => (
                <details key={item.q} className="group border border-gray-200 rounded-lg bg-white">
                  <summary className="cursor-pointer list-none flex items-start justify-between p-4 gap-3 hover:bg-gray-50">
                    <span className="font-semibold text-gray-900 text-base">{item.q}</span>
                    <Info className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform" aria-hidden />
                  </summary>
                  <p className="px-4 pb-4 text-gray-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}
