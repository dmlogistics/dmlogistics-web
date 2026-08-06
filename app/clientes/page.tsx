import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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

export default function ClientesPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div style={S.container}>
          <div style={S.tag}>Confianza demostrada</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Empresas que confían en DML Logistic
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
            Desde obradores artesanales hasta distribuidoras de ámbito regional. Adaptamos nuestro servicio a cada tipo de negocio alimentario.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={S.container}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={S.tag}>A quién servimos</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#1B2D6E', letterSpacing: '-0.02em' }}>Sectores con los que trabajamos</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {['Restaurantes', 'Obradores y pastelerías', 'Tiendas gourmet', 'Distribuidoras alimentarias', 'Supermercados', 'Caterings y eventos', 'Importadores', 'Productores locales', 'Dark kitchens', 'Food trucks'].map(s => (
              <div key={s} style={{ backgroundColor: '#f8f9fc', border: '1px solid #e2e8f0', borderRadius: '2rem', padding: '0.5rem 1.25rem', fontSize: '0.875rem', fontWeight: 600, color: '#1B2D6E' }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', textAlign: 'center' }}>
        <div style={S.container}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            ¿Quieres ser el próximo?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.75, fontSize: '1.0625rem' }}>
            Únete a los negocios que ya confían en DML Logistic para su distribución alimentaria.
          </p>
          <Link href="/contacto" className="btn-orange" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Solicitar presupuesto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
