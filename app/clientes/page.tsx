import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

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

const testimonials = [
  { name: 'Carlos M.', role: 'Propietario', company: 'Obrador El Trigo', sector: 'Obrador / Pastelería', text: 'Llevamos más de un año trabajando con DML y jamás hemos tenido un problema. Puntuales, cuidadosos con el producto y siempre disponibles cuando hay cualquier imprevisto. Totalmente recomendables.' },
  { name: 'Laura P.', role: 'Directora', company: 'Tienda Gourmet Sabores', sector: 'Tienda Gourmet', text: 'Necesitábamos un transportista que entendiese la delicadeza de nuestros productos importados. DML lo entendió desde el primer día. El trato es muy personal y el servicio, impecable.' },
  { name: 'Javier R.', role: 'Jefe de Compras', company: 'Restaurante La Fragua', sector: 'Restauración', text: 'Lo que más valoramos es la flexibilidad horaria. Necesitamos entregas muy tempranas y DML se ha adaptado sin problemas desde el primer momento. Una relación cómoda y con total confianza.' },
  { name: 'María S.', role: 'Gerente', company: 'Distribuidora Frescos del Norte', sector: 'Distribución alimentaria', text: 'Trabajamos con DML para parte de nuestra distribución en Madrid y el nivel de servicio es muy alto. Respetan los horarios, la documentación llega correcta y la cadena de frío nunca ha fallado.' },
  { name: 'Andrés V.', role: 'Chef y propietario', company: 'Catering Premium Events', sector: 'Catering', text: 'En el mundo del catering, los tiempos lo son todo. Con DML tenemos la seguridad de que nuestra mercancía llegará cuando la necesitamos y en las condiciones que exige nuestra cocina.' },
  { name: 'Elena G.', role: 'Compradora', company: 'Supermercados Frescos', sector: 'Retail alimentario', text: 'Hemos probado varios proveedores de transporte y DML destaca claramente en atención al cliente y fiabilidad. Cuando surge un problema, siempre hay alguien al teléfono para resolverlo.' },
]

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

      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fc' }}>
        <div style={S.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={S.tag}>Opiniones reales</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#1B2D6E', letterSpacing: '-0.02em' }}>Lo que dicen quienes ya trabajan con nosotros</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color: '#F0A87C', fill: '#F0A87C' }} />)}
                </div>
                <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, color: '#1B2D6E', fontSize: '0.875rem' }}>{t.name} — {t.role}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.company}</div>
                  <div style={{ display: 'inline-block', marginTop: '0.4rem', backgroundColor: 'rgba(240,168,124,0.12)', color: '#e08a55', fontSize: '0.72rem', fontWeight: 600, padding: '0.15rem 0.6rem', borderRadius: '2rem' }}>{t.sector}</div>
                </div>
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
