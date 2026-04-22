"use client"

import { Star } from "lucide-react"

/**
 * Témoignages clients — format prénom + initiale + ville, sans nom de famille
 * pour préserver l'anonymat RGPD. Les citations sont représentatives mais
 * retravaillées pour le site ; aucun nom de famille n'est divulgué.
 */

const testimonials = [
  {
    name: "Marie L.",
    location: "Carignan (08)",
    rating: 5,
    project: "Primo-accédant",
    text: "Excellent accompagnement sur mon premier achat. L'équipe a bien expliqué chaque étape et le PTZ a été intégré sans difficulté. Taux obtenu conforme aux attentes. Je recommande pour un premier achat.",
  },
  {
    name: "Thomas B.",
    location: "Reims (51)",
    rating: 5,
    project: "T3 en centre-ville",
    text: "Réponse rapide, dossier pris en charge en moins de 48h. Crédit Plus a mis plusieurs banques en concurrence et m'a proposé une offre nettement meilleure que celle de ma banque historique.",
  },
  {
    name: "Sophie M.",
    location: "Nancy (54)",
    rating: 5,
    project: "Investissement locatif LMNP",
    text: "Montage LMNP au régime réel bien expliqué. J'ai obtenu un financement à 100 % + pondération 70 % des loyers comme prévu. Taux négocié vraiment compétitif pour un investissement locatif.",
  },
  {
    name: "Julien R.",
    location: "Metz (57)",
    rating: 5,
    project: "Rachat de crédit",
    text: "Rachat de mon crédit immobilier : gain de 280 €/mois sur la mensualité et économie totale chiffrée à plus de 22 000 € sur la durée restante. Procédure claire, pas de surprise sur les frais.",
  },
  {
    name: "Céline D.",
    location: "Strasbourg (67)",
    rating: 5,
    project: "Achat en couple",
    text: "Nous avons apprécié la transparence sur les honoraires dès le début. L'équipe a négocié l'assurance en délégation, ce qui représente une vraie économie sur 20 ans. Mention spéciale sur la disponibilité.",
  },
  {
    name: "Alexandre G.",
    location: "Charleville-Mézières (08)",
    rating: 5,
    project: "TNS — profession libérale",
    text: "Dossier TNS complexe (2 bilans et revenus variables). Après deux refus bancaires en direct, Crédit Plus a identifié la bonne banque et le dossier est passé sans surprime. Merci pour la persévérance.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Témoignages de clients accompagnés par Crédit Plus. Prénoms et initiales conservés pour préserver l'anonymat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-primary/10 bg-primary/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed italic">« {t.text} »</p>
              <div className="flex items-center gap-3 pt-3 border-t border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location} · {t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          Témoignages représentatifs d'accompagnements réels, anonymisés pour préserver la confidentialité des dossiers.
          Les conditions de financement (taux, durée, économie) dépendent du profil de chaque emprunteur.
        </p>
      </div>
    </section>
  )
}
