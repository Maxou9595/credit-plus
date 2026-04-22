import type { Metadata } from "next"
import Link from "next/link"
import { PillarSubPage } from "@/components/pillar-subpage"

export const metadata: Metadata = {
  title: "Loi Pinel en 2026 : est-ce encore possible ?",
  description: "La loi Pinel a pris fin le 31 décembre 2024. Quelles alternatives en 2026 : LLi, Denormandie, déficit foncier, LMNP.",
  alternates: { canonical: "/investissement-locatif/pinel" },
}

const faqs = [
  { q: "La loi Pinel existe-t-elle encore en 2026 ?", a: "Non. Le dispositif Pinel a pris fin au 31 décembre 2024. Les dernières réservations éligibles ont été enregistrées fin 2024. Aucune nouvelle opération Pinel n'est possible en 2026." },
  { q: "Que remplace le Pinel en 2026 ?", a: "Plusieurs dispositifs prennent le relais : LLi (Logement Locatif Intermédiaire / Loc'Avantages), Denormandie (ancien rénové dans 300 villes), déficit foncier, LMNP au régime réel, statuts professionnels (LMP, SCI IS)." },
  { q: "Les biens Pinel souscrits avant 2025 sont-ils maintenus ?", a: "Oui. Les investisseurs qui ont signé avant le 31 décembre 2024 conservent l'avantage fiscal Pinel (réduction d'impôt) sur toute la durée de leur engagement (6, 9 ou 12 ans)." },
  { q: "LLi et Loc'Avantages, c'est quoi ?", a: "LLi (Logement Locatif Intermédiaire) : réduction d'impôt pour propriétaires louant à des ménages sous plafonds de ressources. Trois niveaux : Loc1 (intermédiaire, –15 %), Loc2 (social, –35 %), Loc3 (très social, –65 %). Remplace partiellement le Pinel." },
  { q: "Denormandie est-il intéressant ?", a: "Oui dans certains cas. Réduction d'impôt 12-21 % étalée sur 6-12 ans pour l'achat d'un bien ancien + travaux de rénovation (≥ 25 % du coût total) dans l'une des 300 villes éligibles. Combine valeur patrimoniale + défiscalisation." },
]

export default function PinelPage() {
  return (
    <PillarSubPage
      breadcrumb={[
        { name: "Investissement locatif", url: "/investissement-locatif" },
        { name: "Loi Pinel", url: "/investissement-locatif/pinel" },
      ]}
      eyebrow="Pilier investissement locatif"
      h1="Loi Pinel en 2026 : dispositif éteint, alternatives"
      intro={<p>Le dispositif Pinel, emblème de l'investissement locatif défiscalisé pendant une décennie, a pris fin au 31 décembre 2024. Pour investir en 2026, il faut se tourner vers les nouveaux dispositifs.</p>}
      tldr={[
        <>Pinel <strong>éteint</strong> depuis le 31 décembre 2024. Aucune nouvelle opération possible.</>,
        <>Alternatives 2026 : <strong>LLi / Loc'Avantages</strong>, <strong>Denormandie</strong>, <strong>déficit foncier</strong>, <strong>LMNP réel</strong>.</>,
        <>Les investisseurs Pinel d'avant 2025 <strong>conservent leur avantage fiscal</strong> jusqu'à la fin de leur engagement.</>,
        <>Pour défiscaliser massivement en 2026 : viser <strong>LLi Loc2/Loc3</strong> ou <strong>déficit foncier 21 400 €</strong>.</>,
      ]}
      ctaPrimary={{ label: "Simuler mon investissement", href: "/credit-immobilier/simulation" }}
      faqs={faqs}
    >
      <h2>Pourquoi le Pinel a pris fin</h2>
      <p>
        Le dispositif Pinel, créé en 2014 en remplacement du Duflot, visait à stimuler la construction de logements neufs dans les zones tendues en offrant aux investisseurs une réduction d'impôt. Après plusieurs évaluations critiques (coût budgétaire élevé pour un effet modeste sur l'offre locative), le gouvernement n'a pas renouvelé le dispositif au-delà du 31 décembre 2024.
      </p>

      <h2>Les alternatives 2026</h2>

      <h3>1. LLi / Loc'Avantages</h3>
      <p>Réduction d'impôt pour propriétaires louant à des ménages sous plafonds de ressources :</p>
      <ul>
        <li><strong>Loc1</strong> (intermédiaire) : –15 % d'impôt sur les loyers.</li>
        <li><strong>Loc2</strong> (social) : –35 %.</li>
        <li><strong>Loc3</strong> (très social) : –65 %.</li>
      </ul>
      <p>Engagement 6 ans minimum, loyers plafonnés, locataires sous plafonds de ressources.</p>

      <h3>2. Denormandie</h3>
      <p>Réduction d'impôt 12-21 % étalée sur 6-12 ans pour l'achat d'un bien ancien + travaux de rénovation (≥ 25 % du coût total) dans l'une des <strong>300 villes éligibles</strong> (centres-villes en revitalisation : Charleville-Mézières, Sedan, Reims, Châlons-en-Champagne, Metz, Nancy, etc.).</p>

      <h3>3. Déficit foncier</h3>
      <p>Imputation de 10 700 € de travaux/an (21 400 € pour travaux énergétiques jusqu'en 2027) sur le revenu global. Très puissant pour les TMI élevés. Voir notre <Link href="/investissement-locatif/deficit-foncier">page dédiée</Link>.</p>

      <h3>4. LMNP au régime réel</h3>
      <p>Location meublée : amortissement comptable (3-4 %/an) neutralise l'impôt pendant 10-20 ans. Pas à proprement parler un dispositif fiscal mais le régime le plus avantageux pour l'investissement meublé. Voir notre <Link href="/investissement-locatif/lmnp">guide LMNP</Link>.</p>

      <h2>Pour les investisseurs en Pinel actif</h2>
      <p>Les engagements Pinel souscrits avant 2025 sont maintenus : la réduction d'impôt continue sur toute la durée choisie (6, 9 ou 12 ans). À la sortie de l'engagement, plusieurs options :</p>
      <ul>
        <li>Vendre (valorisation souvent modérée, marché Pinel saturé localement).</li>
        <li>Continuer à louer en location nue classique.</li>
        <li>Passer en LMNP (meubler et louer meublé) — sortie avantageuse fiscalement.</li>
      </ul>

      <h2>Pages liées</h2>
      <ul>
        <li><Link href="/investissement-locatif">Guide investissement locatif</Link></li>
        <li><Link href="/investissement-locatif/lmnp">LMNP</Link></li>
        <li><Link href="/investissement-locatif/deficit-foncier">Déficit foncier</Link></li>
      </ul>
    </PillarSubPage>
  )
}
