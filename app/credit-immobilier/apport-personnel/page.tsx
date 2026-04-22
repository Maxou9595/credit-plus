import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Apport personnel 2026 : combien pour un crédit immobilier ?",
  description: "Règle des 10 %, profils sans apport, sources acceptées. Guide complet de l'apport personnel pour crédit immobilier.",
  alternates: { canonical: "/credit-immobilier/apport-personnel" },
}

const faqs = [
  { q: "Quel apport minimum pour un crédit immobilier en 2026 ?", a: "La règle des 10 % : les banques attendent au moins 10 % du prix d'achat pour couvrir les frais de notaire et de garantie. En-dessous, un emprunt à 110 % (la banque finance tout) est possible mais réservé aux profils solides via la flexibilité HCSF 20 %." },
  { q: "Peut-on emprunter sans aucun apport ?", a: "Oui, c'est l'emprunt à 110 %. Conditions typiques : CDI depuis ≥ 3 ans, revenus ≥ 4 500 €/mois individuels ou 6 000 € en couple, reste-à-vivre ≥ 2 000 €/mois après nouvelle mensualité, aucun crédit conso en cours." },
  { q: "L'apport de 20 % fait-il vraiment baisser le taux ?", a: "Oui. Passer de 10 à 20 % d'apport gagne typiquement 15 à 25 points de base. Sur un prêt de 250 000 € sur 20 ans, cela représente une économie totale de 8 000 à 13 000 €." },
  { q: "Quelles sources d'apport les banques acceptent ?", a: "Épargne personnelle (livrets, assurance-vie), PEL/CEL, donation familiale formalisée, participation/intéressement débloqué, Action Logement (1 % logement), déblocage PEE/PERCO pour RP. Cryptos, crédits conso, revenus non versés sont refusés." },
  { q: "Faut-il apporter plus de 30 % ?", a: "Non, le gain marginal devient faible au-delà de 30 % (5-10 pb). L'argent immobilisé en apport ne rapporte plus autant que s'il était placé ailleurs. Gardez une épargne de précaution plutôt que maximiser l'apport." },
]

export default function ApportPersonnelPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "Apport personnel", url: "/credit-immobilier/apport-personnel" },
      ]}
      eyebrow="Pilier crédit immobilier"
      h1="Apport personnel 2026 : règle des 10 %, alternatives, optimisation"
      intro={<p>L'apport personnel conditionne votre accès au crédit immobilier et le taux négocié. Voici comment l'optimiser et quelles alternatives existent quand l'apport fait défaut.</p>}
      tldr={[
        <><strong>Règle empirique</strong> : 10 % d'apport pour couvrir les frais de notaire et la garantie.</>,
        <><strong>Optimum économique</strong> : 20 % d'apport → ≈ 20 pb de taux en moins.</>,
        <><strong>Emprunt à 110 %</strong> possible pour profils solides via flexibilité HCSF.</>,
        <>Au-delà de <strong>30 %</strong>, gain marginal faible → ne pas sacrifier sa liquidité.</>,
      ]}
      ctaPrimary={{ label: "Simuler mon crédit", href: "/credit-immobilier/simulation" }}
      faqs={faqs}
    >
      <h2>À quoi sert l'apport</h2>
      <p>L'apport personnel couvre les <strong>frais annexes</strong> que la banque ne finance pas volontiers :</p>
      <ul>
        <li><strong>Frais de notaire</strong> : 7-8 % (ancien), 2-3 % (neuf).</li>
        <li><strong>Garantie</strong> : 0,8-1,5 % (caution) ou 1-2 % (hypothèque).</li>
        <li><strong>Frais de dossier bancaire</strong> : 500-1 500 €.</li>
      </ul>
      <p>Sur 250 000 € dans l'ancien, ces frais atteignent 22 à 25 000 €, soit ≈ 9-10 % du prix. C'est l'origine de la règle des 10 %.</p>

      <h2>Emprunter sans apport : profils éligibles</h2>
      <p>L'emprunt à 110 % (la banque finance bien + frais) n'est pas refusé par principe mais il demande un profil solide :</p>
      <ul>
        <li>CDI depuis au moins 3 ans dans l'entreprise.</li>
        <li>Revenus individuels ≥ 4 500 € nets (ou couple ≥ 6 000 €).</li>
        <li>Reste-à-vivre après nouvelle mensualité ≥ 2 000 €.</li>
        <li>Absence de crédit conso en cours.</li>
        <li>Historique bancaire sans découvert récent.</li>
      </ul>
      <p>Un <Link href="/courtier-immobilier">courtier IOBSP</Link> identifie les banques utilisant leur flexibilité HCSF 20 % sur ce type de dossier, ce qui augmente les chances d'acceptation.</p>

      <h2>Sources d'apport acceptées</h2>
      <ul>
        <li><strong>Épargne personnelle</strong> : livret A/LDDS/LEP, compte courant, épargne logement, assurance-vie liquide.</li>
        <li><strong>Donation familiale</strong> : formalisée par acte notarié ou déclaration au fisc.</li>
        <li><strong>PEL / CEL</strong> : apport + droit à prêt aidé.</li>
        <li><strong>Participation / intéressement</strong> : débloqué à la signature.</li>
        <li><strong>PEE / PERCO</strong> : déblocage anticipé pour achat résidence principale (motif légal).</li>
        <li><strong>Action Logement</strong> : jusqu'à 40 000 € à taux bonifié.</li>
      </ul>

      <h2>Stratégies pour renforcer l'apport</h2>
      <ol>
        <li>Ouvrir un PEL 4 ans avant le projet (droit à prêt + apport).</li>
        <li>Solliciter Action Logement auprès de l'employeur.</li>
        <li>Anticiper une donation familiale (règles de franchise fiscale : 100 k€ parent → enfant tous les 15 ans).</li>
        <li>Épargner 1 000 €/mois pendant 24 mois = 24 000 € d'apport supplémentaire.</li>
      </ol>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/credit-immobilier/primo-accedant">Primo-accédant : guide complet</Link></li>
        <li><Link href="/credit-immobilier/pret-taux-zero-ptz">PTZ 2026</Link></li>
        <li><Link href="/credit-immobilier/capacite-emprunt">Capacité d'emprunt</Link></li>
        <li><Link href="/outils/calcul-frais-de-notaire">Calcul des frais de notaire</Link></li>
      </ul>
    </PillarSubPage>
  )
}
