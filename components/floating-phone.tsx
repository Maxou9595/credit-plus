"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingPhone() {
  // Suppression de la logique de visibilité conditionnelle basée sur le défilement
  // Le bouton sera toujours visible

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href="tel:+330745885764">
        <Button size="lg" className="rounded-full shadow-lg bg-primary hover:bg-primary/90 flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <span className="font-medium">07 45 88 57 64</span>
        </Button>
      </a>
    </div>
  )
}
