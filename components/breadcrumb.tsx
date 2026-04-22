import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { BreadcrumbListSchema, type BreadcrumbItem } from "@/components/schemas/breadcrumb"

/**
 * Breadcrumb — affichage visuel + injection JSON-LD BreadcrumbList.
 *
 * Usage :
 *   <Breadcrumb items={[
 *     { name: "Crédit immobilier", url: "/credit-immobilier" },
 *     { name: "Taux", url: "/credit-immobilier/taux" },
 *   ]} />
 *
 * L'entrée "Accueil" est ajoutée automatiquement en tête.
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const full: BreadcrumbItem[] = [{ name: "Accueil", url: "/" }, ...items]

  return (
    <>
      <BreadcrumbListSchema items={full} />
      <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap items-center gap-1.5">
          {full.map((item, idx) => {
            const isLast = idx === full.length - 1
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {idx === 0 ? (
                  <Link
                    href={item.url}
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                    aria-label="Retour à l'accueil"
                  >
                    <Home className="h-3.5 w-3.5" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ) : isLast ? (
                  <span aria-current="page" className="text-gray-900 font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="h-3.5 w-3.5 text-gray-400" aria-hidden />}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
