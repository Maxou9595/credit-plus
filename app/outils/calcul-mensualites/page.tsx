import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import CreditCalculator from "@/components/credit-calculator"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Calcul de mensualités — Crédit immobilier 2026",
  description:
    "Calculez gratuitement votre mensualité de crédit immobilier : montant, durée, taux, assurance. Résultat instantané.",
  alternates: { canonical: "/outils/calcul-mensualites" },
}

const jsonLdTool = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculateur de mensualités de crédit immobilier — Crédit Plus",
  url: "https://creditplus-france.com/outils/calcul-mensualites",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  featureList: [
    "Calcul de mensualité capital + intérêts",
    "Intégration de l'assurance emprunteur",
    "Graphique d'amortissement",
    "Export du tableau d'amortissement",
  ],
}

const faqs = [
  { q: "Comment se calcule une mensualité de crédit immobilier ?", a: "La formule des annuités constantes est : M = C × (t / 12) / (1 – (1 + t/12)^(–n)), où M = mensualité hors assurance, C = capital emprunté, t = taux annuel, n = nombre de mensualités. L'assurance emprunteur s'ajoute séparément, calculée sur le capital initial (ou restant dû selon les contrats)." },
  { q: "L'assurance emprunteur est-elle incluse dans ce calcul ?", a: "Oui, vous pouvez saisir le taux de votre assurance emprunteur pour obtenir la mensualité totale (capital + intérêts + assurance). En moyenne, l'assurance représente entre 0,1 % et 0,5 % du capital selon le profil." },
  { q: "Pourquoi ma banque me propose une mensualité différente ?", a: "Le calcul présenté ici est théorique. La banque peut ajouter des frais mensuels (tenue de compte, services associés) et peut arrondir différemment. Pour un calcul bancaire exact, demandez votre tableau d'amortissement officiel." },
  { q: "Ce calcul respecte-t-il la règle HCSF 35 % ?", a: "La règle HCSF s'applique sur la mensualité totale (capital + intérêts + assurance) rapportée à vos revenus nets. Notre calculateur chiffre la mensualité — à vous de vérifier qu'elle ne dépasse pas 35 % de vos revenus nets cumulés." },
]

export default function CalculMensualitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <FAQPageSchema questions={faqs} />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[
            { name: "Outils", url: "/outils/calcul-mensualites" },
            { name: "Calcul de mensualités", url: "/outils/calcul-mensualites" },
          ]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Calculateur de mensualités de crédit immobilier
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Calculez en 30 secondes la mensualité de votre crédit immobilier : saisissez le montant, la durée et le taux souhaités, obtenez la mensualité totale (capital + intérêts) et le coût total du crédit. Idéal pour préparer un rendez-vous bancaire ou un projet d'achat.
            </p>
          </header>

          <CreditCalculator />

          <article className="prose prose-lg max-w-none mt-14 prose-a:text-primary prose-headings:text-gray-900">
            <h2>Comment fonctionne notre calculateur</h2>
            <p>
              Notre calculateur utilise la formule des <strong>annuités constantes</strong>, pratiquée par toutes les banques françaises pour les crédits immobiliers : chaque mensualité est identique tout au long du prêt, mais la part capital/intérêts évolue (plus d'intérêts au début, plus de capital en fin de prêt). Le tableau d'<Link href="/glossaire/amortissement">amortissement</Link> annexé à l'offre de prêt détaille cette décomposition mois par mois.
            </p>

            <h2>Que peut-on simuler ?</h2>
            <ul>
              <li><strong>Capital emprunté</strong> : de 10 000 € à 2 000 000 €.</li>
              <li><strong>Durée</strong> : de 5 à 25 ans (plafond HCSF).</li>
              <li><strong>Taux nominal</strong> : taux hors assurance, tel qu'affiché par la banque.</li>
              <li><strong>Assurance emprunteur</strong> : exprimée en % du capital initial.</li>
            </ul>

            <h2>Limites de cet outil</h2>
            <p>
              Ce calcul est <strong>théorique et indicatif</strong>. Il ne remplace pas une simulation bancaire officielle qui inclut :
            </p>
            <ul>
              <li>Les frais de dossier.</li>
              <li>Les frais de garantie (caution ou hypothèque).</li>
              <li>Les éventuelles réductions ou bonifications (domiciliation, client existant).</li>
              <li>Le <Link href="/glossaire/taeg">TAEG</Link> réel (Taux Annuel Effectif Global) qui inclut tous ces frais.</li>
            </ul>
            <p>
              Pour une simulation complète avec TAEG, utilisez notre <Link href="/credit-immobilier/simulation">formulaire de demande de crédit</Link>. Un courtier vous propose une simulation multi-banque sous 24h.
            </p>

            <h2>Autres outils Crédit Plus</h2>
            <ul>
              <li><Link href="/outils/calcul-capacite-emprunt">Calcul de capacité d'emprunt</Link> — combien puis-je emprunter ?</li>
              <li><Link href="/outils/calcul-frais-de-notaire">Calcul des frais de notaire</Link> — ancien vs neuf.</li>
              <li><Link href="/outils/simulation-ptz">Simulation PTZ 2026</Link> — Prêt à Taux Zéro.</li>
              <li><Link href="/outils/calcul-rachat-credit">Calcul de rachat de crédit</Link> — économie potentielle.</li>
            </ul>
          </article>

          <section className="mt-14" aria-labelledby="faq-calc">
            <h2 id="faq-calc" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
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
