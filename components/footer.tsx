import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-primary/20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + description */}
          <div className="md:col-span-1">
            <Link href="/">
              <img src="/logo.png" alt="Crédit Plus" className="h-16 w-auto mb-4" />
            </Link>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">
              Votre courtier en crédit immobilier de confiance. Nous négocions pour vous les meilleures conditions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Nos services</h3>
            <ul className="space-y-2">
              {[
                { label: "Crédit immobilier", href: "/services/credit-immobilier" },
                { label: "Investissement locatif", href: "/services/investissement-locatif" },
                { label: "Rachat de crédit", href: "/services/rachat-de-credit" },
                { label: "Assurance emprunteur", href: "/services/assurance-emprunteur" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agences */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Nos agences</h3>
            <ul className="space-y-2">
              {[
                { label: "Agence Carignan (08)", href: "/agences/carignan" },
                { label: "Rejoindre le réseau", href: "/devenir-courtier-independant" },
                { label: "Avis clients", href: "/temoignages" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:0745885764" className="text-sm text-white/60 hover:text-primary transition-colors">
                  07 45 88 57 64
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@credit-plus.fr" className="text-sm text-white/60 hover:text-primary transition-colors">
                  contact@credit-plus.fr
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">Carignan (08) – Ardennes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Crédit Plus — SAS IM COURTAGE — SIREN 944645217 — ORIAS n°25005566
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "CGV", href: "/cgv" },
              { label: "CGU", href: "/cgu" },
              { label: "Mentions légales", href: "/mentions-legales" },
              { label: "Confidentialité", href: "/politique-de-confidentialite" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-xs text-white/40 hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
