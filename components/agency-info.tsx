import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"

interface AgencyInfoProps {
  address: string
  hours: string[]
  phone: string
}

export function AgencyInfo({ address, hours, phone }: AgencyInfoProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Informations pratiques
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Adresse</h3>
              <p className="text-muted-foreground leading-relaxed">{address}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Horaires</h3>
              <div className="text-muted-foreground space-y-1">
                {hours.map((hour, index) => (
                  <p key={index}>{hour}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Téléphone</h3>
              <a
                href={`tel:${phone.replace(/[\s-]/g, "")}`}
                className="text-primary hover:text-primary/80 text-xl font-semibold"
              >
                {phone}
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
