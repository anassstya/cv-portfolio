import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, Github } from 'lucide-react'
import { useRoute } from '../context/RouteContext'

const screenshots = [
  { src: '/cryptofund/main.png',        caption: 'Главный экран' },
  { src: '/cryptofund/login.png',       caption: 'Вход' },
  { src: '/cryptofund/register.png',    caption: 'Регистрация' },
  { src: '/cryptofund/addExchange.png', caption: 'Добавление биржи' },
  { src: '/cryptofund/exchange.png',    caption: 'Детали биржи' },
  { src: '/cryptofund/assets.png',      caption: 'Состав активов' },
]

const techStack = ['Go', 'Dart (Flutter)', 'PostgreSQL', 'Redis', 'Docker', 'REST API']

const features = [
  {
    title: 'Агрегация портфеля',
    desc: 'Унифицированные REST-клиенты для 4+ бирж (Binance, Bybit, Bitget, MEXC) с расчётом общей стоимости активов и динамики в реальном времени.',
  },
  {
    title: 'Безопасность данных',
    desc: 'Шифрование API-ключей на сервере (AES-GCM), JWT-аутентификация и аппаратное хранение токенов на устройстве через flutter_secure_storage.',
  },
  {
    title: 'Асинхронная синхронизация',
    desc: 'Фоновый воркер обновляет балансы каждые 3 минуты, параллельно собирая данные через горутины и записывая историю в PostgreSQL.',
  },
  {
    title: 'Кэширование и rate-limiting',
    desc: 'Redis для кэширования курсов валют и промежуточных расчётов баланса, защита от превышения квот внешних бирж.',
  },
  {
    title: 'Моки для тестирования',
    desc: 'Реализованы моки бирж и внешних API для локальной разработки и тестов — позволяет работать с реалистичными данными без реальных API-ключей.',
  },
  {
    title: 'Визуализация активов',
    desc: 'Интерактивные диаграммы распределения активов по биржам и монетам с детализацией по каждой позиции и её текущей рыночной стоимости.',
  },
]

export default function CryptoFundPage() {
  const { navigate } = useRoute()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    // Scroll by one card width + gap (240 + 24 = 264)
    el.scrollBy({ left: dir === 'right' ? 264 : -264, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 80 }}>
      <div className="section" style={{ maxWidth: 1200 }}>
        {/* Back button */}
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
            Mobile App · 2025
          </div>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 18,
          }}>
            CryptoFund
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 1.25vw, 17px)',
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            maxWidth: 720,
          }}>
            Мобильное Flutter-приложение с аналитикой крипто-балансов. Решает проблему фрагментации данных трейдеров, объединяя балансы с нескольких бирж (Binance, Bybit, Bitget, MEXC) в едином интерфейсе с автоматической синхронизацией и визуализацией структуры активов.
          </p>
        </motion.div>

        {/* Tech stack chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: 8,
            marginBottom: 60,
          }}
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

        {/* Screenshot carousel — manual only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative', marginBottom: 64 }}
        >
          {/* Arrows */}
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

          {/* Scrolling row */}
          <div
            ref={scrollRef}
            className="carousel-track"
            style={{
              display: 'flex',
              gap: 24,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
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
                  scrollSnapAlign: 'center',
                }}
              >
                <div style={{
                  position: 'relative',
                  borderRadius: 18,
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  background: '#0a0a0a',
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

        {/* Features grid */}
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

        {/* GitHub link */}
        <motion.a
          href="https://github.com/anassstya/cryptofund"
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
