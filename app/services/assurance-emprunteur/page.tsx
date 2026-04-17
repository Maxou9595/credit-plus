import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Shield, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Assurance Emprunteur | Crédit Plus - Protégez votre Prêt",
  description: "Économisez jusqu'à 50% sur votre assurance emprunteur avec Crédit Plus. Délégation d'assurance, résiliation, meilleure garantie.",
}

export default function AssuranceEmprunteurPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Assurance Emprunteur</h1>
              <p className="text-muted-foreground">Économisez jusqu'à 50% sur vos cotisations</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            L'assurance emprunteur protège votre famille en cas de décès, invalidité ou incapacité de travail. Grâce à la délégation d'assurance, vous n'êtes pas obligé de souscrire celle de votre banque — et vous pouvez économiser considérablement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {["Décès / PTIA", "Invalidité permanente", "Incapacité temporaire", "Perte d'emploi", "Délégation d'assurance", "Résiliation loi Lemoine"].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-lg border border-primary/10 bg-primary/5">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="gap-2" asChild>
            <a href="/demande-credit?type=insurance">
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
