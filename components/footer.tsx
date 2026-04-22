import Link from "next/link"
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-primary/20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Logo + description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <img src="/logo.png" alt="Crédit Plus" className="h-16 w-auto mb-4" />
            </Link>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">
              Courtier indépendant en crédit immobilier, rachat de crédit, investissement locatif et assurance emprunteur.
            </p>
          </div>

          {/* Crédit immobilier */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Crédit immobilier</h3>
            <ul className="space-y-2">
              {[
                { label: "Crédit immobilier", href: "/credit-immobilier" },
                { label: "Simulation", href: "/credit-immobilier/simulation" },
                { label: "Taux du mois", href: "/credit-immobilier/taux" },
                { label: "Capacité d'emprunt", href: "/credit-immobilier/capacite-emprunt" },
                { label: "PTZ 2026", href: "/credit-immobilier/pret-taux-zero-ptz" },
                { label: "Primo-accédant", href: "/credit-immobilier/primo-accedant" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Autres services */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Nos services</h3>
            <ul className="space-y-2">
              {[
                { label: "Investissement locatif", href: "/investissement-locatif" },
                { label: "Rachat de crédit", href: "/rachat-de-credit" },
                { label: "Assurance emprunteur", href: "/assurance-emprunteur" },
                { label: "Rôle du courtier", href: "/courtier-immobilier" },
                { label: "Outils & calculatrices", href: "/outils/calcul-mensualites" },
                { label: "Glossaire", href: "/glossaire" },
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
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Agences & réseau</h3>
            <ul className="space-y-2">
              {[
                { label: "Agence Carignan (08)", href: "/agences/carignan-08" },
                { label: "Reims (51)", href: "/agences/reims-51" },
                { label: "Nancy (54)", href: "/agences/nancy-54" },
                { label: "Metz (57)", href: "/agences/metz-57" },
                { label: "Strasbourg (67)", href: "/agences/strasbourg-67" },
                { label: "Partout en France", href: "/agences/partout-en-france" },
                { label: "Rejoindre le réseau", href: "/reseau/devenir-courtier-independant" },
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
              <li className="pt-2">
                <Link href="/faq" className="text-sm text-white/60 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/avis" className="text-sm text-white/60 hover:text-primary transition-colors">
                  Avis clients
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-sm text-white/60 hover:text-primary transition-colors">
                  Notre équipe
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bloc conformité & YMYL */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden />
            <div className="text-xs text-white/70 leading-relaxed space-y-2">
              <p>
                <strong>Un crédit vous engage et doit être remboursé.</strong> Vérifiez vos capacités de remboursement avant de vous engager.
              </p>
              <p>
                <strong>Crédit Plus</strong> — SAS IM COURTAGE — SIREN 944 645 217 — Siège social à Carignan (08110, France).
                Intermédiaire en Opérations de Banque et en Services de Paiement (IOBSP) immatriculé à l'
                <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">ORIAS</a> sous le numéro <strong>25005566</strong>
                {" "}(vérifiable sur orias.fr). Activité réglementée et contrôlée par l'Autorité de Contrôle Prudentiel et de Résolution
                (ACPR, 4 Place de Budapest, CS 92459, 75436 Paris cedex 09).
              </p>
              <p className="text-white/50">
                En cas de litige non résolu par nos services, vous pouvez saisir le médiateur de la consommation compétent.
                Coordonnées disponibles sur la page <Link href="/mentions-legales" className="underline hover:text-primary">Mentions légales</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Crédit Plus — Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {[
              { label: "CGV", href: "/cgv" },
              { label: "CGU", href: "/cgu" },
              { label: "Mentions légales", href: "/mentions-legales" },
              { label: "Confidentialité", href: "/politique-de-confidentialite" },
              { label: "Plan du site", href: "/sitemap.xml" },
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
