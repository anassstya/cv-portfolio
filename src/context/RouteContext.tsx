import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface RouteContextType {
  route: string
  navigate: (path: string) => void
}

const RouteContext = createContext<RouteContextType | null>(null)

// A "route" is a hash starting with #/. Other hashes (e.g. #about) are section anchors.
function readRoute(): string {
  const h = window.location.hash
  if (h.startsWith('#/')) return h
  return '#/'
}

export function RouteProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<string>(readRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (path: string) => {
    window.location.hash = path
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <RouteContext.Provider value={{ route, navigate }}>
      {children}
    </RouteContext.Provider>
  )
}

export function useRoute() {
  const ctx = useContext(RouteContext)
  if (!ctx) throw new Error('useRoute must be in RouteProvider')
  return ctx
}
