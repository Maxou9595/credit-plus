import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, CheckCircle, ArrowRight, Star, TrendingUp, Users, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Courtier Crédit Immobilier Partout en France | Crédit Plus – Réseau National",
  description:
    "Crédit Plus, votre courtier en crédit immobilier et professionnel partout en France. Honoraires au succès, largement amortis par nos négociations sur le taux et les assurances. Réponse en 24h.",
  keywords: [
    "courtier crédit immobilier France",
    "courtier prêt immobilier national",
    "courtier financement partout en France",
    "meilleur courtier France",
    "courtier crédit professionnel France",
    "réseau courtier immobilier",
    "courtier en ligne France",
    "simulation crédit immobilier France",
    "meilleur taux immobilier France",
    "courtier agréé ORIAS",
  ],
  alternates: { canonical: "/agences/partout-en-france" },
  openGraph: {
    title: "Courtier Crédit Immobilier Partout en France – Crédit Plus",
    description:
      "Réseau national de courtiers Crédit Plus. Négociation du meilleur taux pour votre crédit immobilier ou professionnel, partout en France. Honoraires au succès, largement amortis par nos négociations.",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://credit-plus.com/agences/partout-en-france",
      name: "Crédit Plus – Réseau National",
      description:
        "Réseau national de courtiers en crédit immobilier et professionnel. Accompagnement personnalisé partout en France.",
      url: "https://credit-plus.com/agences/partout-en-france",
      telephone: "+33745885764",
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      serviceType: "Courtage en crédit immobilier",
      priceRange: "Gratuit",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de courtage",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crédit immobilier" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crédit professionnel" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rachat de crédit" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance emprunteur" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Crédit Plus intervient-il dans toute la France ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, Crédit Plus accompagne les emprunteurs partout en France, que ce soit en présentiel dans nos agences ou à distance par téléphone et visioconférence. Notre réseau couvre l'ensemble du territoire français.",
          },
        },
        {
          "@type": "Question",
          name: "Comment fonctionnent les honoraires de Crédit Plus ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nos honoraires sont conditionnés à la réussite de votre dossier. Ils sont largement amortis par les gains que nous obtenons grâce à nos négociations sur le taux du crédit et les assurances emprunteur.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps faut-il pour obtenir une réponse ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre équipe vous contacte sous 24h ouvrées après réception de votre demande. Une étude complète de votre dossier est réalisée sous 48 à 72h.",
          },
        },
        {
          "@type": "Question",
          name: "Quels types de crédits Crédit Plus peut-il négocier ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Crédit Plus négocie tous types de financements : crédit immobilier (résidence principale, secondaire, investissement locatif), crédit professionnel, rachat de crédit et optimisation d'assurance emprunteur.",
          },
        },
      ],
    },
  ],
}

