'use client'
import { fallbackLng } from '@/app/i18n/settings'
import React, { createContext, useEffect, useContext, useState } from 'react'

interface LanguageContextType {
  lng: string
  setLng: (lng: string) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lng, setLng] = useState<string>(fallbackLng || 'en')

  const handleThemeChange = () => {
    const html = document.querySelector('html')
    if (html) {
      html.lang = lng
      setLng(lng)
    }
  }

  useEffect(() => {
    handleThemeChange()
  }, [lng])

  return (
    <LanguageContext.Provider value={{ lng, setLng }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
