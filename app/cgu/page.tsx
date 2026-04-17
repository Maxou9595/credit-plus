import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Conditions Générales d'Utilisation | Crédit Time",
  description: "Conditions générales d'utilisation du site Crédit Time.",
}

export default function CGUPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-background">
        <div className="bg-black text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
            <p className="text-lg text-gray-300">Règles d'utilisation du site credit-time.com</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et
                conditions d'utilisation du site credit-time.com ainsi que les services proposés par Crédit Time.
                L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Accès au site</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site credit-time.com est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
                Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels,
                connexion Internet, etc.) sont à sa charge. Crédit Time met en œuvre tous les moyens raisonnables à sa
                disposition pour assurer un accès de qualité au site, mais n'est tenu à aucune obligation d'y parvenir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Services proposés</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Crédit Time propose les services suivants via son site internet :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Information sur les produits de crédit immobilier</li>
                <li>Simulation de crédit immobilier en ligne</li>
                <li>Demande de financement et constitution de dossier</li>
                <li>Accompagnement personnalisé dans la recherche de financement</li>
                <li>Négociation des conditions de crédit auprès des établissements bancaires</li>
                <li>Conseil en assurance emprunteur</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Inscription et compte utilisateur</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'utilisation de certains services du site peut nécessiter la création d'un compte utilisateur. Vous
                vous engagez à fournir des informations exactes et à jour. Vous êtes responsable de la confidentialité
                de vos identifiants de connexion et de toutes les activités effectuées sous votre compte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Obligations de l'utilisateur</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">En utilisant le site, vous vous engagez à :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fournir des informations exactes, complètes et à jour</li>
                <li>Ne pas utiliser le site à des fins illégales ou frauduleuses</li>
                <li>Ne pas tenter d'accéder de manière non autorisée au site ou à ses systèmes</li>
                <li>Ne pas diffuser de contenu illicite, offensant ou contraire aux bonnes mœurs</li>
                <li>Respecter les droits de propriété intellectuelle de Crédit Time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble des éléments du site credit-time.com (structure, textes, images, logos, vidéos, etc.) est la
                propriété exclusive de Crédit Time ou de ses partenaires. Toute reproduction, représentation,
                modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen
                ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Crédit Time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Crédit Time s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site.
                Toutefois, Crédit Time ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
                mises à disposition. Les informations fournies sur le site le sont à titre indicatif et ne constituent
                pas une offre de crédit. Crédit Time ne saurait être tenu responsable des décisions prises sur la base
                des informations contenues sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Liens hypertextes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site peut contenir des liens hypertextes vers d'autres sites internet. Crédit Time n'exerce aucun
                contrôle sur ces sites et décline toute responsabilité quant à leur contenu. L'existence d'un lien vers
                un autre site ne constitue pas une validation de ce site ou de son contenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Protection des données personnelles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les données personnelles collectées via le site font l'objet d'un traitement informatique conforme au
                RGPD et à la loi Informatique et Libertés. Pour plus d'informations, consultez notre Politique de
                Confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de
                visite. En poursuivant votre navigation sur le site, vous acceptez l'utilisation de cookies. Vous pouvez
                à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Modification des CGU</h2>
              <p className="text-muted-foreground leading-relaxed">
                Crédit Time se réserve le droit de modifier les présentes CGU à tout moment. Les CGU modifiées seront
                publiées sur cette page avec une date de mise à jour. Il est recommandé de consulter régulièrement cette
                page pour prendre connaissance des éventuelles modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Droit applicable et juridiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes CGU sont régies par le droit français. En cas de litige relatif à l'interprétation ou
                l'exécution des présentes CGU, et à défaut de résolution amiable, les tribunaux français seront seuls
                compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter :
              </p>
              <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
                <li>Par email : ctdax@credit-time.fr</li>
                <li>Par téléphone : 07-81-73-61-29</li>
                <li>Par courrier : Crédit Time, 38 Cr Gallieni, 40100 Dax</li>
              </ul>
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
