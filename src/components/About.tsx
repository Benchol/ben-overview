import { useInView } from "../hooks/useInView"
import { useMobile } from "../hooks/useMobile"

const stats = [
  { value: "3+", label: "ans d'expérience" },
  { value: "3", label: "entreprises" },
  { value: "10+", label: "technologies" },
]

const contactItems = [
  {
    label: "Email",
    value: "rianabe002@gmail.com",
    href: "mailto:rianabe002@gmail.com",
  },
  { label: "Téléphone", value: "+32 472 21 42 02", href: "tel:+32472214202" },
  { label: "Localisation", value: "Mons, Belgique", href: null },
]

export default function About() {
  const { ref, inView } = useInView()
  const isMobile = useMobile()

  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(28px)",
            transition:
              "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 56,
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                color: "#5b8fff",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              01 — À propos
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "rgba(255,255,255,0.07)",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 360px",
              gap: isMobile ? 40 : 80,
            }}
          >
            {/* Left */}
            <div>
              <h2
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(30px, 4vw, 50px)",
                  letterSpacing: "-0.03em",
                  color: "#dde4f0",
                  lineHeight: 1.1,
                  marginBottom: 28,
                }}
              >
                Fullstack developer
                <br />
                <span style={{ color: "#5b8fff" }}>Angular · .NET</span>
              </h2>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#6b7f99",
                  marginBottom: 18,
                }}
              >
                Développeur fullstack basé à Mons, Belgique, avec une double
                expertise front-end Angular et back-end .NET. Je conçois des
                applications web de bout en bout: de la modélisation des données
                jusqu'à l'interface utilisateur.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#6b7f99",
                }}
              >
                Habitué aux environnements Agile/Scrum, j'ai travaillé sur des
                solutions variées: gestion de fitness, réseaux sociaux,
                e-commerce. Ma formation en mathématiques et statistiques
                appliquées apporte une rigueur analytique à mon approche du
                développement.
              </p>

              {/* Stats */}
              <div style={{ display: "flex", gap: 48, marginTop: 48 }}>
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      style={{
                        fontFamily: "Outfit, sans-serif",
                        fontWeight: 800,
                        fontSize: 44,
                        letterSpacing: "-0.04em",
                        color: "#5b8fff",
                        lineHeight: 1,
                        marginBottom: 6,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        color: "#6b7f99",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact card */}
            <div
              style={{
                background: "rgba(11,16,32,0.8)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "32px",
                height: "fit-content",
              }}
            >
              <h3
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#dde4f0",
                  marginBottom: 28,
                  letterSpacing: "-0.01em",
                }}
              >
                Contact
              </h3>

              {contactItems.map((item, i) => (
                <div
                  key={item.label}
                  style={{ marginBottom: i < contactItems.length - 1 ? 20 : 0 }}
                >
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 10,
                      color: "#5b8fff",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 5,
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "#8fa3bc",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "#dde4f0")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "#8fa3bc")
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "#8fa3bc",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}

              {/* Download CV */}
              <a
                href="/cv-riana-andriarinaivo.pdf"
                download="CV-Riana-Andriarinaivo.pdf"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 24,
                  padding: "11px 20px",
                  background: "rgba(91,143,255,0.08)",
                  border: "1px solid rgba(91,143,255,0.18)",
                  borderRadius: 8,
                  textDecoration: "none",
                  color: "#5b8fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "rgba(91,143,255,0.14)"
                  el.style.borderColor = "rgba(91,143,255,0.35)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "rgba(91,143,255,0.08)"
                  el.style.borderColor = "rgba(91,143,255,0.18)"
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M3.5 6l3.5 4 3.5-4M1 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Télécharger le CV
              </a>

              <div
                style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {[
                  { label: "Mobilité", value: "Bus & Train · Permis B" },
                  {
                    label: "Centres d'intérêt",
                    value: "Basketball · Jeux vidéo",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 10,
                        color: "#5b8fff",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: 5,
                      }}
                    >
                      {item.label}
                    </div>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "#8fa3bc",
                      }}
                    >
                      {item.value}
                    </span>
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
