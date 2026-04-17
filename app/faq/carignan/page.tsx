import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FaqCarignanSection } from "@/components/faq-carignan-section"

export const metadata = {
  title: "FAQ Crédit Immobilier Carignan (08110) | Courtier Local Crédit Plus",
  description:
    "Questions fréquentes sur le crédit immobilier à Carignan 08110. Taux, marché local, spécificités Ardennes. Votre courtier expert Crédit Plus à Carignan.",
  keywords:
    "faq crédit immobilier carignan, courtier carignan 08110, prêt immobilier ardennes, financement carignan, taux crédit carignan, crédit time carignan",
}

export default function FaqCarignanPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FaqCarignanSection />
      <Footer />
    </main>
  )
}
