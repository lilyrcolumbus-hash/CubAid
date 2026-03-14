import { useParams, Link } from 'react-router-dom'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { findCategory } from '@/data/content'

export function Category() {
  const { slug } = useParams<{ slug: string }>()
  const category = findCategory(slug || '')

  if (!category) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Categoría no encontrada</p>
        <Link to="/" className="text-cubaid-red mt-2 inline-block">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      {/* Back + Title */}
      <Link to="/" className="flex items-center gap-1 text-gray-400 text-sm no-underline mb-4 hover:text-gray-600">
        <ArrowLeft className="w-4 h-4" />
        Inicio
      </Link>

      <div className="mb-5">
        <span className="text-3xl">{category.emoji}</span>
        <h1 className="text-xl font-bold text-gray-900 mt-1">{category.title}</h1>
        <p className="text-sm text-gray-500">{category.description}</p>
      </div>

      {/* Article list */}
      <div className="flex flex-col gap-2">
        {category.articles.map((article) => (
          <Link
            key={article.slug}
            to={`/articulo/${category.slug}/${article.slug}`}
            className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl p-4 no-underline transition-colors"
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{article.title}</h3>
              <p className="text-xs text-gray-500 truncate">{article.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 ml-2" />
          </Link>
        ))}
      </div>
    </div>
  )
}
