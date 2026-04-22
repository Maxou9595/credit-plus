"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCallButton() {
  return (
    <a href="tel:0745885764" className="fixed bottom-6 right-6 z-50 group" aria-label="Appeler Crédit Plus">
      <Button
        size="lg"
        className="h-16 w-16 rounded-full shadow-2xl bg-[#DC0032] hover:bg-[#B8002A] transition-all duration-300 hover:scale-110"
      >
        <Phone className="h-7 w-7 text-white animate-pulse" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#DC0032] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        07 45 88 57 64
      </span>
    </a>
  )
}
