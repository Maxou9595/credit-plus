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
import { HowToSchema } from "@/components/schemas/how-to"
import { Button } from "@/components/ui/button"
import { defaultAuthor } from "@/lib/authors"

export const metadata: Metadata = {
  title: "Courtier immobilier : rôle, tarif, comparatif 2026",
  description:
    "Qu'est-ce qu'un courtier immobilier en 2026 : rôle, rémunération, avantages vs banque, choix. Transparence tarifaire Crédit Plus.",
  alternates: { canonical: "/courtier-immobilier" },
}

const faqs = [
  { q: "Un courtier est-il vraiment gratuit ?", a: "Non. Aucun courtier IOBSP ne peut légalement prétendre être « 100 % gratuit ». Nos honoraires client sont dus à la signature de l'offre de prêt (au succès uniquement), et la banque verse une commission au courtier en complément. La grille tarifaire Crédit Plus est publique sur la page mentions légales. Cette transparence est une exigence ACPR." },
  { q: "Combien de banques compare un courtier ?", a: "Cela dépend du courtier. Chez Crédit Plus, nous travaillons avec plus de 100 partenaires bancaires (banques nationales, régionales, en ligne, spécialisées). Chaque dossier est positionné chez 3 à 5 banques en parallèle, sélectionnées selon votre profil, votre projet et votre zone géographique." },
  { q: "Quel est le tarif moyen d'un courtier en 2026 ?", a: "Le marché du courtage IOBSP en 2026 affiche des honoraires client moyens autour de 1 % du montant emprunté, plafonnés à 1 500-3 000 € selon les enseignes. La commission bancaire reversée au courtier s'ajoute (0,7 à 1,2 % du montant), sans impact pour le client. Crédit Plus publie sa grille complète." },
  { q: "Puis-je refuser l'offre d'un courtier sans payer ?", a: "Oui. Nos honoraires sont au succès uniquement : vous ne payez que si vous signez l'offre de prêt obtenue par notre intermédiaire. Si vous refusez toutes les offres présentées, aucun frais n'est dû. Cette règle est gravée dans le mandat d'intermédiation que nous vous faisons signer en début de mission." },
  { q: "Le courtier peut-il m'obtenir un taux plus bas que la banque ?", a: "Pas systématiquement, mais très souvent. Un conseiller bancaire ne propose que les grilles de sa propre banque. Un courtier met 3-5 banques en concurrence et négocie l'ensemble du package (taux, assurance, frais, garantie). Sur un prêt de 250 000 €, l'économie moyenne observée est de 6 000 à 15 000 € sur la durée totale, déduction faite des honoraires courtier." },
  { q: "Faut-il signer un mandat ?", a: "Oui, c'est une obligation légale (Code de la consommation L321-2). Le mandat d'intermédiation précise les engagements du courtier, les honoraires, les modalités de rétractation et de succès. Il ne constitue pas un engagement d'achat — vous pouvez toujours abandonner le projet." },
  { q: "Qu'est-ce que l'ORIAS ?", a: "L'ORIAS (Organisme pour le Registre unique des Intermédiaires en Assurance, banque et finance) est le registre officiel des intermédiaires financiers en France. Tout courtier IOBSP doit y être immatriculé. Le numéro ORIAS de Crédit Plus est 25005566 (vérifiable sur orias.fr). Un courtier sans ORIAS est illégal." },
  { q: "Un courtier est-il impartial s'il reçoit une commission des banques ?", a: "La transparence est imposée par l'ACPR : votre courtier doit vous communiquer la liste des banques qu'il distribue et le fait qu'il perçoit des commissions. Les commissions bancaires sont relativement homogènes entre banques (écarts faibles), donc le courtier a intérêt à vous obtenir la meilleure offre — sa réputation et ses avis en dépendent. Nos honoraires client au succès alignent nos incitations." },
  { q: "Combien de temps faut-il à un courtier pour obtenir une offre ?", a: "De la prise de contact à l'accord de principe bancaire, comptez 10 à 20 jours. L'édition de l'offre de prêt + le délai légal de 11 jours de réflexion ajoutent 2-3 semaines. Au total, de l'appel au versement des fonds chez le notaire : 6 à 10 semaines pour un dossier standard." },
  { q: "Courtier salarié d'une banque vs courtier indépendant : différence ?", a: "Un « courtier » salarié d'une banque n'est pas un intermédiaire au sens légal — il ne compare pas plusieurs établissements. Un courtier IOBSP indépendant comme Crédit Plus est juridiquement libre de son réseau bancaire et met les établissements en concurrence. La qualité de la mise en concurrence est le cœur du métier." },
]

