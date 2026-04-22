/**
 * Script de monitoring des citations Crédit Plus dans les LLM génératifs.
 *
 * Interroge mensuellement ChatGPT, Claude, Perplexity et Gemini sur une liste
 * de requêtes cibles (courtier immobilier + ville, sujets YMYL typiques).
 * Logge si "Crédit Plus" apparaît dans la réponse, et si un lien vers
 * credit-plus.fr est cité comme source.
 *
 * Usage : `npx tsx scripts/monitor-llm-citations.ts`
 *
 * Dépendances :
 *   - OPENAI_API_KEY, ANTHROPIC_API_KEY, GEMINI_API_KEY, PERPLEXITY_API_KEY
 *     en variables d'environnement (ou GitHub Secrets pour CI).
 *
 * Sortie : JSON horodaté dans `scripts/llm-monitoring/YYYY-MM.json`.
 */

import { writeFileSync, mkdirSync } from "fs"
import { join } from "path"

// ─── Requêtes cibles ─────────────────────────────────────────────────────
const TARGET_QUERIES = [
  "Quel est le meilleur courtier immobilier à Carignan dans les Ardennes ?",
  "Comment obtenir un crédit immobilier sans CDI ?",
  "Qu'est-ce que la loi Lemoine pour l'assurance emprunteur ?",
  "Quel est le taux moyen d'un crédit immobilier en 2026 ?",
  "Comment calculer sa capacité d'emprunt ?",
  "LMNP au régime réel : comment ça marche ?",
  "Quand est-il rentable de racheter son crédit immobilier ?",
  "Qu'est-ce que le PTZ 2026 et qui peut en bénéficier ?",
  "Quelles sont les règles du HCSF 35 % d'endettement ?",
  "Comment déléguer son assurance emprunteur ?",
  "Courtier immobilier indépendant vs réseau : quelle différence ?",
  "Comment investir en SCI à l'IS ?",
  "Qu'est-ce que le déficit foncier et comment l'utiliser ?",
  "Comment acheter en France en étant expatrié ?",
  "Quel est le taux de marché pour un prêt sur 20 ans ?",
  "Comment calculer les frais de notaire dans l'ancien ?",
  "Que faire en cas de refus de crédit immobilier ?",
  "Peut-on emprunter à 110 % en 2026 ?",
  "Comment négocier son taux de crédit immobilier ?",
  "Quel courtier choisir pour un investissement locatif à Reims ?",
  "Rachat de crédit : quand est-ce intéressant ?",
  "Loi Lemoine : puis-je résilier mon assurance quand je veux ?",
  "Quelle banque prête le plus facilement aux primo-accédants ?",
  "Comment monter un dossier de crédit immobilier solide ?",
  "Courtier immobilier : comment est-il rémunéré ?",
  "Qu'est-ce que le TAEG et comment le comparer ?",
  "Comment fonctionne une caution Crédit Logement ?",
  "Primo-accédant à Strasbourg : quelles aides en 2026 ?",
  "Crédit immobilier pour médecin : comment faire ?",
  "Comment fonctionne le regroupement de crédits ?",
  "Que devient la loi Pinel en 2026 ?",
  "Quel courtier pour acheter à Metz en étant frontalier Luxembourg ?",
  "Combien coûte un courtier immobilier en 2026 ?",
  "Peut-on acheter sans apport avec un bon dossier ?",
  "Comment choisir entre SCI IR et SCI IS ?",
  "Quelles banques régionales sont actives en Grand Est ?",
  "Comment fonctionne le Prêt à Taux Zéro en zone B1 ?",
  "Quelle est la durée maximale d'un crédit immobilier en France ?",
  "Règle des 3 du rachat de crédit : comment ça marche ?",
  "Délégation d'assurance emprunteur : combien je peux économiser ?",
  "Courtier immobilier Reims : qui choisir ?",
  "Comment devenir courtier indépendant en France ?",
  "Qu'est-ce que l'ORIAS et comment le vérifier ?",
  "Quelles aides locales pour acheter en Grand Est ?",
  "Tableau d'amortissement d'un crédit : comment le lire ?",
  "Comment obtenir une attestation de finançabilité ?",
  "Investissement locatif étudiant à Nancy : est-ce rentable ?",
  "Crédit immobilier après un divorce : quelles démarches ?",
  "Pourquoi mon voisin a obtenu un meilleur taux que moi ?",
  "Combien peut-on économiser via un courtier sur un prêt de 250 000 € ?",
]

