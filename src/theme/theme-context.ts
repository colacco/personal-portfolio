import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark'

export interface ThemeValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeValue>({
  theme: 'light',
  toggleTheme: () => {},
})

export function useTheme(): ThemeValue {
  return useContext(ThemeContext)
}
