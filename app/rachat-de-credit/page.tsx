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
  title: "Rachat de crédit 2026 : renégociation, regroupement, guide",
  description:
    "Rachat de crédit : quand, pourquoi, comment. Regroupement consommation + immobilier, renégociation, économie à réaliser. Simulez.",
  alternates: { canonical: "/rachat-de-credit" },
}

const faqs = [
  { q: "Quand est-il rentable de racheter son crédit ?", a: "La règle empirique du courtage : écart de taux ≥ 0,7 point entre votre taux actuel et le taux marché, capital restant dû ≥ 70 000 €, durée restante ≥ 7 ans. Si les trois critères sont réunis, un rachat est généralement rentable après absorption des frais (IRA, frais de dossier, nouvelle garantie)." },
  { q: "Combien coûte un rachat de crédit ?", a: "Trois frais principaux : (1) IRA (indemnité de remboursement anticipé) plafonnée à 3 % du capital restant dû ou 6 mois d'intérêts, selon le plus faible ; (2) frais de dossier de la nouvelle banque (500 à 1 500 €) ; (3) frais de nouvelle garantie (hypothèque 1-2 % ou caution 0,8-1,5 %). Sur un prêt à racheter de 150 000 €, les frais totaux se situent entre 3 500 et 6 000 €." },
  { q: "Rachat ou renégociation : quelle différence ?", a: "Renégociation = avenant chez votre banque actuelle, sans changer d'établissement. Pas de nouvelle garantie, pas d'IRA. Moins cher mais taux souvent moins bas. Rachat externe = nouveau crédit ailleurs, meilleure offre du marché, mais IRA + frais de nouvelle garantie. Le courtier compare systématiquement les deux options." },
  { q: "Combien de fois peut-on racheter son crédit ?", a: "Légalement, aucune limite. En pratique, chaque rachat génère des frais qui réduisent l'économie nette. Racheter deux fois un même crédit en 5 ans est rarement rentable. Attendre un écart de taux ≥ 1 point est plus sûr." },
  { q: "Peut-on racheter ses crédits si on est fiché FICP ?", a: "Difficile mais pas impossible. Un fichage FICP (Fichier des Incidents de remboursement des Crédits aux Particuliers) ferme la plupart des portes bancaires. Certains établissements spécialisés en rachat de crédits consommation acceptent ces dossiers, à des taux élevés (6-10 % TAEG). Un courtier vous orientera vers les bonnes banques ou vers une procédure de surendettement si nécessaire." },
  { q: "Mon assurance emprunteur est-elle remise en cause ?", a: "Oui, totalement. Un rachat de crédit = nouveau crédit = nouvelle assurance. Le questionnaire santé s'applique sauf si le montant est ≤ 200 000 € et que le remboursement s'achève avant vos 60 ans (loi Lemoine). C'est l'occasion de choisir une délégation externe plus compétitive." },
  { q: "Combien de temps prend un rachat de crédit ?", a: "Comptez 6 à 10 semaines entre le dépôt du dossier et la mise en place effective du nouveau prêt : 2-3 semaines d'instruction bancaire, 11 jours de délai légal de réflexion sur l'offre, 1-2 semaines pour le remboursement anticipé des anciens crédits et la mise en place des nouveaux prélèvements." },
  { q: "Peut-on inclure un PTZ dans un rachat ?", a: "Non. Le PTZ est un prêt à conditions particulières liées à la résidence principale du primo-accédant. Un rachat qui engloberait un PTZ le rendrait caduc. En pratique, le PTZ est conservé tel quel et le reste du crédit est racheté à côté." },
  { q: "Y a-t-il un âge limite pour racheter son crédit ?", a: "Les banques fixent généralement un âge à la fin du prêt : 75-80 ans selon les établissements. Au-delà, elles refusent ou exigent une assurance majorée. Pour un senior, la convention AERAS s'applique en cas de problème de santé. Un rachat après 60 ans est souvent plus contraint par l'assurance que par le prêt lui-même." },
  { q: "Mon courtier est-il payé par qui lors d'un rachat ?", a: "Même logique qu'un crédit initial : honoraires client au succès (grille publique, généralement autour de 1 % du nouveau capital, plafonnés) + commission versée par la banque au courtier. Aucun courtier IOBSP ne peut légalement prétendre être « 100 % gratuit ». La grille de Crédit Plus est publiée sur la page mentions légales." },
]

