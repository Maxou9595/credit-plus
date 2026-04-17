import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Contactez-nous
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre équipe d'experts est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Nos coordonnées</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                      <a href="tel:0781736129" className="text-muted-foreground hover:text-primary transition-colors">
                        07-81-73-61-29
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:ctdax@credit-time.fr"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        ctdax@credit-time.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lundi - Vendredi : 9h - 18h</p>
                        <p>Samedi : 9h - 12h</p>
                        <p>Dimanche : Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agencies */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Nos agences</h2>

                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Carignan</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          40 rue maria visseaux
                          <br />
                          08110 Carignan
                        </p>
                        <a
                          href="/agences/carignan"
                          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                        >
                          Voir l'agence →
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Dax</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          38 Cr Gallieni
                          <br />
                          40100 Dax
                        </p>
                        <a
                          href="/agences/dax"
                          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                        >
                          Voir l'agence →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
