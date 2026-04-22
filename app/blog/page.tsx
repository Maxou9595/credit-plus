import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTA } from "@/components/cta"
import { blogPosts, categoryLabels } from "@/lib/blog-posts"
import { getAuthorBySlug } from "@/lib/authors"

export const metadata: Metadata = {
  title: "Blog Crédit Plus — actualités, analyses, guides",
  description:
    "Actualités du crédit immobilier, analyses mensuelles des taux, guides et études de cas. Blog Crédit Plus.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => (b.publishedAt > a.publishedAt ? 1 : -1))

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Blog Crédit Plus
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Actualités du crédit immobilier, analyses mensuelles des taux, guides pratiques et études de cas clients. Nous publions 3 articles par semaine sourcés auprès de l'Observatoire Crédit Logement / CSA, de la Banque de France et du HCSF.
            </p>
          </header>

          <div className="space-y-6">
            {sorted.map((post) => {
              const author = getAuthorBySlug(post.authorSlug)
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article className="p-6 rounded-2xl border border-gray-200 hover:border-primary transition hover:shadow-lg">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5 font-medium">
                        {categoryLabels[post.category]}
                      </span>
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" aria-hidden /> {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden /> {post.readingTime} min</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition mb-2">{post.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      {author && <span className="text-sm text-gray-500">Par {author.name}</span>}
                      <div className="flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                        Lire <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>

          {blogPosts.length < 3 && (
            <aside className="mt-10 p-5 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 text-sm">
              <strong>Note éditoriale :</strong> le calendrier complet de 40 articles planifiés sur mai-juillet 2026
              est documenté dans le repo (<code>docs/refonte-seo/phase-3-calendrier-editorial.xlsx</code>). Publication
              progressive à partir du 1er mai 2026 au rythme de 3 articles par semaine.
            </aside>
          )}
        </section>

        <CTA />
      </main>
    </>
  )
}
