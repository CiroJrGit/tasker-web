import { useState, useEffect, createContext } from 'react'

import {
  Theme,
  ThemeContextProps,
  ThemeProviderProps,
} from '../types/themeProps'

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
)

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(
    (localStorage.getItem('tasker-userTheme') as Theme) || 'system',
  )

  const getSystemTheme = (): Theme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const applyTheme = (theme: Theme) => {
    const root = window.document.documentElement
    const systemTheme = getSystemTheme()

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('tasker-userTheme', theme)
  }, [theme])

  useEffect(() => {
    if (theme === 'system') {
      const systemTheme = getSystemTheme()
      applyTheme(systemTheme)
    }
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme(getSystemTheme())
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
