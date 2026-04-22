import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Info, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { AuthorBio } from "@/components/author-bio"
import { CTA } from "@/components/cta"
import { FAQPageSchema } from "@/components/schemas/faq-page"
import { LocalBusinessSchema } from "@/components/schemas/local-business"
import { Button } from "@/components/ui/button"
import { defaultAuthor } from "@/lib/authors"
import { currentMarketRates } from "@/lib/market-rates"
import { b2cCities, getAllB2CSlugs, getB2CCity } from "@/lib/cities-b2c"

/**
 * Page agence B2C — dynamique sur tous les slugs listés dans lib/cities-b2c.ts.
 *
 * Génération statique par défaut : chaque ville devient une page SSG
 * pré-rendue au build, donc instantanée.
 */

export function generateStaticParams() {
  return getAllB2CSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const city = getB2CCity(params.slug)
  if (!city) return {}
  return {
    title: `Courtier immobilier à ${city.name} — Crédit Plus`,
    description: `Courtier immobilier à ${city.name} (${city.dept}) : négociation bancaire, simulation gratuite, accompagnement de A à Z. Réponse sous 24h.`,
    alternates: { canonical: `/agences/${city.slug}` },
    openGraph: {
      title: `Courtier immobilier à ${city.name} — Crédit Plus`,
      description: `Courtier immobilier à ${city.name} : négociation bancaire, simulation gratuite.`,
      url: `https://creditplus-france.com/agences/${city.slug}`,
      type: "website",
    },
  }
}

