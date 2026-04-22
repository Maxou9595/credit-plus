import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingDown, FileCheck, Clock, HandCoins, Home as HomeIcon, Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { AuthorBio } from "@/components/author-bio"
import { CTA } from "@/components/cta"
import { FAQPageSchema } from "@/components/schemas/faq-page"
import { ServiceSchema } from "@/components/schemas/service"
import { HowToSchema } from "@/components/schemas/how-to"
import { Button } from "@/components/ui/button"
import { defaultAuthor } from "@/lib/authors"
import { currentMarketRates } from "@/lib/market-rates"

export const metadata: Metadata = {
  title: "Crédit immobilier 2026 : taux, simulation, dossier",
  description:
    "Guide complet du crédit immobilier en 2026 : taux moyens, capacité d'emprunt, PTZ, apport, étapes. Simulez en 2 minutes.",
  alternates: { canonical: "/credit-immobilier" },
  openGraph: {
    title: "Crédit immobilier 2026 : taux, simulation, dossier",
    description:
      "Guide complet du crédit immobilier en 2026 : taux moyens, capacité d'emprunt, PTZ, apport, étapes. Simulez en 2 minutes.",
    url: "https://credit-plus.fr/credit-immobilier",
    type: "article",
  },
}

const faqs = [
  {
    q: "Quel est le taux moyen d'un crédit immobilier en 2026 ?",
    a: `En ${currentMarketRates.periodLabel}, le taux moyen d'un prêt sur 20 ans s'établit à ${currentMarketRates.byDuration[1].averageAll} % pour un dossier moyen, et à ${currentMarketRates.byDuration[1].averageGood} % pour un bon profil (CDI, apport ≥ 20 %, reste-à-vivre solide). Source : ${currentMarketRates.sourceName}.`,
  },
  {
    q: "Combien puis-je emprunter avec 3 000 € de salaire net ?",
    a: "Avec 3 000 € nets mensuels, sans charges, la règle HCSF 35 % d'endettement autorise environ 1 050 € de mensualité maximum (assurance incluse). Sur 25 ans à 3,35 %, cela représente une capacité d'emprunt d'environ 215 000 €. Avec apport + PTZ, le budget total peut atteindre 260 000 €.",
  },
  {
    q: "Quel apport faut-il pour un crédit immobilier ?",
    a: "Les banques attendent en moyenne 10 % d'apport minimum pour couvrir les frais de notaire et la garantie. Un apport de 20 % améliore significativement le taux. Les profils solides peuvent emprunter sans apport via la flexibilité 20 % du HCSF, mais la décision reste à la main de chaque banque.",
  },
  {
    q: "Est-il possible d'emprunter sans CDI ?",
    a: "Oui. Un freelance, une profession libérale, un chef d'entreprise ou un intermittent peuvent obtenir un crédit immobilier avec 2 bilans stables et une trésorerie cohérente. Le taux est généralement majoré de 10 à 30 points de base par rapport à un CDI équivalent.",
  },
  {
    q: "Combien de temps faut-il pour obtenir un crédit immobilier ?",
    a: "De la signature du compromis à la mise en place du prêt, il faut compter 45 à 60 jours (délai légal de la condition suspensive). L'accord de principe d'une banque s'obtient en 5 à 15 jours selon l'établissement. L'édition de l'offre puis les 11 jours de délai de réflexion prennent ensuite 2 à 3 semaines.",
  },
  {
    q: "Quelle est la différence entre taux nominal et TAEG ?",
    a: "Le taux nominal rémunère uniquement la banque. Le TAEG (Taux Annuel Effectif Global) inclut TOUS les frais obligatoires : nominal, assurance emprunteur, frais de dossier, frais de garantie. Seul le TAEG permet une comparaison honnête entre offres. Le TAEG est plafonné par le taux d'usure publié trimestriellement par la Banque de France.",
  },
  {
    q: "Qu'est-ce que le PTZ en 2026 ?",
    a: "Le Prêt à Taux Zéro 2026 est recentré sur le neuf collectif en zones A/B1/B2, et l'ancien avec travaux de rénovation énergétique en zones B2/C. Il finance entre 10 et 40 % du projet, sans intérêts ni frais, sur une durée de 20 à 25 ans avec différé.",
  },
  {
    q: "Puis-je emprunter sur 30 ans ?",
    a: "En principe non. Depuis les règles HCSF de 2022, la durée maximale légale est de 25 ans. Elle peut être portée à 27 ans si le prêt inclut un différé de 2 ans (VEFA, ancien avec travaux lourds). Au-delà, la banque s'expose à une sanction ACPR.",
  },
  {
    q: "Peut-on racheter son crédit immobilier quand les taux baissent ?",
    a: "Oui. La règle empirique du courtage : un rachat est rentable si l'écart de taux est ≥ 0,7 point, le capital restant dû ≥ 70 000 €, et la durée restante ≥ 7 ans. La renégociation interne (même banque) est moins coûteuse ; le rachat externe donne accès à la meilleure offre du marché.",
  },
  {
    q: "Combien coûte un courtier immobilier ?",
    a: "En 2026, les honoraires client moyens d'un courtier IOBSP se situent autour de 1 % du montant emprunté, plafonnés à 1 500-3 000 €. Ils sont uniquement dus au succès (offre signée). La banque verse en complément une commission au courtier (non répercutée au client). Aucun courtier ne peut légalement prétendre être « 100 % gratuit ».",
  },
  {
    q: "Un crédit immobilier vous engage-t-il au-delà du capital emprunté ?",
    a: "Oui. L'emprunteur rembourse le capital + les intérêts + l'assurance emprunteur + les frais de garantie. Sur un prêt de 250 000 € sur 20 ans à 3,25 %, le coût total dépasse 80 000 € (intérêts + assurance). D'où l'importance d'un courtier pour optimiser chaque composante.",
  },
  {
    q: "La loi Lemoine change-t-elle quelque chose au crédit immobilier ?",
    a: "Indirectement, oui. La loi Lemoine (2022) permet de changer d'assurance emprunteur à tout moment et supprime le questionnaire santé sous conditions (prêt ≤ 200 000 €, remboursement avant 60 ans). Elle ne modifie pas les règles d'octroi du crédit mais peut faire économiser 10 à 20 % du coût total via une délégation d'assurance.",
  },
]

