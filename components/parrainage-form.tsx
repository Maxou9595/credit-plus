"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Users, Loader2, CheckCircle2, AlertCircle, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function ParrainageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [consent, setConsent] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()

  // Formulaire parrain
  const [parrainNom, setParrainNom] = useState("")
  const [parrainPrenom, setParrainPrenom] = useState("")
  const [parrainTel, setParrainTel] = useState("")
  const [parrainEmail, setParrainEmail] = useState("")

  // Formulaire filleul
  const [filleulNom, setFilleulNom] = useState("")
  const [filleulPrenom, setFilleulPrenom] = useState("")
  const [filleulTel, setFilleulTel] = useState("")
  const [filleulEmail, setFilleulEmail] = useState("")

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
      const formData = {
        parrain: {
          nom: parrainNom,
          prenom: parrainPrenom,
          telephone: parrainTel,
          email: parrainEmail,
        },
        filleul: {
          nom: filleulNom,
          prenom: filleulPrenom,
          telephone: filleulTel,
          email: filleulEmail,
        },
      }

      const response = await fetch("/api/parrainage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitting(false)
        setShowSuccessDialog(true)
      } else {
        throw new Error(data.message || "Une erreur est survenue")
      }
    } catch (error) {
      setIsSubmitting(false)
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue")
      setShowErrorDialog(true)
    }
  }

  const closeDialog = () => {
    setShowSuccessDialog(false)
    setCountdown(5)
    router.push("/")
  }

  const closeErrorDialog = () => {
    setShowErrorDialog(false)
  }

  return (
    <>
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
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <div>
                  <div className="font-medium text-green-800">Vous serez recontacté sous 24h par téléphone</div>
                  <div className="text-green-700 mt-1">
                    Un conseiller Crédit-Plus vous appellera pour confirmer votre parrainage et vous expliquer les
                    prochaines étapes.
                  </div>
                </div>
              </div>
            </div>

            <div>
              Nous avons bien reçu votre demande de parrainage et nous vous remercions de votre confiance. Notre équipe
              va contacter votre filleul dans les plus brefs délais.
            </div>

            <div className="text-sm text-muted-foreground">
              Cette fenêtre se fermera automatiquement dans <span className="font-bold">{countdown}</span> secondes.
            </div>
          </div>

          <DialogFooter>
            <Button onClick={closeDialog} className="w-full">
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
              <a href="tel:+330745885764" className="text-primary font-medium">
                07 45 88 57 64
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

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Informations du parrain */}
        <div className="bg-muted/20 p-6 rounded-lg border border-muted">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-2 rounded-full">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Vos informations (parrain)</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parrainNom">Nom</Label>
              <Input
                id="parrainNom"
                value={parrainNom}
                onChange={(e) => setParrainNom(e.target.value)}
                required
                className="border-muted-foreground/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parrainPrenom">Prénom</Label>
              <Input
                id="parrainPrenom"
                value={parrainPrenom}
                onChange={(e) => setParrainPrenom(e.target.value)}
                required
                className="border-muted-foreground/20"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="parrainTel">Téléphone</Label>
              <Input
                id="parrainTel"
                type="tel"
                value={parrainTel}
                onChange={(e) => setParrainTel(e.target.value)}
                required
                className="border-muted-foreground/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parrainEmail">Email</Label>
              <Input
                id="parrainEmail"
                type="email"
                value={parrainEmail}
                onChange={(e) => setParrainEmail(e.target.value)}
                className="border-muted-foreground/20"
              />
            </div>
          </div>
        </div>

        {/* Informations du filleul */}
        <div className="bg-muted/20 p-6 rounded-lg border border-muted">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-2 rounded-full">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Informations de votre filleul</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="filleulNom">Nom</Label>
              <Input
                id="filleulNom"
                value={filleulNom}
                onChange={(e) => setFilleulNom(e.target.value)}
                required
                className="border-muted-foreground/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="filleulPrenom">Prénom</Label>
              <Input
                id="filleulPrenom"
                value={filleulPrenom}
                onChange={(e) => setFilleulPrenom(e.target.value)}
                required
                className="border-muted-foreground/20"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="filleulTel">Téléphone</Label>
              <Input
                id="filleulTel"
                type="tel"
                value={filleulTel}
                onChange={(e) => setFilleulTel(e.target.value)}
                required
                className="border-muted-foreground/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="filleulEmail">Email</Label>
              <Input
                id="filleulEmail"
                type="email"
                value={filleulEmail}
                onChange={(e) => setFilleulEmail(e.target.value)}
                className="border-muted-foreground/20"
              />
            </div>
          </div>
        </div>

        {/* Consentement */}
        <div className="flex items-start space-x-2 pt-4">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked === true)}
            required
          />
          <Label htmlFor="consent" className="text-sm font-normal">
            J'accepte que mes données et celles de mon filleul soient traitées pour permettre à Crédit-Plus de nous
            contacter. Je confirme avoir obtenu l'accord de mon filleul pour transmettre ses coordonnées.
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
          disabled={isSubmitting || !consent}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Envoi en cours...
            </span>
          ) : (
            "Valider"
          )}
        </Button>
      </form>
    </>
  )
}