export default function RachatDeCreditPage() {
  return (
    <>
      <ServiceSchema
        name="Rachat de crédit — Crédit Plus"
        description="Courtage en rachat de crédit immobilier (renégociation, rachat externe) et regroupement de crédits consommation. Accès à +100 banques partenaires."
        urlPath="/rachat-de-credit"
      />
      <FAQPageSchema questions={faqs} />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Rachat de crédit", url: "/rachat-de-credit" }]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pilier — Rachat de crédit</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Rachat de crédit 2026 : renégociation, regroupement, guide complet
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Quand les taux baissent ou qu'une situation financière se tend, le rachat de crédit permet de retrouver de la marge. Deux voies existent : la renégociation auprès de votre banque actuelle, ou le rachat externe par une autre banque. Ce guide détaille les critères de rentabilité, les frais, les étapes et les erreurs à éviter.
            </p>
          </header>

          <aside className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">En bref</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-800">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Un rachat est rentable si <strong>écart de taux ≥ 0,7 pt</strong>, <strong>CRD ≥ 70 000 €</strong>, <strong>durée restante ≥ 7 ans</strong>.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Deux voies : <strong>renégociation interne</strong> (même banque, frais réduits) ou <strong>rachat externe</strong> (autre banque, meilleur taux).</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Le regroupement peut inclure crédits <strong>consommation, auto, revolving, travaux</strong> en plus de l'immobilier.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Rachat = nouveau crédit : tout est renégocié, y compris l'<strong>assurance emprunteur</strong>.</span></li>
            </ul>
          </aside>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/credit-immobilier/simulation">Simuler mon rachat <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/outils/calcul-mensualites">Calculateur de mensualités</Link>
            </Button>
          </div>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Renégociation vs rachat : quelle différence ?</h2>
            <p>
              La <strong>renégociation</strong> est un avenant au contrat existant, signé avec votre banque actuelle. Pas de nouvelle garantie à constituer, pas d'<Link href="/glossaire/ira">IRA</Link>, souvent seulement des frais de dossier modestes. En contrepartie, la banque accorde rarement son meilleur taux — elle sait que vous avez moins d'alternatives si vous restez chez elle.
            </p>
            <p>
              Le <strong>rachat externe</strong> est un nouveau crédit chez une autre banque qui rembourse l'ancien. Frais plus élevés (IRA + nouvelle garantie + frais de dossier), mais accès à la meilleure offre du marché via un courtier. Sur un prêt significatif, l'écart de taux négociable compense largement les frais dès 0,5 à 0,7 point.
            </p>

            <h2>La règle des 3 pour qu'un rachat soit rentable</h2>
            <p>
              Chez Crédit Plus, nous validons un rachat externe quand les trois critères suivants sont simultanément réunis :
            </p>
            <ol>
              <li><strong>Écart de taux ≥ 0,7 point</strong> entre votre taux actuel et le taux de marché.</li>
              <li><strong>Capital restant dû ≥ 70 000 €</strong> pour que les frais soient absorbés par l'économie.</li>
              <li><strong>Durée restante ≥ 7 ans</strong> pour que les intérêts économisés justifient le rachat.</li>
            </ol>
            <p>
              <strong>Exemple chiffré</strong> : prêt initial 250 000 € à 4,5 % sur 25 ans, signé en 2023. Après 3 ans, le CRD est de 225 000 € et la durée restante de 22 ans. Marché en avril 2026 à 3,25 % → écart de 1,25 point. Rachat → nouvelle mensualité baisse de 200 €/mois. Économie brute sur la durée restante : ≈ 52 800 €. Après frais (IRA 4 500 €, dossier 1 500 €, garantie 2 500 €) : économie nette ≈ 44 300 €.
            </p>

            <h2>Les frais d'un rachat de crédit</h2>
            <ul>
              <li><strong>IRA</strong> : plafonnée à 3 % du CRD ou 6 mois d'intérêts, le plus faible des deux. Sur 200 000 € de CRD à 4,5 %, IRA maximum = 4 500 €.</li>
              <li><strong>Frais de dossier de la nouvelle banque</strong> : 500 à 1 500 €, souvent négociables.</li>
              <li><strong>Nouvelle garantie</strong> : caution Crédit Logement (0,8-1,5 % du montant) ou hypothèque (1-2 %).</li>
              <li><strong>Nouvelle assurance emprunteur</strong> : contrat à requestionner, potentiellement plus cher pour seniors ou anciens malades.</li>
            </ul>

            <h2>Regroupement de crédits</h2>
            <p>
              Au-delà du rachat immobilier, le regroupement de crédits permet d'inclure <strong>consommation, auto, revolving, travaux</strong> dans un même prêt. Deux variantes :
            </p>
            <ul>
              <li><strong>Regroupement conso pur</strong> (sans immobilier) — TAEG généralement 6 à 9 %, durées 7 à 12 ans. Utile pour sortir du surendettement naissant.</li>
              <li><strong>Regroupement conso + immobilier</strong> — TAEG 3,5 à 5 %, durée alignée sur le prêt immobilier (jusqu'à 25 ans). Bien plus avantageux mais nécessite un bien à donner en garantie.</li>
            </ul>
            <p>
              <strong>Attention</strong> : allonger la durée baisse la mensualité mais augmente le coût total. Un regroupement peut diviser la mensualité par deux, mais doubler le coût total des intérêts si la durée passe de 10 à 20 ans.
            </p>

            <h2>Les étapes d'un rachat de crédit</h2>
            <ol>
              <li>Bilan actuel : TAEG en cours, CRD, IRA estimée (lecture du tableau d'amortissement).</li>
              <li>Simulation avec le courtier sur 3-5 banques partenaires.</li>
              <li>Constitution du dossier (avenants existants, tableaux d'amortissement, relevés).</li>
              <li>Édition des offres de rachat par les banques intéressées.</li>
              <li>Acceptation de l'offre + 11 jours de délai légal de réflexion.</li>
              <li>Mise en place : la nouvelle banque rembourse les anciens crédits, nouvelle garantie prise, nouveau prélèvement mensuel.</li>
            </ol>

            <h2>Rachat de crédit senior</h2>
            <p>
              Pour les plus de 60 ans, deux contraintes s'ajoutent : l'âge à la fin du prêt (75-80 ans max selon les banques) et le questionnaire de santé obligatoire (loi Lemoine ne s'applique pas au-delà de 60 ans à la fin du prêt). La convention AERAS peut être mobilisée en cas d'antécédent médical.
            </p>
            <p>
              Notre conseil : anticiper un rachat avant 60 ans si l'écart de taux le justifie, ou opter pour la renégociation interne si l'âge à la fin du prêt dépasse 75 ans.
            </p>
          </article>

          <section className="mt-12 mb-10" aria-labelledby="faq-title-rachat">
            <h2 id="faq-title-rachat" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
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
