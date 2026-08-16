import Cube3D from "./Cube3D"
import { useMobile } from "../hooks/useMobile"

const pills = [
  "Angular",
  "TypeScript",
  ".NET",
  "C#",
  "React",
  "PostgreSQL",
  "RxJS",
  "Azure",
]

export default function Hero() {
  const isMobile = useMobile()

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(ellipse 70% 65% at 18% 50%, rgba(91,143,255,0.07) 0%, transparent 100%),
          radial-gradient(ellipse 45% 45% at 82% 20%, rgba(91,143,255,0.04) 0%, transparent 100%),
          #070b13
        `,
      }}
    >
      {/* Subtle grid lines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(91,143,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(91,143,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: isMobile ? "calc(env(safe-area-inset-top) + 88px) 20px 60px" : "100px 32px 80px",
          width: "100%",
          position: "relative",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr max-content",
          gap: isMobile ? 0 : 80,
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Text content */}
        <div>
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(91,143,255,0.08)",
              border: "1px solid rgba(91,143,255,0.18)",
              borderRadius: 999,
              padding: "5px 14px",
              marginBottom: 28,
              animation: "fade-up 0.65s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "0ms",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ade80",
                display: "block",
                boxShadow: "0 0 8px rgba(74,222,128,0.8)",
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11.5,
                color: "#5b8fff",
                letterSpacing: "0.06em",
              }}
            >
              Disponible · Mons, Belgique
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(50px, 6.8vw, 96px)",
              lineHeight: 1.0,
              letterSpacing: "-0.035em",
              color: "#dde4f0",
              marginBottom: 16,
              animation: "fade-up 0.65s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "80ms",
            }}
          >
            Riana
            <br />
            <span style={{ color: "#5b8fff" }}>Andriarinaivo</span>
          </h1>

          {/* Title */}
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "clamp(17px, 2.2vw, 24px)",
              fontWeight: 400,
              color: "#6b7f99",
              marginBottom: 22,
              animation: "fade-up 0.65s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "160ms",
            }}
          >
            Développeur Fullstack Angular · .NET
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 15.5,
              lineHeight: 1.78,
              color: "#6b7f99",
              maxWidth: 490,
              marginBottom: 40,
              animation: "fade-up 0.65s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "240ms",
            }}
          >
            Conception et évolution d'applications web: interface Angular,
            intégration d'API REST et back-end .NET. 3+ ans d'expérience en
            environnement Agile.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 52,
              animation: "fade-up 0.65s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "320ms",
            }}
          >
            <a
              href="#experience"
              style={{
                display: "inline-block",
                padding: "13px 28px",
                background: "#5b8fff",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "all 0.2s ease",
                boxShadow: "0 0 28px rgba(91,143,255,0.28)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#4a7bf5"
                el.style.transform = "translateY(-2px)"
                el.style.boxShadow = "0 0 44px rgba(91,143,255,0.44)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#5b8fff"
                el.style.transform = "translateY(0)"
                el.style.boxShadow = "0 0 28px rgba(91,143,255,0.28)"
              }}
            >
              Voir l'expérience
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "13px 28px",
                background: "transparent",
                color: "#dde4f0",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                letterSpacing: "0.01em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(91,143,255,0.35)"
                el.style.color = "#5b8fff"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(255,255,255,0.12)"
                el.style.color = "#dde4f0"
              }}
            >
              Me contacter
            </a>

            <a
              href="/cv-riana-andriarinaivo.pdf"
              download="CV-Riana-Andriarinaivo.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "13px 22px",
                background: "transparent",
                color: "#6b7f99",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.08)",
                letterSpacing: "0.01em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(91,143,255,0.3)"
                el.style.color = "#5b8fff"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(255,255,255,0.08)"
                el.style.color = "#6b7f99"
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M3.5 6l3.5 4 3.5-4M1 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              CV
            </a>
          </div>

          {/* Tech pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              animation: "fade-up 0.65s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "400ms",
            }}
          >
            {pills.map((p) => (
              <span
                key={p}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  color: "#6b7f99",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 5,
                  padding: "4px 10px",
                  letterSpacing: "0.04em",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "#5b8fff"
                  el.style.borderColor = "rgba(91,143,255,0.3)"
                  el.style.background = "rgba(91,143,255,0.08)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "#6b7f99"
                  el.style.borderColor = "rgba(255,255,255,0.07)"
                  el.style.background = "rgba(255,255,255,0.04)"
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* 3D Cube — desktop only */}
        {!isMobile && (
          <div
            style={{
              animation: "float-y 8s ease-in-out infinite",
              opacity: 0.88,
            }}
          >
            <Cube3D size={210} />
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "fade-up 1s ease both",
          animationDelay: "900ms",
        }}
      >
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9.5,
            letterSpacing: "0.18em",
            color: "rgba(107,127,153,0.35)",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <svg
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
          style={{ animation: "bounce-arrow 2.2s ease-in-out infinite" }}
        >
          <path
            d="M7 1v16M2 13l5 6 5-6"
            stroke="rgba(91,143,255,0.45)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
