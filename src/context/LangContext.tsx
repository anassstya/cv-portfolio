import { createContext, useContext, useState, type ReactNode } from 'react'
import { ru } from '../i18n/ru'
import { en } from '../i18n/en'

export type Lang = 'ru' | 'en'
export type Translations = typeof ru

interface LangContextType {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru')
  const t = lang === 'ru' ? ru : (en as unknown as Translations)

  return (
    <LangContext.Provider
      value={{
        lang,
        t,
        toggleLang: () => setLang((l) => (l === 'ru' ? 'en' : 'ru')),
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