const regions = [
  { name: "Île-de-France", villes: [
    { nom: "Paris", slug: "paris" }, { nom: "Versailles", slug: "versailles" },
    { nom: "Boulogne-Billancourt", slug: "boulogne-billancourt" }, { nom: "Nanterre", slug: "nanterre" },
    { nom: "Montreuil", slug: "montreuil" },
  ]},
  { name: "Auvergne-Rhône-Alpes", villes: [
    { nom: "Lyon", slug: "lyon" }, { nom: "Grenoble", slug: "grenoble" },
    { nom: "Clermont-Ferrand", slug: "clermont-ferrand" }, { nom: "Valence", slug: "valence" },
    { nom: "Villeurbanne", slug: "villeurbanne" },
  ]},
  { name: "Provence-Alpes-Côte d'Azur", villes: [
    { nom: "Marseille", slug: "marseille" }, { nom: "Nice", slug: "nice" },
    { nom: "Toulon", slug: "toulon" }, { nom: "Aix-en-Provence", slug: "aix-en-provence" },
    { nom: "Antibes", slug: "antibes" }, { nom: "Cannes", slug: "cannes" },
  ]},
  { name: "Occitanie", villes: [
    { nom: "Toulouse", slug: "toulouse" }, { nom: "Montpellier", slug: "montpellier" },
    { nom: "Nîmes", slug: "nimes" }, { nom: "Perpignan", slug: "perpignan" },
    { nom: "Bayonne", slug: "bayonne" },
  ]},
  { name: "Nouvelle-Aquitaine", villes: [
    { nom: "Bordeaux", slug: "bordeaux" }, { nom: "Pau", slug: "pau" },
    { nom: "Poitiers", slug: "poitiers" }, { nom: "La Rochelle", slug: "la-rochelle" },
    { nom: "Limoges", slug: "limoges" },
  ]},
  { name: "Pays de la Loire", villes: [
    { nom: "Nantes", slug: "nantes" }, { nom: "Le Mans", slug: "le-mans" },
    { nom: "Angers", slug: "angers" },
  ]},
  { name: "Hauts-de-France", villes: [
    { nom: "Lille", slug: "lille" }, { nom: "Calais", slug: "calais" },
    { nom: "Dunkerque", slug: "dunkerque" }, { nom: "Amiens", slug: "amiens" },
  ]},
  { name: "Bretagne", villes: [
    { nom: "Rennes", slug: "rennes" }, { nom: "Brest", slug: "brest" },
    { nom: "Quimper", slug: "quimper" }, { nom: "Lorient", slug: "lorient" },
  ]},
  { name: "Grand Est", villes: [
    { nom: "Strasbourg", slug: "strasbourg" }, { nom: "Metz", slug: "metz" },
    { nom: "Nancy", slug: "nancy" }, { nom: "Mulhouse", slug: "mulhouse" },
    { nom: "Reims", slug: "reims" }, { nom: "Troyes", slug: "troyes" },
    { nom: "Besançon", slug: "besancon" },
  ]},
  { name: "Normandie", villes: [
    { nom: "Rouen", slug: "rouen" }, { nom: "Caen", slug: "caen" },
    { nom: "Le Havre", slug: "le-havre" },
  ]},
  { name: "Bourgogne-Franche-Comté", villes: [
    { nom: "Dijon", slug: "dijon" }, { nom: "Besançon", slug: "besancon" },
  ]},
  { name: "Centre-Val de Loire", villes: [
    { nom: "Tours", slug: "tours" }, { nom: "Orléans", slug: "orleans" },
  ]},
]

const avantages = [
  {
    icon: Shield,
    titre: "Agréé ORIAS",
    texte: "Tous nos courtiers sont enregistrés à l'ORIAS et respectent les obligations légales du courtage en crédit.",
  },
  {
    icon: TrendingUp,
    titre: "+100 banques partenaires",
    texte: "Nous comparons les offres de plus de 100 établissements bancaires pour vous garantir le meilleur taux.",
  },
  {
    icon: Users,
    titre: "Accompagnement personnalisé",
    texte: "Un courtier dédié vous accompagne de la simulation jusqu'à la signature chez le notaire.",
  },
  {
    icon: Clock,
    titre: "Réponse en 24h",
    texte: "Déposez votre demande en ligne, notre équipe vous recontacte sous 24 heures ouvrées.",
  },
]

const faq = [
  {
    q: "Crédit Plus intervient-il dans toute la France ?",
    r: "Oui, Crédit Plus accompagne les emprunteurs partout en France, en présentiel dans nos agences ou à distance. Notre réseau couvre l'ensemble du territoire français.",
  },
  {
    q: "Comment fonctionnent les honoraires de Crédit Plus ?",
    r: "Nos honoraires sont conditionnés à la réussite de votre dossier. Ils sont largement amortis par les gains que nous obtenons grâce à nos négociations sur le taux du crédit et les assurances emprunteur.",
  },
  {
    q: "Puis-je tout faire à distance ?",
    r: "Absolument. Simulation, étude de dossier, négociation et suivi : tout se fait par téléphone, email ou visioconférence. Vous n'avez pas à vous déplacer.",
  },
  {
    q: "Combien de temps faut-il pour obtenir une réponse ?",
    r: "Notre équipe vous contacte sous 24h après réception de votre demande. Une étude complète est réalisée sous 48 à 72h.",
  },
  {
    q: "Quels types de crédits négociez-vous ?",
    r: "Crédit immobilier (résidence principale, secondaire, locatif), crédit professionnel, rachat de crédit, et optimisation d'assurance emprunteur.",
  },
  {
    q: "Êtes-vous disponibles pour les non-résidents ou expatriés ?",
    r: "Oui, nous accompagnons également les Français résidant à l'étranger souhaitant acquérir un bien en France.",
  },
]

