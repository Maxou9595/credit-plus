"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { CheckCircle2, Phone, AlertCircle } from "lucide-react"

export default function ContactForm() {
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

  // Fonction pour formater le montant avec des espaces comme séparateurs de milliers
  const formatAmount = (value: string): string => {
    // Supprimer tous les caractères non numériques
    const numericValue = value.replace(/\D/g, "")

    // Si la valeur est vide, retourner une chaîne vide
    if (!numericValue) return ""

    // Formater le nombre avec des espaces comme séparateurs de milliers
    return Number(numericValue).toLocaleString("fr-FR")
  }

  // Gestionnaire pour le changement du montant
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAmount(formatAmount(value))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = {
        firstName,
        lastName,
        email,
        phone,
        projectType,
        amount,
        message,
      }

      const response = await fetch("/api/contact", {
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

  const [projectType, setProjectType] = useState<string>("")
  const [amount, setAmount] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  return (
    <>
      {/* Modale de succès */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <span>Demande envoyée avec succès !</span>
            </DialogTitle>
          </DialogHeader>

          <div className="pt-4 space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <div>
                  <div className="font-medium text-green-800">Vous serez recontacté sous 24h par téléphone</div>
                  <div className="text-green-700 mt-1">
                    Un conseiller Crédit-Plus vous appellera pour discuter de votre projet et vous proposer les
                    meilleures solutions de financement.
                  </div>
                </div>
              </div>
            </div>

            <div>
              Nous avons bien reçu votre demande et nous vous remercions de votre confiance. Notre équipe va étudier
              votre dossier dans les plus brefs délais.
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Prénom</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              name="firstName"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Nom</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              name="lastName"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              name="phone"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType">Type de projet</Label>
          <Select value={projectType} onValueChange={setProjectType} name="projectType">
            <SelectTrigger id="projectType">
              <SelectValue placeholder="Sélectionnez votre projet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mortgage">Crédit immobilier</SelectItem>
              <SelectItem value="consumer">Prêt professionnel</SelectItem>
              <SelectItem value="consolidation">Rachat de crédit</SelectItem>
              <SelectItem value="professional">Crédit professionnel</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Montant souhaité (€)</Label>
          <div className="relative">
            <Input
              id="amount"
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Ex: 150 000"
              className="pr-8"
              name="amount"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">€</span>
          </div>
          <p className="text-xs text-muted-foreground">Entrez le montant sans décimales</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Décrivez votre projet en quelques mots..."
            className="min-h-[100px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
        </div>

        <div className="flex items-start space-x-2">
          <input type="checkbox" id="consent" className="mt-1" required />
          <Label htmlFor="consent" className="text-sm font-normal">
            J'accepte que mes données soient traitées pour permettre à Crédit-Plus de me contacter. Pour en savoir plus
            sur la gestion de vos données et vos droits, consultez notre politique de confidentialité.
          </Label>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </Button>
      </form>
    </>
  )
}
