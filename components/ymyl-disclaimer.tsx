import { AlertTriangle } from "lucide-react"

/**
 * Bloc de mention obligatoire en finance YMYL, exigé par l'ACPR.
 * À placer en fin de chaque page qui mentionne un taux, un montant,
 * ou qui fait référence à un produit bancaire.
 *
 * Formulation officielle courante :
 * « Un crédit vous engage et doit être remboursé. Vérifiez vos capacités
 *   de remboursement avant de vous engager. »
 */
export function YmylDisclaimer({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`flex gap-3 items-start p-4 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 text-sm ${className}`}
      role="note"
    >
      <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden />
      <p className="leading-relaxed">
        <strong>Un crédit vous engage et doit être remboursé.</strong> Vérifiez
        vos capacités de remboursement avant de vous engager. Les informations
        présentées sur cette page ne constituent ni une offre de prêt ni un
        engagement contractuel. Toute simulation est donnée à titre indicatif
        et non contractuel.
      </p>
    </aside>
  )
}
