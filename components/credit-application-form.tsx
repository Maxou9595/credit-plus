"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import {
  ChevronRight, ChevronLeft, Check, CheckCircle2, Shield, Clock, Sparkles,
  User, Home, Briefcase, FileCheck, ClipboardList, Users, Euro, Calendar,
  MapPin, Mail, Phone, Building2, Banknote, PiggyBank, Loader2,
  AlertCircle, Info as InfoIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"

type FormData = {
  firstName: string; lastName: string; email: string; phone: string
  birthDate: string; address: string; postalCode: string; city: string
  projectType: string; amount: string; duration: string
  propertyType?: string; propertyAddress?: string; propertyValue?: string
  employmentStatus: string; employmentSince: string; monthlyIncome: string
  additionalIncome: string; currentLoans: string
  coApplicant: boolean; coApplicantIncome?: string
  idDocument: boolean; proofOfAddress: boolean; payslips: boolean
  taxNotice: boolean; bankStatements: boolean
  comments: string; consent: boolean
}

const initialFormData: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  birthDate: "", address: "", postalCode: "", city: "",
  projectType: "", amount: "", duration: "",
  employmentStatus: "", employmentSince: "",
  monthlyIncome: "", additionalIncome: "0", currentLoans: "0",
  coApplicant: false,
  idDocument: false, proofOfAddress: false, payslips: false, taxNotice: false, bankStatements: false,
  comments: "", consent: false,
}

const STEPS = [
  { id: 1, label: "Vous", sublabel: "Identité", icon: User },
  { id: 2, label: "Projet", sublabel: "Financement", icon: Home },
  { id: 3, label: "Profil", sublabel: "Revenus", icon: Briefcase },
  { id: 4, label: "Dossier", sublabel: "Pièces", icon: FileCheck },
  { id: 5, label: "Envoi", sublabel: "Validation", icon: ClipboardList },
] as const

const PROJECT_TYPES = [
  { value: "mortgage", label: "Crédit immobilier", desc: "Achat résidence, investissement", icon: Home },
  { value: "consolidation", label: "Rachat de crédit", desc: "Regrouper, renégocier", icon: Banknote },
  { value: "consumer", label: "Crédit consommation", desc: "Travaux, auto, projet", icon: PiggyBank },
  { value: "insurance", label: "Assurance emprunteur", desc: "Délégation, loi Lemoine", icon: Shield },
  { value: "professional", label: "Crédit professionnel", desc: "Pro, TNS, SCI", icon: Building2 },
] as const

const EMPLOYMENT_STATUSES = [
  { value: "cdi", label: "CDI" },
  { value: "cdd", label: "CDD" },
  { value: "freelance", label: "Indépendant / Freelance" },
  { value: "business_owner", label: "Chef d'entreprise / TNS" },
  { value: "retired", label: "Retraité(e)" },
  { value: "civil_servant", label: "Fonctionnaire" },
  { value: "unemployed", label: "Sans emploi" },
] as const

