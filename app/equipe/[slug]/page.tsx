import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BadgeCheck, Linkedin, Mail } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { PersonSchema } from "@/components/schemas/person"
import { authors, getAuthorBySlug } from "@/lib/authors"

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getAuthorBySlug(params.slug)
  if (!a) return {}
  return {
    title: `${a.name} — ${a.jobTitle ?? "Courtier IOBSP"} chez Crédit Plus`,
    description: a.shortBio ?? `Découvrez le parcours et les spécialités de ${a.name}, courtier Crédit Plus.`,
    alternates: { canonical: `/equipe/${a.slug}` },
  }
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const a = getAuthorBySlug(params.slug)
  if (!a) notFound()

  return (
    <>
      <PersonSchema
        name={a.name}
        slug={a.slug}
        jobTitle={a.jobTitle}
        description={a.shortBio}
        image={a.photo}
        oriasNumber={a.oriasNumber}
        linkedin={a.linkedin}
        alumniOf={a.credentials}
        knowsAbout={a.specialties}
      />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[
            { name: "Équipe", url: "/equipe" },
            { name: a.name, url: `/equipe/${a.slug}` },
          ]} />

          <header className="mb-10 flex flex-col sm:flex-row items-start gap-6">
            {a.photo ? (
              <img src={a.photo} alt={a.name} className="h-32 w-32 rounded-2xl object-cover border-2 border-primary/30 flex-shrink-0" />
            ) : (
              <div className="h-32 w-32 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/30 flex-shrink-0">
                <span className="text-4xl font-semibold text-primary">
                  {a.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">{a.name}</h1>
              <p className="text-lg text-gray-600 mb-3">{a.jobTitle}</p>
              <div className="flex flex-wrap items-center gap-3">
                {a.oriasNumber && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-sm font-medium text-emerald-700">
                    <BadgeCheck className="h-4 w-4" aria-hidden /> ORIAS n°{a.oriasNumber}
                  </span>
                )}
                {a.linkedin && (
                  <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                    <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                  </a>
                )}
                {a.email && (
                  <a href={`mailto:${a.email}`} className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                    <Mail className="h-4 w-4" aria-hidden /> Contact
                  </a>
                )}
              </div>
            </div>
          </header>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            {a.longBio && a.longBio.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}

            {a.specialties && a.specialties.length > 0 && (
              <>
                <h2>Spécialités</h2>
                <ul>{a.specialties.map((s) => <li key={s}>{s}</li>)}</ul>
              </>
            )}
            {a.credentials && a.credentials.length > 0 && (
              <>
                <h2>Formations et certifications</h2>
                <ul>{a.credentials.map((c) => <li key={c}>{c}</li>)}</ul>
              </>
            )}
            {a.yearsOfExperience && (
              <p><strong>Expérience :</strong> {a.yearsOfExperience} ans en courtage.</p>
            )}
          </article>

          <div className="mt-10"><YmylDisclaimer /></div>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Autres membres de l'équipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {authors.filter((x) => x.slug !== a.slug).map((x) => (
                <Link key={x.slug} href={`/equipe/${x.slug}`} className="block p-4 rounded-lg border border-gray-200 hover:border-primary transition">
                  <div className="font-medium text-gray-900">{x.name}</div>
                  <div className="text-sm text-gray-500">{x.jobTitle}</div>
                </Link>
              ))}
            </div>
          </section>
        </section>

        <CTA />
      </main>
    </>
  )
}
