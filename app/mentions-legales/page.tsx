import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Mentions Légales | Crédit Plus",
  description: "Mentions légales de Crédit Plus, courtier en crédit immobilier.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-background">
        <div className="bg-black text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions Légales</h1>
            <p className="text-lg text-gray-300">Informations légales et réglementaires</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site credit-plus.com est édité par Crédit Plus, société spécialisée dans le courtage en crédit
                immobilier.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li>Raison sociale : Crédit Plus</li>
                <li>Siège social : 40 rue Maria Visseaux, 08110 Carignan</li>
                <li>Téléphone : 07-45-88-57-64</li>
                <li>Email : contact@creditplus-france.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Directeur de la publication</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le directeur de la publication du site est le représentant légal de Crédit Plus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site credit-plus.com est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
                États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Activité réglementée</h2>
              <p className="text-muted-foreground leading-relaxed">
                Crédit Plus exerce une activité de courtage en opérations de banque et en services de paiement,
                conformément à l'article L. 519-1 du Code monétaire et financier.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En tant qu'intermédiaire en opérations de banque et services de paiement (IOBSP), Crédit Plus est soumis
                au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) - 4 Place de Budapest, CS
                92459, 75436 Paris Cedex 09.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de
                Crédit Plus ou de ses partenaires. Toute reproduction, représentation, modification, publication ou
                adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
                interdite sans l'autorisation écrite préalable de Crédit Plus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Données personnelles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion
                des demandes de crédit et au suivi de la relation client. Conformément à la loi "Informatique et
                Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous
                disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous
                concernant.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@creditplus-france.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site credit-plus.com utilise des cookies pour améliorer l'expérience utilisateur et réaliser des
                statistiques de visite. Vous pouvez à tout moment désactiver ces cookies dans les paramètres de votre
                navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation de responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Crédit Plus s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
                Toutefois, Crédit Plus ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
                mises à disposition sur ce site. En conséquence, Crédit Plus décline toute responsabilité pour toute
                imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux
                français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