export default function CreditApplicationForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalSteps = STEPS.length

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleSelectChange = (name: string, value: string) => setFormData((prev) => ({ ...prev, [name]: value }))
  const handleCheckboxChange = (name: string, checked: boolean) => setFormData((prev) => ({ ...prev, [name]: checked }))

  const nextStep = () => { if (currentStep < totalSteps) { setCurrentStep(currentStep + 1); window.scrollTo({ top: 0, behavior: "smooth" }) } }
  const prevStep = () => { if (currentStep > 1) { setCurrentStep(currentStep - 1); window.scrollTo({ top: 0, behavior: "smooth" }) } }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const dataToSend = {
        ...formData,
        submittedAt: new Date().toISOString(),
        requestId: `REQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      }
      const response = await fetch("/api/credit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      })
      const data = await response.json()
      if (response.ok) {
        toast({
          title: "Demande envoyée",
          description: "Votre demande a été transmise à notre équipe. Un courtier vous recontacte sous 24h.",
        })
        setFormData(initialFormData)
        setCurrentStep(1)
        setTimeout(() => router.push("/merci"), 1800)
      } else {
        throw new Error(data.message || "Une erreur est survenue")
      }
    } catch (error) {
      toast({
        title: "Erreur d'envoi",
        description: error instanceof Error ? error.message : "Veuillez réessayer",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // ───── UI helpers ─────────────────────────────────────────────────

  const inputClass =
    "h-12 rounded-xl border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition"

  function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
    return (
      <Label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-800 mb-1.5">
        {children}
        {required && <span className="text-primary ml-0.5">*</span>}
      </Label>
    )
  }

  function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
    return (
      <div className="mb-8 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
        </div>
      </div>
    )
  }

  function ProgressStepper() {
    const pct = ((currentStep - 1) / (totalSteps - 1)) * 100
    return (
      <div className="mb-10">
        {/* Mobile : current step indicator */}
        <div className="md:hidden text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Étape {currentStep} sur {totalSteps}
          </div>
          <h4 className="mt-2 text-xl font-bold text-gray-900">{STEPS[currentStep - 1].label}</h4>
          <p className="text-sm text-gray-500">{STEPS[currentStep - 1].sublabel}</p>
        </div>

        {/* Desktop : full stepper */}
        <div className="hidden md:block relative">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 rounded-full" />
          <div
            className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
          <ol className="relative grid grid-cols-5 gap-2">
            {STEPS.map((step) => {
              const isDone = currentStep > step.id
              const isActive = currentStep === step.id
              const Icon = step.icon
              return (
                <li key={step.id} className="flex flex-col items-center text-center">
                  <div
                    className={`relative flex items-center justify-center h-12 w-12 rounded-full border-2 transition-all duration-300 ${
                      isDone
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                        : isActive
                          ? "bg-white border-primary text-primary ring-4 ring-primary/15 shadow-md"
                          : "bg-white border-gray-200 text-gray-400"
                    }`}
                  >
                    {isDone ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" aria-hidden />}
                  </div>
                  <div className="mt-2">
                    <div className={`text-xs font-semibold ${isActive || isDone ? "text-gray-900" : "text-gray-400"}`}>
                      {step.label}
                    </div>
                    <div className="text-[11px] text-gray-400">{step.sublabel}</div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }

  function TrustBadges() {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 mb-8">
        {[
          { icon: Shield, label: "Données sécurisées (RGPD)" },
          { icon: Clock, label: "Réponse sous 24 h" },
          { icon: CheckCircle2, label: "Sans engagement" },
          { icon: Sparkles, label: "+100 banques partenaires" },
        ].map((b) => (
          <span key={b.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
            <b.icon className="h-3.5 w-3.5 text-primary" aria-hidden />
            {b.label}
          </span>
        ))}
      </div>
    )
  }

  // ───── Steps ──────────────────────────────────────────────────────

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <SectionHeader icon={User} title="Faisons connaissance" subtitle="Vos informations personnelles" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <FieldLabel htmlFor="firstName" required>Prénom</FieldLabel>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} placeholder="Marie" />
              </div>
              <div>
                <FieldLabel htmlFor="lastName" required>Nom</FieldLabel>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} placeholder="Lefèvre" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <FieldLabel htmlFor="email" required>Email</FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className={`${inputClass} pl-11`} placeholder="marie@exemple.fr" />
                </div>
              </div>
              <div>
                <FieldLabel htmlFor="phone" required>Téléphone</FieldLabel>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className={`${inputClass} pl-11`} placeholder="06 12 34 56 78" />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <FieldLabel htmlFor="birthDate" required>Date de naissance</FieldLabel>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                <Input id="birthDate" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} required className={`${inputClass} pl-11`} />
              </div>
            </div>
            <div className="mb-5">
              <FieldLabel htmlFor="address" required>Adresse postale</FieldLabel>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                <Input id="address" name="address" value={formData.address} onChange={handleChange} required className={`${inputClass} pl-11`} placeholder="12 rue du Commerce" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <FieldLabel htmlFor="postalCode" required>Code postal</FieldLabel>
                <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required className={inputClass} placeholder="51100" />
              </div>
              <div className="sm:col-span-2">
                <FieldLabel htmlFor="city" required>Ville</FieldLabel>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} required className={inputClass} placeholder="Reims" />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div>
            <SectionHeader icon={Home} title="Votre projet de financement" subtitle="Nature, montant et durée du crédit" />

            <FieldLabel htmlFor="projectType" required>Type de projet</FieldLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {PROJECT_TYPES.map((p) => {
                const selected = formData.projectType === p.value
                return (
                  <button
                    type="button"
                    key={p.value}
                    onClick={() => handleSelectChange("projectType", p.value)}
                    className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                      selected
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-primary/40 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex items-center justify-center h-10 w-10 rounded-xl ${selected ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                        <p.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">{p.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{p.desc}</div>
                      </div>
                      {selected && <Check className="h-5 w-5 text-primary flex-shrink-0" aria-hidden />}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <FieldLabel htmlFor="amount" required>Montant souhaité</FieldLabel>
                <div className="relative">
                  <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                  <Input id="amount" name="amount" type="number" min="1000" step="1000" value={formData.amount} onChange={handleChange} required className={`${inputClass} pl-11`} placeholder="200 000" />
                </div>
              </div>
              <div>
                <FieldLabel htmlFor="duration" required>Durée (années)</FieldLabel>
                <Select value={formData.duration} onValueChange={(v) => handleSelectChange("duration", v)}>
                  <SelectTrigger id="duration" className={`${inputClass} data-[placeholder]:text-gray-400`}>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(25)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1} {i === 0 ? "an" : "ans"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {formData.projectType === "mortgage" && (
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/15 space-y-5">
                <div className="flex items-start gap-2 text-sm text-gray-700">
                  <InfoIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <span>Ces informations nous aident à identifier les banques les mieux adaptées à votre projet.</span>
                </div>
                <div>
                  <FieldLabel htmlFor="propertyType" required>Type de bien</FieldLabel>
                  <Select value={formData.propertyType} onValueChange={(v) => handleSelectChange("propertyType", v)}>
                    <SelectTrigger id="propertyType" className={`${inputClass} data-[placeholder]:text-gray-400`}>
                      <SelectValue placeholder="Sélectionnez le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Appartement</SelectItem>
                      <SelectItem value="house">Maison</SelectItem>
                      <SelectItem value="land">Terrain</SelectItem>
                      <SelectItem value="commercial">Local commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel htmlFor="propertyAddress">Adresse du bien (si connue)</FieldLabel>
                    <Input id="propertyAddress" name="propertyAddress" value={formData.propertyAddress || ""} onChange={handleChange} className={inputClass} placeholder="5 rue Cormontreuil, Reims" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="propertyValue">Valeur estimée (€)</FieldLabel>
                    <div className="relative">
                      <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                      <Input id="propertyValue" name="propertyValue" type="number" min="0" value={formData.propertyValue || ""} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="220 000" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )

      case 3:
        return (
          <div>
            <SectionHeader icon={Briefcase} title="Votre situation professionnelle" subtitle="Revenus, contrat, co-emprunteur" />

            <div className="mb-5">
              <FieldLabel htmlFor="employmentStatus" required>Situation professionnelle</FieldLabel>
              <Select value={formData.employmentStatus} onValueChange={(v) => handleSelectChange("employmentStatus", v)}>
                <SelectTrigger id="employmentStatus" className={`${inputClass} data-[placeholder]:text-gray-400`}>
                  <SelectValue placeholder="Sélectionnez votre situation" />
                </SelectTrigger>
                <SelectContent>
                  {EMPLOYMENT_STATUSES.map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {["cdi", "cdd", "civil_servant"].includes(formData.employmentStatus) && (
              <div className="mb-5">
                <FieldLabel htmlFor="employmentSince" required>Date de prise de poste</FieldLabel>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                  <Input id="employmentSince" name="employmentSince" type="date" value={formData.employmentSince} onChange={handleChange} required className={`${inputClass} pl-11`} />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <FieldLabel htmlFor="monthlyIncome" required>Revenus nets mensuels</FieldLabel>
                <div className="relative">
                  <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                  <Input id="monthlyIncome" name="monthlyIncome" type="number" min="0" value={formData.monthlyIncome} onChange={handleChange} required className={`${inputClass} pl-11`} placeholder="2 800" />
                </div>
              </div>
              <div>
                <FieldLabel htmlFor="additionalIncome">Revenus complémentaires</FieldLabel>
                <div className="relative">
                  <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                  <Input id="additionalIncome" name="additionalIncome" type="number" min="0" value={formData.additionalIncome} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="0" />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <FieldLabel htmlFor="currentLoans">Mensualités de crédits en cours</FieldLabel>
              <div className="relative">
                <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                <Input id="currentLoans" name="currentLoans" type="number" min="0" value={formData.currentLoans} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="0" />
              </div>
              <p className="text-xs text-gray-500 mt-1.5">Somme des mensualités auto, conso, revolving… en cours</p>
            </div>

            <div
              onClick={() => handleCheckboxChange("coApplicant", !formData.coApplicant)}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition ${
                formData.coApplicant ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center h-10 w-10 rounded-xl ${formData.coApplicant ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                  <Users className="h-5 w-5" aria-hidden />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">Demande avec un co-emprunteur</div>
                  <div className="text-xs text-gray-500">Cochez si vous empruntez en couple ou à deux</div>
                </div>
                <Checkbox checked={formData.coApplicant} onCheckedChange={(c) => handleCheckboxChange("coApplicant", c === true)} aria-label="Co-emprunteur" className="h-5 w-5" />
              </div>
            </div>

            {formData.coApplicant && (
              <div className="mt-5">
                <FieldLabel htmlFor="coApplicantIncome">Revenus nets mensuels du co-emprunteur</FieldLabel>
                <div className="relative">
                  <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
                  <Input id="coApplicantIncome" name="coApplicantIncome" type="number" min="0" value={formData.coApplicantIncome || ""} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="2 400" />
                </div>
              </div>
            )}
          </div>
        )

      case 4: {
        const docs = [
          { id: "idDocument", label: "Pièce d'identité", desc: "Carte nationale, passeport ou titre de séjour" },
          { id: "proofOfAddress", label: "Justificatif de domicile", desc: "Moins de 3 mois (facture EDF, eau, internet)" },
          { id: "payslips", label: "3 derniers bulletins de salaire", desc: "Pour les salariés (ou 2 bilans pour TNS)" },
          { id: "taxNotice", label: "Dernier avis d'imposition", desc: "Année N-1, intégral" },
          { id: "bankStatements", label: "3 derniers relevés bancaires", desc: "Compte courant principal" },
        ] as const
        return (
          <div>
            <SectionHeader icon={FileCheck} title="Pièces à prévoir" subtitle="Cochez celles que vous avez sous la main" />
            <p className="text-sm text-gray-600 mb-6 p-4 rounded-xl bg-blue-50 border border-blue-100 flex gap-3">
              <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden />
              Vous n'avez pas besoin de télécharger maintenant : c'est juste pour nous indiquer ce qui est déjà prêt. Votre courtier vous guidera pour l'envoi sécurisé.
            </p>

            <div className="space-y-3">
              {docs.map((d) => {
                const checked = formData[d.id as keyof FormData] as boolean
                return (
                  <div
                    key={d.id}
                    onClick={() => handleCheckboxChange(d.id, !checked)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition ${
                      checked ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox checked={checked} onCheckedChange={(c) => handleCheckboxChange(d.id, c === true)} className="h-5 w-5" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">{d.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{d.desc}</div>
                      </div>
                      {checked && <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" aria-hidden />}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }

      case 5:
        return (
          <div>
            <SectionHeader icon={ClipboardList} title="Récapitulatif avant envoi" subtitle="Vérifiez les informations, c'est presque prêt" />

            <div className="space-y-4 mb-6">
              {/* Identité */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
                  <User className="h-4 w-4 text-primary" aria-hidden />
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Identité</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <Row label="Nom complet" value={`${formData.firstName} ${formData.lastName}`} />
                  <Row label="Email" value={formData.email} />
                  <Row label="Téléphone" value={formData.phone} />
                  <Row label="Date de naissance" value={formData.birthDate} />
                  <Row label="Adresse" value={`${formData.address}, ${formData.postalCode} ${formData.city}`} span2 />
                </div>
              </div>

              {/* Projet */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
                  <Home className="h-4 w-4 text-primary" aria-hidden />
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Projet</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <Row label="Type" value={PROJECT_TYPES.find((p) => p.value === formData.projectType)?.label} />
                  <Row label="Montant" value={formData.amount ? `${Number(formData.amount).toLocaleString("fr-FR")} €` : undefined} />
                  <Row label="Durée" value={formData.duration ? `${formData.duration} ${Number(formData.duration) === 1 ? "an" : "ans"}` : undefined} />
                  {formData.propertyType && <Row label="Bien" value={formData.propertyType === "apartment" ? "Appartement" : formData.propertyType === "house" ? "Maison" : formData.propertyType === "land" ? "Terrain" : "Local commercial"} />}
                  {formData.propertyValue && <Row label="Valeur estimée" value={`${Number(formData.propertyValue).toLocaleString("fr-FR")} €`} />}
                </div>
              </div>

              {/* Situation */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
                  <Briefcase className="h-4 w-4 text-primary" aria-hidden />
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Situation</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <Row label="Situation pro" value={EMPLOYMENT_STATUSES.find((e) => e.value === formData.employmentStatus)?.label} />
                  <Row label="Revenus nets" value={formData.monthlyIncome ? `${Number(formData.monthlyIncome).toLocaleString("fr-FR")} € / mois` : undefined} />
                  {Number(formData.additionalIncome) > 0 && <Row label="Revenus complémentaires" value={`${Number(formData.additionalIncome).toLocaleString("fr-FR")} €`} />}
                  {Number(formData.currentLoans) > 0 && <Row label="Crédits en cours" value={`${Number(formData.currentLoans).toLocaleString("fr-FR")} € / mois`} />}
                  {formData.coApplicant && formData.coApplicantIncome && <Row label="Co-emprunteur" value={`${Number(formData.coApplicantIncome).toLocaleString("fr-FR")} € / mois`} />}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <FieldLabel htmlFor="comments">Précisions complémentaires (facultatif)</FieldLabel>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Calendrier, compromis signé, particularités du projet, préférences bancaires…"
                className="rounded-xl border-gray-200 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[100px]"
              />
            </div>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(c) => handleCheckboxChange("consent", c === true)}
                  required
                  className="h-5 w-5 mt-0.5"
                />
                <Label htmlFor="consent" className="text-sm font-medium text-gray-800 leading-relaxed cursor-pointer">
                  J'accepte d'être recontacté(e) par Crédit Plus et je reconnais avoir pris connaissance de la{" "}
                  <a href="/politique-de-confidentialite" className="underline text-primary">politique de confidentialité</a>.{" "}
                  Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
                </Label>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 overflow-hidden">
      {/* Hero band */}
      <div className="relative bg-gradient-to-br from-white via-primary/5 to-primary/10 px-6 md:px-10 pt-10 pb-8 border-b border-gray-100">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Gratuit · Sans engagement
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Votre simulation en <span className="text-primary">5 étapes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Notre équipe analyse votre dossier sous 24 h et met 3 à 5 banques en concurrence pour obtenir les meilleures conditions du marché.
          </p>
        </div>
        {/* Decorative blob */}
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl opacity-60" aria-hidden />
        <div className="absolute bottom-0 -left-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl opacity-50" aria-hidden />
      </div>

      <div className="px-6 md:px-10 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <ProgressStepper />
          <TrustBadges />

          {renderStep()}

          <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3 mt-10 pt-6 border-t border-gray-100">
            {currentStep > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep} className="h-12 px-5 rounded-xl border-gray-200 hover:border-primary hover:text-primary">
                <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
            ) : (
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-gray-400" aria-hidden />
                <span>Les champs marqués <span className="text-primary">*</span> sont obligatoires</span>
              </div>
            )}

            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep} className="h-12 px-7 rounded-xl text-base shadow-md shadow-primary/20">
                Continuer <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" className="h-12 px-7 rounded-xl text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" disabled={isSubmitting || !formData.consent}>
                {isSubmitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Envoi en cours…</>
                ) : (
                  <>Envoyer ma demande <ChevronRight className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Bas : conformité ACPR */}
      <div className="bg-gray-50 px-6 md:px-10 py-5 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5 text-primary" aria-hidden /> ORIAS n°25005566
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden /> Contrôlé ACPR
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden /> Honoraires au succès uniquement
        </span>
      </div>
    </div>
  )
}

function Row({ label, value, span2 }: { label: string; value?: string; span2?: boolean }) {
  if (!value) return null
  return (
    <div className={span2 ? "sm:col-span-2" : ""}>
      <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-medium">{label}</span>
      <span className="block text-gray-900 font-medium">{value}</span>
    </div>
  )
}
