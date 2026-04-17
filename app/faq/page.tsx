import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"

export const metadata = {
  title: "FAQ - Questions Fréquentes sur le Crédit Immobilier | Crédit Plus",
  description:
    "Toutes les réponses à vos questions sur le courtage en crédit immobilier : taux, processus, avantages, délais, documents nécessaires. Expertise Crédit Plus.",
  keywords:
    "faq crédit immobilier, questions courtier, taux crédit, prêt immobilier, courtage crédit, financement immobilier",
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FaqSection />
      <Footer />
    </main>
  )
}
