"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MapPin, ChevronDown, Menu, X, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAgencies, setShowAgencies] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setShowAgencies(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #ffffff 0%, #fff5f5 50%, #fff0f0 100%)" }}>
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-500 ${
          isScrolled
            ? "py-1.5 backdrop-blur-xl border-b border-primary/30 shadow-lg shadow-primary/10"
            : "py-2 backdrop-blur-md border-b border-primary/20"
        }`}
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="relative">
            <a href="/">
              <Image
                src="/logo.png"
                alt="Crédit Plus - Courtier en Prêt Immobilier"
                width={280}
                height={280}
                className={`relative transition-all duration-500 ${isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"} w-auto`}
                priority
              />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a
              href="/temoignages"
              className="flex flex-col items-center gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-yellow-500/30 hover:border-yellow-500/50"
            >
              <span className="text-xs font-semibold text-white whitespace-nowrap">Avis Google vérifiés</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </a>
            <a
              href="/#services"
              className="text-white hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Nos services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <div className="relative">
              <button
                onClick={() => setShowAgencies(!showAgencies)}
                className="flex items-center gap-2 text-white hover:text-primary transition-all duration-300 font-medium relative group py-2"
              >
                Nos agences
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${showAgencies ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              {showAgencies && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowAgencies(false)} />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 z-50">
                    <div className="p-2 space-y-1">
                      {[
                        { href: "/agences/carignan", name: "Carignan", sub: "Ardennes (08)" },
                        { href: "/agences/partout-en-france", name: "Partout en France", sub: "Réseau national · À distance" },
                      ].map((ag) => (
                        <a
                          key={ag.href}
                          href={ag.href}
                          onClick={() => setShowAgencies(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-base">{ag.name}</div>
                            <div className="text-xs text-white/60">{ag.sub}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <a
              href="/contact"
              className="text-white hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/demande-credit?type=consumer"
              className="text-white hover:text-primary transition-all duration-300 font-medium px-4 py-2 border-2 border-primary rounded-lg hover:bg-primary/10"
            >
              Simuler mon crédit
            </a>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-primary/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-white"
            >
              <Phone className="h-4 w-4" />
              07 45 88 57 64
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1e1e1e] border-b border-primary/30 shadow-xl animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-6 space-y-4">
              <a
                href="/temoignages"
                onClick={closeMobileMenu}
                className="flex flex-col items-center gap-2 w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-yellow-500/30"
              >
                <span className="text-sm font-semibold text-white">Avis Google vérifiés</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </a>
              <a
                href="/#services"
                onClick={closeMobileMenu}
                className="block text-white hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-primary/10"
              >
                Nos services
              </a>
              <div>
                <button
                  onClick={() => setShowAgencies(!showAgencies)}
                  className="flex items-center justify-between w-full text-white hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-primary/10"
                >
                  Nos agences
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${showAgencies ? "rotate-180" : ""}`}
                  />
                </button>
                {showAgencies && (
                  <div className="mt-2 ml-4 space-y-2">
                    {[
                      { href: "/agences/carignan", name: "Carignan", sub: "Ardennes (08)" },
                      { href: "/agences/partout-en-france", name: "Partout en France", sub: "Réseau national · À distance" },
                    ].map((ag) => (
                      <a
                        key={ag.href}
                        href={ag.href}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      >
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-semibold">{ag.name}</div>
                          <div className="text-xs text-white/60">{ag.sub}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="/contact"
                onClick={closeMobileMenu}
                className="block text-white hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-primary/10"
              >
                Contact
              </a>
              <a
                href="/demande-credit?type=consumer"
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-primary transition-all duration-300 font-medium py-3 px-4 border-2 border-primary rounded-lg hover:bg-primary/10 text-center"
              >
                Simuler mon crédit
              </a>
              <a
                href="tel:0745885764"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary/10 border border-primary/30 hover:bg-primary/20 rounded-lg text-gray-800 font-medium transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                APPELER
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-32 md:pt-36 pb-16 text-center">
        <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Votre crédit
            </span>
            <span className="block mt-2 text-gray-900">sans perdre de TIME</span>
          </h1>

          <div className="inline-flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/40 via-primary/40 to-yellow-500/40 rounded-lg blur-sm opacity-60 group-hover:opacity-80 transition duration-300" />
              <div className="relative px-4 md:px-5 py-2 md:py-2.5 bg-gray-100 rounded-lg border border-yellow-500/20 shadow-xl backdrop-blur-sm">
                <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">
                  TAUX DU MOIS : <span className="text-yellow-500 font-bold">2.90%</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8">
            <Button
              size="lg"
              className="gap-2 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto"
              asChild
            >
              <a href="/demande-credit?type=consumer">
                Simuler mon crédit
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent border-gray-300 text-gray-700 hover:border-primary hover:text-primary w-full sm:w-auto"
              asChild
            >
              <a href="tel:0745885764">
                <Phone className="h-5 w-5" />
                APPELER
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 pt-5 text-xs md:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>100% gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Réponse en 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
