const S = {
  wrap: { maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' },
  h2: { fontSize: '1.2rem', fontWeight: 800 as const, color: '#1B2D6E', margin: '2.25rem 0 0.75rem' },
  p: { color: '#475569', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '1rem' },
  li: { color: '#475569', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '0.4rem' },
}

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1B2D6E 0%, #131f4e 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div style={S.wrap}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(240,168,124,0.15)', color: '#e08a55', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.9rem', borderRadius: '2rem', marginBottom: '1rem' }}>Información legal</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Política de Privacidad</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Última actualización: agosto de 2026</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={S.wrap}>
          <p style={S.p}>
            En DML SOLUTIONS, S.L. nos comprometemos a proteger la privacidad de los usuarios y a tratar sus datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
          </p>

          <h2 style={S.h2}>1. Responsable del tratamiento</h2>
          <p style={S.p}>
            <strong>Titular:</strong> DML SOLUTIONS, S.L.<br />
            <strong>CIF:</strong> B26604371<br />
            <strong>Domicilio:</strong> Calle Matilde Salvador, 16, 3ºA, 28320 Pinto (Madrid), España<br />
            <strong>Correo electrónico:</strong> info@dmlogistics.es<br />
            <strong>Teléfono:</strong> +34 682 051 216
          </p>

          <h2 style={S.h2}>2. ¿Qué datos tratamos y cómo los obtenemos?</h2>
          <p style={S.p}>
            Tratamos los datos que nos facilitas a través del formulario de contacto (nombre, empresa, correo electrónico, teléfono, servicio de interés y el contenido de tu mensaje) o cuando te comunicas con nosotros por correo electrónico, teléfono o WhatsApp. No se recaban categorías especiales de datos. Los datos solicitados con un asterisco son necesarios para poder atender tu solicitud.
          </p>

          <h2 style={S.h2}>3. Finalidad del tratamiento</h2>
          <p style={S.p}>
            Utilizamos tus datos para atender tus solicitudes de información y presupuesto, gestionar la relación comercial y responder a tus consultas. No se toman decisiones automatizadas ni se elabora perfilado con tus datos.
          </p>

          <h2 style={S.h2}>4. Legitimación</h2>
          <p style={S.p}>
            La base jurídica del tratamiento es el consentimiento que prestas al enviar el formulario y aceptar esta Política de Privacidad (art. 6.1.a RGPD), así como la aplicación de medidas precontractuales adoptadas a tu solicitud (art. 6.1.b RGPD).
          </p>

          <h2 style={S.h2}>5. Plazo de conservación</h2>
          <p style={S.p}>
            Conservaremos tus datos mientras se mantenga la relación o el interés mutuo y, una vez finalizada, durante los plazos legalmente exigibles. Cuando dejen de ser necesarios, se suprimirán aplicando medidas de seguridad adecuadas.
          </p>

          <h2 style={S.h2}>6. Destinatarios</h2>
          <p style={S.p}>
            No cederemos tus datos a terceros salvo obligación legal. Tus datos podrán ser tratados por proveedores de servicios que actúan como encargados del tratamiento (por ejemplo, servicios de alojamiento web y de correo electrónico), con los que se han suscrito los contratos exigidos por la normativa y que ofrecen garantías adecuadas. En caso de que algún proveedor implique transferencias internacionales de datos, estas se realizarán con las garantías previstas en el RGPD.
          </p>

          <h2 style={S.h2}>7. Tus derechos</h2>
          <p style={S.p}>Puedes ejercer en cualquier momento los siguientes derechos:</p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={S.li}>Acceso a tus datos personales.</li>
            <li style={S.li}>Rectificación de datos inexactos.</li>
            <li style={S.li}>Supresión de tus datos.</li>
            <li style={S.li}>Oposición y limitación del tratamiento.</li>
            <li style={S.li}>Portabilidad de tus datos.</li>
            <li style={S.li}>Retirar el consentimiento prestado, sin efecto retroactivo.</li>
          </ul>
          <p style={S.p}>
            Para ejercerlos, escríbenos a <a href="mailto:info@dmlogistics.es" style={{ color: '#1B2D6E', fontWeight: 600 }}>info@dmlogistics.es</a> indicando el derecho que deseas ejercer. Podemos solicitarte que acredites tu identidad.
          </p>

          <h2 style={S.h2}>8. Reclamaciones</h2>
          <p style={S.p}>
            Si consideras que el tratamiento de tus datos no se ajusta a la normativa, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), a través de su sede electrónica en www.aepd.es.
          </p>

          <h2 style={S.h2}>9. Seguridad y veracidad de los datos</h2>
          <p style={S.p}>
            Aplicamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos y evitar su alteración, pérdida o acceso no autorizado. El usuario garantiza que los datos facilitados son veraces y se compromete a comunicar cualquier modificación de los mismos.
          </p>

          <h2 style={S.h2}>10. Cambios en esta política</h2>
          <p style={S.p}>
            Podremos actualizar esta Política de Privacidad para adaptarla a novedades legislativas o de nuestra actividad. La versión vigente será siempre la publicada en este sitio web.
          </p>
        </div>
      </section>
    </>
  )
}
