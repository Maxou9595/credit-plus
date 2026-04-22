/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO refonte-seo : ces deux flags masquent la dette TS/ESLint héritée du scaffolding v0.
  // À désactiver progressivement (`pnpm lint` + `pnpm tsc --noEmit`) pour traiter les warnings.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // TODO refonte-seo : `unoptimized: true` désactive AVIF/WebP/responsive/lazy,
  // ce qui plombe le LCP mobile (images lourdes comme credit-plus-og.png = 1 Mo).
  // Plan de migration :
  //   1. Auditer toutes les <img> et les remplacer par next/image avec width/height/sizes.
  //   2. Passer `unoptimized: false` (= valeur par défaut).
  //   3. Ajouter `formats: ['image/avif', 'image/webp']` pour forcer la livraison moderne.
  //   4. Définir `deviceSizes` et `imageSizes` si besoin de points de rupture custom.
  // Voir : docs/refonte-seo/phase-1-audit-technique.md #10.
  images: {
    unoptimized: true,
    // formats: ['image/avif', 'image/webp'],
  },

  serverExternalPackages: ["resend"],

  // En-têtes sécurité recommandés (Lighthouse Best Practices + SecurityHeaders.io).
  async headers() {
    return [
      {
        // Règle par défaut — toutes les pages sauf /widgets/*
        source: "/((?!widgets).*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
        ],
      },
      {
        // /widgets/* : autorise l'embedding cross-origin (iframe backlink asset)
        source: "/widgets/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ]
  },
}

export default nextConfig
