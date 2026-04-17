import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Simulator } from "@/components/simulator"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Simulator />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
