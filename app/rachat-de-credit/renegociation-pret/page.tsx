import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Renégociation de prêt immobilier 2026 : guide pratique",
  description: "Renégocier votre prêt immobilier avec votre banque : conditions, écart de taux, frais, exemple chiffré.",
  alternates: { canonical: "/rachat-de-credit/renegociation-pret" },
}

const faqs = [
  { q: "Renégociation ou rachat externe : quelle différence ?", a: "Renégociation : avenant signé chez votre banque actuelle, sans IRA ni nouvelle garantie. Moins cher mais taux souvent moins bas. Rachat externe : nouveau crédit chez une autre banque avec frais complets mais accès au meilleur taux du marché." },
  { q: "Quel écart de taux justifie une renégociation interne ?", a: "0,3 à 0,4 point suffisent généralement car il n'y a pas d'IRA ni de frais de nouvelle garantie. Les seuls frais sont ceux de dossier (200-500 €) et éventuellement le changement d'assurance." },
  { q: "Ma banque est-elle obligée de renégocier ?", a: "Non. La renégociation est une démarche commerciale, pas un droit. La banque accepte si elle préfère vous garder à un taux légèrement moins bon plutôt que de vous voir partir chez un concurrent. Une lettre documentée avec offre concurrente aide considérablement." },
  { q: "Combien de temps prend une renégociation ?", a: "4 à 8 semaines en moyenne : analyse de la demande par la banque, validation du comité crédit, édition de l'avenant, signature, mise en place. Plus rapide qu'un rachat externe (6-10 semaines) car pas de nouvelle garantie ni d'acte notarié." },
  { q: "Peut-on aussi renégocier la durée et l'assurance ?", a: "Oui. Un avenant peut modifier le taux, la durée et/ou l'assurance simultanément. L'assurance peut également être changée indépendamment (loi Lemoine), sans passer par un avenant." },
]

export default function RenegociationPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Rachat de crédit", url: "/rachat-de-credit" },
        { name: "Renégociation", url: "/rachat-de-credit/renegociation-pret" },
      ]}
      eyebrow="Pilier rachat de crédit"
      h1="Renégociation de prêt immobilier : méthode et exemple"
      intro={<p>La renégociation interne (avec votre banque actuelle) est la voie la plus simple et la moins coûteuse pour baisser le taux de votre prêt immobilier. Quand l'utiliser, comment la conduire, combien espérer gagner.</p>}
      tldr={[
        <>Pas d'IRA, pas de frais de nouvelle garantie. Seulement des frais de dossier (<strong>200-500 €</strong>).</>,
        <>Écart de taux minimum utile : <strong>0,3-0,4 point</strong>.</>,
        <>Délai : <strong>4 à 8 semaines</strong>.</>,
        <>Taux souvent <strong>moins bon qu'un rachat externe</strong> (la banque ne donne pas son meilleur taux à un client captif).</>,
      ]}
      ctaPrimary={{ label: "Simuler mon rachat", href: "/outils/calcul-rachat-credit" }}
      faqs={faqs}
    >
      <h2>Quand renégocier vaut mieux que racheter</h2>
      <ul>
        <li><strong>CRD &lt; 70 000 €</strong> : les frais d'un rachat externe ne s'amortissent pas. La renégociation, sans frais lourds, reste rentable.</li>
        <li><strong>Durée restante &lt; 7 ans</strong> : idem, pas assez d'horizon pour amortir un rachat externe.</li>
        <li><strong>Écart modeste (0,3-0,6 point)</strong> : suffisant pour renégocier, insuffisant pour racheter.</li>
        <li><strong>Relation bancaire ancienne et bonne</strong> : la banque a intérêt à vous garder.</li>
      </ul>

      <h2>Comment conduire la renégociation</h2>
      <ol>
        <li><strong>Obtenir une offre concurrente</strong> chiffrée. Un courtier vous produit une simulation sur 3-5 banques, ce qui vous donne un levier de négociation crédible.</li>
        <li><strong>Écrire à votre banque</strong> avec la simulation concurrente et une demande formelle de réajustement de taux.</li>
        <li><strong>Attendre la réponse</strong> sous 2-3 semaines. Si proposition insuffisante, relancer en mentionnant une démarche de rachat externe (pas de bluff — il faut être prêt à aller jusqu'au bout).</li>
        <li><strong>Négocier l'assurance simultanément</strong> — la banque peut accepter de baisser la prime pour sécuriser la relation.</li>
        <li><strong>Signer l'avenant</strong> qui entérine le nouveau taux et/ou la nouvelle durée.</li>
      </ol>

      <h2>Exemple chiffré</h2>
      <p>Prêt 2022 à 1,75 %, CRD 180 000 €, 22 ans restants. Marché 2026 : rachat externe accessible à 3,15 %.</p>
      <p>Ici, le marché est DÉFAVORABLE à un rachat (le taux actuel est meilleur que le marché). La renégociation n'apporte rien.</p>
      <hr />
      <p>Prêt 2023 à 4,30 %, CRD 215 000 €, 23 ans restants. Marché 2026 : 3,15 % externe.</p>
      <ul>
        <li>Rachat externe à 3,15 % : économie nette ≈ 35 000 € après frais.</li>
        <li>Renégociation interne : la banque propose typiquement 3,70 % (moins compétitive qu'un externe). Économie ≈ 18 000 €.</li>
        <li><strong>Choix rationnel</strong> : rachat externe plus rentable dans ce cas. La renégociation n'est pertinente que si on veut éviter les frais ou si les 3 règles du rachat ne sont pas remplies.</li>
      </ul>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/rachat-de-credit">Guide rachat de crédit</Link></li>
        <li><Link href="/rachat-de-credit/regroupement-credits">Regroupement de crédits</Link></li>
        <li><Link href="/outils/calcul-rachat-credit">Calculateur rachat</Link></li>
        <li><Link href="/blog/quand-racheter-son-credit-immobilier-2026">Quand racheter : la règle des 3 (blog)</Link></li>
      </ul>
    </PillarSubPage>
  )
}
