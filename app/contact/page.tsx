import type { Metadata } from "next"
import FormSubmitContactForm from "@/components/formsubmit-contact-form"

export const metadata: Metadata = {
  title: "Contact - Crédit-Plus",
  description:
    "Contactez notre équipe pour toute question concernant vos besoins de crédit immobilier, auto, travaux ou professionnel.",
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contactez-nous</h1>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos services de
                courtage en crédit.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-600">+33 6 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@credit-plus.fr</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-600">Paris, France</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Horaires d'ouverture</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">Lundi - Vendredi</p>
                    <p className="text-gray-600">9h00 - 18h00</p>
                  </div>
                  <div>
                    <p className="font-medium">Samedi</p>
                    <p className="text-gray-600">10h00 - 16h00</p>
                  </div>
                  <div>
                    <p className="font-medium">Dimanche</p>
                    <p className="text-gray-600">Fermé</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FormSubmitContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
