import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Primo-accédant 2026 : financer son premier achat",
  description: "Guide primo-accédant 2026 : PTZ, aides locales, apport, étapes. Préparez votre premier achat immobilier avec Crédit Plus.",
  alternates: { canonical: "/credit-immobilier/primo-accedant" },
}

const faqs = [
  { q: "Qui est primo-accédant en 2026 ?", a: "Une personne qui n'a pas été propriétaire de sa résidence principale au cours des 2 dernières années. Avoir eu un investissement locatif sans y résider n'empêche pas le statut primo-accédant." },
  { q: "Quelles sont les aides au primo-accédant ?", a: "PTZ (jusqu'à 40 % du projet), Action Logement (40 000 € à taux bonifié si employeur cotisant), prêts conventionnés, aides locales (certaines collectivités offrent 3-10 k€)." },
  { q: "Quel apport pour un primo-accédant ?", a: "Le minimum est 10 % du prix d'achat pour couvrir les frais de notaire. Sans apport, l'emprunt à 110 % est possible pour les profils CDI long avec revenus solides via la flexibilité HCSF." },
  { q: "Combien de temps pour obtenir un crédit primo-accédant ?", a: "6 à 10 semaines entre le dépôt du dossier et la signature chez le notaire. Plus long qu'un acquéreur expérimenté car la banque doit vérifier le statut primo-accédant (non-propriété depuis 2 ans) et les conditions PTZ." },
  { q: "Les banques prêtent-elles plus facilement aux primo-accédants ?", a: "Oui. La règle HCSF impose que 70 % de la flexibilité 20 % soit allouée aux primo-accédants. Les banques utilisent cette souplesse surtout pour ce profil (tolérance jusqu'à 37-40 % d'endettement)." },
]

export default function PrimoAccedantPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Crédit immobilier", url: "/credit-immobilier" },
        { name: "Primo-accédant", url: "/credit-immobilier/primo-accedant" },
      ]}
      eyebrow="Profil — Primo-accédant"
      h1="Primo-accédant 2026 : financer son premier achat immobilier"
      intro={<p>Le premier achat immobilier est un parcours jalonné d'étapes et de décisions. Voici comment structurer votre projet en 2026 : quel apport, quelles aides, quelles étapes, quelles banques.</p>}
      tldr={[
        <>Statut primo-accédant = pas propriétaire de sa RP <strong>depuis 2 ans</strong>.</>,
        <>Aides majeures : <strong>PTZ</strong> (jusqu'à 40 %), <strong>Action Logement</strong> (40 k€), aides locales.</>,
        <>Apport minimum recommandé : <strong>10 %</strong>. Sans apport possible pour les profils CDI long.</>,
        <><strong>70 % de la flexibilité HCSF 20 %</strong> est réservée aux primo-accédants.</>,
      ]}
      ctaPrimary={{ label: "Simuler mon dossier", href: "/credit-immobilier/simulation" }}
      ctaSecondary={{ label: "Étude de cas Reims", href: "/blog/etude-cas-primo-accedant-reims-25k-apport" }}
      faqs={faqs}
    >
      <h2>Les étapes du primo-accédant</h2>
      <ol>
        <li><strong>Bilan personnel</strong> : revenus, charges, capacité d'épargne, projet de vie 5-10 ans.</li>
        <li><strong>Constitution d'un apport</strong> : 12 à 24 mois d'épargne, PEL, donation familiale éventuelle.</li>
        <li><strong>Première simulation</strong> avec un courtier (Crédit Plus recommandé) pour chiffrer la capacité d'emprunt.</li>
        <li><strong>Obtention d'une attestation de finançabilité</strong> pour rassurer vendeur et agent immobilier.</li>
        <li><strong>Recherche du bien</strong> dans la fourchette de budget validée.</li>
        <li><strong>Signature du compromis</strong> avec condition suspensive de prêt (45-60 jours).</li>
        <li><strong>Dépôt du dossier complet</strong> — votre courtier présente à 3-5 banques en parallèle.</li>
        <li><strong>Accord de principe</strong> sous 10-15 jours, puis offre de prêt signée après 11 jours de réflexion.</li>
        <li><strong>Signature chez le notaire</strong> : versement des fonds, remise des clés.</li>
      </ol>

      <h2>Les aides cumulables</h2>
      <ul>
        <li><strong><Link href="/credit-immobilier/pret-taux-zero-ptz">PTZ</Link></strong> : financement 10-40 % du projet, sans intérêts ni frais.</li>
        <li><strong>Prêt Action Logement</strong> (1 % logement) : jusqu'à 40 000 € à taux bonifié. Condition : salarié d'une entreprise privée cotisante.</li>
        <li><strong>Prêts conventionnés</strong> : prêt à l'accession sociale (PAS), prêt conventionné (PC), ouvrent droit à APL accession.</li>
        <li><strong>Aides locales</strong> : certaines collectivités (Grand Est, Reims Métropole, Metz Métropole) proposent des prêts à taux bonifié 3-10 k€.</li>
        <li><strong>PEL / CEL</strong> : apport + prime d'État si ouvert avant fin 2017.</li>
      </ul>

      <h2>Les erreurs à ne pas commettre</h2>
      <ul>
        <li>Signer un compromis sans avoir fait chiffrer la capacité d'emprunt.</li>
        <li>Sous-estimer les frais annexes (notaire 7-8 % + garantie + assurance + déménagement + mobilier).</li>
        <li>Accepter le premier taux bancaire sans mise en concurrence.</li>
        <li>Choisir l'assurance groupe automatiquement sans comparer.</li>
        <li>Oublier de vérifier les aides locales (souvent méconnues mais cumulables avec le PTZ).</li>
      </ul>

      <h2>Outils et pages liées</h2>
      <ul>
        <li><Link href="/outils/calcul-capacite-emprunt">Calculateur de capacité d'emprunt</Link></li>
        <li><Link href="/outils/simulation-ptz">Simulateur PTZ</Link></li>
        <li><Link href="/outils/calcul-frais-de-notaire">Calculateur frais de notaire</Link></li>
        <li><Link href="/credit-immobilier/apport-personnel">Apport personnel</Link></li>
        <li><Link href="/blog/apport-personnel-credit-immobilier-2026">Guide apport détaillé (blog)</Link></li>
      </ul>
    </PillarSubPage>
  )
}
