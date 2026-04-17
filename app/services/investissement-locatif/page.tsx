import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Building2, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Investissement Locatif | Crédit Plus - Financer votre Patrimoine",
  description: "Financez votre investissement locatif avec Crédit Plus. Nos experts vous accompagnent pour optimiser votre patrimoine immobilier.",
}

export default function InvestissementLocatifPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Investissement Locatif</h1>
              <p className="text-muted-foreground">Optimisez votre patrimoine immobilier</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            L'investissement locatif est une stratégie patrimoniale efficace. Crédit Plus vous aide à financer votre projet dans les meilleures conditions pour maximiser votre rendement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {["Appartement locatif", "Maison locative", "Local commercial", "SCPI", "Loi Pinel", "Déficit foncier"].map((item) => (
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
