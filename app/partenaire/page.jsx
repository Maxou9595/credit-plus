"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function PartenairePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Timeout de 5 secondes pour détecter si l'iframe ne charge pas
    const timeout = setTimeout(() => {
      if (isLoading) {
        setHasError(true)
        setIsLoading(false)
      }
    }, 5000)

    return () => clearTimeout(timeout)
  }, [isLoading])

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 h-16 bg-black border-b border-gray-800 shadow-lg">
        <div className="h-full px-4 flex items-center justify-between max-w-7xl mx-auto">
          {/* Bouton Retour */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
          >
            <span className="text-xl">⬅</span>
            <span className="hidden sm:inline font-medium">Retour vers Crédit Time</span>
            <span className="sm:hidden font-medium">Retour</span>
          </Link>

          {/* Titre Centré */}
          <h1 className="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-bold text-white">
            Espace partenaire
          </h1>

          {/* Espace pour équilibrer le layout */}
          <div className="w-32 sm:w-48"></div>
        </div>
      </header>

      {/* Conteneur Iframe */}
      <div className="relative min-h-[calc(100dvh-4rem)] bg-gray-50">
        {/* Spinner de chargement */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
              <p className="text-gray-600 font-medium">Chargement de l'espace partenaire...</p>
            </div>
          </div>
        )}

        {/* Message d'erreur */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10 p-4">
            <div className="text-center max-w-md">
              <div className="mb-4 text-6xl">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Impossible de charger l'espace partenaire</h2>
              <p className="text-gray-600 mb-6">
                Le contenu ne peut pas être affiché dans cette fenêtre. Veuillez ouvrir le site dans un nouvel onglet.
              </p>
              <a
                href="https://alpha-assurance.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Ouvrir dans un nouvel onglet
                <span className="text-xl">↗</span>
              </a>
            </div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src="https://alpha-assurance.fr"
          className="w-full h-full min-h-[calc(100dvh-4rem)] border-0"
          title="Espace partenaire Alpha Assurance"
          onLoad={handleIframeLoad}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          allow="fullscreen"
          loading="eager"
        />
      </div>
    </div>
  )
}
