"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function MobileMenu() {
  const pathname = usePathname()

  // Liste des liens de navigation
  const navLinks = [
    { href: "/#calculator", label: "Simulateur" },
    { href: "/#services", label: "Nos offres" },
    { href: "/faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
    { href: "/parrainage", label: "Parrainage" },
    { href: "/credit-immobilier/simulation", label: "Demande de crédit", isButton: true },
  ]

  // Fonction pour vérifier si un lien est actif
  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-2 bg-[#1b2123] border-[#2a3235] text-white">
        {navLinks.map((link, index) => (
          <DropdownMenuItem
            key={index}
            className={`
              rounded-md mb-1 p-0 focus:bg-white/10 hover:bg-white/10 
              ${isActive(link.href) ? "bg-white/10" : ""}
              ${link.isButton ? "mt-2" : ""}
            `}
          >
            <Link
              href={link.href}
              className={`
                w-full px-3 py-2 flex items-center
                ${link.isButton ? "bg-primary text-white rounded-md font-medium" : ""}
              `}
            >
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-1 h-6 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={isActive(link.href) ? "pl-3 font-medium" : ""}>{link.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