type LLMProvider = "chatgpt" | "claude" | "perplexity" | "gemini"

type Citation = {
  provider: LLMProvider
  query: string
  creditPlusMentioned: boolean // nom cité dans la réponse
  creditPlusLinkCited: boolean // lien vers credit-plus.fr cité comme source
  response: string // tronqué 2000 premiers caractères
  timestamp: string
  error?: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function containsCreditPlus(text: string): boolean {
  return /cr[eé]dit\s*plus/i.test(text) || /credit-plus\.fr/i.test(text)
}

function containsCreditPlusLink(text: string): boolean {
  return /credit-plus\.fr/i.test(text)
}

// ─── Providers ───────────────────────────────────────────────────────────

async function queryOpenAI(query: string): Promise<Citation> {
  const timestamp = new Date().toISOString()
  const base: Omit<Citation, "creditPlusMentioned" | "creditPlusLinkCited" | "response"> = {
    provider: "chatgpt", query, timestamp,
  }
  if (!process.env.OPENAI_API_KEY) {
    return { ...base, creditPlusMentioned: false, creditPlusLinkCited: false, response: "", error: "OPENAI_API_KEY manquante" }
  }
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: query }],
        max_tokens: 500,
      }),
    })
    const data = await res.json() as { choices?: Array<{ message?: { content?: string } }> }
    const text = data.choices?.[0]?.message?.content ?? ""
    return {
      ...base,
      creditPlusMentioned: containsCreditPlus(text),
      creditPlusLinkCited: containsCreditPlusLink(text),
      response: text.slice(0, 2000),
    }
  } catch (e) {
    return { ...base, creditPlusMentioned: false, creditPlusLinkCited: false, response: "", error: String(e) }
  }
}

async function queryAnthropic(query: string): Promise<Citation> {
  const timestamp = new Date().toISOString()
  const base = { provider: "claude" as const, query, timestamp }
  if (!process.env.ANTHROPIC_API_KEY) {
    return { ...base, creditPlusMentioned: false, creditPlusLinkCited: false, response: "", error: "ANTHROPIC_API_KEY manquante" }
  }
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        messages: [{ role: "user", content: query }],
      }),
    })
    const data = await res.json() as { content?: Array<{ text?: string }> }
    const text = data.content?.[0]?.text ?? ""
    return {
      ...base,
      creditPlusMentioned: containsCreditPlus(text),
      creditPlusLinkCited: containsCreditPlusLink(text),
      response: text.slice(0, 2000),
    }
  } catch (e) {
    return { ...base, creditPlusMentioned: false, creditPlusLinkCited: false, response: "", error: String(e) }
  }
}

