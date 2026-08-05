'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const S = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' },
  tag: {
    display: 'inline-block',
    backgroundColor: 'rgba(240,168,124,0.15)',
    color: '#e08a55',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    padding: '0.3rem 0.9rem',
    borderRadius: '2rem',
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.5rem',
    fontSize: '0.9rem',
    color: '#1e293b',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '0.4rem',
  },
}

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div style={S.container}>
          <div style={S.tag}>Hablemos</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Solicita tu presupuesto gratuito
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Cuéntanos qué necesitas y te preparamos una propuesta personalizada sin compromiso.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fc' }}>
        <div style={S.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Form */}
            <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#10b98118', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <CheckCircle size={32} style={{ color: '#10b981' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B2D6E', marginBottom: '0.75rem' }}>¡Mensaje enviado!</h3>
                  <p style={{ color: '#64748b', lineHeight: 1.7 }}>Nos pondremos en contacto contigo en menos de 24 horas. Si necesitas respuesta urgente, llámanos directamente.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B2D6E', marginBottom: '1.75rem' }}>Formulario de contacto</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={S.label}>Nombre *</label>
                      <input required style={S.input} placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })}
                        onFocus={e => (e.target.style.borderColor = '#1B2D6E')}
                        onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                      />
                    </div>
                    <div>
                      <label style={S.label}>Empresa</label>
                      <input style={S.input} placeholder="Nombre de empresa" value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })}
                        onFocus={e => (e.target.style.borderColor = '#1B2D6E')}
                        onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={S.label}>Email *</label>
                      <input required type="email" style={S.input} placeholder="tu@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={e => (e.target.style.borderColor = '#1B2D6E')}
                        onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                      />
                    </div>
                    <div>
                      <label style={S.label}>Teléfono</label>
                      <input style={S.input} placeholder="+34 600 000 000" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })}
                        onFocus={e => (e.target.style.borderColor = '#1B2D6E')}
                        onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={S.label}>Servicio de interés</label>
                    <select style={{ ...S.input, cursor: 'pointer' }} value={form.servicio} onChange={e => setForm({ ...form, servicio: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#1B2D6E')}
                      onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="frio">Transporte en Frío</option>
                      <option value="congelado">Transporte en Congelado</option>
                      <option value="seco">Transporte en Seco</option>
                      <option value="dedicado">Transporte Dedicado</option>
                      <option value="horas">Pacto de Horas</option>
                      <option value="almacenaje">Almacenaje en Frío</option>
                      <option value="otro">Otro / No sé</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={S.label}>Cuéntanos qué necesitas *</label>
                    <textarea required rows={4} style={{ ...S.input, resize: 'vertical' as const }} placeholder="Describe brevemente tu operativa, qué transportas, frecuencia aproximada, zonas de recogida y entrega..." value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#1B2D6E')}
                      onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                    />
                  </div>
                  <button type="submit" style={{ width: '100%', backgroundColor: '#F0A87C', color: 'white', padding: '0.875rem', borderRadius: '0.5rem', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'inherit', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e08a55')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F0A87C')}
                  >
                    <Send size={16} />
                    Enviar solicitud
                  </button>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center', marginTop: '1rem' }}>
                    Respuesta en menos de 24h. Sin compromiso.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#1B2D6E', marginBottom: '1.75rem' }}>Otras formas de contacto</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: <Phone size={20} />, label: 'Teléfono', value: '+34 682 051 216', href: 'tel:+34682051216', color: '#1B2D6E' },
                  { icon: <Mail size={20} />, label: 'Email', value: 'info@dmlogistics.es', href: 'mailto:info@dmlogistics.es', color: '#1B2D6E' },
                  { icon: <MapPin size={20} />, label: 'Ubicación', value: 'Madrid, España', href: '#', color: '#1B2D6E' },
                  { icon: <Clock size={20} />, label: 'Horario de oficina', value: 'Lun–Vie 8:00–19:00', href: '#', color: '#1B2D6E' },
                ].map(c => (
                  <a key={c.label} href={c.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none', padding: '1.25rem', backgroundColor: 'white', borderRadius: '0.875rem', border: '1px solid rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    <div style={{ width: '44px', height: '44px', borderRadius: '0.75rem', backgroundColor: '#1B2D6E12', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1B2D6E', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{c.label}</div>
                      <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '0.95rem' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/34682051216?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20vuestros%20servicios." target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#25D366', color: 'white', padding: '1rem 1.5rem', borderRadius: '0.875rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', transition: 'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
