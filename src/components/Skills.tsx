import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../context/LangContext'

interface Skill {
  name: string
  color: string
  iconType: 'img' | 'svg'
  iconSrc?: string
  iconSvg?: JSX.Element
}

/* Inline SVGs for skills without provided images */
const dockerSvg = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="#0db7ed">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.003-.676.033-1.01.09-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
  </svg>
)

const restApiSvg = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#79c0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
  </svg>
)

const grpcSvg = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="#a78bfa">
    <path d="M12 0L2 5v6c0 5.523 4.477 10 10 13 5.523-3 10-7.477 10-13V5L12 0zm0 4.5L19 7v4c0 4.142-3 7.523-7 9.5-4-1.977-7-5.358-7-9.5V7l7-2.5z"/>
    <circle cx="12" cy="11" r="2.5"/>
  </svg>
)

const algoSvg = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#fb923c" strokeWidth="2">
    <circle cx="6" cy="6" r="3"/>
    <circle cx="18" cy="6" r="3"/>
    <circle cx="12" cy="18" r="3"/>
    <path d="M6 9v6M18 9v6M9 6h6"/>
  </svg>
)

const clickhouseSvg = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="#ffcc00">
    <rect x="2" y="4" width="3.2" height="16" rx="0.5"/>
    <rect x="7" y="4" width="3.2" height="16" rx="0.5"/>
    <rect x="12" y="4" width="3.2" height="16" rx="0.5"/>
    <rect x="17" y="4" width="3.2" height="10.5" rx="0.5"/>
    <rect x="17" y="16.8" width="3.2" height="3.2" rx="0.5"/>
  </svg>
)

const skills: Skill[] = [
  { name: 'Go',              color: '#00ACD7', iconType: 'img', iconSrc: '/icons/go.png' },
  { name: 'PostgreSQL',      color: '#6fa8d6', iconType: 'img', iconSrc: '/icons/postgres.png' },
  { name: 'Docker',          color: '#0db7ed', iconType: 'svg', iconSvg: dockerSvg },
  { name: 'Redis',           color: '#dc382d', iconType: 'img', iconSrc: '/icons/redis.png' },
  { name: 'ClickHouse',      color: '#ffcc00', iconType: 'svg', iconSvg: clickhouseSvg },
  { name: 'Swagger',         color: '#85ea2d', iconType: 'img', iconSrc: '/icons/swagger.png' },
  { name: 'REST API',        color: '#79c0ff', iconType: 'svg', iconSvg: restApiSvg },
  { name: 'gRPC',            color: '#a78bfa', iconType: 'svg', iconSvg: grpcSvg },
  { name: 'Алгоритмы и СД',  color: '#fb923c', iconType: 'svg', iconSvg: algoSvg },
]

function SkillCard({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{
        y: -4,
        borderColor: `${skill.color}66`,
        boxShadow: `0 10px 30px ${skill.color}1a`,
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
        padding: '30px 18px',
        borderRadius: 14,
        border: '1px solid var(--border)',
        background: 'rgba(255,255,255,0.02)',
        cursor: 'default',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 44,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {skill.iconType === 'img' ? (
          <img
            src={skill.iconSrc}
            alt={skill.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : skill.iconSvg}
      </div>

      {/* Name */}
      <span style={{
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text)',
        textAlign: 'center',
      }}>
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(14,14,18,0.55)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.skills.title}
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 16,
        }}>
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}