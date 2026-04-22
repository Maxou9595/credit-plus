import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { AuthorBio } from "@/components/author-bio"
import { CTA } from "@/components/cta"
import { ArticleSchema } from "@/components/schemas/article"
import { blogPosts, getBlogPost, categoryLabels } from "@/lib/blog-posts"
import { getAuthorBySlug } from "@/lib/authors"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getBlogPost(params.slug)
  if (!p) return {}
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.description,
      url: `https://credit-plus.fr/blog/${p.slug}`,
      type: "article",
      publishedTime: p.publishedAt,
      modifiedTime: p.updatedAt ?? p.publishedAt,
      authors: [getAuthorBySlug(p.authorSlug)?.name].filter(Boolean) as string[],
    },
    keywords: p.keywords,
  }
}

/**
 * Mini renderer markdown minimaliste pour le contenu blog.
 * Pour un rendu plus riche (images, code blocks, etc.), migrer vers MDX ou react-markdown.
 */
function renderMarkdown(md: string) {
  const lines = md.split("\n")
  const elements: React.ReactNode[] = []
  let currentList: string[] | null = null
  let currentOl: string[] | null = null
  let tableLines: string[] | null = null

  const flushList = () => {
    if (currentList) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-4 list-disc pl-6 space-y-1">
          {currentList.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: inline(item) }} />)}
        </ul>
      )
      currentList = null
    }
    if (currentOl) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="my-4 list-decimal pl-6 space-y-1">
          {currentOl.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: inline(item) }} />)}
        </ol>
      )
      currentOl = null
    }
    if (tableLines) {
      elements.push(renderTable(tableLines, `tbl-${elements.length}`))
      tableLines = null
    }
  }

  function inline(s: string): string {
    return s
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="text-primary underline" href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/`([^`]+)`/g, "<code class=\"bg-gray-100 text-sm px-1 py-0.5 rounded\">$1</code>")
  }

  function renderTable(rows: string[], k: string) {
    const header = rows[0].split("|").map((c) => c.trim()).filter(Boolean)
    const body = rows.slice(2).map((r) => r.split("|").map((c) => c.trim()).filter(Boolean))
    return (
      <div key={k} className="my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr>{header.map((h, i) => <th key={i} className="text-left p-3 border border-gray-200" dangerouslySetInnerHTML={{ __html: inline(h) }} />)}</tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri}>{row.map((c, ci) => <td key={ci} className="p-3 border border-gray-200" dangerouslySetInnerHTML={{ __html: inline(c) }} />)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  for (const raw of lines) {
    const line = raw.trimEnd()
    if (line.startsWith("## ")) { flushList(); elements.push(<h2 key={elements.length} className="text-2xl font-bold text-gray-900 mt-8 mb-3">{line.slice(3)}</h2>); continue }
    if (line.startsWith("### ")) { flushList(); elements.push(<h3 key={elements.length} className="text-xl font-bold text-gray-900 mt-6 mb-2">{line.slice(4)}</h3>); continue }
    if (line.startsWith("> ")) { flushList(); elements.push(<blockquote key={elements.length} className="border-l-4 border-primary pl-4 italic my-4 text-gray-700" dangerouslySetInnerHTML={{ __html: inline(line.slice(2)) }} />); continue }
    if (line.startsWith("|")) { tableLines = tableLines ?? []; tableLines.push(line); continue }
    if (line.match(/^\d+\. /)) {
      flushList()
      currentOl = currentOl ?? []
      currentOl.push(line.replace(/^\d+\. /, ""))
      continue
    }
    if (line.startsWith("- ")) {
      if (currentOl) { flushList() }
      currentList = currentList ?? []
      currentList.push(line.slice(2))
      continue
    }
    if (line === "") { flushList(); continue }
    flushList()
    elements.push(<p key={elements.length} className="my-4 leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: inline(line) }} />)
  }
  flushList()
  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()
  const author = getAuthorBySlug(post.authorSlug)

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.description}
        urlPath={`/blog/${post.slug}`}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        author={{
          name: author?.name ?? "Équipe Crédit Plus",
          slug: author?.slug ?? "equipe-credit-plus",
          oriasNumber: author?.oriasNumber,
          jobTitle: author?.jobTitle,
        }}
        citations={post.citations}
      />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[
            { name: "Blog", url: "/blog" },
            { name: post.title.slice(0, 40) + (post.title.length > 40 ? "…" : ""), url: `/blog/${post.slug}` },
          ]} />

          <header className="mb-8">
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5 font-medium">
                {categoryLabels[post.category]}
              </span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" aria-hidden /> {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden /> {post.readingTime} min</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">{post.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{post.description}</p>
          </header>

          <article className="text-gray-700 leading-relaxed">
            {renderMarkdown(post.content)}
          </article>

          {post.citations && post.citations.length > 0 && (
            <section className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Sources</h3>
              <ul className="space-y-1.5 text-sm">
                {post.citations.map((c, i) => (
                  <li key={i}>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{c.name}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {author && <AuthorBio author={author} publishedDate={post.publishedAt} updatedDate={post.updatedAt} />}
          <YmylDisclaimer />

          <div className="mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Retour au blog
            </Link>
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}
