import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import { useLang } from '../context/LangContext'

const item = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
})

export default function About() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t.about.title}
      </motion.h2>

      <div className="about-grid">
        {/* Left: bio text */}
        <div>
          {[t.about.p1, t.about.p2, t.about.p3].map((p, i) => (
            <motion.p
              key={i}
              initial="initial"
              animate={inView ? 'animate' : 'initial'}
              variants={{
                initial: { opacity: 0, y: 28 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
                },
              }}
              style={{
                color: 'var(--text-dim)',
                fontSize: 'clamp(14px, 1.25vw, 16px)',
                lineHeight: 1.78,
                marginBottom: 18,
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <motion.div
            {...item(1)}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            variants={{
              initial: { opacity: 0, y: 28 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] },
              },
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                marginBottom: 16,
              }}
            >
              <GraduationCap size={17} color="var(--accent)" />
              <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: 0.2 }}>
                {t.about.education}
              </span>
            </div>

            {t.about.edu.map((e, i) => (
              <div
                key={i}
                style={{
                  padding: '18px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  borderLeft: '2px solid var(--accent)',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 5 }}>{e.place}</div>
                <div style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 500, marginBottom: 4 }}>
                  {e.degree}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: 12.5, lineHeight: 1.5 }}>
                  {e.faculty}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Courses */}
          <motion.div
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            variants={{
              initial: { opacity: 0, y: 28 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] },
              },
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                marginBottom: 16,
              }}
            >
              <BookOpen size={17} color="var(--accent)" />
              <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: 0.2 }}>
                {t.about.courses}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {t.about.crs.map((c, i) => (
                <div
                  key={i}
                  style={{
                    padding: '14px 18px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 500, lineHeight: 1.4 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>
                      {c.org}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--accent)',
                      background: 'var(--accent-glow)',
                      border: '1px solid var(--accent-border)',
                      padding: '3px 10px',
                      borderRadius: 20,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    {c.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
