import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  CheckCircle, ArrowRight, MapPin, Zap, FileText,
  Users, Shield, BarChart3, Laptop, Award, BadgeCheck, ChevronDown,
} from "lucide-react"
import RecrutementForm from "./recrutement-form"

/* ─── SEO ─────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Devenir Courtier Indépendant – +100 Conventions Bancaires Incluses | Crédit +",
  description:
    "Lancez-vous courtier indépendant : 0 € d'apport, +100 conventions bancaires nationales, marque blanche, partout en France. IOBSP/ORIAS inclus.",
  keywords: [
    "devenir courtier indépendant",
    "sans apport",
    "sans franchise",
    "conventions bancaires",
    "marque blanche",
    "mandataire IOBSP",
    "MIOBSP",
    "rejoindre réseau courtier",
    "reconversion courtage",
    "partout en France",
  ],
  openGraph: {
    title: "Devenir Courtier Indépendant – +100 Conventions | Crédit +",
    description:
      "0 € d'apport, +100 conventions bancaires nationales, marque blanche. Rejoignez le réseau Crédit + partout en France.",
    type: "website",
    images: [{ url: "/credit-plus-og.png", width: 1200, height: 630, alt: "Crédit + – Rejoindre le réseau courtier" }],
    locale: "fr_FR",
    siteName: "Crédit +",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devenir Courtier Indépendant – +100 Conventions | Crédit +",
    description: "0 € d'apport, +100 conventions bancaires nationales. Rejoignez Crédit + partout en France.",
    images: ["/credit-plus-og.png"],
  },
  alternates: { canonical: "/devenir-courtier-independant" },
}

/* ─── JSON-LD ─────────────────────────────────────────────────────── */

