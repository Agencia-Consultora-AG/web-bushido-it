const strengths = [
  { icon: '🔍', label: 'Relevamiento funcional', desc: 'Entendemos cómo trabajás antes de proponer una solución.' },
  { icon: '🌐', label: 'Desarrollo web', desc: 'Creamos aplicaciones modernas, simples y adaptables.' },
  { icon: '🗂️', label: 'Sistemas de gestión', desc: 'Herramientas pensadas para ordenar la operación diaria.' },
  { icon: '⚡', label: 'Automatización', desc: 'Reducimos tareas repetitivas y errores manuales.' },
  { icon: '🤝', label: 'Acompañamiento técnico', desc: 'Te ayudamos a implementar, ajustar y mejorar la solución.' },
]

const process = [
  { value: '01', label: 'Escuchamos el problema' },
  { value: '02', label: 'Diseñamos una solución simple' },
  { value: '03', label: 'Construimos e iteramos' },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#6366F1]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/25 mb-5">
                ✦ Quiénes somos
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Tecnología con{' '}
                <span className="bg-gradient-to-r from-[#38BDF8] to-[#6366F1] bg-clip-text text-transparent">
                  propósito
                </span>
              </h2>

              <p className="text-[#94A3B8] text-lg leading-relaxed">
                En Bushido IT creemos que la tecnología debe resolver problemas reales.
                Trabajamos junto a profesionales, comercios y organizaciones para crear herramientas
                simples, útiles y sostenibles.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {process.map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-[#1E293B]/60 border border-white/8 text-center">
                  <div className="text-2xl font-bold text-[#6366F1] mb-1">{s.value}</div>
                  <div className="text-xs text-[#64748B] leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            <blockquote className="relative pl-5 border-l-2 border-[#6366F1]/50">
              <p className="text-[#CBD5E1] italic leading-relaxed">
                "No vendemos tecnología. Vendemos orden, control y claridad para que puedas enfocarte
                en lo que hacés mejor."
              </p>
              <footer className="mt-2 text-xs text-[#64748B]">— Bushido IT</footer>
            </blockquote>
          </div>

          <div className="space-y-3">
            {strengths.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 p-4 rounded-xl bg-[#1E293B]/40 border border-white/8 hover:border-[#6366F1]/30 hover:bg-[#1E293B]/80 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#6366F1]/15 border border-[#6366F1]/25 flex items-center justify-center text-xl flex-shrink-0 group-hover:border-[#6366F1]/50 transition-colors">
                  {item.icon}
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#F8FAFC] mb-0.5">{item.label}</div>
                  <div className="text-xs text-[#64748B] leading-relaxed">{item.desc}</div>
                </div>

                <div className="ml-auto text-[#6366F1]/40 group-hover:text-[#6366F1] transition-colors text-lg flex-shrink-0 self-center">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}