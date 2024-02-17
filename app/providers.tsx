'use client'

import { LanguageProvider } from '@/context/LanguageProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
