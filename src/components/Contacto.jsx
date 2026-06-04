import { useState } from 'react'

const contactChannels = [
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Consultar por WhatsApp',
    href: 'https://wa.me/5493436230863',
    color: '#25D366',
    desc: 'Ideal para una primera consulta rápida',
  },
  {
    icon: '✉️',
    label: 'Email',
    //value: 'contacto@bushidoit.com.ar',
    //href: 'mailto:contacto@bushidoit.com.ar',
    value: 'alejandroghiringhelli@gmail.com',
    href: 'mailto:alejandroghiringhelli@gmail.com',
    color: '#6366F1',
    desc: 'Para consultas formales y presupuestos',
  },
  {
    icon: '📸',
    label: 'Instagram',
    // value: '@bushidoit',
    // href: 'https://instagram.com/bushidoit',
    value: '@develop.ag',
    href: 'https://www.instagram.com/develop.ag/',
    color: '#E1306C',
    desc: 'Próximamente: proyectos, avances y novedades',
  },
]

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Consulta recibida:', form)

    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ nombre: '', email: '', telefono: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#6366F1]/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#6366F1]/15 text-[#818CF8] border border-[#6366F1]/30 mb-5">
            ✦ Hablemos
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Contanos tu{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#38BDF8] bg-clip-text text-transparent">
              proyecto
            </span>
          </h2>

          <p className="text-[#94A3B8]">
            Escribinos qué necesitás mejorar. Te ayudamos a pensar una solución simple y posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#1E293B]/60 border border-white/8 rounded-2xl p-6 lg:p-8"
            >
              {sent && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <div>
                    <div className="text-sm font-medium text-green-400">Consulta registrada</div>
                    <div className="text-xs text-green-400/70">
                      Próximamente conectaremos este formulario a WhatsApp o email.
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:outline-none focus:border-[#6366F1]/60 focus:ring-1 focus:ring-[#6366F1]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+54 9 ..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:outline-none focus:border-[#6366F1]/60 focus:ring-1 focus:ring-[#6366F1]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:outline-none focus:border-[#6366F1]/60 focus:ring-1 focus:ring-[#6366F1]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-2">Mensaje *</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Contanos brevemente qué necesitás ordenar, automatizar o mejorar..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:outline-none focus:border-[#6366F1]/60 focus:ring-1 focus:ring-[#6366F1]/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-medium bg-gradient-to-r from-[#6366F1] to-[#4F52C9] hover:from-[#4F52C9] hover:to-[#6366F1] text-white transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Solicitar asesoramiento</span>
                  <span>→</span>
                </button>

                <p className="text-xs text-[#475569] text-center">
                  Tu información es confidencial. El formulario quedará preparado para conectar con WhatsApp, email o una API.
                </p>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">Contacto directo</h3>
              <p className="text-sm text-[#64748B]">
                También podés escribirnos por estos medios cuando estén activos.
              </p>
            </div>

            {contactChannels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl bg-[#1E293B]/40 border border-white/8 hover:border-white/20 hover:bg-[#1E293B]/80 transition-all duration-200"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: ch.color + '18', border: `1px solid ${ch.color}30` }}
                >
                  {ch.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-[#64748B] mb-0.5">{ch.label}</div>
                  <div className="text-sm font-semibold truncate group-hover:underline" style={{ color: ch.color }}>
                    {ch.value}
                  </div>
                  <div className="text-xs text-[#475569] mt-0.5">{ch.desc}</div>
                </div>

                <span className="text-[#475569] group-hover:text-white transition-colors self-center">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}