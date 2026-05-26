import { motion } from 'framer-motion'
import { Github, Mail, Send } from 'lucide-react'
import { useLang } from '../context/LangContext'

const socials = [
  { href: 'https://github.com/anassstya', icon: <Github size={17} />, label: 'GitHub' },
  { href: 'mailto:a.nasstya@mail.ru', icon: <Mail size={17} />, label: 'Email' },
  { href: 'https://t.me/aanasstya', icon: <Send size={17} />, label: 'Telegram' },
]

export default function Footer() {
  const { t } = useLang()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '48px clamp(20px, 4vw, 60px)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        {/* Subtitle */}
        <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>{t.footer.made}</div>

        {/* Copyright */}
        <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>{t.footer.copy}</div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 10 }}>
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              whileHover={{
                borderColor: 'var(--accent-border)',
                color: 'var(--accent)',
                scale: 1.08,
              }}
              whileTap={{ scale: 0.94 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 10,
                border: '1px solid var(--border-light)',
                color: 'var(--text-muted)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
