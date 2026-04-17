"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  Home,
  Building2,
  Hammer,
  MapPin,
  Euro,
  Calendar,
  FileText,
} from "lucide-react"

type FormData = {
  // Étape 1
  type_bien: string
  projet_autre?: string
  etat_bien: string
  usage_bien: string
  usage_precisions?: string
  stade_projet: string
  duree_pret: string
  cp_bien: string
  // Étape 2
  prix_bien: string
  montant_travaux: string
  apport: string
  // Étape 3
  situation_logement: string
  proprio_2_ans?: string
  credits_en_cours: string
  mensualites_credits?: string
  // Étape 4
  etat_civil: string
  nb_enfants: string
  // Étape 5
  pro_profession: string
  pro_profession_precisions?: string
  pro_contrat: string
  pro_anciennetee?: string
  pro_revenu_net: string
  pro_primes_annuelles: string
  pro_autres_revenus: string
  pro_autres_charges: string
  // Étape 6
  co_present: string
  co_civilite?: string
  co_nom?: string
  co_prenom?: string
  co_naissance?: string
  co_telephone?: string
  co_profession?: string
  co_profession_precisions?: string
  co_contrat?: string
  co_anciennetee?: string
  co_revenu_net?: string
  co_primes_annuelles?: string
  co_autres_revenus?: string
  co_autres_charges?: string
  // Étape 7 (formerly step 8)
  civilite: string
  nom: string
  prenom: string
  naissance: string
  telephone: string
  email: string
  adresse: string
  cp: string
  ville: string
  consent_rgpd: boolean
  consent_partenaire: string
}

