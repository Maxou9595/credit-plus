import { Button } from "@/components/ui/button"
import Link from "next/link"
import FaqAccordion from "@/components/faq-accordion"
import { Mail, MapPin, Phone, Search } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Barre de menu avec logo */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#1b2123] text-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img src="/images/logo-new.png" alt="Crédit-Plus Logo" className="h-16 -my-1" />
            </Link>
          </div>
          {/* Modifier la barre de menu pour ajouter le menu mobile */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
                Nos offres
              </Link>
              <Link href="/#calculator" className="text-sm font-medium hover:text-primary transition-colors">
                Simulateur
              </Link>
              <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <MobileMenu />
            <Button asChild className="hidden md:flex">
              <Link href="/demande-credit">Demande de crédit</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Foire Aux Questions</h1>
                <p className="text-muted-foreground">
                  Retrouvez les réponses aux questions les plus fréquemment posées sur le crédit et nos services de
                  courtage.
                </p>
              </div>

              <div className="relative mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Rechercher une question..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background"
                  />
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <FaqAccordion />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer avec liens de navigation */}
      <footer className="border-t py-12 bg-[#1b2123] text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link href="/">
                <img src="/images/logo-new.png" alt="Crédit-Plus Logo" className="h-16 mb-4" />
              </Link>
              <p className="text-sm text-muted-foreground">
                Votre partenaire de confiance pour tous vos projets de financement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#calculator"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Simulateur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Nos offres
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parrainage"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Parrainage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demande-credit"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Demande de crédit
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <a href="tel:+330781736129" className="hover:text-primary transition-colors">
                    07 81 73 61 29
                  </a>
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <a href="mailto:ctdax@credit-plus.fr" className="hover:text-primary transition-colors">
                    ctdax@credit-plus.fr
                  </a>
                </li>
                <li className="flex items-start text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                  <span>40 rue maria visseaux, 08110 Carignan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Crédit-Plus. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground">
              ORIAS n°12345678 - Courtier en opérations de banque et services de paiement
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
