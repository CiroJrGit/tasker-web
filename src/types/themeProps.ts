import { ReactNode } from 'react'

export interface ThemeContextProps {
  theme: string
  toggleTheme: () => void
}

export interface ThemeProviderProps {
  children: ReactNode
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