const faqData = [
  {
    q: "Puis-je devenir courtier sans expérience bancaire ?",
    a: "Oui. La réglementation IOBSP ne requiert pas d'expérience bancaire préalable. Crédit + vous fournit sa formation complète incluse dès l'activation, ainsi qu'un parrain dédié pour vous guider sur chaque dossier jusqu'à votre autonomie totale — sans frais supplémentaires.",
  },
  {
    q: "Combien coûte réellement de se lancer avec Crédit + ?",
    a: "0 €. Aucun droit d'entrée, aucune redevance mensuelle fixe, aucun pas-de-porte. Votre seul investissement est le temps que vous consacrez aux dossiers. Notre rémunération est indexée sur votre production : si vous ne produisez pas, vous ne nous devez rien.",
  },
  {
    q: "Combien de conventions ai-je dès le premier jour ?",
    a: "+100 conventions actives dès votre activation dans le réseau. Elles couvrent le crédit immobilier, le regroupement de crédits, le crédit à la consommation et l'assurance emprunteur. Toutes sont signées au niveau national et opposables dès votre premier dossier soumis.",
  },
  {
    q: "Dois-je abandonner ma propre marque ?",
    a: "Non. Le modèle marque blanche vous permet de conserver intégralement votre identité (logo, site, cartes de visite, signature email) tout en accédant à nos +100 conventions. Vous présentez vos clients sous votre propre nom. Si vous démarrez sans marque établie, vous pouvez opter pour l'enseigne Crédit + et bénéficier de sa notoriété.",
  },
  {
    q: "Comment suis-je rémunéré en rejoignant Crédit + ?",
    a: "Vous percevez une commission sur chaque dossier financé, versée par la banque partenaire. Le niveau de commission et les modalités de partage sont définis contractuellement et communiqués lors de l'entretien de qualification. Un exemple chiffré est présenté dans la section « Combien vous touchez réellement » sur cette page.",
  },
  {
    q: "Franchise, mandat ou licence de marque : quelle différence ?",
    a: "La franchise impose un droit d'entrée (20 000 – 45 000 €) et une redevance mensuelle sur chiffre d'affaires. Le mandat vous lie à une seule enseigne, souvent avec exclusivité territoriale et produits imposés. La licence de marque (notre modèle) vous donne accès à nos outils et conventions sans exclusivité, sans droit d'entrée, avec liberté totale d'organisation.",
  },
  {
    q: "Quel statut juridique choisir (EURL, SASU, micro) ?",
    a: "La micro-entreprise permet de tester l'activité rapidement (plafond 77 700 €/an de CA en 2024). L'EURL ou la SASU sont recommandées dès que vous visez un CA supérieur ou souhaitez optimiser votre rémunération dirigeant. Nos partenaires comptables spécialisés courtage peuvent vous orienter selon votre situation personnelle.",
  },
  {
    q: "Que se passe-t-il si une banque dénonce la convention ?",
    a: "Nos conventions sont signées au niveau du réseau Crédit +, pas à votre nom individuel. En cas de dénonciation par un partenaire bancaire (événement rare, lié à des décisions de politique interne), vous conservez immédiatement l'accès à l'ensemble des autres conventions actives. Aucune interruption de votre activité de production.",
  },
  {
    q: "Puis-je cumuler crédit immo + assurance + regroupement ?",
    a: "Oui, c'est même l'un des principaux avantages du réseau. Nos conventions couvrent l'ensemble du spectre financier : crédit immobilier, regroupement de crédits et assurance emprunteur. Vous pouvez équiper un même client sur plusieurs besoins et percevoir plusieurs commissions sur un seul contact client.",
  },
  {
    q: "Combien de temps pour être rentable ?",
    a: "Le délai moyen observé dans notre réseau est de 60 à 90 jours après activation. Un premier dossier peut être signé dans les 30 jours suivant votre activation (délai moyen de traitement bancaire inclus). La courbe dépend de votre réseau initial de prescription et de votre rythme de prospection.",
  },
]

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.creditplus-france.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Devenir courtier indépendant",
        item: "https://www.creditplus-france.com/devenir-courtier-independant",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Courtier Indépendant – Réseau Crédit +",
    description:
      "Rejoignez le réseau Crédit + en tant que courtier indépendant MIOBSP. 0 € d'apport, +100 conventions bancaires nationales incluses, marque blanche possible, outils fournis (CRM, simulateur, signature électronique), montage dossier assisté (IA + Parrain + tunnel), formation Crédit+ incluse.",
    hiringOrganization: {
      "@type": "Organization",
      name: "Crédit +",
      sameAs: "https://www.creditplus-france.com",
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: "FR", addressLocality: "France entière" },
    },
    employmentType: "CONTRACTOR",
    workHours: "Liberté totale d'organisation",
    datePosted: "2026-04-01",
    validThrough: "2026-12-31",
    qualifications: "Immatriculation ORIAS MIOBSP ou en cours. Formation IOBSP acceptée.",
    skills: "Crédit immobilier, rachat de crédit, assurance emprunteur, prospection, conseil client",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
]

/* ─── Données ─────────────────────────────────────────────────────── */

const outils = [
  { icon: Laptop,     label: "CRM intégré",              desc: "Suivi de tous vos dossiers, relances automatiques, pipeline visuel." },
  { icon: BarChart3,  label: "Simulateur multi-banques", desc: "Comparaison en temps réel des offres de +100 partenaires." },
  { icon: FileText,   label: "Signature électronique",   desc: "Dossiers signés à distance, valeur légale, délais réduits." },
  { icon: BadgeCheck, label: "Back-office commissions",  desc: "Suivi de vos encaissements, historique, exports comptables." },
  { icon: Award,      label: "Montage dossier assisté",  desc: "IA + parrain dédié + tunnel guidé jusqu'au paiement — zéro dossier bloqué." },
]

const temoignages = [
  {
    nom: "Aurore D.", ville: "Paris (75)", metier: "Ancienne RH",
    texte: "J'ai signé mon premier dossier 28 jours après mon activation. Ce que je n'aurais jamais réussi seule en 6 mois sans les conventions Crédit +.",
  },
  {
    nom: "Mehdi L.", ville: "Lyon (69)", metier: "Ancien conseiller bancaire",
    texte: "Je gagnais 2 400 €/mois en banque. Au bout de 4 mois dans le réseau, j'étais au-dessus. Et je travaille pour moi, avec mes propres horaires.",
  },
  {
    nom: "Caroline V.", ville: "Nantes (44)", metier: "Reconversion depuis l'immobilier",
    texte: "La marque blanche m'a permis de garder mes clients existants. J'ai simplement ajouté la puissance des 100 conventions derrière mon activité.",
  },
]

