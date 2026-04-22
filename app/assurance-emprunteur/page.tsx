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
  title: "Assurance emprunteur 2026 : délégation, loi Lemoine",
  description:
    "Assurance emprunteur : loi Lemoine, délégation externe, quotité, garanties. Comparez et économisez jusqu'à 15 000 €.",
  alternates: { canonical: "/assurance-emprunteur" },
}

const faqs = [
  { q: "Qu'est-ce que la loi Lemoine ?", a: "La loi Lemoine du 28 février 2022 révolutionne l'assurance emprunteur : résiliation possible à tout moment (sans attendre une date anniversaire), suppression du questionnaire santé pour les prêts ≤ 200 000 € dont le remboursement s'achève avant vos 60 ans, droit à l'oubli ramené à 5 ans pour cancer et hépatite C." },
  { q: "Puis-je changer d'assurance emprunteur sans l'accord de la banque ?", a: "Oui, si les garanties du nouveau contrat sont équivalentes à celles du contrat groupe bancaire (18 critères définis par le CCSF). La banque dispose de 10 jours ouvrés pour répondre à votre demande de substitution. Un refus doit être motivé sur le terrain des garanties — jamais sur le tarif." },
  { q: "Combien je peux économiser avec une délégation ?", a: "En moyenne, 40 à 60 % par rapport au contrat groupe bancaire. Sur un prêt de 250 000 € sur 20 ans, un écart mensuel de 40 € entre bancaire (65 €) et délégation (25 €) représente une économie de 9 600 € sur la durée totale. Sur des profils jeunes non-fumeurs, l'économie peut dépasser 15 000 €." },
  { q: "La loi Lemoine supprime-t-elle vraiment le questionnaire santé ?", a: "Sous deux conditions cumulatives : (1) votre part de prêt assurée est ≤ 200 000 € ET (2) le remboursement s'achève avant votre 60e anniversaire. En couple 100/100, chacun est évalué individuellement, donc un couple peut cumuler 2 × 200 000 € = 400 000 € sans questionnaire." },
  { q: "Quelle quotité choisir en couple ?", a: "La quotité détermine la couverture en cas de décès/invalidité d'un emprunteur. 100/100 protège chacun intégralement (prime plus élevée) mais est recommandée si les deux revenus sont nécessaires pour rembourser. 50/50 ou 60/40 divisent la prime mais laissent un risque si l'emprunteur majoritaire décède. Arbitrage classique : 100/100 en couple si budget le permet, sinon proportionnel aux revenus." },
  { q: "L'ITT est-elle obligatoire ?", a: "L'ITT (Incapacité Temporaire de Travail) n'est pas légalement obligatoire, mais elle est exigée par la plupart des banques pour les prêts immobiliers classiques. La garantie couvre les arrêts de travail > 90 jours (franchise classique) et rembourse la mensualité pendant l'incapacité. Supprimer l'ITT réduit la prime de 20-30 % mais expose en cas de long arrêt maladie." },
  { q: "Que se passe-t-il si la banque refuse la délégation ?", a: "La banque doit motiver le refus sur le fondement des 18 critères CCSF. Si le refus est injustifié, saisir le médiateur ACPR (gratuit) ou le tribunal. En pratique, un refus mal motivé aboutit à l'acceptation dans 90 % des cas après relance par un courtier." },
  { q: "La convention AERAS s'applique-t-elle à toutes les maladies ?", a: "La convention AERAS (S'assurer et Emprunter avec un Risque Aggravé de Santé) couvre les emprunteurs présentant un risque médical aggravé : antécédents de cancer, maladies chroniques, VIH, etc. Elle impose aux assureurs une grille de référence et des plafonds de surprime. Depuis 2022, elle est complétée par le droit à l'oubli à 5 ans pour cancer et hépatite C." },
  { q: "Le droit à l'oubli, c'est quoi exactement ?", a: "Depuis la loi Lemoine, un emprunteur ancien malade peut ne plus déclarer sa maladie à l'assureur si les trois conditions sont réunies : (1) cancer ou hépatite C, (2) protocole thérapeutique terminé depuis au moins 5 ans, (3) aucune rechute. L'assureur ne peut plus appliquer de surprime ni d'exclusion sur ce motif." },
  { q: "Faut-il comparer les TAEA et pas juste les primes ?", a: "Oui. Le TAEA (Taux Annuel Effectif de l'Assurance) exprime le coût de l'assurance en pourcentage annuel du capital emprunté. C'est LE bon indicateur pour comparer deux contrats à garanties équivalentes. Deux contrats avec des primes mensuelles identiques peuvent avoir des TAEA différents selon le mode de tarification (capital initial vs capital restant dû)." },
]

