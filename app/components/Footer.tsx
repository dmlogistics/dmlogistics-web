'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#131f4e', color: 'rgba(255,255,255,0.75)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>DML</div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#F0A87C', letterSpacing: '0.2em', textTransform: 'uppercase' }}>LOGISTIC</div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Transporte especializado de mercancías alimentarias. Frío, congelado y seco con flota propia certificada ATP.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'background 0.2s', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 700 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F0A87C')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              >in</a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'background 0.2s', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 700 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F0A87C')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              >ig</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Empresa</h4>
            {[
              { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
              { href: '/servicios', label: 'Servicios' },
              { href: '/zonas', label: 'Zonas de Reparto' },
              { href: '/clientes', label: 'Nuestros Clientes' },
              { href: '/contacto', label: 'Contacto' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: '0.6rem', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F0A87C')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Servicios</h4>
            {['Transporte en Frío', 'Transporte en Congelado', 'Transporte en Seco', 'Transporte Dedicado', 'Pacto de Horas', 'Almacenaje en Frío'].map(s => (
              <div key={s} style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '0.6rem', fontSize: '0.875rem' }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contacto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a href="tel:+34682051216" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Phone size={14} style={{ color: '#F0A87C', flexShrink: 0 }} />
                +34 682 051 216
              </a>
              <a href="mailto:info@dmlogistics.es" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Mail size={14} style={{ color: '#F0A87C', flexShrink: 0 }} />
                info@dmlogistics.es
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem' }}>
                <MapPin size={14} style={{ color: '#F0A87C', flexShrink: 0, marginTop: '2px' }} />
                <span>Madrid · Valencia · Barcelona</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8rem' }}>© {new Date().getFullYear()} DML Logistic. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Política de Privacidad</Link>
            <Link href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Aviso Legal</Link>
            <Link href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
