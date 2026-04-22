"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/**
 * Calculateur des frais de notaire — ancien vs neuf.
 * Formule simplifiée basée sur les barèmes 2026 français :
 *  - Neuf : 2 à 3 % du prix (TVA à 20 % + émoluments réduits).
 *  - Ancien : 7 à 8 % selon département (droits de mutation 5,80 % max).
 */
type BienType = "ancien" | "neuf"

export function FraisNotaireCalc() {
  const [prix, setPrix] = useState(250000)
  const [type, setType] = useState<BienType>("ancien")

  const result = useMemo(() => {
    // Barème simplifié :
    //  - Droits de mutation : 5,80 % (ancien) ou 0,715 % (neuf)
    //  - Émoluments notaire : dégressif par tranches, approximé ici
    //  - Contribution sécurité immobilière : 0,10 %
    //  - Débours : 800-1 500 € forfaitaire
    let droitsMutation: number
    if (type === "ancien") {
      droitsMutation = prix * 0.0580
    } else {
      droitsMutation = prix * 0.00715 // taxe publication foncière réduite + TVA déjà intégrée au prix
    }

    // Émoluments notaire par tranches (barème 2021 encore en vigueur) :
    //  - 0 à 6 500 € : 3,870 %
    //  - 6 500 à 17 000 € : 1,596 %
    //  - 17 000 à 60 000 € : 1,064 %
    //  - > 60 000 € : 0,799 %
    let emoluments = 0
    if (prix <= 6500) emoluments = prix * 0.03870
    else if (prix <= 17000) emoluments = 6500 * 0.03870 + (prix - 6500) * 0.01596
    else if (prix <= 60000) emoluments = 6500 * 0.03870 + 10500 * 0.01596 + (prix - 17000) * 0.01064
    else emoluments = 6500 * 0.03870 + 10500 * 0.01596 + 43000 * 0.01064 + (prix - 60000) * 0.00799

    // Neuf : émoluments réduits de 50 % sur la tranche > 17 000 € (dispositif « Macron »)
    if (type === "neuf") emoluments = emoluments * 0.70 // approximation

    const contributionSecu = prix * 0.0010
    const debours = 1000 // forfait moyen

    const total = droitsMutation + emoluments + contributionSecu + debours

    return {
      droitsMutation: Math.round(droitsMutation),
      emoluments: Math.round(emoluments),
      contributionSecu: Math.round(contributionSecu),
      debours,
      total: Math.round(total),
      tauxEffectif: prix > 0 ? (total / prix) * 100 : 0,
    }
  }, [prix, type])

  return (
    <div className="not-prose my-6 p-6 rounded-2xl border border-gray-200 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <Label htmlFor="prix">Prix d'achat (€)</Label>
          <Input id="prix" type="number" min={0} value={prix} onChange={(e) => setPrix(+e.target.value)} />
        </div>
        <div>
          <Label htmlFor="type">Type de bien</Label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value as BienType)} className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm">
            <option value="ancien">Ancien (7-8 % de frais)</option>
            <option value="neuf">Neuf / VEFA (2-3 % de frais)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-gray-200">
          <div className="text-xs uppercase text-gray-500">Droits de mutation</div>
          <div className="text-lg font-bold text-gray-900">{result.droitsMutation.toLocaleString("fr-FR")} €</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-gray-200">
          <div className="text-xs uppercase text-gray-500">Émoluments notaire</div>
          <div className="text-lg font-bold text-gray-900">{result.emoluments.toLocaleString("fr-FR")} €</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-gray-200">
          <div className="text-xs uppercase text-gray-500">Sécurité immobilière</div>
          <div className="text-lg font-bold text-gray-900">{result.contributionSecu.toLocaleString("fr-FR")} €</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-gray-200">
          <div className="text-xs uppercase text-gray-500">Débours forfait.</div>
          <div className="text-lg font-bold text-gray-900">{result.debours.toLocaleString("fr-FR")} €</div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white border-2 border-primary">
        <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Total frais de notaire (estimation)</div>
        <div className="text-3xl font-bold text-primary">{result.total.toLocaleString("fr-FR")} €</div>
        <div className="text-sm text-gray-600 mt-1">Soit {result.tauxEffectif.toFixed(2)} % du prix d'achat</div>
      </div>

      <p className="text-xs text-gray-500 italic mt-4">
        Estimation indicative basée sur les barèmes 2026. Les droits de mutation varient légèrement
        d'un département à l'autre (Indre et Isère à 5,09 %, reste de la France à 5,80 %). Pour un chiffrage
        exact, consultez un notaire.
      </p>
    </div>
  )
}
