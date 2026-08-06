import Link from 'next/link'
import { MapPin, CheckCircle, Clock, ArrowRight } from 'lucide-react'

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

const zones = [
  {
    city: 'Madrid',
    status: 'Operativo',
    statusColor: '#10b981',
    desc: 'Cobertura completa en Madrid capital y toda la Comunidad de Madrid. Múltiples frecuencias diarias.',
    areas: ['Madrid Capital', 'Alcalá de Henares', 'Getafe', 'Leganés', 'Alcobendas', 'Móstoles', 'Torrejón de Ardoz', 'Arganda del Rey', 'Rivas-Vaciamadrid', 'Toda la CAM'],
    schedule: 'Servicio diario incluidos festivos. Horarios nocturnos disponibles.',
  },
  {
    city: 'Valencia',
    status: 'Operativo',
    statusColor: '#10b981',
    desc: 'Cobertura en Valencia y toda la Comunitat Valenciana. Servicio especializado en transporte alimentario.',
    areas: ['Valencia Capital', 'Alicante', 'Castellón', 'Elche', 'Torrent', 'Gandía', 'Sagunto', 'Toda la CV'],
    schedule: 'Servicio adaptado a tus horarios. Consúltanos frecuencias y ventanas de entrega.',
  },
  {
    city: 'Barcelona',
    status: 'Operativo',
    statusColor: '#10b981',
    desc: 'Cobertura en Barcelona y toda Cataluña. Servicio especializado en transporte alimentario.',
    areas: ['Barcelona Capital', "L'Hospitalet", 'Badalona', 'Terrassa', 'Sabadell', 'Girona', 'Tarragona', 'Toda Cataluña'],
    schedule: 'Servicio adaptado a tus horarios. Consúltanos frecuencias y ventanas de entrega.',
  },
]

export default function ZonasPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div style={S.container}>
          <div style={S.tag}>Cobertura nacional</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Zonas de reparto y cobertura
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
            Operamos en Madrid, Valencia y Barcelona, con servicio especializado de transporte alimentario en cada zona.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fc' }}>
        <div style={S.container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {zones.map(z => (
              <div key={z.city} className="zone-card" style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '2.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <MapPin size={24} style={{ color: '#1B2D6E' }} />
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1B2D6E' }}>{z.city}</h2>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: `${z.statusColor}18`, color: z.statusColor, padding: '0.2rem 0.75rem', borderRadius: '2rem' }}>{z.status}</span>
                    </div>
                    <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.95rem' }}>{z.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#64748b', fontSize: '0.875rem' }}>
                      <Clock size={14} style={{ color: '#F0A87C', marginTop: '2px', flexShrink: 0 }} />
                      {z.schedule}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Zonas cubiertas</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                      {z.areas.map(a => (
                        <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                          <CheckCircle size={12} style={{ color: z.statusColor, flexShrink: 0 }} />
                          {a}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#1B2D6E', textAlign: 'center' }}>
        <div style={S.container}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            ¿Tu zona no aparece aquí?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.75, fontSize: '1.0625rem' }}>
            Cuéntanos dónde operas. Estudiamos cada caso y en muchas ocasiones podemos dar solución aunque no estés en nuestras zonas habituales.
          </p>
          <Link href="/contacto" className="btn-orange" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Consultar disponibilidad <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
