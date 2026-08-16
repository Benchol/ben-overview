import { useInView } from '../hooks/useInView'
import { useMobile } from '../hooks/useMobile'

export default function Contact() {
  const { ref, inView } = useInView()
  const isMobile = useMobile()

  return (
    <section
      id="contact"
      style={{
        padding: '120px 0 80px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -240,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 500,
          background: 'radial-gradient(ellipse, rgba(91,143,255,0.07) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px', position: 'relative' }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)',
            textAlign: 'center',
          }}
        >
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 64,
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 120,
                height: 1,
                background: 'rgba(255,255,255,0.07)',
              }}
            />
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 11,
                color: '#5b8fff',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              05 — Contact
            </span>
            <div
              style={{
                width: 120,
                height: 1,
                background: 'rgba(255,255,255,0.07)',
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(38px, 5.5vw, 72px)',
              letterSpacing: '-0.035em',
              color: '#dde4f0',
              marginBottom: 16,
              lineHeight: 1.05,
            }}
          >
            Travaillons ensemble
          </h2>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 17,
              lineHeight: 1.72,
              color: '#6b7f99',
              maxWidth: 500,
              margin: '0 auto 52px',
            }}
          >
            Disponible pour de nouveaux projets et opportunités.
            <br />
            N'hésitez pas à me contacter.
          </p>

          <a
            href="mailto:rianabe002@gmail.com"
            style={{
              display: 'inline-block',
              padding: '15px 38px',
              background: '#5b8fff',
              color: '#fff',
              fontFamily: 'Outfit, sans-serif',
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 10,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 44px rgba(91,143,255,0.3)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#4a7bf5'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 0 64px rgba(91,143,255,0.5)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#5b8fff'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 0 44px rgba(91,143,255,0.3)'
            }}
          >
            rianabe002@gmail.com
          </a>

          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: isMobile ? 24 : 48,
              marginTop: 56,
              paddingTop: 48,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {[
              { label: 'Téléphone', value: '+32 472 21 42 02', href: 'tel:+32472214202' },
              { label: 'Localisation', value: 'Mons, Belgique', href: null },
              { label: 'Disponibilité', value: 'Immédiate', href: null },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10,
                    color: '#5b8fff',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 14,
                      color: '#8fa3bc',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#dde4f0')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#8fa3bc')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#8fa3bc' }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: 'rgba(107,127,153,0.3)',
              marginTop: 72,
              letterSpacing: '0.06em',
            }}
          >
            © {new Date().getFullYear()} Riana Andriarinaivo · Développeur Fullstack Angular / .NET
          </p>
        </div>
      </div>
    </section>
  )
}
