import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CityCTAProps {
  cityName?: string
}

export function CityCTA({ cityName }: CityCTAProps) {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg mb-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
        {cityName ? `Prêt à concrétiser votre projet à ${cityName} ?` : "Prêt à concrétiser votre projet ?"}
      </h2>
      <p className="text-lg mb-6 text-red-50 text-pretty">
        Obtenez une simulation gratuite et sans engagement en quelques minutes
      </p>
      <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
        <Link href="/credit-immobilier/simulation">Faire une simulation</Link>
      </Button>
    </section>
  )
}
