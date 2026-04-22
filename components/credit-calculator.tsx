"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

export default function CreditCalculator() {
  const [amount, setAmount] = useState(100000)
  const [duration, setDuration] = useState(15)
  const [rate, setRate] = useState(3.5)

  // Calcul de la mensualité (formule de l'annuité constante)
  const calculateMonthlyPayment = () => {
    const monthlyRate = rate / 100 / 12
    const numberOfPayments = duration * 12

    if (monthlyRate === 0) return amount / numberOfPayments

    const x = Math.pow(1 + monthlyRate, numberOfPayments)
    return (amount * monthlyRate * x) / (x - 1)
  }

  const monthlyPayment = calculateMonthlyPayment()
  const totalCost = monthlyPayment * duration * 12 - amount

  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="amount">Montant du prêt</Label>
              <span className="text-sm font-medium">{amount.toLocaleString()} €</span>
            </div>
            <Slider
              id="amount"
              min={10000}
              max={500000}
              step={5000}
              value={[amount]}
              onValueChange={(value) => setAmount(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>10 000 €</span>
              <span>500 000 €</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="duration">Durée (années)</Label>
              <span className="text-sm font-medium">{duration} ans</span>
            </div>
            <Slider
              id="duration"
              min={1}
              max={30}
              step={1}
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 an</span>
              <span>30 ans</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="rate">Taux d'intérêt (%)</Label>
              <span className="text-sm font-medium">{rate.toFixed(2)} %</span>
            </div>
            <Slider
              id="rate"
              min={0.5}
              max={10}
              step={0.1}
              value={[rate]}
              onValueChange={(value) => setRate(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0.5 %</span>
              <span>10 %</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Mensualité estimée</p>
                <p className="text-2xl font-bold">{monthlyPayment.toFixed(2)} €</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Coût total du crédit</p>
                <p className="text-2xl font-bold">{totalCost.toFixed(2)} €</p>
              </div>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90" asChild>
            <Link href="/credit-immobilier/simulation">Obtenir une offre personnalisée</Link>
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Simulation à titre indicatif, ne constitue pas une offre contractuelle. Le taux effectif dépendra de votre
            situation personnelle.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
