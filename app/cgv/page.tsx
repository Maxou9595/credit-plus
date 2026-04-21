import Link from "next/link"
import Image from "next/image"

export default function CGVPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Link href="/">
          <Image src="/logo.png" alt="Crédit-Plus Logo" width={180} height={60} className="h-12 w-auto" />
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente</h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 1 - Définitions</h2>
          <p>Dans les présentes conditions générales de vente, les termes suivants ont la signification ci-après :</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Le Prestataire</strong> : SAS IM COURTAGE, exerçant sous le nom commercial Crédit Plus, société par
              actions simplifiée immatriculée sous le numéro SIREN 944645217, inscrite
              à l'ORIAS sous le numéro 25005566, dont le siège social est situé au 40 rue Maria Visseaux, 08110 Carignan.
            </li>
            <li>
              <strong>Le Client</strong> : toute personne physique ou morale qui sollicite les services du Prestataire.
            </li>
            <li>
              <strong>Services</strong> : prestations de courtage en crédit immobilier, rachat de crédit, prêt
              professionnel et assurance de prêt.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 2 - Objet et champ d'application</h2>
          <p>
            Les présentes conditions générales de vente (CGV) déterminent les droits et obligations des parties dans le
            cadre de la prestation de services de courtage proposée par le Prestataire au Client.
          </p>
          <p className="mt-2">
            Toute prestation accomplie par le Prestataire implique l'adhésion sans réserve du Client aux présentes CGV
            et leur acceptation complète.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 3 - Prestations de services</h2>
          <p>
            Le Prestataire propose des services de courtage en crédit immobilier, rachat de crédit, prêt professionnel
            et assurance de prêt. Ces services comprennent :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>L'étude de la situation financière du Client</li>
            <li>La recherche des meilleures offres de financement auprès des établissements bancaires partenaires</li>
            <li>L'accompagnement dans la constitution du dossier de demande de prêt</li>
            <li>La négociation des conditions de prêt avec les établissements bancaires</li>
            <li>Le suivi du dossier jusqu'à la signature de l'offre de prêt</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 4 - Tarifs et modalités de paiement</h2>
          <p>
            Les tarifs des prestations sont communiqués au Client avant toute intervention. Ils peuvent varier en
            fonction de la complexité du dossier et du type de financement recherché.
          </p>
          <p className="mt-2">Le paiement des honoraires s'effectue selon les modalités suivantes :</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Un acompte peut être demandé à la signature du mandat de recherche</li>
            <li>Le solde est dû à la signature de l'offre de prêt</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 5 - Obligations du Prestataire</h2>
          <p>Le Prestataire s'engage à :</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Mettre en œuvre tous les moyens nécessaires pour trouver la solution de financement la plus adaptée aux
              besoins du Client
            </li>
            <li>Respecter la confidentialité des informations communiquées par le Client</li>
            <li>Informer le Client de l'avancement de son dossier</li>
            <li>
              Respecter les dispositions légales et réglementaires applicables à l'activité de courtage en opérations de
              banque et services de paiement
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 6 - Obligations du Client</h2>
          <p>Le Client s'engage à :</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Fournir au Prestataire toutes les informations et documents nécessaires à l'étude de son dossier</li>
            <li>Garantir l'exactitude et la sincérité des informations communiquées</li>
            <li>
              Informer le Prestataire de tout changement de situation susceptible d'affecter sa capacité d'emprunt
            </li>
            <li>Respecter les délais convenus pour la fourniture des documents demandés</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 7 - Droit de rétractation</h2>
          <p>
            Conformément aux dispositions légales en vigueur, le Client dispose d'un délai de quatorze (14) jours à
            compter de la signature du mandat pour exercer son droit de rétractation, sans avoir à justifier de motifs
            ni à payer de pénalités.
          </p>
          <p className="mt-2">
            Pour exercer ce droit, le Client doit notifier sa décision de rétractation par lettre recommandée avec
            accusé de réception adressée au siège social du Prestataire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 8 - Protection des données personnelles</h2>
          <p>
            Les données personnelles collectées par le Prestataire sont nécessaires au traitement du dossier du Client.
            Elles sont traitées conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
            Informatique et Libertés.
          </p>
          <p className="mt-2">
            Le Client dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et
            d'opposition au traitement de ses données personnelles. Ces droits peuvent être exercés en adressant une
            demande écrite au siège social du Prestataire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 9 - Propriété intellectuelle</h2>
          <p>
            Tous les documents, études et analyses remis au Client par le Prestataire restent la propriété exclusive de
            ce dernier. Le Client s'engage à ne pas les reproduire, les communiquer ou les utiliser à d'autres fins que
            celles prévues dans le cadre de la prestation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 10 - Responsabilité</h2>
          <p>
            La responsabilité du Prestataire ne peut être engagée qu'en cas de faute prouvée dans l'exécution de ses
            obligations contractuelles. Le Prestataire ne peut être tenu responsable du refus de financement opposé par
            les établissements bancaires.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 11 - Litiges</h2>
          <p>
            En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, tout différend
            relatif à l'interprétation ou à l'exécution des présentes CGV sera soumis aux tribunaux compétents du
            ressort du siège social du Prestataire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Article 12 - Droit applicable</h2>
          <p>Les présentes CGV sont soumises au droit français.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 13 - Modification des CGV</h2>
          <p>
            Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont
            celles en vigueur à la date de signature du mandat par le Client.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          SAS IM COURTAGE — SIREN 944645217 — ORIAS 25005566 — 40 rue Maria Visseaux, 08110 Carignan
        </p>
        <p className="text-sm text-gray-600 mt-1">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
      </div>
    </main>
  )
}