const howToSteps = [
  { name: "Bilan de financement", text: "Analyse de vos revenus, charges, apport et taux d'endettement pour définir votre budget maximum." },
  { name: "Simulation et plan de financement", text: "Simulation personnalisée intégrant PTZ, apport, assurance, et éventuels prêts aidés (1% logement, action logement, PEL)." },
  { name: "Compromis de vente", text: "Signature du compromis avec une condition suspensive d'obtention de prêt (45 à 60 jours)." },
  { name: "Constitution du dossier", text: "Pièces d'identité, 3 derniers bulletins de salaire, 3 derniers relevés bancaires, 2 derniers avis d'imposition, compromis signé, justificatif d'apport." },
  { name: "Dépôt auprès de 3 à 5 banques", text: "Crédit Plus dépose votre dossier en parallèle chez 3 à 5 partenaires sélectionnés selon votre profil et votre projet." },
  { name: "Accord de principe (AP)", text: "Réponse formelle des banques sous 5 à 15 jours selon l'établissement." },
  { name: "Négociation du package", text: "Arbitrage taux + assurance emprunteur + frais de dossier + garantie + domiciliation." },
  { name: "Offre de prêt et délai légal", text: "Édition de l'offre, 11 jours de délai de réflexion obligatoires, signature, puis versement par le notaire." },
]

