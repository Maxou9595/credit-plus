"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

// Données des avis mis à jour
const reviews = [
  {
    id: 1,
    name: "Sophie M.",
    date: "Il y a 2 semaines",
    rating: 5,
    content:
      "Service exceptionnel ! J'ai pu obtenir un taux bien inférieur à ce que ma banque me proposait pour mon crédit immobilier. Mon conseiller a été très réactif et professionnel tout au long du processus. Je recommande vivement Crédit-Plus !",
  },
  {
    id: 2,
    name: "Thomas D.",
    date: "Il y a 1 mois",
    rating: 5,
    content:
      "Grâce à Crédit-Plus, j'ai pu regrouper mes crédits et économiser plus de 200€ par mois sur mes mensualités. Le processus a été simple et rapide. Merci pour votre professionnalisme !",
  },
  {
    id: 3,
    name: "Marie L.",
    date: "Il y a 2 mois",
    rating: 5,
    content:
      "Très bonne expérience avec Crédit-Plus pour le financement de mes travaux de rénovation. Le conseiller a été à l'écoute de mes besoins et m'a trouvé une solution parfaitement adaptée avec un taux très compétitif.",
  },
  {
    id: 4,
    name: "Jean D.",
    date: "Il y a 3 mois",
    rating: 5,
    content:
      "Je cherchais une assurance de prêt moins chère et Crédit-Plus m'a permis d'économiser près de 40% sur mes cotisations avec les mêmes garanties. Le conseiller a pris le temps de m'expliquer toutes les options. Service au top !",
  },
  {
    id: 5,
    name: "Camille B.",
    date: "Il y a 3 mois",
    rating: 5,
    content:
      "Premier achat immobilier réussi grâce à Crédit-Plus ! En tant que jeune couple, nous avions beaucoup de questions et d'inquiétudes. Notre conseillère a été patiente et nous a guidés à chaque étape. Nous avons obtenu un excellent taux malgré un apport limité.",
  },
  {
    id: 6,
    name: "Pierre L.",
    date: "Il y a 4 mois",
    rating: 5,
    content:
      "Accompagnement exceptionnel pour mon rachat de crédit immobilier. Le conseiller était compétent et a su négocier un taux très avantageux. La procédure a été simple et efficace. Je suis pleinement satisfait !",
  },
]

// Composant pour afficher les étoiles
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={cn("h-4 w-4", i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")} />
      ))}
    </div>
  )
}

export default function GoogleReviews() {
  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)

  const displayedReviews = reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage)

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  // Note moyenne fixée à 4.9
  const averageRating = 4.9
  // Nombre total d'avis fixé à 127
  const totalReviews = 127

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-4xl font-bold">{averageRating}</span>
          <div className="flex flex-col items-start">
            <RatingStars rating={5} />
            <span className="text-sm text-gray-400">{totalReviews} avis</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <img
            src="/google-icon.png"
            alt="Google"
            className="h-5 w-5"
            width={20}
            height={20}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
          <span className="text-sm font-medium">Avis Google</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedReviews.map((review) => (
          <Card key={review.id} className="bg-[#2a3235] text-white border-none shadow-md">
            <CardContent className="p-6">
              <div className="mb-3">
                <h4 className="font-medium">{review.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <RatingStars rating={review.rating} />
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
              <p className="text-sm text-gray-200">{review.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="bg-transparent text-white border-white hover:bg-white/10"
          aria-label="Avis précédents"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            variant={index === currentPage ? "default" : "outline"}
            size="icon"
            className={cn(
              "w-2 h-2 p-0 rounded-full",
              index !== currentPage && "bg-transparent border-white hover:bg-white/10",
            )}
            onClick={() => setCurrentPage(index)}
            aria-label={`Page d'avis ${index + 1}`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="bg-transparent text-white border-white hover:bg-white/10"
          aria-label="Avis suivants"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
