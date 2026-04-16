import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"

export default function MerciPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
          <Check className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">Merci pour votre demande !</h1>

        <p className="text-lg text-muted-foreground max-w-2xl">
          Votre demande de crédit a été enregistrée avec succès. Un de nos conseillers va étudier votre dossier et vous
          contactera dans les plus brefs délais.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 w-full max-w-xl">
          <h2 className="text-xl font-semibold mb-4">Que se passe-t-il maintenant ?</h2>

          <ul className="space-y-4 text-left">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <p>Notre équipe va analyser votre demande et préparer les meilleures options pour votre projet.</p>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <p>Un conseiller vous contactera par téléphone ou email dans un délai de 24 à 48 heures ouvrées.</p>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <p>
                Nous vous accompagnerons tout au long du processus pour concrétiser votre projet dans les meilleures
                conditions.
              </p>
            </li>
          </ul>
        </div>

        <div className="pt-4">
          <Link href="/">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
