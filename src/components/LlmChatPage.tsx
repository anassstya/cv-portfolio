import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, Github } from 'lucide-react'
import { useRoute } from '../context/RouteContext'

const screenshots = [
  { src: '/llmchat/register.png', caption: 'Регистрация' },
  { src: '/llmchat/signin.png',   caption: 'Вход' },
  { src: '/llmchat/chat.png',     caption: 'Чат с LLM' },
]

const techStack = [
  'Go', 'React', 'Vite', 'PostgreSQL', 'chi', 'pgxpool',
  'SSE / Streaming', 'Docker', 'golang-migrate', 'HuggingFace API',
]

const features = [
  {
    title: 'Потоковая передача ответов',
    desc: 'Реализован Server-Sent Events: токены LLM приходят чанками через text/event-stream и мгновенно отображаются в UI без блокировки. Использован http.Flusher для немедленной отдачи каждого фрагмента.',
  },
  {
    title: 'Контекст диалогов',
    desc: 'История каждого пользователя хранится в PostgreSQL и подгружается перед запросом к LLM — модель видит контекст всей беседы и отвечает связно. Сохранение сообщений идёт асинхронно во время стрима.',
  },
  {
    title: 'Аутентификация',
    desc: 'Регистрация и вход через /api/auth/register и /api/auth/login с хешированием паролей. Пользователь идентифицируется через X-User-ID header при запросах к чату.',
  },
  {
    title: 'Чистая архитектура',
    desc: 'Слоистая структура: handlers → services → repository. Интерфейсы для репозиториев упрощают тестирование, маршруты на chi router с middleware для логирования, recovery и CORS.',
  },
  {
    title: 'Docker и миграции',
    desc: 'Бэкенд и Postgres запускаются одной командой docker compose up. SQL-миграции через golang-migrate прогоняются автоматически при старте сервера.',
  },
  {
    title: 'Конфигурация через env',
    desc: 'Все секреты (API ключ HuggingFace, DATABASE_URL, CORS_ORIGINS) вынесены в .env. Поддерживается конфигурация для локальной разработки и продакшена.',
  },
]

