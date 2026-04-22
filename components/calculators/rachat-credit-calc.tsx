"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function monthly(p: number, annualRate: number, months: number) {
  if (annualRate === 0) return p / months
  const r = annualRate / 12
  return (p * r) / (1 - Math.pow(1 + r, -months))
}

export function RachatCreditCalc() {
  const [crd, setCrd] = useState(180000)
  const [tauxActuel, setTauxActuel] = useState(4.10)
  const [dureeRestanteAns, setDureeRestanteAns] = useState(18)
  const [tauxMarche, setTauxMarche] = useState(3.20)
  const [iraMois, setIraMois] = useState(6) // IRA = min(3% CRD, X mois d'intérêts)
  const [fraisDossier, setFraisDossier] = useState(1500)
  const [fraisGarantie, setFraisGarantie] = useState(2500)

  const result = useMemo(() => {
    const months = dureeRestanteAns * 12
    const rActuel = tauxActuel / 100
    const rMarche = tauxMarche / 100

    const mensualiteActuelle = monthly(crd, rActuel, months)
    const mensualiteNouvelle = monthly(crd, rMarche, months)

    const coutActuel = mensualiteActuelle * months
    const coutNouveau = mensualiteNouvelle * months

    // IRA plafonnée : min(3% CRD, X mois d'intérêts)
    const ira3Pct = crd * 0.03
    const iraMoisInterets = crd * rActuel * (iraMois / 12)
    const ira = Math.min(ira3Pct, iraMoisInterets)

    const fraisTotal = ira + fraisDossier + fraisGarantie
    const economieBrute = coutActuel - coutNouveau
    const economieNette = economieBrute - fraisTotal
    const gainMensuel = mensualiteActuelle - mensualiteNouvelle
    const retourInvestissement = gainMensuel > 0 ? fraisTotal / gainMensuel : Infinity

    // Règle des 3
    const ecartTaux = tauxActuel - tauxMarche
    const regle1Ok = ecartTaux >= 0.7
    const regle2Ok = crd >= 70000
    const regle3Ok = dureeRestanteAns >= 7
    const troisRegles = regle1Ok && regle2Ok && regle3Ok

    return {
      mensualiteActuelle: Math.round(mensualiteActuelle),
      mensualiteNouvelle: Math.round(mensualiteNouvelle),
      ira: Math.round(ira),
      fraisTotal: Math.round(fraisTotal),
      economieBrute: Math.round(economieBrute),
      economieNette: Math.round(economieNette),
      gainMensuel: Math.round(gainMensuel),
      retourInvestissement: isFinite(retourInvestissement) ? retourInvestissement.toFixed(1) : "—",
      troisRegles,
      regle1Ok, regle2Ok, regle3Ok,
      ecartTaux: ecartTaux.toFixed(2),
    }
  }, [crd, tauxActuel, dureeRestanteAns, tauxMarche, iraMois, fraisDossier, fraisGarantie])

  return (
    <div className="not-prose my-6 p-6 rounded-2xl border border-gray-200 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <Label htmlFor="crd">Capital restant dû (€)</Label>
          <Input id="crd" type="number" min={0} value={crd} onChange={(e) => setCrd(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="tx1">Taux actuel (% annuel)</Label>
          <Input id="tx1" type="number" step="0.05" value={tauxActuel} onChange={(e) => setTauxActuel(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="duree">Durée restante (années)</Label>
          <Input id="duree" type="number" min={1} value={dureeRestanteAns} onChange={(e) => setDureeRestanteAns(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="tx2">Taux de rachat (% annuel)</Label>
          <Input id="tx2" type="number" step="0.05" value={tauxMarche} onChange={(e) => setTauxMarche(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="ira">IRA : mois d'intérêts (généralement 6)</Label>
          <Input id="ira" type="number" min={0} max={12} value={iraMois} onChange={(e) => setIraMois(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="fd">Frais de dossier nouvelle banque (€)</Label>
          <Input id="fd" type="number" min={0} value={fraisDossier} onChange={(e) => setFraisDossier(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="fg">Frais nouvelle garantie (€)</Label>
          <Input id="fg" type="number" min={0} value={fraisGarantie} onChange={(e) => setFraisGarantie(+e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Mensualité actuelle</div>
          <div className="text-xl font-bold text-gray-900">{result.mensualiteActuelle} €/mois</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Mensualité après rachat</div>
          <div className="text-xl font-bold text-primary">{result.mensualiteNouvelle} €/mois</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Gain mensuel</div>
          <div className="text-xl font-bold text-emerald-700">–{result.gainMensuel} €/mois</div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white border border-primary/30 mb-4">
        <div className="text-xs uppercase tracking-wider text-primary mb-2 font-semibold">Règle des 3 — rentabilité</div>
        <ul className="text-sm text-gray-800 space-y-1">
          <li>{result.regle1Ok ? "✅" : "❌"} Écart de taux : {result.ecartTaux} pt {result.regle1Ok ? "(≥ 0,7 pt, OK)" : "(doit être ≥ 0,7 pt)"}</li>
          <li>{result.regle2Ok ? "✅" : "❌"} Capital restant dû : {crd.toLocaleString("fr-FR")} € {result.regle2Ok ? "(≥ 70 000 €, OK)" : "(doit être ≥ 70 000 €)"}</li>
          <li>{result.regle3Ok ? "✅" : "❌"} Durée restante : {dureeRestanteAns} ans {result.regle3Ok ? "(≥ 7 ans, OK)" : "(doit être ≥ 7 ans)"}</li>
        </ul>
        <div className="mt-3 text-sm font-semibold">
          {result.troisRegles ? "→ Rachat a priori rentable." : "→ Rachat à éviter ou à étudier cas par cas (renégociation interne possible)."}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Frais du rachat</div>
          <div className="text-lg font-bold text-gray-900">{result.fraisTotal.toLocaleString("fr-FR")} €</div>
          <div className="text-xs text-gray-500 mt-1">dont IRA {result.ira.toLocaleString("fr-FR")} €</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Économie brute</div>
          <div className="text-lg font-bold text-gray-900">{result.economieBrute.toLocaleString("fr-FR")} €</div>
        </div>
        <div className="p-4 rounded-xl bg-white border-2 border-emerald-400 bg-emerald-50">
          <div className="text-xs text-emerald-700 mb-1 font-semibold">ÉCONOMIE NETTE</div>
          <div className="text-2xl font-bold text-emerald-700">{result.economieNette.toLocaleString("fr-FR")} €</div>
          <div className="text-xs text-gray-600 mt-1">ROI après {result.retourInvestissement} mois</div>
        </div>
      </div>

      <p className="text-xs text-gray-500 italic">
        Calcul indicatif. Les frais réels (IRA, dossier, garantie) dépendent des conditions négociées. Un courtier affine ces chiffres dossier par dossier.
      </p>
    </div>
  )
}
