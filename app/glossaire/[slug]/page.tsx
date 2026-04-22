import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, BookOpen } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { getAllGlossarySlugs, getGlossaryTerm, glossary } from "@/lib/glossary"

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = getGlossaryTerm(params.slug)
  if (!t) return {}
  return {
    title: `${t.term} — Définition`,
    description: t.shortDef.slice(0, 155),
    alternates: { canonical: `/glossaire/${t.slug}` },
  }
}

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
  const t = getGlossaryTerm(params.slug)
  if (!t) notFound()

  // JSON-LD DefinedTerm
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `https://credit-plus.fr/glossaire/${t.slug}#definedterm`,
    name: t.term,
    description: t.shortDef,
    url: `https://credit-plus.fr/glossaire/${t.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossaire du crédit immobilier — Crédit Plus",
      url: "https://credit-plus.fr/glossaire",
    },
    ...(t.synonyms && { alternateName: t.synonyms }),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="max-w-3xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[
            { name: "Glossaire", url: "/glossaire" },
            { name: t.term, url: `/glossaire/${t.slug}` },
          ]} />

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-medium uppercase tracking-wider mb-2">
              <BookOpen className="h-4 w-4" aria-hidden /> Glossaire
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">{t.term}</h1>
            {t.synonyms && t.synonyms[0] && (
              <p className="text-lg text-gray-500 italic">Aussi appelé : {t.synonyms.join(" · ")}</p>
            )}
          </header>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <p className="lead text-xl text-gray-800 font-medium leading-relaxed">{t.shortDef}</p>

            {t.longDef.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}

            {t.legalRef && (
              <aside className="not-prose my-6 p-4 rounded-lg bg-gray-50 border border-gray-200 text-sm">
                <strong>Référence légale :</strong> {t.legalRef}
              </aside>
            )}

            {t.relatedPages && t.relatedPages.length > 0 && (
              <>
                <h2>Pour aller plus loin</h2>
                <ul>{t.relatedPages.map((p) => <li key={p}><Link href={p}>{p}</Link></li>)}</ul>
              </>
            )}
          </article>

          <YmylDisclaimer className="mt-10" />

          {t.relatedTerms && t.relatedTerms.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Termes liés</h2>
              <div className="flex flex-wrap gap-2">
                {t.relatedTerms.map((slug) => {
                  const rt = glossary.find((g) => g.slug === slug)
                  if (!rt) return null
                  return (
                    <Link key={slug} href={`/glossaire/${slug}`} className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 hover:border-primary hover:bg-primary/5 transition text-sm">
                      {rt.term}
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

          <div className="mt-10">
            <Link href="/glossaire" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Retour au glossaire
            </Link>
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}