export default function AgenceCityPage({ params }: { params: { slug: string } }) {
  const city = getB2CCity(params.slug)
  if (!city) notFound()

  return (
    <>
      <LocalBusinessSchema
        name={`Crédit Plus — ${city.name}`}
        city={city.name}
        region={city.region}
        postalCode={city.postalCode}
        streetAddress={city.physicalAgencyAddress}
        slug={city.slug}
        areaServed={[city.name, city.region]}
      />
      <FAQPageSchema questions={city.localFaq} />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[
            { name: "Agences", url: "/agences/partout-en-france" },
            { name: city.name, url: `/agences/${city.slug}` },
          ]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden /> Agence locale — {city.region} · {city.dept}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Courtier immobilier à {city.name} — Crédit Plus
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Obtenir un crédit immobilier à {city.name} en 2026, c'est composer avec un marché local précis :
              prix au m² autour de <strong>{city.priceRangeM2}</strong>, tissu bancaire dominé par {city.mainBanks.slice(0, 2).map((b) => b.name).join(" et ")}, et des profils d'acheteurs variés selon les quartiers.
              Crédit Plus accompagne les projets immobiliers à {city.name} avec +100 partenaires bancaires et un suivi de A à Z.
            </p>
          </header>

          <aside className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">En bref — {city.name}</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-800">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Prix moyen au m² : <strong>{city.priceRangeM2}</strong>{city.medianSaleTime && <> · Délai médian de vente : <strong>{city.medianSaleTime}</strong></>}.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Taux moyen sur 20 ans en {currentMarketRates.periodLabel} : <strong>{currentMarketRates.byDuration[1].averageAll} %</strong> ({currentMarketRates.sourceName}).</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>{city.mainBanks.length} banques principales à {city.name}, toutes partenaires Crédit Plus.</span></li>
              {city.hasPhysicalAgency ? (
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Agence physique à {city.name} : <strong>{city.physicalAgencyAddress}</strong>.</span></li>
              ) : (
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Accompagnement 100 % à distance depuis nos bureaux de Carignan, avec rendez-vous visio ou à domicile à {city.name}.</span></li>
              )}
            </ul>
          </aside>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/credit-immobilier/simulation">Simuler mon crédit à {city.name} <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="tel:0745885764"><Phone className="h-5 w-5" /> 07 45 88 57 64</a>
            </Button>
          </div>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Le marché immobilier à {city.name} en 2026</h2>
            <p>{city.marketInsight}</p>
            {city.neighborhoods && city.neighborhoods.length > 0 && (
              <>
                <p><strong>Quartiers dynamiques</strong> : {city.neighborhoods.join(", ")}.</p>
              </>
            )}
            <p>
              Les données de marché sont issues de <a href="https://www.meilleursagents.com" target="_blank" rel="noopener noreferrer">Meilleurs Agents</a>, <a href="https://www.seloger.com" target="_blank" rel="noopener noreferrer">SeLoger</a> et <a href="https://www.notaires.fr" target="_blank" rel="noopener noreferrer">les notaires de France</a>. Vérifiées par notre équipe courtier pour le marché {city.name}.
            </p>

            <h2>Les banques à {city.name} et leurs spécificités</h2>
            <p>Cinq établissements dominent le crédit immobilier à {city.name}. Chacun a ses forces — un courtier IOBSP les met en concurrence sur le même dossier pour obtenir la meilleure combinaison taux + assurance + frais.</p>
            <ul>
              {city.mainBanks.map((b) => (
                <li key={b.name}><strong>{b.name}</strong> — {b.focus}</li>
              ))}
            </ul>

            <h2>Combien coûte un courtier immobilier à {city.name}</h2>
            <p>
              Nos honoraires à {city.name} suivent la grille tarifaire nationale Crédit Plus : environ 1 % du montant emprunté, plafonnés à 1 500-3 000 €, dus uniquement à la signature de l'offre de prêt. La commission bancaire reversée par la banque partenaire s'ajoute, sans coût supplémentaire pour vous. Aucun acteur du courtage ne peut légalement prétendre être « 100 % gratuit » — voir notre page dédiée <Link href="/courtier-immobilier/prix-courtier">Combien coûte un courtier</Link>.
            </p>

            <h2>Comment se déroule un dossier à {city.name}</h2>
            <ol>
              <li><strong>Premier contact</strong> — téléphone, email ou formulaire en ligne. Réponse sous 24h.</li>
              <li><strong>Bilan de situation</strong> — revenus, charges, apport, projet, calendrier. Analyse sous 48h.</li>
              <li><strong>Simulation et plan de financement</strong> — PTZ éventuel, apport, assurance, prêts aidés.</li>
              <li><strong>Dépôt auprès de {city.mainBanks.length > 3 ? "3 à 5" : "3"} banques</strong> — sélection selon votre profil, dossiers en parallèle.</li>
              <li><strong>Accord de principe</strong> — 10 à 15 jours selon l'établissement.</li>
              <li><strong>Négociation du package</strong> — taux, assurance, frais, garantie, domiciliation.</li>
              <li><strong>Offre de prêt et signature</strong> — 11 jours de délai légal de réflexion, puis versement chez le notaire.</li>
            </ol>

            {city.hasPhysicalAgency && city.physicalAgencyAddress && (
              <>
                <h2>Notre agence à {city.name}</h2>
                <p>
                  Crédit Plus dispose d'une implantation physique à {city.name} :
                </p>
                <ul className="not-prose my-4 space-y-2">
                  <li className="flex items-start gap-2"><MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>{city.physicalAgencyAddress}</span></li>
                  <li className="flex items-start gap-2"><Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><a href="tel:0745885764" className="underline">07 45 88 57 64</a></li>
                  <li className="flex items-start gap-2"><Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><a href="mailto:contact@creditplus-france.com" className="underline">contact@creditplus-france.com</a></li>
                  <li className="flex items-start gap-2"><Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Lundi – Vendredi : 9h–18h · Samedi sur rendez-vous</span></li>
                </ul>
              </>
            )}
          </article>

          <section className="mt-12 mb-10" aria-labelledby="faq-title-city">
            <h2 id="faq-title-city" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes à {city.name}</h2>
            <div className="space-y-3">
              {city.localFaq.map((item) => (
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

          <section className="mt-12 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Autres agences Crédit Plus</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {b2cCities.filter((c) => c.slug !== city.slug).slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  href={`/agences/${c.slug}`}
                  className="block p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition"
                >
                  <div className="font-medium text-gray-900">{c.name}</div>
                  <div className="text-xs text-gray-500">{c.region} · {c.dept}</div>
                </Link>
              ))}
            </div>
          </section>

          <AuthorBio author={defaultAuthor} publishedDate="2026-04-01" updatedDate="2026-04-01" />
          <YmylDisclaimer />
        </section>

        <CTA />
      </main>
    </>
  )
}
