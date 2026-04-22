import Link from "next/link"
import Image from "next/image"
import { Linkedin, BadgeCheck } from "lucide-react"
import type { Author } from "@/lib/authors"

/**
 * Bloc de biographie d'auteur — exigence E-E-A-T sur toute page YMYL finance.
 * Complète le schema JSON-LD `Person` et la citation dans `Article`.
 */
export function AuthorBio({
  author,
  publishedDate,
  updatedDate,
}: {
  author: Author
  publishedDate?: string
  updatedDate?: string
}) {
  const fmt = (iso: string | undefined) =>
    iso ? new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : null

  return (
    <section className="not-prose border-t border-b border-gray-200 py-8 my-10" aria-label="À propos de l'auteur">
      <div className="flex flex-col sm:flex-row items-start gap-5">
        {author.photo ? (
          <Image
            src={author.photo}
            alt={author.name}
            width={80}
            height={80}
            className="h-20 w-20 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
          />
        ) : (
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/30">
            <span className="text-2xl font-semibold text-primary">
              {author.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Link
              href={`/equipe/${author.slug}`}
              className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              {author.name}
            </Link>
            {author.oriasNumber && (
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden /> ORIAS n°{author.oriasNumber}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-1">{author.jobTitle ?? "Courtier IOBSP"}</p>
          {author.shortBio && (
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{author.shortBio}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            {publishedDate && <span>Publié le {fmt(publishedDate)}</span>}
            {updatedDate && updatedDate !== publishedDate && (
              <span>Mis à jour le {fmt(updatedDate)}</span>
            )}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" aria-hidden /> LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
