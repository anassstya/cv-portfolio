import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { useRoute } from '../context/RouteContext'

export default function Projects() {
  const { t } = useLang()
  const { navigate } = useRoute()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const projects = t.projects.items

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        background: 'rgba(14,14,18,0.55)',
        backdropFilter: 'blur(2px)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="section" style={{ maxWidth: 1200 }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.projects.title}
        </motion.h2>

        {/* Pinterest-style layout: 2 stacked left + 1 tall right */}
        <div className="projects-grid">
          {/* Left column: 2 stacked */}
          <div className="projects-left">
            {/* Project 1: VK Bot — clickable */}
            <ProjectCard
              project={projects[0]}
              index={0}
              inView={inView}
              variant="short"
              accentGradient="linear-gradient(145deg, rgba(0,119,255,0.14), transparent)"
              onClick={() => navigate('#/vkbot')}
              clickable
            />
            {/* Project 2: LLM Chat — clickable */}
            <ProjectCard
              project={projects[1]}
              index={1}
              inView={inView}
              variant="short"
              accentGradient="linear-gradient(145deg, rgba(97,218,251,0.14), transparent)"
              onClick={() => navigate('#/llmchat')}
              clickable
            />
          </div>

          {/* Right column: tall CryptoFund */}
          <CryptoFundCard
            project={projects[2]}
            index={2}
            inView={inView}
            onOpen={() => navigate('#/cryptofund')}
            viewCodeLabel={t.projects.viewCode}
          />
        </div>
      </div>
    </section>
  )
}

interface Project {
  title: string
  tag: string
  desc: string
  stack: string[]
  github: string
}

/* ─── Standard short project card ─── */
function ProjectCard({
  project, index, inView, variant, accentGradient, onClick, clickable,
}: {
  project: Project; index: number; inView: boolean
  variant: 'short' | 'tall'
  accentGradient: string
  onClick?: () => void
  clickable?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, borderColor: 'rgba(200,168,106,0.4)' }}
      onClick={onClick}
      style={{
        background: 'linear-gradient(160deg, rgba(28,28,38,0.85) 0%, rgba(14,14,20,0.85) 100%)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: 24,
        minHeight: variant === 'short' ? 280 : 480,
        cursor: clickable ? 'pointer' : 'default',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
        transition: 'border-color 0.25s ease',
      }}
    >
      {/* Corner gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: accentGradient,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{
          fontSize: 11, fontWeight: 700,
          color: 'var(--accent)', letterSpacing: 1.2,
          textTransform: 'uppercase', marginBottom: 10,
          opacity: 0.85,
        }}>
          {project.tag}
        </div>

        <h3 style={{
          fontSize: 19, fontWeight: 800, marginBottom: 12,
          color: 'var(--text)', lineHeight: 1.25,
          letterSpacing: '-0.02em',
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: 13.5, color: 'var(--text-muted)',
          lineHeight: 1.65, marginBottom: 18, flex: 1,
        }}>
          {project.desc}
        </p>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {project.stack.slice(0, 4).map(tech => (
            <span key={tech} style={{
              fontSize: 11, fontWeight: 500,
              color: 'var(--text-dim)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-light)',
              padding: '3px 9px',
              borderRadius: 5,
            }}>
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ color: 'var(--text)' }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12.5, fontWeight: 600,
            color: 'var(--text-muted)',
            padding: '7px 13px',
            border: '1px solid var(--border)',
            borderRadius: 7,
            alignSelf: 'flex-start',
            transition: 'color 0.2s',
          }}
        >
          <Github size={13} />
          GitHub
        </motion.a>
      </div>
    </motion.div>
  )
}

/* ─── Special tall CryptoFund card with 3D hover ─── */
function CryptoFundCard({
  project, index, inView, onOpen, viewCodeLabel,
}: {
  project: Project; index: number; inView: boolean
  onOpen: () => void; viewCodeLabel: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, borderColor: 'rgba(110,231,183,0.45)' }}
      onClick={onOpen}
      style={{
        background: 'linear-gradient(160deg, #14241e 0%, #0e1014 70%)',
        border: '1px solid rgba(110,231,183,0.2)',
        borderRadius: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        padding: 28,
        transformStyle: 'preserve-3d',
        boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)',
        transition: 'border-color 0.25s ease',
      }}
    >
      {/* Soft green glow */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(110,231,183,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ position: 'relative', marginBottom: 20 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', gap: 12, marginBottom: 12,
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700,
            color: '#6ee7b7', letterSpacing: 1.2,
            textTransform: 'uppercase', opacity: 0.95,
          }}>
            {project.tag}
          </div>
          <motion.div
            whileHover={{ x: 3, y: -3 }}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(110,231,183,0.12)',
              border: '1px solid rgba(110,231,183,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#6ee7b7',
            }}
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>

        <h3 style={{
          fontSize: 26, fontWeight: 900, marginBottom: 10,
          color: 'var(--text)', lineHeight: 1.1,
          letterSpacing: '-0.025em',
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: 13.5, color: 'var(--text-muted)',
          lineHeight: 1.65,
        }}>
          {project.desc}
        </p>
      </div>

      {/* 3D phone mockup with screenshot */}
      <div style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: 1200,
        minHeight: 280,
        margin: '12px -10px 20px',
      }}>
        <motion.div
          whileHover={{ rotateY: -8, rotateX: 6, scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-12deg) rotateX(8deg)',
            borderRadius: 22,
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
            maxWidth: '70%',
          }}
        >
          <img
            src="/cryptofund/main.png"
            alt="CryptoFund"
            style={{
              width: '100%', height: 'auto', display: 'block',
            }}
          />
        </motion.div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'relative',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 12,
        paddingTop: 16,
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.stack.slice(0, 4).map(tech => (
            <span key={tech} style={{
              fontSize: 11, fontWeight: 500,
              color: 'var(--text-dim)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-light)',
              padding: '3px 9px',
              borderRadius: 5,
            }}>
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ color: 'var(--text)' }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12.5, fontWeight: 600,
            color: 'var(--text-muted)',
            padding: '7px 13px',
            border: '1px solid var(--border)',
            borderRadius: 7,
            transition: 'color 0.2s',
          }}
        >
          <Github size={13} />
          {viewCodeLabel}
        </motion.a>
      </div>
    </motion.div>
  )
}
