import Link from 'next/link'
import { Thermometer, Package, Truck, Clock, Shield, Warehouse, CheckCircle, ArrowRight } from 'lucide-react'

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

const services = [
  {
    icon: <Thermometer size={36} />,
    title: 'Transporte en Frío',
    subtitle: 'Entre 0°C y 8°C',
    color: '#3b82f6',
    desc: 'Mantenemos la cadena de frío de forma continua para todo tipo de productos refrigerados. Nuestros vehículos están equipados con sistemas de control de temperatura certificados ATP y registradores de datos homologados.',
    ideal: ['Carnes y embutidos frescos', 'Lácteos y quesos', 'Frutas y verduras', 'Productos de IV y V gama', 'Platos preparados refrigerados'],
  },
  {
    icon: <Package size={36} />,
    title: 'Transporte en Congelado',
    subtitle: 'Hasta -18°C o menos',
    color: '#6366f1',
    desc: 'Cadena de congelación ininterrumpida desde recogida hasta entrega. Equipos de frío de última generación con alarmas automáticas y registro continuo de temperatura.',
    ideal: ['Pescados y mariscos congelados', 'Carnes congeladas', 'Helados y sorbetes', 'Precocinados y platos congelados', 'Masas y pastelería congelada'],
  },
  {
    icon: <Truck size={36} />,
    title: 'Transporte en Seco',
    subtitle: 'Temperatura ambiente',
    color: '#F0A87C',
    desc: 'Distribución eficiente de todo tipo de productos no perecederos. Vehículos limpios, con control de plagas y preparados para el sector alimentario.',
    ideal: ['Conservas y enlatados', 'Bebidas y refrescos', 'Snacks y frutos secos', 'Especias y condimentos', 'Aceites y vinagres'],
  },
  {
    icon: <Clock size={36} />,
    title: 'Transporte Dedicado',
    subtitle: 'Vehículo exclusivo',
    color: '#10b981',
    desc: 'Un vehículo y conductor asignados exclusivamente a tu empresa. Sin esperas, sin compartir espacio. Salida y entrega en los horarios que tú definas, incluyendo servicios nocturnos o en madrugada.',
    ideal: ['Distribuidores con rutas fijas', 'Cadenas de restauración', 'Empresas con volumen constante', 'Productos de alto valor', 'Clientes con horarios especiales'],
  },
  {
    icon: <Shield size={36} />,
    title: 'Pacto de Horas',
    subtitle: 'Flexibilidad total',
    color: '#f59e0b',
    desc: 'Contrata horas de servicio según tu necesidad. Perfecto para empresas con volumen variable que quieren flexibilidad sin perder la exclusividad del servicio.',
    ideal: ['Negocios con demanda estacional', 'Empresas en crecimiento', 'Volúmenes variables', 'Prueba de servicio antes de dedicado', 'Distribuciones puntuales'],
  },
  {
    icon: <Warehouse size={36} />,
    title: 'Almacenaje en Frío',
    subtitle: 'Almacén propio refrigerado',
    color: '#ec4899',
    desc: 'Guardamos tu mercancía en nuestras instalaciones refrigeradas con las condiciones adecuadas para cada producto. Ideal como puente entre la producción y la distribución.',
    ideal: ['Stock de seguridad', 'Mercancía pendiente de distribución', 'Importaciones con desfase logístico', 'Gestión de picos de producción', 'Clientes sin instalaciones propias'],
  },
]

export default function ServiciosPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div style={S.container}>
          <div style={S.tag}>Nuestros servicios</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Transporte adaptado a cada necesidad
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
            Sea cual sea tu producto alimentario, tenemos la solución adecuada. Frío, congelado, seco o a medida.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fc' }}>
        <div style={S.container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {services.map(srv => (
              <div key={srv.title} style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '2.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '1rem', backgroundColor: `${srv.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: srv.color, flexShrink: 0 }}>
                      {srv.icon}
                    </div>
                    <div>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B2D6E' }}>{srv.title}</h2>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: srv.color }}>{srv.subtitle}</span>
                    </div>
                  </div>
                  <p style={{ color: '#475569', lineHeight: 1.75, fontSize: '0.95rem' }}>{srv.desc}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Ideal para</div>
                  {srv.ideal.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                      <CheckCircle size={14} style={{ color: srv.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#334155' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', textAlign: 'center' }}>
        <div style={S.container}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            ¿No encuentras exactamente lo que necesitas?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '1.0625rem' }}>
            Cuéntanos tu caso. Diseñamos soluciones a medida.
          </p>
          <Link href="/contacto" className="btn-orange" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Hablar con un especialista <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
