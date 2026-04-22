"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function buildSchedule(principal: number, annualRate: number, months: number) {
  const r = annualRate / 12
  const M = r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months))
  let balance = principal
  const rows: { mois: number; mensualite: number; interets: number; capital: number; crd: number }[] = []
  for (let m = 1; m <= months; m++) {
    const interets = balance * r
    const capital = M - interets
    balance -= capital
    rows.push({ mois: m, mensualite: M, interets, capital, crd: Math.max(0, balance) })
  }
  return rows
}

export function TableauAmortissementCalc() {
  const [principal, setPrincipal] = useState(200000)
  const [tauxNominal, setTauxNominal] = useState(3.25)
  const [dureeAns, setDureeAns] = useState(20)
  const [view, setView] = useState<"annuel" | "mensuel">("annuel")

  const rows = useMemo(() => buildSchedule(principal, tauxNominal / 100, dureeAns * 12), [principal, tauxNominal, dureeAns])

  const annualRows = useMemo(() => {
    const years: { annee: number; mensualite: number; interets: number; capital: number; crd: number }[] = []
    for (let y = 0; y < dureeAns; y++) {
      const slice = rows.slice(y * 12, (y + 1) * 12)
      if (slice.length === 0) break
      years.push({
        annee: y + 1,
        mensualite: slice[0].mensualite,
        interets: slice.reduce((a, r) => a + r.interets, 0),
        capital: slice.reduce((a, r) => a + r.capital, 0),
        crd: slice[slice.length - 1].crd,
      })
    }
    return years
  }, [rows, dureeAns])

  const totalInterets = rows.reduce((a, r) => a + r.interets, 0)
  const totalMensualites = rows.reduce((a, r) => a + r.mensualite, 0)

  const exportCsv = () => {
    const header = "Mois,Mensualite,Interets,Capital,CRD\n"
    const body = rows.map((r) => `${r.mois},${r.mensualite.toFixed(2)},${r.interets.toFixed(2)},${r.capital.toFixed(2)},${r.crd.toFixed(2)}`).join("\n")
    const blob = new Blob([header + body], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `tableau-amortissement-${principal}-${dureeAns}ans.csv`
    link.click()
  }

  return (
    <div className="not-prose my-6 p-6 rounded-2xl border border-gray-200 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        <div>
          <Label htmlFor="p">Capital emprunté (€)</Label>
          <Input id="p" type="number" min={0} value={principal} onChange={(e) => setPrincipal(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="t">Taux nominal (% annuel)</Label>
          <Input id="t" type="number" step="0.05" value={tauxNominal} onChange={(e) => setTauxNominal(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="d">Durée (années)</Label>
          <Input id="d" type="number" min={1} max={30} value={dureeAns} onChange={(e) => setDureeAns(+e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-gray-200">
          <div className="text-xs text-gray-500">Mensualité</div>
          <div className="text-xl font-bold text-primary">{rows[0] ? rows[0].mensualite.toLocaleString("fr-FR", { maximumFractionDigits: 2 }) : "—"} €</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-gray-200">
          <div className="text-xs text-gray-500">Total intérêts</div>
          <div className="text-xl font-bold text-gray-900">{totalInterets.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-gray-200">
          <div className="text-xs text-gray-500">Coût total</div>
          <div className="text-xl font-bold text-gray-900">{totalMensualites.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-2">
          <Button variant={view === "annuel" ? "default" : "outline"} size="sm" onClick={() => setView("annuel")}>Vue annuelle</Button>
          <Button variant={view === "mensuel" ? "default" : "outline"} size="sm" onClick={() => setView("mensuel")}>Vue mensuelle</Button>
        </div>
        <Button variant="outline" size="sm" onClick={exportCsv}>Exporter en CSV</Button>
      </div>

      <div className="max-h-96 overflow-y-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="text-left p-2">{view === "annuel" ? "Année" : "Mois"}</th>
              <th className="text-right p-2">Mensualité</th>
              <th className="text-right p-2">Intérêts</th>
              <th className="text-right p-2">Capital</th>
              <th className="text-right p-2">CRD fin</th>
            </tr>
          </thead>
          <tbody>
            {view === "annuel"
              ? annualRows.map((r) => (
                  <tr key={r.annee} className="border-t border-gray-100">
                    <td className="p-2">{r.annee}</td>
                    <td className="p-2 text-right">{r.mensualite.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</td>
                    <td className="p-2 text-right text-orange-700">{r.interets.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</td>
                    <td className="p-2 text-right text-emerald-700">{r.capital.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</td>
                    <td className="p-2 text-right font-semibold">{r.crd.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €</td>
                  </tr>
                ))
              : rows.map((r) => (
                  <tr key={r.mois} className="border-t border-gray-100">
                    <td className="p-2">{r.mois}</td>
                    <td className="p-2 text-right">{r.mensualite.toFixed(2)} €</td>
                    <td className="p-2 text-right text-orange-700">{r.interets.toFixed(2)} €</td>
                    <td className="p-2 text-right text-emerald-700">{r.capital.toFixed(2)} €</td>
                    <td className="p-2 text-right font-semibold">{r.crd.toFixed(2)} €</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 italic mt-3">
        Tableau d'amortissement théorique (annuités constantes, hors assurance et frais). Ce document ne remplace pas le tableau d'amortissement officiel annexé à votre offre de prêt.
      </p>
    </div>
  )
}
