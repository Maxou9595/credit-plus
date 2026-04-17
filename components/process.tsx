"use client"

import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Analyse de votre projet",
    description: "Nous étudions votre situation et vos besoins pour définir la meilleure stratégie.",
  },
  {
    number: "02",
    title: "Recherche des meilleures offres",
    description: "Nous comparons plus de 100 banques pour trouver le taux le plus avantageux.",
  },
  {
    number: "03",
    title: "Montage du dossier",
    description: "Nous constituons un dossier solide pour maximiser vos chances d'acceptation.",
  },
  {
    number: "04",
    title: "Signature chez le notaire",
    description: "Nous vous accompagnons jusqu'à la signature finale de votre prêt.",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Un Processus Simple et Efficace</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            4 étapes pour concrétiser votre projet immobilier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative space-y-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                <CheckCircle2 className="h-6 w-6 text-primary mt-2" />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
