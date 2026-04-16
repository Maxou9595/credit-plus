"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { ChevronRight, ChevronLeft, Check, Upload, FileText, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

// Types pour les données du formulaire
type FormData = {
  // Étape 1: Informations personnelles
  firstName: string
  lastName: string
  email: string
  phone: string
  birthDate: string
  address: string
  postalCode: string
  city: string

  // Étape 2: Projet de financement
  projectType: string
  amount: string
  duration: string
  propertyType?: string
  propertyAddress?: string
  propertyValue?: string

  // Étape 3: Situation professionnelle et financière
  employmentStatus: string
  employmentSince: string
  monthlyIncome: string
  additionalIncome: string
  currentLoans: string
  coApplicant: boolean
  coApplicantIncome?: string

  // Étape 4: Documents
  idDocument: boolean
  proofOfAddress: boolean
  payslips: boolean
  taxNotice: boolean
  bankStatements: boolean

  // Autres
  comments: string
  consent: boolean
}

// Valeurs initiales
const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: "",
  address: "",
  postalCode: "",
  city: "",

  projectType: "",
  amount: "",
  duration: "",

  employmentStatus: "",
  employmentSince: "",
  monthlyIncome: "",
  additionalIncome: "0",
  currentLoans: "0",
  coApplicant: false,

  idDocument: false,
  proofOfAddress: false,
  payslips: false,
  taxNotice: false,
  bankStatements: false,

  comments: "",
  consent: false,
}

