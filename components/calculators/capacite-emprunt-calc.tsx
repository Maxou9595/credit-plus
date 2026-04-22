"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function monthlyPayment(principal: number, annualRateDecimal: number, months: number) {
  if (annualRateDecimal === 0) return principal / months
  const r = annualRateDecimal / 12
  return (principal * r) / (1 - Math.pow(1 + r, -months))
}

function capacityFromPayment(maxPayment: number, annualRateDecimal: number, months: number) {
  if (annualRateDecimal === 0) return maxPayment * months
  const r = annualRateDecimal / 12
  return (maxPayment * (1 - Math.pow(1 + r, -months))) / r
}

export function CapaciteEmpruntCalc() {
  const [revenusNets, setRevenusNets] = useState(4500)
  const [chargesExistantes, setChargesExistantes] = useState(0)
  const [dureeAns, setDureeAns] = useState(25)
  const [tauxNominal, setTauxNominal] = useState(3.35)
  const [tauxAssurance, setTauxAssurance] = useState(0.25)
  const [apport, setApport] = useState(20000)

  const result = useMemo(() => {
    const months = dureeAns * 12
    const rNominal = tauxNominal / 100
    const rAssurance = tauxAssurance / 100

    // HCSF : 35 % max
    const mensualiteMax = Math.max(0, revenusNets * 0.35 - chargesExistantes)

    // Si on prend uniquement la partie capital + intérêts, il faut retirer la part assurance.
    // L'assurance est calculée sur le capital initial → on approxime en itérant :
    // mensualitéAssurance = (capital × tauxAssuranceAnnuel) / 12
    // mensualitéRemboursement = mensualitéMax - mensualitéAssurance
    // capital = capacityFromPayment(mensualitéRemboursement, rNominal, months)
    // 1 itération simple : on pose mensualitéAssurance = 0 puis on affine.
    let capital = capacityFromPayment(mensualiteMax, rNominal, months)
    for (let i = 0; i < 4; i++) {
      const mensualiteAssurance = (capital * rAssurance) / 12
      const mensualiteRemb = Math.max(0, mensualiteMax - mensualiteAssurance)
      capital = capacityFromPayment(mensualiteRemb, rNominal, months)
    }

    const mensualiteAssurance = (capital * rAssurance) / 12
    const mensualiteRemb = mensualiteMax - mensualiteAssurance
    const budgetTotal = capital + apport
    const coutCredit = (mensualiteRemb * months) - capital

    return {
      mensualiteMax,
      capital: Math.max(0, Math.round(capital)),
      mensualiteAssurance: Math.round(mensualiteAssurance),
      mensualiteRemb: Math.round(mensualiteRemb),
      budgetTotal: Math.max(0, Math.round(budgetTotal)),
      coutCredit: Math.max(0, Math.round(coutCredit)),
      tauxEndettement: revenusNets > 0 ? ((mensualiteMax + chargesExistantes) / revenusNets) * 100 : 0,
    }
  }, [revenusNets, chargesExistantes, dureeAns, tauxNominal, tauxAssurance, apport])

  return (
    <div className="not-prose my-6 p-6 rounded-2xl border border-gray-200 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <Label htmlFor="revenus">Revenus nets cumulés mensuels (€)</Label>
          <Input id="revenus" type="number" min={0} value={revenusNets} onChange={(e) => setRevenusNets(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="charges">Charges crédits en cours (€/mois)</Label>
          <Input id="charges" type="number" min={0} value={chargesExistantes} onChange={(e) => setChargesExistantes(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="duree">Durée du prêt (années)</Label>
          <Input id="duree" type="number" min={5} max={25} value={dureeAns} onChange={(e) => setDureeAns(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="taux">Taux nominal (% annuel)</Label>
          <Input id="taux" type="number" step="0.05" min={0} value={tauxNominal} onChange={(e) => setTauxNominal(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="assurance">Taux assurance emprunteur (% annuel)</Label>
          <Input id="assurance" type="number" step="0.05" min={0} value={tauxAssurance} onChange={(e) => setTauxAssurance(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="apport">Apport personnel (€)</Label>
          <Input id="apport" type="number" min={0} value={apport} onChange={(e) => setApport(+e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-primary/20">
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Mensualité maximale HCSF</div>
          <div className="text-2xl font-bold text-primary">{result.mensualiteMax.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</div>
          <div className="text-xs text-gray-500 mt-1">Règle 35 % d'endettement</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-primary/20">
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Capacité d'emprunt</div>
          <div className="text-2xl font-bold text-primary">{result.capital.toLocaleString("fr-FR")} €</div>
          <div className="text-xs text-gray-500 mt-1">Capital empruntable</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-primary/20">
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Budget total (avec apport)</div>
          <div className="text-2xl font-bold text-gray-900">{result.budgetTotal.toLocaleString("fr-FR")} €</div>
          <div className="text-xs text-gray-500 mt-1">Ce que vous pouvez acheter</div>
        </div>
      </div>

      <div className="text-xs text-gray-600 space-y-1">
        <p>Détail mensualité : {result.mensualiteRemb} € (capital + intérêts) + {result.mensualiteAssurance} € (assurance).</p>
        <p>Coût total du crédit (intérêts hors assurance) : {result.coutCredit.toLocaleString("fr-FR")} €.</p>
        <p className="italic">Calcul indicatif — ne prend pas en compte les frais de notaire, de garantie ni de dossier.</p>
      </div>

      <div className="mt-5 flex gap-3">
        <Button asChild>
          <a href="/credit-immobilier/simulation">Simuler un dossier complet</a>
        </Button>
      </div>
    </div>
  )
}
