"use client"

import { Card } from "@/components/ui/card"
import { Home, Building2, TrendingUp, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Crédit Immobilier",
    description: "Achat de résidence principale ou secondaire avec les meilleurs taux du marché.",
    href: "/credit-immobilier",
  },
  {
    icon: Building2,
    title: "Investissement Locatif",
    description: "Optimisez votre patrimoine avec des solutions de financement adaptées.",
    href: "/investissement-locatif",
  },
  {
    icon: TrendingUp,
    title: "Rachat de Crédit",
    description: "Regroupez vos crédits pour réduire vos mensualités et simplifier votre gestion.",
    href: "/rachat-de-credit",
  },
  {
    icon: Shield,
    title: "Assurance Emprunteur",
    description: "Protégez votre investissement avec une assurance adaptée à votre profil.",
    href: "/assurance-emprunteur",
  },
]

export function Services() {
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
    <section ref={sectionRef} id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Nos Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Des solutions sur mesure pour tous vos projets immobiliers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card
                className={`p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-700 hover:scale-[1.02] group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
