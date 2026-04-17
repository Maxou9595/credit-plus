import { CreditSimulatorForm } from "@/components/credit-simulator-form"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function SimulerMonCreditPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <CreditSimulatorForm />
      </div>
      <Footer />
    </main>
  )
}
