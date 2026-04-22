import Link from "next/link"
import { Info, ArrowRight, CheckCircle2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { AuthorBio } from "@/components/author-bio"
import { CTA } from "@/components/cta"
import { FAQPageSchema } from "@/components/schemas/faq-page"
import { Button } from "@/components/ui/button"
import { defaultAuthor } from "@/lib/authors"
import React from "react"

/**
 * Shell commun aux pages filles d'un pilier (pages longue traîne).
 * Prend un titre, un breadcrumb, une intro, un TL;DR, le corps markdown-ish
 * (passé en children), une FAQ, et injecte automatiquement JSON-LD + YMYL + Auteur.
 */

export type TLDRItem = string | React.ReactNode
export type FAQItem = { q: string; a: string }
export type BreadcrumbConfig = { name: string; url: string }

type Props = {
  breadcrumb: BreadcrumbConfig[]
  eyebrow: string
  h1: string
  intro: React.ReactNode
  tldr?: TLDRItem[]
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  children: React.ReactNode
  faqs: FAQItem[]
  publishedDate?: string
  updatedDate?: string
}

export function PillarSubPage({
  breadcrumb,
  eyebrow,
  h1,
  intro,
  tldr,
  ctaPrimary = { label: "Simuler mon crédit", href: "/credit-immobilier/simulation" },
  ctaSecondary,
  children,
  faqs,
  publishedDate = "2026-04-01",
  updatedDate = "2026-04-01",
}: Props) {
  return (
    <>
      <FAQPageSchema questions={faqs} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={breadcrumb} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">{h1}</h1>
            <div className="text-lg text-gray-600 leading-relaxed">{intro}</div>
          </header>

          {tldr && tldr.length > 0 && (
            <aside className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-12">
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">En bref</h2>
              <ul className="space-y-2 text-sm md:text-base text-gray-800">
                {tldr.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button size="lg" className="gap-2" asChild>
              <Link href={ctaPrimary.href}>{ctaPrimary.label} <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            {ctaSecondary && (
              <Button size="lg" variant="outline" asChild>
                <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
              </Button>
            )}
          </div>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            {children}
          </article>

          {faqs.length > 0 && (
            <section className="mt-12 mb-10" aria-labelledby="faq-subpage">
              <h2 id="faq-subpage" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
              <div className="space-y-3">
                {faqs.map((item) => (
                  <details key={item.q} className="group border border-gray-200 rounded-lg">
                    <summary className="cursor-pointer list-none flex items-start justify-between p-4 gap-3 hover:bg-gray-50">
                      <span className="font-semibold text-gray-900 text-base">{item.q}</span>
                      <Info className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform" aria-hidden />
                    </summary>
                    <p className="px-4 pb-4 text-gray-700 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <AuthorBio author={defaultAuthor} publishedDate={publishedDate} updatedDate={updatedDate} />
          <YmylDisclaimer />
        </section>

        <CTA />
      </main>
    </>
  )
}
