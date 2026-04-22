import type { Metadata } from "next"
import Link from "next/link"
import { BadgeCheck, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { authors } from "@/lib/authors"

export const metadata: Metadata = {
  title: "L'équipe Crédit Plus — nos courtiers IOBSP",
  description:
    "Rencontrez les courtiers Crédit Plus : parcours, ORIAS individuels, spécialités, LinkedIn. Transparence E-E-A-T.",
  alternates: { canonical: "/equipe" },
}

export default function EquipePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Équipe", url: "/equipe" }]} />

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              L'équipe Crédit Plus
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nos courtiers IOBSP sont chacun immatriculés à l'<a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="underline text-primary">ORIAS</a>, contrôlés par l'ACPR, et certifiés sur les 14 modules réglementaires de la profession. Chaque collaborateur affiche son numéro ORIAS individuel, son parcours et ses spécialités. C'est notre engagement de transparence et d'expertise.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {authors.map((a) => (
              <Link
                key={a.slug}
                href={`/equipe/${a.slug}`}
                className="group block p-6 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  {a.photo ? (
                    <img src={a.photo} alt={a.name} className="h-16 w-16 rounded-full object-cover border-2 border-primary/30" />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                      <span className="text-xl font-semibold text-primary">
                        {a.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-900 group-hover:text-primary transition">{a.name}</div>
                    <div className="text-sm text-gray-500">{a.jobTitle}</div>
                    {a.oriasNumber && (
                      <span className="inline-flex items-center gap-1 mt-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        <BadgeCheck className="h-3.5 w-3.5" aria-hidden /> ORIAS n°{a.oriasNumber}
                      </span>
                    )}
                  </div>
                </div>
                {a.shortBio && <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">{a.shortBio}</p>}
                {a.specialties && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {a.specialties.slice(0, 3).map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{s}</span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Voir le profil <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          {authors.length <= 1 && (
            <aside className="mt-10 p-5 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 text-sm">
              <strong>Note éditoriale :</strong> cette page est en cours d'enrichissement. Les fiches individuelles
              des courtiers Crédit Plus (photos, parcours, ORIAS individuels, LinkedIn) seront publiées après validation
              RH. Pour toute question d'identité éditoriale sur un contenu publié, contactez{" "}
              <a href="mailto:contact@credit-plus.fr" className="underline">contact@credit-plus.fr</a>.
            </aside>
          )}

          <div className="mt-14"><YmylDisclaimer /></div>
        </section>

        <CTA />
      </main>
    </>
  )
}
