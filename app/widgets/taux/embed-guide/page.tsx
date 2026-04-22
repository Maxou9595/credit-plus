import type { Metadata } from "next"
import Link from "next/link"
import { Copy, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Intégrer le widget taux Crédit Plus sur votre site",
  description: "Guide pratique pour intégrer le widget taux Crédit Plus sur votre blog ou site — iframe gratuit, CC-BY.",
  alternates: { canonical: "/widgets/taux/embed-guide" },
}

export default function EmbedGuidePage() {
  const iframeSnippet = `<iframe
  src="https://creditplus-france.com/widgets/taux"
  width="360"
  height="520"
  frameborder="0"
  scrolling="no"
  title="Taux crédit immobilier — baromètre Crédit Plus"
  loading="lazy"
  style="border:none;max-width:100%;"></iframe>`

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-16">
          <Breadcrumb items={[
            { name: "Presse", url: "/presse" },
            { name: "Widget taux", url: "/widgets/taux/embed-guide" },
          ]} />

          <header className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Widget gratuit</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Intégrer le widget taux Crédit Plus
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Affichez gratuitement les taux moyens du crédit immobilier mis à jour en temps réel sur votre blog, site agence, portail finance. Licence CC-BY : citation obligatoire + lien vers creditplus-france.com.
            </p>
          </header>

          <article className="prose prose-lg max-w-none prose-a:text-primary prose-headings:text-gray-900">
            <h2>Aperçu du widget</h2>
            <p>Voici l'aperçu du widget tel qu'il apparaîtra sur votre site :</p>
            <div className="not-prose my-6 flex justify-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <iframe
                src="/widgets/taux"
                width={360}
                height={520}
                frameBorder={0}
                scrolling="no"
                title="Taux crédit immobilier Crédit Plus"
                style={{ border: "none", maxWidth: "100%" }}
              />
            </div>

            <h2>Code iframe à copier</h2>
            <div className="not-prose my-6 p-4 rounded-xl bg-gray-900 text-gray-100 overflow-x-auto">
              <pre className="text-sm font-mono"><code>{iframeSnippet}</code></pre>
            </div>
            <p><Link href={`data:text/plain;charset=utf-8,${encodeURIComponent(iframeSnippet)}`} download="credit-plus-widget.html" className="text-primary underline">Télécharger le snippet</Link> ou copiez-collez directement dans votre HTML.</p>

            <h2>Dimensions recommandées</h2>
            <ul>
              <li><strong>Standard</strong> : 360 × 520 px</li>
              <li><strong>Compact</strong> : 320 × 480 px (ajustez le CSS interne)</li>
              <li><strong>Full-width</strong> : 100 % × 520 px (utile en sidebar responsive)</li>
            </ul>

            <h2>Mise à jour automatique</h2>
            <p>
              Le widget est alimenté par notre base de taux, mise à jour <strong>le 1er de chaque mois</strong> avec les données de l'Observatoire Crédit Logement / CSA et de nos 100+ banques partenaires. Aucune action de votre côté : le widget se met à jour tout seul.
            </p>

            <h2>Conditions d'utilisation</h2>
            <p>Licence Creative Commons CC-BY 4.0 avec les précisions suivantes :</p>
            <ul>
              <li><strong>Attribution obligatoire</strong> : le widget affiche automatiquement « creditplus-france.com » en pied. Ne pas masquer ce pied de page.</li>
              <li><strong>Lien do-follow requis</strong> : si vous citez les taux dans votre article au-delà du widget, ajoutez un lien <code>&lt;a href="https://creditplus-france.com" rel="noopener"&gt;</code>.</li>
              <li><strong>Modifications interdites</strong> : ne modifiez pas le CSS ou le JavaScript du widget. Si vous souhaitez un widget custom (couleurs, taille), contactez-nous.</li>
              <li><strong>Usage commercial autorisé</strong> — blogs monétisés, sites agences immobilières, portails finance, journaux en ligne.</li>
            </ul>

            <h2>Pourquoi intégrer ce widget ?</h2>
            <ul>
              <li><strong>Contenu frais gratuit</strong> — affichez des taux à jour sans avoir à les chercher vous-même chaque mois.</li>
              <li><strong>Gain en crédibilité</strong> — vos lecteurs voient des chiffres sourcés par un courtier IOBSP.</li>
              <li><strong>Aucune publicité</strong> — nous ne polluons pas votre site avec de la pub externe.</li>
              <li><strong>Mobile responsive</strong> — s'adapte à tous les écrans.</li>
            </ul>

            <h2>Vous êtes journaliste ou site partenaire ?</h2>
            <p>Contactez-nous pour des widgets personnalisés (calculateur de mensualités en iframe, baromètre Grand Est, simulateur PTZ) :</p>
            <ul>
              <li>Email : <a href="mailto:contact@creditplus-france.com?subject=Widget%20embed">contact@creditplus-france.com</a></li>
              <li>Page presse : <Link href="/presse">espace presse Crédit Plus</Link></li>
            </ul>
          </article>
        </section>
        <CTA />
      </main>
    </>
  )
}
