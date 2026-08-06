import Link from 'next/link'
import { Target, Heart, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react'

const S = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' },
  tag: {
    display: 'inline-block',
    backgroundColor: 'rgba(240,168,124,0.15)',
    color: '#e08a55',
    fontSize: '0.75rem',
    fontWeight: 700 as const,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    padding: '0.3rem 0.9rem',
    borderRadius: '2rem',
    marginBottom: '1rem',
  },
}

export default function SobreNosotrosPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div style={S.container}>
          <div style={S.tag}>Quiénes somos</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Más que transporte, <span style={{ color: '#F0A87C' }}>un socio logístico</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
            Nacimos con un propósito claro: que ningún producto alimentario llegue en malas condiciones a su destino.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div style={S.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={S.tag}>Nuestra historia</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#1B2D6E', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                Empezamos pequeños, pensamos en grande
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                DML Logistic nació en Madrid con una flota reducida y una idea muy clara: el sector alimentario merece un servicio de transporte especializado, fiable y con trato humano. Demasiados negocios perdían producto por problemas logísticos que no deberían existir.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                Desde el primer día apostamos por flota propia, certificación ATP y un modelo de relación directa con el cliente. Sin intermediarios, sin sorpresas.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Hoy operamos en Madrid, Valencia y Barcelona, llevando el mismo modelo de servicio especializado a empresas del sector alimentario en toda España.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '1.25rem' }}>
              {[
                { icon: <Target size={22} />, title: 'Misión', desc: 'Garantizar que cada envío alimentario llegue en las condiciones óptimas, en el tiempo acordado, con el trato que merece un producto de calidad.', color: '#3b82f6' },
                { icon: <Heart size={22} />, title: 'Valores', desc: 'Honestidad, compromiso, adaptabilidad y cercanía. Creemos que un buen servicio logístico se construye con confianza mutua.', color: '#ec4899' },
                { icon: <Zap size={22} />, title: 'Visión', desc: 'Ser el referente nacional en logística alimentaria especializada, cubriendo las principales ciudades de España con el mismo estándar de servicio.', color: '#F0A87C' },
                { icon: <Users size={22} />, title: 'Equipo', desc: 'Profesionales del sector con experiencia en logística alimentaria, comprometidos con la excelencia operativa y el servicio al cliente.', color: '#10b981' },
              ].map(v => (
                <div key={v.title} style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem', backgroundColor: '#f8f9fc', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '0.75rem', backgroundColor: `${v.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: v.color, flexShrink: 0 }}>
                    {v.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1B2D6E', marginBottom: '0.3rem' }}>{v.title}</div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fc' }}>
        <div style={S.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={S.tag}>Nuestra flota</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#1B2D6E', letterSpacing: '-0.02em' }}>
              Infraestructura propia y certificada
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { type: 'Furgonetas Frío', temp: '0°C a 8°C', cert: 'Certificación ATP', color: '#3b82f6' },
              { type: 'Furgonetas Congelado', temp: '-18°C o menos', cert: 'Certificación ATP', color: '#6366f1' },
              { type: 'Furgonetas Seco', temp: 'Temperatura ambiente', cert: 'Homologadas alimentario', color: '#F0A87C' },
              { type: 'Almacén Frigorífico', temp: 'Múltiples cámaras', cert: 'Registro sanitario', color: '#10b981' },
            ].map(v => (
              <div key={v.type} style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.75rem', textAlign: 'center', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: `${v.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: v.color }} />
                </div>
                <div style={{ fontWeight: 700, color: '#1B2D6E', marginBottom: '0.4rem' }}>{v.type}</div>
                <div style={{ fontSize: '0.85rem', color: v.color, fontWeight: 600, marginBottom: '0.3rem' }}>{v.temp}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{v.cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#1B2D6E' }}>
        <div style={S.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ ...S.tag, backgroundColor: 'rgba(255,255,255,0.1)', color: '#F0A87C' }}>Nuestro compromiso</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
              Lo que puedes esperar siempre de nosotros
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {[
              'Temperatura verificada en cada viaje',
              'Comunicación proactiva ante cualquier incidencia',
              'Gestor dedicado para tu cuenta',
              'Puntualidad como estándar, no como excepción',
              'Mercancía completamente asegurada',
              'Informes y documentación en tiempo real',
              'Adaptación a cambios de última hora',
              'Confidencialidad de tus datos y operativa',
            ].map(c => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '0.75rem', padding: '1rem 1.25rem' }}>
                <CheckCircle size={16} style={{ color: '#F0A87C', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{c}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/contacto" className="btn-orange" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Trabajar con nosotros <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
