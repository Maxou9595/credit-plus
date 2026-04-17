"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Marie L.",
    location: "Carignan",
    rating: 5,
    text: "Excellent service, réponse rapide et taux très avantageux. Je recommande vivement Crédit Plus pour votre projet immobilier.",
    avatar: "/avatar-woman-1.png",
  },
  {
    name: "Thomas B.",
    location: "Dax",
    rating: 5,
    text: "Conseiller disponible et à l'écoute. Notre dossier a été traité en moins de 48h. Merci pour votre professionnalisme.",
    avatar: "/avatar-man-1.png",
  },
  {
    name: "Sophie M.",
    location: "Carignan",
    rating: 5,
    text: "Nous avons obtenu un taux exceptionnel grâce à leur expertise. Le processus était simple et transparent de bout en bout.",
    avatar: "/avatar-woman-2.png",
  },
  {
    name: "Julien R.",
    location: "Dax",
    rating: 5,
    text: "Service impeccable ! Ils ont su trouver la meilleure solution pour notre rachat de crédit. Gain de 300€/mois.",
    avatar: "/avatar-man-2.png",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des centaines de clients nous font confiance pour leurs projets de financement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-primary/10 bg-primary/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
