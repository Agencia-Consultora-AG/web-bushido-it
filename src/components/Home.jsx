export default function Home() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const solutions = [
    { label: 'Agenda Digital', desc: 'Turnos, reservas y organización diaria', icon: '📅', color: '#6366F1' },
    { label: 'Control de Stock', desc: 'Inventario, productos y movimientos', icon: '📦', color: '#38BDF8' },
    { label: 'Automatizaciones', desc: 'Menos tareas repetitivas, más control', icon: '⚙️', color: '#818CF8' },
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6366F1]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#38BDF8]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#6366F1]/15 text-[#818CF8] border border-[#6366F1]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
              Consultora de software · Argentina
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Soluciones digitales para{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#38BDF8] bg-clip-text text-transparent">
                ordenar, automatizar
              </span>{' '}
              y hacer crecer tu negocio
            </h1>

            <p className="text-lg text-[#94A3B8] leading-relaxed max-w-xl">
              Desarrollamos sistemas web, herramientas de gestión y automatizaciones para profesionales,
              comercios y organizaciones que necesitan trabajar mejor, ahorrar tiempo y tomar decisiones
              con información clara.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => scrollTo('#servicios')}
                className="px-6 py-3 rounded-xl font-medium bg-[#6366F1] hover:bg-[#4F52C9] text-white transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                Ver servicios
              </button>
              <button
                onClick={() => scrollTo('#contacto')}
                className="px-6 py-3 rounded-xl font-medium text-[#CBD5E1] border border-[#1E293B] hover:border-[#6366F1]/50 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                Contactar
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#38BDF8]/10 rounded-2xl blur-2xl scale-105" />

            <div className="relative bg-[#1E293B]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs text-[#64748B] uppercase tracking-widest mb-1">Panel de soluciones</div>
                  <div className="text-base font-semibold text-[#F8FAFC]">Qué podemos implementar</div>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-5 p-2.5 rounded-lg bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Soluciones listas para adaptar a tu negocio</span>
              </div>

              <div className="space-y-3 mb-5">
                {solutions.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: item.color + '22', border: `1px solid ${item.color}44` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#F8FAFC] leading-none">{item.label}</div>
                      <div className="text-xs text-[#94A3B8] mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-[#64748B] mb-2">Proceso de trabajo</div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-[#0F172A]/70 p-3">
                    <div className="text-[#38BDF8] font-semibold text-sm">1</div>
                    <div className="text-[11px] text-[#94A3B8]">Relevar</div>
                  </div>
                  <div className="rounded-lg bg-[#0F172A]/70 p-3">
                    <div className="text-[#6366F1] font-semibold text-sm">2</div>
                    <div className="text-[11px] text-[#94A3B8]">Construir</div>
                  </div>
                  <div className="rounded-lg bg-[#0F172A]/70 p-3">
                    <div className="text-[#818CF8] font-semibold text-sm">3</div>
                    <div className="text-[11px] text-[#94A3B8]">Acompañar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}