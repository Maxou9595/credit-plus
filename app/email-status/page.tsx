import EmailStatusChecker from "@/components/email-status-checker"

export default function EmailStatusPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Vérification du statut des emails</h1>
      <EmailStatusChecker />
    </div>
  )
}
