import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function GET(request: Request) {
  try {
    // Récupérer l'ID de l'email depuis les paramètres de requête
    const url = new URL(request.url)
    const emailId = url.searchParams.get("id")

    if (!emailId) {
      return NextResponse.json(
        {
          success: false,
          message: "ID d'email manquant",
        },
        { status: 400 },
      )
    }

    // Initialiser Resend avec la clé API
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Récupérer les informations de l'email
    console.log(`Récupération des informations pour l'email ID: ${emailId}`)
    const emailData = await resend.emails.get(emailId)

    return NextResponse.json({
      success: true,
      data: emailData,
    })
  } catch (error) {
    console.error("Erreur lors de la récupération des informations de l'email:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de la récupération des informations de l'email",
        error: String(error),
      },
      { status: 500 },
    )
  }
}
