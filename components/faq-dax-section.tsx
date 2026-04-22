"use client"

import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"
import Link from "next/link"

interface FaqItem {
  question: string
  answer: string
  category: string
}

const faqDaxData: FaqItem[] = [
  {
    category: "Marché Immobilier à Dax",
    question: "Quel est le prix moyen de l'immobilier à Dax (40100) ?",
    answer:
      "À Dax, le prix moyen de l'immobilier se situe autour de 2 000 à 2 500 €/m² pour les appartements en centre-ville, et entre 2 200 et 2 800 €/m² pour les maisons. Ces prix restent très attractifs comparés aux grandes villes de la côte atlantique comme Biarritz ou Bayonne. Le marché dacquois est dynamique grâce à l'attractivité thermale de la ville, sa qualité de vie, et sa proximité avec l'océan (40 km). Les quartiers résidentiels calmes et les biens avec extérieur sont particulièrement recherchés. Crédit Plus Dax vous accompagne pour financer votre projet immobilier dans les meilleures conditions avec un taux actuel de 2.90%.",
  },
  {
    category: "Marché Immobilier à Dax",
    question: "Quels sont les quartiers les plus recherchés à Dax ?",
    answer:
      "À Dax, les quartiers les plus prisés sont le centre-ville historique avec ses thermes et commerces, le quartier thermal recherché pour son calme et sa proximité avec les établissements de soins, le secteur de Saubagnacq avec ses villas et espaces verts, le quartier Saint-Vincent résidentiel et familial, et les zones pavillonnaires récentes vers Yzosse et Saint-Paul-lès-Dax. Les biens proches de l'Adour et des parcs sont également très demandés. La proximité avec les écoles, les thermes, et le centre-ville sont des critères importants. Notre agence Crédit Plus au 38 Cours Gallieni connaît parfaitement le marché local et vous conseille sur les meilleurs secteurs selon votre projet et votre budget.",
  },
  {
    category: "Marché Immobilier à Dax",
    question: "Est-ce un bon moment pour acheter à Dax ?",
    answer:
      "Oui, c'est actuellement un excellent moment pour investir à Dax. Les taux de crédit immobilier sont à 2.90%, ce qui permet de financer votre projet dans de bonnes conditions. Le marché immobilier dacquois est en croissance constante grâce à l'attractivité de la ville (thermalisme, qualité de vie, emploi), mais les prix restent accessibles comparés au littoral basque. La demande est soutenue toute l'année, notamment de la part des retraités, des curistes qui s'installent, et des jeunes actifs. Les projets d'aménagement urbain (rénovation du centre-ville, développement des infrastructures) valorisent les biens. Crédit Plus Dax vous aide à saisir les meilleures opportunités du marché local avec notre expertise de plus de 10 ans.",
  },
  {
    category: "Financement Spécifique Dax",
    question: "Quel montant puis-je emprunter pour acheter à Dax ?",
    answer:
      "Avec les prix moyens pratiqués à Dax (2 000-2 500 €/m² pour un appartement, 2 200-2 800 €/m² pour une maison), vous pouvez devenir propriétaire avec un budget adapté. Par exemple, avec un revenu net mensuel de 2 500 €, vous pouvez emprunter environ 150 000 € sur 25 ans, ce qui permet d'acquérir un bel appartement T3 de 60-75 m² ou une petite maison. Pour un couple avec 4 000 € de revenus mensuels, la capacité d'emprunt atteint 240 000 €, suffisant pour une maison de 85-110 m² avec jardin. Notre simulateur en ligne vous donne une estimation personnalisée, et notre équipe au 38 Cours Gallieni affine ce calcul en fonction de votre situation et des spécificités du marché dacquois.",
  },
  {
    category: "Financement Spécifique Dax",
    question: "Puis-je bénéficier du PTZ pour acheter à Dax ?",
    answer:
      "Oui, Dax est éligible au Prêt à Taux Zéro (PTZ) en tant que commune de zone B2. Le PTZ peut financer jusqu'à 40% de votre achat dans le neuf et jusqu'à 40% dans l'ancien avec travaux (sous conditions de ressources et de travaux représentant au moins 25% du coût total). Pour un couple sans enfant avec des revenus de 37 000 €/an maximum, le PTZ peut atteindre 40 000 € pour un bien neuf de 150 000 €. C'est un avantage considérable pour les primo-accédants souhaitant s'installer à Dax. Notre agence Crédit Plus maîtrise parfaitement les conditions d'éligibilité et intègre le PTZ dans votre plan de financement pour maximiser votre capacité d'achat et concrétiser votre projet immobilier.",
  },
  {
    category: "Financement Spécifique Dax",
    question: "Quelles banques financent le mieux les projets à Dax ?",
    answer:
      "À Dax et dans les Landes, plusieurs banques sont particulièrement actives et proposent des conditions avantageuses : les banques régionales qui connaissent bien le marché local (Crédit Agricole Aquitaine, Caisse d'Épargne Aquitaine Poitou-Charentes, Banque Populaire Aquitaine Centre Atlantique), les banques nationales avec des agences à Dax et Mont-de-Marsan, et les banques en ligne pour les profils solides. Crédit Plus Dax travaille avec plus de 100 partenaires bancaires et connaît les établissements les plus compétitifs pour chaque profil et chaque type de projet. Nous négocions pour vous les meilleurs taux et conditions, en valorisant les spécificités du marché dacquois et landais auprès des banques.",
  },
  {
    category: "Types de Biens à Dax",
    question: "Quels types d'appartements trouve-t-on à Dax ?",
    answer:
      "À Dax, l'offre d'appartements est variée : studios et T1 (25-35 m²) pour étudiants et investisseurs (60 000-80 000 €), T2 (40-50 m²) très demandés par les curistes et jeunes actifs (80 000-120 000 €), T3 (60-75 m²) idéaux pour couples et petites familles (120 000-180 000 €), T4 et plus (80-100 m²) pour familles (180 000-250 000 €), et appartements de standing avec terrasse et parking. Le centre-ville thermal et les résidences récentes sont les plus recherchés. Les appartements avec balcon ou terrasse se valorisent mieux. Crédit Plus Dax vous accompagne dans le financement de votre appartement avec les meilleures conditions bancaires.",
  },
  {
    category: "Types de Biens à Dax",
    question: "Quels types de maisons trouve-t-on à Dax ?",
    answer:
      "À Dax, l'offre de maisons est riche : maisons landaises traditionnelles avec colombages et jardin (150 000-280 000 €), villas modernes avec piscine dans les quartiers résidentiels (280 000-450 000 €), maisons de ville en pierre du centre historique (180 000-320 000 €), pavillons des années 70-90 à rénover (150 000-220 000 €), et constructions récentes aux normes BBC/RT2012 (250 000-400 000 €). Les maisons avec jardin clos et piscine sont très prisées. Les secteurs calmes proches du centre sont les plus recherchés. Crédit Plus Dax vous aide à financer la maison de vos rêves avec un montage financier optimisé.",
  },
  {
    category: "Types de Biens à Dax",
    question: "Y a-t-il des programmes neufs à Dax ?",
    answer:
      "Oui, Dax connaît un développement immobilier soutenu avec de nombreux programmes neufs : résidences en centre-ville avec commerces en rez-de-chaussée, programmes dans le quartier thermal avec services haut de gamme, lotissements de maisons individuelles en périphérie (Yzosse, Saint-Paul-lès-Dax), et résidences seniors avec services. Les prix varient de 2 500 à 3 500 €/m² selon la localisation et les prestations. L'avantage du neuf : garanties constructeur, normes énergétiques performantes, frais de notaire réduits (2-3%), et éligibilité au PTZ. Crédit Plus Dax vous accompagne dans le financement de votre achat neuf avec les dispositifs Pinel, PTZ, et les meilleures conditions bancaires.",
  },
  {
    category: "Types de Biens à Dax",
    question: "Peut-on acheter un terrain à bâtir à Dax ?",
    answer:
      "Oui, des terrains à bâtir sont disponibles à Dax et dans les communes limitrophes (Saint-Paul-lès-Dax, Yzosse, Oeyreluy, Saugnac-et-Cambran). Les prix varient de 80 à 150 €/m² selon la localisation, la viabilisation, et la proximité du centre. Pour un terrain de 500 m², comptez 40 000 à 75 000 €. Les terrains proches de Dax sont plus chers mais offrent une meilleure valorisation. Le financement d'une construction se fait en deux temps avec déblocage progressif. Crédit Plus Dax maîtrise parfaitement le financement des projets de construction avec le CCMI, et vous aide à optimiser votre plan de financement terrain + construction pour réaliser la maison de vos rêves.",
  },
  {
    category: "Profils d'Acheteurs",
    question: "Dax est-elle adaptée aux primo-accédants ?",
    answer:
      "Oui, Dax offre de belles opportunités pour les primo-accédants : appartements T2-T3 accessibles dès 100 000-150 000 €, éligibilité au PTZ qui peut financer jusqu'à 40% de votre achat, marché dynamique avec de nombreuses offres, et qualité de vie exceptionnelle. Avec un apport de 10 000-15 000 € et des revenus de 2 500 €/mois, vous pouvez devenir propriétaire d'un bel appartement ou d'une petite maison. Les banques sont favorables aux projets sur Dax car le marché est porteur. Notre agence Crédit Plus accompagne spécifiquement les primo-accédants avec un montage de dossier optimisé (PTZ, prêt Action Logement, prêts aidés) pour concrétiser votre rêve de propriété.",
  },
  {
    category: "Profils d'Acheteurs",
    question: "Dax attire-t-elle les retraités ?",
    answer:
      "Absolument ! Dax est une destination privilégiée pour les retraités grâce à son climat doux, ses thermes réputés (soins et bien-être), sa qualité de vie exceptionnelle, ses services de santé de qualité (hôpital, cliniques, nombreux médecins), sa vie culturelle riche, et sa proximité avec l'océan et l'Espagne. De nombreux retraités s'installent à Dax pour profiter de leur retraite dans un cadre agréable. Les appartements de plain-pied et les maisons avec jardin sans étage sont très recherchés. Le financement est possible jusqu'à 75 ans et au-delà. Crédit Plus Dax accompagne les seniors dans leur projet immobilier avec des solutions adaptées à leur situation (revenus de retraite, durée de prêt optimisée, assurance emprunteur senior).",
  },
  {
    category: "Profils d'Acheteurs",
    question: "Dax est-elle attractive pour les investisseurs ?",
    answer:
      "Oui, Dax est très attractive pour l'investissement immobilier grâce à une demande locative forte et constante (curistes, étudiants, professionnels de santé, touristes), un marché dynamique avec valorisation régulière des biens, des rendements locatifs intéressants (5-7% brut), et des dispositifs fiscaux avantageux (Pinel, Denormandie, LMNP). La location saisonnière fonctionne très bien grâce aux 60 000 curistes annuels. Les petits appartements (T1-T2) en centre-ville et quartier thermal sont les plus rentables. Crédit Plus Dax accompagne les investisseurs dans le montage financier et fiscal de leur projet pour optimiser rentabilité et défiscalisation.",
  },
  {
    category: "Situations Spécifiques",
    question: "Comment financer un achat immobilier après un divorce à Dax ?",
    answer:
      "Après un divorce, plusieurs situations se présentent à Dax : rachat de la part de l'ex-conjoint (soulte), vente du bien commun et nouvel achat, ou premier achat en tant que célibataire. Les prix dacquois permettent de se reloger confortablement même avec un seul revenu. Pour un rachat de soulte, la banque finance la part de l'ex-conjoint plus les frais. Pour un nouvel achat, votre capacité d'emprunt est recalculée sur vos seuls revenus. Les pensions alimentaires reçues peuvent être prises en compte. Crédit Plus Dax accompagne avec sensibilité les personnes divorcées, analyse votre situation post-divorce, et trouve les meilleures solutions de financement pour votre nouveau départ.",
  },
  {
    category: "Situations Spécifiques",
    question: "Peut-on acheter à Dax avec un CDD ou en intérim ?",
    answer:
      "Oui, il est possible d'acheter à Dax avec un CDD ou en intérim, notamment dans le secteur thermal et touristique où ces contrats sont fréquents. Les banques demandent généralement : une ancienneté significative dans le secteur (2-3 ans), un historique de missions régulières, ou une promesse d'embauche en CDI. Un apport personnel conséquent (15-20%) renforce le dossier. À Dax, le marché dynamique et les prix variés permettent de trouver des biens adaptés à tous les budgets. Certaines banques régionales sont plus souples. Crédit Plus Dax connaît les établissements qui financent les profils atypiques et monte votre dossier pour maximiser vos chances d'obtenir votre crédit immobilier.",
  },
  {
    category: "Situations Spécifiques",
    question: "Comment financer un achat immobilier en étant auto-entrepreneur à Dax ?",
    answer:
      "En tant qu'auto-entrepreneur à Dax, l'achat immobilier est possible avec une bonne préparation. Les banques demandent généralement 2-3 ans d'activité avec des revenus stables, vos 2-3 derniers bilans/déclarations fiscales, et un apport personnel (10-15% minimum). Vos revenus sont lissés sur 2-3 ans. À Dax, de nombreux auto-entrepreneurs travaillent dans le thermalisme, le tourisme, et les services. Le marché immobilier varié permet de trouver des biens adaptés à votre budget. Crédit Plus Dax accompagne régulièrement des travailleurs indépendants, connaît les banques qui financent les auto-entrepreneurs, et optimise la présentation de vos revenus pour maximiser votre capacité d'emprunt.",
  },
  {
    category: "Investissement et Fiscalité",
    question: "Quel rendement locatif espérer à Dax ?",
    answer:
      "À Dax, le rendement locatif brut peut atteindre 5-7% pour des biens bien situés. Par exemple, un T2 de 45 m² acheté 100 000 € et loué 550 €/mois génère un rendement brut de 6,6%. Les studios et T2 en centre-ville et quartier thermal sont les plus rentables. La location meublée aux curistes permet des loyers plus élevés (10-20% de plus). La location saisonnière peut générer des rendements de 8-10% mais demande plus de gestion. Les charges (taxe foncière, copropriété, entretien) sont à déduire pour calculer le rendement net. En LMNP, vous bénéficiez d'avantages fiscaux importants. Crédit Plus Dax vous accompagne dans le montage financier de votre investissement locatif pour optimiser votre rentabilité.",
  },
  {
    category: "Investissement et Fiscalité",
    question: "Le dispositif Pinel est-il applicable à Dax ?",
    answer:
      "Oui, Dax est éligible au dispositif Pinel en zone B2, permettant une réduction d'impôt de 12% sur 6 ans, 18% sur 9 ans, ou 21% sur 12 ans. Pour un appartement neuf de 200 000 €, vous pouvez défiscaliser jusqu'à 42 000 € sur 12 ans. Les conditions : acheter un logement neuf ou en VEFA, le louer nu pendant 6, 9 ou 12 ans, respecter des plafonds de loyers et de ressources des locataires. À Dax, plusieurs programmes neufs sont éligibles Pinel. C'est une excellente opportunité pour investir tout en réduisant vos impôts. Crédit Plus Dax vous accompagne dans le montage financier et fiscal de votre investissement Pinel pour optimiser votre défiscalisation.",
  },
  {
    category: "Investissement et Fiscalité",
    question: "Quels sont les avantages de la location meublée à Dax ?",
    answer:
      "La location meublée à Dax offre de nombreux avantages : loyers plus élevés de 10-20% par rapport à la location nue, demande forte des curistes et touristes, flexibilité (baux de courte durée), et fiscalité avantageuse avec le statut LMNP (Loueur Meublé Non Professionnel). En LMNP, vous amortissez le bien et les meubles, récupérez la TVA sur le neuf, et pouvez être imposé au régime réel avec déduction de toutes les charges. Pour un T2 meublé loué 650 €/mois, vous générez 7 800 €/an avec une fiscalité optimisée. Crédit Plus Dax vous accompagne dans le montage financier de votre investissement en meublé et vous met en relation avec des experts-comptables spécialisés.",
  },
  {
    category: "Comparaisons Locales",
    question: "Pourquoi acheter à Dax plutôt qu'à Bayonne ou Biarritz ?",
    answer:
      "Dax offre plusieurs avantages par rapport à Bayonne et Biarritz : des prix immobiliers 30-50% moins chers (2 000-2 500 €/m² vs 3 500-5 000 €/m² à Bayonne et 5 000-8 000 €/m² à Biarritz), une qualité de vie exceptionnelle avec moins de tourisme de masse, un climat tout aussi agréable, des thermes réputés, et une proximité avec l'océan (40 km, 30 minutes). Pour le même budget, vous achetez une grande maison avec jardin à Dax contre un petit appartement à Biarritz. Le marché dacquois offre un meilleur rapport qualité-prix et un potentiel de valorisation intéressant. Crédit Plus Dax vous aide à comparer objectivement et à financer votre projet dans les meilleures conditions.",
  },
  {
    category: "Comparaisons Locales",
    question: "Dax ou Mont-de-Marsan : où investir ?",
    answer:
      "Dax et Mont-de-Marsan sont les deux principales villes des Landes avec des profils différents. Dax offre : une attractivité thermale unique (60 000 curistes/an), une demande locative forte toute l'année, une proximité avec l'océan et le Pays Basque, et un cadre de vie exceptionnel. Mont-de-Marsan séduit par : son statut de préfecture avec plus d'emplois administratifs, une vie étudiante plus développée, et des prix légèrement plus accessibles. Pour l'investissement locatif, Dax offre une meilleure rentabilité grâce aux curistes. Pour la résidence principale, le choix dépend de vos priorités professionnelles et de vie. Crédit Plus Dax analyse votre projet et vous conseille objectivement sur la meilleure localisation.",
  },
  {
    category: "Projets et Développement",
    question: "Quels sont les projets d'aménagement à Dax ?",
    answer:
      "Dax bénéficie de nombreux projets de développement : rénovation du centre-ville et mise en valeur du patrimoine thermal, création de nouvelles résidences et programmes immobiliers, amélioration des infrastructures (voirie, transports, espaces verts), développement du pôle thermal et bien-être (nouveaux établissements, modernisation), extension de la zone commerciale, et valorisation des bords de l'Adour. Ces projets visent à renforcer l'attractivité de Dax et à améliorer la qualité de vie. Ils contribuent à la valorisation des biens immobiliers à moyen et long terme. Investir à Dax aujourd'hui, c'est profiter d'un marché dynamique avec un fort potentiel de croissance. Crédit Plus Dax vous informe sur les secteurs les plus prometteurs.",
  },
  {
    category: "Éducation et Famille",
    question: "Quelles sont les écoles disponibles à Dax ?",
    answer:
      "Dax dispose d'une offre scolaire complète et de qualité : nombreuses écoles maternelles et primaires publiques et privées dans tous les quartiers, plusieurs collèges publics et privés (Collège Lubet-Barbon, Collège Saint-Jacques de Compostelle), lycées généraux et technologiques (Lycée de Borda, Lycée Saint-Jacques de Compostelle), lycées professionnels, et enseignement supérieur (IUT des Pays de l'Adour avec formations en gestion, commerce, et informatique). La proximité des écoles est un critère important pour les familles, et les quartiers proches des établissements scolaires réputés sont très recherchés. Crédit Plus Dax vous conseille sur les meilleurs secteurs pour les familles avec enfants.",
  },
  {
    category: "Éducation et Famille",
    question: "Dax est-elle une ville familiale ?",
    answer:
      "Oui, Dax est une ville très familiale qui offre un cadre de vie idéal pour élever des enfants : environnement sûr et agréable, nombreux parcs et espaces verts (Parc Théodore Denis, bords de l'Adour), écoles de qualité à tous les niveaux, activités sportives et culturelles variées pour les jeunes (rugby, natation, danse, musique, théâtre), équipements de loisirs (piscines, stades, médiathèque, cinémas), et un tissu associatif dynamique. Les quartiers résidentiels comme Saint-Vincent, Saubagnacq, et les zones pavillonnaires sont particulièrement appréciés des familles. Les maisons avec jardin permettent aux enfants de jouer en toute sécurité. Crédit Plus Dax accompagne de nombreuses familles dans leur projet d'accession à la propriété.",
  },
  {
    category: "Transports et Mobilité",
    question: "Comment se déplacer depuis Dax ?",
    answer:
      "Dax bénéficie d'une excellente accessibilité : la gare SNCF est un nœud ferroviaire important sur l'axe Bordeaux-Hendaye avec des TER fréquents vers Bayonne (30 min), Bordeaux (1h30), et Hendaye, l'autoroute A63 est à 5 km (accès rapide vers Bordeaux, Bayonne, et l'Espagne), le réseau de bus urbains Tad'Dax dessert toute l'agglomération, et l'aéroport de Biarritz est à 50 km (1h). Pour les déplacements quotidiens, la voiture reste pratique mais le vélo se développe avec des pistes cyclables. Cette accessibilité exceptionnelle est un atout majeur pour la valorisation immobilière et la qualité de vie.",
  },
  {
    category: "Transports et Mobilité",
    question: "Y a-t-il des parkings et stationnements à Dax ?",
    answer:
      "Oui, Dax dispose de nombreux parkings : parkings publics en centre-ville (Parking Splendid, Parking des Arènes, Parking de la Gare) avec tarifs raisonnables, stationnement gratuit dans de nombreuses rues résidentielles, zones bleues en centre-ville (stationnement limité gratuit), et la plupart des résidences récentes disposent de parkings privatifs. Le stationnement est généralement facile à Dax, contrairement aux grandes villes côtières. Les biens avec garage ou parking privatif sont particulièrement recherchés et se valorisent mieux, surtout en centre-ville. Crédit Plus Dax vous conseille sur l'importance du stationnement dans votre choix de bien.",
  },
  {
    category: "Emploi et Économie",
    question: "Quelles sont les opportunités d'emploi à Dax ?",
    answer:
      "Dax offre de nombreuses opportunités d'emploi dans plusieurs secteurs : thermalisme et bien-être (établissements thermaux, spas, hôtels, emplois saisonniers et permanents), santé (hôpital, cliniques, EHPAD, professionnels de santé), tourisme et hôtellerie-restauration (hôtels, restaurants, commerces), commerce et services (grandes surfaces, commerces de proximité, services à la personne), industrie (agroalimentaire, sous-traitance aéronautique), et administration publique (sous-préfecture, services départementaux, mairie). Le taux de chômage est inférieur à la moyenne nationale. La diversité économique assure une stabilité de l'emploi. Cette dynamique économique soutient le marché immobilier local.",
  },
  {
    category: "Emploi et Économie",
    question: "Peut-on télétravailler depuis Dax ?",
    answer:
      "Oui, Dax est parfaitement adaptée au télétravail : connexion internet haut débit et fibre optique déployée dans toute la ville, cadre de vie exceptionnel propice à la concentration et au bien-être, prix immobiliers permettant d'acquérir une maison avec bureau/pièce dédiée, et qualité de vie incomparable (climat, thermes, océan à proximité). De plus en plus de télétravailleurs choisissent Dax pour s'installer, profitant de l'espace et de la douceur de vivre tout en conservant leur emploi dans une grande ville. Les maisons avec pièce supplémentaire pouvant servir de bureau sont très recherchées. Crédit Plus Dax accompagne de nombreux télétravailleurs dans leur projet d'installation et de financement immobilier.",
  },
  {
    category: "Loisirs et Culture",
    question: "Que faire à Dax en termes de loisirs et culture ?",
    answer:
      "Dax offre une vie culturelle et de loisirs très riche : événements majeurs (Fêtes de Dax en août, Toros y Salsa, Festival de Jazz), sports (rugby avec l'US Dax, golf, tennis, natation, sports nautiques sur l'Adour), culture (Atrium, théâtre, cinémas, médiathèque, musées dont le Musée de Borda), thermes et bien-être (soins thermaux, spas, massages), nature (Parc Théodore Denis, bords de l'Adour, forêt landaise, randonnées), et vie associative dynamique. La proximité avec l'océan (40 km) permet le surf et les activités balnéaires. L'Espagne est à 1h pour des escapades. C'est un équilibre parfait entre dynamisme culturel et douceur de vivre.",
  },
  {
    category: "Environnement et Cadre de Vie",
    question: "Quel est le climat à Dax ?",
    answer:
      "Dax bénéficie d'un climat océanique doux et agréable toute l'année : hivers doux (températures rarement négatives), étés chauds mais tempérés par la proximité de l'océan (25-30°C), ensoleillement généreux (plus de 2 000 heures/an), et précipitations modérées. Ce climat est idéal pour la santé et le bien-être, d'où la réputation thermale de la ville. Les saisons sont marquées mais douces, permettant de profiter des extérieurs une grande partie de l'année. C'est un atout majeur pour la qualité de vie et l'attractivité de Dax. Les biens avec terrasse, balcon, ou jardin sont particulièrement appréciés pour profiter de ce climat agréable.",
  },
  {
    category: "Environnement et Cadre de Vie",
    question: "Quel est le cadre naturel autour de Dax ?",
    answer:
      "Dax bénéficie d'un environnement naturel exceptionnel : l'Adour qui traverse la ville offre un cadre apaisant et des possibilités de promenades et sports nautiques, la forêt landaise environnante est idéale pour la randonnée et le VTT, l'océan Atlantique à 40 km (plages de Capbreton, Hossegor, Seignosse), les Pyrénées à 1h pour la montagne et le ski, et l'Espagne à 1h pour le dépaysement. La qualité de l'air est excellente. Ce cadre naturel privilégié est un atout majeur pour la qualité de vie et la santé. Les biens avec vue sur l'Adour ou proches de la nature sont particulièrement recherchés. Crédit Plus Dax vous aide à trouver et financer le bien idéal dans ce cadre exceptionnel.",
  },
  {
    category: "Questions Pratiques",
    question: "Quels sont les frais de notaire pour un achat à Dax ?",
    answer:
      "Les frais de notaire à Dax sont identiques au reste de la France : 7-8% du prix d'achat pour l'ancien (dont 5,8% de droits de mutation), et 2-3% pour le neuf (TVA réduite). Par exemple, pour un appartement de 150 000 € dans l'ancien, comptez 10 500-12 000 € de frais de notaire. Pour un bien neuf de 200 000 €, les frais seront de 4 000-6 000 €. Ces frais comprennent les droits d'enregistrement, les émoluments du notaire, et les débours (cadastre, hypothèque). Ils doivent être payés comptant le jour de la signature. Crédit Plus Dax intègre ces frais dans votre plan de financement global pour que vous ayez une vision complète de votre budget d'acquisition.",
  },
  {
    category: "Questions Pratiques",
    question: "Combien de temps pour finaliser un achat immobilier à Dax ?",
    answer:
      "Le délai moyen pour finaliser un achat immobilier à Dax est de 3 à 4 mois : recherche du bien et visites (2-6 semaines), signature du compromis de vente (J0), délai de rétractation de 10 jours, montage du dossier de crédit avec Crédit Plus (1-2 semaines), obtention de l'accord bancaire (2-3 semaines), édition de l'offre de prêt (1 semaine), délai légal de réflexion de 10 jours, et signature de l'acte authentique chez le notaire (3 mois après le compromis). Ce délai peut être plus court si votre dossier est solide et complet. Notre réactivité, notre connaissance du marché dacquois, et notre réseau bancaire permettent d'accélérer le processus. Crédit Plus Dax vous accompagne à chaque étape pour sécuriser et accélérer votre projet.",
  },
  {
    category: "Questions Pratiques",
    question: "Faut-il un apport personnel pour acheter à Dax ?",
    answer:
      "Un apport personnel est fortement recommandé mais pas toujours obligatoire. Idéalement, prévoyez 10-15% du prix d'achat pour couvrir les frais de notaire et rassurer la banque. À Dax, avec des prix moyens de 150 000-250 000 €, un apport de 15 000-30 000 € est souvent suffisant. Pour les primo-accédants avec le PTZ, l'apport peut être réduit voire nul dans certains cas. Les banques apprécient l'apport car il démontre votre capacité d'épargne et réduit leur risque. Sans apport, le financement reste possible pour les profils solides (CDI, revenus stables, pas d'endettement). Crédit Plus Dax analyse votre situation et trouve les banques qui financent avec peu ou sans apport selon votre profil.",
  },
  {
    category: "Questions Pratiques",
    question: "Peut-on négocier le prix d'un bien à Dax ?",
    answer:
      "Oui, la négociation est possible et courante à Dax. La marge de négociation dépend de plusieurs facteurs : l'état du bien (travaux à prévoir), la durée de mise en vente (bien sur le marché depuis longtemps), la motivation du vendeur (mutation, divorce, succession), et le marché local (offre/demande). En moyenne, vous pouvez négocier 5-10% du prix affiché, parfois plus pour les biens nécessitant des travaux importants. Par exemple, sur une maison affichée à 250 000 €, une offre à 235 000 € peut être acceptée. Crédit Plus Dax, grâce à sa connaissance approfondie du marché dacquois, vous conseille sur le prix juste et la stratégie de négociation. Nous travaillons avec tous les agents immobiliers locaux pour faciliter les transactions.",
  },
  {
    category: "Questions Pratiques",
    question: "Quelles sont les taxes locales à Dax ?",
    answer:
      "À Dax, les taxes locales sont dans la moyenne des villes thermales : la taxe foncière varie selon la valeur cadastrale du bien (comptez 1 000-2 000 €/an pour une maison de 100 m², 600-1 200 €/an pour un appartement de 60 m²), la taxe d'habitation a été supprimée pour les résidences principales, et la taxe d'enlèvement des ordures ménagères est incluse dans la taxe foncière. Pour un investissement locatif, ces taxes sont déductibles de vos revenus fonciers. Les charges de copropriété pour les appartements varient de 50 à 150 €/mois selon les services. Crédit Plus Dax intègre ces charges dans le calcul de votre budget global pour que vous ayez une vision complète du coût de votre projet immobilier.",
  },
  {
    category: "Questions Pratiques",
    question: "Comment se passe la vie thermale à Dax ?",
    answer:
      "La vie thermale est au cœur de l'identité dacquoise : 60 000 curistes viennent chaque année pour des cures de 3 semaines (rhumatologie, phlébologie), 15 établissements thermaux offrent des soins variés, une ambiance conviviale et animée pendant la saison thermale (mars à novembre), et des retombées économiques importantes (emplois, commerces, restaurants, hébergements). Pour les habitants, c'est un atout : dynamisme économique, services de santé de qualité, et opportunités d'investissement locatif (location meublée aux curistes très rentable). La présence thermale contribue à la valorisation immobilière, notamment dans le quartier thermal. Crédit Plus Dax vous conseille sur les opportunités d'investissement liées au thermalisme.",
  },
]

export function FaqDaxSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = Array.from(new Set(faqDaxData.map((item) => item.category)))

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Dax (40100)</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            FAQ Crédit Immobilier <span className="text-primary">Dax</span>
          </h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Toutes les réponses à vos questions sur le crédit immobilier à Dax et dans les Landes. Expertise locale
            Crédit Plus.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">{category}</h2>
            <div className="space-y-4">
              {faqDaxData
                .filter((item) => item.category === category)
                .map((item, index) => {
                  const globalIndex = faqDaxData.indexOf(item)
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
            <h2 className="text-2xl font-bold mb-4">Votre Agence Crédit Plus à Dax</h2>
            <p className="text-muted-foreground mb-2">38 Cours Gallieni, 40100 Dax</p>
            <p className="text-muted-foreground mb-2">Lundi - Vendredi : 9h-12h30 / 14h-18h</p>
            <p className="text-muted-foreground">Samedi sur rendez-vous</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0745885764"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Appeler le 07-45-88-57-64
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
