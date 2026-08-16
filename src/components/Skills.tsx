import TiltCard from './TiltCard'
import { useInView } from '../hooks/useInView'
import { useMobile } from '../hooks/useMobile'

const categories = [
  {
    icon: '◈',
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'RxJS', 'React', 'React Native', 'Redux', 'HTML / CSS'],
  },
  {
    icon: '⬡',
    title: 'Backend',
    items: ['.NET / C#', 'Entity Framework Core', 'Node.js', 'Express', 'REST API'],
  },
  {
    icon: '◎',
    title: 'Base de données & Cloud',
    items: ['PostgreSQL', 'MongoDB', 'Azure', 'Azure DevOps', 'GitHub'],
  },
  {
    icon: '◇',
    title: 'Outils',
    items: ['Agile / Scrum', 'Git'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()
  const isMobile = useMobile()

  return (
    <section id="skills" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Label */}
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
              02 — Compétences
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
          </div>

          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4vw, 50px)',
              letterSpacing: '-0.03em',
              color: '#dde4f0',
              marginBottom: 56,
            }}
          >
            Stack technique
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
                }}
              >
                <TiltCard
                  style={{
                    background: 'rgba(11,16,32,0.85)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14,
                    padding: '28px',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    height: '100%',
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <span style={{ fontSize: 17, color: '#5b8fff', lineHeight: 1 }}>{cat.icon}</span>
                    <h3
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600,
                        fontSize: 15.5,
                        color: '#dde4f0',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {cat.items.map(item => (
                      <span
                        key={item}
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: 11,
                          color: '#6b7f99',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          borderRadius: 5,
                          padding: '4px 9px',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
