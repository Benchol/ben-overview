import { useEffect, useState } from 'react'
import { useMobile } from '../hooks/useMobile'

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Formation', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        paddingTop: 'env(safe-area-inset-top)',
        transition: 'background 0.35s ease, border-color 0.35s ease',
        background: scrolled || menuOpen ? 'rgba(7,11,19,0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px) saturate(1.4)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <a
          href="#home"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: '-0.04em',
            color: '#dde4f0',
            textDecoration: 'none',
            userSelect: 'none',
          }}
        >
          RA
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 32 }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: '#6b7f99',
                  textDecoration: 'none',
                  letterSpacing: '0.005em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#dde4f0')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#6b7f99')}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 22,
                  height: 1.5,
                  background: '#dde4f0',
                  borderRadius: 1,
                  transition: 'transform 0.25s ease, opacity 0.25s ease',
                  transform:
                    menuOpen
                      ? i === 0
                        ? 'translateY(6.5px) rotate(45deg)'
                        : i === 2
                        ? 'translateY(-6.5px) rotate(-45deg)'
                        : 'scaleX(0)'
                      : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {isMobile && (
        <div
          style={{
            overflow: 'hidden',
            maxHeight: menuOpen ? 320 : 0,
            transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)',
            borderTop: menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}
        >
          <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#6b7f99',
                  textDecoration: 'none',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#dde4f0')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#6b7f99')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