const howToSteps = [
  { name: "Prise de contact", text: "Par téléphone, formulaire, ou prise de rendez-vous en ligne. Analyse initiale sous 24-48h." },
  { name: "Bilan de situation", text: "Étude des revenus, charges, apport, projet, calendrier. Chiffrage de votre capacité d'emprunt." },
  { name: "Simulation et plan de financement", text: "Simulation personnalisée intégrant PTZ, apport, assurance, prêts aidés." },
  { name: "Dépôt auprès des banques partenaires", text: "3 à 5 banques sélectionnées selon votre profil, dépôt en parallèle." },
  { name: "Négociation du package", text: "Taux, assurance, frais de dossier, garantie, domiciliation." },
  { name: "Accord de principe", text: "Réponse formelle des banques sous 5 à 15 jours." },
  { name: "Offre de prêt et délai légal", text: "Édition, 11 jours de réflexion, signature, versement par le notaire." },
]

export default function CourtierImmobilierPage() {
  return (
    <>
      <ServiceSchema
        name="Courtage en crédit immobilier — Crédit Plus"
        description="Courtier en crédit immobilier IOBSP — Crédit Plus. +100 banques partenaires, transparence tarifaire, accompagnement de A à Z."
        urlPath="/courtier-immobilier"
      />
      <FAQPageSchema questions={faqs} />
      <HowToSchema
        name="Faire appel à un courtier immobilier"
        description="Les 7 étapes d'un accompagnement par un courtier IOBSP Crédit Plus."
        steps={howToSteps}
      />

      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Courtier immobilier", url: "/courtier-immobilier" }]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pilier — Le métier de courtier</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Courtier en crédit immobilier : rôle, tarif, comparatif 2026
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Plus de 70 % des acheteurs immobiliers en France passent par un courtier en 2026. Ce guide explique sans filtre ce que fait un courtier, comment il est rémunéré, et dans quels cas il apporte une vraie valeur par rapport à un conseiller bancaire.
            </p>
          </header>

          <aside className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">En bref</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-800">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Un courtier immobilier <strong>négocie votre prêt</strong> auprès de plusieurs banques à la place du particulier.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Rémunération = <strong>honoraires client</strong> (au succès) + <strong>commission bancaire</strong>. Aucun courtier n'est légalement « 100 % gratuit ».</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Un courtier compare <strong>+100 partenaires</strong> contre 1 banque en direct.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden /><span>Tarif moyen 2026 : <strong>≈ 1 % du montant emprunté</strong>, plafonné à 1 500-3 000 €.</span></li>
            </ul>
          </aside>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/credit-immobilier/simulation">Simuler mon crédit <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/equipe">Voir l'équipe Crédit Plus</Link>
            </Button>
          </div>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Qu'est-ce qu'un courtier immobilier ?</h2>
            <p>
              Un courtier immobilier est un <strong>intermédiaire en opérations de banque et services de paiement (IOBSP)</strong>. Statut juridique défini par l'article L519-1 du Code monétaire et financier, contrôlé par l'ACPR, avec immatriculation obligatoire à l'<a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">ORIAS</a>. Son rôle : présenter, proposer et aider à la conclusion d'un contrat de crédit au nom et pour le compte d'un client.
            </p>
            <p>
              À ne pas confondre avec un <strong>conseiller bancaire</strong> (salarié d'une seule banque, ne compare que ses propres grilles), un <strong>mandataire exclusif</strong> (rattaché à un seul établissement), ou un <strong>agent commercial</strong> (intermédiaire non-IOBSP en pratique interdit depuis 2013).
            </p>

            <h2>Les étapes d'un accompagnement courtier</h2>
            <p>
              Les 7 étapes standard d'un dossier avec Crédit Plus :
            </p>
            <ol>
              {howToSteps.map((s, i) => (
                <li key={i}><strong>{s.name}</strong> — {s.text}</li>
              ))}
            </ol>

            <h2>Combien coûte un courtier en 2026</h2>
            <p>
              Trois règles de transparence imposées par l'ACPR :
            </p>
            <ul>
              <li><strong>Honoraires au succès uniquement</strong> : rien à payer si l'offre de prêt n'est pas signée.</li>
              <li><strong>Grille tarifaire publique</strong> : affichée sur le site internet et communiquée au client avant signature du mandat.</li>
              <li><strong>Double rémunération obligatoirement dévoilée</strong> : le client est informé que la banque verse aussi une commission au courtier.</li>
            </ul>
            <p>
              Chez Crédit Plus, les honoraires client sont de l'ordre de <strong>1 % du montant emprunté</strong>, plafonnés selon le type de dossier. Par exemple, sur un prêt de 250 000 €, nos honoraires se situent dans la fourchette 1 500-2 500 €. La commission bancaire reversée par la banque ressort autour de 1 750-3 000 € sur le même dossier. Ces chiffres sont détaillés dans notre grille tarifaire officielle (disponible sur la page <Link href="/mentions-legales">mentions légales</Link>).
            </p>
            <p>
              <strong>Attention</strong> : la formule « 100 % gratuit » affichée par certains acteurs est proscrite par l'ACPR. Elle sera retirée de notre site dans la présente refonte. Nous dirons désormais « honoraires au succès uniquement » ou « sans frais à la charge du client avant obtention de l'offre ».
            </p>

            <h2>Courtier vs banque directement</h2>
            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border border-gray-200">Critère</th>
                    <th className="text-left p-3 border border-gray-200">Courtier IOBSP</th>
                    <th className="text-left p-3 border border-gray-200">Conseiller bancaire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border border-gray-200 font-medium">Banques comparées</td><td className="p-3 border border-gray-200">+100</td><td className="p-3 border border-gray-200">1</td></tr>
                  <tr><td className="p-3 border border-gray-200 font-medium">Temps investi par le client</td><td className="p-3 border border-gray-200">2-3h au total</td><td className="p-3 border border-gray-200">2-3h par banque</td></tr>
                  <tr><td className="p-3 border border-gray-200 font-medium">Négociation du package</td><td className="p-3 border border-gray-200">5 leviers (taux, assurance, frais, garantie, domiciliation)</td><td className="p-3 border border-gray-200">Limitée au taux et frais</td></tr>
                  <tr><td className="p-3 border border-gray-200 font-medium">Coût pour le client</td><td className="p-3 border border-gray-200">Honoraires au succès (1 %)</td><td className="p-3 border border-gray-200">0 € (mais grille rigide)</td></tr>
                  <tr><td className="p-3 border border-gray-200 font-medium">Économie moyenne (prêt 250k)</td><td className="p-3 border border-gray-200">6 000 - 15 000 € net</td><td className="p-3 border border-gray-200">Référence 0</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Comment choisir son courtier</h2>
            <ol>
              <li><strong>Vérifier l'ORIAS</strong> sur orias.fr (entreprise + courtier individuel s'ils sont distincts).</li>
              <li><strong>Lire les avis Google et Trustpilot</strong> — un courtier sans avis vérifiés est suspect.</li>
              <li><strong>Comparer les honoraires</strong> (grille publique obligatoire).</li>
              <li><strong>Évaluer la spécialité</strong> : primo-accédant, SCI, non-résident, rachat — chaque niche demande une expertise.</li>
              <li><strong>Privilégier les courtiers qui publient l'équipe</strong> avec photos, ORIAS individuels, LinkedIn (E-E-A-T).</li>
            </ol>

            <h2>Les limites d'un courtier</h2>
            <ul>
              <li>N'a pas accès à <strong>tous</strong> les établissements bancaires (certaines banques privées et banques en ligne distribuent uniquement en direct).</li>
              <li>Ne remplace pas un <strong>notaire</strong> (pour l'acte d'achat) ni un <strong>conseiller patrimonial</strong> (pour la fiscalité globale).</li>
              <li>Ne peut pas promettre un <strong>taux chiffré</strong> avant analyse complète du dossier — les taux affichés sont des moyennes de marché.</li>
              <li>Si l'écart de taux négociable est faible (profil parfait, dossier simple), les honoraires peuvent ne pas être amortis.</li>
            </ul>

            <h2>Courtier en ligne vs agence physique</h2>
            <p>
              <strong>Courtier 100 % en ligne</strong> (Pretto, Meilleurtaux) : réactivité, interface digitale, process industrialisé. Bien adapté aux dossiers standards.
            </p>
            <p>
              <strong>Courtier réseau physique</strong> (CAFPI, Empruntis) : relationnel, présence en agence, meilleur pour les profils atypiques.
            </p>
            <p>
              <strong>Courtier hybride</strong> — c'est le positionnement de Crédit Plus : siège à Carignan (Ardennes), accompagnement 100 % à distance partout en France via visio sécurisée. Équipe identifiable sur la page <Link href="/equipe">/equipe</Link>.
            </p>
          </article>

          <section className="mt-12 mb-10" aria-labelledby="faq-title-courtier">
            <h2 id="faq-title-courtier" className="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
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
