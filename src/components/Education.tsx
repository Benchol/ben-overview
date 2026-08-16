import { useInView } from '../hooks/useInView'
import { useMobile } from '../hooks/useMobile'

const education = [
  {
    degree: 'Master',
    field: 'Mathématiques Informatiques et Statistiques Appliquées (MISA)',
    school: "Ankatso - Université d'Antananarivo — Madagascar",
    period: '2021 – 2024',
  },
  {
    degree: 'Licence',
    field: 'Mathématiques Informatiques et Statistiques Appliquées (MISA)',
    school: "Ankatso - Université d'Antananarivo — Madagascar",
    period: '2018 – 2021',
  },
]

const languages = [
  { lang: 'Malgache', level: 'Langue maternelle', pct: 100 },
  { lang: 'Français', level: 'C1 — Courant', pct: 85 },
  { lang: 'Anglais', level: 'A2 — Notions', pct: 30 },
]

export default function Education() {
  const { ref, inView } = useInView()
  const isMobile = useMobile()

  return (
    <section id="education" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 11,
                color: '#5b8fff',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              04 — Formation
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 48 : 72 }}>
            {/* Education */}
            <div>
              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: 32,
                  letterSpacing: '-0.025em',
                  color: '#dde4f0',
                  marginBottom: 36,
                }}
              >
                Formation
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {education.map((edu, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(11,16,32,0.8)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 12,
                      padding: '24px 28px',
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'none' : 'translateY(16px)',
                      transition: `opacity 0.65s ease ${i * 120}ms, transform 0.65s ease ${i * 120}ms`,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: 10.5,
                          color: '#5b8fff',
                          background: 'rgba(91,143,255,0.08)',
                          border: '1px solid rgba(91,143,255,0.15)',
                          borderRadius: 4,
                          padding: '2px 8px',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {edu.degree}
                      </span>
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: 11,
                          color: '#6b7f99',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600,
                        fontSize: 14.5,
                        color: '#dde4f0',
                        lineHeight: 1.45,
                        marginBottom: 7,
                      }}
                    >
                      {edu.field}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6b7f99' }}>
                      {edu.school}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: 32,
                  letterSpacing: '-0.025em',
                  color: '#dde4f0',
                  marginBottom: 36,
                }}
              >
                Langues
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {languages.map((lang, i) => (
                  <div
                    key={lang.lang}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'none' : 'translateY(16px)',
                      transition: `opacity 0.65s ease ${i * 120}ms, transform 0.65s ease ${i * 120}ms`,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontWeight: 600,
                          fontSize: 15,
                          color: '#dde4f0',
                        }}
                      >
                        {lang.lang}
                      </span>
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: 11.5,
                          color: '#6b7f99',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {lang.level}
                      </span>
                    </div>
                    <div
                      style={{
                        height: 3,
                        background: 'rgba(255,255,255,0.07)',
                        borderRadius: 999,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: inView ? `${lang.pct}%` : '0%',
                          background:
                            lang.pct === 100
                              ? 'linear-gradient(to right, #5b8fff, #4ade80)'
                              : 'linear-gradient(to right, #5b8fff, #7da8ff)',
                          borderRadius: 999,
                          transition: `width 1.3s cubic-bezier(0.16,1,0.3,1) ${200 + i * 180}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
