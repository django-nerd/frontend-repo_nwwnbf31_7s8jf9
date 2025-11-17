import { useState } from 'react'
import { Menu, X, Users, Search, LogIn } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Success Stories', href: '#stories' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white">
              <Users className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold text-gray-900">AlumniConnect</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <Search className="h-4 w-4" />
              Explore
            </button>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-lg">
              <LogIn className="h-4 w-4" />
              Sign in
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-black/10">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-gray-700 hover:text-gray-900 border border-black/10 px-4 py-2 rounded-lg">
                  <Search className="h-4 w-4" />
                  Explore
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-lg">
                  <LogIn className="h-4 w-4" />
                  Sign in
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
