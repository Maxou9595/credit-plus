"use client"

import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"
import Link from "next/link"

interface FaqItem {
  question: string
  answer: string
  category: string
}

const faqCarignanData: FaqItem[] = [
  {
    category: "Marché Immobilier à Carignan",
    question: "Quel est le prix moyen de l'immobilier à Carignan (08110) ?",
    answer:
      "À Carignan, le prix moyen de l'immobilier se situe autour de 1 200 à 1 500 €/m² pour les maisons, ce qui est très attractif comparé aux grandes villes. Les appartements sont encore plus accessibles, entre 900 et 1 200 €/m². Cette accessibilité fait de Carignan une ville idéale pour les primo-accédants et les familles souhaitant devenir propriétaires avec un budget maîtrisé. Le marché local est dynamique avec une demande constante pour les maisons avec jardin. Crédit Time Carignan vous accompagne pour financer votre projet immobilier dans les meilleures conditions.",
  },
  {
    category: "Marché Immobilier à Carignan",
    question: "Quels sont les quartiers les plus recherchés à Carignan ?",
    answer:
      "À Carignan, les quartiers les plus prisés sont le centre-ville historique avec ses commerces de proximité et son charme authentique, les zones résidentielles calmes près de la Chiers offrant un cadre de vie agréable, et les secteurs pavillonnaires récents avec jardins. Les biens proches des écoles (école primaire, collège) sont particulièrement recherchés par les familles. La proximité avec Sedan (15 km) et la frontière belge rend également certains secteurs attractifs pour les travailleurs frontaliers. Notre agence Crédit Time au 40 rue Maria Visseaux connaît parfaitement le marché local et vous conseille sur les meilleurs secteurs selon votre projet.",
  },
  {
    category: "Marché Immobilier à Carignan",
    question: "Est-ce un bon moment pour acheter à Carignan ?",
    answer:
      "Oui, c'est actuellement un excellent moment pour acheter à Carignan. Les taux de crédit immobilier sont à 2.90%, ce qui reste historiquement bas et permet de financer votre projet dans de bonnes conditions. Le marché immobilier local est stable avec des prix accessibles qui n'ont pas connu la flambée des grandes villes. La demande est soutenue, notamment de la part des jeunes couples et familles, ce qui garantit une bonne valorisation de votre bien à long terme. Les dispositifs d'aide (PTZ, prêts aidés) sont toujours disponibles pour les primo-accédants. Crédit Time Carignan vous aide à saisir les meilleures opportunités du marché local.",
  },
  {
    category: "Types de Biens à Carignan",
    question: "Quels types de maisons trouve-t-on à Carignan ?",
    answer:
      "À Carignan, l'offre immobilière est variée : maisons de ville en pierre du 19ème siècle avec cachet (3-4 chambres, 100-150 m²), pavillons des années 70-90 avec jardin (80-120 m²), constructions récentes aux normes BBC/RT2012 (90-130 m²), longères rénovées en périphérie avec terrain, et maisons de maître avec dépendances. Les prix varient de 100 000 € pour une maison à rénover à 250 000 € pour une construction récente. Les maisons avec jardin clos sont très recherchées par les familles. Notre agence Crédit Time vous aide à financer tous types de biens selon votre projet de vie.",
  },
  {
    category: "Types de Biens à Carignan",
    question: "Y a-t-il des programmes neufs à Carignan ?",
    answer:
      "Oui, Carignan connaît un développement mesuré avec quelques programmes neufs de petite taille (5-15 logements) proposant des maisons individuelles et petits collectifs. Ces programmes bénéficient des normes RT2012/RE2020, de garanties constructeur (décennale, parfait achèvement), et sont éligibles au PTZ neuf. Les prix se situent entre 180 000 et 280 000 € selon la surface et les prestations. L'avantage du neuf : pas de travaux, frais de notaire réduits (2-3% au lieu de 7-8%), et économies d'énergie. Crédit Time Carignan vous accompagne dans le financement de votre achat neuf avec les meilleures conditions bancaires et l'intégration du PTZ.",
  },
  {
    category: "Types de Biens à Carignan",
    question: "Peut-on acheter un terrain à bâtir à Carignan ?",
    answer:
      "Oui, des terrains à bâtir sont disponibles à Carignan et dans les communes limitrophes (Margut, Douzy, Messincourt). Les prix varient de 30 à 60 €/m² selon la localisation et la viabilisation. Pour un terrain de 800 m², comptez 24 000 à 48 000 €. Le financement d'une construction se fait en deux temps : achat du terrain puis construction (déblocage progressif selon l'avancement des travaux). Crédit Time Carignan maîtrise parfaitement le financement des projets de construction avec le Contrat de Construction de Maison Individuelle (CCMI), et vous aide à optimiser votre plan de financement terrain + construction.",
  },
  {
    category: "Profils d'Acheteurs",
    question: "Carignan est-elle adaptée aux primo-accédants ?",
    answer:
      "Absolument ! Carignan est idéale pour les primo-accédants grâce à des prix immobiliers très accessibles (maisons à partir de 100 000-120 000 €), l'éligibilité au PTZ qui peut financer jusqu'à 40% de votre achat, et un coût de la vie maîtrisé. Avec un apport de 10 000 € et des revenus de 2 000 €/mois, vous pouvez devenir propriétaire d'une maison avec jardin. Les banques sont favorables aux projets sur Carignan car le marché est stable. Notre agence Crédit Time accompagne spécifiquement les primo-accédants avec un montage de dossier optimisé (PTZ, prêt Action Logement, prêts aidés) pour maximiser vos chances d'obtenir votre crédit.",
  },
  {
    category: "Profils d'Acheteurs",
    question: "Carignan attire-t-elle les travailleurs frontaliers du Luxembourg ?",
    answer:
      "Oui, Carignan attire de plus en plus de travailleurs frontaliers luxembourgeois grâce à sa position stratégique à 30 km de la frontière (30-40 minutes en voiture). Les prix immobiliers très attractifs comparés au Luxembourg permettent d'acquérir une grande maison avec jardin pour le prix d'un petit appartement au Grand-Duché. Les revenus luxembourgeois élevés facilitent l'obtention de crédit avec des capacités d'emprunt importantes. Les banques françaises connaissent bien les profils frontaliers. Crédit Time Carignan accompagne régulièrement des frontaliers et maîtrise les spécificités de financement (justificatifs de revenus luxembourgeois, fiscalité, etc.).",
  },
  {
    category: "Profils d'Acheteurs",
    question: "Carignan convient-elle aux retraités ?",
    answer:
      "Oui, Carignan est très appréciée des retraités pour son calme, sa qualité de vie, ses commerces de proximité, et ses services de santé. Les prix accessibles permettent d'acheter une maison de plain-pied adaptée (120-150 m²) pour 150 000-200 000 €. Pour les retraités, le financement est possible jusqu'à 75 ans (voire plus selon les banques) avec des durées adaptées (10-15 ans). L'assurance emprunteur peut être plus coûteuse après 65 ans, mais des solutions existent. Crédit Time Carignan accompagne les seniors dans leur projet immobilier avec des montages adaptés à leur situation (revenus de retraite, patrimoine, durée de prêt optimisée).",
  },
  {
    category: "Situations Spécifiques",
    question: "Comment financer un achat immobilier après un divorce à Carignan ?",
    answer:
      "Après un divorce, plusieurs situations se présentent : rachat de la part de l'ex-conjoint (soulte), vente du bien commun et nouvel achat, ou premier achat en tant que célibataire. À Carignan, les prix accessibles facilitent ces projets. Pour un rachat de soulte, la banque finance la part de l'ex-conjoint plus les frais. Pour un nouvel achat, votre capacité d'emprunt est recalculée sur vos seuls revenus. Les pensions alimentaires reçues peuvent être prises en compte. Crédit Time Carignan accompagne avec sensibilité les personnes divorcées, analyse votre situation post-divorce, et trouve les meilleures solutions de financement adaptées à votre nouveau projet de vie.",
  },
  {
    category: "Situations Spécifiques",
    question: "Peut-on acheter à Carignan avec un CDD ou en intérim ?",
    answer:
      "Oui, il est possible d'acheter à Carignan avec un CDD ou en intérim, mais les conditions sont plus strictes. Les banques demandent généralement : une ancienneté significative dans le secteur (2-3 ans), une promesse d'embauche en CDI, ou un historique de missions régulières. Un apport personnel conséquent (15-20%) renforce le dossier. À Carignan, les prix accessibles permettent des montants d'emprunt raisonnables qui facilitent l'acceptation. Certaines banques sont plus souples que d'autres. Crédit Time Carignan connaît les établissements qui financent les profils atypiques et monte votre dossier pour maximiser vos chances d'obtenir votre crédit immobilier malgré votre situation contractuelle.",
  },
  {
    category: "Situations Spécifiques",
    question: "Comment financer un achat immobilier en étant auto-entrepreneur à Carignan ?",
    answer:
      "En tant qu'auto-entrepreneur, l'achat immobilier à Carignan est possible avec une bonne préparation. Les banques demandent généralement 2-3 ans d'activité avec des revenus stables et croissants, vos 2-3 derniers bilans/déclarations fiscales, et un apport personnel (10-15% minimum). Vos revenus sont lissés sur 2-3 ans pour calculer votre capacité d'emprunt. À Carignan, les montants d'achat raisonnables (100 000-200 000 €) facilitent l'obtention du crédit. Crédit Time Carignan accompagne régulièrement des travailleurs indépendants, connaît les banques qui financent les auto-entrepreneurs, et optimise la présentation de vos revenus pour maximiser votre capacité d'emprunt.",
  },
  {
    category: "Investissement et Fiscalité",
    question: "Quel rendement locatif espérer à Carignan ?",
    answer:
      "À Carignan, le rendement locatif brut peut atteindre 6-8% pour des biens bien situés et rénovés. Par exemple, une maison de 80 m² achetée 100 000 € et louée 550 €/mois génère un rendement brut de 6,6%. Les petits logements (T2-T3) sont très demandés par les jeunes actifs et les travailleurs frontaliers. La proximité avec le Luxembourg assure une demande locative stable. Les charges (taxe foncière, entretien, assurance) sont modérées. En location meublée (LMNP), vous bénéficiez d'avantages fiscaux (amortissement du bien, récupération de TVA). Crédit Time Carignan accompagne dans le montage financier de votre investissement locatif pour optimiser rentabilité et fiscalité.",
  },
  {
    category: "Investissement et Fiscalité",
    question: "Quels sont les avantages fiscaux pour investir à Carignan ?",
    answer:
      "Plusieurs dispositifs fiscaux sont applicables à Carignan : le dispositif Denormandie pour l'ancien avec travaux (réduction d'impôt de 12 à 21% selon la durée de location), le déficit foncier pour déduire les travaux de vos revenus (jusqu'à 10 700 €/an, voire 21 400 € avec travaux de rénovation énergétique), le statut LMNP (Loueur Meublé Non Professionnel) pour amortir le bien et les meubles, et la loi Malraux si vous rénovez un bien dans le centre historique. Ces dispositifs permettent de réduire significativement votre fiscalité tout en constituant un patrimoine. Crédit Time Carignan travaille avec des conseillers fiscaux et vous oriente vers le dispositif le plus adapté à votre situation.",
  },
  {
    category: "Comparaisons Locales",
    question: "Pourquoi acheter à Carignan plutôt qu'à Sedan ?",
    answer:
      "Carignan offre plusieurs avantages par rapport à Sedan : des prix immobiliers plus accessibles (20-30% moins chers), un cadre de vie plus calme et résidentiel, une proximité immédiate avec la nature (Chiers, forêts), et une position stratégique vers le Luxembourg (30 km vs 45 km depuis Sedan). Carignan conserve tous les services essentiels (commerces, écoles, santé) tout en offrant une qualité de vie supérieure. Pour les familles et les personnes recherchant la tranquillité, Carignan est idéale. Sedan reste accessible en 15 minutes pour les services plus spécialisés. Crédit Time Carignan vous aide à comparer les opportunités et à financer votre projet dans les meilleures conditions.",
  },
  {
    category: "Comparaisons Locales",
    question: "Carignan ou Montmédy : où investir ?",
    answer:
      "Carignan et Montmédy sont deux villes ardennaises attractives avec des profils différents. Carignan offre : des prix légèrement plus accessibles, une meilleure desserte (gare, proximité A34), plus de commerces et services, et une position plus centrale dans les Ardennes. Montmédy séduit par : son patrimoine historique exceptionnel (citadelle Vauban), son cadre naturel préservé, et sa proximité immédiate avec le Luxembourg (20 km). Pour l'investissement locatif, Carignan offre une demande plus stable. Pour la résidence principale, le choix dépend de vos priorités (services vs patrimoine). Crédit Time Carignan analyse votre projet et vous conseille objectivement sur la meilleure localisation selon vos critères.",
  },
  {
    category: "Projets et Développement",
    question: "Quels sont les projets d'aménagement à Carignan ?",
    answer:
      "Carignan bénéficie de plusieurs projets de développement : rénovation du centre-ville et mise en valeur du patrimoine historique, amélioration des infrastructures routières et de la desserte, développement de zones d'activités pour attirer des entreprises, création d'équipements sportifs et de loisirs, et valorisation des bords de Chiers. Ces projets visent à renforcer l'attractivité de la ville et à améliorer la qualité de vie des habitants. Ils contribuent à la valorisation des biens immobiliers à moyen et long terme. Investir à Carignan aujourd'hui, c'est profiter de prix encore accessibles avant la montée en valeur liée à ces aménagements. Crédit Time Carignan vous informe sur les secteurs les plus prometteurs.",
  },
  {
    category: "Éducation et Famille",
    question: "Quelles sont les écoles disponibles à Carignan ?",
    answer:
      "Carignan dispose d'une offre scolaire complète pour les familles : école maternelle publique (3-6 ans) avec plusieurs classes, école primaire publique (6-11 ans) avec un bon encadrement, et collège public (11-15 ans) offrant un enseignement de qualité. Pour le lycée, les élèves se rendent à Sedan (lycée général et technologique, lycée professionnel) à 15 km. Des transports scolaires sont organisés. La proximité des écoles est un critère important pour les familles, et les quartiers proches des établissements scolaires sont très recherchés. Les biens situés dans le secteur scolaire se valorisent bien. Crédit Time Carignan vous conseille sur les meilleurs secteurs pour les familles avec enfants.",
  },
  {
    category: "Éducation et Famille",
    question: "Carignan est-elle une ville familiale ?",
    answer:
      "Oui, Carignan est une ville très familiale qui offre un cadre de vie idéal pour élever des enfants : environnement calme et sécurisé, espaces verts et aires de jeux, écoles de qualité à proximité, activités sportives et culturelles pour les jeunes (football, judo, musique, danse), et un tissu associatif dynamique. Les maisons avec jardin sont nombreuses et accessibles (150 000-200 000 €), permettant aux familles de s'installer confortablement. La vie de quartier est conviviale et les enfants peuvent jouer en toute sécurité. Les prix immobiliers accessibles permettent aux jeunes couples de devenir propriétaires et de fonder leur famille. Crédit Time Carignan accompagne de nombreuses familles dans leur projet d'accession.",
  },
  {
    category: "Transports et Mobilité",
    question: "Comment se déplacer depuis Carignan ?",
    answer:
      "Carignan bénéficie d'une bonne accessibilité : la gare SNCF permet de rejoindre Sedan (15 min), Charleville-Mézières (40 min), et Metz (1h30), l'autoroute A34 est à 10 km (accès rapide vers Reims et Luxembourg), des lignes de bus départementales desservent les communes voisines, et la voiture reste le moyen de transport privilégié pour les déplacements quotidiens. Pour les travailleurs frontaliers luxembourgeois, comptez 30-40 minutes en voiture. Le covoiturage se développe également. La position centrale de Carignan dans les Ardennes facilite les déplacements vers toutes les directions. Cette accessibilité est un atout pour la valorisation immobilière.",
  },
  {
    category: "Transports et Mobilité",
    question: "Y a-t-il des parkings et stationnements à Carignan ?",
    answer:
      "Oui, le stationnement à Carignan est facile et gratuit : parkings publics en centre-ville (place de la République, parking de la mairie), stationnement gratuit dans toutes les rues, et la plupart des maisons disposent d'un garage ou d'une place de parking privée. Contrairement aux grandes villes, le stationnement n'est jamais un problème à Carignan. C'est un avantage considérable pour la qualité de vie quotidienne. Les biens avec garage ou parking privatif sont particulièrement recherchés et se valorisent mieux. Lors de votre recherche immobilière, Crédit Time Carignan vous conseille sur l'importance du stationnement dans votre choix de bien.",
  },
  {
    category: "Emploi et Économie",
    question: "Quelles sont les opportunités d'emploi à Carignan ?",
    answer:
      "Carignan et sa région offrent des opportunités d'emploi dans plusieurs secteurs : industrie et artisanat (PME locales, sous-traitance automobile), commerce et services (commerces de proximité, services à la personne), santé et social (EHPAD, services de soins), éducation (écoles, collège), et administration publique (mairie, services départementaux). La proximité avec Sedan (15 km), Charleville-Mézières (40 km), et surtout le Luxembourg (30 km) élargit considérablement les possibilités professionnelles. De nombreux habitants travaillent au Luxembourg avec des salaires attractifs. Le télétravail se développe également, permettant de vivre à Carignan tout en travaillant pour des entreprises éloignées. Cette diversité d'opportunités soutient le marché immobilier local.",
  },
  {
    category: "Emploi et Économie",
    question: "Peut-on télétravailler depuis Carignan ?",
    answer:
      "Oui, Carignan est parfaitement adaptée au télétravail : connexion internet haut débit (fibre optique déployée dans la ville), cadre de vie calme propice à la concentration, prix immobiliers permettant d'acquérir une maison avec bureau/pièce dédiée, et qualité de vie supérieure aux grandes villes. De plus en plus de télétravailleurs choisissent Carignan pour s'installer, profitant de l'espace et du calme tout en conservant leur emploi dans une grande ville. Les maisons avec pièce supplémentaire pouvant servir de bureau sont très recherchées. Crédit Time Carignan accompagne de nombreux télétravailleurs dans leur projet d'installation et de financement immobilier.",
  },
  {
    category: "Loisirs et Culture",
    question: "Que faire à Carignan en termes de loisirs ?",
    answer:
      "Carignan offre de nombreuses activités de loisirs : sports (football, judo, tennis, pétanque, randonnée, pêche dans la Chiers), culture (bibliothèque, expositions, concerts, patrimoine historique à découvrir), nature (balades le long de la Chiers, forêts environnantes, cyclotourisme), et vie associative dynamique (associations culturelles, sportives, caritatives). Les événements locaux rythment l'année (fête de la ville, marché de Noël, brocantes). Pour les loisirs plus variés, Sedan (15 km) propose cinéma, théâtre, bowling, et piscine. La proximité avec les Ardennes belges et le Luxembourg offre également de nombreuses possibilités d'excursions. C'est un cadre de vie équilibré entre tranquillité et activités.",
  },
  {
    category: "Environnement et Cadre de Vie",
    question: "Quel est le cadre naturel autour de Carignan ?",
    answer:
      "Carignan bénéficie d'un environnement naturel exceptionnel : la rivière Chiers qui traverse la ville offre un cadre apaisant et des possibilités de pêche et de promenade, les forêts ardennaises environnantes sont idéales pour la randonnée et les activités nature, la campagne préservée avec ses paysages vallonnés, et une faune et flore riches. La qualité de l'air est excellente, loin de la pollution des grandes villes. Ce cadre naturel est un atout majeur pour la qualité de vie et la santé. Les biens avec vue sur la Chiers ou proches de la nature sont particulièrement recherchés et se valorisent bien. Crédit Time Carignan vous aide à trouver et financer le bien idéal dans ce cadre privilégié.",
  },
  {
    category: "Questions Pratiques",
    question: "Quels sont les frais de notaire pour un achat à Carignan ?",
    answer:
      "Les frais de notaire à Carignan sont identiques au reste de la France : 7-8% du prix d'achat pour l'ancien (dont 5,8% de droits de mutation), et 2-3% pour le neuf (TVA réduite). Par exemple, pour une maison de 150 000 € dans l'ancien, comptez 10 500-12 000 € de frais de notaire. Pour un bien neuf de 200 000 €, les frais seront de 4 000-6 000 €. Ces frais comprennent les droits d'enregistrement, les émoluments du notaire, et les débours (cadastre, hypothèque). Ils doivent être payés comptant le jour de la signature. Crédit Time Carignan intègre ces frais dans votre plan de financement global pour que vous ayez une vision complète de votre budget.",
  },
  {
    category: "Questions Pratiques",
    question: "Combien de temps pour finaliser un achat immobilier à Carignan ?",
    answer:
      "Le délai moyen pour finaliser un achat immobilier à Carignan est de 3 à 4 mois : recherche du bien et visites (2-6 semaines), signature du compromis de vente (J0), délai de rétractation de 10 jours, montage du dossier de crédit avec Crédit Time (1-2 semaines), obtention de l'accord bancaire (2-3 semaines), édition de l'offre de prêt (1 semaine), délai légal de réflexion de 10 jours, et signature de l'acte authentique chez le notaire (3 mois après le compromis). Ce délai peut être plus court si votre dossier est solide et complet. Notre réactivité et notre connaissance du marché local permettent d'accélérer le processus. Crédit Time Carignan vous accompagne à chaque étape pour sécuriser et accélérer votre projet.",
  },
  {
    category: "Questions Pratiques",
    question: "Faut-il un apport personnel pour acheter à Carignan ?",
    answer:
      "Un apport personnel est fortement recommandé mais pas toujours obligatoire. Idéalement, prévoyez 10-15% du prix d'achat pour couvrir les frais de notaire et rassurer la banque. À Carignan, avec des prix accessibles, un apport de 10 000-20 000 € est souvent suffisant. Pour les primo-accédants avec le PTZ, l'apport peut être réduit voire nul dans certains cas. Les banques apprécient l'apport car il démontre votre capacité d'épargne et réduit leur risque. Sans apport, le financement reste possible pour les profils solides (CDI, revenus stables, pas d'endettement). Crédit Time Carignan analyse votre situation et trouve les banques qui financent avec peu ou sans apport selon votre profil.",
  },
  {
    category: "Questions Pratiques",
    question: "Peut-on négocier le prix d'un bien à Carignan ?",
    answer:
      "Oui, la négociation est possible et même courante à Carignan. La marge de négociation dépend de plusieurs facteurs : l'état du bien (travaux à prévoir), la durée de mise en vente (bien sur le marché depuis longtemps), la motivation du vendeur (mutation professionnelle, divorce, succession), et le marché local (offre/demande). En moyenne, vous pouvez négocier 5-10% du prix affiché, parfois plus pour les biens nécessitant des travaux. Par exemple, sur une maison affichée à 150 000 €, une offre à 140 000 € peut être acceptée. Crédit Time Carignan, grâce à sa connaissance du marché local, vous conseille sur le prix juste et la stratégie de négociation. Nous travaillons avec les agents immobiliers locaux pour faciliter les transactions.",
  },
  {
    category: "Questions Pratiques",
    question: "Quelles sont les taxes locales à Carignan ?",
    answer:
      "À Carignan, les taxes locales sont raisonnables : la taxe foncière varie selon la valeur cadastrale du bien (comptez 800-1 500 €/an pour une maison de 100 m²), la taxe d'habitation a été supprimée pour les résidences principales, et la taxe d'enlèvement des ordures ménagères est incluse dans la taxe foncière. Ces montants sont inférieurs aux grandes villes, ce qui contribue à un coût de la vie maîtrisé. Pour un investissement locatif, ces taxes sont déductibles de vos revenus fonciers. Crédit Time Carignan intègre ces charges dans le calcul de votre budget global pour que vous ayez une vision complète du coût de votre projet immobilier.",
  },
]

