import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { AuthorBio } from "@/components/author-bio"
import { CTA } from "@/components/cta"
import { FAQPageSchema } from "@/components/schemas/faq-page"
import { ServiceSchema } from "@/components/schemas/service"
import { Button } from "@/components/ui/button"
import { defaultAuthor } from "@/lib/authors"

export const metadata: Metadata = {
  title: "Investissement locatif 2026 : guide complet",
  description:
    "Guide du crédit pour investissement locatif en 2026 : SCI, LMNP, Denormandie, déficit foncier, rendement. Financez votre projet.",
  alternates: { canonical: "/investissement-locatif" },
}

const faqs = [
  { q: "Quel apport pour un investissement locatif en 2026 ?", a: "Les banques attendent généralement 10 à 20 % d'apport pour un investissement locatif, soit plus que pour une résidence principale. L'apport peut descendre à 0 % sur des dossiers solides (SCI IS avec trésorerie, investisseurs expérimentés), mais reste l'exception. Un apport de 15-20 % améliore le taux et sécurise l'accord de la banque." },
  { q: "Peut-on emprunter à 110 % en investissement locatif ?", a: "Oui, mais difficile. Le 110 % finance le bien + les frais de notaire + la garantie. Il suppose un excellent dossier (CDI long, revenus élevés, reste-à-vivre solide) et une banque qui utilise la flexibilité 20 % HCSF sur ce type de projet. Un courtier négocie ce type de montage en présentant le dossier aux 3-5 banques les plus ouvertes." },
  { q: "LMNP ou SCI : que choisir ?", a: "LMNP au régime réel est adapté à un premier investissement locatif meublé (studios, T2 étudiants ou jeunes actifs) : l'amortissement comptable neutralise fiscalement les loyers pendant 15-20 ans. SCI à l'IS convient aux projets familiaux patrimoniaux avec réinvestissement des bénéfices, au prix d'une taxation des plus-values à la revente. La SCI à l'IR reste un bon compromis pour la transmission familiale." },
  { q: "Quel régime pour un premier investissement ?", a: "Pour un premier investissement meublé, LMNP au régime réel maximise le rendement net après impôt via l'amortissement. Pour un investissement nu, le régime micro-foncier (jusqu'à 15 000 € de loyers) est simple, puis régime réel au-delà. SCI uniquement si plusieurs investisseurs ou objectif de transmission." },
  { q: "Peut-on cumuler PTZ et investissement locatif ?", a: "Non. Le PTZ est réservé à la résidence principale du primo-accédant. Un investissement locatif ne permet pas d'y prétendre. En revanche, un premier achat en résidence principale finançable par PTZ peut être transformé en investissement locatif après 6 ans de résidence effective." },
  { q: "La loi Pinel existe-t-elle encore en 2026 ?", a: "Non. Le dispositif Pinel a pris fin au 31 décembre 2024. Les alternatives en 2026 sont : Denormandie (ancien rénové dans les 300 villes éligibles), LLi (Loc'Avantages, logement intermédiaire), déficit foncier (jusqu'à 21 400 € imputables en cas de travaux énergétiques, jusqu'en 2027)." },
  { q: "Quel rendement locatif viser ?", a: "Le rendement brut moyen France 2026 est de 5,8 %. Un rendement brut sain se situe entre 5 et 8 % selon la ville : au-delà, vérifier la vacance locative ; en-dessous de 4 %, la rentabilité nette peut devenir négative après charges et fiscalité. Le rendement net-net (après impôts) est typiquement 40 à 55 % du rendement brut." },
  { q: "Les banques acceptent-elles la pondération 70 % des loyers ?", a: "Oui, c'est la pratique bancaire standard. Les loyers futurs sont pondérés à 70 % pour absorber la vacance et les charges. Cette pondération permet au taux d'endettement de dépasser 35 % si l'opération s'autofinance largement. Un courtier connaît les banques qui appliquent strictement cette règle et celles qui peuvent être plus flexibles." },
  { q: "Faut-il passer par une SCI pour un premier bien ?", a: "Non, sauf cas particuliers (co-investissement, transmission). Pour un premier bien seul, le statut LMNP (meublé) ou la détention directe (nu) sont plus simples et fiscalement équivalents à une SCI IR. La SCI IS devient pertinente quand plusieurs biens sont détenus collectivement et que les bénéfices sont réinvestis." },
  { q: "Combien gagne-t-on vraiment avec un locatif net d'impôt ?", a: "Exemple : T2 à Reims 140 000 €, loyer 620 €/mois (7 440 €/an), charges 1 500 €, TF 900 €, mensualité prêt 700 € (annualité 8 400 €). Cash-flow annuel brut avant impôts : –3 360 € (effort d'épargne). Après LMNP réel (amortissement neutralise l'impôt), le cash-flow reste négatif de 3 360 € pendant 10-15 ans, mais la valeur du bien est acquise. Le rendement vrai vient de la revente et de l'effacement de la dette." },
]