export function CreditSimulatorForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showAutresOptions, setShowAutresOptions] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    type_bien: "",
    etat_bien: "",
    usage_bien: "",
    stade_projet: "",
    duree_pret: "20",
    cp_bien: "",
    prix_bien: "",
    montant_travaux: "0",
    apport: "0",
    situation_logement: "",
    credits_en_cours: "",
    mensualites_credits: "",
    etat_civil: "",
    nb_enfants: "0",
    pro_profession: "",
    pro_contrat: "",
    pro_revenu_net: "",
    pro_primes_annuelles: "0",
    pro_autres_revenus: "0",
    pro_autres_charges: "0",
    co_present: "",
    co_civilite: "",
    co_nom: "",
    co_prenom: "",
    co_naissance: "",
    co_telephone: "",
    co_profession: "",
    co_contrat: "",
    co_anciennetee: "",
    co_revenu_net: "",
    co_primes_annuelles: "",
    co_autres_revenus: "",
    co_autres_charges: "",
    civilite: "",
    nom: "",
    prenom: "",
    naissance: "",
    telephone: "",
    email: "",
    adresse: "",
    cp: "",
    ville: "",
    consent_rgpd: false,
    consent_partenaire: "non",
  })

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAutresOption = (option: string) => {
    if (option === "rachat_credit" || option === "assurance_pret") {
      window.location.href = "/contact"
    } else {
      window.location.href = "/partenaire"
    }
  }

  const calculateBesoinFinancement = () => {
    const prix = Number.parseFloat(formData.prix_bien) || 0
    const travaux = Number.parseFloat(formData.montant_travaux) || 0
    const apport = Number.parseFloat(formData.apport) || 0
    return prix + travaux - apport
  }

  const nextStep = () => {
    if (step < 7) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    console.log("[v0] Form submitted:", formData)

    try {
      const response = await fetch("https://getform.io/f/bejexlga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("[v0] Form successfully sent to Getform")
      } else {
        console.error("[v0] Error sending form to Getform:", response.statusText)
      }
    } catch (error) {
      console.error("[v0] Error sending form to Getform:", error)
    }
    // </CHANGE>

    setIsSubmitted(true)
  }

  // The useEffect hook must be placed here, outside the conditional rendering block.
  // This ensures it's called consistently on every render, satisfying hook rules.
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        window.location.href = "/"
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted]) // Depend on isSubmitted

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [step])

  if (isSubmitted) {
    const besoin = calculateBesoinFinancement()

    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 mb-4 shadow-lg">
            <Check className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Merci pour votre demande !
          </h1>
          <p className="text-lg text-muted-foreground">
            Nos experts analysent votre dossier et vous recontacteront sous 24h
          </p>
          <p className="text-sm text-muted-foreground">Vous serez redirigé vers l'accueil dans quelques secondes...</p>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-xl space-y-4 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Récapitulatif</p>
            </div>
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-muted-foreground">Type de bien</span>
                <span className="font-semibold">{formData.type_bien}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-muted-foreground">Code postal</span>
                <span className="font-semibold">{formData.cp_bien}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border-2 border-primary/20">
                <span className="text-foreground font-medium">Besoin financé estimé</span>
                <span className="font-bold text-xl text-primary">
                  {besoin.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-muted-foreground">Durée</span>
                <span className="font-semibold">{formData.duree_pret} ans</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="h-5 w-5" />
              Parler à un conseiller
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
            Simuler mon crédit
          </h1>
          <p className="text-muted-foreground mb-8">Étape {step} sur 7</p>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between gap-1 md:gap-2 mb-3">
              {[
                { num: 1, label: "Projet" },
                { num: 2, label: "Montant" },
                { num: 3, label: "Logement" },
                { num: 4, label: "Foyer" },
                { num: 5, label: "Emploi" },
                { num: 6, label: "Co-emprunteur" },
                { num: 7, label: "Contact" },
              ].map((s) => (
                <div key={s.num} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`h-2 w-full rounded-full transition-all duration-300 ${
                      s.num === step
                        ? "bg-primary shadow-lg shadow-primary/50"
                        : s.num < step
                          ? "bg-primary/70"
                          : "bg-gray-200"
                    }`}
                  />
                  <span
                    className={`text-xs hidden md:block transition-colors ${
                      s.num <= step ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border border-border rounded-2xl p-6 md:p-10 shadow-xl">
              {/* Étape 1 */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Votre projet</h2>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Type de bien *</Label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {[
                        { value: "maison", label: "Maison", icon: Home },
                        { value: "appartement", label: "Appartement", icon: Building2 },
                        { value: "terrain_construction", label: "Terrain + Construction", icon: Hammer },
                        { value: "autres", label: "Autres", icon: FileText },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            updateFormData("type_bien", option.value)
                            setShowAutresOptions(option.value === "autres")
                          }}
                          className={`p-4 border-2 rounded-xl transition-all hover:border-primary hover:shadow-md ${
                            formData.type_bien === option.value
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-border bg-white"
                          }`}
                        >
                          <option.icon
                            className={`h-8 w-8 mx-auto mb-2 ${
                              formData.type_bien === option.value ? "text-primary" : "text-muted-foreground"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              formData.type_bien === option.value ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {showAutresOptions && (
                    <div className="space-y-3 p-6 bg-primary/5 border-2 border-primary/20 rounded-xl">
                      <Label className="text-base font-semibold">Sélectionnez votre besoin *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: "rachat_credit", label: "Rachat de crédit", redirect: "/contact" },
                          { value: "assurance_pret", label: "Assurance de prêt", redirect: "/contact" },
                          { value: "assurance_vie", label: "Assurance vie", redirect: "alpha-assurance.fr" },
                          {
                            value: "assurance_auto_moto",
                            label: "Assurance auto-moto",
                            redirect: "alpha-assurance.fr",
                          },
                          {
                            value: "assurance_habitation",
                            label: "Assurance habitation",
                            redirect: "alpha-assurance.fr",
                          },
                          { value: "mutuelle_sante", label: "Mutuelle santé", redirect: "alpha-assurance.fr" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleAutresOption(option.value)}
                            className="p-4 border-2 border-border bg-white rounded-xl transition-all hover:border-primary hover:shadow-md hover:bg-primary/5 text-left"
                          >
                            <span className="text-sm font-medium text-foreground">{option.label}</span>
                            <ArrowRight className="h-4 w-4 text-primary inline-block ml-2" />
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Cliquez sur une option pour être redirigé vers le service approprié
                      </p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <Label className="text-base font-semibold">État du bien *</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "ancien", label: "Ancien" },
                        { value: "neuf", label: "Neuf" },
                        { value: "vefa", label: "VEFA" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateFormData("etat_bien", option.value)}
                          className={`p-4 border-2 rounded-xl transition-all hover:border-primary ${
                            formData.etat_bien === option.value
                              ? "border-primary bg-primary/5 font-semibold"
                              : "border-border bg-white"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">VEFA = Vente en l'État Futur d'Achèvement</p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Usage *</Label>
                    <RadioGroup value={formData.usage_bien} onValueChange={(v) => updateFormData("usage_bien", v)}>
                      {[
                        { value: "residence_principale", label: "Résidence principale" },
                        { value: "residence_secondaire", label: "Résidence secondaire" },
                        { value: "investissement", label: "Investissement" },
                        { value: "autre", label: "Autre" },
                      ].map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value} className="font-normal cursor-pointer flex-1">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {formData.usage_bien === "autre" && (
                      <Input
                        placeholder="Précisez l'usage"
                        value={formData.usage_precisions || ""}
                        onChange={(e) => updateFormData("usage_precisions", e.target.value)}
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Stade du projet *</Label>
                    <RadioGroup value={formData.stade_projet} onValueChange={(v) => updateFormData("stade_projet", v)}>
                      {[
                        { value: "promesse_signee", label: "Promesse signée" },
                        { value: "nego_avancee", label: "Négociation avancée" },
                        { value: "recherche_active", label: "Recherche active" },
                        { value: "info", label: "Information" },
                      ].map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value} className="font-normal cursor-pointer flex-1">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duree" className="text-base font-semibold flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Durée de prêt *
                      </Label>
                      <Select value={formData.duree_pret} onValueChange={(v) => updateFormData("duree_pret", v)}>
                        <SelectTrigger id="duree" className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 21 }, (_, i) => i + 10).map((year) => (
                            <SelectItem key={year} value={String(year)}>
                              {year} ans
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cp_bien" className="text-base font-semibold flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Code postal du bien *
                      </Label>
                      <Input
                        id="cp_bien"
                        placeholder="75001"
                        maxLength={5}
                        value={formData.cp_bien}
                        onChange={(e) => updateFormData("cp_bien", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 2 */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Euro className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Montant & apport</h2>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prix_bien" className="text-base font-semibold">
                      Prix du bien (€) *
                    </Label>
                    <Input
                      id="prix_bien"
                      type="number"
                      placeholder="250000"
                      value={formData.prix_bien}
                      onChange={(e) => updateFormData("prix_bien", e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travaux" className="text-base font-semibold">
                      Travaux envisagés (€)
                    </Label>
                    <Input
                      id="travaux"
                      type="number"
                      placeholder="0"
                      value={formData.montant_travaux}
                      onChange={(e) => updateFormData("montant_travaux", e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="apport" className="text-base font-semibold">
                      Apport personnel (€)
                    </Label>
                    <Input
                      id="apport"
                      type="number"
                      placeholder="0"
                      value={formData.apport}
                      onChange={(e) => updateFormData("apport", e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-6 shadow-lg">
                    <p className="text-sm text-muted-foreground mb-2">Besoin à financer estimé</p>
                    <p className="text-3xl md:text-4xl font-bold text-primary">
                      {calculateBesoinFinancement().toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                    </p>
                  </div>
                </div>
              )}

              {/* Étape 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Logement actuel & situation</h2>

                  <div className="space-y-2">
                    <Label>Vous êtes *</Label>
                    <RadioGroup
                      value={formData.situation_logement}
                      onValueChange={(v) => updateFormData("situation_logement", v)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="proprietaire" id="proprio" />
                        <Label htmlFor="proprio" className="font-normal cursor-pointer">
                          Propriétaire
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="locataire" id="locataire" />
                        <Label htmlFor="locataire" className="font-normal cursor-pointer">
                          Locataire
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="loge_gratuitement" id="loge" />
                        <Label htmlFor="loge" className="font-normal cursor-pointer">
                          Logé gratuitement
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.situation_logement !== "proprietaire" && (
                    <div className="space-y-2">
                      <Label>Avez-vous été propriétaire de votre RP au cours des 2 dernières années ? *</Label>
                      <RadioGroup
                        value={formData.proprio_2_ans}
                        onValueChange={(v) => updateFormData("proprio_2_ans", v)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="oui" id="proprio_oui" />
                          <Label htmlFor="proprio_oui" className="font-normal cursor-pointer">
                            Oui
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="non" id="proprio_non" />
                          <Label htmlFor="proprio_non" className="font-normal cursor-pointer">
                            Non
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Avez-vous des crédits en cours ? *</Label>
                    <RadioGroup
                      value={formData.credits_en_cours}
                      onValueChange={(v) => updateFormData("credits_en_cours", v)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oui" id="credits_oui" />
                        <Label htmlFor="credits_oui" className="font-normal cursor-pointer">
                          Oui
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non" id="credits_non" />
                        <Label htmlFor="credits_non" className="font-normal cursor-pointer">
                          Non
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.credits_en_cours === "oui" && (
                    <div className="space-y-2 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                      <Label htmlFor="mensualites_credits" className="text-base font-semibold">
                        Mensualité(s) totale mensuelle (€) *
                      </Label>
                      <Input
                        id="mensualites_credits"
                        type="number"
                        placeholder="500"
                        value={formData.mensualites_credits || ""}
                        onChange={(e) => updateFormData("mensualites_credits", e.target.value)}
                        className="h-12 text-lg"
                      />
                      <p className="text-xs text-muted-foreground">
                        Indiquez le montant total de vos mensualités de crédit en cours
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Étape 4 */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">État civil & foyer</h2>

                  <div className="space-y-2">
                    <Label>Vous êtes *</Label>
                    <RadioGroup value={formData.etat_civil} onValueChange={(v) => updateFormData("etat_civil", v)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="celibataire" id="celibataire" />
                        <Label htmlFor="celibataire" className="font-normal cursor-pointer">
                          Célibataire
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="marie_pacse" id="marie" />
                        <Label htmlFor="marie" className="font-normal cursor-pointer">
                          Marié(e) / Pacsé(e)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="concubin" id="concubin" />
                        <Label htmlFor="concubin" className="font-normal cursor-pointer">
                          Concubin(e)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="separe" id="separe" />
                        <Label htmlFor="separe" className="font-normal cursor-pointer">
                          Séparé(e)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="divorce" id="divorce" />
                        <Label htmlFor="divorce" className="font-normal cursor-pointer">
                          Divorcé(e)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="veuf" id="veuf" />
                        <Label htmlFor="veuf" className="font-normal cursor-pointer">
                          Veuf(ve)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nb_enfants">Nombre d'enfant(s) *</Label>
                    <Select value={formData.nb_enfants} onValueChange={(v) => updateFormData("nb_enfants", v)}>
                      <SelectTrigger id="nb_enfants">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4plus">4 ou plus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Étape 5 */}
              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Emploi & revenus</h2>
                  <p className="text-sm text-muted-foreground">Emprunteur principal</p>

                  <div className="space-y-2">
                    <Label htmlFor="profession">Profession *</Label>
                    <Select value={formData.pro_profession} onValueChange={(v) => updateFormData("pro_profession", v)}>
                      <SelectTrigger id="profession">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employe_ouvrier">Employé / Ouvrier</SelectItem>
                        <SelectItem value="fonctionnaire">Fonctionnaire</SelectItem>
                        <SelectItem value="cadre">Cadre</SelectItem>
                        <SelectItem value="retraite">Retraité</SelectItem>
                        <SelectItem value="profession_liberale">Profession libérale</SelectItem>
                        <SelectItem value="enseignant">Enseignant</SelectItem>
                        <SelectItem value="artisan">Artisan</SelectItem>
                        <SelectItem value="commercant">Commerçant</SelectItem>
                        <SelectItem value="chef_entreprise">Chef d'entreprise</SelectItem>
                        <SelectItem value="etudiant">Étudiant</SelectItem>
                        <SelectItem value="agriculteur">Agriculteur</SelectItem>
                        <SelectItem value="sans_profession">Sans profession</SelectItem>
                        <SelectItem value="recherche_emploi">Recherche d'emploi</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    {formData.pro_profession === "autre" && (
                      <Input
                        placeholder="Précisez"
                        value={formData.pro_profession_precisions || ""}
                        onChange={(e) => updateFormData("pro_profession_precisions", e.target.value)}
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contrat">Type de contrat *</Label>
                    <Select value={formData.pro_contrat} onValueChange={(v) => updateFormData("pro_contrat", v)}>
                      <SelectTrigger id="contrat">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cdi">CDI</SelectItem>
                        <SelectItem value="cdd">CDD</SelectItem>
                        <SelectItem value="interim">Intérim</SelectItem>
                        <SelectItem value="independant">Indépendant</SelectItem>
                        <SelectItem value="retraite">Retraite</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.pro_contrat !== "retraite" && formData.pro_contrat !== "independant" && (
                    <div className="space-y-2">
                      <Label htmlFor="anciennete">Ancienneté chez l'employeur actuel *</Label>
                      <Select
                        value={formData.pro_anciennetee}
                        onValueChange={(v) => updateFormData("pro_anciennetee", v)}
                      >
                        <SelectTrigger id="anciennete">
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<1an">Moins d'1 an</SelectItem>
                          <SelectItem value="1">1 an</SelectItem>
                          <SelectItem value="2">2 ans</SelectItem>
                          <SelectItem value="3">3 ans</SelectItem>
                          <SelectItem value="4">4 ans</SelectItem>
                          <SelectItem value="5plus">5 ans ou plus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="revenu">Revenu net mensuel avant impôt (€) *</Label>
                    <Input
                      id="revenu"
                      type="number"
                      placeholder="2500"
                      value={formData.pro_revenu_net}
                      onChange={(e) => updateFormData("pro_revenu_net", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primes">Primes annuelles (€)</Label>
                    <Input
                      id="primes"
                      type="number"
                      placeholder="0"
                      value={formData.pro_primes_annuelles}
                      onChange={(e) => updateFormData("pro_primes_annuelles", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="autres_revenus">Autres revenus mensuels (€)</Label>
                    <Input
                      id="autres_revenus"
                      type="number"
                      placeholder="0"
                      value={formData.pro_autres_revenus}
                      onChange={(e) => updateFormData("pro_autres_revenus", e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">Allocations, loyers perçus...</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="autres_charges">Autres charges mensuelles (€)</Label>
                    <Input
                      id="autres_charges"
                      type="number"
                      placeholder="0"
                      value={formData.pro_autres_charges}
                      onChange={(e) => updateFormData("pro_autres_charges", e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">Pensions versées, loyers résidence secondaire...</p>
                  </div>
                </div>
              )}

              {/* Étape 6 */}
              {step === 6 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Co-emprunteur</h2>

                  <div className="space-y-2">
                    <Label>Avez-vous un co-emprunteur ? *</Label>
                    <RadioGroup value={formData.co_present} onValueChange={(v) => updateFormData("co_present", v)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oui" id="co_oui" />
                        <Label htmlFor="co_oui" className="font-normal cursor-pointer">
                          Oui
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non" id="co_non" />
                        <Label htmlFor="co_non" className="font-normal cursor-pointer">
                          Non
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.co_present === "oui" && (
                    <>
                      <div className="border-t pt-6 space-y-6">
                        <h3 className="text-lg font-semibold text-foreground">Identité du co-emprunteur</h3>

                        <div className="space-y-2">
                          <Label>Civilité *</Label>
                          <RadioGroup
                            value={formData.co_civilite}
                            onValueChange={(v) => updateFormData("co_civilite", v)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="mme" id="co_mme" />
                              <Label htmlFor="co_mme" className="font-normal cursor-pointer">
                                Mme
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="mr" id="co_mr" />
                              <Label htmlFor="co_mr" className="font-normal cursor-pointer">
                                Mr
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="co_nom">Nom *</Label>
                            <Input
                              id="co_nom"
                              value={formData.co_nom || ""}
                              onChange={(e) => updateFormData("co_nom", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="co_prenom">Prénom *</Label>
                            <Input
                              id="co_prenom"
                              value={formData.co_prenom || ""}
                              onChange={(e) => updateFormData("co_prenom", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="co_naissance">Date de naissance *</Label>
                          <Input
                            id="co_naissance"
                            type="date"
                            value={formData.co_naissance || ""}
                            onChange={(e) => updateFormData("co_naissance", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="co_telephone">Téléphone *</Label>
                          <Input
                            id="co_telephone"
                            type="tel"
                            placeholder="06 12 34 56 78"
                            value={formData.co_telephone || ""}
                            onChange={(e) => updateFormData("co_telephone", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="border-t pt-6 space-y-6">
                        <h3 className="text-lg font-semibold text-foreground">Emploi & revenus du co-emprunteur</h3>

                        <div className="space-y-2">
                          <Label htmlFor="co_profession">Profession *</Label>
                          <Select
                            value={formData.co_profession}
                            onValueChange={(v) => updateFormData("co_profession", v)}
                          >
                            <SelectTrigger id="co_profession">
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="employe_ouvrier">Employé / Ouvrier</SelectItem>
                              <SelectItem value="fonctionnaire">Fonctionnaire</SelectItem>
                              <SelectItem value="cadre">Cadre</SelectItem>
                              <SelectItem value="retraite">Retraité</SelectItem>
                              <SelectItem value="profession_liberale">Profession libérale</SelectItem>
                              <SelectItem value="enseignant">Enseignant</SelectItem>
                              <SelectItem value="artisan">Artisan</SelectItem>
                              <SelectItem value="commercant">Commerçant</SelectItem>
                              <SelectItem value="chef_entreprise">Chef d'entreprise</SelectItem>
                              <SelectItem value="etudiant">Étudiant</SelectItem>
                              <SelectItem value="agriculteur">Agriculteur</SelectItem>
                              <SelectItem value="sans_profession">Sans profession</SelectItem>
                              <SelectItem value="recherche_emploi">Recherche d'emploi</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          {formData.co_profession === "autre" && (
                            <Input
                              placeholder="Précisez"
                              value={formData.co_profession_precisions || ""}
                              onChange={(e) => updateFormData("co_profession_precisions", e.target.value)}
                            />
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="co_contrat">Type de contrat *</Label>
                          <Select value={formData.co_contrat} onValueChange={(v) => updateFormData("co_contrat", v)}>
                            <SelectTrigger id="co_contrat">
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cdi">CDI</SelectItem>
                              <SelectItem value="cdd">CDD</SelectItem>
                              <SelectItem value="interim">Intérim</SelectItem>
                              <SelectItem value="independant">Indépendant</SelectItem>
                              <SelectItem value="retraite">Retraite</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {formData.co_contrat !== "retraite" && formData.co_contrat !== "independant" && (
                          <div className="space-y-2">
                            <Label htmlFor="co_anciennete">Ancienneté *</Label>
                            <Select
                              value={formData.co_anciennetee}
                              onValueChange={(v) => updateFormData("co_anciennetee", v)}
                            >
                              <SelectTrigger id="co_anciennete">
                                <SelectValue placeholder="Sélectionnez" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="<1an">Moins d'1 an</SelectItem>
                                <SelectItem value="1">1 an</SelectItem>
                                <SelectItem value="2">2 ans</SelectItem>
                                <SelectItem value="3">3 ans</SelectItem>
                                <SelectItem value="4">4 ans</SelectItem>
                                <SelectItem value="5plus">5 ans ou plus</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <div className="space-y-2">
                          <Label htmlFor="co_revenu">Revenu net mensuel avant impôt (€) *</Label>
                          <Input
                            id="co_revenu"
                            type="number"
                            placeholder="2500"
                            value={formData.co_revenu_net || ""}
                            onChange={(e) => updateFormData("co_revenu_net", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="co_primes">Primes annuelles (€)</Label>
                          <Input
                            id="co_primes"
                            type="number"
                            placeholder="0"
                            value={formData.co_primes_annuelles || ""}
                            onChange={(e) => updateFormData("co_primes_annuelles", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="co_autres_revenus">Autres revenus mensuels (€)</Label>
                          <Input
                            id="co_autres_revenus"
                            type="number"
                            placeholder="0"
                            value={formData.co_autres_revenus || ""}
                            onChange={(e) => updateFormData("co_autres_revenus", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="co_autres_charges">Autres charges mensuelles (€)</Label>
                          <Input
                            id="co_autres_charges"
                            type="number"
                            placeholder="0"
                            value={formData.co_autres_charges || ""}
                            onChange={(e) => updateFormData("co_autres_charges", e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Étape 7 (formerly step 8) - Contact */}
              {step === 7 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Vos coordonnées</h2>

                  <div className="space-y-2">
                    <Label>Civilité *</Label>
                    <RadioGroup value={formData.civilite} onValueChange={(v) => updateFormData("civilite", v)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mme" id="mme" />
                        <Label htmlFor="mme" className="font-normal cursor-pointer">
                          Mme
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mr" id="mr" />
                        <Label htmlFor="mr" className="font-normal cursor-pointer">
                          Mr
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input id="nom" value={formData.nom} onChange={(e) => updateFormData("nom", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        value={formData.prenom}
                        onChange={(e) => updateFormData("prenom", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="naissance">Date de naissance *</Label>
                    <Input
                      id="naissance"
                      type="date"
                      value={formData.naissance}
                      onChange={(e) => updateFormData("naissance", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input
                        id="telephone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.telephone}
                        onChange={(e) => updateFormData("telephone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@exemple.fr"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="adresse">Adresse *</Label>
                    <Input
                      id="adresse"
                      placeholder="12 rue de la République"
                      value={formData.adresse}
                      onChange={(e) => updateFormData("adresse", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cp">Code postal *</Label>
                      <Input
                        id="cp"
                        placeholder="75001"
                        maxLength={5}
                        value={formData.cp}
                        onChange={(e) => updateFormData("cp", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ville">Ville *</Label>
                      <Input
                        id="ville"
                        placeholder="Paris"
                        value={formData.ville}
                        onChange={(e) => updateFormData("ville", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <Label>Souhaitez-vous recevoir des offres de nos partenaires ?</Label>
                      <RadioGroup
                        value={formData.consent_partenaire}
                        onValueChange={(v) => updateFormData("consent_partenaire", v)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="oui" id="partenaire_oui" />
                          <Label htmlFor="partenaire_oui" className="font-normal cursor-pointer">
                            Oui
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="non" id="partenaire_non" />
                          <Label htmlFor="partenaire_non" className="font-normal cursor-pointer">
                            Non
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent_rgpd"
                        checked={formData.consent_rgpd}
                        onCheckedChange={(checked) => updateFormData("consent_rgpd", checked)}
                      />
                      <Label htmlFor="consent_rgpd" className="text-sm font-normal leading-relaxed cursor-pointer">
                        J'accepte d'être contacté(e) par un conseiller expert, dans le cadre de ma demande conformément
                        aux CGU, par mail et téléphone. *
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-8 mt-8 border-t">
                {step > 1 && (
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="gap-2 h-12 px-6 shadow-sm hover:shadow-md transition-shadow bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Précédent
                  </Button>
                )}
                {step < 7 ? (
                  <Button
                    onClick={nextStep}
                    className="gap-2 ml-auto h-12 px-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Suivant
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="gap-2 ml-auto h-12 px-8 shadow-lg hover:shadow-xl transition-shadow"
                    disabled={!formData.consent_rgpd}
                  >
                    Valider
                    <Check className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-xl sticky top-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                Récapitulatif
              </h3>
              <div className="space-y-3 text-sm">
                {formData.type_bien && (
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-semibold">{formData.type_bien}</span>
                  </div>
                )}
                {formData.prix_bien && (
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-muted-foreground">Prix</span>
                    <span className="font-semibold">{Number(formData.prix_bien).toLocaleString("fr-FR")} €</span>
                  </div>
                )}
                {formData.apport && Number(formData.apport) > 0 && (
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-muted-foreground">Apport</span>
                    <span className="font-semibold">{Number(formData.apport).toLocaleString("fr-FR")} €</span>
                  </div>
                )}
                {formData.duree_pret && (
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-muted-foreground">Durée</span>
                    <span className="font-semibold">{formData.duree_pret} ans</span>
                  </div>
                )}
                {formData.prix_bien && (
                  <div className="flex justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="font-medium">Besoin</span>
                    <span className="font-bold text-primary">
                      {calculateBesoinFinancement().toLocaleString("fr-FR")} €
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
