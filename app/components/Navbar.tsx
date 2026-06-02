'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/zonas', label: 'Zonas' },
  { href: '/clientes', label: 'Clientes' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'white', boxShadow: '0 2px 20px rgba(0,0,0,0.08)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo-transparente.png"
            alt="DML Logistic"
            width={230}
            height={82}
            style={{ objectFit: 'contain', height: '82px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="navbar-link" style={{ color: '#1B2D6E', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-nav">
          <a href="tel:+34682051216" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
            <Phone size={14} style={{ color: '#1B2D6E' }} />
            <span>+34 682 051 216</span>
          </a>
          <Link href="/contacto" className="btn-orange" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Solicitar presupuesto
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#1B2D6E', cursor: 'pointer', padding: '0.25rem' }} className="mobile-burger">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: 'white', borderTop: '1px solid #f1f5f9', padding: '1rem 1.5rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', color: '#1B2D6E', textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9', fontSize: '1rem', fontWeight: 600 }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contacto" onClick={() => setOpen(false)}
            style={{ display: 'block', marginTop: '1rem', backgroundColor: '#F0A87C', color: 'white', textAlign: 'center', padding: '0.75rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 700 }}
          >
            Solicitar presupuesto
          </Link>
        </div>
      )}

      <style>{`
        .navbar-link:hover { color: #F0A87C !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-burger { display: none !important; }
        }
      `}</style>
    </header>
  )
}
