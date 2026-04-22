import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialiser Resend avec la clé API


export async function POST(request: Request) {
  try {
    // Récupérer les données du formulaire
    const resend = new Resend(process.env.RESEND_API_KEY)
    const formData = await request.json()

    // Enregistrer la demande dans les logs
    console.log("=== NOUVEAU PARRAINAGE ===")
    console.log("Date et heure:", new Date().toLocaleString("fr-FR"))
    console.log("Données du formulaire:", JSON.stringify(formData, null, 2))

    // Extraire les données du parrain et du filleul
    const parrain = formData.parrain || {}
    const filleul = formData.filleul || {}

    // Construire le contenu HTML de l'email
    const emailContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #e11d48; }
          h2 { color: #374151; margin-top: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px; }
          .info-block { background-color: #f9fafb; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px; }
          .footer { margin-top: 30px; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Nouveau parrainage</h1>
          
          <div class="info-block">
            <h2>Informations du parrain</h2>
            <p><strong>Nom:</strong> ${parrain.nom || ""}</p>
            <p><strong>Prénom:</strong> ${parrain.prenom || ""}</p>
            <p><strong>Email:</strong> ${parrain.email || ""}</p>
            <p><strong>Téléphone:</strong> ${parrain.telephone || ""}</p>
          </div>
          
          <div class="info-block">
            <h2>Informations du filleul</h2>
            <p><strong>Nom:</strong> ${filleul.nom || ""}</p>
            <p><strong>Prénom:</strong> ${filleul.prenom || ""}</p>
            <p><strong>Email:</strong> ${filleul.email || ""}</p>
            <p><strong>Téléphone:</strong> ${filleul.telephone || ""}</p>
          </div>
          
          <div class="footer">
            <p>Cet email a été envoyé automatiquement par le système de parrainage de Crédit-Plus.</p>
            <p>Date d'envoi: ${new Date().toLocaleString("fr-FR")}</p>
          </div>
        </div>
      </body>
    </html>
    `

    try {
      // Envoyer l'email avec Resend
      console.log("Tentative d'envoi d'email via Resend...")

      const { data, error } = await resend.emails.send({
        from: "Credit-Plus <onboarding@resend.dev>",
        to: ["maximeiori08@gmail.com"],
        subject: "Nouveau parrainage - Crédit-Plus",
        html: emailContent,
        reply_to: parrain.email || "contact@creditplus-france.com",
      })

      if (error) {
        throw new Error(`Erreur Resend: ${error.message}`)
      }

      console.log("Email envoyé avec succès via Resend:", data)

      return NextResponse.json({
        success: true,
        message: "Votre parrainage a été enregistré. Nous vous contacterons prochainement.",
      })
    } catch (emailError) {
      // Si l'envoi d'email échoue, enregistrer l'erreur et utiliser le mode de secours
      console.error("ERREUR lors de l'envoi de l'email:", emailError)
      console.log("Utilisation du mode de secours pour l'envoi des données")

      // Enregistrer les données complètes pour référence
      console.log("DONNÉES COMPLÈTES DU PARRAINAGE:", {
        timestamp: new Date().toISOString(),
        parrain,
        filleul,
      })

      // Retourner une réponse positive mais indiquer que l'email n'a pas été envoyé
      return NextResponse.json({
        success: true,
        message: "Votre parrainage a été enregistré. Nous vous contacterons prochainement.",
        mode: "fallback",
      })
    }
  } catch (error) {
    console.error("ERREUR lors du traitement de la demande:", error)

    // Retourner une réponse d'erreur
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de l'envoi de votre parrainage. Veuillez réessayer.",
        error: String(error),
      },
      { status: 500 },
    )
  }
}
