import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-glow" />

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold text-balance">
          Prêt à Concrétiser
          <span className="block mt-2 text-primary">Votre Projet ?</span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Nos experts vous accompagnent gratuitement pour trouver le meilleur financement adapté à votre situation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
            <a href="/demande-credit?type=consumer">
              Simuler mon crédit
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-transparent" asChild>
            <a href="tel:0745885764">
              <Phone className="h-5 w-5" />
              APPELER
            </a>
          </Button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Réponse sous 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Honoraires au succès</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Sans engagement</span>
          </div>
        </div>
      </div>
    </section>
  )
}
