import { currentMarketRates } from "@/lib/market-rates"

/**
 * Widget iframe-embeddable des taux de crédit immobilier.
 *
 * URL publique : https://credit-plus.fr/widgets/taux
 * Ce fichier utilise le pattern Next.js route handler (route.ts) au lieu
 * d'une page.tsx classique pour BYPASSER le layout racine (Navigation, Footer,
 * fonts Google) et servir un HTML totalement autonome, iframe-friendly.
 *
 * Licence éditoriale : CC-BY, attribution + lien credit-plus.fr obligatoires.
 */

export const dynamic = "force-static"
export const revalidate = 3600 // regénération toutes les heures si besoin

export async function GET() {
  const now = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })

  const rows = currentMarketRates.byDuration
    .map((r) => {
      const changeColor = r.change1m != null && r.change1m < 0 ? "#059669" : "#6b7280"
      const changeText = r.change1m != null ? `${r.change1m > 0 ? "+" : ""}${r.change1m} pb` : "—"
      return `
        <div class="row">
          <div>
            <div class="duration">Sur ${r.duration}</div>
            <div class="sub">Bons dossiers : ${r.averageGood} %</div>
          </div>
          <div class="right">
            <div class="rate">${r.averageAll} %</div>
            <div class="change" style="color:${changeColor}">${changeText}</div>
          </div>
        </div>`
    })
    .join("")

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Taux crédit immobilier — ${currentMarketRates.periodLabel}</title>
  <meta name="robots" content="noindex,nofollow">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { background: transparent; font-family: system-ui, -apple-system, sans-serif; color: #111827; }
    body { display: flex; justify-content: center; padding: 8px; }
    .widget {
      width: 340px; border-radius: 16px; overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      border: 1px solid #e5e7eb; background: white;
    }
    .header {
      background: linear-gradient(135deg, #1a1a1a 0%, #292929 100%);
      color: white; padding: 16px 20px;
    }
    .eyebrow { font-size: 11px; opacity: 0.7; letter-spacing: 0.05em; text-transform: uppercase; }
    .title { font-size: 18px; font-weight: 700; margin-top: 4px; }
    .period { font-size: 12px; opacity: 0.7; margin-top: 2px; }
    .rows { padding: 18px; }
    .row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
    .row:last-child { border-bottom: none; }
    .duration { font-size: 13px; color: #6b7280; }
    .sub { font-size: 10px; color: #9ca3af; margin-top: 2px; }
    .right { text-align: right; }
    .rate { font-size: 22px; font-weight: 700; color: #ea580c; }
    .change { font-size: 10px; }
    .footer {
      background: #f9fafb; padding: 12px 18px;
      font-size: 10px; color: #6b7280;
      border-top: 1px solid #e5e7eb;
    }
    .footer a { color: #ea580c; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="widget" role="region" aria-label="Baromètre des taux de crédit immobilier Crédit Plus">
    <div class="header">
      <div class="eyebrow">Baromètre Crédit Plus</div>
      <div class="title">Taux du crédit immobilier</div>
      <div class="period">${currentMarketRates.periodLabel}</div>
    </div>
    <div class="rows">${rows}</div>
    <div class="footer">
      <div>Source : ${currentMarketRates.sourceName} + Crédit Plus</div>
      <div style="margin-top: 4px;">
        Mis à jour le ${now} — <a href="https://credit-plus.fr" target="_blank" rel="noopener">credit-plus.fr</a>
      </div>
    </div>
  </div>
</body>
</html>`

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // CORS : autorise l'embedding depuis n'importe quel site
      "X-Frame-Options": "ALLOWALL",
      "Content-Security-Policy": "frame-ancestors *",
      // Cache 1h côté CDN, 10 min côté client
      "Cache-Control": "public, max-age=600, s-maxage=3600",
    },
  })
}
