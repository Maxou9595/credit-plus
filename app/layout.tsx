import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingPhone from "@/components/floating-phone"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crédit-Plus | Courtier en crédit immobilier et rachat de crédit",
  description:
    "Crédit-Plus vous accompagne dans tous vos projets de financement : crédit immobilier, rachat de crédit, prêt professionnel et assurance de prêt.",
  icons: {
    icon: "/credit-plus.png",
    apple: "/credit-plus.png",
  },
  openGraph: {
    title: "Crédit-Plus - Courtier en crédit immobilier et rachat de crédit.",
    description:
      "Crédit-Plus vous accompagne dans tous vos projets de financement : crédit immobilier, rachat de crédit, prêt professionnel et assurance de prêt.",
    images: [
      {
        url: "/credit-plus-og.png",
        width: 1200,
        height: 630,
        alt: "Crédit-Plus Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crédit-Plus - Courtier en crédit immobilier et rachat de crédit.",
    description:
      "Crédit-Plus vous accompagne dans tous vos projets de financement : crédit immobilier, rachat de crédit, prêt professionnel et assurance de prêt.",
    images: ["/credit-plus-og.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
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
