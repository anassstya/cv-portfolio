import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function Experience() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t.experience.title}
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {t.experience.jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              padding: '30px 32px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent left bar */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 3,
                background: 'linear-gradient(to bottom, var(--accent), transparent)',
                borderRadius: '3px 0 0 3px',
              }}
            />

            {/* Card header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 24,
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <Briefcase size={16} color="var(--accent)" />
                  <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: -0.3 }}>
                    {job.company}
                  </span>
                </div>
                <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14 }}>
                  {job.role}
                </div>
              </div>

              <span
                style={{
                  fontSize: 13,
                  color: 'var(--text-dim)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-light)',
                  padding: '5px 14px',
                  borderRadius: 20,
                  flexShrink: 0,
                  fontWeight: 500,
                }}
              >
                {job.period}
              </span>
            </div>

            {/* Bullet items */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {job.items.map((item, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + j * 0.07 }}
                  style={{
                    display: 'flex',
                    gap: 13,
                    color: 'var(--text-dim)',
                    fontSize: 14.5,
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent)',
                      flexShrink: 0,
                      marginTop: 3,
                      fontSize: 10,
                      opacity: 0.8,
                    }}
                  >
                    ▸
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