export default function LlmChatPage() {
  const { navigate } = useRoute()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? 484 : -484, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 80 }}>
      <div className="section" style={{ maxWidth: 1200 }}>
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('#/')}
          whileHover={{ x: -4, color: 'var(--accent)' }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'var(--text-dim)', fontSize: 14, fontWeight: 500,
            marginBottom: 40, padding: 0,
            transition: 'color 0.2s',
          }}
        >
          <ArrowLeft size={16} />
          Назад к проектам
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{
            fontSize: 12, fontWeight: 700,
            color: 'var(--accent)', letterSpacing: 1.4,
            textTransform: 'uppercase', marginBottom: 10,
          }}>
            AI Chat Interface
          </div>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 18,
          }}>
            LLM Chat Assistant
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 1.25vw, 17px)',
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            maxWidth: 720,
          }}>
            Полнофункциональный веб-чат для взаимодействия с большими языковыми моделями. Поддерживает потоковую передачу ответов через Server-Sent Events, хранит историю диалогов в PostgreSQL и связывает контекст между сообщениями. Бэкенд на Go (chi + pgx), фронтенд на React + Vite.
          </p>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 60 }}
        >
          {techStack.map(t => (
            <span key={t} style={{
              fontSize: 12, fontWeight: 600,
              color: 'var(--text-dim)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-light)',
              padding: '6px 14px',
              borderRadius: 6,
            }}>
              {t}
            </span>
          ))}
        </motion.div>

        {/* Carousel — wider cards for desktop screenshots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative', marginBottom: 64 }}
        >
          <button
            onClick={() => scrollByAmount('left')}
            style={arrowStyle('left')}
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => scrollByAmount('right')}
            style={arrowStyle('right')}
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={scrollRef}
            className="carousel-track"
            style={{
              display: 'flex',
              gap: 24,
              overflowX: 'auto',
              padding: '20px 4px 30px',
              scrollBehavior: 'smooth',
            }}
          >
            {screenshots.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                style={{
                  flex: '0 0 auto',
                  width: 460,
                  maxWidth: '90vw',
                }}
              >
                <div style={{
                  position: 'relative',
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
                  background: '#0a0a0a',
                  aspectRatio: '16 / 10',
                }}>
                  <img
                    src={s.src}
                    alt={s.caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                </div>
                <p style={{
                  marginTop: 12,
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  fontWeight: 500,
                }}>
                  {s.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 64 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
            fontWeight: 800, marginBottom: 28,
            letterSpacing: '-0.02em',
          }}>
            Архитектура
          </h2>

          <div style={{
            padding: 28,
            background: 'rgba(14,14,18,0.6)',
            border: '1px solid var(--border-light)',
            borderRadius: 14,
            fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
            fontSize: 13,
            color: 'var(--text-dim)',
            lineHeight: 1.85,
            overflowX: 'auto',
          }}>
            <div style={{ color: 'var(--accent)', marginBottom: 12, fontWeight: 700, fontSize: 12, letterSpacing: 0.5 }}>
              project/
            </div>
            <div>├── <span style={{ color: 'var(--text)' }}>server/</span>      <span style={{ color: 'var(--text-muted)' }}>// Go backend: chi router, pgx, миграции</span></div>
            <div>│   ├── cmd/        <span style={{ color: 'var(--text-muted)' }}>// main.go — точка входа, поднятие сервера</span></div>
            <div>│   ├── internal/</div>
            <div>│   │   ├── handlers/    <span style={{ color: 'var(--text-muted)' }}>// HTTP-обработчики (auth, chat)</span></div>
            <div>│   │   ├── services/    <span style={{ color: 'var(--text-muted)' }}>// бизнес-логика (LLM, auth, chat)</span></div>
            <div>│   │   ├── repository/  <span style={{ color: 'var(--text-muted)' }}>// слой доступа к PostgreSQL</span></div>
            <div>│   │   └── config/      <span style={{ color: 'var(--text-muted)' }}>// загрузка .env переменных</span></div>
            <div>│   ├── migrations/      <span style={{ color: 'var(--text-muted)' }}>// SQL-миграции (users, chat_history)</span></div>
            <div>│   └── docker-compose.yml</div>
            <div>└── <span style={{ color: 'var(--text)' }}>client/</span>      <span style={{ color: 'var(--text-muted)' }}>// React + Vite frontend</span></div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <h2 style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
            fontWeight: 800, marginBottom: 28,
            letterSpacing: '-0.02em',
          }}>
            Ключевые идеи
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, borderColor: 'var(--accent-border)' }}
                style={{
                  padding: 22,
                  background: 'rgba(14,14,18,0.6)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 14,
                  transition: 'border-color 0.2s',
                }}
              >
                <h3 style={{
                  fontSize: 15, fontWeight: 700,
                  color: 'var(--accent)', marginBottom: 8,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: 13.5, color: 'var(--text-dim)',
                  lineHeight: 1.65,
                }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <motion.a
            href="https://github.com/anassstya/llm-chat-ui/tree/main/server"
            target="_blank"
            rel="noreferrer"
            whileHover={{ backgroundColor: 'var(--text)', color: '#09090b' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 28px',
              background: 'var(--accent)', color: '#09090b',
              fontWeight: 700, fontSize: 14, borderRadius: 8,
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <Github size={16} />
            Backend (Go)
          </motion.a>
          <motion.a
            href="https://github.com/anassstya/llm-chat-ui/tree/main/client"
            target="_blank"
            rel="noreferrer"
            whileHover={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--text)' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 28px',
              border: '1px solid var(--border-light)',
              color: 'var(--text-dim)',
              fontWeight: 700, fontSize: 14, borderRadius: 8,
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            <Github size={16} />
            Frontend (React)
          </motion.a>
        </div>
      </div>
    </div>
  )
}

function arrowStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    [side]: -8,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'rgba(20,20,26,0.9)',
    backdropFilter: 'blur(12px)',
    border: '1px solid var(--border-light)',
    color: 'var(--text)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
  }
}