const villes = [
  { nom: "Paris",       href: "/ville/paris" },
  { nom: "Lyon",        href: "/ville/lyon" },
  { nom: "Marseille",   href: "/ville/marseille" },
  { nom: "Toulouse",    href: "/ville/toulouse" },
  { nom: "Bordeaux",    href: "/ville/bordeaux" },
  { nom: "Nantes",      href: "/ville/nantes" },
  { nom: "Lille",       href: "/ville/lille" },
  { nom: "Rennes",      href: "/ville/rennes" },
  { nom: "Strasbourg",  href: "/ville/strasbourg" },
  { nom: "Montpellier", href: "/ville/montpellier" },
]

/* ─── Page ────────────────────────────────────────────────────────── */

export default function DevenirCourtierPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />

      {/* Fil d'Ariane */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-primary transition-colors">Accueil</a>
          <span>/</span>
          <span className="text-foreground font-medium">Devenir courtier indépendant</span>
        </nav>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-primary/4 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wide">
            Recrutement — 100 % digital · Partout en France
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance mb-6">
            Devenez courtier indépendant avec{" "}
            <span className="text-primary">+100 conventions bancaires</span>{" "}
            incluses dès le premier jour
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            0 € d'apport. Aucune franchise. Marque blanche ou enseigne Crédit +.
            Vos conventions sont signées au niveau national et opposables à votre premier dossier.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-14">
            {[
              { val: "0 €",   label: "d'apport ou de franchise" },
              { val: "+100",  label: "conventions bancaires nationales" },
              { val: "100 %", label: "indépendant, à votre rythme" },
            ].map(({ val, label }) => (
              <div key={val} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-primary">{val}</span>
                <span className="mt-2 text-sm text-muted-foreground text-center leading-snug">{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#recrutement-formulaire"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-base"
            >
              Candidater maintenant <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#conventions"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors text-base"
            >
              Voir les conventions
            </a>
          </div>
        </div>
      </section>

      {/* ── S1 — La franchise est un piège ────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Pourquoi la franchise traditionnelle est un piège
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Avant de signer quoi que ce soit, comparez les modèles sur ce qui compte vraiment : l'argent que vous gardez.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="text-left px-6 py-4 font-semibold w-1/4">Critère</th>
                  <th className="text-center px-6 py-4 font-semibold">Franchise classique</th>
                  <th className="text-center px-6 py-4 font-semibold">Indépendant seul</th>
                  <th className="text-center px-6 py-4 font-semibold text-primary">Crédit +</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {[
                  ["Droit d'entrée",          "20 000 – 45 000 €",          "0 €",                    "0 €"],
                  ["Redevance mensuelle",      "300 – 1 500 €/mois",         "0 €",                    "0 €"],
                  ["Conventions bancaires",    "Réseau propriétaire",        "0 (à négocier seul)",    "+100 nationales dès J1"],
                  ["Outils (CRM, simulateur)", "Inclus (dans la franchise)", "À financer",             "Inclus — 0 €"],
                  ["Honoraires client",        "Inclus franchise",           "Libre",                  "Libre (~1 % en moyenne)"],
                  ["Marque",                   "Imposée",                    "Libre",                  "Libre ou Crédit +"],
                  ["Exclusivité territoriale", "Souvent oui",                "Non",                    "Non"],
                ].map(([crit, fr, ind, cp], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                    <td className="px-6 py-4 font-medium text-foreground">{crit}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{fr}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{ind}</td>
                    <td className="px-6 py-4 text-center font-semibold text-primary">{cp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Commission réelle ──────────────────────────────────────── */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Combien vous touchez réellement</h2>
          <p className="text-muted-foreground text-center mb-8 text-sm">
            Chiffres basés sur une commission bancaire moyenne de 1 % du capital emprunté.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Montant du prêt</th>
                  <th className="px-6 py-4 text-center font-semibold">Commission bancaire brute</th>
                  <th className="px-6 py-4 text-center font-semibold">Honoraires client</th>
                  <th className="px-6 py-4 text-center font-semibold">Votre gain net estimé</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {[
                  ["200 000 €", "≈ 2 000 €", "Libre (~1 % en moyenne)", "Communiqué à l'entretien"],
                  ["300 000 €", "≈ 3 000 €", "Libre (~1 % en moyenne)", "Communiqué à l'entretien"],
                  ["500 000 €", "≈ 5 000 €", "Libre (~1 % en moyenne)", "Communiqué à l'entretien"],
                ].map(([montant, commission, honoraires, net], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                    <td className="px-6 py-4 font-semibold text-foreground">{montant}</td>
                    <td className="px-6 py-4 text-center text-primary font-bold">{commission}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{honoraires}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground italic">{net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Les honoraires client sont libres et fixés par le courtier indépendant, autour de 1 % en moyenne. Le gain net précis vous est communiqué lors de l'entretien de présentation.
          </p>
        </div>
      </section>

      {/* ── S2 — Modèle en 4 étapes ───────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Du premier contact au premier dossier signé en 30 jours
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            Le modèle Crédit + est conçu pour aller vite. 4 étapes, sans complexité administrative inutile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", titre: "Candidature",           desc: "Remplissez le formulaire en bas de page. Entretien de qualification sous 48h ouvrées." },
              { num: "02", titre: "Validation ORIAS/IOBSP",desc: "Nous vérifions votre immatriculation ou vous accompagnons dans les démarches." },
              { num: "03", titre: "Activation conventions",desc: "+100 conventions activées. Accès immédiat au CRM, simulateur et back-office." },
              { num: "04", titre: "Premier dossier",       desc: "Votre premier dossier peut être soumis le jour même. Délai bancaire moyen : 15 à 30 jours." },
            ].map(({ num, titre, desc }) => (
              <div key={num} className="flex flex-col p-6 rounded-2xl border border-primary/10 bg-card">
                <span className="text-5xl font-black text-primary/15 mb-4 leading-none">{num}</span>
                <h3 className="text-lg font-bold mb-2">{titre}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3 — +100 conventions ─────────────────────────────────── */}
      <section id="conventions" className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            +100 conventions bancaires nationales incluses
          </h2>
          <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
            Toutes nos conventions sont signées au niveau national et opposables dès votre premier dossier.
            Pas de démarche à faire, pas de négociation à mener : tout est actif dès le jour 1.
          </p>
          <p className="text-center text-sm font-semibold text-primary mb-12">
            Aucun courtier indépendant isolé ne peut négocier seul ce que nous offrons collectivement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                cat: "Crédit & financement",
                items: ["Crédit immobilier", "Prêt à taux zéro (PTZ)", "Prêt relais", "VEFA / construction", "Regroupement de crédits", "Crédit consommation"],
              },
              {
                cat: "Assurance & protection",
                items: ["Assurance emprunteur", "Délégation loi Lemoine", "Garantie accidents de vie"],
              },
              {
                cat: "Investissement & gestion",
                items: ["Investissement locatif", "LMNP / LMP", "SCI financement", "SCPI", "Déficit foncier", "Prêt professionnel"],
              },
            ].map(({ cat, items }) => (
              <div key={cat} className="p-6 rounded-2xl border border-primary/10 bg-card">
                <h3 className="font-bold text-base mb-4 text-foreground">{cat}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4 — Combien vous touchez ─────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Combien vous touchez réellement</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Les chiffres ci-dessous sont basés sur une commission bancaire moyenne de 1 % du capital emprunté.
            Votre part exacte est définie contractuellement et communiquée lors de l'entretien.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Montant du prêt</th>
                  <th className="text-center px-6 py-4 font-semibold">Commission bancaire brute</th>
                  <th className="text-center px-6 py-4 font-semibold">Honoraires client</th>
                  <th className="text-center px-6 py-4 font-semibold text-primary">Votre gain net estimé</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {[
                  ["200 000 €", "≈ 2 000 €", "Libre (~1 % en moyenne)", "Communiqué à l'entretien"],
                  ["300 000 €", "≈ 3 000 €", "Libre (~1 % en moyenne)", "Communiqué à l'entretien"],
                  ["500 000 €", "≈ 5 000 €", "Libre (~1 % en moyenne)", "Communiqué à l'entretien"],
                ].map(([montant, commission, honoraires, gain], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                    <td className="px-6 py-4 font-bold text-foreground">{montant}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{commission}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{honoraires}</td>
                    <td className="px-6 py-4 text-center font-semibold text-primary">{gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            * Commission variable selon les banques et le type de financement. Un courtier actif réalise en moyenne 3 à 8 dossiers par mois selon son réseau.
          </p>
        </div>
      </section>

      {/* ── S5 — Marque blanche OU Crédit + ───────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Marque blanche ou enseigne Crédit + : vous choisissez
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Les deux options donnent accès aux mêmes conventions et aux mêmes outils. La différence : votre identité visuelle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-2 border-primary/20 bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Marque blanche — Votre identité</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Vous conservez votre logo, votre nom commercial, votre site web, vos cartes de visite. Vos clients
                ne voient que votre marque. Idéal si vous avez déjà un portefeuille ou une réputation locale.
              </p>
              <ul className="space-y-2">
                {["Votre logo et charte graphique", "Vos propres supports commerciaux", "Accès identique aux +100 conventions", "Aucune mention Crédit + obligatoire"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border-2 border-primary bg-primary/5">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enseigne Crédit + — Démarrage rapide</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Vous démarrez sous l'enseigne Crédit + et profitez de sa notoriété digitale et locale immédiatement.
                Idéal si vous êtes en reconversion et n'avez pas encore de portefeuille constitué.
              </p>
              <ul className="space-y-2">
                {["Notoriété et crédibilité immédiates", "Site et supports Crédit + fournis", "Accès identique aux +100 conventions", "Achat de prospects qualifiés en direct", "Transition possible vers marque blanche"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6 — Outils ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            5 outils fournis — 0 € de frais supplémentaires
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tout ce qu'il vous faut pour traiter vos dossiers de A à Z, sans avoir à assembler votre propre stack.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outils.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="p-5 rounded-2xl border border-primary/10 bg-card hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S7 — Témoignages ──────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ils ont rejoint le réseau</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Des profils différents, une même décision : arrêter de travailler pour les autres.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {temoignages.map(({ nom, ville, metier, texte }) => (
              <article key={nom} className="p-6 rounded-2xl border border-primary/10 bg-card">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0"
                    aria-label={`Avatar de ${nom}`}
                  >
                    {nom[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{nom}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />{ville}
                    </p>
                    <p className="text-xs text-primary font-medium">{metier}</p>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed italic">"{texte}"</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── S8 — Partout en France ────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Recrutement partout en France — 100 % digital
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Pas de zone exclusive, pas de territoire imposé. Vous exercez là où vos clients se trouvent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div
              className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 aspect-[4/3] flex flex-col items-center justify-center"
              role="img"
              aria-label="Carte de France – réseau Crédit + présent dans toutes les régions"
            >
              <MapPin className="h-16 w-16 text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground font-medium">Carte de France</p>
              <p className="text-xs text-muted-foreground">Tous départements couverts</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-5">Rejoindre le réseau dans votre ville</h3>
              <div className="grid grid-cols-2 gap-3">
                {villes.map(({ nom, href }) => (
                  <a
                    key={nom}
                    href={href}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg border border-primary/10 bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors text-sm font-medium"
                  >
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Courtier indépendant {nom}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S9 — FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Questions fréquentes — Devenir courtier indépendant
          </h2>
          <p className="text-muted-foreground text-center mb-12">Toutes les réponses, sans langue de bois.</p>
          <div className="space-y-3">
            {faqData.map(({ q, a }, i) => (
              <details key={i} className="group rounded-xl border border-primary/10 bg-card overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-sm md:text-base select-none hover:bg-primary/5 transition-colors">
                  <span>{q}</span>
                  <ChevronDown className="h-4 w-4 text-primary flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-primary/10">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── S10 — Formulaire candidature ──────────────────────────── */}
      <RecrutementForm />

      {/* Encart légal */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-6">
          Crédit + — SAS IM COURTAGE — SIREN 944645217 — Courtier en opérations de banque et en services de paiement (COBSP)
          immatriculé à l'ORIAS n°25005566 (www.orias.fr). L'exercice de l'activité de MIOBSP est soumis à immatriculation
          ORIAS et au respect des obligations ACPR. Les montants présentés sont indicatifs et communiqués à titre d'exemple.
          La part exacte revenant au courtier partenaire est définie contractuellement.
        </p>
      </div>

      <Footer />
    </main>
  )
}
