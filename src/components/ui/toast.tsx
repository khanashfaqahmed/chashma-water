'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

interface ToastContextType {
  showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  const showToast = useCallback((msg: string) => {
    setMessage(msg)
    setVisible(true)
    window.setTimeout(() => setVisible(false), 2800)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={cn(
          'fixed bottom-20 left-1/2 z-[200] -translate-x-1/2 whitespace-nowrap rounded-full bg-dark px-6 py-3 text-sm text-white shadow-lg transition-all duration-300',
          visible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-16 opacity-0'
        )}
      >
        {message}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    // Fallback no-op if used outside provider (shouldn't happen)
    return { showToast: () => {} }
  }
  return ctx
}
