import { ReactNode } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export interface ThemeProviderProps {
  children: ReactNode
}

export interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export enum ThemeOptions { // TO-DO: PADRONIZAR
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export enum ThemeLabels { // TO-DO: PADRONIZAR
  dark = 'Escuro',
  light = 'Claro',
  system = 'Usar padrão do sistema',
}
