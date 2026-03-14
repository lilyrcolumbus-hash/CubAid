import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Category } from '@/pages/Category'
import { Article } from '@/pages/Article'
import { Search } from '@/pages/Search'
import { Layout } from '@/components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:slug" element={<Category />} />
          <Route path="/articulo/:categorySlug/:articleSlug" element={<Article />} />
          <Route path="/buscar" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
