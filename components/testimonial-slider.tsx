"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophie M.",
      role: "Propriétaire à Lyon",
      content:
        "Crédit-Plus a été d'une aide précieuse pour mon premier achat immobilier. Leur équipe a su m'orienter vers la meilleure offre de prêt et m'a accompagnée tout au long du processus. Je recommande vivement leurs services !",
      avatar: "/avatar-woman-1.png",
    },
    {
      id: 2,
      name: "Thomas D.",
      role: "Investisseur immobilier",
      content:
        "En tant qu'investisseur, j'ai apprécié le professionnalisme et la réactivité de Crédit-Plus. Ils ont su négocier des taux très compétitifs pour mes différents projets. Une équipe à l'écoute qui comprend vraiment les enjeux de l'investissement locatif.",
      avatar: "/avatar-man-1.png",
    },
    {
      id: 3,
      name: "Julie R.",
      role: "Primo-accédante",
      content:
        "Malgré un dossier compliqué, Crédit-Plus a réussi à me trouver un financement adapté à ma situation. Leur patience et leur expertise ont fait toute la différence. Je n'aurais jamais pu devenir propriétaire sans leur aide !",
      avatar: "/avatar-woman-2.png",
    },
    {
      id: 4,
      name: "Marc L.",
      role: "Emprunteur à Marseille",
      content:
        "Service impeccable de bout en bout ! J'ai particulièrement apprécié la transparence et les conseils personnalisés. Mon conseiller a pris le temps de m'expliquer toutes les options et m'a aidé à faire le meilleur choix pour mon projet.",
      avatar: "/avatar-man-2.png",
    },
    {
      id: 5,
      name: "Émilie B.",
      role: "Propriétaire à Paris",
      content:
        "Après plusieurs refus de banques, Crédit-Plus a trouvé une solution pour financer mon appartement parisien. Leur expertise du marché local et leurs relations avec les établissements financiers font vraiment la différence.",
      avatar: "/avatar-woman-3.png",
    },
    {
      id: 6,
      name: "Nicolas P.",
      role: "Investisseur locatif",
      content:
        "Déjà mon troisième crédit avec eux et toujours aussi satisfait ! Leur connaissance approfondie des montages financiers pour l'investissement locatif m'a permis d'optimiser mes projets. Une équipe de confiance que je recommande sans hésiter.",
      avatar: "/avatar-man-3.png",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative overflow-hidden bg-white rounded-xl shadow-lg">
      <div className="absolute top-0 left-0 z-10 p-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      <div
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md cursor-pointer hover:bg-white transition-colors"
        onClick={prev}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </div>

      <div
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md cursor-pointer hover:bg-white transition-colors"
        onClick={next}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </div>

      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[current].avatar || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-primary/20"
                  width={96}
                  height={96}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/diverse-group.png"
                    e.currentTarget.onerror = null
                  }}
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-gray-700 text-lg italic mb-4">"{testimonials[current].content}"</blockquote>
                <div className="font-semibold text-gray-900">{testimonials[current].name}</div>
                <div className="text-sm text-gray-500">{testimonials[current].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          />
        ))}
      </div>
    </div>
  )
}
