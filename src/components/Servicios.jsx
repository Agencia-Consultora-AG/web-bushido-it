const services = [
  {
    icon: '📅',
    title: 'Agenda Digital',
    description:
      'Sistema de turnos para profesionales, consultorios, centros de atención y negocios que trabajan con reservas.',
    tags: ['Reservas', 'Calendario', 'Notificaciones'],
    accent: '#6366F1',
  },
  {
    icon: '📦',
    title: 'Control de Stock',
    description:
      'Gestión de inventario, productos, categorías, movimientos y reportes para comercios.',
    tags: ['Inventario', 'Reportes', 'Alertas'],
    accent: '#38BDF8',
  },
  {
    icon: '⚙️',
    title: 'Automatización de Procesos',
    description:
      'Digitalización de tareas repetitivas, planillas, cargas administrativas y flujos internos.',
    tags: ['Flujos', 'Digitalización', 'Eficiencia'],
    accent: '#818CF8',
  },
  {
    icon: '💡',
    title: 'Desarrollo a Medida',
    description:
      'Soluciones diseñadas según las necesidades reales de cada cliente, desde la idea hasta la implementación.',
    tags: ['Personalizado', 'Escalable', 'Full stack'],
    accent: '#34D399',
  },
]

export default function Servicios() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#6366F1]/15 text-[#818CF8] border border-[#6366F1]/30 mb-5">
            ✦ Lo que hacemos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#38BDF8] bg-clip-text text-transparent">
              servicios
            </span>
          </h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Herramientas concretas para ordenar tu operación, automatizar lo repetitivo y tomar decisiones con información real.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative flex flex-col bg-[#1E293B]/60 border border-white/8 rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 flex-shrink-0"
                style={{ backgroundColor: service.accent + '18', border: `1px solid ${service.accent}30` }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-[#F8FAFC] mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed flex-1 mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs font-medium"
                    style={{ backgroundColor: service.accent + '15', color: service.accent }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#64748B] text-sm mb-4">¿No encontrás lo que necesitás?</p>
          <button
            onClick={() => scrollTo('#contacto')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-[#818CF8] border border-[#6366F1]/30 hover:border-[#6366F1]/60 hover:bg-[#6366F1]/10 transition-all duration-200"
          >
            Contanos tu proyecto →
          </button>
        </div>
      </div>
    </section>
  )
}
