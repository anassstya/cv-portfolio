# Portfolio — Анастасия Ачкасова

React + TypeScript + Framer Motion

## Запуск

```bash
npm install
npm run dev
```

Открой http://localhost:5173

## Сборка

```bash
npm run build
```

## Стек

- React 18 + TypeScript
- Vite
- Framer Motion (анимации)
- Lucide React (иконки)

## Структура

```
src/
├── components/
│   ├── Header.tsx       # Шапка с навигацией и переключателем языка
│   ├── Hero.tsx         # Главный экран
│   ├── About.tsx        # Обо мне + образование + курсы
│   ├── Skills.tsx       # Навыки с цветными бейджами
│   ├── Experience.tsx   # Опыт работы
│   ├── Projects.tsx     # Проекты (серые заглушки)
│   └── Footer.tsx       # Футер
├── context/
│   └── LangContext.tsx  # Контекст языка (RU/EN)
├── i18n/
│   ├── ru.ts            # Русские тексты
│   └── en.ts            # Английские тексты
├── App.tsx
├── main.tsx
└── index.css
```

## Что доделать потом

- Добавить фото/скриншоты проектов вместо серых заглушек
- Добавить обработчик клика на карточки проектов (модалка или отдельная страница)
- Кастомизировать цвета в `src/index.css` (переменные в `:root`)
