/**
 * Données B2C des pages /agences/[slug]/
 *
 * IMPORTANT : ces pages sont orientées ACQUISITION CLIENT FINAL
 * (pas recrutement de courtiers — silo B2B isolé dans /reseau/villes/).
 *
 * Les "banques locales" à citer sont celles présentes à l'ACTIF dans
 * la zone (agences physiques, taux souvent compétitifs sur ce marché).
 * La liste complète des 20 banques partenaires est dans lib/partners.ts.
 */

export type B2CCity = {
  slug: string
  name: string
  dept: string
  region: string
  postalCode?: string
  priceRangeM2: string
  medianSaleTime?: string
  marketInsight: string
  mainBanks: { name: string; focus: string }[]
  neighborhoods?: string[]
  hasPhysicalAgency: boolean
  physicalAgencyAddress?: string
  latitude?: number
  longitude?: number
  localFaq: { q: string; a: string }[]
}

export const b2cCities: B2CCity[] = [
  // ─── Ardennes (08) ──────────────────────────────────────────────────
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
      { q: "Le PTZ 2026 est-il disponible à Carignan ?", a: "Oui. Carignan est classée en zone C du zonage PTZ 2026. Le PTZ y finance jusqu'à 20 % de l'achat dans l'ancien avec travaux de rénovation énergétique (sous conditions de ressources et de performance énergétique cible)." },
      { q: "Combien faut-il gagner pour acheter à Carignan ?", a: "Pour un achat de 130 000 € sur 25 ans à 3,40 % avec 10 % d'apport, il faut environ 2 100 € nets mensuels en couple et rester sous 35 % d'endettement. Les prix au m² à Carignan restent accessibles pour les primo-accédants." },
      { q: "Quelles banques prêtent le plus facilement dans les Ardennes ?", a: "Le Crédit Agricole Nord Est et le Crédit Mutuel Nord Europe dominent les Ardennes en termes de réseau physique et de primo-accédants. La Caisse d'Épargne Grand Est Europe suit sur les dossiers d'investisseurs et d'ancien à rénover." },
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
      { q: "Peut-on avoir un rendez-vous à Sedan avec Crédit Plus ?", a: "Oui. Même si notre siège est à Carignan, nous intervenons à Sedan en rendez-vous physique à domicile ou en visioconférence. Notre zone de couverture inclut l'ensemble des Ardennes." },
      { q: "Sedan est-elle en zone PTZ en 2026 ?", a: "Sedan est classée en zone C du zonage PTZ 2026, comme la majorité des communes des Ardennes. Le PTZ y finance jusqu'à 20 % d'un achat neuf collectif ou d'un ancien rénové, sous conditions." },
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
      { q: "Quel est le prix moyen au m² à Charleville-Mézières ?", a: "Le prix moyen à Charleville-Mézières s'établit en 2025-2026 autour de 1 500 – 2 100 €/m² selon les quartiers, avec des écarts notables entre le centre et la périphérie (source : Notaires de France, indicateurs locaux)." },
      { q: "L'investissement locatif est-il intéressant à Charleville-Mézières ?", a: "Oui, notamment dans les quartiers centraux proches de la gare. Le rapport prix d'achat / loyer y reste favorable (rendement brut de l'ordre de 6 à 8 %), surtout en ciblant les petites surfaces étudiantes ou jeunes actifs." },
      { q: "Peut-on financer un achat avec le PTZ à Charleville-Mézières ?", a: "Oui. Charleville-Mézières est en zone C du zonage PTZ 2026. Le PTZ finance jusqu'à 20 % du projet en neuf collectif ou en ancien avec rénovation énergétique, sous conditions de ressources." },
    ],
  },

  // ─── Marne (51) ─────────────────────────────────────────────────────
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
      { q: "Combien faut-il gagner pour acheter un T3 à Reims ?", a: "Un T3 de 70 m² à Reims coûte en 2026 environ 210 000 € (prix moyen). Avec 10 % d'apport, 25 ans à 3,40 % et règle HCSF 35 %, il faut environ 3 000 € nets mensuels en couple (1 500 € seul avec autres charges limitées)." },
      { q: "Quels quartiers privilégier pour investir à Reims en 2026 ?", a: "Pour la location étudiante : La Neuvillette, Saint-Rémi. Pour la résidence principale primo-accédant : Cormontreuil et Tinqueux (meilleurs ratios prix/qualité). Pour le haut de gamme : centre historique autour de Place Erlon." },
      { q: "Reims est-elle en zone PTZ en 2026 ?", a: "Reims est classée en zone B1 du zonage PTZ 2026. Le PTZ y finance jusqu'à 30 % en neuf collectif (40 % sous plafonds de ressources bas), sous conditions de revenus." },
    ],
  },
  {
    slug: "chalons-en-champagne-51",
    name: "Châlons-en-Champagne",
    dept: "51",
    region: "Grand Est",
    postalCode: "51000",
    priceRangeM2: "1 700 – 2 300 €/m²",
    medianSaleTime: "90 jours",
    marketInsight:
      "Châlons-en-Champagne, préfecture de la Marne (44 000 habitants), offre un marché immobilier accessible pour primo-accédants et investisseurs. Tissu administratif et tertiaire stable, proximité RN4 et TGV Paris-Reims en 45 min.",
    mainBanks: [
      { name: "Crédit Agricole du Nord Est", focus: "Primo-accédants, résidences principales." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Investisseurs et SCI." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS et chefs d'entreprise." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Châlons-en-Champagne est-elle en zone PTZ ?", a: "Châlons-en-Champagne est classée en zone B2 du zonage PTZ 2026. Le PTZ y finance jusqu'à 40 % du neuf collectif et 20 % de l'ancien avec travaux énergétiques." },
      { q: "Est-ce une bonne ville pour acheter en Marne ?", a: "Oui pour un premier achat : prix au m² très accessible (1 700-2 300 €), marché détendu, fonctionnaires nombreux (préfecture), environ 45 min TGV de Paris. Pour l'investissement locatif, privilégier Reims ou Épernay avec des rendements supérieurs." },
    ],
  },
  {
    slug: "epernay-51",
    name: "Épernay",
    dept: "51",
    region: "Grand Est",
    postalCode: "51200",
    priceRangeM2: "2 100 – 2 800 €/m²",
    medianSaleTime: "85 jours",
    marketInsight:
      "Épernay (25 000 habitants) est la capitale mondiale du champagne. Marché immobilier porté par l'œnotourisme, la proximité Reims (30 min) et une population de cadres viticoles aux revenus élevés.",
    mainBanks: [
      { name: "Crédit Agricole du Nord Est", focus: "Viticulteurs, primo-accédants." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Investisseurs et résidences secondaires." },
      { name: "CIC Est", focus: "Cadres et professions libérales." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "L'investissement locatif est-il rentable à Épernay ?", a: "Oui, surtout en petite surface meublée pour œnotourisme et locations saisonnières. Les rendements bruts atteignent 5-7 %. Attention à la saisonnalité : haute saison avril-octobre, plus calme en hiver." },
      { q: "Épernay est-elle en zone PTZ ?", a: "Épernay est classée en zone B2 du zonage PTZ 2026, avec accès aux quotités de 40 % (neuf collectif) et 20 % (ancien rénové)." },
    ],
  },

  // ─── Aube (10) ───────────────────────────────────────────────────────
  {
    slug: "troyes-10",
    name: "Troyes",
    dept: "10",
    region: "Grand Est",
    postalCode: "10000",
    priceRangeM2: "1 700 – 2 400 €/m²",
    medianSaleTime: "80 jours",
    marketInsight:
      "Troyes (60 000 habitants, 130 000 agglomération) combine centre historique médiéval et dynamisme universitaire. Marché attractif pour primo-accédants et investisseurs locatifs étudiants.",
    mainBanks: [
      { name: "Crédit Agricole Champagne-Bourgogne", focus: "Acteur local dominant, primo-accédants et investisseurs." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "SCI et patrimoine." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS et professions libérales." },
      { name: "CIC Est", focus: "Cadres et dossiers atypiques." },
    ],
    neighborhoods: ["Bouchon de Champagne (centre)", "Saint-Julien-les-Villas", "La Chapelle-Saint-Luc", "Saint-André-les-Vergers"],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Troyes est-elle en zone PTZ ?", a: "Troyes est classée en zone B2 du zonage PTZ 2026. Le PTZ y finance jusqu'à 40 % du neuf collectif et 20 % de l'ancien avec rénovation énergétique." },
      { q: "Quel rendement locatif viser à Troyes ?", a: "Pour un studio ou T1 étudiant proche de l'université, visez 6-7 % brut. Pour une résidence principale en centre historique, les prix au m² limitent la rentabilité à 4-5 % brut." },
    ],
  },

  // ─── Meuse (55) ──────────────────────────────────────────────────────
  {
    slug: "verdun-55",
    name: "Verdun",
    dept: "55",
    region: "Grand Est",
    postalCode: "55100",
    priceRangeM2: "1 400 – 1 900 €/m²",
    medianSaleTime: "110 jours",
    marketInsight:
      "Verdun (17 500 habitants) est marquée par son patrimoine historique et le tourisme mémoriel. Marché résidentiel calme, prix accessibles pour primo-accédants locaux et télétravailleurs.",
    mainBanks: [
      { name: "Crédit Agricole de Lorraine", focus: "Primo-accédants locaux." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Résidences principales et investisseurs." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Verdun est-elle éligible au PTZ ?", a: "Oui, en zone C : PTZ jusqu'à 20 % en ancien avec rénovation énergétique. Le neuf collectif n'est pas éligible en zone C." },
    ],
  },
  {
    slug: "bar-le-duc-55",
    name: "Bar-le-Duc",
    dept: "55",
    region: "Grand Est",
    postalCode: "55000",
    priceRangeM2: "1 300 – 1 800 €/m²",
    medianSaleTime: "120 jours",
    marketInsight:
      "Bar-le-Duc, préfecture de la Meuse (15 000 habitants), offre des prix au m² parmi les plus accessibles du Grand Est. Marché de niche pour primo-accédants modestes et télétravailleurs en quête de pouvoir d'achat.",
    mainBanks: [
      { name: "Crédit Agricole de Lorraine", focus: "Primo-accédants." },
      { name: "Crédit Mutuel", focus: "Résidents, TNS." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Investisseurs." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Peut-on acheter à Bar-le-Duc avec 150 000 € ?", a: "Oui. À 1 500 €/m² moyen, 150 000 € permettent d'acheter une maison de 80-100 m² avec jardin. Bar-le-Duc est l'une des préfectures françaises où le pouvoir d'achat immobilier est le plus élevé." },
    ],
  },

  // ─── Haute-Marne (52) ────────────────────────────────────────────────
  {
    slug: "chaumont-52",
    name: "Chaumont",
    dept: "52",
    region: "Grand Est",
    postalCode: "52000",
    priceRangeM2: "1 200 – 1 700 €/m²",
    medianSaleTime: "130 jours",
    marketInsight:
      "Chaumont (21 500 habitants), préfecture de la Haute-Marne, présente le marché le plus accessible du Grand Est. Idéal pour primo-accédants à budget contraint ou retraités en quête de qualité de vie à faible coût.",
    mainBanks: [
      { name: "Crédit Agricole Champagne-Bourgogne", focus: "Primo-accédants et résidents." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Investisseurs et SCI." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Chaumont est-elle en zone PTZ ?", a: "Chaumont est en zone C du zonage PTZ 2026. Le PTZ y finance uniquement l'ancien avec rénovation énergétique, jusqu'à 20 % du projet." },
    ],
  },

  // ─── Moselle (57) ────────────────────────────────────────────────────
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
      { q: "Je travaille au Luxembourg, comment financer mon achat à Metz ?", a: "Les salariés frontaliers au Luxembourg peuvent emprunter auprès de banques françaises (Crédit Mutuel, Caisse d'Épargne, Banque Populaire) avec bulletin de salaire luxembourgeois. Le taux d'endettement est calculé sur le net luxembourgeois après prise en compte de la fiscalité. Certaines banques luxembourgeoises (BGL BNP Paribas) proposent des prêts cross-border." },
      { q: "Metz est-elle intéressante pour l'investissement locatif ?", a: "Oui, en ciblant les quartiers Centre/Sablon et Queuleu pour les étudiants et jeunes cadres. Les rendements bruts atteignent 5-6 % sur les petites surfaces. La proximité Luxembourg maintient une demande locative stable." },
      { q: "Metz est-elle en zone PTZ ?", a: "Metz est en zone B1 du zonage PTZ 2026. Le PTZ y finance jusqu'à 30 % d'un neuf collectif ou d'un ancien rénové, sous conditions de ressources." },
    ],
  },
  {
    slug: "thionville-57",
    name: "Thionville",
    dept: "57",
    region: "Grand Est",
    postalCode: "57100",
    priceRangeM2: "1 900 – 2 600 €/m²",
    medianSaleTime: "75 jours",
    marketInsight:
      "Thionville (40 000 habitants) est au cœur du bassin frontalier Luxembourg. Marché dominé par les cadres frontaliers aux revenus élevés, forte pression sur les prix. Rendement locatif faible mais plus-value stable.",
    mainBanks: [
      { name: "Crédit Mutuel Centre-Est Europe", focus: "Frontaliers Luxembourg en priorité." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Primo-accédants locaux." },
      { name: "BGL BNP Paribas (Luxembourg)", focus: "Financement cross-border." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Pourquoi les prix à Thionville sont-ils si élevés ?", a: "Thionville est à 25 min du Luxembourg en train. 70 % des acheteurs sont des frontaliers aux salaires nets 1,8 à 2,5× supérieurs à la moyenne française. Cette demande tend mécaniquement les prix." },
      { q: "Thionville est-elle en zone PTZ ?", a: "Thionville est en zone B2 du zonage PTZ 2026. PTZ jusqu'à 40 % en neuf collectif et 20 % en ancien rénové." },
    ],
  },

  // ─── Meurthe-et-Moselle (54) ─────────────────────────────────────────
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
      { q: "Nancy est-elle bonne pour l'investissement locatif étudiant ?", a: "Excellente. Avec 60 000 étudiants et une offre locative insuffisante dans l'hyper-centre, le rendement brut sur studio/T1 atteint 6-7 %. Les quartiers Saint-Pierre, Haussonville et Ville-Vieille sont les plus demandés." },
      { q: "Le CHU de Nancy facilite-t-il le crédit pour les médecins ?", a: "Oui. Les banques régionales (CIC Est, Caisse d'Épargne Grand Est Europe, Crédit Agricole de Lorraine) proposent des grilles dédiées aux médecins CHU et hospitaliers, avec taux préférentiels et assurance adaptée." },
      { q: "Nancy est-elle en zone PTZ ?", a: "Nancy est en zone B1 du zonage PTZ 2026. Le PTZ y finance jusqu'à 30 % d'un neuf collectif, sous conditions de ressources." },
    ],
  },
  {
    slug: "luneville-54",
    name: "Lunéville",
    dept: "54",
    region: "Grand Est",
    postalCode: "54300",
    priceRangeM2: "1 400 – 1 900 €/m²",
    medianSaleTime: "105 jours",
    marketInsight:
      "Lunéville (19 000 habitants) est à 30 min de Nancy. Marché accessible pour primo-accédants cherchant un pouvoir d'achat supérieur à la métropole nancéienne, avec trajet pendulaire quotidien.",
    mainBanks: [
      { name: "Crédit Agricole de Lorraine", focus: "Primo-accédants locaux." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Investisseurs et résidences principales." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Vaut-il mieux acheter à Lunéville ou à Nancy ?", a: "Question de budget. À Lunéville, à budget égal, vous avez 30-40 % de surface en plus. Revers de la médaille : trajet pendulaire 30 min vers Nancy pour les actifs. Le choix dépend de votre tolérance au trajet et de la nature de votre emploi." },
    ],
  },

  // ─── Vosges (88) ─────────────────────────────────────────────────────
  {
    slug: "epinal-88",
    name: "Épinal",
    dept: "88",
    region: "Grand Est",
    postalCode: "88000",
    priceRangeM2: "1 500 – 2 000 €/m²",
    medianSaleTime: "95 jours",
    marketInsight:
      "Épinal (32 000 habitants), préfecture des Vosges, combine patrimoine urbain et proximité nature. Marché stable, primo-accédants et jeunes actifs du tertiaire vosgien.",
    mainBanks: [
      { name: "Crédit Agricole Alsace Vosges", focus: "Primo-accédants et résidents." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Investisseurs." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS et chefs d'entreprise." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Épinal est-elle en zone PTZ ?", a: "Épinal est classée en zone B2 du zonage PTZ 2026. Le PTZ y finance 40 % en neuf collectif et 20 % en ancien avec travaux énergétiques." },
    ],
  },
  {
    slug: "saint-die-des-vosges-88",
    name: "Saint-Dié-des-Vosges",
    dept: "88",
    region: "Grand Est",
    postalCode: "88100",
    priceRangeM2: "1 200 – 1 700 €/m²",
    medianSaleTime: "115 jours",
    marketInsight:
      "Saint-Dié-des-Vosges (19 000 habitants) offre des prix immobiliers très accessibles dans un cadre de moyenne montagne. Marché adapté aux primo-accédants modestes et aux retraités.",
    mainBanks: [
      { name: "Crédit Agricole Alsace Vosges", focus: "Primo-accédants locaux." },
      { name: "Crédit Mutuel", focus: "Résidents." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Saint-Dié est-elle une bonne ville pour acheter sa résidence principale ?", a: "Oui pour un budget contraint. À 1 400 €/m² moyen, 140 000 € achètent une maison familiale. Attention au marché moins liquide qu'en métropole : délai de revente plus long et plus-value limitée." },
    ],
  },

  // ─── Bas-Rhin (67) ───────────────────────────────────────────────────
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
      { name: "Crédit Mutuel Sud-Europe-Méditerranée", focus: "Acteur historique alsacien, primo-accédants et cadres des institutions européennes." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Primo-accédants et SCI." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS et chefs d'entreprise." },
      { name: "CIC Est", focus: "Cadres, professions libérales, dossiers atypiques." },
      { name: "Crédit Agricole Alsace Vosges", focus: "Résidences principales et investisseurs locaux." },
    ],
    neighborhoods: ["Krutenau", "Neudorf", "Esplanade / Université", "Robertsau", "Meinau"],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Pourquoi les prix à Strasbourg sont-ils plus élevés qu'à Reims ou Metz ?", a: "Strasbourg cumule capitale européenne, économie alsacienne tertiaire et logistique rhénane, et université de rang mondial. Cette concentration d'emplois qualifiés maintient une pression à la hausse sur les prix. Le ratio prix/loyer reste néanmoins favorable à l'investissement locatif." },
      { q: "L'investissement locatif étudiant est-il rentable à Strasbourg en 2026 ?", a: "Oui. Avec 50 000 étudiants et une tension locative forte, un studio ou T1 dans les quartiers Krutenau, Esplanade ou Neudorf génère des rendements bruts de l'ordre de 5 à 6,5 %. La LMNP au régime réel y est très adaptée." },
      { q: "Strasbourg est-elle en zone PTZ ?", a: "Strasbourg est classée en zone B1 du zonage PTZ 2026. Le PTZ y finance jusqu'à 30 % en neuf collectif, sous conditions de ressources." },
    ],
  },

  // ─── Haut-Rhin (68) ──────────────────────────────────────────────────
  {
    slug: "colmar-68",
    name: "Colmar",
    dept: "68",
    region: "Grand Est",
    postalCode: "68000",
    priceRangeM2: "2 200 – 3 000 €/m²",
    medianSaleTime: "82 jours",
    marketInsight:
      "Colmar (69 000 habitants) est la 3e ville d'Alsace. Marché immobilier équilibré, centre historique prisé (patrimoine UNESCO), investissement locatif étudiant et touristique.",
    mainBanks: [
      { name: "Crédit Mutuel Sud-Europe-Méditerranée", focus: "Primo-accédants et résidents." },
      { name: "Crédit Agricole Alsace Vosges", focus: "Résidents et investisseurs." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Investisseurs et SCI." },
      { name: "Banque Populaire Alsace Lorraine Champagne", focus: "TNS et chefs d'entreprise." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Colmar est-elle en zone PTZ ?", a: "Colmar est classée en zone B1 du zonage PTZ 2026. Le PTZ y finance 30 % du neuf collectif (40 % sous plafonds bas)." },
      { q: "L'investissement touristique est-il intéressant à Colmar ?", a: "Oui. La route des vins et Noël à Colmar attirent des millions de touristes par an. La location saisonnière meublée en centre-ville génère 6-8 % brut, à condition de rester compétitif face à Airbnb." },
    ],
  },
  {
    slug: "mulhouse-68",
    name: "Mulhouse",
    dept: "68",
    region: "Grand Est",
    postalCode: "68100",
    priceRangeM2: "1 500 – 2 100 €/m²",
    medianSaleTime: "95 jours",
    marketInsight:
      "Mulhouse (108 000 habitants) offre le meilleur ratio prix/opportunités de grandes villes du Grand Est. Marché accessible pour primo-accédants et investisseurs locatifs, proximité frontière suisse (Bâle).",
    mainBanks: [
      { name: "Crédit Mutuel Sud-Europe-Méditerranée", focus: "Frontaliers Suisse, primo-accédants." },
      { name: "Caisse d'Épargne Grand Est Europe", focus: "Investisseurs et SCI." },
      { name: "Crédit Agricole Alsace Vosges", focus: "Résidents." },
    ],
    hasPhysicalAgency: false,
    localFaq: [
      { q: "Les frontaliers suisses peuvent-ils acheter à Mulhouse ?", a: "Oui. De nombreux salariés bâlois achètent à Mulhouse pour bénéficier de prix français (3-4× inférieurs à Bâle). Banques acceptantes : Crédit Mutuel Sud-Europe-Méditerranée, Caisse d'Épargne, certaines banques suisses." },
      { q: "Mulhouse est-elle en zone PTZ ?", a: "Mulhouse est en zone B1 du zonage PTZ 2026. PTZ jusqu'à 30 % en neuf collectif." },
    ],
  },
]

export function getB2CCity(slug: string): B2CCity | undefined {
  return b2cCities.find((c) => c.slug === slug)
}

export function getAllB2CSlugs(): string[] {
  return b2cCities.map((c) => c.slug)
}
