"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle2, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

// Types pour les données du formulaire
type FormData = {
  projectType: string
  amount: string
  duration: string
  firstName: string
  lastName: string
  email: string
  phone: string
  employmentStatus: string
  monthlyIncome: string
  propertyType?: string
  coApplicant: boolean
  contactTime: string
  consent: boolean
}

// Valeurs initiales
const initialFormData: FormData = {
  projectType: "",
  amount: "",
  duration: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  employmentStatus: "",
  monthlyIncome: "",
  coApplicant: false,
  contactTime: "",
  consent: false,
}

// Modifier l'interface ConversationalFormProps pour ajouter la fonction sendEmailFunction
interface ConversationalFormProps {
  initialProjectType?: string | null
  sendEmailFunction?: (formData: any) => Promise<any>
}

export default function ConversationalForm(props: ConversationalFormProps) {
  const { initialProjectType = null } = props
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [direction, setDirection] = useState(0) // -1 pour précédent, 1 pour suivant
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()
  const [formSubmitUrl, setFormSubmitUrl] = useState("")

  // Initialiser le type de projet si fourni
  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }))
    }

    // Définir l'URL de FormSubmit
    setFormSubmitUrl("https://formsubmit.co/maximeiori08@gmail.com")
  }, [initialProjectType])

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

  // Définition des questions
  const questions = [
    {
      id: "projectType",
      question: "Quel type de crédit recherchez-vous ?",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.projectType}
            onValueChange={(value) => handleChange("projectType", value)}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="mortgage" id="mortgage" />
              <Label htmlFor="mortgage" className="flex-1 cursor-pointer">
                Crédit immobilier
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="consumer" id="consumer" />
              <Label htmlFor="consumer" className="flex-1 cursor-pointer">
                Prêt professionnel
              </Label>
            </div>
          </RadioGroup>
        </div>
      ),
      isValid: () => !!formData.projectType,
    },
    {
      id: "amount",
      question: "Quel est le montant que vous souhaitez emprunter ?",
      component: (
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              id="amount"
              name="amount"
              type="number"
              min="1000"
              placeholder="Ex: 150000"
              value={formData.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
              className="text-lg p-6 text-center"
            />
            <div className="text-center text-sm text-muted-foreground">Montant en euros (€)</div>
          </div>
        </div>
      ),
      isValid: () => !!formData.amount && Number(formData.amount) >= 1000,
    },
    {
      id: "duration",
      question: "Sur quelle durée souhaitez-vous emprunter ?",
      component: (
        <div className="space-y-4">
          <Select value={formData.duration} onValueChange={(value) => handleChange("duration", value)}>
            <SelectTrigger className="text-lg p-6 text-center">
              <SelectValue placeholder="Sélectionnez la durée" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(30)].map((_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1} {i === 0 ? "an" : "ans"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ),
      isValid: () => !!formData.duration,
    },
    {
      id: "propertyType",
      question: "Quel type de bien souhaitez-vous financer ?",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.propertyType || ""}
            onValueChange={(value) => handleChange("propertyType", value)}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="apartment" id="apartment" />
              <Label htmlFor="apartment" className="flex-1 cursor-pointer">
                Appartement
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="house" id="house" />
              <Label htmlFor="house" className="flex-1 cursor-pointer">
                Maison
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="land" id="land" />
              <Label htmlFor="land" className="flex-1 cursor-pointer">
                Terrain
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other" className="flex-1 cursor-pointer">
                Autre
              </Label>
            </div>
          </RadioGroup>
        </div>
      ),
      isValid: () => formData.projectType !== "mortgage" || !!formData.propertyType,
      condition: () => formData.projectType === "mortgage",
    },
    {
      id: "name",
      question: "Comment vous appelez-vous ?",
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Votre prénom"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Votre nom"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
          </div>
        </div>
      ),
      isValid: () => !!formData.firstName && !!formData.lastName,
    },
    {
      id: "contact",
      question: "Comment pouvons-nous vous contacter ?",
      component: (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="contact@credit-plus.fr"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="07 45 88 57 64"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>
      ),
      isValid: () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^[0-9]{10}$/
        return (
          emailRegex.test(formData.email) &&
          (phoneRegex.test(formData.phone.replace(/\s/g, "")) || formData.phone.length >= 10)
        )
      },
    },
    {
      id: "employmentStatus",
      question: "Quelle est votre situation professionnelle ?",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.employmentStatus}
            onValueChange={(value) => handleChange("employmentStatus", value)}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="cdi" id="cdi" />
              <Label htmlFor="cdi" className="flex-1 cursor-pointer">
                CDI
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="cdd" id="cdd" />
              <Label htmlFor="cdd" className="flex-1 cursor-pointer">
                CDD
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="freelance" id="freelance" />
              <Label htmlFor="freelance" className="flex-1 cursor-pointer">
                Indépendant / Freelance
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="business_owner" id="business_owner" />
              <Label htmlFor="business_owner" className="flex-1 cursor-pointer">
                Chef d'entreprise
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="retired" id="retired" />
              <Label htmlFor="retired" className="flex-1 cursor-pointer">
                Retraité
              </Label>
            </div>
          </RadioGroup>
        </div>
      ),
      isValid: () => !!formData.employmentStatus,
    },
    {
      id: "monthlyIncome",
      question: "Quels sont vos revenus mensuels nets ?",
      component: (
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              id="monthlyIncome"
              name="monthlyIncome"
              type="number"
              min="0"
              placeholder="Ex: 2500"
              value={formData.monthlyIncome}
              onChange={(e) => handleChange("monthlyIncome", e.target.value)}
              className="text-lg p-6 text-center"
            />
            <div className="text-center text-sm text-muted-foreground">Montant en euros (€)</div>
          </div>
        </div>
      ),
      isValid: () => !!formData.monthlyIncome && Number(formData.monthlyIncome) > 0,
    },
    {
      id: "coApplicant",
      question: "Faites-vous cette demande avec un co-emprunteur ?",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.coApplicant ? "yes" : "no"}
            onValueChange={(value) => handleChange("coApplicant", value === "yes")}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="yes" id="coApplicant-yes" />
              <Label htmlFor="coApplicant-yes" className="flex-1 cursor-pointer">
                Oui
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="no" id="coApplicant-no" />
              <Label htmlFor="coApplicant-no" className="flex-1 cursor-pointer">
                Non
              </Label>
            </div>
          </RadioGroup>
        </div>
      ),
      isValid: () => formData.coApplicant !== undefined,
    },
    {
      id: "contactTime",
      question: "Quand préférez-vous être contacté(e) ?",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={formData.contactTime}
            onValueChange={(value) => handleChange("contactTime", value)}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="morning" id="morning" />
              <Label htmlFor="morning" className="flex-1 cursor-pointer">
                Le matin (9h - 12h)
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="afternoon" id="afternoon" />
              <Label htmlFor="afternoon" className="flex-1 cursor-pointer">
                L'après-midi (14h - 17h)
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="evening" id="evening" />
              <Label htmlFor="evening" className="flex-1 cursor-pointer">
                En fin de journée (17h - 19h)
              </Label>
            </div>
            <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="anytime" id="anytime" />
              <Label htmlFor="anytime" className="flex-1 cursor-pointer">
                N'importe quand
              </Label>
            </div>
          </RadioGroup>
        </div>
      ),
      isValid: () => !!formData.contactTime,
    },
    {
      id: "consent",
      question: "Dernière étape avant de soumettre votre demande",
      component: (
        <div className="space-y-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-medium mb-4">Récapitulatif de votre demande</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Type de crédit :</span>{" "}
                {formData.projectType === "mortgage" && "Crédit immobilier"}
                {formData.projectType === "consumer" && "Prêt professionnel"}
                {formData.projectType === "consolidation" && "Rachat de crédit"}
                {formData.projectType === "insurance" && "Assurance de prêt"}
              </li>
              <li>
                <span className="text-muted-foreground">Montant :</span> {Number(formData.amount).toLocaleString()} €
              </li>
              <li>
                <span className="text-muted-foreground">Durée :</span> {formData.duration}{" "}
                {Number(formData.duration) === 1 ? "an" : "ans"}
              </li>
              {formData.projectType === "mortgage" && formData.propertyType && (
                <li>
                  <span className="text-muted-foreground">Type de bien :</span>{" "}
                  {formData.propertyType === "apartment" && "Appartement"}
                  {formData.propertyType === "house" && "Maison"}
                  {formData.propertyType === "land" && "Terrain"}
                  {formData.propertyType === "other" && "Autre"}
                </li>
              )}
              <li>
                <span className="text-muted-foreground">Nom :</span> {formData.firstName} {formData.lastName}
              </li>
              <li>
                <span className="text-muted-foreground">Contact :</span> {formData.email} / {formData.phone}
              </li>
            </ul>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleChange("consent", checked === true)}
              required
            />
            <Label htmlFor="consent" className="text-sm font-normal">
              J'accepte que mes données soient traitées pour permettre à Crédit-Plus de me contacter. Je comprends que
              je peux retirer mon consentement à tout moment.
            </Label>
          </div>
        </div>
      ),
      isValid: () => formData.consent === true,
    },
  ]

  // Filtrer les questions en fonction des conditions
  const filteredQuestions = questions.filter((q) => !q.condition || q.condition())

  // Gestion des changements dans les champs du formulaire
  const handleChange = (name: string, value: any) => {
    // Pour les champs numériques, s'assurer que la valeur est traitée comme une chaîne
    if (name === "amount" || name === "duration" || name === "monthlyIncome") {
      value = value.toString()
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Navigation entre les étapes
  const nextStep = () => {
    if (currentStep < filteredQuestions.length - 1) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  // Modifier la fonction handleSubmit pour s'assurer que toutes les données sont envoyées
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)

    // Si une fonction d'envoi d'email personnalisée est fournie, l'utiliser
    if (props.sendEmailFunction) {
      e.preventDefault() // Empêcher le comportement par défaut dans ce cas

      // Préparer les données du formulaire - INCLURE TOUTES LES DONNÉES
      const emailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        amount: formData.amount,
        duration: formData.duration,
        propertyType: formData.propertyType,
        employmentStatus: formData.employmentStatus,
        monthlyIncome: formData.monthlyIncome,
        coApplicant: formData.coApplicant,
        contactTime: formData.contactTime,
        comments: "Demande via formulaire conversationnel",
        // Ajouter un timestamp pour référence
        submittedAt: new Date().toISOString(),
        // Ajouter un identifiant unique pour cette demande
        requestId: `REQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      }

      // Enregistrer les données dans la console pour débogage
      console.log("Données envoyées au serveur:", emailData)

      // Envoyer les données via la fonction personnalisée
      props
        .sendEmailFunction(emailData)
        .then((result) => {
          console.log("Résultat de l'envoi:", result)
          setIsSubmitting(false)
          setShowSuccessDialog(true)
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi:", error)
          setIsSubmitting(false)
          setErrorMessage("Une erreur est survenue lors de l'envoi du formulaire.")
          setShowErrorDialog(true)
        })
    } else {
      // Comportement par défaut - utiliser FormSubmit
      // Nous afficherons quand même la boîte de dialogue de succès après un court délai
      setTimeout(() => {
        setIsSubmitting(false)
        setShowSuccessDialog(true)
      }, 1500)
    }
  }

  // Variants pour l'animation
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  // Composant pour l'indicateur de progression
  const ProgressIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm text-muted-foreground">
          Question {currentStep + 1} sur {filteredQuestions.length}
        </div>
        <div className="text-sm font-medium">{Math.round(((currentStep + 1) / filteredQuestions.length) * 100)}%</div>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / filteredQuestions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  )

  const closeErrorDialog = () => {
    setShowErrorDialog(false)
  }

  const closeSuccessDialog = () => {
    setShowSuccessDialog(false)
    setCountdown(5)
    router.push("/")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      action="https://formsubmit.co/maximeiori08@gmail.com"
      method="POST"
    >
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
              <a href="tel:+330745885764" className="text-primary font-medium">
                07 45 88 57 64
              </a>{" "}
              ou par email à{" "}
              <a href="mailto:contact@credit-plus.fr" className="text-primary font-medium">
                contact@credit-plus.fr
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

      {/* Champs FormSubmit cachés */}
      <input type="hidden" name="_subject" value="Nouvelle demande de crédit - Crédit-Plus" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />

      <ProgressIndicator />

      <div className="relative">
        {/* Navigation buttons above the question */}
        <div className="flex justify-between mb-4">
          <div>
            {currentStep > 0 && (
              <Button type="button" variant="outline" onClick={prevStep} className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
            )}
          </div>
          <div>
            {currentStep < filteredQuestions.length - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="flex items-center"
                disabled={!filteredQuestions[currentStep].isValid()}
              >
                Suivant <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90"
                disabled={isSubmitting || !filteredQuestions[currentStep].isValid()}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            )}
          </div>
        </div>

        {/* Question and form content */}
        <div className="min-h-[350px] relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <h3 className="text-xl font-bold mb-6">{filteredQuestions[currentStep].question}</h3>
              {filteredQuestions[currentStep].component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </form>
  )
}
