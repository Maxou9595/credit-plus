"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://getform.io/f/bejexlga", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Message envoyé !</h3>
        <p className="text-muted-foreground">
          Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="nom" className="text-sm font-medium text-foreground">
            Nom *
          </label>
          <Input
            id="nom"
            name="nom"
            type="text"
            required
            className="bg-background border-border focus:border-primary"
            placeholder="Votre nom"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="prenom" className="text-sm font-medium text-foreground">
            Prénom *
          </label>
          <Input
            id="prenom"
            name="prenom"
            type="text"
            required
            className="bg-background border-border focus:border-primary"
            placeholder="Votre prénom"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="bg-background border-border focus:border-primary"
          placeholder="votre.email@exemple.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="telephone" className="text-sm font-medium text-foreground">
          Téléphone *
        </label>
        <Input
          id="telephone"
          name="telephone"
          type="tel"
          required
          className="bg-background border-border focus:border-primary"
          placeholder="06 12 34 56 78"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="bg-background border-border focus:border-primary min-h-[150px] resize-none"
          placeholder="Décrivez votre projet ou posez-nous vos questions..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2 bg-primary hover:bg-primary/90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        <Send className="h-4 w-4" />
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
      </p>
    </form>
  )
}
