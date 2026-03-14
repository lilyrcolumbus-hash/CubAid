import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search as SearchIcon } from 'lucide-react'
import { searchArticles } from '@/data/content'

export function Search() {
  const [query, setQuery] = useState('')
  const results = query.length >= 2 ? searchArticles(query) : []

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-4">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar en toda la guía..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cubaid-red focus:border-transparent bg-gray-50"
        />
      </div>

      {/* Results */}
      {query.length < 2 ? (
        <div className="text-center py-12">
          <SearchIcon className="w-12 h-12 text-gray-200 mx-auto mb-3" />
          <p className="text-gray-400 text-sm">Escribe para buscar en toda la guía</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">No se encontraron resultados para "{query}"</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-400 mb-1">{results.length} resultado{results.length !== 1 ? 's' : ''}</p>
          {results.map(({ article, category }) => (
            <Link
              key={`${category.slug}-${article.slug}`}
              to={`/articulo/${category.slug}/${article.slug}`}
              className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 no-underline transition-colors block"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">{category.emoji}</span>
                <span className="text-xs text-gray-400">{category.title}</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{article.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{article.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
