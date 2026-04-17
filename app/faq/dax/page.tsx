import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FaqDaxSection } from "@/components/faq-dax-section"

export const metadata = {
  title: "FAQ Crédit Immobilier Dax (40100) | Courtier Local Crédit Plus",
  description:
    "Questions fréquentes sur le crédit immobilier à Dax 40100. Taux, marché local, spécificités Landes. Votre courtier expert Crédit Plus à Dax.",
  keywords:
    "faq crédit immobilier dax, courtier dax 40100, prêt immobilier landes, financement dax, taux crédit dax, crédit time dax",
}

export default function FaqDaxPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FaqDaxSection />
      <Footer />
    </main>
  )
}
