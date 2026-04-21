"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, ChevronDown, MapPin, ArrowRight, Menu, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [showAgencies, setShowAgencies] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setShowAgencies(false)
  }

  return (
    <nav
      className="sticky top-0 z-50 px-4 md:px-6 py-2 backdrop-blur-xl border-b border-primary/30 shadow-lg shadow-primary/10"
      style={{ backgroundColor: "#292929" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="ml-4">
          <Image
            src="/logo.png"
            alt="Crédit Plus"
            width={280}
            height={280}
            className="h-14 md:h-16 w-auto"
            priority
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <a
            href="/temoignages"
            className="flex flex-col items-center gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-yellow-500/30"
          >
            <span className="text-xs font-semibold text-white whitespace-nowrap">Avis Google vérifiés</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
          </a>
          <a href="/#services" className="text-white hover:text-primary transition-all duration-300 font-medium relative group">
            Nos services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <div className="relative">
            <button
              onClick={() => setShowAgencies(!showAgencies)}
              className="flex items-center gap-2 text-white hover:text-primary transition-all duration-300 font-medium relative group py-2"
            >
              Nos agences
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAgencies ? "rotate-180" : ""}`} />
            </button>
            {showAgencies && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowAgencies(false)} />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-gradient-to-br from-[#1a1a1a] to-[#292929] border border-primary/40 rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="p-2">
                    {[
                      { name: "Carignan", sub: "Ardennes (08)", href: "/agences/carignan" },
                      { name: "Partout en France", sub: "Réseau national · À distance", href: "/agences/partout-en-france" },
                    ].map((agency) => (
                      <a
                        key={agency.name}
                        href={agency.href}
                        onClick={() => setShowAgencies(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-primary/20 hover:text-primary transition-all duration-200 group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-base">{agency.name}</div>
                          <div className="text-xs text-white/60">{agency.sub}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <a href="/contact" className="text-white hover:text-primary transition-all duration-300 font-medium relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/demande-credit?type=consumer"
            className="text-white hover:text-primary transition-all duration-300 font-medium px-4 py-2 border-2 border-primary rounded-lg hover:bg-primary/10"
          >
            Simuler mon crédit
          </a>
          <Button variant="outline" size="sm" className="gap-2 bg-primary/10 border-primary/30 hover:bg-primary/20 text-white" asChild>
            <a href="tel:0745885764">
              <Phone className="h-4 w-4" />
              07-81-73-61-29
            </a>
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-primary/10 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#292929] border-b border-primary/30 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <a href="/#services" onClick={closeMobileMenu} className="block text-white hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/10">Nos services</a>
            <a href="/agences/carignan" onClick={closeMobileMenu} className="block text-white hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/10">Agence Carignan</a>
            <a href="/agences/partout-en-france" onClick={closeMobileMenu} className="block text-white hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/10">Partout en France</a>
            <a href="/contact" onClick={closeMobileMenu} className="block text-white hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/10">Contact</a>
            <a href="/demande-credit?type=consumer" onClick={closeMobileMenu} className="block text-center text-white font-medium py-3 px-4 border-2 border-primary rounded-lg hover:bg-primary/10">Simuler mon crédit</a>
            <a href="tel:0745885764" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary/10 border border-primary/30 rounded-lg text-white font-medium">
              <Phone className="h-4 w-4" /> APPELER
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
