export const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Anastasia Achkasova',
    role: 'Backend Developer',
    subtitle: 'Building reliable server-side solutions in Go, designing REST APIs and gRPC services.',
    cta: 'View Projects',
    contactCta: 'Contact Me',
  },
  about: {
    title: 'About Me',
    p1: "I'm a backend developer from Saint Petersburg, studying at ITMO University.",
    p2: 'I started my journey in frontend development: building React interfaces, working with TypeScript and Redux — so I have a solid grasp of the client side and can confidently take on frontend tasks when needed.',
    p3: 'Now I specialize in building server applications in Go. I design REST APIs and gRPC services, work with PostgreSQL, and containerize services with Docker. Passionate about distributed systems architecture and writing clean, testable code.',
    education: 'Education',
    courses: 'Courses',
    edu: [
      {
        place: 'ITMO University',
        degree: "Bachelor's Degree, 2023–2027",
        faculty: 'Faculty of Technological Management and Innovation',
      },
    ],
    crs: [
      { name: 'Frontend Developer from Zero to Middle', org: 'Netologia', year: '2022–2024' },
      { name: 'Algorithms and Data Structures', org: 'VK', year: '2026' },
    ],
  },
  skills: {
    title: 'Skills',
    backend: 'Backend',
    frontend: 'Frontend & Tools',
  },
  experience: {
    title: 'Work Experience',
    jobs: [
      {
        company: 'ExatHomes',
        role: 'Fullstack Developer',
        period: '~1 year',
        items: [
          'Worked at an American real estate startup. The primary focus was frontend development, but I also took on backend tasks when needed',
          'Built adaptive React interfaces: developed new pages, created reusable components with hooks (useState, useEffect), optimized rendering and ensured cross-browser compatibility',
          'Diagnosed and fixed frontend bugs: debugging, refactoring problematic code, improving UX and interface performance',
          'Integrated CRM systems and third-party APIs, worked with forms, validation, and application state',
          'Backend tasks in Go: implemented REST API endpoints, set up request validation and PostgreSQL integration',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    viewCode: 'GitHub',
    items: [
      {
        title: 'VK Teams Notification Bot',
        tag: 'Industrial Practice · 2026',
        desc: 'A chatbot for automated personalized notifications in the VK Teams corporate messenger, featuring an async scheduler and delivery statistics.',
        stack: ['Go 1.21', 'PostgreSQL', 'bot-golang', 'pgxpool', 'sync.Mutex'],
        github: 'https://github.com/anassstya/vkbot',
      },
      {
        title: 'LLM Chat Assistant',
        tag: 'AI Chat Interface',
        desc: 'A full-featured web chat for LLM interaction with streaming responses via WebSocket/SSE and persistent conversation history in PostgreSQL.',
        stack: ['Go', 'React', 'WebSocket/SSE', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/anassstya/llmchat',
      },
      {
        title: 'CryptoFund',
        tag: 'Mobile App',
        desc: 'A Flutter mobile app with crypto portfolio analytics aggregating data from 4+ exchanges (Binance, Bybit, Bitget, MEXC) in a single interface.',
        stack: ['Go', 'Flutter', 'PostgreSQL', 'Redis', 'Docker'],
        github: 'https://github.com/anassstya/cryptofund',
      },
    ],
  },
  footer: {
    copy: '© 2026 Anastasia Achkasova',
    made: 'Backend Developer · Saint Petersburg',
  },
}
