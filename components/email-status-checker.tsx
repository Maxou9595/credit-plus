"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react"

export default function EmailStatusChecker() {
  const [emailId, setEmailId] = useState("")
  const [status, setStatus] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const checkEmailStatus = async () => {
    if (!emailId) {
      setError("Veuillez entrer un ID d'email")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/email-status?id=${emailId}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue")
      }

      setStatus(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (deliveryStatus: string) => {
    switch (deliveryStatus) {
      case "delivered":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "failed":
        return <XCircle className="h-6 w-6 text-red-500" />
      case "sending":
        return <Clock className="h-6 w-6 text-yellow-500" />
      default:
        return <AlertCircle className="h-6 w-6 text-gray-500" />
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Vérifier le statut d'un email</CardTitle>
        <CardDescription>Entrez l'ID de l'email pour vérifier son statut de livraison</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="ID de l'email (ex: 37e4414c-5e25-4dbc-a071-43552a4bd53b)"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
            <Button onClick={checkEmailStatus} disabled={loading}>
              {loading ? "Vérification..." : "Vérifier"}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {status && (
            <div className="space-y-3 mt-4">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Statut:</span>
                <div className="flex items-center">
                  {getStatusIcon(status.last_event)}
                  <span className="ml-2 capitalize">
                    {status.last_event === "delivered"
                      ? "Livré"
                      : status.last_event === "failed"
                        ? "Échec"
                        : status.last_event === "sending"
                          ? "En cours d'envoi"
                          : status.last_event || "Inconnu"}
                  </span>
                </div>
              </div>

              <div>
                <span className="font-semibold">Destinataire:</span> {status.to}
              </div>

              <div>
                <span className="font-semibold">Sujet:</span> {status.subject}
              </div>

              <div>
                <span className="font-semibold">Date d'envoi:</span>{" "}
                {new Date(status.created_at).toLocaleString("fr-FR")}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="text-xs text-gray-500">
        Les informations de statut sont fournies par l'API Resend.
      </CardFooter>
    </Card>
  )
}
