import type { FAQQuestion } from "@/lib/types/city"

interface CityFAQProps {
  questions: FAQQuestion[]
  cityName: string
}

export function CityFAQ({ questions, cityName }: CityFAQProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Questions Fréquentes sur le Crédit Immobilier à {cityName}
      </h2>
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <details
            key={index}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 group hover:border-gray-300 transition-colors"
          >
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              <span className="text-pretty">{faq.question}</span>
              <span className="text-red-600 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▼</span>
            </summary>
            <div className="mt-4 text-gray-600 leading-relaxed text-pretty">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
