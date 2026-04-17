import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politique de Confidentialité | Crédit Plus",
  description: "Politique de confidentialité et protection des données personnelles de Crédit Plus.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-background">
        <div className="bg-black text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
            <p className="text-lg text-gray-300">Protection de vos données personnelles</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Crédit Plus accorde une grande importance à la protection de vos données personnelles. Cette politique
                de confidentialité vous informe sur la manière dont nous collectons, utilisons, partageons et protégeons
                vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                loi Informatique et Libertés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Responsable du traitement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le responsable du traitement de vos données personnelles est Crédit Plus, dont le siège social est situé
                au 38 Cr Gallieni, 40100 Dax. Pour toute question relative à la protection de vos données, vous pouvez
                nous contacter à l'adresse : ctdax@credit-plus.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Données collectées</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Données d'identification : nom, prénom, date de naissance</li>
                <li>Coordonnées : adresse postale, email, numéro de téléphone</li>
                <li>Données financières : revenus, charges, situation professionnelle, patrimoine</li>
                <li>Données relatives au projet : type de bien, montant du crédit, durée souhaitée</li>
                <li>Données de navigation : adresse IP, cookies, pages visitées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Finalités du traitement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Traitement de votre demande de crédit immobilier</li>
                <li>Recherche et négociation des meilleures offres de financement</li>
                <li>Constitution et suivi de votre dossier de crédit</li>
                <li>Gestion de la relation client et service après-vente</li>
                <li>Respect de nos obligations légales et réglementaires</li>
                <li>Amélioration de nos services et de notre site internet</li>
                <li>Envoi d'informations commerciales (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Base légale du traitement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le traitement de vos données personnelles repose sur les bases légales suivantes : l'exécution du
                contrat de courtage, le respect de nos obligations légales en tant qu'IOBSP, votre consentement pour les
                communications commerciales, et notre intérêt légitime pour l'amélioration de nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Destinataires des données</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles peuvent être communiquées aux destinataires suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Établissements bancaires et organismes de crédit partenaires</li>
                <li>Compagnies d'assurance pour l'assurance emprunteur</li>
                <li>Prestataires techniques (hébergement, maintenance du site)</li>
                <li>Autorités administratives et judiciaires sur demande légale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Durée de conservation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles
                ont été collectées. Les données relatives aux demandes de crédit sont conservées pendant 5 ans à compter
                de la fin de la relation contractuelle, conformément aux obligations légales applicables aux IOBSP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données inexactes ou incomplètes</li>
                <li>Droit à l'effacement de vos données (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement de vos données</li>
                <li>Droit de retirer votre consentement à tout moment</li>
                <li>Droit de définir des directives relatives au sort de vos données après votre décès</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : ctdax@credit-plus.fr. Vous disposez
                également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Sécurité des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la
                sécurité de vos données personnelles et empêcher leur altération, leur perte ou l'accès par des tiers
                non autorisés. Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation et réaliser des
                statistiques de visite. Vous pouvez à tout moment paramétrer votre navigateur pour refuser les cookies.
                Pour plus d'informations, consultez notre politique de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
                modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à
                consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </section>

            <section>
              <p className="text-sm text-muted-foreground italic">Dernière mise à jour : Janvier 2025</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
