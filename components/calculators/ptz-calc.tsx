"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Zone = "A" | "B1" | "B2" | "C"

// Plafonds de ressources indicatifs 2026 (à maintenir à jour avec l'arrêté)
const plafondsResources: Record<Zone, number[]> = {
  A: [49000, 73500, 88200, 102900, 117600],
  B1: [34500, 51750, 62100, 72450, 82800],
  B2: [31500, 47250, 56700, 66150, 75600],
  C: [28500, 42750, 51300, 59850, 68400],
}

// Quotité maximale selon zone et type de projet
const quotite: Record<Zone, { neufCollectif: number; ancienRenove: number }> = {
  A:  { neufCollectif: 0.40, ancienRenove: 0 },
  B1: { neufCollectif: 0.40, ancienRenove: 0 },
  B2: { neufCollectif: 0.40, ancienRenove: 0.20 },
  C:  { neufCollectif: 0, ancienRenove: 0.20 },
}

// Plafonds de montant par zone et tranche (1 = bas revenus, 4 = plus élevés)
const plafondMontant: Record<Zone, number> = {
  A: 100000, B1: 80000, B2: 60000, C: 40000,
}

export function PtzCalc() {
  const [zone, setZone] = useState<Zone>("B1")
  const [nbPersonnes, setNbPersonnes] = useState(2)
  const [revenuFiscal, setRevenuFiscal] = useState(42000)
  const [prixAchat, setPrixAchat] = useState(220000)
  const [typeProjet, setTypeProjet] = useState<"neufCollectif" | "ancienRenove">("neufCollectif")

  const result = useMemo(() => {
    const plafond = plafondsResources[zone][Math.min(nbPersonnes, plafondsResources[zone].length) - 1]
    const eligibleResources = revenuFiscal <= plafond

    const quot = quotite[zone][typeProjet]
    if (quot === 0) {
      return {
        eligibleResources,
        eligibleProjet: false,
        montantPTZ: 0,
        plafond,
        messageProjet: typeProjet === "neufCollectif"
          ? "Le PTZ 2026 ne finance pas le neuf collectif en zone C."
          : "Le PTZ 2026 ne finance pas l'ancien rénové en zones A ou B1 (uniquement B2 et C).",
      }
    }

    const montantParProjet = prixAchat * quot
    const montantPlafonne = Math.min(montantParProjet, plafondMontant[zone])

    return {
      eligibleResources,
      eligibleProjet: true,
      montantPTZ: Math.round(montantPlafonne),
      plafond,
      quotite: quot,
      messageProjet: null as string | null,
    }
  }, [zone, nbPersonnes, revenuFiscal, prixAchat, typeProjet])

  const eligible = result.eligibleResources && result.eligibleProjet

  return (
    <div className="not-prose my-6 p-6 rounded-2xl border border-gray-200 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <Label htmlFor="zone">Zone PTZ</Label>
          <select id="zone" value={zone} onChange={(e) => setZone(e.target.value as Zone)} className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm">
            <option value="A">A — Paris, grandes métropoles</option>
            <option value="B1">B1 — Métropoles régionales (Reims, Strasbourg, Nancy, Metz…)</option>
            <option value="B2">B2 — Villes moyennes</option>
            <option value="C">C — Zones rurales, petites villes (Carignan, Sedan…)</option>
          </select>
        </div>
        <div>
          <Label htmlFor="pers">Personnes dans le foyer</Label>
          <Input id="pers" type="number" min={1} max={5} value={nbPersonnes} onChange={(e) => setNbPersonnes(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="revenu">Revenu fiscal de référence N-2 (€)</Label>
          <Input id="revenu" type="number" min={0} value={revenuFiscal} onChange={(e) => setRevenuFiscal(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="prix">Prix d'achat total (€)</Label>
          <Input id="prix" type="number" min={0} value={prixAchat} onChange={(e) => setPrixAchat(+e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="typeproj">Type de projet</Label>
          <select id="typeproj" value={typeProjet} onChange={(e) => setTypeProjet(e.target.value as "neufCollectif" | "ancienRenove")} className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm">
            <option value="neufCollectif">Neuf collectif (appartement neuf ou VEFA)</option>
            <option value="ancienRenove">Ancien avec rénovation énergétique (≥ 25 % travaux)</option>
          </select>
        </div>
      </div>

      {!result.eligibleProjet ? (
        <div className="p-5 rounded-xl border-2 border-red-300 bg-red-50">
          <div className="text-sm font-semibold text-red-700 mb-2">Projet non éligible au PTZ 2026</div>
          <p className="text-sm text-gray-700">{result.messageProjet}</p>
        </div>
      ) : !result.eligibleResources ? (
        <div className="p-5 rounded-xl border-2 border-red-300 bg-red-50">
          <div className="text-sm font-semibold text-red-700 mb-2">Revenus au-dessus du plafond</div>
          <p className="text-sm text-gray-700">
            Votre revenu fiscal de référence ({revenuFiscal.toLocaleString("fr-FR")} €) dépasse le plafond de la zone {zone} pour un foyer de {nbPersonnes} personne(s) : <strong>{result.plafond.toLocaleString("fr-FR")} €</strong>.
          </p>
        </div>
      ) : (
        <div className="p-5 rounded-xl border-2 border-emerald-400 bg-emerald-50">
          <div className="text-xs uppercase tracking-wider text-emerald-700 font-semibold mb-1">PTZ estimé</div>
          <div className="text-4xl font-bold text-emerald-800">{result.montantPTZ.toLocaleString("fr-FR")} €</div>
          <div className="text-sm text-gray-700 mt-2">
            Quotité {((result.quotite ?? 0) * 100).toFixed(0)} % du prix d'achat, plafonné à {plafondMontant[zone].toLocaleString("fr-FR")} € en zone {zone}.
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Durée standard : 20-25 ans avec différé de 5 à 15 ans selon la tranche de revenus.
          </div>
        </div>
      )}

      <p className="text-xs text-gray-500 italic mt-4">
        Estimation indicative basée sur les plafonds 2026. Le PTZ est accordé par la banque partenaire, sous conditions (primo-accédant, résidence principale, performance énergétique cible en cas de rénovation). Confirmez votre éligibilité via un courtier.
      </p>
    </div>
  )
}
