const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#0A1020] border-t border-white/8">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#38BDF8] flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-[#F8FAFC] font-bold text-lg tracking-tight">
                Bushido <span className="text-[#6366F1]">IT</span>
              </span>
            </div>
            <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
              Soluciones digitales para la gestión profesional. Sistemas que ordenan, automatizan y hacen crecer tu negocio.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
              Navegación
            </div>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[#64748B] hover:text-[#CBD5E1] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
          <span>© 2026 Bushido IT. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1.5">
            Hecho en Argentina
            <span className="text-base">🇦🇷</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
