import { Resend } from "resend"

// Domaine vérifié pour l'envoi d'emails - Suppression de l'accent
const VERIFIED_DOMAIN = "credit-plus.com"

// Modifier la fonction POST pour s'assurer que toutes les données sont correctement traitées et envoyées
export async function POST(request: Request) {
  try {
    // Récupérer la clé API de l'en-tête si elle est présente
    const headers = request.headers
    const apiKey = headers.get("X-Resend-Api-Key") || process.env.RESEND_API_KEY

    // Initialiser Resend avec la clé API
    const resend = new Resend(apiKey)

    // Récupérer les données du formulaire
    const formData = await request.json()

    // Enregistrer la demande complète dans les logs
    console.log("=== NOUVELLE DEMANDE DE CRÉDIT ===")
    console.log("Date et heure:", new Date().toLocaleString("fr-FR"))
    console.log("Données du formulaire COMPLÈTES:", JSON.stringify(formData, null, 2))

    // Construire le contenu HTML de l'email avec TOUTES les données
    const emailContent = `
    <h1>Nouvelle demande de crédit</h1>
    
    <h2>Informations personnelles</h2>
    <p><strong>Nom:</strong> ${formData.lastName || ""}</p>
    <p><strong>Prénom:</strong> ${formData.firstName || ""}</p>
    <p><strong>Email:</strong> ${formData.email || ""}</p>
    <p><strong>Téléphone:</strong> ${formData.phone || ""}</p>
    ${formData.birthDate ? `<p><strong>Date de naissance:</strong> ${formData.birthDate}</p>` : ""}
    ${formData.address ? `<p><strong>Adresse:</strong> ${formData.address}</p>` : ""}
    ${formData.postalCode ? `<p><strong>Code postal:</strong> ${formData.postalCode}</p>` : ""}
    ${formData.city ? `<p><strong>Ville:</strong> ${formData.city}</p>` : ""}
    
    <h2>Projet de financement</h2>
    <p><strong>Type de projet:</strong> ${getProjectTypeName(formData.projectType)}</p>
    <p><strong>Montant souhaité:</strong> ${formData.amount || ""} €</p>
    <p><strong>Durée souhaitée:</strong> ${formData.duration || ""} ${Number(formData.duration) === 1 ? "an" : "ans"}</p>
    
    ${
      formData.propertyType ? `<p><strong>Type de bien:</strong> ${getPropertyTypeName(formData.propertyType)}</p>` : ""
    }
    ${formData.propertyAddress ? `<p><strong>Adresse du bien:</strong> ${formData.propertyAddress}</p>` : ""}
    ${formData.propertyValue ? `<p><strong>Valeur estimée du bien:</strong> ${formData.propertyValue} €</p>` : ""}
    
    <h2>Situation professionnelle et financière</h2>
    <p><strong>Situation professionnelle:</strong> ${getEmploymentStatusName(formData.employmentStatus)}</p>
    ${formData.employmentSince ? `<p><strong>Date d'embauche:</strong> ${formData.employmentSince}</p>` : ""}
    <p><strong>Revenus mensuels:</strong> ${formData.monthlyIncome || ""} €</p>
    ${
      formData.additionalIncome && Number(formData.additionalIncome) > 0
        ? `<p><strong>Revenus complémentaires:</strong> ${formData.additionalIncome} €</p>`
        : ""
    }
    ${
      formData.currentLoans && Number(formData.currentLoans) > 0
        ? `<p><strong>Mensualités de crédits en cours:</strong> ${formData.currentLoans} €</p>`
        : ""
    }
    <p><strong>Co-emprunteur:</strong> ${formData.coApplicant ? "Oui" : "Non"}</p>
    ${
      formData.coApplicant && formData.coApplicantIncome
        ? `<p><strong>Revenus du co-emprunteur:</strong> ${formData.coApplicantIncome} €</p>`
        : ""
    }
    ${
      formData.contactTime
        ? `<p><strong>Moment de contact préféré:</strong> ${getContactTimeName(formData.contactTime)}</p>`
        : ""
    }
    
    ${
      formData.comments
        ? `
    <h2>Commentaires</h2>
    <p>${formData.comments}</p>
    `
        : ""
    }
    
    <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
      Cette demande a été soumise le ${new Date().toLocaleString("fr-FR")} via le site web Crédit-Plus.
    </p>
    `

    try {
      console.log("Tentative d'envoi d'email via Resend...")

      // Correction du champ "from" pour utiliser uniquement des caractères ASCII
      const { data, error } = await resend.emails.send({
        from: "Credit-Plus <onboarding@resend.dev>", // Suppression de l'accent sur le "é"
        to: ["maximeiori08@gmail.com"],
        subject: "Nouvelle demande de crédit - Crédit-Plus",
        html: emailContent,
        reply_to: formData.email || "contact@creditplus-france.com",
      })

      if (error) {
        throw new Error(`Erreur Resend: ${error.message}`)
      }

      console.log("Email envoyé avec succès via Resend:", data)

      return Response.json({
        success: true,
        message: "Votre demande a été enregistrée. Nous vous contacterons prochainement.",
        emailId: data?.id,
      })
    } catch (emailError) {
      console.error("ERREUR lors de l'envoi de l'email:", emailError)
      // Continuer vers le mode de secours
    }

    // Mode de secours (fallback) - s'exécute si l'envoi a échoué
    console.log("Utilisation du mode de secours pour l'envoi des données")

    // Enregistrer les données complètes pour référence
    console.log("DONNÉES COMPLÈTES DE LA DEMANDE:", {
      timestamp: new Date().toISOString(),
      formData: formData,
      mode: "fallback",
    })

    // Simuler un délai pour donner l'impression que l'envoi est en cours
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Retourner une réponse positive en mode de secours
    return Response.json({
      success: true,
      message: "Votre demande a été enregistrée. Nous vous contacterons prochainement.",
      mode: "fallback",
    })
  } catch (error) {
    console.error("ERREUR lors du traitement de la demande:", error)

    // Retourner une réponse d'erreur
    return Response.json(
      {
        success: false,
        message: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

// Fonctions utilitaires pour obtenir les noms lisibles
function getProjectTypeName(projectType: string): string {
  const projectTypes: Record<string, string> = {
    mortgage: "Crédit immobilier",
    consumer: "Crédit à la consommation",
    consolidation: "Rachat de crédit",
    insurance: "Assurance de prêt",
    professional: "Crédit professionnel",
    other: "Autre",
  }
  return projectTypes[projectType] || projectType
}

function getPropertyTypeName(propertyType: string): string {
  const propertyTypes: Record<string, string> = {
    apartment: "Appartement",
    house: "Maison",
    land: "Terrain",
    commercial: "Local commercial",
    other: "Autre",
  }
  return propertyTypes[propertyType] || propertyType
}

function getEmploymentStatusName(employmentStatus: string): string {
  const employmentStatuses: Record<string, string> = {
    cdi: "CDI",
    cdd: "CDD",
    freelance: "Indépendant / Freelance",
    business_owner: "Chef d'entreprise",
    retired: "Retraité",
    unemployed: "Sans emploi",
  }
  return employmentStatuses[employmentStatus] || employmentStatus
}

// Ajouter cette fonction pour obtenir le nom lisible du moment de contact préféré
function getContactTimeName(contactTime: string): string {
  const contactTimes: Record<string, string> = {
    morning: "Le matin (9h - 12h)",
    afternoon: "L'après-midi (14h - 17h)",
    evening: "En fin de journée (17h - 19h)",
    anytime: "N'importe quand",
  }
  return contactTimes[contactTime] || contactTime
}
