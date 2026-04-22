"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator } from "lucide-react"
import Link from "next/link"

export function Simulator() {
  const [amount, setAmount] = useState(250000)
  const [duration, setDuration] = useState(20)
  const [rate, setRate] = useState(3.5)

  const monthlyPayment = (amount * (rate / 100 / 12)) / (1 - Math.pow(1 + rate / 100 / 12, -duration * 12))

  return (
    <section id="simulator" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Simulez Votre Crédit</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Estimez vos mensualités en quelques secondes
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border">
          <div className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="amount" className="text-lg">
                Montant du prêt : <span className="text-primary font-semibold">{amount.toLocaleString("fr-FR")} €</span>
              </Label>
              <Slider
                id="amount"
                min={50000}
                max={1000000}
                step={10000}
                value={[amount]}
                onValueChange={(value) => setAmount(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>50 000 €</span>
                <span>1 000 000 €</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="duration" className="text-lg">
                Durée : <span className="text-primary font-semibold">{duration} ans</span>
              </Label>
              <Slider
                id="duration"
                min={5}
                max={30}
                step={1}
                value={[duration]}
                onValueChange={(value) => setDuration(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>5 ans</span>
                <span>30 ans</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="rate" className="text-lg">
                Taux d'intérêt : <span className="text-primary font-semibold">{rate.toFixed(2)} %</span>
              </Label>
              <Slider
                id="rate"
                min={0.5}
                max={6}
                step={0.1}
                value={[rate]}
                onValueChange={(value) => setRate(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0.5 %</span>
                <span>6 %</span>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Mensualité estimée</div>
                  <div className="text-4xl font-bold text-primary">
                    {monthlyPayment.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Taux : {rate.toFixed(2)}% sur {duration} ans
                  </div>
                </div>
              </div>

              <Link href="/credit-immobilier/simulation">
                <Button size="lg" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                  Obtenir mon offre personnalisée
                </Button>
              </Link>

              <p className="text-xs text-center text-muted-foreground mt-4">
                En cliquant, vous serez redirigé vers notre formulaire complet
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
