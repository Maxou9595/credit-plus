"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AssuranceComparateur() {
  const [capital, setCapital] = useState(250000)
  const [dureeAns, setDureeAns] = useState(20)
  const [tauxBancaire, setTauxBancaire] = useState(0.36)
  const [tauxDelegation, setTauxDelegation] = useState(0.14)

  const result = useMemo(() => {
    const months = dureeAns * 12
    // Prime bancaire : taux appliqué au capital initial, payé chaque mois sur la durée
    const primeBancaireMensuelle = (capital * (tauxBancaire / 100)) / 12
    const primeDelegMensuelle = (capital * (tauxDelegation / 100)) / 12
    const coutBancaire = primeBancaireMensuelle * months
    const coutDeleg = primeDelegMensuelle * months
    return {
      primeBancaireMensuelle: Math.round(primeBancaireMensuelle),
      primeDelegMensuelle: Math.round(primeDelegMensuelle),
      coutBancaire: Math.round(coutBancaire),
      coutDeleg: Math.round(coutDeleg),
      economieTotale: Math.round(coutBancaire - coutDeleg),
      economieMensuelle: Math.round(primeBancaireMensuelle - primeDelegMensuelle),
      pourcentageEconomie: coutBancaire > 0 ? ((coutBancaire - coutDeleg) / coutBancaire) * 100 : 0,
    }
  }, [capital, dureeAns, tauxBancaire, tauxDelegation])

  return (
    <div className="not-prose my-6 p-6 rounded-2xl border border-gray-200 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <Label htmlFor="cap">Capital emprunté (€)</Label>
          <Input id="cap" type="number" min={0} value={capital} onChange={(e) => setCapital(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="du">Durée (années)</Label>
          <Input id="du" type="number" min={1} max={30} value={dureeAns} onChange={(e) => setDureeAns(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="tb">Taux assurance groupe bancaire (% annuel, capital initial)</Label>
          <Input id="tb" type="number" step="0.01" value={tauxBancaire} onChange={(e) => setTauxBancaire(+e.target.value)} />
          <p className="text-xs text-gray-500 mt-1">Typique : 0,30 – 0,50 %. Consultez votre FSI bancaire pour le taux exact.</p>
        </div>
        <div>
          <Label htmlFor="td">Taux délégation externe (% annuel)</Label>
          <Input id="td" type="number" step="0.01" value={tauxDelegation} onChange={(e) => setTauxDelegation(+e.target.value)} />
          <p className="text-xs text-gray-500 mt-1">Typique : 0,10 – 0,25 % pour jeunes non-fumeurs, 0,25 – 0,40 % pour profils standards.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <div className="text-xs uppercase text-gray-500 font-semibold">Contrat groupe bancaire</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{result.primeBancaireMensuelle} €/mois</div>
          <div className="text-sm text-gray-600">Coût total : {result.coutBancaire.toLocaleString("fr-FR")} €</div>
        </div>
        <div className="p-4 rounded-xl bg-white border-2 border-emerald-400 bg-emerald-50">
          <div className="text-xs uppercase text-emerald-700 font-semibold">Délégation externe</div>
          <div className="text-2xl font-bold text-emerald-700 mt-1">{result.primeDelegMensuelle} €/mois</div>
          <div className="text-sm text-gray-700">Coût total : {result.coutDeleg.toLocaleString("fr-FR")} €</div>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-primary/10 border-2 border-primary">
        <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-1">Économie potentielle</div>
        <div className="text-4xl font-bold text-primary">{result.economieTotale.toLocaleString("fr-FR")} €</div>
        <div className="text-sm text-gray-700 mt-1">
          Soit {result.economieMensuelle} €/mois d'économie, ou {result.pourcentageEconomie.toFixed(0)} % du coût total de l'assurance bancaire.
        </div>
      </div>

      <p className="text-xs text-gray-500 italic mt-4">
        Estimation indicative basée sur les primes calculées sur le capital initial (norme des contrats groupe). Certaines délégations calculent sur le capital restant dû — l'économie peut alors être encore plus forte, la prime baissant chaque année.
      </p>
    </div>
  )
}
