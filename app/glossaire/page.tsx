import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTA } from "@/components/cta"
import { glossary } from "@/lib/glossary"

export const metadata: Metadata = {
  title: "Glossaire du crédit immobilier : termes expliqués",
  description:
    "Tous les termes du crédit immobilier : TAEG, TEG, HCSF, PTZ, amortissement, IRA, TAEA… Définitions claires.",
  alternates: { canonical: "/glossaire" },
}

export default function GlossairePage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, "fr"))

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Glossaire", url: "/glossaire" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Glossaire du crédit immobilier
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tous les termes essentiels du crédit immobilier expliqués en quelques phrases : TAEG, TAEA, HCSF, PTZ, amortissement, IRA, caution, hypothèque, délégation, loi Lemoine… {glossary.length} entrées à ce jour, extension en cours vers 60-80 termes.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sorted.map((t) => (
              <Link key={t.slug} href={`/glossaire/${t.slug}`} className="group block p-5 rounded-xl border border-gray-200 hover:border-primary transition hover:shadow-md">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary transition">{t.term}</h2>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition" aria-hidden />
                </div>
                {t.synonyms && t.synonyms[0] && (
                  <p className="text-xs text-gray-500 mb-2 italic">{t.synonyms[0]}</p>
                )}
                <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{t.shortDef}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}
