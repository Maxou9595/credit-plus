import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">SARL LB COURTAGE - Capital social de 5000€ - RCS DAX 917986622 - ORIAS n°22007152</p>
          <p>
            <Link href="/cgv" className="text-gray-600 hover:text-gray-900">
              Conditions Générales de Vente
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
