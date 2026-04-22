/**
 * Données B2C des pages /agences/[slug]/
 *
 * IMPORTANT : ces pages sont orientées ACQUISITION CLIENT FINAL
 * (pas recrutement de courtiers — silo B2B isolé dans /reseau/villes/).
 *
 * Les "banques locales" à citer sont celles présentes à l'ACTIF dans
 * la zone (agences physiques, taux souvent compétitifs sur ce marché).
 * La vérification reste à faire par le courtier référent avant publication.
 */

export type B2CCity = {
  slug: string // ex: "reims-51" (toujours ville-codeDept)
  name: string // ex: "Reims"
  dept: string // ex: "51"
  region: string
  postalCode?: string
  priceRangeM2: string // ex: "2 800 – 3 500 €/m²"
  medianSaleTime?: string // ex: "72 jours"
  marketInsight: string // 2-3 phrases sur le marché local
  mainBanks: { name: string; focus: string }[] // banques à l'œuvre localement
  neighborhoods?: string[] // quartiers à mentionner
  hasPhysicalAgency: boolean
  physicalAgencyAddress?: string
  latitude?: number
  longitude?: number
  localFaq: { q: string; a: string }[]
}

export const b2cCities: B2CCity[] = [
  {
    slug: "carignan-08",
    name: "Carignan",
    dept: "08",
    region: "Grand Est",
    postalCode: "08110",
    priceRangeM2: "1 200 – 1 600 €/m²",
    medianSaleTime: "120 jours",
    marketInsight:
      "Carignan est le siège de Crédit Plus, au cœur des Ardennes. Marché résidentiel de petites maisons et logements individuels, tension faible mais primo-accédants actifs. Le PTZ zone C s'applique sur la majeure partie du territoire communal.",
    mainBanks: [
      { name: "Crédit Mutuel Nord Europe", focus: "Profils primo-accédants et TNS locaux." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Financement de l'ancien à rénover." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "Investisseurs et chefs d'entreprise." },
      { name: "Crédit Agricole Nord Est", focus: "Réseau capillaire dans les Ardennes, offres primo-accédants." },
    ],
    hasPhysicalAgency: true,
    physicalAgencyAddress: "40 rue Maria Visseaux, 08110 Carignan",
    localFaq: [
      {
        q: "Le PTZ 2026 est-il disponible à Carignan ?",
        a: "Oui. Carignan est classée en zone C du zonage PTZ 2026. Le PTZ y finance jusqu'à 20 % de l'achat dans l'ancien avec travaux de rénovation énergétique (sous conditions de ressources et de performance énergétique cible).",
      },
      {
        q: "Combien faut-il gagner pour acheter à Carignan ?",
        a: "Pour un achat de 130 000 € sur 25 ans à 3,35 % avec 10 % d'apport, il faut environ 2 100 € nets mensuels en couple et rester sous 35 % d'endettement. Les prix au m² à Carignan restent accessibles pour les primo-accédants.",
      },
      {
        q: "Quelles banques prêtent le plus facilement dans les Ardennes ?",
        a: "Le Crédit Agricole Nord Est et le Crédit Mutuel Nord Europe dominent les Ardennes en termes de réseau physique et de primo-accédants. La Caisse d'Épargne Grand Est Europe suit sur les dossiers d'investisseurs et d'ancien à rénover.",
      },
    ],
  },
  {
    slug: "sedan-08",
    name: "Sedan",
    dept: "08",
    region: "Grand Est",
    postalCode: "08200",
    priceRangeM2: "1 400 – 1 900 €/m²",
    medianSaleTime: "95 jours",
    marketInsight:
      "Sedan est la 2e ville des Ardennes. Marché du centre-ville dynamique, primo-accédants nombreux (forte proportion de jeunes actifs ayant un emploi sur Charleville-Mézières). Plusieurs programmes VEFA en périphérie.",
    mainBanks: [
      { name: "Crédit Agricole Nord Est", focus: "Primo-accédants et jeunes actifs." },
      { name: "Crédit Mutuel Nord Europe", focus: "Acquéreurs locaux, TNS." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Financement de l'ancien." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      {
        q: "Peut-on avoir un rendez-vous à Sedan avec Crédit Plus ?",
        a: "Oui. Même si notre siège est à Carignan, nous intervenons à Sedan en rendez-vous physique à domicile ou en visioconférence. Notre zone de couverture inclut l'ensemble des Ardennes.",
      },
      {
        q: "Sedan est-elle en zone PTZ en 2026 ?",
        a: "Sedan est classée en zone C du zonage PTZ 2026, comme la majorité des communes des Ardennes. Le PTZ y finance jusqu'à 20 % d'un achat neuf collectif ou d'un ancien rénové, sous conditions.",
      },
    ],
  },
  {
    slug: "charleville-mezieres-08",
    name: "Charleville-Mézières",
    dept: "08",
    region: "Grand Est",
    postalCode: "08000",
    priceRangeM2: "1 500 – 2 100 €/m²",
    medianSaleTime: "85 jours",
    marketInsight:
      "Préfecture des Ardennes, Charleville-Mézières concentre l'essentiel de l'activité tertiaire du département. Marché équilibré, forte demande d'investissement locatif autour de la Place Ducale et des quartiers proches des lignes SNCF.",
    mainBanks: [
      { name: "Crédit Agricole Nord Est", focus: "Résidence principale et investisseurs." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Primo-accédants et SCI familiales." },
      { name: "CIC Est", focus: "Cadres du tertiaire et professions libérales." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS et chefs d'entreprise." },
    ],
    neighborhoods: ["Place Ducale / centre", "Manchester", "Montcy-Notre-Dame", "Mohon"],
    hasPhysicalAgency: false,
    localFaq: [
      {
        q: "Quel est le prix moyen au m² à Charleville-Mézières ?",
        a: "Le prix moyen à Charleville-Mézières s'établit en 2025-2026 autour de 1 500 – 2 100 €/m² selon les quartiers, avec des écarts notables entre le centre et la périphérie (source : Notaires de France, indicateurs locaux).",
      },
      {
        q: "L'investissement locatif est-il intéressant à Charleville-Mézières ?",
        a: "Oui, notamment dans les quartiers centraux proches de la gare. Le rapport prix d'achat / loyer y reste favorable (rendement brut de l'ordre de 6 à 8 %), surtout en ciblant les petites surfaces étudiantes ou jeunes actifs.",
      },
      {
        q: "Peut-on financer un achat avec le PTZ à Charleville-Mézières ?",
        a: "Oui. Charleville-Mézières est en zone C du zonage PTZ 2026. Le PTZ finance jusqu'à 20 % du projet en neuf collectif ou en ancien avec rénovation énergétique, sous conditions de ressources.",
      },
    ],
  },
  {
    slug: "reims-51",
    name: "Reims",
    dept: "51",
    region: "Grand Est",
    postalCode: "51100",
    priceRangeM2: "2 800 – 3 700 €/m²",
    medianSaleTime: "72 jours",
    marketInsight:
      "Reims est la 1re métropole du Grand Est (185 000 habitants). Marché dynamique tiré par l'université, le champagne et l'aérien (BASE 112). Forte demande primo-accédants sur Cormontreuil et Tinqueux ; investissement locatif étudiant très recherché autour de la Neuvillette.",
    mainBanks: [
      { name: "Crédit Agricole du Nord Est", focus: "Acteur historique sur la Marne, grilles compétitives sur les primo-accédants et investisseurs locaux." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Forte présence investisseurs SCI et profession libérale." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "Chefs d'entreprise et TNS." },
      { name: "CIC Est", focus: "Profils cadres et dossiers atypiques." },
      { name: "Société Générale", focus: "Primo-accédants salariés et cadres." },
    ],
    neighborhoods: ["Centre / Erlon", "Cormontreuil", "Tinqueux", "La Neuvillette", "Saint-Rémi"],
    hasPhysicalAgency: false,
    localFaq: [
      {
        q: "Combien faut-il gagner pour acheter un T3 à Reims ?",
        a: "Un T3 de 70 m² à Reims coûte en 2026 environ 210 000 € (prix moyen). Avec 10 % d'apport, 25 ans à 3,35 % et règle HCSF 35 %, il faut environ 3 000 € nets mensuels en couple (1 500 € seul avec autres charges limitées).",
      },
      {
        q: "Quels quartiers privilégier pour investir à Reims en 2026 ?",
        a: "Pour la location étudiante : La Neuvillette, Saint-Rémi. Pour la résidence principale primo-accédant : Cormontreuil et Tinqueux (meilleurs ratios prix/qualité). Pour le haut de gamme : centre historique autour de Place Erlon.",
      },
      {
        q: "Reims est-elle en zone PTZ en 2026 ?",
        a: "Reims est classée en zone B1 du zonage PTZ 2026. Le PTZ y finance jusqu'à 30 % en neuf collectif (40 % sous plafonds de ressources bas), sous conditions de revenus.",
      },
      {
        q: "Le Crédit Agricole du Nord Est est-il le plus compétitif à Reims ?",
        a: "Le Crédit Agricole du Nord Est est incontournable sur la Marne par son réseau, mais sa compétitivité varie selon le profil. Un courtier compare systématiquement avec la Caisse d'Épargne, la Banque Populaire ALC et le CIC Est pour obtenir le meilleur package.",
      },
    ],
  },
  {
    slug: "strasbourg-67",
    name: "Strasbourg",
    dept: "67",
    region: "Grand Est",
    postalCode: "67000",
    priceRangeM2: "3 900 – 5 200 €/m²",
    medianSaleTime: "68 jours",
    marketInsight:
      "Strasbourg est la 2e métropole du Grand Est et la capitale européenne. Marché immobilier tendu, porté par les institutions européennes, l'Eurométropole, et la forte attractivité étudiante (50 000 étudiants). Prix au m² parmi les plus élevés du Grand Est.",
    mainBanks: [
      { name: "Crédit Mutuel — Fédération Sud-Europe-Méditerranée (via SRIM)", focus: "Acteur historique alsacien, primo-accédants et cadres des institutions européennes." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Primo-accédants et SCI." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS et chefs d'entreprise." },
      { name: "CIC Est", focus: "Cadres, professions libérales, dossiers atypiques." },
      { name: "Crédit Agricole Alsace Vosges", focus: "Résidences principales et investisseurs locaux." },
    ],
    neighborhoods: ["Krutenau", "Neudorf", "Esplanade / Université", "Robertsau", "Meinau"],
    hasPhysicalAgency: false,
    localFaq: [
      {
        q: "Pourquoi les prix à Strasbourg sont-ils plus élevés qu'à Reims ou Metz ?",
        a: "Strasbourg cumule capitale européenne, économie alsacienne tertiaire et logistique rhénane, et université de rang mondial. Cette concentration d'emplois qualifiés maintient une pression à la hausse sur les prix. Le ratio prix/loyer reste néanmoins favorable à l'investissement locatif.",
      },
      {
        q: "Quelle banque prêter le plus facilement aux cadres européens à Strasbourg ?",
        a: "Le Crédit Mutuel Sud-Europe-Méditerranée et le CIC Est (tous deux du groupe Crédit Mutuel Alliance Fédérale) sont historiquement ouverts aux cadres des institutions européennes, y compris avec contrats de droit international. La Société Générale et BNP Paribas sont également très présentes sur ce profil.",
      },
      {
        q: "L'investissement locatif étudiant est-il rentable à Strasbourg en 2026 ?",
        a: "Oui. Avec 50 000 étudiants et une tension locative forte, un studio ou T1 dans les quartiers Krutenau, Esplanade ou Neudorf génère des rendements bruts de l'ordre de 5 à 6,5 %. La LMNP au régime réel y est très adaptée.",
      },
      {
        q: "Strasbourg est-elle en zone PTZ ?",
        a: "Strasbourg est classée en zone B1 du zonage PTZ 2026. Le PTZ y finance jusqu'à 30 % en neuf collectif, sous conditions de ressources.",
      },
    ],
  },
  {
    slug: "nancy-54",
    name: "Nancy",
    dept: "54",
    region: "Grand Est",
    postalCode: "54000",
    priceRangeM2: "2 200 – 3 100 €/m²",
    medianSaleTime: "75 jours",
    marketInsight:
      "Nancy est la capitale du Sillon Lorrain (105 000 habitants). Marché porté par l'Université de Lorraine (60 000 étudiants), le tertiaire, et un tissu médical dense (CHU). Forte demande investissement locatif étudiant et primo-accédants CSP+.",
    mainBanks: [
      { name: "Crédit Agricole de Lorraine", focus: "Primo-accédants et SCI familiales." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Cadres et profession libérale médicale." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "Chefs d'entreprise, TNS, investisseurs." },
      { name: "CIC Est", focus: "Professions médicales, dossiers premium." },
    ],
    neighborhoods: ["Ville-Vieille / Stanislas", "Saint-Pierre", "Haussonville", "Saurupt", "Laneuveville-devant-Nancy"],
    hasPhysicalAgency: false,
    localFaq: [
      {
        q: "Nancy est-elle bonne pour l'investissement locatif étudiant ?",
        a: "Excellente. Avec 60 000 étudiants et une offre locative insuffisante dans l'hyper-centre, le rendement brut sur studio/T1 atteint 6-7 %. Les quartiers Saint-Pierre, Haussonville et Ville-Vieille sont les plus demandés.",
      },
      {
        q: "Le CHU de Nancy facilite-t-il le crédit pour les médecins ?",
        a: "Oui. Les banques régionales (CIC Est, Caisse d'Épargne Grand Est Europe, Crédit Agricole de Lorraine) proposent des grilles dédiées aux médecins CHU et hospitaliers, avec taux préférentiels et assurance adaptée. Un courtier mobilise ces 3 banques en parallèle pour optimiser le dossier.",
      },
      {
        q: "Nancy est-elle en zone PTZ ?",
        a: "Nancy est en zone B1 du zonage PTZ 2026. Le PTZ y finance jusqu'à 30 % d'un neuf collectif, sous conditions de ressources.",
      },
    ],
  },
  {
    slug: "metz-57",
    name: "Metz",
    dept: "57",
    region: "Grand Est",
    postalCode: "57000",
    priceRangeM2: "2 100 – 2 800 €/m²",
    medianSaleTime: "80 jours",
    marketInsight:
      "Metz est la préfecture de la Moselle (115 000 habitants). Marché porté par la proximité du Luxembourg (60 000 frontaliers), l'Université, et un tertiaire en croissance. Forte demande d'investissement locatif frontalier et primo-accédants CSP+.",
    mainBanks: [
      { name: "Crédit Mutuel Centre-Est Europe", focus: "Frontaliers Luxembourg, primo-accédants." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Primo-accédants et SCI." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS, chefs d'entreprise." },
      { name: "CIC Est", focus: "Cadres et professions libérales." },
      { name: "BGL BNP Paribas (Luxembourg)", focus: "Salariés luxembourgeois achetant en France — via conventions transfrontalières." },
    ],
    neighborhoods: ["Centre / Sablon", "Queuleu", "Bellecroix", "Metz-Nord", "Montigny-lès-Metz"],
    hasPhysicalAgency: false,
    localFaq: [
      {
        q: "Je travaille au Luxembourg, comment financer mon achat à Metz ?",
        a: "Les salariés frontaliers au Luxembourg peuvent emprunter auprès de banques françaises (Crédit Mutuel, Caisse d'Épargne, Banque Populaire) avec bulletin de salaire luxembourgeois. Le taux d'endettement est calculé sur le net luxembourgeois après prise en compte de la fiscalité. Certaines banques luxembourgeoises (BGL BNP Paribas) proposent des prêts cross-border.",
      },
      {
        q: "Metz est-elle intéressante pour l'investissement locatif ?",
        a: "Oui, en ciblant les quartiers Centre/Sablon et Queuleu pour les étudiants et jeunes cadres. Les rendements bruts atteignent 5-6 % sur les petites surfaces. La proximité Luxembourg maintient une demande locative stable.",
      },
      {
        q: "Metz est-elle en zone PTZ ?",
        a: "Metz est en zone B1 du zonage PTZ 2026. Le PTZ y finance jusqu'à 30 % d'un neuf collectif ou d'un ancien rénové, sous conditions de ressources.",
      },
    ],
  },
  {
    slug: "dax-40",
    name: "Dax",
    dept: "40",
    region: "Nouvelle-Aquitaine",
    postalCode: "40100",
    priceRangeM2: "2 400 – 3 000 €/m²",
    medianSaleTime: "85 jours",
    marketInsight:
      "Dax est la 2e ville des Landes (20 000 habitants, 41 000 avec son agglomération). Ville thermale reconnue, elle attire une population senior active (retraités, curistes) et une classe moyenne des environs. Marché résidentiel stable avec pic d'activité sur les résidences secondaires.",
    mainBanks: [
      { name: "Crédit Agricole d'Aquitaine", focus: "Acteur historique du Sud-Ouest, primo-accédants et résidents." },
      { name: "Caisse d'Épargne Aquitaine Poitou-Charentes", focus: "Primo-accédants, SCI, investissement locatif." },
      { name: "Banque Populaire Aquitaine Centre Atlantique", focus: "TNS et chefs d'entreprise." },
      { name: "Crédit Mutuel Océan", focus: "Résidences secondaires et investisseurs." },
    ],
    hasPhysicalAgency: true,
    physicalAgencyAddress: "Dax (40100), Landes", // TODO: adresse précise
    localFaq: [
      {
        q: "Dax est-elle une bonne ville pour acheter une résidence secondaire ?",
        a: "Oui. Sa proximité avec l'océan (35 min de Capbreton), son climat doux, ses thermes et un marché moins tendu qu'à Biarritz ou Hossegor en font une cible populaire pour les résidences secondaires. Le prix au m² (2 400 – 3 000 €) reste accessible.",
      },
      {
        q: "Quels quartiers privilégier à Dax pour investir ?",
        a: "Le centre-ville (Saint-Vincent-de-Paul, Sablar) pour la qualité de vie et les curistes. Les quartiers Cuyès et Saubagnacq pour les primo-accédants locaux avec un meilleur rapport prix/surface.",
      },
      {
        q: "Le PTZ s'applique-t-il à Dax en 2026 ?",
        a: "Oui. Dax est classée en zone B2 du zonage PTZ 2026. Le PTZ y finance jusqu'à 40 % en neuf collectif et jusqu'à 20 % en ancien avec travaux de rénovation énergétique.",
      },
    ],
  },
]

export function getB2CCity(slug: string): B2CCity | undefined {
  return b2cCities.find((c) => c.slug === slug)
}

export function getAllB2CSlugs(): string[] {
  return b2cCities.map((c) => c.slug)
}
