import type { Metadata } from "next"
import Link from "next/link"
import {
  BadgeCheck, Users, Target, ShieldCheck, TrendingUp, MapPin, Handshake, ScrollText,
  ArrowRight
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { YmylDisclaimer } from "@/components/ymyl-disclaimer"
import { CTA } from "@/components/cta"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "À propos de Crédit Plus — histoire, équipe, engagements",
  description:
    "Crédit Plus : SAS IM COURTAGE, ORIAS n°25005566, siège à Carignan (08). Notre histoire, notre équipe, nos engagements de transparence et de conformité ACPR.",
  alternates: { canonical: "/a-propos" },
}

export default function AProposPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[{ name: "À propos", url: "/a-propos" }]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">À propos — Crédit Plus</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Un courtier immobilier transparent, basé en France, conforme ACPR
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Crédit Plus (SAS IM COURTAGE) est un courtier indépendant en crédit immobilier, rachat de crédit, investissement locatif et assurance emprunteur. Nous sommes immatriculés à l'ORIAS sous le numéro <strong>25005566</strong>, contrôlés par l'ACPR, et avons fait le choix d'une transparence totale sur nos honoraires, nos partenaires bancaires et notre mode de fonctionnement.
            </p>
          </header>

          {/* Chiffres clés — E-E-A-T */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14" aria-labelledby="keyfigures">
            <h2 id="keyfigures" className="sr-only">Chiffres clés Crédit Plus</h2>
            {[
              { icon: TrendingUp, num: "+100", label: "banques et assureurs partenaires" },
              { icon: Users, num: "France entière", label: "accompagnement 100 % à distance depuis Carignan" },
              { icon: ScrollText, num: "ORIAS 25005566", label: "immatriculation vérifiable" },
              { icon: ShieldCheck, num: "100 %", label: "honoraires au succès" },
            ].map((kf) => (
              <div key={kf.label} className="p-5 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-primary/5">
                <kf.icon className="h-6 w-6 text-primary mb-2" aria-hidden />
                <div className="text-2xl font-bold text-gray-900">{kf.num}</div>
                <div className="text-xs text-gray-600 mt-1">{kf.label}</div>
              </div>
            ))}
          </section>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Notre histoire</h2>
            <p>
              Crédit Plus a été fondé en 2025 par Maxime IORI à Carignan, dans les Ardennes. L'ambition : offrir aux particuliers un service de courtage en crédit immobilier qui conjugue l'expertise d'un réseau bancaire large (plus de 100 établissements partenaires) avec la proximité et la transparence d'un cabinet indépendant. Le siège social est à Carignan (<Link href="/agences/carignan-08">40 rue Maria Visseaux, 08110</Link>). L'accompagnement est 100 % à distance pour l'ensemble du territoire français, avec des rendez-vous physiques à Carignan sur demande.
            </p>
            <p>
              La SAS IM COURTAGE est immatriculée au Registre du Commerce et des Sociétés (SIREN 944 645 217) et à l'<a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">ORIAS sous le numéro 25005566</a> — vérifiable publiquement sur orias.fr. Cette immatriculation est obligatoire pour exercer le métier d'Intermédiaire en Opérations de Banque et Services de Paiement (IOBSP).
            </p>

            <h2>Nos engagements</h2>

            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Transparence tarifaire",
                  text: "Grille d'honoraires publique, aucun frais caché. Nous sommes rémunérés à la signature de l'offre de prêt, jamais avant.",
                },
                {
                  icon: Handshake,
                  title: "Sans frais préalables",
                  text: "Remplir un dossier chez nous, recevoir des propositions, comparer les offres : tout est sans frais tant qu'aucune offre de prêt n'est signée par vos soins.",
                },
                {
                  icon: ScrollText,
                  title: "Conformité ACPR",
                  text: "Formations IOBSP à jour, registre des réclamations tenu, médiateur de la consommation identifié, RGPD respecté.",
                },
              ].map((e) => (
                <div key={e.title} className="p-5 rounded-2xl border border-gray-200 bg-white">
                  <e.icon className="h-6 w-6 text-primary mb-2" aria-hidden />
                  <h3 className="font-bold text-gray-900 text-base mb-1">{e.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{e.text}</p>
                </div>
              ))}
            </div>

            <h2>Comment nous fonctionnons</h2>
            <p>
              Quand vous nous contactez, un courtier analyse votre projet (revenus, charges, apport, calendrier) sous 24-48h, puis présente votre dossier en parallèle à 3 à 5 banques partenaires sélectionnées selon votre profil. Nous négocions pour vous <strong>cinq leviers</strong> simultanément : taux nominal, assurance emprunteur, frais de dossier, garantie (caution ou hypothèque) et conditions de domiciliation. C'est la négociation du <em>package complet</em> qui crée l'essentiel de l'économie, pas le taux nominal seul.
            </p>
            <p>
              Nos honoraires sont dus uniquement à la signature de l'offre de prêt. Aucun engagement préalable ne vous est demandé. Si aucune offre obtenue par notre intermédiaire ne vous convient, rien ne vous est facturé. Cette règle est gravée dans le mandat d'intermédiation qui vous est soumis avant tout travail, conformément au Code de la consommation.
            </p>

            <h2>Notre équipe</h2>
            <p>
              Découvrez nos courtiers IOBSP sur la <Link href="/equipe">page équipe</Link>. Chaque courtier est nommément identifié avec son ORIAS individuel, son parcours, ses spécialités et son LinkedIn. C'est un engagement E-E-A-T fondamental dans un métier réglementé comme le nôtre.
            </p>

            <h2>Les banques partenaires et partenaires assurance</h2>
            <p>
              Notre réseau inclut les grandes banques nationales (BNP Paribas, Société Générale, LCL, La Banque Postale…), les caisses régionales des Crédit Agricole, Caisse d'Épargne, Banque Populaire et Crédit Mutuel, les banques en ligne (Boursorama, Fortuneo, Hello bank!), les banques spécialisées (HSBC, CIC, AXA Banque), et les assureurs emprunteurs hors groupe bancaire (April, Cardif, Generali, MetLife, MNCAP, SwissLife, UNIM…). Ce maillage nous permet de mettre votre dossier en concurrence sur toutes les conventions disponibles.
            </p>
            <p>
              La liste précise des banques mobilisables pour votre dossier dépend de votre profil, de votre projet et de votre zone géographique. Elle vous est communiquée par écrit à l'ouverture du mandat.
            </p>

            <h2>Conformité et cadre légal</h2>
            <ul>
              <li><strong>ORIAS n°25005566</strong> — vérifiable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">orias.fr</a>.</li>
              <li><strong>Contrôle ACPR</strong> (Autorité de Contrôle Prudentiel et de Résolution) — 4 Place de Budapest, CS 92459, 75436 Paris cedex 09.</li>
              <li><strong>Médiateur de la consommation</strong> — coordonnées disponibles sur notre page <Link href="/mentions-legales">mentions légales</Link>. En cas de litige non résolu par nos services, vous pouvez saisir gratuitement ce médiateur.</li>
              <li><strong>Respect du RGPD</strong> — notre <Link href="/politique-de-confidentialite">politique de confidentialité</Link> détaille le traitement de vos données.</li>
              <li><strong>HCSF 2026</strong> — nous respectons strictement les règles (35 % d'endettement, 25 ans max, flexibilité 20 %). Nous n'acceptons pas de dossier qui contreviendrait à ces règles.</li>
            </ul>

            <h2>Contact</h2>
            <p>
              <strong>Téléphone</strong> : <a href="tel:0745885764">07 45 88 57 64</a><br />
              <strong>Email</strong> : <a href="mailto:contact@creditplus-france.com">contact@creditplus-france.com</a><br />
              <strong>Siège</strong> : 40 rue Maria Visseaux, 08110 Carignan, Ardennes<br />
              <strong>Horaires</strong> : lundi au vendredi 9h–18h, samedi sur rendez-vous<br />
              <strong>En ligne</strong> : <Link href="/credit-immobilier/simulation">formulaire de simulation gratuite</Link>, réponse sous 24h.
            </p>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/credit-immobilier/simulation">Simuler mon crédit <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/equipe">Rencontrer l'équipe</Link>
            </Button>
          </div>

          <YmylDisclaimer className="mt-10" />
        </section>

        <CTA />
      </main>
    </>
  )
}
