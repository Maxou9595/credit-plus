import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Rachat de Crédit | Crédit Plus - Réduire vos Mensualités",
  description: "Regroupez vos crédits et réduisez vos mensualités avec Crédit Plus. Nos courtiers trouvent la meilleure solution de rachat de crédit pour votre situation.",
}

export default function RachatDeCreditPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Rachat de Crédit</h1>
              <p className="text-muted-foreground">Regroupez vos crédits, réduisez vos mensualités</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Le rachat de crédit vous permet de regrouper tous vos emprunts en un seul. Résultat : une seule mensualité réduite, un seul interlocuteur, et un budget mieux maîtrisé.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {["Crédits immobiliers", "Crédits à la consommation", "Crédits auto", "Dettes personnelles", "Découverts bancaires", "Prêts travaux"].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-lg border border-primary/10 bg-primary/5">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="gap-2" asChild>
            <a href="/demande-credit?type=consolidation">
              Faire une simulation <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
