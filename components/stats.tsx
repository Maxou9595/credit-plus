export function Stats() {
  const stats = [
    { value: "500+", label: "Dossiers financés" },
    { value: "+100", label: "Conventions bancaires" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "24h", label: "Délai de réponse" },
  ]

  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
