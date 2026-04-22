import type { Metadata } from "next"
import Link from "next/link"
import { Info, FileCheck, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { Button } from "@/components/ui/button"
import { FAQPageSchema } from "@/components/schemas/faq-page"

export const metadata: Metadata = {
  title: "Attestation de finançabilité : demande en 5 minutes",
  description: "Générez votre attestation de finançabilité Crédit Plus pour rassurer vendeur et agent immobilier. Document opposable.",
  alternates: { canonical: "/outils/attestation-financabilite" },
}

const faqs = [
  { q: "Qu'est-ce qu'une attestation de finançabilité ?", a: "C'est un document remis par un courtier IOBSP (ou une banque) attestant que vous êtes capable de financer le projet immobilier envisagé aux conditions de marché. Elle ne constitue pas une offre de prêt mais elle rassure le vendeur et l'agent immobilier sur votre sérieux." },
  { q: "Est-ce équivalent à un accord de principe bancaire ?", a: "Non. L'accord de principe est une réponse formelle d'une banque particulière, après analyse complète de votre dossier. L'attestation de finançabilité est un document courtier, plus léger mais suffisant pour négocier un compromis." },
  { q: "Combien de temps reste-t-elle valide ?", a: "Généralement 1 à 3 mois. Au-delà, les conditions de marché (taux, règles HCSF) peuvent avoir évolué et l'attestation doit être réémise." },
  { q: "Le vendeur peut-il exiger une attestation bancaire plutôt que courtier ?", a: "Un vendeur peut l'exiger mais ce n'est pas d'usage. L'attestation d'un courtier IOBSP inscrit à l'ORIAS est juridiquement valable. Si le vendeur refuse, un accord de principe bancaire sera nécessaire (2-4 semaines)." },
  { q: "L'attestation engage-t-elle le courtier ?", a: "Elle n'engage pas sur une offre ferme (le courtier ne prête pas d'argent), mais elle engage professionnellement : le courtier certifie avoir analysé le dossier et conclu à sa finançabilité. Un document légèrement opposable en cas de fausse déclaration." },
]

export default function AttestationFinancabilitePage() {
  return (
    <>
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Outils", url: "/outils/calcul-mensualites" }, { name: "Attestation finançabilité", url: "/outils/attestation-financabilite" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Attestation de finançabilité</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Obtenez une attestation PDF signée par Crédit Plus attestant de la finançabilité de votre projet. Document utile pour rassurer vendeur et agent immobilier lors des négociations.
            </p>
          </header>

          <div className="p-8 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-white to-primary/5 text-center mb-10">
            <FileCheck className="h-16 w-16 text-primary mx-auto mb-4" aria-hidden />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Demander votre attestation</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Après une simulation en ligne et un échange rapide avec un courtier (15-20 minutes), vous recevez votre attestation PDF par email dans la journée. Gratuit, sans engagement.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link href="/credit-immobilier/simulation?attestation=1">Obtenir mon attestation <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>À quoi ça sert</h2>
            <ul>
              <li><strong>Rassurer le vendeur</strong> sur votre capacité à concrétiser l'achat.</li>
              <li><strong>Crédibiliser votre offre</strong> face à d'autres acheteurs compétiteurs.</li>
              <li><strong>Accélérer la signature du compromis</strong> : l'agent immobilier a besoin d'être rassuré avant de prendre les offres au sérieux.</li>
              <li><strong>Négocier le prix</strong> : un acheteur "finançable" sera pris plus au sérieux qu'un acheteur sans garantie.</li>
            </ul>

            <h2>Ce que contient l'attestation Crédit Plus</h2>
            <ul>
              <li>Identité de l'emprunteur (ou des co-emprunteurs).</li>
              <li>Montant envisagé du prêt.</li>
              <li>Conditions type (taux, durée, assurance) simulées au marché du jour.</li>
              <li>Confirmation du respect des règles HCSF (35 % d'endettement, durée).</li>
              <li>Banques partenaires sollicitées en analyse préliminaire.</li>
              <li>Signature et numéro ORIAS du courtier.</li>
              <li>Mentions légales et durée de validité (1 à 3 mois).</li>
            </ul>

            <h2>Précisions juridiques</h2>
            <p>
              L'attestation de finançabilité <strong>n'est pas une offre de prêt</strong> au sens de l'article L313-24 du Code de la consommation. Elle n'engage pas la banque mais elle engage le courtier professionnellement. Le courtier atteste avoir analysé le dossier et conclu, sous réserve de confirmation bancaire, à la finançabilité.
            </p>
            <p>
              En cas de fausse déclaration de votre part (revenus, charges, situation), le courtier peut retirer l'attestation. Votre responsabilité peut être engagée vis-à-vis du vendeur en cas d'abandon pour cause non prévue par la condition suspensive de prêt.
            </p>

            <h2>Autres pages utiles</h2>
            <ul>
              <li><Link href="/credit-immobilier/simulation">Simulation complète</Link></li>
              <li><Link href="/outils/calcul-capacite-emprunt">Calcul de capacité d'emprunt</Link></li>
              <li><Link href="/credit-immobilier">Guide crédit immobilier</Link></li>
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
