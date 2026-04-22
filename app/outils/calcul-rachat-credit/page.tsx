import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { RachatCreditCalc } from "@/components/calculators/rachat-credit-calc"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Calcul de rachat de crédit : économie simulée",
  description: "Simulez le gain d'un rachat de crédit immobilier : nouvelle mensualité, frais (IRA, dossier, garantie), économie nette, ROI.",
  alternates: { canonical: "/outils/calcul-rachat-credit" },
}

const jsonLdTool = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculateur de rachat de crédit — Crédit Plus",
  url: "https://credit-plus.fr/outils/calcul-rachat-credit",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
}

const faqs = [
  { q: "Comment savoir si le rachat est rentable ?", a: "La règle empirique des courtiers : écart de taux ≥ 0,7 point, capital restant dû ≥ 70 000 €, durée restante ≥ 7 ans. Les trois conditions doivent être simultanément remplies pour que l'économie compense largement les frais (IRA + dossier + garantie)." },
  { q: "Quelle est la valeur de l'IRA dans la pratique ?", a: "L'IRA est plafonnée à 3 % du capital restant dû OU 6 mois d'intérêts, selon le plus faible. Sur un prêt à 4 % avec 200 000 € de CRD, l'IRA est plafonnée à min(6 000 € ; 4 000 €) = 4 000 €. Certains prêts (variables, à renégociation interne) excluent toute IRA." },
  { q: "Renégociation interne ou rachat externe ?", a: "La renégociation interne (avenant chez votre banque actuelle) évite l'IRA et les frais de nouvelle garantie. Moins cher mais taux souvent moins bas. Le rachat externe donne accès au meilleur taux du marché mais génère 4 000-8 000 € de frais. Un courtier compare systématiquement les deux options." },
  { q: "Faut-il simuler un rachat à intervalles réguliers ?", a: "Oui, en particulier si le marché baisse. Tous les 6-12 mois, une simulation rapide suffit : il faut juste vérifier que les 3 règles sont remplies. Si oui, une étude courtier se justifie. Si non, on attend." },
  { q: "Mon assurance emprunteur change-t-elle en cas de rachat ?", a: "Oui. Le rachat crée un nouveau crédit, donc un nouveau contrat d'assurance. La loi Lemoine (2022) supprime le questionnaire santé si le montant est ≤ 200 000 € et le remboursement s'achève avant 60 ans. C'est l'occasion idéale pour négocier une délégation externe plus compétitive." },
]

export default function CalculRachatCreditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }} />
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Rachat de crédit", url: "/outils/calcul-rachat-credit" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Calculateur de rachat de crédit</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vaut-il la peine de racheter votre crédit immobilier ? Saisissez vos conditions actuelles et le taux de marché : le calculateur vérifie la règle des 3 et chiffre l'économie nette après frais.
            </p>
          </header>

          <RachatCreditCalc />

          <article className="prose prose-lg max-w-none mt-10 prose-a:text-primary prose-headings:text-gray-900">
            <h2>La règle des 3 expliquée</h2>
            <p>
              Chez les courtiers, un rachat externe est considéré rentable quand trois critères sont simultanément remplis :
            </p>
            <ol>
              <li><strong>Écart de taux ≥ 0,7 point</strong> entre votre taux actuel et le taux de marché.</li>
              <li><strong>Capital restant dû ≥ 70 000 €</strong> pour absorber les frais fixes (dossier, garantie).</li>
              <li><strong>Durée restante ≥ 7 ans</strong> pour accumuler l'économie sur une période suffisante.</li>
            </ol>

            <h2>Détail des frais d'un rachat</h2>
            <ul>
              <li><strong>IRA</strong> (indemnité de remboursement anticipé) — plafonnée à 3 % du CRD ou 6 mois d'intérêts, selon le plus faible.</li>
              <li><strong>Frais de dossier</strong> de la nouvelle banque — 500 à 1 500 €, souvent négociables.</li>
              <li><strong>Frais de nouvelle garantie</strong> — caution Crédit Logement (0,8-1,5 %) ou hypothèque (1-2 %).</li>
              <li><strong>Nouvelle assurance emprunteur</strong> — à requestionner, potentiellement moins chère grâce à la loi Lemoine.</li>
            </ul>

            <h2>Exemples chiffrés</h2>
            <ul>
              <li><strong>Prêt 2023 à 4,20 %, CRD 200 000 €, 22 ans restants → marché 3,15 %</strong>. Économie brute 27 000 €, frais 8 000 €, <strong>économie nette 19 000 €</strong>.</li>
              <li><strong>Prêt 2022 à 1,25 %, CRD 180 000 €, 22 ans restants → marché 3,15 %</strong>. Taux ACTUEL inférieur au marché → rachat inutile.</li>
              <li><strong>Prêt 2020 à 2,40 %, CRD 60 000 €, 12 ans restants → marché 3,15 %</strong>. Règle 2 non remplie (CRD &lt; 70 000 €) → rachat non rentable.</li>
            </ul>

            <h2>Autres outils</h2>
            <ul>
              <li><Link href="/outils/calcul-mensualites">Calcul de mensualités</Link></li>
              <li><Link href="/rachat-de-credit">Guide complet du rachat de crédit</Link></li>
              <li><Link href="/rachat-de-credit/renegociation-pret">Renégociation de prêt</Link></li>
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
