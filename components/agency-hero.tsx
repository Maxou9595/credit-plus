"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface AgencyHeroProps {
  city: string
  title: string
  description: string
}

export function AgencyHero({ city, title, description }: AgencyHeroProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200/50">
              <span className="text-sm font-semibold text-gray-700">TAUX DU MOIS :</span>
              <span className="text-lg font-bold text-yellow-600">2.90%</span>
              <span className="text-sm font-medium text-primary">à {city}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Votre crédit
            </span>
            <span className="block mt-2 text-foreground">sans perdre de TIME</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-pretty">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/demande-credit?type=consumer">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Simuler mon crédit
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="tel:0781736129">
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-transparent">
                <Phone className="h-5 w-5" />
                APPELER
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
