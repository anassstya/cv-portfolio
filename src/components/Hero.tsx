import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Mail } from 'lucide-react'
import { useLang } from '../context/LangContext'

// Split a word into hoverable hollow letters
function HollowWord({ word, size }: { word: string; size: string }) {
  return (
    <div
      className="hero-display"
      style={{
        fontSize: size,
        gap: '0.01em',
      }}
    >
      {word.split('').map((ch, i) => (
        <span key={i} className="hollow-letter">
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const slideUp = useTransform(scrollYProgress, [0, 0.5], ['0px', '-40px'])

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Subtle grain */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.5,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
      }} />

      {/* ── MAIN TEXT BLOCK ── */}
      <motion.div
        style={{
          opacity: fadeOut, y: slideUp,
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: 'relative', zIndex: 2,
          padding: 'clamp(110px,13vh,140px) clamp(24px,5vw,64px) clamp(40px,5vh,60px)',
        }}
      >
        {/* CV — filled, yellow, smaller (on top) */}
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="hero-display"
              style={{
                display: 'block',
                fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                color: 'var(--accent)',
                marginBottom: 'clamp(4px, 0.5vw, 8px)',
              }}
            >
              CV
            </span>
          </motion.div>
        </div>

        {/* BACKEND — hollow, hoverable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <HollowWord word="BACKEND" size="clamp(3.5rem, 11vw, 10rem)" />
        </motion.div>

        {/* DEVELOPER — hollow, hoverable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <HollowWord word="DEVELOPER" size="clamp(3.5rem, 11vw, 10rem)" />
        </motion.div>

        {/* Анастасия Ачкасова — yellow, smaller */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ marginTop: 'clamp(12px, 1.5vw, 24px)' }}
        >
          <span
            className="hero-display"
            style={{
              display: 'block',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
              color: 'var(--accent)',
              opacity: 0.92,
            }}
          >
            Анастасия Ачкасова
          </span>
        </motion.div>
      </motion.div>

      {/* ── BOTTOM BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        style={{
          position: 'relative', zIndex: 3,
          borderTop: '1px solid var(--border)',
          padding: 'clamp(28px,4.5vh,52px) clamp(24px,5vw,64px) clamp(40px,5.5vh,64px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 28,
        }}
      >
        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(14px, 1.25vw, 16px)',
          color: 'var(--text-dim)',
          lineHeight: 1.65,
          maxWidth: 400,
          flex: '1 1 280px',
          fontWeight: 400,
        }}>
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
          <motion.a
            href="#projects"
            whileHover={{ backgroundColor: 'var(--text)', color: '#09090b' }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '14px 28px',
              background: 'var(--accent)', color: '#09090b',
              fontWeight: 700, fontSize: 15, borderRadius: 8,
              transition: 'background 0.2s, color 0.2s',
              letterSpacing: 0.3, whiteSpace: 'nowrap',
            }}
          >
            {t.hero.cta}
          </motion.a>
          <motion.a
            href="mailto:a.nasstya@mail.ru"
            whileHover={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--text)' }}
            style={{
              padding: '14px 28px',
              border: '1px solid var(--border-light)', color: 'var(--text-dim)',
              fontWeight: 600, fontSize: 15, borderRadius: 8,
              transition: 'border-color 0.2s, color 0.2s',
              display: 'flex', alignItems: 'center', gap: 8,
              whiteSpace: 'nowrap',
            }}
          >
            <Mail size={15} />
            {t.hero.contactCta}
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
