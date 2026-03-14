import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { findArticle } from '@/data/content'

export function Article() {
  const { categorySlug, articleSlug } = useParams<{ categorySlug: string; articleSlug: string }>()
  const result = findArticle(categorySlug || '', articleSlug || '')

  if (!result) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Artículo no encontrado</p>
        <Link to="/" className="text-cubaid-red mt-2 inline-block">Volver al inicio</Link>
      </div>
    )
  }

  const { article, category } = result

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-xs text-gray-400 mb-4 flex-wrap">
        <Link to="/" className="no-underline text-gray-400 hover:text-gray-600">Inicio</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/categoria/${category.slug}`} className="no-underline text-gray-400 hover:text-gray-600">
          {category.title}
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-600">{article.title}</span>
      </div>

      {/* Back button */}
      <Link
        to={`/categoria/${category.slug}`}
        className="flex items-center gap-1 text-cubaid-red text-sm no-underline mb-4 hover:opacity-80"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a {category.title}
      </Link>

      {/* Article title */}
      <h1 className="text-xl font-bold text-gray-900 mb-1">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{article.description}</p>

      {/* Content */}
      <div
        className="article-content text-sm"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  )
}
