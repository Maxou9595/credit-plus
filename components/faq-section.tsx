import FaqAccordion from "@/components/faq-accordion"

export function FaqSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted-foreground">Toutes les réponses à vos questions sur le courtage en crédit.</p>
        </div>
        <FaqAccordion />
      </div>
    </section>
  )
}
