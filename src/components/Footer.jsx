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
            <div className="inline-flex rounded-2xl bg-white/95 px-3 py-2 shadow-lg shadow-black/20 ring-1 ring-white/10">
              <img
                src="/hero.png"
                alt="Bushido IT"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
              Soluciones digitales para la gestión profesional. Sistemas que ordenan,
              automatizan y hacen crecer tu negocio.
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
