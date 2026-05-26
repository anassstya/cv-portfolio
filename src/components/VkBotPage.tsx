import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, Github, User, Shield } from 'lucide-react'
import { useRoute } from '../context/RouteContext'

const screenshots = [
  { src: '/vkbot/01-start.png',         caption: '/start — выбор роли' },
  { src: '/vkbot/02-returning.png',     caption: 'Возвращение пользователя' },
  { src: '/vkbot/03-department.png',    caption: 'Выбор отдела' },
  { src: '/vkbot/04-welcome.png',       caption: 'Профиль заполнен' },
  { src: '/vkbot/05-info.png',          caption: '/info — список команд' },
  { src: '/vkbot/06-profile.png',       caption: '/profile — данные' },
  { src: '/vkbot/07-change-dept.png',   caption: '/change_dept' },
  { src: '/vkbot/08-event-create.png',  caption: '/event — создание' },
  { src: '/vkbot/09-event-preview.png', caption: 'Предпросмотр и создание' },
  { src: '/vkbot/10-my-events.png',     caption: '/my_events' },
  { src: '/vkbot/11-report.png',        caption: '/report — статистика' },
]

const techStack = ['Go 1.21', 'PostgreSQL', 'bot-golang', 'pgxpool', 'sync.Mutex', 'channels', 'time.Ticker']

const features = [
  {
    title: 'Онбординг пользователей',
    desc: 'Пошаговый сценарий регистрации с проверкой роли (сотрудник/администратор), выбором отдела и пола. Персонализация приветствия по введённым данным.',
  },
  {
    title: 'Создание рассылок',
    desc: 'Гибкая система: единоразовые и регулярные уведомления (еженедельно, ежемесячно, по будням) с фильтрацией получателей по отделу и полу.',
  },
  {
    title: 'Асинхронный планировщик',
    desc: 'Scheduler на time.Ticker запускает отправку в заданное время. Все операции неблокирующие — горутины, channels, sync.Mutex для безопасной работы с состоянием.',
  },
  {
    title: 'Персонализация сообщений',
    desc: 'Шаблоны с подстановкой имени и плейсхолдеров, таргетирование по отделу и полу — каждый получатель видит уведомление, релевантное именно ему.',
  },
  {
    title: 'Статистика и аналитика',
    desc: 'Команда /report показывает админу метрики по каждой рассылке: число доставленных сообщений, прочитанных (по кнопке «Прочитано»), процент открытий.',
  },
  {
    title: '20+ юнит-тестов',
    desc: 'Покрытие основной логики тестами, проверка на гонки данных (флаг -race), моки для изоляции зависимостей (БД, VK API) и стабильных прогонов в CI.',
  },
]

const userCommands = [
  { cmd: '/start',       desc: 'Запуск онбординга: выбор роли, отдела, пола' },
  { cmd: '/info',        desc: 'Список доступных команд для сотрудника' },
  { cmd: '/profile',     desc: 'Просмотр личных данных' },
  { cmd: '/change_dept', desc: 'Изменить свой отдел через кнопки' },
]

const adminCommands = [
  { cmd: '/event',       desc: 'Создание уведомления (пошаговый сценарий)' },
  { cmd: '/my_events',   desc: 'Список созданных админом уведомлений' },
  { cmd: '/report',      desc: 'Статистика: доставлено, прочитано, % открытий' },
]

export default function VkBotPage() {
  const { navigate } = useRoute()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? 264 : -264, behavior: 'smooth' })
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
            Производственная практика · 2026
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 18,
          }}>
            VK Teams Notification Bot
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 1.25vw, 17px)',
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            maxWidth: 760,
          }}>
            Чат-бот для автоматической рассылки персонализированных уведомлений сотрудникам через корпоративное приложение VK WorkSpace (VK Teams). Поддерживает онбординг, регулярные и единоразовые рассылки, таргетирование по отделам и полу, а также сбор статистики прочтений.
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

        {/* Carousel */}
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
                  width: 240,
                }}
              >
                <div style={{
                  position: 'relative',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  background: '#0a0a0a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 140,
                }}>
                  <img
                    src={s.src}
                    alt={s.caption}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                </div>
                <p style={{
                  marginTop: 12,
                  fontSize: 12,
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

        {/* Commands grid: user + admin */}
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
            Команды бота
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 20,
          }}>
            {/* Users */}
            <div style={{
              padding: 24,
              background: 'rgba(14,14,18,0.6)',
              border: '1px solid var(--border)',
              borderRadius: 14,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                marginBottom: 18,
              }}>
                <User size={18} color="var(--accent)" />
                <span style={{ fontWeight: 700, fontSize: 15 }}>Для сотрудников</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {userCommands.map(c => (
                  <div key={c.cmd} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <code style={{
                      fontSize: 12, fontWeight: 700,
                      color: 'var(--accent)',
                      background: 'var(--accent-glow)',
                      border: '1px solid var(--accent-border)',
                      padding: '3px 9px',
                      borderRadius: 5,
                      flexShrink: 0,
                      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                    }}>
                      {c.cmd}
                    </code>
                    <span style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.55 }}>
                      {c.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admins */}
            <div style={{
              padding: 24,
              background: 'rgba(14,14,18,0.6)',
              border: '1px solid var(--border)',
              borderRadius: 14,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                marginBottom: 18,
              }}>
                <Shield size={18} color="var(--accent)" />
                <span style={{ fontWeight: 700, fontSize: 15 }}>Для администраторов</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {adminCommands.map(c => (
                  <div key={c.cmd} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <code style={{
                      fontSize: 12, fontWeight: 700,
                      color: 'var(--accent)',
                      background: 'var(--accent-glow)',
                      border: '1px solid var(--accent-border)',
                      padding: '3px 9px',
                      borderRadius: 5,
                      flexShrink: 0,
                      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                    }}>
                      {c.cmd}
                    </code>
                    <span style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.55 }}>
                      {c.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
                  border: '1px solid var(--border)',
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
        <motion.a
          href="https://github.com/anassstya/vkbot"
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
          Посмотреть на GitHub
        </motion.a>
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
