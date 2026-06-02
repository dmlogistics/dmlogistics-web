import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'DML Logistic — Transporte Alimentario Especializado',
  description: 'Transporte de mercancías alimentarias en frío, congelado y seco. Flota propia certificada ATP. Madrid, Valencia y Barcelona.',
  keywords: 'transporte alimentario, transporte frío, logística alimentaria, transporte congelado, Madrid, Valencia, Barcelona',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ paddingTop: '100px' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
