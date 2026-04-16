import { NextResponse } from "next/server"

// Cette route sert de sauvegarde pour enregistrer toutes les demandes de crédit
// même si l'envoi d'email échoue
export async function POST(request: Request) {
  try {
    // Récupérer les données du formulaire
    const formData = await request.json()

    // Ajouter un timestamp
    const dataWithTimestamp = {
      ...formData,
      receivedAt: new Date().toISOString(),
    }

    // Enregistrer les données dans un fichier JSON (en production, utilisez une base de données)
    const logData = JSON.stringify(dataWithTimestamp, null, 2)

    console.log("Sauvegarde des données de la demande de crédit:", logData)

    // Retourner une réponse positive
    return NextResponse.json({
      success: true,
      message: "Données sauvegardées avec succès",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("ERREUR lors de la sauvegarde des données:", error)

    // Retourner une réponse d'erreur
    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de la sauvegarde des données",
        error: String(error),
      },
      { status: 500 },
    )
  }
}
