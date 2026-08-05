const S = {
  wrap: { maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' },
  h2: { fontSize: '1.2rem', fontWeight: 800 as const, color: '#1B2D6E', margin: '2.25rem 0 0.75rem' },
  p: { color: '#475569', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '1rem' },
  li: { color: '#475569', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '0.4rem' },
}

export default function PoliticaCookiesPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div style={S.wrap}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(240,168,124,0.15)', color: '#e08a55', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', borderRadius: '2rem', marginBottom: '1rem' }}>Información legal</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Política de Cookies</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Última actualización: agosto de 2026</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={S.wrap}>
          <h2 style={S.h2}>1. ¿Qué son las cookies?</h2>
          <p style={S.p}>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario al navegar. Sirven para recordar información sobre la visita y pueden ser necesarias para el funcionamiento del sitio o utilizarse con fines de análisis, personalización o publicidad.
          </p>

          <h2 style={S.h2}>2. Cookies utilizadas en este sitio web</h2>
          <p style={S.p}>
            Actualmente, <strong>dmlogistics.es no utiliza cookies de análisis, publicidad, seguimiento ni elaboración de perfiles</strong>. El sitio únicamente puede emplear, en su caso, cookies técnicas estrictamente necesarias para garantizar su correcto funcionamiento y la seguridad de la navegación. Conforme al artículo 22.2 de la LSSI-CE, este tipo de cookies están exentas del deber de obtener el consentimiento del usuario, por lo que este sitio no muestra banner de cookies.
          </p>

          <h2 style={S.h2}>3. Tipos de cookies (información general)</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={S.li}><strong>Técnicas o necesarias:</strong> permiten la navegación y el uso de las funciones básicas del sitio.</li>
            <li style={S.li}><strong>De análisis:</strong> permiten medir y analizar el comportamiento de los usuarios. <em>(No se utilizan en este sitio.)</em></li>
            <li style={S.li}><strong>De personalización:</strong> recuerdan preferencias del usuario. <em>(No se utilizan en este sitio.)</em></li>
            <li style={S.li}><strong>Publicitarias:</strong> gestionan la publicidad mostrada. <em>(No se utilizan en este sitio.)</em></li>
          </ul>

          <h2 style={S.h2}>4. Cómo gestionar las cookies</h2>
          <p style={S.p}>
            Aunque este sitio no instala cookies no esenciales, puedes configurar tu navegador para bloquear o eliminar las cookies en cualquier momento. Consulta la sección de ayuda o preferencias de tu navegador (Chrome, Firefox, Safari, Edge, etc.) para conocer cómo hacerlo. Ten en cuenta que la desactivación de determinadas cookies técnicas podría afectar al funcionamiento del sitio.
          </p>

          <h2 style={S.h2}>5. Cambios en la política de cookies</h2>
          <p style={S.p}>
            Si en el futuro incorporamos cookies de análisis, personalización o publicidad, actualizaremos esta política e implementaremos un sistema de gestión del consentimiento (banner de cookies) que te permitirá aceptarlas o rechazarlas antes de su instalación.
          </p>
        </div>
      </section>
    </>
  )
}
