import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1E293B] shadow-lg shadow-black/30'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => handleNav('#inicio')}
            className="group flex items-center"
          >
            <div className="rounded-xl bg-white/95 px-1 py-0 shadow-lg shadow-black/20 ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
              <img
                src="/logo-minimalista.png"
                alt="Bushido IT"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('#contacto')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#6366F1] hover:bg-[#4F52C9] text-white transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              Solicitar asesoramiento
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-[#CBD5E1] hover:text-white hover:bg-white/5 transition-all"
              aria-label="Menú"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-[#0F172A]/98 backdrop-blur-md border-t border-[#1E293B] px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3 text-sm text-[#CBD5E1] hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contacto')}
            className="mt-2 px-4 py-3 text-sm font-medium rounded-lg bg-[#6366F1] hover:bg-[#4F52C9] text-white transition-all text-center"
          >
            Solicitar asesoramiento
          </button>
        </div>
      </div>
    </header>
  )
}
