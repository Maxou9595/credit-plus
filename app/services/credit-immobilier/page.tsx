import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Home, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Crédit Immobilier | Crédit Plus - Courtier en Prêt Immobilier",
  description: "Obtenez le meilleur taux pour votre crédit immobilier avec Crédit Plus. Achat résidence principale, secondaire ou investissement locatif.",
}

export default function CreditImmobilierPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Crédit Immobilier</h1>
              <p className="text-muted-foreground">Achat résidence principale, secondaire ou investissement</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Crédit Plus vous accompagne dans l'obtention de votre prêt immobilier aux meilleures conditions du marché. Nos courtiers négocient pour vous auprès de nos partenaires bancaires pour obtenir le taux le plus avantageux.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {["Résidence principale", "Résidence secondaire", "Investissement locatif", "VEFA (neuf)", "Terrain + construction", "Prêt relais"].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-lg border border-primary/10 bg-primary/5">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="gap-2" asChild>
            <a href="/demande-credit?type=mortgage">
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