export default function CreditApplicationForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = 5

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Gestion des changements pour les Select
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Gestion des changements pour les Checkbox
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  // Navigation entre les étapes
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Ajouter un timestamp et un identifiant unique
      const dataToSend = {
        ...formData,
        submittedAt: new Date().toISOString(),
        requestId: `REQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      }

      // Enregistrer les données dans la console pour débogage
      console.log("Données complètes envoyées au serveur:", dataToSend)

      // Envoyer les données à l'API
      const response = await fetch("/api/credit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })

      const data = await response.json()

      if (response.ok) {
        // Afficher un message de succès
        toast({
          title: "Demande envoyée",
          description:
            "Votre demande de crédit a été envoyée avec succès. Un conseiller vous contactera dans les plus brefs délais.",
        })

        // Réinitialiser le formulaire et revenir à l'étape 1
        setFormData(initialFormData)
        setCurrentStep(1)

        // Rediriger vers la page de remerciement après 2 secondes
        setTimeout(() => {
          router.push("/merci")
        }, 2000)
      } else {
        throw new Error(data.message || "Une erreur est survenue lors de l'envoi de votre demande")
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error)

      // Afficher un message d'erreur
      toast({
        title: "Erreur",
        description:
          error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi de votre demande",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Composant pour l'indicateur de progression
  const ProgressIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-full w-8 h-8 text-sm font-medium
              ${
                currentStep > index + 1
                  ? "bg-primary text-white"
                  : currentStep === index + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-600"
              }`}
          >
            {currentStep > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
          </div>
        ))}
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>Informations</span>
        <span>Projet</span>
        <span>Situation</span>
        <span>Documents</span>
        <span>Confirmation</span>
      </div>
    </div>
  )

  // Composant pour le téléchargement de fichiers
  const FileUploadField = ({ label, id }: { label: string; id: string }) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
        <p className="text-sm text-gray-500">Glissez-déposez votre fichier ici ou</p>
        <Button variant="outline" size="sm" className="mt-2">
          Parcourir
          <input type="file" className="hidden" id={id} />
        </Button>
      </div>
    </div>
  )

  // Composant pour afficher un document téléchargé (simulation)
  const DocumentItem = ({ name }: { name: string }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
      <div className="flex items-center">
        <FileText className="h-5 w-5 text-primary mr-2" />
        <span className="text-sm">{name}</span>
      </div>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <Trash2 className="h-4 w-4 text-gray-500" />
      </Button>
    </div>
  )

  // Rendu conditionnel des étapes du formulaire
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-bold mb-6">Informations personnelles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="birthDate">Date de naissance *</Label>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="address">Adresse *</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="postalCode">Code postal *</Label>
                <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Ville *</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
              </div>
            </div>
          </>
        )

      case 2:
        return (
          <>
            <h3 className="text-xl font-bold mb-6">Votre projet de financement</h3>

            <div className="space-y-2 mb-6">
              <Label htmlFor="projectType">Type de projet *</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleSelectChange("projectType", value)}>
                <SelectTrigger id="projectType">
                  <SelectValue placeholder="Sélectionnez votre projet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mortgage">Crédit immobilier</SelectItem>
                  <SelectItem value="consumer">Crédit à la consommation</SelectItem>
                  <SelectItem value="consolidation">Rachat de crédit</SelectItem>
                  <SelectItem value="professional">Crédit professionnel</SelectItem>
                  <SelectItem value="insurance">Assurance de prêt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Montant souhaité (€) *</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  min="1000"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Durée souhaitée (années) *</Label>
                <Select value={formData.duration} onValueChange={(value) => handleSelectChange("duration", value)}>
                  <SelectTrigger id="duration">
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
            </div>

            {formData.projectType === "mortgage" && (
              <>
                <div className="space-y-2 mb-6">
                  <Label htmlFor="propertyType">Type de bien *</Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => handleSelectChange("propertyType", value)}
                  >
                    <SelectTrigger id="propertyType">
                      <SelectValue placeholder="Sélectionnez le type de bien" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Appartement</SelectItem>
                      <SelectItem value="house">Maison</SelectItem>
                      <SelectItem value="land">Terrain</SelectItem>
                      <SelectItem value="commercial">Local commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="propertyAddress">Adresse du bien (si connue)</Label>
                  <Input
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="propertyValue">Valeur estimée du bien (€)</Label>
                  <Input
                    id="propertyValue"
                    name="propertyValue"
                    type="number"
                    min="0"
                    value={formData.propertyValue || ""}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
          </>
        )

      case 3:
        return (
          <>
            <h3 className="text-xl font-bold mb-6">Votre situation professionnelle et financière</h3>

            <div className="space-y-2 mb-6">
              <Label htmlFor="employmentStatus">Situation professionnelle *</Label>
              <Select
                value={formData.employmentStatus}
                onValueChange={(value) => handleSelectChange("employmentStatus", value)}
              >
                <SelectTrigger id="employmentStatus">
                  <SelectValue placeholder="Sélectionnez votre situation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cdi">CDI</SelectItem>
                  <SelectItem value="cdd">CDD</SelectItem>
                  <SelectItem value="freelance">Indépendant / Freelance</SelectItem>
                  <SelectItem value="business_owner">Chef d'entreprise</SelectItem>
                  <SelectItem value="retired">Retraité</SelectItem>
                  <SelectItem value="unemployed">Sans emploi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {["cdi", "cdd"].includes(formData.employmentStatus) && (
              <div className="space-y-2 mb-6">
                <Label htmlFor="employmentSince">Date d'embauche *</Label>
                <Input
                  id="employmentSince"
                  name="employmentSince"
                  type="date"
                  value={formData.employmentSince}
                  onChange={handleChange}
                  required={["cdi", "cdd"].includes(formData.employmentStatus)}
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">Revenus mensuels nets (€) *</Label>
                <Input
                  id="monthlyIncome"
                  name="monthlyIncome"
                  type="number"
                  min="0"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalIncome">Revenus complémentaires (€)</Label>
                <Input
                  id="additionalIncome"
                  name="additionalIncome"
                  type="number"
                  min="0"
                  value={formData.additionalIncome}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="currentLoans">Mensualités de crédits en cours (€)</Label>
              <Input
                id="currentLoans"
                name="currentLoans"
                type="number"
                min="0"
                value={formData.currentLoans}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="coApplicant"
                  checked={formData.coApplicant}
                  onCheckedChange={(checked) => handleCheckboxChange("coApplicant", checked === true)}
                />
                <Label htmlFor="coApplicant">Je fais cette demande avec un co-emprunteur</Label>
              </div>
            </div>

            {formData.coApplicant && (
              <div className="space-y-2 mb-6">
                <Label htmlFor="coApplicantIncome">Revenus mensuels nets du co-emprunteur (€)</Label>
                <Input
                  id="coApplicantIncome"
                  name="coApplicantIncome"
                  type="number"
                  min="0"
                  value={formData.coApplicantIncome || ""}
                  onChange={handleChange}
                />
              </div>
            )}
          </>
        )

      case 4:
        return (
          <>
            <h3 className="text-xl font-bold mb-6">Documents justificatifs</h3>
            <p className="text-muted-foreground mb-6">
              Pour nous permettre d'étudier votre demande, merci de préparer les documents suivants. Vous pourrez les
              télécharger ou les envoyer ultérieurement à votre conseiller.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="idDocument"
                  checked={formData.idDocument}
                  onCheckedChange={(checked) => handleCheckboxChange("idDocument", checked === true)}
                />
                <Label htmlFor="idDocument">Pièce d'identité (carte d'identité, passeport)</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="proofOfAddress"
                  checked={formData.proofOfAddress}
                  onCheckedChange={(checked) => handleCheckboxChange("proofOfAddress", checked === true)}
                />
                <Label htmlFor="proofOfAddress">Justificatif de domicile (moins de 3 mois)</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="payslips"
                  checked={formData.payslips}
                  onCheckedChange={(checked) => handleCheckboxChange("payslips", checked === true)}
                />
                <Label htmlFor="payslips">3 derniers bulletins de salaire</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="taxNotice"
                  checked={formData.taxNotice}
                  onCheckedChange={(checked) => handleCheckboxChange("taxNotice", checked === true)}
                />
                <Label htmlFor="taxNotice">Dernier avis d'imposition</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bankStatements"
                  checked={formData.bankStatements}
                  onCheckedChange={(checked) => handleCheckboxChange("bankStatements", checked === true)}
                />
                <Label htmlFor="bankStatements">3 derniers relevés bancaires</Label>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Vous pouvez également télécharger vos documents maintenant (facultatif) :
              </p>

              <div className="space-y-4">
                <FileUploadField label="Pièce d'identité" id="upload-id" />
                <FileUploadField label="Justificatif de domicile" id="upload-address" />
                <FileUploadField label="Bulletins de salaire" id="upload-payslips" />
              </div>
            </div>
          </>
        )

      case 5:
        return (
          <>
            <h3 className="text-xl font-bold mb-6">Récapitulatif de votre demande</h3>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Informations personnelles</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Nom complet:</span>
                      <p>
                        {formData.firstName} {formData.lastName}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>
                      <p>{formData.email}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Téléphone:</span>
                      <p>{formData.phone}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Date de naissance:</span>
                      <p>{formData.birthDate}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-muted-foreground">Adresse:</span>
                      <p>
                        {formData.address}, {formData.postalCode} {formData.city}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Projet de financement</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Type de projet:</span>
                      <p>
                        {formData.projectType === "mortgage" && "Crédit immobilier"}
                        {formData.projectType === "consumer" && "Crédit à la consommation"}
                        {formData.projectType === "consolidation" && "Rachat de crédit"}
                        {formData.projectType === "professional" && "Crédit professionnel"}
                        {formData.projectType === "insurance" && "Assurance de prêt"}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Montant souhaité:</span>
                      <p>{Number.parseInt(formData.amount).toLocaleString()} €</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Durée:</span>
                      <p>
                        {formData.duration} {Number.parseInt(formData.duration) === 1 ? "an" : "ans"}
                      </p>
                    </div>
                    {formData.projectType === "mortgage" && formData.propertyType && (
                      <div>
                        <span className="text-muted-foreground">Type de bien:</span>
                        <p>
                          {formData.propertyType === "apartment" && "Appartement"}
                          {formData.propertyType === "house" && "Maison"}
                          {formData.propertyType === "land" && "Terrain"}
                          {formData.propertyType === "commercial" && "Local commercial"}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Situation financière</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Situation professionnelle:</span>
                      <p>
                        {formData.employmentStatus === "cdi" && "CDI"}
                        {formData.employmentStatus === "cdd" && "CDD"}
                        {formData.employmentStatus === "freelance" && "Indépendant / Freelance"}
                        {formData.employmentStatus === "business_owner" && "Chef d'entreprise"}
                        {formData.employmentStatus === "retired" && "Retraité"}
                        {formData.employmentStatus === "unemployed" && "Sans emploi"}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Revenus mensuels:</span>
                      <p>{Number.parseInt(formData.monthlyIncome).toLocaleString()} €</p>
                    </div>
                    {Number.parseInt(formData.additionalIncome) > 0 && (
                      <div>
                        <span className="text-muted-foreground">Revenus complémentaires:</span>
                        <p>{Number.parseInt(formData.additionalIncome).toLocaleString()} €</p>
                      </div>
                    )}
                    {Number.parseInt(formData.currentLoans) > 0 && (
                      <div>
                        <span className="text-muted-foreground">Mensualités de crédits en cours:</span>
                        <p>{Number.parseInt(formData.currentLoans).toLocaleString()} €</p>
                      </div>
                    )}
                    {formData.coApplicant && formData.coApplicantIncome && (
                      <div>
                        <span className="text-muted-foreground">Revenus du co-emprunteur:</span>
                        <p>{Number.parseInt(formData.coApplicantIncome).toLocaleString()} €</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-2 mt-8">
              <Label htmlFor="comments">Commentaires ou précisions supplémentaires</Label>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Informations complémentaires sur votre projet..."
                className="min-h-[100px]"
              />
            </div>

            <div className="flex items-start space-x-2 mt-6">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleCheckboxChange("consent", checked === true)}
                required
              />
              <Label htmlFor="consent" className="text-sm font-normal">
                J'accepte d'être rappelé par Crédit-Plus.
              </Label>
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ProgressIndicator />

      {renderStep()}

      <div className="flex justify-between mt-10">
        {currentStep > 1 ? (
          <Button type="button" variant="outline" onClick={prevStep} className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
          </Button>
        ) : (
          <div></div>
        )}

        {currentStep < totalSteps ? (
          <Button type="button" onClick={nextStep} className="flex items-center">
            Suivant <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting || !formData.consent}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
          </Button>
        )}
      </div>
    </form>
  )
}
