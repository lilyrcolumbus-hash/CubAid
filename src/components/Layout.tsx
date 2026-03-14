import { Outlet, Link, useLocation } from 'react-router-dom'
import { HeartPulse, Search, House, Cross, Heart, Menu, WifiOff } from 'lucide-react'

export function Layout() {
  const location = useLocation()
  const path = location.pathname

  const tabs = [
    { to: '/', icon: House, label: 'Inicio' },
    { to: '/categoria/primeros-auxilios', icon: Cross, label: 'Auxilios' },
    { to: '/categoria/salud-sin-medico', icon: Heart, label: 'Salud' },
    { to: '/categoria/agua-segura', icon: Menu, label: 'Más' },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="bg-cubaid-red text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <Link to="/" className="flex items-center gap-2 no-underline text-white">
          <HeartPulse className="w-7 h-7" />
          <span className="text-xl font-bold tracking-tight">CubAid</span>
        </Link>
        <Link to="/buscar" className="p-2 rounded-full hover:bg-red-700 transition-colors">
          <Search className="w-5 h-5" />
        </Link>
      </header>

      {/* Offline badge */}
      <div className="bg-green-50 border-b border-green-200 px-4 py-1.5 flex items-center justify-center gap-2">
        <WifiOff className="w-3.5 h-3.5 text-green-700" />
        <span className="text-xs text-green-700 font-medium">Funciona 100% sin internet</span>
      </div>

      {/* Content */}
      <main className="flex-1 px-4 py-4 pb-20">
        <Outlet />
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="max-w-lg mx-auto flex">
          {tabs.map(({ to, icon: Icon, label }) => {
            const active = path === to || (to !== '/' && path.startsWith(to))
            return (
              <Link
                key={to}
                to={to}
                className={`flex-1 flex flex-col items-center py-2 text-xs no-underline transition-colors ${
                  active ? 'text-cubaid-red' : 'text-gray-400'
                }`}
              >
                <Icon className={`w-5 h-5 mb-0.5 ${active ? 'stroke-[2.5]' : ''}`} />
                {label}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
