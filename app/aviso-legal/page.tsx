const S = {
  wrap: { maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' },
  h2: { fontSize: '1.2rem', fontWeight: 800 as const, color: '#1B2D6E', margin: '2.25rem 0 0.75rem' },
  p: { color: '#475569', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '1rem' },
}

export default function AvisoLegalPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div style={S.wrap}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(240,168,124,0.15)', color: '#e08a55', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', borderRadius: '2rem', marginBottom: '1rem' }}>Información legal</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Aviso Legal</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Última actualización: agosto de 2026</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={S.wrap}>
          <h2 style={S.h2}>1. Datos identificativos del titular</h2>
          <p style={S.p}>
            En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición del usuario los siguientes datos del titular de este sitio web:
          </p>
          <p style={S.p}>
            <strong>Titular:</strong> DML SOLUTIONS, S.L.<br />
            <strong>CIF:</strong> B26604371<br />
            <strong>Domicilio social:</strong> Calle Matilde Salvador, 16, 3ºA, 28320 Pinto (Madrid), España<br />
            <strong>Correo electrónico:</strong> info@dmlogistics.es<br />
            <strong>Teléfono:</strong> +34 682 051 216<br />
            <strong>Inscripción:</strong> Sociedad inscrita en el Registro Mercantil de Madrid.
          </p>

          <h2 style={S.h2}>2. Objeto</h2>
          <p style={S.p}>
            El presente Aviso Legal regula el uso del sitio web dmlogistics.es (en adelante, el &laquo;Sitio Web&raquo;), del que es titular DML SOLUTIONS, S.L. (en adelante, &laquo;DML Logistic&raquo;). La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena de todas las cláusulas incluidas en este Aviso Legal.
          </p>

          <h2 style={S.h2}>3. Condiciones de uso</h2>
          <p style={S.p}>
            El usuario se compromete a hacer un uso adecuado y lícito del Sitio Web y de sus contenidos, de conformidad con la legislación aplicable, el presente Aviso Legal, la moral y el orden público. El usuario se abstendrá de utilizar el Sitio Web con fines ilícitos o lesivos contra DML Logistic o terceros, o que de cualquier forma puedan dañar, inutilizar o sobrecargar el Sitio Web o impedir su normal utilización.
          </p>

          <h2 style={S.h2}>4. Propiedad intelectual e industrial</h2>
          <p style={S.p}>
            Todos los contenidos del Sitio Web (textos, imágenes, logotipos, diseño gráfico, código fuente, marcas y demás elementos) son titularidad de DML Logistic o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin la autorización expresa de su titular.
          </p>

          <h2 style={S.h2}>5. Responsabilidad</h2>
          <p style={S.p}>
            DML Logistic no se hace responsable de los daños y perjuicios que pudieran derivarse de la falta de disponibilidad o continuidad del Sitio Web, ni de errores u omisiones en sus contenidos. DML Logistic realiza los máximos esfuerzos para que la información sea veraz y esté actualizada, si bien no garantiza la ausencia de errores.
          </p>

          <h2 style={S.h2}>6. Enlaces a terceros</h2>
          <p style={S.p}>
            El Sitio Web puede contener enlaces a sitios de terceros. DML Logistic no asume responsabilidad alguna sobre los contenidos o prácticas de dichos sitios, cuya gestión corresponde exclusivamente a sus titulares.
          </p>

          <h2 style={S.h2}>7. Protección de datos</h2>
          <p style={S.p}>
            El tratamiento de los datos personales facilitados a través del Sitio Web se rige por lo dispuesto en nuestra <a href="/politica-privacidad" style={{ color: '#1B2D6E', fontWeight: 600 }}>Política de Privacidad</a>.
          </p>

          <h2 style={S.h2}>8. Legislación aplicable y jurisdicción</h2>
          <p style={S.p}>
            El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web, las partes se someterán a los Juzgados y Tribunales que resulten competentes conforme a la normativa aplicable.
          </p>

          <h2 style={S.h2}>9. Modificaciones</h2>
          <p style={S.p}>
            DML Logistic se reserva el derecho a modificar el presente Aviso Legal en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio Web.
          </p>
        </div>
      </section>
    </>
  )
}
