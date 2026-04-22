"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"

/**
 * Formulaire de recrutement courtier — silo B2B (/reseau/).
 *
 * Note : composant rétabli dans la refonte — le fichier original n'a jamais
 * été committé dans la branche master (`ignoreBuildErrors: true` masquait
 * l'erreur de module manquant). Cette version minimaliste rétablit un build
 * fonctionnel. La version enrichie (champs détaillés, upload de CV, etc.)
 * pourra être réintégrée ultérieurement.
 */
export default function RecrutementForm({ ville = "France" }: { ville?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError(null)
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch("/api/parrainage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "recrutement",
          ville,
          nom: formData.get("nom"),
          email: formData.get("email"),
          telephone: formData.get("telephone"),
          experience: formData.get("experience"),
          message: formData.get("message"),
        }),
      })
      if (!res.ok) throw new Error(`Erreur ${res.status}`)
      setStatus("ok")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Erreur d'envoi")
    }
  }

  if (status === "ok") {
    return (
      <section id="recrutement-formulaire" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Merci, votre candidature a bien été envoyée.</h2>
          <p className="text-gray-600">Un membre de l'équipe Crédit Plus vous recontacte sous 48h.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="recrutement-formulaire" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Rejoindre Crédit Plus{ville !== "France" ? ` à ${ville}` : ""}</h2>
          <p className="text-gray-600">Décrivez votre parcours en quelques lignes. Un courtier référent vous rappelle sous 48h.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="nom">Nom et prénom</Label>
              <Input id="nom" name="nom" required placeholder="Prénom NOM" />
            </div>
            <div>
              <Label htmlFor="telephone">Téléphone</Label>
              <Input id="telephone" name="telephone" type="tel" required placeholder="06 12 34 56 78" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="prenom@exemple.com" />
          </div>
          <div>
            <Label htmlFor="experience">Expérience en courtage / banque</Label>
            <select id="experience" name="experience" className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
              <option value="">Sélectionner…</option>
              <option value="0">Aucune</option>
              <option value="1-3">1 à 3 ans</option>
              <option value="4-7">4 à 7 ans</option>
              <option value="8+">8 ans et plus</option>
            </select>
          </div>
          <div>
            <Label htmlFor="message">Message (optionnel)</Label>
            <Textarea id="message" name="message" rows={4} placeholder="Parcours, motivation, zone géographique…" />
          </div>

          <p className="text-xs text-gray-500">
            En envoyant ce formulaire, vous acceptez que Crédit Plus traite vos données dans le cadre de votre candidature, conformément à notre politique de confidentialité.
          </p>

          {status === "error" && error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <Button type="submit" size="lg" disabled={status === "sending"} className="w-full">
            {status === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin mr-2" /> Envoi en cours…</>) : "Envoyer ma candidature"}
          </Button>
        </form>
      </div>
    </section>
  )
}
