"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TauxEndettementCalc() {
  const [revenus, setRevenus] = useState(4500)
  const [mensualiteFuture, setMensualiteFuture] = useState(1100)
  const [autresCredits, setAutresCredits] = useState(0)
  const [pensions, setPensions] = useState(0)

  const taux = useMemo(() => {
    const num = mensualiteFuture + autresCredits + pensions
    if (revenus <= 0) return 0
    return (num / revenus) * 100
  }, [revenus, mensualiteFuture, autresCredits, pensions])

  const status = taux <= 35
    ? { label: "Conforme HCSF", color: "emerald", advice: "Votre taux respecte la règle des 35 %. Dossier solide." }
    : taux <= 40
      ? { label: "Dépasse 35 % — flexibilité possible", color: "amber", advice: "Votre taux dépasse 35 % mais reste sous 40 %. Une banque peut utiliser sa flexibilité 20 % HCSF si vous êtes primo-accédant ou si votre reste-à-vivre est solide." }
      : { label: "Dépasse 40 % — plafond absolu", color: "red", advice: "Au-delà de 40 %, aucune banque ne peut accorder le crédit. Options : allonger la durée, baisser le montant, renforcer l'apport." }

  return (
    <div className="not-prose my-6 p-6 rounded-2xl border border-gray-200 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <Label htmlFor="revenus">Revenus nets cumulés (€/mois)</Label>
          <Input id="revenus" type="number" min={0} value={revenus} onChange={(e) => setRevenus(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="mens">Mensualité du futur crédit (€/mois)</Label>
          <Input id="mens" type="number" min={0} value={mensualiteFuture} onChange={(e) => setMensualiteFuture(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="autres">Mensualités autres crédits (€/mois)</Label>
          <Input id="autres" type="number" min={0} value={autresCredits} onChange={(e) => setAutresCredits(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="pensions">Pensions alimentaires versées (€/mois)</Label>
          <Input id="pensions" type="number" min={0} value={pensions} onChange={(e) => setPensions(+e.target.value)} />
        </div>
      </div>

      <div className={`p-5 rounded-xl border-2 border-${status.color}-400 bg-${status.color}-50`}>
        <div className="text-xs uppercase tracking-wider text-gray-600 mb-1">Taux d'endettement</div>
        <div className={`text-4xl font-bold text-${status.color}-700`}>{taux.toFixed(1)} %</div>
        <div className={`text-sm font-semibold text-${status.color}-800 mt-2`}>{status.label}</div>
        <p className="text-sm text-gray-700 mt-2">{status.advice}</p>
      </div>

      <p className="text-xs text-gray-500 italic mt-4">
        Formule : (mensualité future + autres crédits + pensions) / revenus nets cumulés. Conforme à la règle HCSF.
      </p>
    </div>
  )
}
