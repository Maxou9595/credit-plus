"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
}

export default function ParrainageTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophie M.",
      role: "A parrainé 3 personnes",
      content:
        "J'ai recommandé Crédit-Plus à plusieurs amis qui cherchaient à financer leur achat immobilier. Le processus de parrainage est simple et la prime de 500€ est versée rapidement après la finalisation du crédit. Une belle récompense pour un simple conseil !",
    },
    {
      id: 2,
      name: "Thomas D.",
      role: "A parrainé 2 personnes",
      content:
        "Après avoir été très satisfait de mon propre crédit avec Crédit-Plus, j'ai naturellement recommandé leurs services à mes proches. Le programme de parrainage est vraiment avantageux, et mes filleuls ont également bénéficié d'un excellent accompagnement.",
    },
    {
      id: 3,
      name: "Julie R.",
      role: "A parrainé 1 personne",
      content:
        "J'ai parrainé ma sœur qui cherchait à acheter son premier appartement. Le conseiller l'a contactée rapidement et a trouvé une solution adaptée à sa situation. La prime de parrainage a été un bonus très apprécié !",
    },
    {
      id: 4,
      name: "Marc L.",
      role: "A parrainé 4 personnes",
      content:
        "En tant qu'agent immobilier, je recommande régulièrement Crédit-Plus à mes clients. Leur programme de parrainage est l'un des plus généreux du marché, et la qualité de leur service est constante. Une collaboration gagnant-gagnant !",
    },
    {
      id: 5,
      name: "Philippe B.",
      role: "A parrainé 2 personnes",
      content:
        "Le système de parrainage de Crédit-Plus est vraiment avantageux. J'ai recommandé leurs services à deux amis qui cherchaient à financer leur maison, et nous avons tous été satisfaits du résultat. Les primes sont un bonus appréciable !",
    },
    {
      id: 6,
      name: "Nathalie R.",
      role: "A parrainé 5 personnes",
      content:
        "En tant qu'agent immobilier, je recommande régulièrement Crédit-Plus à mes clients. Le programme de parrainage est généreux et transparent. C'est un excellent moyen de récompenser la fidélité et les recommandations.",
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
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <Quote className="h-10 w-10 text-primary/20" />
              </div>
              <p className="text-lg italic px-4 md:px-10">{testimonials[current].content}</p>
              <div>
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-gray-500">{testimonials[current].role}</p>
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
