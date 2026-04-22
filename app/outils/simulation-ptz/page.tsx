import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { PtzCalc } from "@/components/calculators/ptz-calc"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Simulation PTZ 2026 : zones, plafonds, montant",
  description: "Simulateur PTZ 2026 — éligibilité, quotité, plafonds de ressources par zone (A/B1/B2/C). Résultat instantané.",
  alternates: { canonical: "/outils/simulation-ptz" },
}

const jsonLdTool = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Simulateur PTZ 2026 — Crédit Plus",
  url: "https://credit-plus.fr/outils/simulation-ptz",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
}

const faqs = [
  { q: "Le PTZ 2026 est-il cumulable avec d'autres aides ?", a: "Oui. Le PTZ est obligatoirement couplé à un prêt principal. Il se cumule avec : Action Logement (prêt 1 % logement), prêt conventionné ou PAS, PEL/CEL en apport, aides locales (collectivités)." },
  { q: "Puis-je avoir le PTZ si j'ai déjà été propriétaire ?", a: "Oui si vous n'avez pas été propriétaire de votre résidence principale durant les 2 dernières années. Avoir été propriétaire d'un investissement locatif sans y résider ne fait pas obstacle au PTZ. Des exceptions existent (handicap, catastrophe naturelle)." },
  { q: "Le PTZ couvre-t-il une maison individuelle neuve en 2026 ?", a: "Non. Depuis le recentrage de 2024, le PTZ 2026 ne finance plus les maisons individuelles neuves. Seuls sont éligibles : le neuf collectif en zones A, B1, B2, et l'ancien avec rénovation énergétique en zones B2 et C." },
  { q: "Que se passe-t-il si mes revenus dépassent de peu le plafond ?", a: "Vous n'êtes pas éligible. Le PTZ 2026 fonctionne par tranches strictes. Cependant, il existe parfois des prêts conventionnés régionaux ou des aides locales (Caisse d'Allocations Familiales, Action Logement) qui peuvent compenser. Un courtier les identifie pour vous." },
  { q: "Comment savoir dans quelle zone PTZ je suis ?", a: "Le zonage PTZ suit globalement le zonage A/B/C de la politique du logement. Paris et Côte d'Azur en A, grandes métropoles régionales (Reims, Strasbourg, Nancy, Metz, Nantes, Rennes, etc.) en B1, villes moyennes en B2, reste en C (Ardennes, campagne lorraine, etc.). La liste officielle est consultable sur le site de l'ANIL." },
]

export default function SimulationPtzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Simulation PTZ", url: "/outils/simulation-ptz" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Simulateur PTZ 2026</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Estimez votre PTZ 2026 en 30 secondes : éligibilité selon vos revenus et votre zone, montant prêtable selon la quotité et les plafonds par zone.
            </p>
          </header>

          <PtzCalc />

          <article className="prose prose-lg max-w-none mt-10 prose-a:text-primary prose-headings:text-gray-900">
            <h2>Les 3 conditions cumulatives du PTZ 2026</h2>
            <ol>
              <li><strong>Être primo-accédant</strong> — ne pas avoir été propriétaire de sa résidence principale durant les 2 dernières années.</li>
              <li><strong>Respecter les plafonds de ressources</strong> — revenu fiscal de référence N-2 selon zone et taille du foyer.</li>
              <li><strong>Acheter une résidence principale</strong> — logement occupé au moins 8 mois par an, au plus tard 1 an après l'achat ou la fin des travaux.</li>
            </ol>

            <h2>Les zones du PTZ 2026</h2>
            <ul>
              <li><strong>Zone A bis</strong> : Paris et petite couronne.</li>
              <li><strong>Zone A</strong> : agglomération parisienne, Côte d'Azur, frontière suisse.</li>
              <li><strong>Zone B1</strong> : métropoles de plus de 250 000 habitants (Reims, Strasbourg, Nancy, Metz, Lyon, Marseille, Toulouse, Nantes, Bordeaux, etc.).</li>
              <li><strong>Zone B2</strong> : villes moyennes (50 000-250 000 habitants).</li>
              <li><strong>Zone C</strong> : reste du territoire.</li>
            </ul>

            <h2>Nature du projet éligible</h2>
            <div className="not-prose my-4">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border border-gray-200">Zone</th>
                    <th className="text-left p-3 border border-gray-200">Neuf collectif</th>
                    <th className="text-left p-3 border border-gray-200">Ancien avec travaux énergétiques</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border border-gray-200">A / A bis</td><td className="p-3 border border-gray-200">40 % du prix, plafond 100 000 €</td><td className="p-3 border border-gray-200">Non éligible</td></tr>
                  <tr><td className="p-3 border border-gray-200">B1</td><td className="p-3 border border-gray-200">40 % du prix, plafond 80 000 €</td><td className="p-3 border border-gray-200">Non éligible</td></tr>
                  <tr><td className="p-3 border border-gray-200">B2</td><td className="p-3 border border-gray-200">40 % du prix, plafond 60 000 €</td><td className="p-3 border border-gray-200">20 % du prix</td></tr>
                  <tr><td className="p-3 border border-gray-200">C</td><td className="p-3 border border-gray-200">Non éligible</td><td className="p-3 border border-gray-200">20 % du prix, plafond 40 000 €</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Durée et différé</h2>
            <p>
              Le PTZ se rembourse en 20 à 25 ans, avec un différé de 5 à 15 ans selon votre tranche de revenus. Pendant le différé, vous ne remboursez pas le PTZ : vous payez seulement le prêt principal. Le PTZ se rembourse ensuite en mensualités constantes sur la période restante.
            </p>

            <h2>Autres outils</h2>
            <ul>
              <li><Link href="/outils/calcul-mensualites">Calcul de mensualités</Link></li>
              <li><Link href="/outils/calcul-capacite-emprunt">Calcul de capacité d'emprunt</Link></li>
              <li><Link href="/outils/calcul-frais-de-notaire">Calcul des frais de notaire</Link></li>
              <li><Link href="/credit-immobilier/pret-taux-zero-ptz">Guide complet PTZ 2026</Link></li>
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
