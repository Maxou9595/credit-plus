import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AgencyHero } from "@/components/agency-hero"
import { AgencyInfo } from "@/components/agency-info"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Agence Dax | Crédit Plus - Courtier en Crédit Immobilier",
  description:
    "Votre agence Crédit Plus à Dax (Landes, 40). Courtier en crédit immobilier, rachat de crédit et assurance emprunteur. Contactez-nous pour obtenir le meilleur taux.",
}

export default function DaxPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AgencyHero
        city="Dax"
        title="Courtier en crédit immobilier à Dax"
        description="Votre expert en financement dans les Landes. Nous négocions pour vous les meilleures conditions auprès de nos partenaires bancaires."
      />
      <AgencyInfo
        address="Dax, 40100 Landes"
        phone="07 81 73 61 29"
        hours={["Lundi - Vendredi : 9h00 - 18h00", "Samedi : Sur rendez-vous"]}
      />
      <CTA />
      <Footer />
    </main>
  )
}
