import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"

export const metadata = {
  title: "FAQ Crédit Immobilier 2026 – Toutes vos Questions | Crédit Plus Courtier",
  description:
    "Réponses complètes à vos questions sur le courtage en crédit immobilier : taux 2026, processus, avantages, délais, documents. Expertise Crédit Plus, courtier ORIAS n°25005566.",
  keywords: [
    "faq crédit immobilier",
    "questions courtier crédit",
    "taux prêt immobilier 2026",
    "comment fonctionne courtier",
    "délai obtention crédit immobilier",
    "documents prêt immobilier",
  ],
  openGraph: {
    title: "FAQ Crédit Immobilier 2026 – Toutes vos Questions | Crédit Plus",
    description:
      "Courtier ORIAS n°25005566, Crédit Plus répond à toutes vos questions sur le crédit immobilier, le rachat de crédit et l'assurance emprunteur.",
    type: "website",
  },
  alternates: { canonical: "/faq" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.creditplus-france.com" },
        { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.creditplus-france.com/faq" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce qu'un courtier en crédit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un courtier en crédit est un professionnel qui sert d'intermédiaire entre les emprunteurs et les établissements financiers. Son rôle est de trouver la meilleure offre de prêt adaptée à votre situation et à vos besoins, en négociant les conditions les plus avantageuses auprès des banques partenaires.",
          },
        },
        {
          "@type": "Question",
          name: "Quels sont les avantages de passer par un courtier plutôt que directement par une banque ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Passer par un courtier présente plusieurs avantages : gain de temps, expertise du marché, pouvoir de négociation, accompagnement personnalisé et souvent un taux plus avantageux que celui que vous pourriez obtenir seul.",
          },
        },
        {
          "@type": "Question",
          name: "Les services d'un courtier sont-ils payants ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nos honoraires sont conditionnés à la réussite de votre dossier. Ils sont largement amortis par les gains que nous obtenons grâce à nos négociations sur le taux du crédit et les assurances emprunteur.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps prend le processus de courtage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comptez entre 2 et 4 semaines pour un crédit à la consommation, et entre 4 et 8 semaines pour un crédit immobilier, de la première consultation jusqu'au déblocage des fonds.",
          },
        },
        {
          "@type": "Question",
          name: "Quel est le taux d'endettement maximum accepté par les banques ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depuis janvier 2022, le taux d'endettement maximum est fixé à 35 % des revenus nets avant impôt. Les banques peuvent déroger pour 20 % de leurs dossiers, notamment pour les primo-accédants.",
          },
        },
        {
          "@type": "Question",
          name: "Êtes-vous un organisme agréé ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, Crédit-Plus est un courtier en opérations de banque et services de paiement (COBSP) immatriculé à l'ORIAS sous le numéro 25005566.",
          },
        },
      ],
    },
  ],
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-8">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-primary transition-colors">Accueil</a>
          <span>/</span>
          <span className="text-foreground font-medium">FAQ</span>
        </nav>
      </div>
      <FaqSection />
      <Footer />
    </main>
  )
}