export function FaqCarignanSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = Array.from(new Set(faqCarignanData.map((item) => item.category)))

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Carignan (08110)</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            FAQ Crédit Immobilier <span className="text-primary">Carignan</span>
          </h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Toutes les réponses à vos questions sur le crédit immobilier à Carignan et dans les Ardennes. Expertise
            locale Crédit Time.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">{category}</h2>
            <div className="space-y-4">
              {faqCarignanData
                .filter((item) => item.category === category)
                .map((item, index) => {
                  const globalIndex = faqCarignanData.indexOf(item)
                  const isOpen = openIndex === globalIndex

                  return (
                    <div
                      key={globalIndex}
                      className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                      >
                        <h3 className="font-semibold text-lg pr-4">{item.question}</h3>
                        <ChevronDown
                          className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{item.answer}</div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        ))}

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Votre Agence Crédit Time à Carignan</h2>
            <p className="text-muted-foreground mb-2">40 rue Maria Visseaux, 08110 Carignan</p>
            <p className="text-muted-foreground mb-2">Lundi - Vendredi : 9h-12h30 / 14h-18h</p>
            <p className="text-muted-foreground">Samedi sur rendez-vous</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0781736129"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Appeler le 07-81-73-61-29
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Prendre Rendez-vous
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/faq" className="text-primary hover:underline font-semibold">
            ← Retour à la FAQ générale
          </Link>
        </div>
      </div>
    </section>
  )
}
