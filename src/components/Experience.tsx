import { useInView } from '../hooks/useInView'
import { useMobile } from '../hooks/useMobile'

const jobs = [
  {
    company: 'Corellia',
    role: 'Développeur Fullstack Angular / .NET',
    period: 'Août 2023 – Aujourd\'hui',
    location: 'Mons, Belgique',
    bullets: [],
    stack: [],
    tools: [],
    projects: [
      {
        name: 'Sppote - Gestion de salle de CrossFit',
        bullets: [
          "Prise en charge du développement du back-office: dashboard, membres, abonnements, planning, paiements et messagerie.",
          "Conception et développement de fonctionnalités Angular, de l'interface utilisateur jusqu'à l'intégration des API .NET.",
          "Développement d'API REST et logique métier côté .NET à partir des User Stories définies en Agile.",
          "Participation au développement mobile en React Native en renfort de l'équipe.",
          'Gestion des templates emails et PDF.',
        ],
        stack: ['Angular', 'TypeScript', 'RxJS', '.NET', 'C#', 'Entity Framework', 'PostgreSQL', 'React Native'],
        tools: ['Agile/Scrum', 'Azure DevOps', 'Azure', 'GitHub'],
      },
      {
        name: 'Confidentiel — Mont-de-l\'Enclus (BEL)',
        confidential: true,
        bullets: [
          "Participation à la reprise d'un projet legacy de suivi de flotte et de distribution.",
          "Développement et maintenance de l'interface utilisateur en Angular, implémentation de nouvelles fonctionnalités et intégration avec les API back-end.",
        ],
        stack: ['Angular', 'TypeScript', 'RxJS', 'REST API', 'Azure'],
        tools: ['Azure DevOps', 'Agile/Scrum'],
      },
    ],
  },
  {
    company: 'Vatilab',
    role: 'Stagiaire Développeur Web',
    period: 'Mai 2023 – Août 2023',
    location: 'Antananarivo, Madagascar',
    bullets: [
      'Développement et intégration de pages et fonctionnalités sur une plateforme de réseau social avec React et TypeScript.',
      'Intégration d\'une messagerie en temps réel avec WebSocket côté front-end.',
      'Gestion de l\'état de l\'application avec Redux.',
      'Intégration des API REST et de Stripe pour les paiements.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'REST API', 'Stripe', 'WebSocket'],
    tools: [],
  },
  {
    company: 'Upwork',
    role: 'Développeur MEAN Stack',
    period: 'Oct. 2022 – Mars 2023',
    location: 'Remote (freelance)',
    bullets: [
      'Maintenance et évolution d\'une application web développée avec la stack MEAN.',
      'Développement de nouvelles fonctionnalités.',
      'Intégration de solutions de paiement Stripe et Mollie.',
    ],
    stack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Stripe', 'Mollie'],
    tools: [],
  },
]

function JobCard({ job, index }: { job: typeof jobs[0]; index: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '1px 1fr',
        gap: '0 40px',
        position: 'relative',
        paddingBottom: index < jobs.length - 1 ? 56 : 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms`,
      }}
    >
      {/* Timeline line + dot */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 1,
            background:
              index < jobs.length - 1
                ? 'linear-gradient(to bottom, rgba(91,143,255,0.4) 0%, rgba(91,143,255,0.08) 100%)'
                : 'rgba(91,143,255,0.4)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: -4,
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: '#5b8fff',
            boxShadow: '0 0 14px rgba(91,143,255,0.65)',
          }}
        />
      </div>

      {/* Card */}
      <div
        style={{
          background: 'rgba(11,16,32,0.7)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 14,
          padding: '28px 32px',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'rgba(91,143,255,0.2)'
          el.style.boxShadow = '0 0 40px rgba(91,143,255,0.05)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'rgba(255,255,255,0.07)'
          el.style.boxShadow = 'none'
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 20,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: '-0.02em',
                color: '#dde4f0',
                marginBottom: 4,
              }}
            >
              {job.role}
            </h3>
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: 14,
                color: '#5b8fff',
                letterSpacing: '0.01em',
              }}
            >
              {job.company}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span
              style={{
                display: 'block',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 11.5,
                color: '#5b8fff',
                letterSpacing: '0.02em',
                marginBottom: 4,
              }}
            >
              {job.period}
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 12.5,
                color: '#6b7f99',
              }}
            >
              {job.location}
            </span>
          </div>
        </div>

        {/* Sub-projects (Corellia) or flat bullets */}
        {'projects' in job && job.projects ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {job.projects.map((proj, pi) => (
              <div
                key={proj.name}
                style={{
                  background: proj.confidential
                    ? 'rgba(255,160,60,0.04)'
                    : 'rgba(91,143,255,0.04)',
                  border: proj.confidential
                    ? '1px solid rgba(255,160,60,0.12)'
                    : '1px solid rgba(91,143,255,0.1)',
                  borderRadius: 10,
                  padding: '20px 22px',
                }}
              >
                {/* Sub-project name */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 14,
                  }}
                >
                  {proj.confidential && (
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 9.5,
                        color: '#e8a048',
                        background: 'rgba(255,160,60,0.1)',
                        border: '1px solid rgba(255,160,60,0.2)',
                        borderRadius: 3,
                        padding: '2px 7px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      CONFIDENTIEL
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 600,
                      fontSize: 13.5,
                      color: proj.confidential ? '#d4956a' : '#a0b8d8',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {proj.name}
                  </span>
                  {pi < (job.projects?.length ?? 0) - 1 && (
                    <div
                      style={{
                        marginLeft: 'auto',
                        width: 24,
                        height: 1,
                        background: 'rgba(91,143,255,0.2)',
                      }}
                    />
                  )}
                </div>

                {/* Bullets */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  {proj.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: proj.confidential ? 'rgba(255,160,60,0.55)' : 'rgba(91,143,255,0.6)',
                          marginTop: 9,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: '#8fa3bc',
                        }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {proj.stack.map(s => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 10,
                        color: proj.confidential ? '#d4956a' : '#5b8fff',
                        background: proj.confidential ? 'rgba(255,160,60,0.07)' : 'rgba(91,143,255,0.07)',
                        border: proj.confidential ? '1px solid rgba(255,160,60,0.14)' : '1px solid rgba(91,143,255,0.14)',
                        borderRadius: 3,
                        padding: '2px 7px',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                  {proj.tools.map(t => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 10,
                        color: '#6b7f99',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 3,
                        padding: '2px 7px',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {job.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'rgba(91,143,255,0.6)',
                      marginTop: 9,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: '#8fa3bc',
                    }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {job.stack.map(s => (
                <span
                  key={s}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10.5,
                    color: '#5b8fff',
                    background: 'rgba(91,143,255,0.08)',
                    border: '1px solid rgba(91,143,255,0.15)',
                    borderRadius: 4,
                    padding: '3px 8px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {s}
                </span>
              ))}
              {job.tools.map(t => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10.5,
                    color: '#6b7f99',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 4,
                    padding: '3px 8px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView()
  const isMobile = useMobile()

  return (
    <section
      id="experience"
      style={{ padding: '120px 0', background: 'rgba(91,143,255,0.012)' }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
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
              03 — Expérience
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
              marginBottom: 64,
            }}
          >
            Parcours professionnel
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ paddingLeft: 20 }}>
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