export default function CreditImmobilierPage() {
  return (
    <>
      <ServiceSchema
        name="Crédit immobilier — Crédit Plus"
        description="Courtage en crédit immobilier pour l'achat de résidence principale, secondaire ou d'investissement. Accès à +100 banques partenaires."
        urlPath="/credit-immobilier"
      />
      <FAQPageSchema questions={faqs} />
      <HowToSchema
        name="Obtenir un crédit immobilier en 2026"
        description="Les 8 étapes pour obtenir un crédit immobilier avec Crédit Plus, du bilan à l'offre signée."
        steps={howToSteps}
      />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Crédit immobilier", url: "/credit-immobilier" }]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pilier — Crédit immobilier</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Crédit immobilier 2026 : guide complet du prêt immobilier
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Obtenir un crédit immobilier en 2026 mobilise trois questions : combien puis-je emprunter, à quel taux, et dans quelles conditions. Ce guide les traite dans l'ordre en s'appuyant sur les règles actuelles du HCSF, les derniers baromètres de l'
              <a href="https://www.lobservatoirecreditlogement.fr" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80">Observatoire Crédit Logement / CSA</a>
              {" "}et les grilles des 100+ banques partenaires de Crédit Plus. À chaque étape, un simulateur gratuit permet de chiffrer votre projet.
            </p>
          </header>

          {/* En bref — GEO TL;DR */}
          <aside className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">En bref</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-800">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Le <strong>taux moyen sur 20 ans</strong> s'établit à <strong>{currentMarketRates.byDuration[1].averageAll} %</strong> en {currentMarketRates.periodLabel} ({currentMarketRates.sourceName}).</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>La règle HCSF plafonne le <strong>taux d'endettement à 35 %</strong> et la <strong>durée à 25 ans</strong> (27 ans avec différé VEFA).</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Le <strong>PTZ 2026</strong> est recentré sur le neuf collectif en zones A/B1/B2 et l'ancien rénové en zones B2/C.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Un dossier solide = <strong>apport ≥ 10 %</strong> + CDI ou deux bilans sains pour TNS.</span></li>
            </ul>
          </aside>

          {/* CTA simulateur en haut */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/credit-immobilier/simulation">Simuler mon crédit <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/outils/calcul-capacite-emprunt">Calculer ma capacité</Link>
            </Button>
          </div>

          <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-primary prose-p:text-gray-700 prose-li:text-gray-700">
            <h2>Qu'est-ce qu'un crédit immobilier ?</h2>
            <p>
              Un crédit immobilier est un prêt bancaire destiné à financer l'achat d'un bien immobilier — résidence principale, secondaire ou d'investissement. Il est régi par le Code de la consommation (article L312-2 et suivants) qui impose des règles strictes : offre écrite, délai de réflexion, TAEG, mentions obligatoires. La durée maximale usuelle est de 25 ans, et le montant peut atteindre plusieurs millions d'euros selon les revenus de l'emprunteur.
            </p>
            <p>
              À la différence d'un crédit à la consommation, le crédit immobilier est garanti : soit par une <Link href="/glossaire/hypotheque">hypothèque</Link> sur le bien, soit par une caution (Crédit Logement, SACCEF, CAMCA). Cette garantie permet à la banque de récupérer le bien en cas de défaillance de l'emprunteur, ce qui explique les taux plus faibles qu'en crédit à la consommation.
            </p>

            <h2>Combien puis-je emprunter en 2026 ?</h2>
            <p>
              La règle dominante est celle du Haut Conseil de Stabilité Financière (<Link href="/glossaire/hcsf">HCSF</Link>) : <strong>35 % d'endettement maximum</strong>, assurance emprunteur incluse. Cette règle est juridiquement contraignante depuis 2022 — toute banque s'en écartant en dehors de la flexibilité 20 % s'expose à une sanction ACPR.
            </p>
            <p>
              <strong>Exemple chiffré</strong> : un couple aux revenus nets de 5 000 €/mois, sans charges de crédit existantes, peut mobiliser jusqu'à 1 750 €/mois pour sa mensualité (assurance incluse). Sur 25 ans à 3,35 %, cela représente une capacité d'emprunt d'environ <strong>335 000 €</strong>. Avec un apport de 10 % (33 500 €) + frais de notaire (environ 8 %), le budget total d'achat ressort autour de 345 000 € dans l'ancien.
            </p>
            <p>
              La <strong>flexibilité 20 %</strong> du HCSF autorise les banques à dépasser 35 % d'endettement pour 20 % de leur production trimestrielle, à condition que 70 % de ces dérogations bénéficient à des primo-accédants ou à des achats de résidence principale. Concrètement, votre courtier connaît les banques qui utilisent cette flexibilité et celles qui l'épargnent.
            </p>

            <h2>À quel taux puis-je obtenir un prêt en 2026 ?</h2>
            <p>
              Le taux affiché dans les publicités est le <strong>taux nominal</strong>. Seul le <Link href="/glossaire/taeg">TAEG</Link> (Taux Annuel Effectif Global) permet une comparaison honnête : il inclut le nominal, l'assurance emprunteur obligatoire, les frais de dossier et de garantie.
            </p>

            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border border-gray-200">Durée du prêt</th>
                    <th className="text-left p-3 border border-gray-200">Taux bons dossiers</th>
                    <th className="text-left p-3 border border-gray-200">Taux moyen tous dossiers</th>
                    <th className="text-left p-3 border border-gray-200">Évolution 1 mois</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMarketRates.byDuration.map((r) => (
                    <tr key={r.duration}>
                      <td className="p-3 border border-gray-200 font-medium">{r.duration}</td>
                      <td className="p-3 border border-gray-200">{r.averageGood.toFixed(2)} %</td>
                      <td className="p-3 border border-gray-200">{r.averageAll.toFixed(2)} %</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{r.change1m ?? 0} pb</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-2">
                Source : {currentMarketRates.sourceName}, baromètre {currentMarketRates.periodLabel} du {new Date(currentMarketRates.sourceDate).toLocaleDateString("fr-FR")}.
              </p>
            </div>

            <p>
              Cinq facteurs font varier votre taux réel : <strong>le profil</strong> (CDI &gt; TNS &gt; intermittent), <strong>la durée</strong> (15 ans &lt; 20 ans &lt; 25 ans en termes de taux), <strong>l'apport</strong> (10 % vs 20 % = écart de 15 à 20 points de base), <strong>la quotité d'assurance</strong>, et <strong>la domiciliation bancaire</strong>. Le rôle d'un courtier IOBSP est de négocier ces 5 leviers comme un package cohérent, pas isolément.
            </p>

            <h2>Quel apport personnel faut-il en 2026 ?</h2>
            <p>
              La règle empirique des banques est un <strong>apport de 10 %</strong> du prix d'achat, destiné à couvrir les frais annexes (notaire, garantie). Sans cet apport minimum, la banque doit financer 110 % de la valeur du bien, ce qu'elle accepte de plus en plus rarement en dehors de la flexibilité 20 % HCSF.
            </p>
            <p>
              Un apport de 20 % améliore significativement le taux — de 15 à 25 points de base par rapport à 10 %. Au-delà de 30 %, le gain marginal devient faible. Les sources d'apport acceptées sont : épargne personnelle, PEL/CEL, donation familiale, participation, prêts aidés (<Link href="/credit-immobilier/pret-taux-zero-ptz">PTZ</Link>, 1% logement, action logement), déblocage PEE/PERCO.
            </p>

            <h2>Les étapes du dossier</h2>
            <p>
              Voici les 8 étapes standard d'un dossier de crédit immobilier avec un courtier :
            </p>
            <ol>
              {howToSteps.map((s, i) => (
                <li key={i}><strong>{s.name}</strong> — {s.text}</li>
              ))}
            </ol>

            <h2>Le PTZ 2026 : qui peut en bénéficier ?</h2>
            <p>
              Le <Link href="/glossaire/ptz">Prêt à Taux Zéro</Link> 2026 est accessible aux primo-accédants qui achètent leur résidence principale, sous plafonds de ressources variables selon la zone géographique (A, B1, B2, C) et la taille du foyer. Il finance entre 10 et 40 % du projet, sans intérêts, avec un différé de remboursement pouvant aller jusqu'à 15 ans pour les revenus les plus bas.
            </p>
            <p>
              En 2026, le PTZ est recentré : <strong>neuf collectif</strong> en zones A, B1, B2 (grandes agglomérations), et <strong>ancien avec travaux de rénovation énergétique</strong> en zones B2 et C. Les maisons individuelles neuves sont exclues du dispositif.
            </p>
            <p>
              Notre <Link href="/outils/simulation-ptz">simulateur PTZ</Link> vous chiffre en 2 minutes l'éligibilité et le montant que vous pouvez mobiliser.
            </p>

            <h2>Frais annexes : notaire, garantie, assurance</h2>
            <p>
              Au-delà du capital et des intérêts, trois postes de frais s'ajoutent :
            </p>
            <ul>
              <li><strong>Frais de notaire</strong> : 7 à 8 % du prix dans l'ancien, 2 à 3 % dans le neuf. Ils se décomposent en droits de mutation (perçus par les collectivités), émoluments du notaire (honoraires), et débours. Le calcul précis varie selon le département — voir notre <Link href="/outils/calcul-frais-de-notaire">calculateur de frais de notaire</Link>.</li>
              <li><strong>Garantie</strong> : caution (Crédit Logement, SACCEF…) entre 0,8 et 1,5 % du montant emprunté, partiellement restituée en fin de prêt, ou hypothèque (frais d'inscription 1 à 2 %).</li>
              <li><strong>Assurance emprunteur</strong> : obligatoire en pratique, son coût peut représenter 10 à 30 % du coût total du crédit. La délégation externe permet souvent d'économiser 40 à 60 % par rapport au contrat groupe bancaire. Voir notre <Link href="/assurance-emprunteur/delegation">guide de la délégation</Link>.</li>
            </ul>

            <h2>Profils spécifiques</h2>
            <p>
              Certains profils demandent une approche adaptée :
            </p>
            <ul>
              <li><Link href="/credit-immobilier/primo-accedant">Primo-accédant</Link> — PTZ, aides locales, parcours complet.</li>
              <li><Link href="/credit-immobilier/sans-cdi">Sans CDI</Link> — profession libérale, chef d'entreprise, freelance, intermittent.</li>
              <li><Link href="/credit-immobilier/non-resident-expatrie">Non-résident / expatrié</Link> — apport souvent exigé à 20-30 %, hypothèque conventionnelle.</li>
            </ul>

            <h2>Pourquoi passer par un courtier ?</h2>
            <p>
              Un conseiller bancaire ne propose que les grilles de sa propre banque. Un courtier IOBSP négocie en parallèle auprès de plusieurs établissements — chez Crédit Plus, <strong>plus de 100 partenaires</strong>. Il met les banques en concurrence sur 5 leviers : taux, assurance, frais de dossier, garantie, domiciliation. Sur un prêt de 250 000 €, l'économie moyenne observée via un courtier est de 6 000 à 15 000 € sur la durée totale, déduction faite des honoraires.
            </p>
            <p>
              Notre rôle s'arrête à l'offre signée : nous sommes rémunérés <strong>uniquement en cas de succès</strong>. La grille tarifaire de Crédit Plus est publique (page <Link href="/mentions-legales">mentions légales</Link>). Nous ne prétendons pas être « 100 % gratuit » — c'est un abus de langage proscrit par l'ACPR. Pour en savoir plus, voir notre page <Link href="/courtier-immobilier/prix-courtier">Combien coûte un courtier</Link>.
            </p>
          </article>

          <section className="mt-12 mb-10" aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
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