export default function PartoutEnFrancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-20" style={{ background: "linear-gradient(135deg, #ffffff 0%, #fff5f5 60%, #fff0f0 100%)" }}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="h-4 w-4" />
              Réseau national
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Votre courtier en crédit<br />
              <span className="text-primary">partout en France</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Crédit Plus négocie le meilleur taux pour votre crédit immobilier ou professionnel, peu importe votre localisation. En agence ou à distance, nous sommes là.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-base px-8 py-6" asChild>
                <a href="/demande-credit">
                  Simuler mon crédit gratuitement
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-8 py-6" asChild>
                <a href="tel:0745885764">
                  <Phone className="h-5 w-5" />
                  07 45 88 57 64
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Honoraires au succès</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Sans engagement</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Réponse en 24h</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> ORIAS agréé</span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { val: "+100", label: "Banques partenaires" },
                { val: "2,90%", label: "Taux à partir de" },
                { val: "24h", label: "Délai de réponse" },
                { val: "✓", label: "Honoraires au succès" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-bold mb-1">{s.val}</div>
                  <div className="text-white/80 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi choisir Crédit Plus ?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Un réseau de courtiers experts, agréés et indépendants, au service de votre projet financier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {avantages.map((a) => (
                <div key={a.titre} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 transition-all duration-300 group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <a.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{a.titre}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Couverture géographique */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nous intervenons dans toutes les régions
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                De Paris à Marseille, de Lille à Bordeaux — Crédit Plus couvre l'intégralité du territoire métropolitain ainsi que les DOM-TOM.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((r) => (
                <div key={r.name} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-gray-900">{r.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-x-1 gap-y-1">
                    {r.villes.map((v, i) => (
                      <span key={v.slug} className="text-sm text-gray-500">
                        <a href={`/ville/${v.slug}`} className="hover:text-primary hover:underline transition-colors duration-200">{v.nom}</a>
                        {i < r.villes.length - 1 && <span className="mx-1 text-gray-300">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">Et bien d'autres villes et communes… Quelle que soit votre localisation, nous pouvons vous accompagner.</p>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Un processus simple et rapide, 100% digitalisable à distance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: "01", titre: "Simulation gratuite", desc: "Remplissez notre formulaire en 2 minutes pour estimer votre capacité d'emprunt." },
                { num: "02", titre: "Étude de dossier", desc: "Votre courtier dédié analyse votre situation et optimise votre dossier." },
                { num: "03", titre: "Négociation bancaire", desc: "Nous sollicitons +100 banques et négocions le meilleur taux pour vous." },
                { num: "04", titre: "Signature & déblocage", desc: "Vous signez chez le notaire, votre financement est débloqué." },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="h-14 w-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.titre}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avis */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-500">+200 avis vérifiés · Note moyenne 4,9/5</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  nom: "Sophie M.", ville: "Lyon (69)",
                  texte: "Service impeccable, courtier très réactif. J'ai obtenu un taux à 2,95% alors que ma banque m'en proposait 3,40%. Gain de plusieurs milliers d'euros !",
                },
                {
                  nom: "Thomas R.", ville: "Paris (75)",
                  texte: "Tout s'est fait à distance, c'était parfait. Dossier monté en 3 jours, accord de banque en moins d'une semaine. Je recommande fortement.",
                },
                {
                  nom: "Amandine K.", ville: "Bordeaux (33)",
                  texte: "Crédit Plus m'a accompagnée pour mon investissement locatif. Très professionnel, disponible, et le résultat est là. Merci !",
                },
              ].map((avis) => (
                <div key={avis.nom} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">"{avis.texte}"</p>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{avis.nom}</div>
                    <div className="text-gray-400 text-xs">{avis.ville}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            </div>
            <div className="space-y-4">
              {faq.map((f) => (
                <details key={f.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    {f.q}
                    <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {f.r}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à obtenir le meilleur taux ?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Peu importe où vous êtes en France, Crédit Plus est là pour vous. Simulation gratuite, sans engagement, réponse sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-base px-8 py-6 font-bold" asChild>
                <a href="/demande-credit">
                  Démarrer ma simulation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6" asChild>
                <a href="tel:0745885764">
                  <Phone className="h-5 w-5 mr-2" />
                  07 45 88 57 64
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
