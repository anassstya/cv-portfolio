import { useEffect } from 'react'
import { LangProvider, useLang } from './context/LangContext'
import { RouteProvider, useRoute } from './context/RouteContext'
import GlobalSmoke from './components/GlobalSmoke'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CryptoFundPage from './components/CryptoFundPage'
import VkBotPage from './components/VkBotPage'
import LlmChatPage from './components/LlmChatPage'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </>
  )
}

function AppContent() {
  const { lang } = useLang()
  const { route } = useRoute()

  useEffect(() => { document.documentElement.lang = lang }, [lang])

  let content
  if (route.startsWith('#/cryptofund')) content = <CryptoFundPage />
  else if (route.startsWith('#/vkbot')) content = <VkBotPage />
  else if (route.startsWith('#/llmchat')) content = <LlmChatPage />
  else content = <HomePage />

  return (
    <>
      <GlobalSmoke />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          {content}
        </main>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <RouteProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </RouteProvider>
  )
}

export default App
