import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calculator,
  ChevronRight,
  Clock,
  Coins,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  PieChart,
  ShieldCheck,
  Umbrella,
} from "lucide-react"
import Link from "next/link"
import CreditCalculator from "@/components/credit-calculator"
import GoogleReviews from "@/components/google-reviews"
import ContactForm from "@/components/contact-form"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Barre de menu avec logo */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#1b2123] text-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/logo-new.png"
                alt="Crédit-Plus Logo"
                className="h-16 -my-1"
                width={160}
                height={64}
                loading="eager"
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <Link href="/#calculator" className="text-sm font-medium hover:text-primary transition-colors">
                Simulateur
              </Link>
              <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
                Nos offres
              </Link>
              <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/parrainage" className="text-sm font-medium hover:text-primary transition-colors">
                Parrainage
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
        {/* Hero Section avec nouvelle image de famille recevant les clés */}
        <section className="relative py-12 md:py-20 overflow-hidden bg-[#1b2123] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 -z-10" />
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col text-left order-2 lg:order-1">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Obtenez votre crédit sans perdre de <span className="text-primary">PLUS</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" asChild>
                  <Link href="/demande-credit">
                    Demander un crédit <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="#calculator">Simuler mon prêt</Link>
                </Button>
              </div>
            </div>
            <div className="relative mt-0 mb-8 lg:mt-0 lg:mb-0 order-1 lg:order-2">
              <img
                src="/images/family-receiving-keys-2.png"
                alt="Famille recevant les clés de leur nouvelle maison"
                className="rounded-lg shadow-2xl w-full object-cover h-[300px] md:h-[350px] lg:h-[400px]"
                width={600}
                height={400}
                loading="eager"
                style={{ maxWidth: "100%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1b2123]/80 via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Simulez votre crédit</h2>
              <p className="text-center text-muted-foreground mb-8">
                Estimez vos mensualités en fonction du montant emprunté, de la durée et du taux d'intérêt.
              </p>
              <CreditCalculator />
            </div>
          </div>
        </section>

        {/* Services Section - Ajout de l'assurance de prêt */}
        <section id="services" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Nos services de courtage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/demande-credit?type=mortgage" className="block">
                <Card className="bg-background hover:shadow-lg transition-all hover:translate-y-[-5px] cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                      <Coins className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Crédit immobilier</h3>
                    <p className="text-muted-foreground">
                      Financement pour l'achat de votre résidence principale, secondaire ou investissement locatif.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/demande-credit?type=consolidation" className="block">
                <Card className="bg-background hover:shadow-lg transition-all hover:translate-y-[-5px] cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                      <PieChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Rachat de crédit</h3>
                    <p className="text-muted-foreground">
                      Regroupez vos crédits en cours pour alléger vos mensualités et optimiser votre budget.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/demande-credit?type=consumer" className="block">
                <Card className="bg-background hover:shadow-lg transition-all hover:translate-y-[-5px] cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                      <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Prêt professionnel</h3>
                    <p className="text-muted-foreground">
                      Financez vos projets personnels, travaux, véhicules ou autres besoins ponctuels.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/demande-credit?type=insurance" className="block">
                <Card className="bg-background hover:shadow-lg transition-all hover:translate-y-[-5px] cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                      <Umbrella className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Assurance de prêt</h3>
                    <p className="text-muted-foreground">
                      Protégez votre emprunt avec une assurance adaptée à votre profil et économisez jusqu'à 50% sur vos
                      cotisations.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section id="avantages" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir Crédit-Plus ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Rapidité</h3>
                <p className="text-muted-foreground">
                  Réponse rapide à votre demande et accompagnement efficace tout au long du processus.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Sécurité</h3>
                <p className="text-muted-foreground">
                  Vos données sont protégées et nous travaillons uniquement avec des établissements financiers agréés.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Conseil personnalisé</h3>
                <p className="text-muted-foreground">
                  Un conseiller dédié qui comprend vos besoins et vous propose les meilleures solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                  <Coins className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Taux avantageux</h3>
                <p className="text-muted-foreground">
                  Nous négocions pour vous les meilleures conditions auprès de nos partenaires bancaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section - Remplace la section témoignages */}
        <section id="reviews" className="py-20 bg-[#1b2123] text-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Avis clients</h2>
            <GoogleReviews />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
                <p className="text-muted-foreground mb-8">
                  Vous avez un projet de financement ? Remplissez le formulaire ci-dessous et un conseiller vous
                  contactera dans les plus brefs délais.
                </p>
                <ContactForm />
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-background p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Informations de contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Téléphone</h4>
                        <p className="text-muted-foreground">07 81 73 61 29</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">ctdax@credit-plus.fr</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Adresse</h4>
                        <p className="text-muted-foreground">40 rue maria visseaux, 08110 Carignan</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-medium mb-2">Horaires d'ouverture</h4>
                    <p className="text-muted-foreground">Lundi - Vendredi: 9h00 - 18h00</p>
                    <p className="text-muted-foreground">Samedi: Sur rendez-vous</p>
                  </div>
                </div>
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
                <img
                  src="/images/logo-new.png"
                  alt="Crédit-Plus Logo"
                  className="h-16 mb-4"
                  width={160}
                  height={64}
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
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
