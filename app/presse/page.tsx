import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, Download, ExternalLink, FileText, User, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTA } from "@/components/cta"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Espace presse Crédit Plus — press kit et contacts",
  description: "Espace dédié aux journalistes : press kit, chiffres clés, contacts, sujets d'expertise, porte-parole Crédit Plus.",
  alternates: { canonical: "/presse" },
}

export default function PressePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "Presse", url: "/presse" }]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Espace presse</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Presse & médias — Crédit Plus
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cette page est destinée aux journalistes, rédacteurs et producteurs audiovisuels. Vous y trouverez notre press kit, nos chiffres-clés, les sujets sur lesquels notre équipe peut intervenir comme expert, et nos contacts directs.
            </p>
          </header>

          {/* Contact express presse */}
          <section className="p-6 rounded-2xl border-2 border-primary/30 bg-primary/5 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact presse direct</h2>
            <p className="text-gray-700 mb-4">Besoin d'un commentaire expert sous 2h ? Contactez-nous directement.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <a href="mailto:contact@credit-plus.fr?subject=Demande%20presse" className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-primary transition">
                <Mail className="h-5 w-5 text-primary" aria-hidden />
                <div>
                  <div className="text-xs text-gray-500">Email presse</div>
                  <div className="font-semibold text-gray-900">contact@credit-plus.fr</div>
                </div>
              </a>
              <a href="tel:0745885764" className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-primary transition">
                <Phone className="h-5 w-5 text-primary" aria-hidden />
                <div>
                  <div className="text-xs text-gray-500">Téléphone direct</div>
                  <div className="font-semibold text-gray-900">07 45 88 57 64</div>
                </div>
              </a>
            </div>
            <p className="text-xs text-gray-600">Porte-parole : Maxime Iori, fondateur. Réponse aux demandes presse sous 2h en journée ouvrée, 24h le week-end.</p>
          </section>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Chiffres-clés Crédit Plus</h2>
            <ul>
              <li><strong>ORIAS n°25005566</strong> — vérifiable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">orias.fr</a></li>
              <li><strong>SIREN 944 645 217</strong> — SAS IM COURTAGE</li>
              <li><strong>Siège</strong> : 40 rue Maria Visseaux, 08110 Carignan (Ardennes)</li>
              <li><strong>Siège</strong> : Carignan (08, Ardennes) — accompagnement 100 % à distance partout en France</li>
              <li><strong>Banques et assureurs partenaires</strong> : +100 (nationales, régionales, en ligne, spécialisées)</li>
              <li><strong>Services</strong> : crédit immobilier, rachat de crédit, investissement locatif, assurance emprunteur</li>
              <li><strong>Régulation</strong> : ACPR (Autorité de Contrôle Prudentiel et de Résolution)</li>
              <li><strong>Fondation</strong> : 2025 par Maxime Iori</li>
            </ul>

            <h2>Porte-parole</h2>
            <div className="not-prose my-6 p-5 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-start gap-4 mb-3">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                  <User className="h-8 w-8 text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Maxime Iori</h3>
                  <p className="text-sm text-gray-600">Fondateur & courtier IOBSP — Crédit Plus</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Maxime Iori est le fondateur de Crédit Plus (SAS IM COURTAGE). Courtier IOBSP inscrit à l'ORIAS (n°25005566), il intervient sur les sujets suivants :
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li>— Marché du crédit immobilier français (taux, tendances, HCSF)</li>
                <li>— Primo-accédants, apport, PTZ</li>
                <li>— Rachat de crédit et renégociation</li>
                <li>— Investissement locatif (LMNP, SCI, déficit foncier)</li>
                <li>— Assurance emprunteur, loi Lemoine, délégation</li>
                <li>— Régulation ACPR et règles HCSF</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
                <Link href="/equipe/maxime-iori" className="text-primary font-medium hover:underline">Voir la fiche complète de Maxime Iori →</Link>
              </div>
            </div>

            <h2>Sujets d'expertise et angles éditoriaux disponibles</h2>

            <h3>Actualité et conjoncture</h3>
            <ul>
              <li>Réaction à chaque décision BCE (réactivité 2h)</li>
              <li>Analyse mensuelle des taux (baromètre Grand Est exclusif)</li>
              <li>Impact des mesures HCSF sur les emprunteurs</li>
              <li>Évolutions réglementaires (loi de finances, décrets fiscaux investissement locatif)</li>
            </ul>

            <h3>Analyses de fond</h3>
            <ul>
              <li>Profil du primo-accédant en Grand Est (étude propriétaire annuelle)</li>
              <li>Impact de la loi Lemoine sur les économies réelles d'emprunteurs (bilan 4 ans)</li>
              <li>Comparatif courtier indépendant rural vs plateformes nationales</li>
              <li>Crédit frontalier Luxembourg pour salariés lorrains</li>
            </ul>

            <h3>Régional</h3>
            <ul>
              <li>Marché immobilier Ardennes, Marne, Moselle, Meurthe-et-Moselle, Bas-Rhin, Haut-Rhin, Landes (couverture agences)</li>
              <li>PTZ 2026 en zone C : qui en bénéficie réellement</li>
              <li>Banques régionales (Crédit Agricole Nord Est, CIC Est, Caisse d'Épargne Grand Est Europe, etc.) — spécificités locales</li>
            </ul>

            <h2>Baromètres et données disponibles</h2>
            <ul>
              <li><strong>Baromètre mensuel des taux</strong> — publié le 1er de chaque mois, données Crédit Plus + Observatoire Crédit Logement/CSA. <Link href="/blog/barometre-taux-avril-2026">Dernier baromètre</Link>.</li>
              <li><strong>Étude annuelle du primo-accédant Grand Est</strong> — publiée en septembre, 350+ dossiers anonymisés.</li>
              <li><strong>Analyses sectorielles</strong> — à la demande (délai 5-10 jours ouvrés).</li>
            </ul>

            <h2>Outils et widgets embeddables</h2>
            <p>
              Crédit Plus propose plusieurs outils en open embed (iframe) utilisables par les sites partenaires et les médias. Citation et lien vers credit-plus.fr obligatoires, aucun frais.
            </p>
            <ul>
              <li><Link href="/widgets/taux">Widget des taux du mois</Link> — mis à jour automatiquement chaque 1er du mois.</li>
              <li><Link href="/outils/calcul-mensualites">Calculateur de mensualités</Link> — iframe possible sur demande.</li>
              <li><Link href="/outils/simulation-ptz">Simulateur PTZ 2026</Link></li>
            </ul>

            <h2>Press kit à télécharger</h2>
            <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="/press-kit/logo-credit-plus.zip" className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary transition">
                <Download className="h-5 w-5 text-primary" aria-hidden />
                <div>
                  <div className="font-semibold text-gray-900">Logos (PNG + SVG)</div>
                  <div className="text-xs text-gray-500">Fond transparent, vecteur</div>
                </div>
              </a>
              <a href="/press-kit/credit-plus-fact-sheet.pdf" className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary transition">
                <FileText className="h-5 w-5 text-primary" aria-hidden />
                <div>
                  <div className="font-semibold text-gray-900">Fact sheet (PDF)</div>
                  <div className="text-xs text-gray-500">Présentation 2 pages</div>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-500 italic">Les assets press kit sont en cours de finalisation. Contactez-nous directement pour une version anticipée.</p>

            <h2>Revue de presse Crédit Plus</h2>
            <p className="text-gray-600 italic">Cette section sera enrichie au fur et à mesure des publications. Vous êtes journaliste et avez cité Crédit Plus ? Contactez-nous pour que nous ajoutions votre article.</p>

            <h2>Conditions d'utilisation éditoriale</h2>
            <ul>
              <li>Citations des chiffres Crédit Plus : attribution obligatoire (« Source : Crédit Plus, courtier IOBSP ORIAS n°25005566 »).</li>
              <li>Utilisation du logo : autorisée dans un contexte éditorial, interdite dans un contexte publicitaire sans accord préalable.</li>
              <li>Reproduction d'articles de notre blog : autorisée sous licence CC-BY (mention « Source : credit-plus.fr » + lien).</li>
              <li>Interviews : autorisées, relecture de citation disponible sur demande (délai 2h ouvrées).</li>
            </ul>
          </article>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <a href="mailto:contact@credit-plus.fr?subject=Demande%20presse">Nous contacter presse</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/equipe/maxime-iori">Fiche porte-parole</Link>
            </Button>
          </div>
        </section>

        <CTA />
      </main>
    </>
  )
}
