export const ru = {
  nav: {
    about: 'Обо мне',
    skills: 'Навыки',
    experience: 'Опыт',
    projects: 'Проекты',
  },
  hero: {
    greeting: 'Привет, я',
    name: 'Анастасия Ачкасова',
    role: 'Backend Developer',
    subtitle: 'Разрабатываю надёжные серверные решения на Go, проектирую REST API и gRPC-сервисы.',
    cta: 'Посмотреть проекты',
    contactCta: 'Написать',
  },
  about: {
    title: 'Обо мне',
    p1: 'Я backend-разработчик из Санкт-Петербурга, студентка НИУ ИТМО.',
    p2: 'Начинала свой путь c frontend-разработки: верстала интерфейсы на React, работала с TypeScript и Redux — поэтому уверенно понимаю клиентскую часть и могу при необходимости браться за frontend-задачи.',
    p3: 'Сейчас специализируюсь на разработке серверных приложений на Go. Проектирую REST API и gRPC-сервисы, работаю с PostgreSQL, контейнеризирую сервисы в Docker. Увлечена архитектурой распределённых систем, написанием чистого тестируемого кода.',
    education: 'Образование',
    courses: 'Курсы',
    edu: [
      {
        place: 'НИУ ИТМО',
        degree: 'Бакалавриат, 2023–2027',
        faculty: 'Факультет технологического менеджмента и инноваций',
      },
    ],
    crs: [
      { name: 'Frontend-разработчик с нуля до middle', org: 'Нетология', year: '2022–2024' },
      { name: 'Алгоритмы и структуры данных', org: 'VK', year: '2026' },
    ],
  },
  skills: {
    title: 'Навыки',
    backend: 'Backend',
    frontend: 'Frontend & Инструменты',
  },
  experience: {
    title: 'Опыт работы',
    jobs: [
      {
        company: 'ExatHomes',
        role: 'Fullstack Developer',
        period: '~6 месяцев',
        items: [
          'Работала в американском стартапе в сфере недвижимости (real estate). Основной фокус был на frontend-разработке, но при необходимости брала задачи на бэкенде',
          'Разработка адаптивных интерфейсов на React: верстала и внедряла новые страницы, создавала переиспользуемые компоненты с использованием функциональных хуков (useState, useEffect), оптимизировала рендеринг и обеспечивала кроссбраузерную совместимость',
          'Диагностика и устранение фронтенд-багов: проводила отладку, рефакторила проблемные участки кода, улучшала UX и производительность интерфейса',
          'Интеграция с CRM-системами и сторонними API, работа с формами, валидацией и состоянием приложения',
          'Backend-задачи на Go: реализовывала REST API эндпоинты, настраивала валидацию входящих запросов и работу с PostgreSQL',
        ],
      },
    ],
  },
  projects: {
    title: 'Проекты',
    viewCode: 'GitHub',
    items: [
      {
        title: 'VK Teams Notification Bot',
        tag: 'Производственная практика · 2026',
        desc: 'Чат-бот для автоматической рассылки персонализированных уведомлений в корпоративном мессенджере VK Teams с асинхронным планировщиком и статистикой доставки.',
        stack: ['Go 1.21', 'PostgreSQL', 'bot-golang', 'pgxpool', 'sync.Mutex'],
        github: 'https://github.com/anassstya/vkbot',
      },
      {
        title: 'LLM Chat Assistant',
        tag: 'AI Chat Interface',
        desc: 'Полнофункциональный веб-чат для взаимодействия с LLM с поддержкой потоковой передачи ответов через WebSocket/SSE и историей диалогов в PostgreSQL.',
        stack: ['Go', 'React', 'WebSocket/SSE', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/anassstya/llmchat',
      },
      {
        title: 'CryptoFund',
        tag: 'Mobile App',
        desc: 'Мобильное Flutter-приложение с аналитикой крипто-балансов, объединяющее данные с 4+ бирж (Binance, Bybit, Bitget, MEXC) в едином интерфейсе.',
        stack: ['Go', 'Flutter', 'PostgreSQL', 'Redis', 'Docker'],
        github: 'https://github.com/anassstya/cryptofund',
      },
    ],
  },
  footer: {
    copy: '© 2026 Анастасия Ачкасова',
    made: 'Backend Developer · Санкт-Петербург',
  },
}
