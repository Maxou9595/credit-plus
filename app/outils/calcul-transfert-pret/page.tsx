import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { Button } from "@/components/ui/button"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Transfert de prêt immobilier : est-ce avantageux ?",
  description: "Transférer votre prêt d'un bien à un autre : conditions, banques acceptant, économies possibles. Guide 2026.",
  alternates: { canonical: "/outils/calcul-transfert-pret" },
}

const faqs = [
  { q: "Qu'est-ce qu'un transfert de prêt ?", a: "Le transfert de prêt consiste à conserver votre crédit immobilier en cours lors de la vente de votre bien actuel pour financer un nouveau bien. Le prêt suit le titulaire. Cela évite une IRA (car pas de remboursement anticipé) et un rachat (car pas de nouveau prêt). Condition : avoir une clause de transfert dans votre contrat initial." },
  { q: "Toutes les banques acceptent-elles le transfert ?", a: "Non. Seules certaines banques proposent la clause de transfert dès la signature du prêt initial. Les plus ouvertes : BNP Paribas, Caisse d'Épargne, Société Générale, CIC. Si la clause n'est pas dans votre contrat, le transfert n'est pas possible — seul un rachat l'est." },
  { q: "Quand est-ce avantageux ?", a: "Quand votre taux actuel est beaucoup plus bas que le marché (ex. prêt 2021 à 1,10 % vs marché 2026 à 3,25 %). Le transfert vous permet de conserver l'ancien taux. Sans transfert, il faudrait rembourser l'ancien prêt et en souscrire un nouveau plus cher." },
  { q: "Peut-on augmenter le capital lors d'un transfert ?", a: "Oui. Le nouveau bien peut être plus cher : un prêt complémentaire (aux conditions de marché actuelles) s'ajoute à l'ancien. Le prêt transféré garde son taux initial, le prêt complémentaire prend le taux du marché actuel." },
  { q: "Y a-t-il des frais pour le transfert ?", a: "Oui : frais de nouvelle garantie (hypothèque ou caution sur le nouveau bien) et frais de dossier éventuels (500-1 500 €). Mais pas d'IRA, ce qui représente la plus grosse économie dans les prêts anciens à faible taux." },
]

export default function CalculTransfertPretPage() {
  return (
    <>
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Transfert de prêt", url: "/outils/calcul-transfert-pret" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Transfert de prêt immobilier</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vous vendez votre bien et achetez un nouveau logement ? Le transfert de prêt peut être intéressant si vous avez signé un prêt à taux bas. Conditions, limites, alternatives.
            </p>
          </header>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Le principe</h2>
            <p>
              Le transfert de prêt permet de <strong>conserver votre crédit immobilier existant</strong> lors de la vente-achat d'un nouveau bien. Le prêt suit l'emprunteur, qui devient rattaché au nouveau bien en garantie. L'ancien taux est préservé.
            </p>

            <h2>Condition : la clause de transfert</h2>
            <p>
              Le transfert n'est possible que si votre contrat de prêt initial comporte une <strong>clause de transfert</strong>. Relisez votre offre de prêt originale : cherchez les mots « transfert », « transférabilité » ou « portabilité ». Si la clause n'existe pas, le transfert est refusé.
            </p>

            <h2>Quand le transfert est avantageux</h2>
            <p>
              Le calcul est simple : l'écart entre votre taux actuel et le marché doit être assez grand pour que la préservation de l'ancien taux compense les frais de nouvelle garantie.
            </p>
            <ul>
              <li><strong>Exemple gagnant</strong> : prêt de 2021 à 1,10 %, CRD 180 000 €, 18 ans restants. Marché 2026 à 3,25 %. Le transfert fait économiser ≈ 45 000 € d'intérêts sur la durée, pour 3 000 € de frais de nouvelle garantie.</li>
              <li><strong>Exemple perdant</strong> : prêt de 2024 à 3,80 %, CRD 160 000 €, 20 ans restants. Marché 2026 à 3,25 %. Le transfert ne sert à rien : il vaut mieux racheter à 3,25 % et profiter du nouveau taux.</li>
            </ul>

            <h2>Augmenter le capital</h2>
            <p>
              Si le nouveau bien est plus cher, la banque accorde un <strong>prêt complémentaire</strong> aux conditions de marché actuelles. Vous vous retrouvez avec 2 prêts cohabitants :
            </p>
            <ul>
              <li>Le prêt transféré avec son ancien taux bas (ex. 1,10 %).</li>
              <li>Le prêt complémentaire au taux actuel (ex. 3,25 %).</li>
            </ul>
            <p>Cette bi-structure est fréquente et bien acceptée par les banques qui proposent le transfert.</p>

            <h2>Alternatives si pas de clause de transfert</h2>
            <ul>
              <li><strong>Prêt relais</strong> : pour financer le nouveau bien avant la vente de l'ancien. À ne pas confondre avec le transfert.</li>
              <li><strong>Rachat externe</strong> : nouveau prêt à meilleur taux chez une autre banque, avec IRA payée.</li>
              <li><strong>Renégociation interne</strong> : si votre banque accepte de recalibrer votre taux à la baisse.</li>
            </ul>

            <h2>Simuler votre cas</h2>
            <p>
              Pour savoir si le transfert est plus avantageux qu'un rachat dans votre situation, <Link href="/credit-immobilier/simulation">demandez une simulation personnalisée</Link>. Nous comparons les deux scénarios et vous présentons les chiffres nets.
            </p>

            <div className="not-prose my-6 p-6 rounded-2xl bg-primary/5 border border-primary/30 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Votre situation peut justifier un transfert ?</h3>
              <p className="text-gray-600 mb-4">Envoyez-nous votre ancien tableau d'amortissement, nous comparons transfert vs rachat en 48h.</p>
              <Button asChild><Link href="/credit-immobilier/simulation">Demander une comparaison</Link></Button>
            </div>
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
