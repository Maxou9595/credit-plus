"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Users, Gift, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"
import ParrainageTestimonials from "@/components/parrainage-testimonials"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function ParrainagePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()

  // Gestion du compte à rebours et de la redirection
  useEffect(() => {
    if (showSuccessDialog) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            // Redirection vers la page d'accueil après le compte à rebours
            router.push("/")
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [showSuccessDialog, router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Récupérer les données du formulaire
      const formData = new FormData(e.currentTarget)

      // Créer l'objet de données à envoyer
      const data = {
        parrain: {
          nom: formData.get("parrainNom"),
          prenom: formData.get("parrainPrenom"),
          telephone: formData.get("parrainTel"),
          email: formData.get("parrainEmail"),
        },
        filleul: {
          nom: formData.get("filleulNom"),
          prenom: formData.get("filleulPrenom"),
          telephone: formData.get("filleulTel"),
          email: formData.get("filleulEmail"),
        },
      }

      // Envoyer les données à l'API
      const response = await fetch("/api/parrainage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      // Traiter la réponse
      if (response.ok) {
        setIsSubmitting(false)
        setShowSuccessDialog(true)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || "Une erreur est survenue lors de l'envoi du formulaire")
      }
    } catch (error) {
      setIsSubmitting(false)
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue")
      setShowErrorDialog(true)
    }
  }

  const closeSuccessDialog = () => {
    setShowSuccessDialog(false)
    setCountdown(5)
    router.push("/")
  }

  const closeErrorDialog = () => {
    setShowErrorDialog(false)
  }

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
              <Link href="/parrainage" className="text-sm font-medium text-primary transition-colors">
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
        {/* Modale de succès */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <span>Demande de parrainage envoyée avec succès !</span>
              </DialogTitle>
            </DialogHeader>

            <div className="pt-4 space-y-4">
              <p>Notre équipe va contacter votre filleul dans les plus brefs délais.</p>

              <div className="text-sm text-muted-foreground">
                Cette fenêtre se fermera automatiquement dans <span className="font-bold">{countdown}</span> secondes.
              </div>
            </div>

            <DialogFooter>
              <Button onClick={closeSuccessDialog} className="w-full">
                Retourner à l'accueil
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Modale d'erreur */}
        <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <span>Erreur lors de l'envoi</span>
              </DialogTitle>
            </DialogHeader>

            <div className="pt-4 space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <div className="text-red-700">{errorMessage}</div>
              </div>

              <div>
                Vous pouvez également nous contacter directement par téléphone au{" "}
                <a href="tel:+330781736129" className="text-primary font-medium">
                  07 81 73 61 29
                </a>{" "}
                ou par email à{" "}
                <a href="mailto:ctdax@credit-plus.fr" className="text-primary font-medium">
                  ctdax@credit-plus.fr
                </a>
                .
              </div>
            </div>

            <DialogFooter>
              <Button onClick={closeErrorDialog} className="w-full">
                Fermer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Hero Section */}
        <section className="relative py-8 md:py-10 bg-[#1b2123] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 -z-10" />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Programme de Parrainage</h1>
              <div className="bg-gradient-to-r from-primary/20 to-primary p-5 rounded-lg border border-primary/20 mb-4 shadow-lg">
                <p className="text-xl md:text-2xl font-bold">
                  Gagnez <span className="text-white">500€</span> pour chaque parrainage réussi
                </p>
                <p className="mt-2 text-white/80">
                  Aidez vos proches à économiser sur leur crédit immobilier et soyez récompensé
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de parrainage */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Formulaire de parrainage</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Informations du parrain */}
                  <div className="bg-muted/20 p-6 rounded-lg border border-muted">
                    <h3 className="text-xl font-semibold mb-4">Vos informations (parrain)</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="parrainNom" className="block text-sm font-medium">
                          Nom
                        </label>
                        <input
                          id="parrainNom"
                          name="parrainNom"
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="parrainPrenom" className="block text-sm font-medium">
                          Prénom
                        </label>
                        <input
                          id="parrainPrenom"
                          name="parrainPrenom"
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <label htmlFor="parrainTel" className="block text-sm font-medium">
                          Téléphone
                        </label>
                        <input
                          id="parrainTel"
                          name="parrainTel"
                          type="tel"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="parrainEmail" className="block text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="parrainEmail"
                          name="parrainEmail"
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Informations du filleul */}
                  <div className="bg-muted/20 p-6 rounded-lg border border-muted">
                    <h3 className="text-xl font-semibold mb-4">Informations de votre filleul</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="filleulNom" className="block text-sm font-medium">
                          Nom
                        </label>
                        <input
                          id="filleulNom"
                          name="filleulNom"
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="filleulPrenom" className="block text-sm font-medium">
                          Prénom
                        </label>
                        <input
                          id="filleulPrenom"
                          name="filleulPrenom"
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <label htmlFor="filleulTel" className="block text-sm font-medium">
                          Téléphone
                        </label>
                        <input
                          id="filleulTel"
                          name="filleulTel"
                          type="tel"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="filleulEmail" className="block text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="filleulEmail"
                          name="filleulEmail"
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consentement */}
                  <div className="flex items-start space-x-2 pt-4">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="consent" className="text-sm font-normal">
                      J'accepte que mes données et celles de mon filleul soient traitées pour permettre à Crédit-Plus de
                      nous contacter. Je confirme avoir obtenu l'accord de mon filleul pour transmettre ses coordonnées.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md font-medium text-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      "Valider"
                    )}
                  </button>
                </form>

                <div className="mt-8 p-6 bg-muted/20 rounded-lg border border-muted">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-primary" />
                    Prime de Parrainage
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Vous recevrez 500€ pour chaque filleul qui réalise son crédit avec nous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-muted/20 p-6 rounded-lg border border-muted text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">1. Parrainez un proche</h3>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire avec vos coordonnées et celles de votre filleul intéressé par un crédit
                    immobilier.
                  </p>
                </div>

                <div className="bg-muted/20 p-6 rounded-lg border border-muted text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">2. Nous le contactons</h3>
                  <p className="text-muted-foreground">
                    Un conseiller Crédit-Plus prend contact avec votre filleul pour l'accompagner dans son projet
                    immobilier.
                  </p>
                </div>

                <div className="bg-muted/20 p-6 rounded-lg border border-muted text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">3. Recevez votre prime</h3>
                  <p className="text-muted-foreground">
                    Une fois le crédit de votre filleul finalisé, vous recevez votre prime de parrainage de 500€.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Ils ont parrainé et témoignent</h2>
              <ParrainageTestimonials />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>

              <div className="space-y-4">
                <div className="bg-muted/20 p-6 rounded-lg border border-muted">
                  <h3 className="text-xl font-semibold mb-2">Qui peut parrainer ?</h3>
                  <p className="text-muted-foreground">
                    Tout le monde peut parrainer ! Que vous soyez client ou non de Crédit-Plus, vous pouvez parrainer
                    vos proches et recevoir une prime pour chaque parrainage réussi.
                  </p>
                </div>

                <div className="bg-muted/20 p-6 rounded-lg border border-muted">
                  <h3 className="text-xl font-semibold mb-2">Quand vais-je recevoir ma prime ?</h3>
                  <p className="text-muted-foreground">
                    La prime de parrainage est versée après la signature définitive du crédit par votre filleul. Vous
                    serez informé par email dès que votre prime sera disponible.
                  </p>
                </div>

                <div className="bg-muted/20 p-6 rounded-lg border border-muted">
                  <h3 className="text-xl font-semibold mb-2">Y a-t-il une limite au nombre de parrainages ?</h3>
                  <p className="text-muted-foreground">
                    Vous pouvez parrainer jusqu'à 5 personnes par an. Chaque parrainage réussi vous donne droit à une
                    prime de 500€.
                  </p>
                </div>

                <div className="bg-muted/20 p-6 rounded-lg border border-muted">
                  <h3 className="text-xl font-semibold mb-2">
                    Mon filleul doit-il obligatoirement souscrire un crédit ?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, la prime est versée uniquement si votre filleul finalise son crédit immobilier avec
                    Crédit-Plus. La simple prise de contact ne suffit pas pour déclencher le versement de la prime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#1b2123] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Prêt à parrainer vos proches ?</h2>
                <p className="text-xl text-white/80">
                  Aidez vos amis et votre famille à économiser sur leur crédit immobilier et gagnez 500€ par parrainage
                  réussi.
                </p>
                <Button
                  size="lg"
                  className="mt-4 text-lg px-8 py-6 h-auto"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Parrainer maintenant
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
