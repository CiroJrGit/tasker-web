export type Theme = 'light' | 'dark' | 'system'

export interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export interface ThemeProviderProps {
  children: React.ReactNode
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
