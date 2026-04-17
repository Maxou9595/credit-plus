import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Star, Quote } from "lucide-react"

export const metadata = {
  title: "Avis Clients | Crédit Plus - Courtier en Crédit Immobilier",
  description:
    "Découvrez les avis de nos clients satisfaits. Crédit Plus vous accompagne dans vos projets de financement avec expertise et réactivité.",
}

const testimonials = [
  { name: "Marie L.", location: "Carignan", rating: 5, date: "Mars 2025", text: "Excellent service, réponse rapide et taux très avantageux. Je recommande vivement Crédit Plus pour votre projet immobilier. Nous avons obtenu un taux de 2.85% pour notre résidence principale !" },
  { name: "Thomas B.", location: "Dax", rating: 5, date: "Février 2025", text: "Conseiller disponible et à l'écoute. Notre dossier a été traité en moins de 48h. Merci pour votre professionnalisme et votre réactivité tout au long du processus." },
  { name: "Sophie M.", location: "Carignan", rating: 5, date: "Janvier 2025", text: "Nous avons obtenu un taux exceptionnel grâce à leur expertise. Le processus était simple et transparent de bout en bout. Je recommande à 100% !" },
  { name: "Julien R.", location: "Dax", rating: 5, date: "Décembre 2024", text: "Service impeccable ! Ils ont su trouver la meilleure solution pour notre rachat de crédit. Gain de 300€/mois sur nos mensualités. Fantastique !" },
  { name: "Claire D.", location: "Carignan", rating: 5, date: "Novembre 2024", text: "Très professionnel, à l'écoute de nos besoins. Notre projet d'investissement locatif a été financé dans les meilleures conditions. Merci encore !" },
  { name: "Antoine P.", location: "Dax", rating: 5, date: "Octobre 2024", text: "Premier achat immobilier et je ne savais pas par où commencer. Crédit Plus m'a guidé pas à pas. Résultat : meilleur taux que ce que la banque proposait !" },
]

export default function TemoignagesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              Avis Google vérifiés
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ce que disent nos clients</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des centaines de clients nous font confiance pour leurs projets de financement immobilier.
            </p>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="ml-2 text-lg font-semibold">5/5</span>
              <span className="ml-1 text-muted-foreground">({testimonials.length}+ avis)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl border border-primary/10 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.location}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{t.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