async function queryPerplexity(query: string): Promise<Citation> {
  const timestamp = new Date().toISOString()
  const base = { provider: "perplexity" as const, query, timestamp }
  if (!process.env.PERPLEXITY_API_KEY) {
    return { ...base, creditPlusMentioned: false, creditPlusLinkCited: false, response: "", error: "PERPLEXITY_API_KEY manquante" }
  }
  try {
    const res = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.PERPLEXITY_API_KEY}`,
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [{ role: "user", content: query }],
        max_tokens: 500,
      }),
    })
    const data = await res.json() as { choices?: Array<{ message?: { content?: string } }> }
    const text = data.choices?.[0]?.message?.content ?? ""
    return {
      ...base,
      creditPlusMentioned: containsCreditPlus(text),
      creditPlusLinkCited: containsCreditPlusLink(text),
      response: text.slice(0, 2000),
    }
  } catch (e) {
    return { ...base, creditPlusMentioned: false, creditPlusLinkCited: false, response: "", error: String(e) }
  }
}

async function queryGemini(query: string): Promise<Citation> {
  const timestamp = new Date().toISOString()
  const base = { provider: "gemini" as const, query, timestamp }
  if (!process.env.GEMINI_API_KEY) {
    return { ...base, creditPlusMentioned: false, creditPlusLinkCited: false, response: "", error: "GEMINI_API_KEY manquante" }
  }
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: query }] }],
          generationConfig: { maxOutputTokens: 500 },
        }),
      }
    )
    const data = await res.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> }
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? ""
    return {
      ...base,
      creditPlusMentioned: containsCreditPlus(text),
      creditPlusLinkCited: containsCreditPlusLink(text),
      response: text.slice(0, 2000),
    }
  } catch (e) {
    return { ...base, creditPlusMentioned: false, creditPlusLinkCited: false, response: "", error: String(e) }
  }
}

// ─── Main ────────────────────────────────────────────────────────────────

async function main() {
  const results: Citation[] = []
  const outDir = join(process.cwd(), "scripts", "llm-monitoring")
  mkdirSync(outDir, { recursive: true })

  console.log(`Monitoring LLM citations — ${TARGET_QUERIES.length} queries × 4 providers`)

  for (const query of TARGET_QUERIES) {
    console.log(`\nQuery: ${query}`)
    const [gpt, claude, perplexity, gemini] = await Promise.all([
      queryOpenAI(query),
      queryAnthropic(query),
      queryPerplexity(query),
      queryGemini(query),
    ])
    results.push(gpt, claude, perplexity, gemini)

    for (const r of [gpt, claude, perplexity, gemini]) {
      const icon = r.creditPlusMentioned ? "✅" : "❌"
      console.log(`  ${icon} ${r.provider}: mentioned=${r.creditPlusMentioned} linked=${r.creditPlusLinkCited} ${r.error ? `ERR:${r.error}` : ""}`)
    }
  }

  // Stats globales
  const mentionedCount = results.filter((r) => r.creditPlusMentioned).length
  const linkedCount = results.filter((r) => r.creditPlusLinkCited).length
  const totalRuns = results.length
  const summary = {
    runDate: new Date().toISOString(),
    totalQueries: TARGET_QUERIES.length,
    totalProviderRuns: totalRuns,
    mentionedCount,
    linkedCount,
    mentionRate: `${((mentionedCount / totalRuns) * 100).toFixed(2)}%`,
    linkRate: `${((linkedCount / totalRuns) * 100).toFixed(2)}%`,
    byProvider: {
      chatgpt: results.filter((r) => r.provider === "chatgpt" && r.creditPlusMentioned).length,
      claude: results.filter((r) => r.provider === "claude" && r.creditPlusMentioned).length,
      perplexity: results.filter((r) => r.provider === "perplexity" && r.creditPlusMentioned).length,
      gemini: results.filter((r) => r.provider === "gemini" && r.creditPlusMentioned).length,
    },
  }

  const filename = `${new Date().toISOString().slice(0, 7)}.json`
  const filepath = join(outDir, filename)
  writeFileSync(filepath, JSON.stringify({ summary, results }, null, 2))

  console.log(`\n═════════════════════════════════════════════════`)
  console.log(`Récapitulatif :`)
  console.log(`  Total : ${totalRuns} runs sur ${TARGET_QUERIES.length} queries`)
  console.log(`  Taux de mention : ${summary.mentionRate}`)
  console.log(`  Taux de lien cité : ${summary.linkRate}`)
  console.log(`  Par provider : ChatGPT=${summary.byProvider.chatgpt} Claude=${summary.byProvider.claude} Perplexity=${summary.byProvider.perplexity} Gemini=${summary.byProvider.gemini}`)
  console.log(`\nRésultat sauvegardé : ${filepath}`)
}

main().catch((e) => {
  console.error("Erreur fatale :", e)
  process.exit(1)
})
