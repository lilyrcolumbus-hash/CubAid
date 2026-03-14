import { Link } from 'react-router-dom'
import { Share2 } from 'lucide-react'
import { categories } from '@/data/content'

export function Home() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CubAid - Guía de Emergencia Offline',
          text: 'Guía offline de primeros auxilios, salud y supervivencia para Cuba. Funciona sin internet.',
          url: window.location.origin,
        })
      } catch {
        // user cancelled
      }
    }
  }

  return (
    <div>
      {/* Hero */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Tu guía de emergencia offline
        </h1>
        <p className="text-gray-500 text-sm">
          Todo el contenido funciona sin conexión a internet.
          <br />Primeros auxilios, salud, agua y más.
        </p>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/categoria/${cat.slug}`}
            className={`${cat.color} rounded-xl p-4 text-white no-underline hover:opacity-90 transition-opacity shadow-sm`}
          >
            <span className="text-2xl block mb-2">{cat.emoji}</span>
            <h2 className="text-sm font-bold mb-1 leading-tight">{cat.title}</h2>
            <p className="text-xs opacity-80 leading-snug">{cat.description}</p>
          </Link>
        ))}
      </div>

      {/* Share button */}
      <button
        onClick={handleShare}
        className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl py-3 px-4 text-sm font-medium transition-colors border-none cursor-pointer"
      >
        <Share2 className="w-4 h-4" />
        Comparte esta app con quien la necesite
      </button>

      {/* Version */}
      <p className="text-center text-xs text-gray-300 mt-4">
        CubAid v1.0 — Hecho con amor para Cuba
      </p>
    </div>
  )
}
