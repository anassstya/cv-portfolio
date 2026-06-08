import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { useRoute } from '../context/RouteContext'

export default function Header() {
  const { t, lang, toggleLang } = useLang()
  const { route, navigate } = useRoute()
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close the mobile menu when switching back to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
  ]

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    if (route !== '#/' && route !== '') {
      // On detail page — go home first, then scroll
      navigate('#/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0 16px' : '0 clamp(20px, 4vw, 60px)',
        background: scrolled || menuOpen ? 'rgba(9,9,11,0.82)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(18px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* Logo placeholder — hidden */}
      <div style={{ width: isMobile ? 0 : 40 }} />

      {/* Desktop nav + lang toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Desktop: inline links. Mobile: hidden (moved into burger menu) */}
        {!isMobile && (
          <nav className="nav-links">
            {links.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                whileHover={{ color: 'var(--text)' }}
                style={{
                  fontSize: 14,
                  color: 'var(--text-dim)',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        )}

        {/* Language toggle */}
        <motion.button
          onClick={toggleLang}
          whileHover={{
            borderColor: 'var(--accent-border)',
            color: 'var(--accent)',
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: isMobile ? '5px 10px' : '6px 13px',
            borderRadius: 8,
            border: '1px solid var(--border-light)',
            color: 'var(--text-dim)',
            fontSize: 13,
            fontWeight: 600,
            transition: 'border-color 0.2s, color 0.2s',
            letterSpacing: 0.3,
            flexShrink: 0,
          }}
        >
          <Globe size={13} />
          <AnimatePresence mode="wait">
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Mobile: burger button */}
        {isMobile && (
          <motion.button
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.95 }}
            aria-label="Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 38,
              height: 34,
              borderRadius: 8,
              border: '1px solid var(--border-light)',
              color: 'var(--text-dim)',
              flexShrink: 0,
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: 64,
              left: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              padding: '8px 16px 16px',
              background: 'rgba(9,9,11,0.92)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {links.map((link) => (
                <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                style={{
                  fontSize: 16,
                  color: 'var(--text-dim)',
                  fontWeight: 500,
                  padding: '14px 4px',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}