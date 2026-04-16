"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Définition des catégories et des questions
const faqCategories = [
  {
    id: "general",
    label: "Général",
    questions: [
      {
        question: "Qu'est-ce qu'un courtier en crédit ?",
        answer:
          "Un courtier en crédit est un professionnel qui sert d'intermédiaire entre les emprunteurs et les établissements financiers. Son rôle est de trouver la meilleure offre de prêt adaptée à votre situation et à vos besoins, en négociant les conditions les plus avantageuses auprès des banques partenaires.",
      },
      {
        question: "Quels sont les avantages de passer par un courtier plutôt que directement par une banque ?",
        answer:
          "Passer par un courtier présente plusieurs avantages : gain de temps (vous n'avez pas à démarcher plusieurs banques), expertise (connaissance approfondie des offres du marché), pouvoir de négociation (meilleures conditions grâce aux partenariats), accompagnement personnalisé tout au long du processus, et souvent un taux plus avantageux que celui que vous pourriez obtenir seul.",
      },
      {
        question: "Les services d'un courtier sont-ils payants ?",
        answer:
          "Chez Crédit-Plus, notre rémunération provient principalement des commissions versées par les établissements bancaires lorsqu'un prêt est accordé. Dans certains cas, des honoraires peuvent être facturés, mais ils sont toujours clairement indiqués avant tout engagement de votre part et ne sont dus qu'en cas de succès de votre dossier.",
      },
      {
        question: "Combien de temps prend le processus de courtage ?",
        answer:
          "Le délai varie selon la complexité de votre dossier et le type de crédit demandé. En général, comptez entre 2 et 4 semaines pour un crédit à la consommation, et entre 4 et 8 semaines pour un crédit immobilier, de la première consultation jusqu'au déblocage des fonds.",
      },
      {
        question: "Quelles sont les étapes du processus de courtage ?",
        answer:
          "Le processus se déroule généralement en 6 étapes : 1) Premier contact et analyse de votre projet, 2) Constitution de votre dossier, 3) Recherche des meilleures offres auprès de nos partenaires bancaires, 4) Présentation des propositions et choix de l'offre, 5) Montage du dossier auprès de l'établissement choisi, 6) Signature de l'offre et déblocage des fonds.",
      },
      {
        question: "Quels types de crédits pouvez-vous m'aider à obtenir ?",
        answer:
          "Nous intervenons sur tous types de financements : crédits immobiliers (achat, construction, travaux), crédits à la consommation, rachats de crédits, crédits professionnels, et assurances de prêt. Notre expertise couvre l'ensemble des besoins de financement des particuliers et des professionnels.",
      },
      {
        question: "Êtes-vous un organisme agréé ?",
        answer:
          "Oui, Crédit-Plus est un courtier en opérations de banque et services de paiement (COBSP) immatriculé à l'ORIAS sous le numéro 12345678. Nous respectons toutes les obligations légales et réglementaires liées à notre activité, notamment en matière de conseil et d'information du client.",
      },
      {
        question: "Puis-je faire appel à un courtier si j'ai déjà un crédit en cours ?",
        answer:
          "Absolument. Nous pouvons vous accompagner pour renégocier vos crédits existants, effectuer un rachat de crédit pour alléger vos mensualités, ou simplement vous conseiller sur l'opportunité de conserver ou de refinancer vos prêts actuels en fonction des conditions du marché.",
      },
      {
        question: "Quelles informations dois-je préparer pour ma première rencontre avec un courtier ?",
        answer:
          "Pour une première consultation efficace, préparez : vos justificatifs d'identité, vos 3 derniers bulletins de salaire, votre dernier avis d'imposition, vos 3 derniers relevés de compte bancaire, un état de vos crédits en cours, et les détails de votre projet (montant, durée souhaitée, etc.). Plus votre dossier sera complet, plus nous pourrons vous apporter une réponse précise rapidement.",
      },
      {
        question: "Comment choisir un bon courtier en crédit ?",
        answer:
          "Vérifiez son immatriculation ORIAS, sa réputation (avis clients, recommandations), son expérience dans le domaine qui vous intéresse, la transparence de ses honoraires, et la diversité de ses partenaires bancaires. Un bon courtier doit être à l'écoute, réactif, et vous expliquer clairement chaque étape du processus.",
      },
    ],
  },
  {
    id: "mortgage",
    label: "Crédit immobilier",
    questions: [
      {
        question: "Quel est le montant minimum d'apport personnel pour un crédit immobilier ?",
        answer:
          "Il n'existe pas de montant minimum légal, mais les banques exigent généralement un apport d'au moins 10% du prix du bien. Cet apport couvre les frais de notaire (7-8% pour l'ancien, 2-3% pour le neuf) et une partie du prix d'achat. Un apport plus important (20% ou plus) vous permettra d'obtenir de meilleures conditions de taux.",
      },
      {
        question: "Quelle est la durée maximale pour un crédit immobilier ?",
        answer:
          "La durée maximale généralement proposée est de 25 ans. Dans certains cas spécifiques (primo-accédants jeunes, biens de grande valeur), elle peut être étendue jusqu'à 30 ans. Plus la durée est longue, plus les mensualités sont basses, mais plus le coût total du crédit est élevé.",
      },
      {
        question: "Quel est le taux d'endettement maximum accepté par les banques ?",
        answer:
          "Depuis janvier 2022, le taux d'endettement maximum est fixé à 35% des revenus nets avant impôt. Ce taux inclut toutes vos charges de crédit (immobilier, consommation, etc.). Les banques peuvent déroger à cette règle pour 20% de leurs dossiers, principalement pour les revenus élevés ou les primo-accédants.",
      },
      {
        question: "Puis-je obtenir un crédit immobilier sans CDI ?",
        answer:
          "Oui, c'est possible. Les banques acceptent d'autres situations professionnelles comme les CDD (si renouvelés plusieurs fois), les professions libérales, les indépendants (avec au moins 2-3 ans d'activité), ou les fonctionnaires. L'important est de démontrer la stabilité et la pérennité de vos revenus.",
      },
      {
        question: "Qu'est-ce qu'un prêt relais et comment fonctionne-t-il ?",
        answer:
          "Un prêt relais est une solution de financement temporaire qui permet d'acheter un nouveau bien immobilier avant d'avoir vendu celui que l'on possède déjà. Il finance généralement jusqu'à 70-80% de la valeur du bien à vendre, pour une durée de 1 à 2 ans. Pendant cette période, vous ne remboursez généralement que les intérêts, le capital étant remboursé lors de la vente du bien.",
      },
      {
        question: "Comment fonctionne le prêt à taux zéro (PTZ) ?",
        answer:
          "Le PTZ est un prêt sans intérêts, accordé sous conditions de ressources pour l'achat d'une première résidence principale. Son montant dépend de la zone géographique, du nombre d'occupants et du type de bien (neuf ou ancien avec travaux). Il doit être complété par d'autres prêts et permet de financer jusqu'à 40% du prix d'achat dans les zones tendues.",
      },
      {
        question: "Qu'est-ce que l'assurance emprunteur et est-elle obligatoire ?",
        answer:
          "L'assurance emprunteur protège à la fois l'emprunteur et la banque en cas de décès, invalidité, incapacité de travail ou perte d'emploi. Elle n'est pas légalement obligatoire, mais est systématiquement exigée par les banques pour les crédits immobiliers. Vous avez le droit de choisir librement votre assurance (loi Lagarde) et de la changer à tout moment (loi Lemoine).",
      },
      {
        question: "Quels sont les frais annexes à prévoir lors d'un achat immobilier ?",
        answer:
          "Outre le prix du bien, prévoyez : les frais de notaire (7-8% dans l'ancien, 2-3% dans le neuf), les frais de dossier bancaire (0,5 à 1% du montant emprunté), les frais de garantie (caution ou hypothèque), les frais d'assurance emprunteur, et éventuellement les frais d'agence immobilière si vous passez par ce canal.",
      },
      {
        question: "Puis-je renégocier mon crédit immobilier ? Quand est-ce intéressant ?",
        answer:
          "Oui, vous pouvez renégocier votre crédit immobilier à tout moment. C'est généralement intéressant lorsque l'écart entre votre taux actuel et les taux du marché est d'au moins 0,7-1%. Il faut également tenir compte du capital restant dû (idéalement supérieur à 70 000€) et de la durée restante (au moins 7 ans) pour que l'opération soit rentable malgré les frais de renégociation.",
      },
      {
        question: "Qu'est-ce qu'une clause de remboursement anticipé ?",
        answer:
          "Cette clause, présente dans tous les contrats de prêt immobilier, définit les conditions dans lesquelles vous pouvez rembourser votre crédit avant l'échéance prévue. Elle précise notamment les indemnités de remboursement anticipé (IRA), plafonnées par la loi à 6 mois d'intérêts dans la limite de 3% du capital restant dû pour les prêts immobiliers.",
      },
    ],
  },
  {
    id: "consumer",
    label: "Crédit à la consommation",
    questions: [
      {
        question: "Quelle est la différence entre un crédit affecté et un crédit personnel ?",
        answer:
          "Un crédit affecté est lié à un achat spécifique (voiture, travaux, etc.) et le déblocage des fonds se fait directement au vendeur. Si l'achat est annulé, le crédit l'est aussi. Un crédit personnel n'est pas lié à un achat particulier, les fonds sont versés sur votre compte et vous les utilisez librement. Le taux d'un crédit affecté est généralement plus avantageux.",
      },
      {
        question: "Quel est le montant maximum pour un crédit à la consommation ?",
        answer:
          "Le montant maximum légal pour un crédit à la consommation est de 75 000€. Au-delà, il s'agit d'un crédit personnel relevant de la réglementation du crédit immobilier, même s'il n'est pas destiné à financer un bien immobilier.",
      },
      {
        question: "Quelle est la durée maximale pour un crédit à la consommation ?",
        answer:
          "La durée maximale généralement proposée pour un crédit à la consommation est de 7 ans (84 mois). Pour certains crédits spécifiques comme les crédits travaux importants, elle peut aller jusqu'à 10 ans. Plus la durée est longue, plus le coût total du crédit est élevé.",
      },
      {
        question: "Puis-je rembourser mon crédit à la consommation par anticipation ?",
        answer:
          "Oui, vous pouvez rembourser partiellement ou totalement votre crédit à la consommation à tout moment. Des indemnités de remboursement anticipé peuvent s'appliquer, mais elles sont plafonnées par la loi à 1% du montant remboursé si la durée restante est supérieure à un an, et à 0,5% si elle est inférieure à un an, dans la limite de l'équivalent des intérêts que vous auriez payés.",
      },
      {
        question: "Qu'est-ce qu'un crédit renouvelable et quels sont ses risques ?",
        answer:
          "Un crédit renouvelable (ou revolving) est une réserve d'argent mise à disposition par un établissement financier, que vous pouvez utiliser selon vos besoins et qui se reconstitue au fur et à mesure de vos remboursements. Ses principaux risques sont les taux d'intérêt élevés, la facilité d'utilisation qui peut conduire au surendettement, et la durée potentiellement très longue des remboursements si vous ne payez que le minimum mensuel.",
      },
      {
        question: "Quel délai de réflexion ai-je après avoir signé une offre de crédit à la consommation ?",
        answer:
          "Pour un crédit à la consommation, vous disposez d'un délai de rétractation de 14 jours calendaires à compter de la signature de l'offre, sans avoir à justifier votre décision ni à payer de pénalités. Pour exercer ce droit, il suffit d'envoyer le formulaire de rétractation joint à votre contrat par lettre recommandée avec accusé de réception.",
      },
      {
        question: "Quels documents faut-il fournir pour une demande de crédit à la consommation ?",
        answer:
          "Les documents généralement demandés sont : une pièce d'identité en cours de validité, un justificatif de domicile de moins de 3 mois, les 3 derniers bulletins de salaire ou justificatifs de revenus, le dernier avis d'imposition, et les 3 derniers relevés de compte bancaire. Pour un crédit affecté, un devis ou bon de commande du bien à financer sera également nécessaire.",
      },
      {
        question: "Qu'est-ce que le taux annuel effectif global (TAEG) ?",
        answer:
          "Le TAEG est le taux qui représente le coût total du crédit, exprimé en pourcentage annuel. Il inclut non seulement le taux d'intérêt nominal, mais aussi tous les frais obligatoires liés au crédit (frais de dossier, assurance obligatoire, etc.). C'est ce taux qui doit être utilisé pour comparer différentes offres de crédit, car il reflète le coût réel et total du prêt.",
      },
      {
        question: "Puis-je obtenir un crédit à la consommation si je suis fiché FICP ?",
        answer:
          "Le fichage au Fichier des Incidents de remboursement des Crédits aux Particuliers (FICP) rend généralement difficile l'obtention d'un nouveau crédit auprès des établissements bancaires traditionnels. Cependant, certaines solutions existent comme le rachat de crédit adapté aux personnes fichées, ou des établissements spécialisés dans les prêts aux personnes en situation financière difficile, mais avec des conditions souvent moins avantageuses.",
      },
      {
        question: "Quelle est la différence entre un crédit in fine et un crédit amortissable ?",
        answer:
          "Dans un crédit amortissable (le plus courant), vous remboursez chaque mois une partie du capital emprunté et des intérêts. Dans un crédit in fine, vous ne remboursez que les intérêts pendant toute la durée du prêt, et le capital est remboursé en une seule fois à l'échéance. Le crédit in fine est plus rarement utilisé pour la consommation, mais peut être intéressant dans certaines stratégies patrimoniales.",
      },
    ],
  },
  {
    id: "consolidation",
    label: "Rachat de crédit",
    questions: [
      {
        question: "Qu'est-ce qu'un rachat de crédit et comment fonctionne-t-il ?",
        answer:
          "Un rachat de crédit (ou regroupement de crédits) consiste à regrouper plusieurs prêts existants (immobilier, consommation, revolving) en un seul crédit, généralement avec une durée plus longue et donc des mensualités réduites. Un nouvel organisme prêteur rachète tous vos crédits en cours et vous n'avez plus qu'une seule mensualité à rembourser, souvent plus basse que la somme de vos mensualités précédentes.",
      },
      {
        question: "Quand un rachat de crédit est-il intéressant ?",
        answer:
          "Un rachat de crédit est particulièrement intéressant dans les situations suivantes : taux d'endettement élevé (>33%), multiples crédits à gérer, présence de crédits renouvelables coûteux, baisse de revenus nécessitant de réduire les mensualités, ou opportunité de profiter de taux plus bas. L'objectif principal est généralement de diminuer le montant total des mensualités pour retrouver une situation financière plus confortable.",
      },
      {
        question: "Quels types de crédits peuvent être inclus dans un rachat ?",
        answer:
          "Tous types de crédits peuvent être inclus : crédits immobiliers, crédits à la consommation, crédits renouvelables, crédits auto, prêts travaux, et même certaines dettes comme des découverts bancaires ou des arriérés d'impôts. Il est également possible d'inclure une somme supplémentaire pour financer un nouveau projet ou constituer une trésorerie de sécurité.",
      },
      {
        question: "Quels sont les avantages et inconvénients d'un rachat de crédit ?",
        answer:
          "Avantages : réduction des mensualités, simplification de la gestion avec un seul prélèvement, possibilité de sortir d'une spirale d'endettement, et parfois réduction du coût total si des crédits à taux élevés sont rachetés. Inconvénients : allongement de la durée de remboursement, coût total potentiellement plus élevé sur la durée, frais de mise en place (dossier, garanties, indemnités de remboursement anticipé des anciens prêts).",
      },
      {
        question: "Quelle est la différence entre un rachat de crédit hypothécaire et non hypothécaire ?",
        answer:
          "Un rachat hypothécaire implique la mise en place d'une garantie sur un bien immobilier (hypothèque ou privilège de prêteur de deniers). Il permet généralement d'obtenir des taux plus avantageux et des montants plus importants, mais engendre des frais de garantie plus élevés. Un rachat non hypothécaire est garanti par une caution ou sans garantie spécifique, avec des frais moindres mais des taux souvent plus élevés et des montants plafonnés.",
      },
      {
        question: "Combien de temps dure la procédure de rachat de crédit ?",
        answer:
          "La durée varie selon la complexité du dossier et le type de rachat. Pour un rachat non hypothécaire, comptez 2 à 4 semaines entre la constitution du dossier et le déblocage des fonds. Pour un rachat hypothécaire, le délai est généralement de 6 à 10 semaines en raison des formalités notariales nécessaires pour la mise en place de la garantie immobilière.",
      },
      {
        question: "Quels documents faut-il fournir pour une demande de rachat de crédit ?",
        answer:
          "Les documents généralement demandés sont : pièce d'identité, justificatif de domicile, justificatifs de revenus (bulletins de salaire, avis d'imposition), relevés de compte des 3 derniers mois, tableaux d'amortissement ou derniers relevés de tous vos crédits en cours, et titre de propriété si vous êtes propriétaire. Pour un rachat hypothécaire, des documents supplémentaires concernant le bien immobilier seront nécessaires.",
      },
      {
        question: "Peut-on faire un rachat de crédit quand on est fiché FICP ?",
        answer:
          "Oui, c'est possible mais plus difficile. Certains établissements spécialisés proposent des solutions de rachat de crédit pour les personnes fichées FICP, généralement avec des conditions moins avantageuses (taux plus élevés, garanties supplémentaires). Le rachat peut même être une solution pour sortir du fichage en régularisant la situation d'impayés qui a conduit au fichage.",
      },
      {
        question: "Quel est le montant minimum pour un rachat de crédit ?",
        answer:
          "Pour être économiquement viable, un rachat de crédit concerne généralement un encours total minimum de 15 000 à 20 000€. En dessous de ce montant, les frais de mise en place risquent d'être disproportionnés par rapport aux économies réalisées. Pour des montants plus faibles, d'autres solutions comme la renégociation directe avec vos créanciers actuels peuvent être plus adaptées.",
      },
      {
        question: "Peut-on inclure une trésorerie supplémentaire dans un rachat de crédit ?",
        answer:
          "Oui, il est possible d'inclure une somme supplémentaire dans votre rachat de crédit, appelée « trésorerie ». Cette somme peut servir à financer un nouveau projet ou à constituer une réserve de sécurité. Le montant de cette trésorerie dépendra de votre capacité d'endettement et de la valeur du bien en garantie dans le cas d'un rachat hypothécaire.",
      },
    ],
  },
  {
    id: "insurance",
    label: "Assurance de prêt",
    questions: [
      {
        question: "Qu'est-ce que l'assurance emprunteur et quelles garanties couvre-t-elle ?",
        answer:
          "L'assurance emprunteur protège à la fois l'emprunteur et la banque en cas d'événements empêchant le remboursement du prêt. Les garanties principales sont : le décès (prise en charge du capital restant dû), l'invalidité permanente totale ou partielle, l'incapacité temporaire de travail (prise en charge des mensualités pendant l'arrêt), et parfois la perte d'emploi (en option). Chaque garantie peut être souscrite à différents niveaux de couverture (quotités).",
      },
      {
        question: "L'assurance emprunteur est-elle obligatoire ?",
        answer:
          "L'assurance emprunteur n'est pas légalement obligatoire, mais elle est systématiquement exigée par les banques pour les crédits immobiliers. Pour les crédits à la consommation, elle est généralement facultative. La banque ne peut pas refuser votre dossier uniquement pour un refus d'assurance, mais elle peut compenser ce risque supplémentaire par un taux d'intérêt plus élevé ou des garanties alternatives.",
      },
      {
        question: "Qu'est-ce que la délégation d'assurance et comment en bénéficier ?",
        answer:
          "La délégation d'assurance (ou assurance externe) consiste à souscrire une assurance emprunteur auprès d'un autre organisme que celui proposé par votre banque. Pour en bénéficier, vous devez trouver un contrat offrant des garanties au moins équivalentes à celles exigées par la banque (critères définis dans la fiche standardisée d'information). Vous pouvez exercer ce droit avant la signature du prêt (loi Lagarde), au cours de la première année (loi Hamon), ou à chaque date anniversaire (loi Lemoine).",
      },
      {
        question: "Qu'est-ce qu'une quotité d'assurance ?",
        answer:
          "La quotité représente le pourcentage du capital emprunté qui sera couvert par l'assurance pour chaque assuré. Pour un emprunteur seul, la quotité est généralement de 100%. Pour un couple co-emprunteur, chacun peut être assuré à 100% (couverture totale en cas de sinistre touchant l'un des deux) ou à 50% chacun (couverture proportionnelle). Les quotités peuvent varier selon les garanties et peuvent être adaptées à la situation de chaque emprunteur (revenus, âge, état de santé).",
      },
      {
        question: "Comment fonctionne le questionnaire de santé pour l'assurance emprunteur ?",
        answer:
          "Le questionnaire de santé permet à l'assureur d'évaluer votre état de santé et les risques associés. Vous devez y répondre avec sincérité, sous peine de nullité du contrat. Depuis la loi Lemoine (2022), ce questionnaire n'est plus exigible pour les prêts immobiliers inférieurs à 200 000€ par personne (400 000€ pour un couple) dont le terme intervient avant le 60ème anniversaire de l'emprunteur. Pour les autres cas, des dispositifs comme la convention AERAS facilitent l'accès à l'assurance pour les personnes présentant un risque aggravé de santé.",
      },
      {
        question: "Qu'est-ce que la convention AERAS ?",
        answer:
          "La convention AERAS (s'Assurer et Emprunter avec un Risque Aggravé de Santé) facilite l'accès à l'assurance et au crédit pour les personnes ayant ou ayant eu un problème grave de santé. Elle prévoit un examen approfondi à trois niveaux pour les personnes refusées au niveau standard, et inclut un « droit à l'oubli » pour certaines pathologies (notamment les cancers) après un délai défini sans rechute. Elle concerne principalement les crédits immobiliers et professionnels, mais aussi certains crédits à la consommation.",
      },
      {
        question: "Comment changer d'assurance emprunteur en cours de prêt ?",
        answer:
          "Depuis la loi Lemoine (2022), vous pouvez changer d'assurance emprunteur à tout moment, sans frais ni pénalités. La démarche consiste à : 1) Trouver un nouveau contrat avec des garanties équivalentes, 2) Signer ce nouveau contrat, 3) Envoyer une lettre de résiliation à votre assureur actuel avec les documents du nouveau contrat, 4) Attendre l'acceptation de votre banque (qui dispose de 10 jours ouvrés pour répondre). La résiliation prend effet 30 jours après la demande.",
      },
      {
        question: "Quelles économies peut-on réaliser en changeant d'assurance emprunteur ?",
        answer:
          "Les économies peuvent être substantielles, généralement entre 5 000€ et 25 000€ sur la durée totale du prêt, selon votre profil, le montant et la durée du crédit. Les contrats alternatifs proposent souvent des tarifs personnalisés selon votre âge, profession, statut fumeur/non-fumeur, etc., contrairement aux contrats groupe bancaires qui appliquent souvent des tarifs mutualisés. Les économies sont particulièrement importantes pour les jeunes emprunteurs en bonne santé, qui « subventionnent » les profils plus risqués dans les contrats groupe.",
      },
      {
        question: "Qu'est-ce que le droit à l'oubli en matière d'assurance emprunteur ?",
        answer:
          "Le droit à l'oubli permet aux personnes ayant souffert de certaines pathologies graves (notamment les cancers) de ne plus avoir à les déclarer dans le questionnaire de santé après un certain délai sans rechute. Ce délai est de 5 ans après la fin du protocole thérapeutique pour tous les cancers diagnostiqués avant 21 ans, et de 10 ans pour les autres cancers. Pour certaines pathologies spécifiques (hépatite C guérie, certains cancers à bon pronostic), des délais réduits ou une absence de surprime sont prévus par la grille de référence AERAS.",
      },
      {
        question: "Quelles sont les exclusions courantes dans les contrats d'assurance emprunteur ?",
        answer:
          "Les exclusions courantes concernent : les sinistres liés à la pratique de sports extrêmes ou dangereux, les conséquences de l'alcoolisme ou de l'usage de stupéfiants, le suicide la première année du contrat, les maladies ou accidents antérieurs à la souscription (sauf si déclarés et acceptés), les actes intentionnels, les faits de guerre civile ou étrangère. Certaines professions à risque peuvent également faire l'objet d'exclusions ou de surprimes. Il est essentiel de lire attentivement les conditions générales pour connaître précisément les exclusions de votre contrat.",
      },
    ],
  },
  {
    id: "process",
    label: "Processus",
    questions: [
      {
        question: "Quelles sont les étapes d'une demande de crédit avec un courtier ?",
        answer:
          "Le processus se déroule généralement en 6 étapes : 1) Premier contact et analyse de votre projet, 2) Constitution de votre dossier avec tous les justificatifs nécessaires, 3) Recherche des meilleures offres auprès de nos partenaires bancaires, 4) Présentation des propositions et choix de l'offre la plus adaptée, 5) Montage du dossier auprès de l'établissement choisi, 6) Signature de l'offre et déblocage des fonds. Tout au long du processus, votre courtier reste votre interlocuteur unique et défend vos intérêts.",
      },
      {
        question: "Combien de temps faut-il pour obtenir une réponse à une demande de crédit ?",
        answer:
          "Les délais varient selon le type de crédit et la complexité du dossier. Pour un crédit à la consommation, vous pouvez obtenir un accord de principe en 24-48h et une réponse définitive en 3-7 jours. Pour un crédit immobilier, comptez 7-10 jours pour un accord de principe et 3-4 semaines pour une offre définitive. Pour un rachat de crédit, les délais sont généralement de 2-3 semaines pour un rachat simple et 4-8 semaines pour un rachat hypothécaire.",
      },
      {
        question: "Comment se déroule le premier rendez-vous avec un courtier ?",
        answer:
          "Le premier rendez-vous, qui peut se faire en présentiel ou à distance, vise à comprendre votre projet et votre situation. Le courtier vous posera des questions sur vos revenus, charges, patrimoine, projets, et attentes. Il vous expliquera son rôle, ses services, et sa rémunération. Il vous indiquera les documents à fournir pour constituer votre dossier et vous donnera une première estimation de votre capacité d'emprunt et des conditions auxquelles vous pourriez prétendre. Ce rendez-vous est généralement gratuit et sans engagement.",
      },
      {
        question: "Quels documents faut-il fournir pour une demande de crédit ?",
        answer:
          "Les documents de base sont : pièce d'identité, justificatif de domicile, justificatifs de revenus (bulletins de salaire, bilan pour les indépendants), avis d'imposition, relevés de compte des 3 derniers mois, et justificatifs des crédits en cours. Pour un crédit immobilier, ajoutez : compromis de vente ou devis de construction, plans, titre de propriété pour un rachat. Pour un rachat de crédit : tableaux d'amortissement de tous vos crédits. Des documents supplémentaires peuvent être demandés selon votre situation personnelle et le type de projet.",
      },
      {
        question: "Comment le courtier sélectionne-t-il les banques partenaires ?",
        answer:
          "Le courtier sélectionne les banques en fonction de plusieurs critères : votre profil et votre projet (certaines banques sont plus réceptives à certains profils), les conditions proposées (taux, frais, assurance), la politique de crédit actuelle de la banque (qui peut varier selon les périodes), la réactivité et la qualité de service de l'établissement, et parfois la proximité géographique. L'objectif est de cibler les établissements les plus susceptibles d'accepter votre dossier aux meilleures conditions.",
      },
      {
        question: "Qu'est-ce qu'un accord de principe et quelle est sa valeur ?",
        answer:
          "Un accord de principe est une première validation de votre demande de crédit par la banque, basée sur les informations préliminaires de votre dossier. Il n'a pas de valeur contractuelle mais constitue un engagement moral de la banque. Il vous permet d'avancer dans votre projet avec plus de sérénité. Cependant, l'accord définitif reste soumis à l'analyse complète de votre dossier, à la conformité des pièces justificatives, et parfois à des conditions suspensives (comme l'expertise d'un bien immobilier).",
      },
      {
        question: "Que se passe-t-il si ma demande de crédit est refusée ?",
        answer:
          "Si votre demande est refusée, votre courtier analysera les raisons du refus et vous proposera des solutions alternatives : solliciter d'autres établissements ayant des critères différents, revoir votre projet (montant, durée), renforcer votre dossier (apport supplémentaire, co-emprunteur, garant), ou attendre une amélioration de votre situation (stabilisation professionnelle, diminution d'autres charges). Dans certains cas, un plan d'action peut être mis en place pour vous permettre de représenter un dossier plus solide quelques mois plus tard.",
      },
      {
        question: "Comment se passe la signature de l'offre de prêt ?",
        answer:
          "Une fois votre dossier accepté, la banque vous envoie une offre de prêt officielle. Pour un crédit immobilier, vous disposez d'un délai de réflexion obligatoire de 10 jours avant de pouvoir l'accepter. Pour un crédit à la consommation, vous pouvez signer immédiatement mais disposez d'un délai de rétractation de 14 jours. La signature peut se faire en agence ou par voie électronique. Votre courtier vérifie avec vous que l'offre correspond bien aux conditions négociées et vous accompagne jusqu'à la finalisation.",
      },
      {
        question: "Comment et quand les fonds sont-ils débloqués ?",
        answer:
          "Pour un crédit immobilier, les fonds sont débloqués le jour de la signature chez le notaire. Pour un crédit travaux, le déblocage peut être total ou par tranches selon l'avancement des travaux. Pour un crédit à la consommation, les fonds sont généralement versés sur votre compte 7 à 14 jours après la signature de l'offre (après le délai de rétractation). Pour un rachat de crédit, l'organisme prêteur rembourse directement vos anciens créanciers, et le solde éventuel est versé sur votre compte.",
      },
      {
        question: "Le courtier continue-t-il à m'accompagner après l'obtention du crédit ?",
        answer:
          "Oui, un bon courtier maintient la relation après la mise en place du crédit. Il reste disponible pour répondre à vos questions sur le fonctionnement de votre prêt, vous accompagner dans vos démarches administratives (comme un changement d'assurance), et vous conseiller si votre situation évolue (renégociation, rachat, nouveau projet). Chez Crédit-Plus, nous effectuons également un suivi régulier pour vous proposer des optimisations de votre crédit si les conditions du marché évoluent favorablement.",
      },
    ],
  },
  {
    id: "documents",
    label: "Documents",
    questions: [
      {
        question: "Quels sont les documents indispensables pour une demande de crédit immobilier ?",
        answer:
          "Les documents indispensables sont : pièce d'identité en cours de validité, justificatif de domicile récent, 3 derniers bulletins de salaire (ou bilans pour les indépendants), contrat de travail, 2 derniers avis d'imposition, relevés de tous vos comptes bancaires des 3 derniers mois, justificatifs des crédits en cours, compromis de vente ou devis de construction, plans du bien, et justificatifs d'apport personnel. Des documents supplémentaires peuvent être demandés selon votre situation personnelle et le type de projet immobilier.",
      },
      {
        question: "Quels justificatifs de revenus sont acceptés si je suis indépendant ou entrepreneur ?",
        answer:
          "Pour les indépendants, professions libérales et entrepreneurs, les documents généralement demandés sont : les 2 ou 3 derniers bilans complets de votre activité, les 2 ou 3 derniers avis d'imposition, un extrait K-bis de moins de 3 mois (pour les sociétés), les statuts de la société, et éventuellement une attestation de votre expert-comptable. Les banques analysent généralement la moyenne de vos revenus sur les 2 ou 3 dernières années pour évaluer leur stabilité et leur pérennité.",
      },
      {
        question: "Comment justifier un apport personnel pour un crédit immobilier ?",
        answer:
          "L'apport personnel peut être justifié par : des relevés de comptes bancaires ou d'épargne récents montrant les fonds disponibles, une attestation de donation si l'apport provient d'un don familial (avec éventuellement la déclaration fiscale correspondante), un compromis de vente si l'apport provient de la vente d'un bien immobilier, ou des justificatifs de déblocage d'épargne salariale. L'origine des fonds doit toujours être clairement établie, notamment pour les sommes importantes.",
      },
      {
        question: "Quels documents fournir pour justifier une situation particulière (divorce, expatriation, etc.) ?",
        answer:
          "Pour un divorce : jugement de divorce ou convention homologuée précisant la pension alimentaire et la garde des enfants. Pour une expatriation : contrat de travail à l'étranger, bulletins de salaire, avis d'imposition du pays de résidence. Pour un statut de frontalier : permis de travail, attestation de résidence fiscale. Pour une SCI : statuts, K-bis, bilans. Pour une résidence secondaire : justificatifs de domicile principal. Chaque situation particulière nécessite des documents spécifiques que votre courtier vous précisera.",
      },
      {
        question: "Les documents doivent-ils être traduits s'ils sont en langue étrangère ?",
        answer:
          "Oui, tous les documents en langue étrangère doivent généralement être traduits en français par un traducteur assermenté pour être acceptés par les établissements financiers français. Cela concerne notamment les contrats de travail, bulletins de salaire, avis d'imposition ou relevés bancaires étrangers. Certaines banques internationales peuvent accepter des documents en anglais, mais c'est l'exception plutôt que la règle. Prévoyez un délai et un budget supplémentaires pour ces traductions.",
      },
      {
        question: "Combien de temps les documents fournis restent-ils valables ?",
        answer:
          "La durée de validité varie selon les documents : pièce d'identité (valide à la date de la demande), justificatif de domicile (moins de 3 mois), bulletins de salaire (les 3 derniers), relevés bancaires (les 3 derniers mois), avis d'imposition (le dernier), K-bis (moins de 3 mois), compromis de vente (en cours de validité). Si votre dossier prend du temps à être finalisé, certains documents devront être actualisés. Votre courtier vous indiquera lesquels et à quel moment.",
      },
      {
        question: "Comment transmettre mes documents de manière sécurisée ?",
        answer:
          "Chez Crédit-Plus, nous proposons plusieurs options sécurisées : notre espace client en ligne avec chiffrement des données, notre application mobile dédiée, ou un lien de téléchargement sécurisé envoyé par email. Nous déconseillons l'envoi de documents sensibles par email non crypté ou par messagerie instantanée. Si vous préférez, vous pouvez également nous remettre des copies papier lors d'un rendez-vous en agence, ou nous envoyer des copies par courrier postal.",
      },
      {
        question: "Faut-il fournir les originaux ou des copies suffisent-elles ?",
        answer:
          "Dans la plupart des cas, des copies ou scans de bonne qualité sont suffisants pour l'étude de votre dossier. Certains documents peuvent nécessiter une certification conforme ou une copie certifiée (notamment pour les pièces d'identité dans certaines banques). Pour la signature finale de l'offre de prêt, des originaux peuvent être demandés. Votre courtier vous précisera les exigences spécifiques de chaque établissement concernant vos documents.",
      },
      {
        question: "Que faire si je ne peux pas fournir certains documents demandés ?",
        answer:
          "Si vous ne pouvez pas fournir un document demandé, informez-en rapidement votre courtier. Selon les cas, plusieurs solutions existent : fournir un document alternatif ayant la même valeur probante, obtenir une attestation ou une déclaration sur l'honneur (pour certains éléments), ou demander une dérogation à l'établissement prêteur. Votre courtier vous conseillera sur la meilleure approche et négociera avec la banque si nécessaire. L'important est d'être transparent et proactif dans la recherche de solutions.",
      },
      {
        question: "Comment sont protégées mes données personnelles fournies pour ma demande de crédit ?",
        answer:
          "Chez Crédit-Plus, nous respectons strictement le Règlement Général sur la Protection des Données (RGPD). Vos documents et informations sont stockés sur des serveurs sécurisés avec chiffrement des données. Nous ne les partageons qu'avec les établissements financiers nécessaires à l'étude de votre dossier, après avoir obtenu votre consentement explicite. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Notre politique de confidentialité détaillée est disponible sur notre site web ou sur simple demande.",
      },
    ],
  },
  {
    id: "rates",
    label: "Taux et conditions",
    questions: [
      {
        question: "Comment sont déterminés les taux d'intérêt des crédits immobiliers ?",
        answer:
          "Les taux d'intérêt des crédits immobiliers sont influencés par plusieurs facteurs : les taux directeurs des banques centrales, les taux des obligations d'État (OAT), la durée du prêt (plus elle est longue, plus le taux est élevé), votre profil emprunteur (revenus, stabilité professionnelle, apport, endettement), la nature du projet (résidence principale, investissement), et la politique commerciale de chaque banque. Les courtiers négocient des conditions préférentielles grâce à leur volume d'affaires et leur connaissance des barèmes bancaires.",
      },
      {
        question: "Quelle est la différence entre taux fixe et taux variable ?",
        answer:
          "Un taux fixe reste identique pendant toute la durée du prêt, garantissant des mensualités constantes et une sécurité totale face aux fluctuations du marché. Un taux variable (ou révisable) évolue périodiquement selon un indice de référence (généralement l'Euribor), à la hausse comme à la baisse. Il est généralement plus bas au départ mais comporte un risque d'augmentation des mensualités. Des variantes existent comme les taux capés (variation limitée) ou les taux mixtes (période fixe puis variable).",
      },
      {
        question: "Qu'est-ce que le TAEG et pourquoi est-il important ?",
        answer:
          "Le Taux Annuel Effectif Global (TAEG) représente le coût total du crédit exprimé en pourcentage annuel. Contrairement au taux nominal, il inclut tous les frais obligatoires liés au prêt : frais de dossier, assurance emprunteur, garanties, frais de tenue de compte obligatoire, etc. C'est le taux légal qui doit être utilisé pour comparer différentes offres de crédit, car il reflète le coût réel et total du prêt. Toute publicité ou offre de crédit doit obligatoirement mentionner le TAEG.",
      },
      {
        question: "Quels sont les frais annexes à prévoir lors d'un emprunt immobilier ?",
        answer:
          "Outre le remboursement du capital et des intérêts, prévoyez : les frais de dossier bancaire (0,5 à 1% du montant emprunté), le coût de l'assurance emprunteur (0,1 à 0,6% du capital par an selon votre profil), les frais de garantie (caution ou hypothèque, 1 à 3% du montant), les frais de notaire pour l'acte de prêt (environ 1% pour une hypothèque), et éventuellement les frais de courtage. Pour un crédit immobilier de 200 000€, ces frais peuvent représenter entre 5 000€ et 15 000€ au total.",
      },
      {
        question: "Comment négocier le meilleur taux pour mon crédit ?",
        answer:
          "Pour obtenir le meilleur taux, plusieurs stratégies sont efficaces : constituer un dossier solide (stabilité professionnelle, bonne gestion bancaire), apporter un apport personnel significatif (idéalement 10-20% minimum), réduire votre taux d'endettement en dessous de 30%, comparer plusieurs offres (c'est le rôle du courtier), négocier des conditions annexes (assurance, frais de dossier), et mettre en avant votre profil global (revenus futurs, patrimoine, potentiel de domiciliation bancaire). Un courtier expérimenté connaît les leviers de négociation spécifiques à chaque banque.",
      },
      {
        question: "Qu'est-ce qu'une assurance emprunteur à taux préférentiel et comment l'obtenir ?",
        answer:
          "Une assurance emprunteur à taux préférentiel offre des tarifs avantageux adaptés à votre profil spécifique, contrairement aux contrats groupe bancaires qui appliquent souvent des tarifs mutualisés. Pour l'obtenir, passez par la délégation d'assurance en comparant les offres de plusieurs assureurs spécialisés. Les tarifs sont particulièrement avantageux pour les profils jeunes, non-fumeurs, avec des professions peu risquées. Un courtier en assurance de prêt peut vous aider à trouver le contrat offrant le meilleur rapport garanties/prix adapté à votre situation.",
      },
      {
        question: "Comment fonctionne un prêt à paliers et quand est-il intéressant ?",
        answer:
          "Un prêt à paliers (ou prêt modulable) permet de faire varier les mensualités selon des périodes prédéfinies. Par exemple, des mensualités réduites les premières années puis augmentées ensuite. Il est particulièrement intéressant dans les situations suivantes : début de carrière avec perspective d'évolution salariale, investissement locatif avec des loyers progressifs, ou projet professionnel impliquant une baisse temporaire de revenus. Ce type de prêt permet d'adapter le remboursement à l'évolution prévisible de vos revenus et charges.",
      },
      {
        question: "Quelles sont les conditions pour bénéficier d'un Prêt à Taux Zéro (PTZ) ?",
        answer:
          "Le PTZ est réservé aux primo-accédants (personnes n'ayant pas été propriétaires de leur résidence principale au cours des deux dernières années) pour l'achat de leur résidence principale. Les conditions principales sont : respecter des plafonds de ressources basés sur le revenu fiscal de référence et la composition du foyer, acheter un logement neuf ou ancien avec travaux (selon les zones), respecter des plafonds de prix au m² selon la localisation, et occuper le logement comme résidence principale pendant au moins 6 ans. Le montant du PTZ peut financer jusqu'à 40% du prix d'achat dans les zones tendues.",
      },
      {
        question: "Comment sont calculées les indemnités de remboursement anticipé (IRA) ?",
        answer:
          "Pour les crédits immobiliers, les IRA sont plafonnées par la loi à 6 mois d'intérêts dans la limite de 3% du capital restant dû. Certaines banques proposent des conditions plus avantageuses, voire une exonération totale dans certains cas (vente suite à un changement professionnel, décès, invalidité). Pour les crédits à la consommation, les IRA sont plafonnées à 1% du montant remboursé si la durée restante est supérieure à un an, et à 0,5% si elle est inférieure à un an, dans la limite des intérêts restant dus.",
      },
      {
        question: "Quelles sont les conditions pour renégocier son crédit immobilier ?",
        answer:
          "Une renégociation est généralement intéressante lorsque l'écart entre votre taux actuel et les taux du marché est d'au moins 0,7-1%. D'autres facteurs à considérer sont : le capital restant dû (idéalement supérieur à 70 000€), la durée restante (au moins 7 ans), les frais de renégociation (dossier, garantie, IRA), et votre situation personnelle (stabilité professionnelle, capacité d'endettement). La renégociation peut se faire auprès de votre banque actuelle ou via un rachat de crédit par un nouvel établissement, selon les conditions proposées.",
      },
    ],
  },
  {
    id: "special",
    label: "Situations particulières",
    questions: [
      {
        question: "Puis-je obtenir un crédit si je suis en période d'essai ?",
        answer:
          "Oui, c'est possible mais plus difficile. Certaines banques acceptent les emprunteurs en période d'essai, particulièrement dans ces cas : CDI après CDD dans la même entreprise, métiers en tension ou profils très recherchés, période d'essai presque terminée au moment du déblocage des fonds, co-emprunteur avec une situation stable, ou apport personnel conséquent. Un courtier connaît les établissements plus souples sur ce critère et peut négocier une acceptation conditionnelle (validation définitive après la fin de la période d'essai).",
      },
      {
        question: "Comment obtenir un crédit immobilier quand on est indépendant ou entrepreneur ?",
        answer:
          "Pour les indépendants et entrepreneurs, les banques analysent généralement les 3 derniers bilans pour évaluer la stabilité et la pérennité des revenus. Les clés du succès sont : avoir au moins 2-3 ans d'activité avec des résultats stables ou en progression, présenter des bilans bien préparés avec votre expert-comptable, justifier d'une bonne gestion personnelle (épargne, absence d'incidents), apporter un apport personnel significatif (idéalement 20% minimum), et choisir un bien avec un bon potentiel. Un courtier spécialisé dans les profils d'indépendants saura valoriser votre dossier auprès des banques les plus réceptives.",
      },
      {
        question: "Est-il possible d'obtenir un crédit après 60 ans ?",
        answer:
          "Oui, l'âge n'est pas un critère d'exclusion légal. Cependant, deux contraintes principales existent : l'assurance emprunteur (plus coûteuse et parfois limitée après 60-65 ans) et l'âge de fin de prêt (généralement plafonné entre 75 et 85 ans selon les banques). Les atouts pour emprunter senior sont : un apport conséquent, un patrimoine existant, des revenus stables (retraite sécurisée), une excellente santé, ou un co-emprunteur plus jeune. Certaines solutions alternatives existent comme le crédit hypothécaire senior ou le viager.",
      },
      {
        question: "Comment obtenir un crédit avec un apport minimal ou nul ?",
        answer:
          "Emprunter sans apport est plus difficile mais possible dans certaines conditions : avoir des revenus confortables et stables, un taux d'endettement faible, une excellente gestion bancaire, un projet dans une zone où l'immobilier est dynamique, et éventuellement une garantie familiale. Certains dispositifs peuvent aider : le PTZ pour les primo-accédants, le PSLA (location-accession), certains prêts Action Logement, ou les prêts avec caution solidaire. Un courtier pourra vous orienter vers les banques qui acceptent occasionnellement le financement à 100% pour les très bons profils.",
      },
      {
        question: "Peut-on obtenir un crédit immobilier pour une résidence secondaire ?",
        answer:
          "Oui, mais les conditions sont généralement plus strictes que pour une résidence principale : apport personnel plus important (souvent 20-30% minimum), taux d'intérêt légèrement supérieur (0,2 à 0,4% de plus), durée de prêt parfois limitée, et analyse plus poussée de votre capacité d'endettement. Les banques considèrent ce type de projet comme moins prioritaire et donc plus risqué. Les atouts pour réussir sont : une situation financière solide, une résidence principale déjà remboursée ou bien avancée, et un bien dans une zone touristique attractive avec un potentiel locatif saisonnier.",
      },
      {
        question: "Comment financer un bien immobilier à l'étranger ?",
        answer:
          "Plusieurs options existent : emprunter auprès d'une banque française (possible pour certains pays européens et avec des garanties en France), emprunter auprès d'une banque locale dans le pays d'achat (souvent via des filiales de banques françaises), ou utiliser une garantie hypothécaire sur un bien en France pour financer l'achat à l'étranger. Les conditions varient considérablement selon les pays, avec généralement des apports plus importants (30-50%) et des durées plus courtes. Un courtier spécialisé dans l'international pourra vous orienter vers les solutions les plus adaptées à votre projet.",
      },
      {
        question: "Comment obtenir un crédit en étant inscrit au FICP ?",
        answer:
          "L'inscription au Fichier des Incidents de remboursement des Crédits aux Particuliers (FICP) rend généralement difficile l'obtention d'un crédit auprès des établissements bancaires traditionnels pendant la durée du fichage (jusqu'à 5 ans). Cependant, des solutions existent : le rachat de crédit adapté aux personnes fichées (avec des taux plus élevés), les établissements spécialisés dans les prêts aux personnes en situation financière difficile, le recours à un co-emprunteur ou garant solide, ou l'attente de la fin du fichage en régularisant votre situation. Un courtier spécialisé pourra vous orienter vers les solutions les plus adaptées et vous aider à préparer un dossier solide.",
      },
      {
        question: "Comment financer un bien en SCI ?",
        answer:
          "Le financement d'un bien via une Société Civile Immobilière (SCI) présente des particularités : le prêt peut être accordé soit à la SCI elle-même (avec caution personnelle des associés généralement demandée), soit aux associés personnellement qui font ensuite un apport en compte courant à la SCI. Les banques analysent la solidité financière des associés, la répartition des parts, l'objet de la SCI, et sa fiscalité. Les taux sont généralement légèrement supérieurs à ceux d'un financement personnel. Ce montage est particulièrement adapté aux investissements familiaux ou entre plusieurs investisseurs, et présente des avantages patrimoniaux et fiscaux spécifiques.",
      },
      {
        question: "Peut-on obtenir un crédit immobilier en étant non-résident ou expatrié ?",
        answer:
          "Oui, les non-résidents et expatriés peuvent obtenir un financement en France, mais avec des conditions spécifiques : apport personnel plus important (souvent 20-30% minimum), taux d'intérêt majoré (0,3 à 0,7% de plus), durée de prêt parfois limitée, et analyse approfondie des revenus en devise étrangère (avec parfois une décote appliquée). Les banques françaises ayant des réseaux internationaux et certaines banques spécialisées dans la clientèle internationale sont généralement plus ouvertes à ces profils. La souscription d'une assurance emprunteur peut également être plus complexe et nécessiter des questionnaires médicaux dans le pays de résidence.",
      },
      {
        question: "Comment financer un bien immobilier en viager ?",
        answer:
          "Le financement d'un achat en viager peut se faire de plusieurs façons : prêt personnel pour financer le bouquet (capital initial), prêt in fine où vous ne remboursez que les intérêts pendant la durée du prêt et le capital à l'échéance, ou crédit amortissable classique. Les banques sont généralement plus réticentes à financer ce type d'opération en raison de l'incertitude sur la durée du viager. Les atouts pour convaincre une banque sont : un apport conséquent pour le bouquet, une capacité à payer les rentes sans recourir à l'emprunt, et une analyse actuarielle favorable du viager. Un courtier spécialisé dans ce type d'opération pourra vous orienter vers les établissements les plus ouverts.",
      },
    ],
  },
  {
    id: "after",
    label: "Après l'obtention",
    questions: [
      {
        question: "Comment fonctionne le remboursement anticipé d'un crédit ?",
        answer:
          "Le remboursement anticipé peut être total (solde complet du prêt) ou partiel (remboursement d'une partie du capital). Pour les crédits immobiliers, vous pouvez rembourser par anticipation à tout moment, moyennant d'éventuelles indemnités de remboursement anticipé (IRA) plafonnées à 6 mois d'intérêts dans la limite de 3% du capital restant dû. La démarche consiste à adresser un courrier à votre banque en précisant le montant que vous souhaitez rembourser. Suite à un remboursement partiel, vous pouvez choisir soit de réduire la durée du prêt (même mensualité), soit de réduire les mensualités (même durée).",
      },
      {
        question: "Que faire en cas de difficulté temporaire à rembourser son crédit ?",
        answer:
          "En cas de difficulté temporaire (perte d'emploi, maladie, divorce), contactez rapidement votre banque pour trouver une solution avant l'apparition d'impayés. Plusieurs options existent : la modulation des mensualités (réduction temporaire), le report d'échéances (suspension temporaire des remboursements), l'allongement de la durée du prêt, ou la mise en jeu de l'assurance emprunteur si votre situation est couverte. Certains prêts incluent des clauses de modulation ou de suspension d'échéances. Si votre banque n'est pas coopérative, un courtier peut vous aider à renégocier ou à mettre en place un rachat de crédit pour alléger vos mensualités.",
      },
      {
        question: "Comment renégocier les conditions de son prêt immobilier ?",
        answer:
          "La renégociation peut se faire auprès de votre banque actuelle ou via un rachat par une banque concurrente. La démarche consiste à : 1) Analyser votre prêt actuel (taux, capital restant, durée, IRA), 2) Comparer avec les taux du marché, 3) Solliciter une proposition de votre banque actuelle, 4) Consulter d'autres établissements ou un courtier pour obtenir des offres concurrentes, 5) Comparer les propositions en tenant compte de tous les frais, 6) Négocier les meilleures conditions, 7) Finaliser la renégociation ou le rachat. L'opération est généralement rentable si l'écart de taux est d'au moins 0,7-1% et si la durée restante est supérieure à 7 ans.",
      },
      {
        question: "Comment changer d'assurance emprunteur après la mise en place du crédit ?",
        answer:
          "Depuis la loi Lemoine (2022), vous pouvez changer d'assurance emprunteur à tout moment, sans frais ni pénalités. La démarche est la suivante : 1) Trouver un nouveau contrat avec des garanties équivalentes à celles exigées par votre banque, 2) Signer ce nouveau contrat, 3) Envoyer une lettre de résiliation à votre assureur actuel avec les documents du nouveau contrat, 4) Attendre l'acceptation de votre banque (qui dispose de 10 jours ouvrés pour répondre). La résiliation prend effet 30 jours après la demande. Un courtier en assurance de prêt peut vous accompagner dans cette démarche pour trouver le contrat le plus adapté et gérer les aspects administratifs.",
      },
      {
        question: "Que se passe-t-il en cas de vente du bien avant la fin du crédit ?",
        answer:
          "Lors de la vente d'un bien immobilier avant la fin du crédit, plusieurs options s'offrent à vous : 1) Rembourser intégralement le prêt avec le produit de la vente (solution la plus courante), 2) Transférer le prêt sur un nouveau bien si votre contrat le permet (clause de transférabilité), 3) Conserver le prêt pour financer un autre projet si la banque l'accepte. Si le produit de la vente est insuffisant pour rembourser le capital restant dû, vous devrez combler la différence. À l'inverse, si la vente dégage une plus-value, celle-ci vous revient intégralement après remboursement du prêt et paiement des éventuelles taxes.",
      },
      {
        question: "Comment fonctionne la transférabilité d'un prêt immobilier ?",
        answer:
          "La transférabilité permet de conserver votre prêt actuel pour financer l'achat d'un nouveau bien, en conservant les mêmes conditions (taux, durée restante, assurance). Cette option n'est pas automatique et doit être prévue dans votre contrat de prêt initial. Même avec cette clause, la banque conserve un droit de regard sur le nouveau bien et peut refuser le transfert si elle juge l'opération risquée. Le transfert engendre généralement des frais (avenant, nouvelle garantie) mais reste avantageux si votre taux actuel est inférieur aux taux du marché. Cette option est particulièrement intéressante en période de hausse des taux d'intérêt.",
      },
      {
        question: "Que faire en cas de séparation ou divorce avec un crédit immobilier en cours ?",
        answer:
          "Plusieurs solutions existent : 1) Vente du bien et remboursement du crédit (solution la plus nette), 2) Rachat de la part de l'ex-conjoint par l'un des deux (nécessite une capacité d'emprunt suffisante), 3) Conservation du bien en indivision avec remboursement partagé (solution temporaire souvent complexe), 4) Transfert du prêt à un seul emprunteur (nécessite l'accord de la banque et une capacité de remboursement suffisante). Dans tous les cas, il est essentiel de formaliser l'accord dans le cadre de la procédure de divorce ou de séparation. Un courtier peut vous aider à trouver la solution de financement la plus adaptée à votre nouvelle situation.",
      },
      {
        question: "Comment optimiser fiscalement son crédit immobilier ?",
        answer:
          "Plusieurs stratégies d'optimisation fiscale existent : 1) Pour une résidence principale, les intérêts d'emprunt ne sont plus déductibles, mais certains dispositifs comme le PTZ ou l'éco-PTZ offrent des avantages indirects, 2) Pour un investissement locatif, les intérêts d'emprunt sont déductibles des revenus fonciers, ce qui peut générer un déficit imputable sur vos autres revenus dans certaines limites, 3) L'assurance emprunteur peut être déductible dans le cadre d'un investissement locatif, 4) Certains montages comme l'achat en démembrement ou via une SCI peuvent offrir des avantages fiscaux spécifiques. Un conseiller en gestion de patrimoine pourra vous proposer une stratégie personnalisée en fonction de votre situation globale.",
      },
      {
        question: "Que se passe-t-il en cas de décès de l'emprunteur ?",
        answer:
          "En cas de décès de l'emprunteur, l'assurance emprunteur prend en charge le remboursement du capital restant dû (si le contrat inclut la garantie décès et si les conditions sont remplies). Sans assurance, la dette est transmise aux héritiers qui ont deux options : accepter la succession et rembourser le prêt (en conservant ou vendant le bien), ou renoncer à la succession (ils perdent alors le bien mais aussi la dette). Pour un couple co-emprunteur, si un seul décède, le survivant reste tenu de rembourser l'intégralité du prêt, d'où l'importance d'une assurance avec une quotité adaptée pour chaque emprunteur.",
      },
      {
        question: "Comment gérer son crédit en cas de déménagement à l'étranger ?",
        answer:
          "Si vous déménagez à l'étranger avec un crédit immobilier en cours en France, plusieurs aspects sont à considérer : 1) Informer votre banque de votre nouvelle adresse et mettre en place un système de prélèvement international, 2) Tenir compte du risque de change si vos revenus seront dans une autre devise, 3) Vérifier la couverture territoriale de votre assurance emprunteur et l'adapter si nécessaire, 4) Anticiper les implications fiscales (déclaration de revenus fonciers en France si vous mettez le bien en location). Si vous vendez le bien, vous devrez rembourser le crédit par anticipation, sauf si vous disposez d'une clause de transférabilité et souhaitez acquérir un autre bien en France.",
      },
    ],
  },
]

export default function FaqAccordion() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("general")

  // Filtrer les questions en fonction du terme de recherche
  const filteredCategories = searchTerm
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

  // Compter le nombre total de questions filtrées
  const totalFilteredQuestions = filteredCategories.reduce((total, category) => total + category.questions.length, 0)

  return (
    <div className="space-y-6">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Rechercher une question..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {searchTerm && (
          <div className="text-sm text-muted-foreground mt-2">
            {totalFilteredQuestions} résultat{totalFilteredQuestions > 1 ? "s" : ""} trouvé
            {totalFilteredQuestions > 1 ? "s" : ""}
          </div>
        )}
      </div>

      {searchTerm ? (
        // Affichage des résultats de recherche
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-lg font-semibold mb-4">{category.label}</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`${category.id}-${index}`} className="border rounded-lg">
                    <AccordionTrigger className="px-4 hover:no-underline">
                      <span className="text-left">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      ) : (
        // Affichage par catégories avec onglets
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
            {faqCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                    <AccordionTrigger className="px-4 hover:no-underline">
                      <span className="text-left">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}