export default function InvestissementLocatifPage() {
  return (
    <>
      <ServiceSchema
        name="Investissement locatif — Crédit Plus"
        description="Courtage en crédit immobilier pour investissement locatif : SCI, LMNP, Denormandie, déficit foncier. Optimisation du montage financier et fiscal."
        urlPath="/investissement-locatif"
      />
      <FAQPageSchema questions={faqs} />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Investissement locatif", url: "/investissement-locatif" }]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pilier — Investissement locatif</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Investissement locatif 2026 : guide complet du financement
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Construire un patrimoine immobilier en 2026 demande d'arbitrer quatre choix : le véhicule juridique (direct, SCI IR, SCI IS), le régime fiscal (LMNP, LMP, foncier), le dispositif (Denormandie, déficit foncier, LLi), et le financement bancaire adapté à un taux d'endettement qui peut dépasser 35 % grâce à la pondération 70 % des loyers.
            </p>
          </header>

          <aside className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">En bref</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-800">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Les deux régimes dominants en 2026 sont <strong>LMNP au réel</strong> (amortissement) et <strong>SCI à l'IS</strong> (holding patrimoniale).</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>La <strong>loi Pinel est éteinte</strong> depuis le 31 décembre 2024. Alternatives : LLi, Denormandie, déficit foncier.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Le <strong>taux d'endettement</strong> peut dépasser 35 % via pondération 70 % des loyers (flexibilité HCSF).</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Rendement brut moyen France 2026 : <strong>5,8 %</strong>, net avant impôt <strong>3,5 à 4,5 %</strong>.</span></li>
            </ul>
          </aside>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/credit-immobilier/simulation">Simuler mon investissement <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/outils/calcul-mensualites">Calculateur de mensualités</Link>
            </Button>
          </div>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Les 4 grandes façons d'investir en locatif en 2026</h2>
            <p>
              Avant tout projet, trancher : location <strong>nue</strong> (foncier classique, fiscalement simple mais peu optimisé), <strong>meublée LMNP</strong> (régime BIC, amortissement comptable, le plus fiscalement efficace), <strong>meublée LMP</strong> (pour les investisseurs dont les loyers dépassent 23 000 €/an et représentent plus de 50 % des revenus du foyer), ou <strong>en SCI</strong> (IR pour la transparence fiscale ou IS pour l'amortissement et le réinvestissement).
            </p>

            <h2>Comment financer son investissement locatif</h2>
            <p>
              Les banques appliquent une règle spécifique aux investisseurs : la <strong>pondération des loyers futurs à 70 %</strong>. Concrètement, sur un bien qui générera 700 €/mois de loyer, la banque intègre 490 €/mois dans vos revenus de calcul HCSF. Cette pondération permet à de nombreux dossiers de rester sous 35 % d'endettement malgré le cumul d'emprunts.
            </p>
            <p>
              L'apport typique est de <strong>10 à 20 %</strong>, plus élevé qu'en résidence principale. Les montages sans apport (110 %) existent pour les profils solides, mais restent l'exception. Des prêts <strong>in fine</strong> peuvent être proposés aux profils très fortunés : le capital ne s'amortit pas pendant la durée du prêt, seuls les intérêts sont remboursés, avec une sortie sur la revente ou un capital placé. Fiscalement très intéressant en phase d'investissement haute.
            </p>

            <h2>Fiscalité : choisir son régime</h2>
            <p>
              <strong><Link href="/investissement-locatif/lmnp">LMNP micro-BIC</Link></strong> : abattement forfaitaire de 50 % sur les loyers, plafond 77 700 €/an. Simple mais sous-optimisé dès qu'on a des charges réelles significatives.
            </p>
            <p>
              <strong>LMNP au régime réel</strong> : déduction de toutes les charges + amortissement comptable du bien et du mobilier. Dans 80 % des cas, permet de neutraliser fiscalement les loyers pendant 10 à 20 ans. C'est le régime dominant pour un investisseur sérieux.
            </p>
            <p>
              <strong><Link href="/investissement-locatif/sci">SCI à l'IR</Link></strong> : transparence fiscale, pertes imputables sur le revenu global jusqu'à 10 700 €/an (<Link href="/investissement-locatif/deficit-foncier">déficit foncier</Link>). Idéal pour la transmission familiale.
            </p>
            <p>
              <strong>SCI à l'IS</strong> : amortissement comptable possible, réinvestissement des bénéfices à IS (15-25 %), mais taxation forte des plus-values à la revente. Pertinent si l'objectif est d'accumuler patrimonialement sans distribuer.
            </p>
            <p>
              <strong><Link href="/investissement-locatif/deficit-foncier">Déficit foncier</Link></strong> : plafond imputable 10 700 €/an, porté à <strong>21 400 €</strong> pour les travaux de rénovation énergétique (dispositif en vigueur jusqu'en 2027). Outil fiscal majeur pour les contribuables à TMI élevée.
            </p>

            <h2>Dispositifs 2026 : que reste-t-il après Pinel ?</h2>
            <p>
              Pinel a pris fin au 31 décembre 2024. Les alternatives en 2026 :
            </p>
            <ul>
              <li><strong>LLi / Loc'Avantages</strong> : réduction d'impôt selon zone et intensité du loyer plafonné (secteur intermédiaire, social, très social).</li>
              <li><strong>Denormandie</strong> : rénovation dans les <strong>300 centres-villes éligibles</strong> (listés par arrêté), réduction d'impôt jusqu'à 63 000 € sur 12 ans.</li>
              <li><strong>Déficit foncier</strong> — voir ci-dessus.</li>
              <li><strong>LMNP au réel</strong> — pas un dispositif fiscal à proprement parler mais le régime qui offre le plus grand levier sur le long terme.</li>
            </ul>

            <h2>Calcul du rendement : brut, net, net-net</h2>
            <p>
              <strong>Rendement brut</strong> = (loyer annuel × 12) / prix d'achat + frais de notaire.<br />
              <strong>Rendement net</strong> = rendement brut – charges de copropriété – taxe foncière – gestion – vacance estimée.<br />
              <strong>Rendement net-net</strong> = rendement net – impôts (selon régime fiscal).
            </p>
            <p>
              <strong>Exemple chiffré</strong> : T2 à Reims 140 000 € (+ 10 000 € frais), loyer 620 €/mois (7 440 €/an). Rendement brut = 7 440 / 150 000 = <strong>4,96 %</strong>. Après 1 500 € de charges et 900 € de TF : rendement net ≈ <strong>3,4 %</strong>. En LMNP au réel (amortissement neutralise l'impôt), rendement net-net ≈ <strong>3,4 %</strong>. En LMNP micro-BIC (imposition après abattement 50 %), rendement net-net ≈ <strong>2,1 %</strong>.
            </p>

            <h2>Les erreurs à ne pas commettre</h2>
            <ul>
              <li>Surestimer le loyer (toujours vérifier sur LocService, Leboncoin, Meilleurs Agents Location).</li>
              <li>Sous-estimer la vacance locative (1 mois minimum par an).</li>
              <li>Oublier les charges de copropriété (souvent 500 à 2 000 €/an).</li>
              <li>Confondre rendement brut et rentabilité nette après impôt.</li>
              <li>Choisir le mauvais régime (ex. LMNP micro-BIC alors que le réel serait plus avantageux).</li>
              <li>Négliger l'assurance emprunteur, qui pèse 10-30 % du coût du crédit.</li>
            </ul>
          </article>

          <section className="mt-12 mb-10" aria-labelledby="faq-title-locatif">
            <h2 id="faq-title-locatif" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
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

          <AuthorBio author={defaultAuthor} publishedDate="2026-04-01" updatedDate="2026-04-01" />
          <YmylDisclaimer />
        </section>

        <CTA />
      </main>
    </>
  )
}
