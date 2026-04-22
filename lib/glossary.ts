/**
 * Glossaire — termes du crédit immobilier.
 * Cible : 60-80 entrées à terme. 5 entrées de démarrage ci-dessous.
 *
 * Chaque entrée produit :
 *   - une page `/glossaire/[slug]`
 *   - un schema JSON-LD DefinedTerm
 *   - un lien depuis les pages piliers lorsqu'un terme est mentionné
 */

export type GlossaryTerm = {
  slug: string
  term: string
  shortDef: string // 1 phrase pour affichage rapide
  longDef: string // 2-4 paragraphes pour la page dédiée
  relatedTerms?: string[] // slugs
  relatedPages?: string[] // URLs piliers pertinentes
  synonyms?: string[]
  legalRef?: string // ex: "Code de la consommation L312-2"
}

export const glossary: GlossaryTerm[] = [
  {
    slug: "taeg",
    term: "TAEG",
    synonyms: ["Taux annuel effectif global"],
    shortDef:
      "Le TAEG est le coût total d'un crédit exprimé en pourcentage annuel. Il inclut le taux nominal, l'assurance emprunteur obligatoire, les frais de dossier et de garantie.",
    longDef:
      "Le TAEG (Taux Annuel Effectif Global) est la mesure légale du coût d'un crédit en France. Il englobe tous les frais obligatoires pour obtenir et rembourser le prêt : taux nominal, primes d'assurance emprunteur exigées par la banque, frais de dossier, frais de garantie (hypothèque ou caution), et éventuels frais d'intermédiaire. Il exclut les frais facultatifs et les pénalités éventuelles.\n\nLe TAEG est plafonné par le taux d'usure, publié trimestriellement par la Banque de France. Tout prêt dont le TAEG dépasse le seuil d'usure est illégal. En 2026, le seuil d'usure sur un prêt immobilier à taux fixe de 20 ans et plus s'établit dans une fourchette de 4,5 à 5 % selon les trimestres.\n\nAttention : le TAEG est à comparer au taux nominal que les publicités mettent en avant. Un taux nominal attractif peut masquer un TAEG élevé si l'assurance groupe bancaire pèse lourd.",
    relatedTerms: ["taea", "taux-usure", "assurance-emprunteur"],
    relatedPages: ["/credit-immobilier", "/credit-immobilier/taux", "/assurance-emprunteur"],
    legalRef: "Code de la consommation L314-3 (issu de la directive européenne 2014/17/UE)",
  },
  {
    slug: "taea",
    term: "TAEA",
    synonyms: ["Taux annuel effectif de l'assurance"],
    shortDef:
      "Le TAEA exprime le coût de l'assurance emprunteur en pourcentage annuel du capital emprunté. Son affichage est obligatoire dans les offres de prêt depuis 2015.",
    longDef:
      "Le TAEA (Taux Annuel Effectif de l'Assurance) isole la part de l'assurance emprunteur dans le coût global d'un crédit. Il se lit en complément du TAEG : la différence entre TAEG et TAEA correspond aux autres frais (taux nominal, garantie, dossier).\n\nPourquoi c'est important : sur un prêt de 250 000 € sur 20 ans, un écart de 0,30 point de TAEA entre l'assurance groupe bancaire et une délégation externe représente environ 15 000 € d'économie totale.\n\nDepuis la loi Hamon (2014), puis Sapin (2017) et surtout Lemoine (2022), l'emprunteur peut changer d'assurance à tout moment. Le TAEA de l'assurance extérieure doit être équivalent ou inférieur à celui du contrat groupe pour bénéficier de la substitution — mais dans 95 % des cas, une délégation externe affiche un TAEA plus bas.",
    relatedTerms: ["taeg", "assurance-emprunteur"],
    relatedPages: ["/assurance-emprunteur", "/assurance-emprunteur/delegation", "/assurance-emprunteur/loi-lemoine"],
    legalRef: "Décret n°2014-1190 du 15 octobre 2014",
  },
  {
    slug: "hcsf",
    term: "HCSF",
    synonyms: ["Haut Conseil de Stabilité Financière"],
    shortDef:
      "Le HCSF est l'autorité macroprudentielle française. Depuis 2022, ses décisions sur le crédit immobilier sont juridiquement contraignantes pour les banques.",
    longDef:
      "Le Haut Conseil de Stabilité Financière (HCSF) est présidé par le ministre de l'Économie et regroupe le gouverneur de la Banque de France, le président de l'ACPR, celui de l'AMF et celui de l'ANC.\n\nDepuis le 1er janvier 2022, ses recommandations sur le crédit immobilier sont devenues juridiquement contraignantes via une décision publiée au Journal Officiel. Trois règles principales s'imposent aux banques :\n\n1. Taux d'endettement plafonné à **35 % des revenus nets** (assurance emprunteur incluse).\n2. Durée de crédit plafonnée à **25 ans** (27 ans avec différé de 2 ans en VEFA ou ancien avec travaux lourds).\n3. **Flexibilité 20 %** : les banques peuvent déroger à ces règles pour 20 % de leur production trimestrielle, dont 70 % doivent bénéficier à des primo-accédants ou acquéreurs de résidence principale.\n\nLe non-respect de ces règles est sanctionné par l'ACPR. Les banques suivent désormais scrupuleusement le HCSF, ce qui explique les refus de dossiers dépassant 35 % d'endettement même avec revenus élevés.",
    relatedTerms: ["taux-endettement", "primo-accedant"],
    relatedPages: ["/credit-immobilier/capacite-emprunt", "/credit-immobilier", "/outils/calcul-taux-endettement"],
    legalRef: "Décision HCSF n°D-HCSF-2021-7 (Journal Officiel du 29 septembre 2021)",
  },
  {
    slug: "ptz",
    term: "PTZ",
    synonyms: ["Prêt à Taux Zéro"],
    shortDef:
      "Le PTZ est un prêt sans intérêts accordé par l'État aux primo-accédants pour compléter le financement de leur résidence principale, sous conditions de ressources.",
    longDef:
      "Le Prêt à Taux Zéro (PTZ) est une aide publique au financement d'un premier achat de résidence principale. Il couvre une part du montant total (entre 10 et 40 %), sans intérêts et sans frais de dossier.\n\nPour en bénéficier en 2026 :\n- Être **primo-accédant** (ne pas avoir été propriétaire de sa résidence principale au cours des 2 dernières années).\n- Respecter les **plafonds de ressources** fixés selon la zone (A, B1, B2, C) et la taille du foyer.\n- Acheter une **résidence principale** (neuf collectif en zones A/B1/B2, ou ancien avec travaux de rénovation énergétique en zones B2/C).\n\nLa durée de remboursement peut atteindre 25 ans avec différé de 5 à 15 ans selon les revenus. Le PTZ se cumule obligatoirement avec un prêt principal (immobilier classique).",
    relatedTerms: ["primo-accedant", "zones-ptz", "hcsf"],
    relatedPages: ["/credit-immobilier/pret-taux-zero-ptz", "/credit-immobilier/primo-accedant", "/outils/simulation-ptz"],
    legalRef: "Arrêté du 29 décembre 2023 relatif au PTZ 2024-2027",
  },
  {
    slug: "amortissement",
    term: "Amortissement",
    shortDef:
      "L'amortissement d'un crédit est la part de la mensualité qui rembourse le capital emprunté, par opposition aux intérêts qui rémunèrent la banque.",
    longDef:
      "Dans un crédit immobilier classique à annuités constantes, chaque mensualité se décompose en une part **capital** (l'amortissement proprement dit) et une part **intérêts** (rémunération de la banque), en plus des cotisations d'assurance.\n\nAu début du crédit, la part intérêts est élevée et la part capital faible. Au fil du temps, le rapport s'inverse : les dernières années, la mensualité rembourse presque exclusivement du capital.\n\nLe **tableau d'amortissement** annexé à l'offre de prêt détaille mensualité par mensualité la décomposition capital / intérêts / assurance, ainsi que le capital restant dû à chaque échéance. Ce document est juridiquement opposable.\n\nCe déséquilibre explique pourquoi un rachat de crédit est plus rentable dans les premières années (quand le poids des intérêts est fort) que dans les dernières.",
    relatedTerms: ["tableau-amortissement", "capital-restant-du", "ira"],
    relatedPages: ["/credit-immobilier", "/outils/tableau-amortissement", "/rachat-de-credit/renegociation-pret"],
  },
]

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossary.find((t) => t.slug === slug)
}

export function getAllGlossarySlugs(): string[] {
  return glossary.map((t) => t.slug)
}
