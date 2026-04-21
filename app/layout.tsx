import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingPhone from "@/components/floating-phone"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { OrganizationSchema } from "@/components/schemas/organization"

const inter = Inter({ subsets: ["latin"] })

// Next 15 : `viewport` doit être un export séparé, pas dans metadata.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://credit-plus.fr"),
  title: {
    default: "Crédit Plus | Courtier en crédit immobilier et rachat de crédit",
    template: "%s | Crédit Plus",
  },
  description:
    "Crédit Plus vous accompagne dans tous vos projets de financement : crédit immobilier, rachat de crédit, investissement locatif et assurance emprunteur.",
  applicationName: "Crédit Plus",
  authors: [{ name: "Crédit Plus", url: "https://credit-plus.fr" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: "/credit-plus.png",
    apple: "/credit-plus.png",
  },
  openGraph: {
    title: "Crédit Plus — Courtier en crédit immobilier et rachat de crédit",
    description:
      "Crédit Plus vous accompagne dans tous vos projets de financement : crédit immobilier, rachat de crédit, investissement locatif et assurance emprunteur.",
    url: "https://credit-plus.fr",
    siteName: "Crédit Plus",
    images: [
      {
        url: "/credit-plus-og.png",
        width: 1200,
        height: 630,
        alt: "Crédit Plus — Courtier en crédit immobilier",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crédit Plus — Courtier en crédit immobilier",
    description:
      "Crédit Plus vous accompagne dans tous vos projets de financement : crédit immobilier, rachat de crédit, investissement locatif et assurance emprunteur.",
    images: ["/credit-plus-og.png"],
  },
  // `generator: 'v0.dev'` retiré — signal non-professionnel scrapé par les LLM
  // et visible dans le code source sans valeur ajoutée.
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* JSON-LD racine : Organization + FinancialService.
            Injecté globalement pour que chaque page hérite de l'entité #organization. */}
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              <Suspense>{children}</Suspense>
            </div>
            <Footer />
          </div>
          <FloatingPhone />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