export default function AssuranceEmprunteurPage() {
  return (
    <>
      <ServiceSchema
        name="Assurance emprunteur — Crédit Plus"
        description="Courtage en assurance emprunteur (délégation, loi Lemoine). Comparatif garanties et économies jusqu'à 15 000 €."
        urlPath="/assurance-emprunteur"
      />
      <FAQPageSchema questions={faqs} />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Assurance emprunteur", url: "/assurance-emprunteur" }]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pilier — Assurance emprunteur</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Assurance emprunteur 2026 : délégation, loi Lemoine, guide complet
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              L'assurance emprunteur représente 10 à 30 % du coût total d'un crédit immobilier. Depuis la loi Lemoine de février 2022, tout emprunteur peut résilier à tout moment et déléguer à un contrat externe — économie moyenne observée : <strong>9 600 à 15 000 €</strong> sur un prêt de 250 000 € sur 20 ans.
            </p>
          </header>

          <aside className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">En bref</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-800">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span><strong>Résiliation à tout moment</strong> depuis la loi Lemoine — sans date anniversaire.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span><strong>Pas de questionnaire santé</strong> si prêt ≤ 200 000 € et remboursement avant 60 ans.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>La <strong>délégation externe</strong> économise en moyenne 40-60 % vs contrat bancaire.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Équivalence des garanties évaluée sur <strong>18 critères CCSF</strong>.</span></li>
            </ul>
          </aside>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/credit-immobilier/simulation">Simuler mon économie <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/outils/comparateur-assurance-emprunteur">Comparateur assurance</Link>
            </Button>
          </div>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Qu'est-ce qu'une assurance emprunteur ?</h2>
            <p>
              L'assurance emprunteur couvre le remboursement du crédit immobilier en cas d'événement grave touchant l'emprunteur : décès, invalidité, incapacité de travail. Elle est légalement facultative mais exigée par toutes les banques en pratique — elle conditionne l'octroi du prêt.
            </p>
            <p>
              Deux options : le contrat <strong>groupe bancaire</strong> (proposé par la banque, tarif mutualisé, simple) ou la <strong>délégation externe</strong> (contrat individuel, tarification selon le profil, généralement 40-60 % moins cher à garanties équivalentes).
            </p>

            <h2>Les garanties détaillées</h2>
            <ul>
              <li><strong>DC (Décès)</strong> — rembourse le capital restant dû aux héritiers en cas de décès. Obligatoire.</li>
              <li><strong>PTIA (Perte Totale et Irréversible d'Autonomie)</strong> — rembourse le CRD si l'assuré est totalement dépendant d'une tierce personne pour les actes de la vie courante. Obligatoire.</li>
              <li><strong>IPT (Invalidité Permanente Totale)</strong> — taux d'invalidité ≥ 66 %. Obligatoire pour prêt immobilier classique.</li>
              <li><strong>IPP (Invalidité Permanente Partielle)</strong> — taux entre 33 % et 66 %. Optionnelle mais souvent recommandée.</li>
              <li><strong>ITT (Incapacité Temporaire de Travail)</strong> — couvre les arrêts de travail ≥ 90 jours. Optionnelle mais exigée par la plupart des banques.</li>
            </ul>

            <h2>La loi Lemoine : ce qui a changé</h2>
            <p>
              La loi Lemoine du 28 février 2022 apporte trois changements majeurs :
            </p>
            <ol>
              <li><strong>Résiliation à tout moment</strong> : effective depuis septembre 2022 pour les nouveaux contrats, et depuis septembre 2023 pour tous les contrats en cours.</li>
              <li><strong>Suppression du questionnaire santé</strong> sous conditions cumulatives : part de prêt assurée ≤ 200 000 € ET remboursement avant 60 ans.</li>
              <li><strong>Droit à l'oubli ramené à 5 ans</strong> pour cancer et hépatite C (contre 10 ans auparavant).</li>
            </ol>
            <p>
              Effet mesuré 4 ans après : seuls <strong>30 % des emprunteurs</strong> ont effectivement changé d'assurance, alors que 80 % auraient intérêt à le faire. L'inertie est le principal levier commercial des bancassureurs.
            </p>

            <h2>La délégation d'assurance : comment faire</h2>
            <ol>
              <li>Demander à votre banque la <strong>fiche standardisée d'information (FSI)</strong> — elle liste les garanties exigées.</li>
              <li>Comparer via un comparateur indépendant ou un courtier IOBSP.</li>
              <li>Vérifier l'<strong>équivalence des garanties</strong> sur les 18 critères CCSF.</li>
              <li>Envoyer à la banque la demande de substitution par recommandé avec le nouveau contrat.</li>
              <li>La banque a <strong>10 jours ouvrés</strong> pour accepter ou motiver un refus.</li>
              <li>Mise en place du nouveau contrat et résiliation de l'ancien.</li>
            </ol>
            <p>
              <strong>Exemple chiffré</strong> : couple 35 ans non-fumeurs, prêt 250 000 € sur 20 ans, quotité 100/100. Contrat bancaire : 65 €/mois × 2 = 130 €/mois. Délégation externe : 25 €/mois × 2 = 50 €/mois. Économie mensuelle : 80 €, soit <strong>19 200 € sur 20 ans</strong>.
            </p>

            <h2>La quotité : comment choisir</h2>
            <p>
              La quotité détermine la proportion du capital couvert pour chaque co-emprunteur :
            </p>
            <ul>
              <li><strong>100/100</strong> : chaque emprunteur est couvert à 100 %. Prime maximale, protection maximale. Si l'un décède, le prêt est intégralement soldé.</li>
              <li><strong>50/50</strong> : chaque emprunteur est couvert à 50 %. Prime divisée par 2 mais si l'un décède, le survivant doit continuer à rembourser 50 % de l'emprunt.</li>
              <li><strong>70/30, 60/40</strong> : arbitrage selon les revenus respectifs.</li>
            </ul>
            <p>
              <strong>Recommandation courtier</strong> : 100/100 en couple dès que le budget le permet. La différence de prime entre 50/50 et 100/100 est généralement compensée par la sécurité procurée au conjoint survivant.
            </p>

            <h2>Profils à risque et alternatives</h2>
            <p>
              Certains profils font face à des conditions majorées ou à des refus :
            </p>
            <ul>
              <li><strong>Fumeurs</strong> : prime majorée de 40 à 70 %. Astuce : arrêter de fumer 24 mois avant la souscription permet de se déclarer non-fumeur.</li>
              <li><strong>Professions à risque</strong> (militaires, BTP, conduite longue distance) : exclusions possibles ou surprimes.</li>
              <li><strong>Anciens malades</strong> : <Link href="/glossaire/aeras">convention AERAS</Link> + droit à l'oubli pour cancer/hépatite C à 5 ans.</li>
              <li><strong>Seniors</strong> : recalibrage des primes, exclusions potentielles (maladies dégénératives).</li>
              <li><strong>Expatriés</strong> : contrats spécifiques chez des assureurs spécialisés (April, MetLife, SwissLife).</li>
            </ul>
          </article>

          <section className="mt-12 mb-10" aria-labelledby="faq-title-assurance">
            <h2 id="faq-title-assurance" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
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
