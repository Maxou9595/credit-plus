"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FormSubmitContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [projectType, setProjectType] = useState("")
  const [amount, setAmount] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      projectType,
      amount,
      message,
    }

    // In a real implementation, you would send this data to your backend
    // or a service like FormSubmit. For this example, we'll just log it.
    console.log("Form submitted:", formData)

    // Simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Form submitted successfully! (This is a demo)")
    }, 1500)
  }

  return (
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
          <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required name="phone" />
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
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ex: 150 000"
          name="amount"
        />
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

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>
    </form>
  )
}
