import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Middleware — Refonte SEO & GEO (phase 2 implémentation)
 *
 * Rôle :
 *   1. Applique les redirections 301 de la migration documentée dans
 *      docs/refonte-seo/phase-2-arborescence.md (section "Mapping migration").
 *   2. Évite la perte de PageRank sur les anciennes URLs référencées en SERP
 *      et dans les backlinks éventuels.
 *
 * Règle d'or : toute ancienne URL ayant vu le moindre trafic organique
 * doit renvoyer 301 vers sa cible canonique. Les seules exceptions sont
 * les routes API et les assets statiques (gérés par le matcher plus bas).
 */

type Redirect = { from: string; to: string; type: "prefix" | "exact" }

const REDIRECTS: Redirect[] = [
  // ─── Services → piliers SEO ─────────────────────────────────────────
  { from: "/services/credit-immobilier", to: "/credit-immobilier", type: "exact" },
  { from: "/services/investissement-locatif", to: "/investissement-locatif", type: "exact" },
  { from: "/services/rachat-de-credit", to: "/rachat-de-credit", type: "exact" },
  { from: "/services/assurance-emprunteur", to: "/assurance-emprunteur", type: "exact" },

  // ─── Simulation / demande ───────────────────────────────────────────
  { from: "/demande-credit", to: "/credit-immobilier/simulation", type: "exact" },

  // ─── Témoignages → avis ─────────────────────────────────────────────
  { from: "/temoignages", to: "/avis", type: "exact" },

  // ─── Silo B2B isolé (recrutement courtiers) ─────────────────────────
  { from: "/ville", to: "/reseau/villes", type: "prefix" },
  { from: "/devenir-courtier-independant", to: "/reseau/devenir-courtier-independant", type: "exact" },

  // ─── Agences : ajout du code département dans le slug ───────────────
  { from: "/agences/carignan", to: "/agences/carignan-08", type: "exact" },
  { from: "/agences/dax", to: "/agences/dax-40", type: "exact" },
]

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  for (const r of REDIRECTS) {
    if (r.type === "exact" && pathname === r.from) {
      const url = req.nextUrl.clone()
      url.pathname = r.to
      return NextResponse.redirect(url, 301)
    }
    if (r.type === "prefix" && pathname.startsWith(`${r.from}/`)) {
      const url = req.nextUrl.clone()
      url.pathname = `${r.to}${pathname.slice(r.from.length)}`
      return NextResponse.redirect(url, 301)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Tout sauf /api, _next/static, _next/image, les fichiers statiques
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|opengraph-image|twitter-image|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|txt|xml|json)).*)",
  ],
}
