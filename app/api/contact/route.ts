import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Récupérer les données du formulaire
    const formData = await request.json()

    // Enregistrer la demande dans les logs
    console.log("=== NOUVEAU MESSAGE DE CONTACT ===")
    console.log("Date et heure:", new Date().toLocaleString("fr-FR"))
    console.log("Données du formulaire:", JSON.stringify(formData, null, 2))

    // Construire le contenu HTML de l'email
    const emailContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #e11d48; }
          .info-block { background-color: #f9fafb; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px; }
          .footer { margin-top: 30px; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Nouveau message de contact</h1>
          
          <div class="info-block">
            <p><strong>Prénom:</strong> ${formData.firstName || ""}</p>
            <p><strong>Nom:</strong> ${formData.lastName || ""}</p>
            <p><strong>Email:</strong> ${formData.email || ""}</p>
            <p><strong>Téléphone:</strong> ${formData.phone || ""}</p>
            <p><strong>Type de projet:</strong> ${formData.projectType || ""}</p>
            <p><strong>Montant souhaité:</strong> ${formData.amount || ""} €</p>
            <p><strong>Message:</strong> ${formData.message || ""}</p>
          </div>
          
          <div class="footer">
            <p>Cet email a été envoyé automatiquement par le formulaire de contact de Crédit-Plus.</p>
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
        subject: "Nouveau message de contact - Crédit-Plus",
        html: emailContent,
        reply_to: formData.email || "contact@credit-plus.fr",
      })

      if (error) {
        throw new Error(`Erreur Resend: ${error.message}`)
      }

      console.log("Email envoyé avec succès via Resend:", data)

      return NextResponse.json({
        success: true,
        message: "Votre message a été envoyé. Nous vous contacterons prochainement.",
      })
    } catch (emailError) {
      // Si l'envoi d'email échoue, enregistrer l'erreur et utiliser le mode de secours
      console.error("ERREUR lors de l'envoi de l'email:", emailError)
      console.log("Utilisation du mode de secours pour l'envoi des données")

      // Enregistrer les données complètes pour référence
      console.log("DONNÉES COMPLÈTES DU MESSAGE DE CONTACT:", {
        timestamp: new Date().toISOString(),
        ...formData,
      })

      // Retourner une réponse positive mais indiquer que l'email n'a pas été envoyé
      return NextResponse.json({
        success: true,
        message: "Votre message a été enregistré. Nous vous contacterons prochainement.",
        mode: "fallback",
      })
    }
  } catch (error) {
    console.error("ERREUR lors du traitement de la demande:", error)

    // Retourner une réponse d'erreur
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        error: String(error),
      },
      { status: 500 },
    )
  }
}
