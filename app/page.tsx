import Link from 'next/link'
import { Thermometer, Package, Truck, Clock, Shield, Star, MapPin, ArrowRight, CheckCircle, ChevronRight, Warehouse } from 'lucide-react'

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

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 60%, #0d1638 100%)', minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(240,168,124,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ ...S.container, width: '100%', position: 'relative', zIndex: 1, padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={S.tag}>Transporte Alimentario Especializado</div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Tu mercancía alimentaria, siempre en las{' '}
              <span style={{ color: '#F0A87C' }}>mejores condiciones</span>
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '580px' }}>
              Transporte dedicado en frío, congelado y seco con flota propia certificada ATP. Nos adaptamos a tus horarios y necesidades para que tu producto llegue siempre en perfectas condiciones.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <Link href="/contacto" className="btn-orange">Solicitar presupuesto</Link>
              <Link href="/servicios" className="btn-outline-white">Ver servicios</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {['Flota propia ATP', 'Frío · Congelado · Seco', 'Mercancía asegurada', 'Horarios flexibles'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>
                  <CheckCircle size={14} style={{ color: '#F0A87C', flexShrink: 0 }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: '#F0A87C', padding: '1rem 0' }}>
        <div style={{ ...S.container, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '1rem' }}>
          {[
            { value: '+500', label: 'Envíos al mes' },
            { value: '3', label: 'Ciudades activas' },
            { value: '100%', label: 'Flota propia' },
            { value: 'ATP', label: 'Certificación oficial' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', padding: '0.5rem 1rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#131f4e' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(19,31,78,0.75)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f8f9fc' }}>
        <div style={S.container}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={S.tag}>Lo que hacemos</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1B2D6E', letterSpacing: '-0.02em' }}>
              Soluciones de transporte a tu medida
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#64748b', marginTop: '0.75rem', maxWidth: '520px', margin: '0.75rem auto 0' }}>
              Desde frutas y verduras hasta alta gastronomía. Movemos cualquier mercancía alimentaria con las garantías que necesitas.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Thermometer size={28} />, title: 'Transporte en Frío', desc: 'Temperatura controlada entre 0°C y 8°C para lácteos, carnes, frescos y productos que requieren refrigeración constante.', color: '#3b82f6' },
              { icon: <Package size={28} />, title: 'Transporte en Congelado', desc: 'Mantenemos la cadena de congelación hasta -18°C o menos. Perfecto para helados, pescado congelado y precocinados.', color: '#6366f1' },
              { icon: <Truck size={28} />, title: 'Transporte en Seco', desc: 'Distribución de productos no perecederos: conservas, bebidas, snacks, especias y todo tipo de alimentación seca.', color: '#F0A87C' },
              { icon: <Clock size={28} />, title: 'Transporte Dedicado', desc: 'Un vehículo exclusivo para tu mercancía. Salida y entrega según tus tiempos, sin compartir espacio con otros clientes.', color: '#10b981' },
              { icon: <Shield size={28} />, title: 'Pacto de Horas', desc: 'Contrata horas de vehículo y conductor a medida. Ideal para distribuciones regulares con volumen variable.', color: '#f59e0b' },
              { icon: <Warehouse size={28} />, title: 'Almacenaje en Frío', desc: 'Instalaciones de almacenamiento refrigerado para cuando necesites guardar mercancía antes o después del transporte.', color: '#ec4899' },
            ].map(srv => (
              <div key={srv.title} className="card-hover" style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '0.75rem', backgroundColor: `${srv.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: srv.color, marginBottom: '1.25rem' }}>
                  {srv.icon}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1B2D6E', marginBottom: '0.6rem' }}>{srv.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65 }}>{srv.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/servicios" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#1B2D6E', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', borderBottom: '2px solid #F0A87C', paddingBottom: '2px' }}>
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div style={S.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={S.tag}>Nuestros diferenciales</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1B2D6E', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                ¿Por qué elegir DML Logistic?
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.75, marginBottom: '2rem' }}>
                No somos un intermediario. Somos tus socios logísticos con flota propia, equipo dedicado y un compromiso real con la integridad de tu producto.
              </p>
              {[
                { title: 'Flota 100% propia y certificada ATP', desc: 'Sin subcontrataciones. Controlamos cada vehículo y garantizamos las condiciones de temperatura en todo momento.' },
                { title: 'Adaptación total a tus horarios', desc: 'Servicios nocturnos, en madrugada o en el horario que mejor encaje con tu operativa. Nosotros nos adaptamos.' },
                { title: 'Trato personalizado y cercano', desc: 'Tendrás un gestor asignado que conoce tu negocio y está disponible para resolver cualquier incidencia.' },
                { title: 'Mercancía completamente asegurada', desc: 'Todo lo que transportamos está cubierto. Incluidos riesgos de rotura de cadena de frío y deterioro del producto.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F0A87C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle size={16} color="white" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1B2D6E', marginBottom: '0.2rem', fontSize: '0.95rem' }}>{item.title}</div>
                    <div style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#1B2D6E', borderRadius: '1.5rem', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'rgba(240,168,124,0.1)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#F0A87C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Sectores a los que servimos</div>
                {['Restaurantes y hostelería', 'Tiendas gourmet y delicatessen', 'Obradores y pastelerías', 'Distribuidores alimentarios', 'Supermercados y comercios', 'Caterings y eventos'].map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <ChevronRight size={14} style={{ color: '#F0A87C', flexShrink: 0 }} />
                    {s}
                  </div>
                ))}
                <Link href="/contacto" className="btn-orange" style={{ display: 'block', textAlign: 'center', marginTop: '1.75rem' }}>
                  Pedir presupuesto gratuito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f8f9fc' }}>
        <div style={S.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={S.tag}>Cobertura nacional</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1B2D6E', letterSpacing: '-0.02em' }}>Zonas de operación</h2>
            <p style={{ fontSize: '1.0625rem', color: '#64748b', marginTop: '0.75rem' }}>Activos en Madrid y en plena expansión hacia Valencia y Barcelona</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { city: 'Madrid', status: 'Activo', color: '#10b981', desc: 'Cobertura completa en Madrid capital y comunidad. Servicio diario con múltiples frecuencias.' },
              { city: 'Valencia', status: 'Próximamente', color: '#f59e0b', desc: 'En proceso de expansión. Pronto disponible para toda la Comunitat Valenciana.' },
              { city: 'Barcelona', status: 'Próximamente', color: '#f59e0b', desc: 'En proceso de expansión. Pronto disponible en Barcelona y área metropolitana.' },
            ].map(z => (
              <div key={z.city} className="zone-card" style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} style={{ color: '#1B2D6E' }} />
                    <span style={{ fontWeight: 700, fontSize: '1.125rem', color: '#1B2D6E' }}>{z.city}</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, backgroundColor: `${z.color}18`, color: z.color, padding: '0.2rem 0.65rem', borderRadius: '2rem' }}>{z.status}</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65 }}>{z.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/zonas" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#1B2D6E', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', borderBottom: '2px solid #F0A87C', paddingBottom: '2px' }}>
              Ver cobertura completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div style={S.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={S.tag}>Opiniones reales</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1B2D6E', letterSpacing: '-0.02em' }}>Lo que dicen nuestros clientes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Carlos M.', role: 'Propietario, Obrador El Trigo', text: 'Llevamos más de un año trabajando con DML y jamás hemos tenido un problema. Puntuales, cuidadosos con el producto y siempre disponibles. Totalmente recomendables.' },
              { name: 'Laura P.', role: 'Directora, Tienda Gourmet Sabores', text: 'Necesitábamos un transportista que entendiese la delicadeza de nuestros productos. DML lo entendió desde el primer día. El trato es muy personal y el servicio, impecable.' },
              { name: 'Javier R.', role: 'Jefe de compras, Restaurante La Fragua', text: 'Lo que más valoramos es la flexibilidad horaria. Nos adaptamos a sus ventanas de entrega y ellos a las nuestras. Una relación cómoda y sin complicaciones.' },
            ].map((t, i) => (
              <div key={i} style={{ backgroundColor: '#f8f9fc', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color: '#F0A87C', fill: '#F0A87C' }} />)}
                </div>
                <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div style={{ fontWeight: 700, color: '#1B2D6E', fontSize: '0.875rem' }}>{t.name}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(240,168,124,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ ...S.container, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={S.tag}>¿Hablamos?</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Cuéntanos qué necesitas
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Analizamos tu operativa y te preparamos una solución a medida. Sin compromiso y sin coste.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contacto" className="btn-orange">Solicitar presupuesto gratuito</Link>
            <a href="tel:+34600000000" className="btn-outline-white">Llamar ahora</a>
          </div>
        </div>
      </section>
    </>
  )
}
