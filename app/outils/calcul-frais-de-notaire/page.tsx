import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { FraisNotaireCalc } from "@/components/calculators/frais-notaire-calc"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Calcul des frais de notaire : ancien vs neuf",
  description: "Simulez les frais de notaire 2026 : droits de mutation, émoluments, débours. Comparatif ancien (7-8 %) vs neuf (2-3 %).",
  alternates: { canonical: "/outils/calcul-frais-de-notaire" },
}

const jsonLdTool = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculateur frais de notaire — Crédit Plus",
  url: "https://credit-plus.fr/outils/calcul-frais-de-notaire",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
}

const faqs = [
  { q: "Pourquoi les frais de notaire sont plus élevés dans l'ancien ?", a: "Dans l'ancien, les droits de mutation (droits de mutation à titre onéreux, DMTO) atteignent 5,80 % du prix (ou 5,09 % dans l'Indre et l'Isère). Ces droits sont perçus par les collectivités locales (département, commune). Dans le neuf, ce prélèvement est remplacé par la TVA déjà incluse dans le prix d'achat, d'où des frais de notaire réduits à 2-3 %." },
  { q: "Les frais de notaire sont-ils négociables ?", a: "Partiellement. Les émoluments du notaire (part du notaire lui-même) peuvent être négociés de 10 à 20 % au-delà de 150 000 €, selon un décret de 2016. Les droits de mutation (la plus grosse part) ne sont JAMAIS négociables. Sur un achat à 300 000 €, la négociation peut faire gagner 300-600 €." },
  { q: "Peut-on emprunter les frais de notaire ?", a: "Oui, mais la banque demande presque toujours de les couvrir avec votre apport personnel. Emprunter à 110 % (bien + frais) est possible uniquement pour les profils solides via la flexibilité HCSF 20 %. Les primo-accédants CDI avec bons revenus y accèdent souvent, les autres profils rarement." },
  { q: "Quelles différences par département ?", a: "Les droits de mutation varient très peu : 5,80 % dans 99 départements, 5,09 % dans l'Indre (36) et l'Isère (38). Pas de différence matérielle sur le budget final." },
  { q: "Le PTZ paie-t-il les frais de notaire ?", a: "Indirectement. Le PTZ est un prêt complémentaire au prêt principal, donc il réduit le capital emprunté à la banque. Il ne finance pas spécifiquement les frais de notaire. Votre apport personnel doit en général couvrir les frais de notaire + garantie." },
]

export default function CalculFraisNotairePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Frais de notaire", url: "/outils/calcul-frais-de-notaire" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Calcul des frais de notaire 2026</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Combien vont vous coûter les frais de notaire ? Saisissez le prix et le type du bien pour obtenir la décomposition précise : droits de mutation, émoluments, sécurité immobilière, débours.
            </p>
          </header>

          <FraisNotaireCalc />

          <article className="prose prose-lg max-w-none mt-10 prose-a:text-primary prose-headings:text-gray-900">
            <h2>La composition des frais de notaire</h2>
            <ul>
              <li><strong>Droits de mutation à titre onéreux (DMTO)</strong> : 5,80 % du prix dans l'ancien (5,09 % pour l'Indre et l'Isère), environ 0,715 % dans le neuf. Ce sont des taxes perçues au profit de l'État, du département et de la commune. C'est la plus grosse part.</li>
              <li><strong>Émoluments du notaire</strong> : rémunération du notaire selon un barème dégressif par tranches (3,87 % jusqu'à 6 500 €, puis 1,596 %, 1,064 %, et 0,799 % au-delà de 60 000 €). Dans le neuf, ces émoluments sont réduits d'environ 30 %.</li>
              <li><strong>Contribution de sécurité immobilière</strong> : 0,10 % du prix pour l'inscription au fichier immobilier.</li>
              <li><strong>Débours</strong> : 800-1 500 € forfaitaires pour les frais engagés par le notaire (cadastre, hypothèque, copies, etc.).</li>
            </ul>

            <h2>Qui paie quoi ?</h2>
            <p>
              Sur 100 € de frais de notaire dans l'ancien pour un appartement à 250 000 € :
            </p>
            <ul>
              <li>80 € vont à l'État et aux collectivités (droits de mutation).</li>
              <li>10 € vont au notaire (émoluments nets).</li>
              <li>10 € couvrent les débours et la sécurité immobilière.</li>
            </ul>
            <p>
              Contrairement à une idée reçue, le notaire ne perçoit qu'une fraction des « frais de notaire » : il est redevable des taxes qu'il collecte au nom de l'État.
            </p>

            <h2>Négocier les émoluments</h2>
            <p>
              Depuis 2016, les émoluments du notaire sont négociables de 10 à 20 % au-delà de 150 000 €. Le notaire doit afficher publiquement son tarif et les éventuelles remises qu'il applique. Ces remises sont collectives (pour tous les clients remplissant les conditions) et non individuelles.
            </p>
            <p>
              <strong>Exemple</strong> : sur un achat à 300 000 €, les émoluments sont d'environ 2 880 €. Une remise de 15 % représente 432 € d'économie.
            </p>

            <h2>Autres outils Crédit Plus</h2>
            <ul>
              <li><Link href="/outils/calcul-mensualites">Calcul de mensualités</Link></li>
              <li><Link href="/outils/calcul-capacite-emprunt">Calcul de capacité d'emprunt</Link></li>
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
