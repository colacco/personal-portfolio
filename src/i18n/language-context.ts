import { createContext, useContext } from 'react'
import { COPY } from './copy'
import type { Copy, Lang } from './copy'

export interface LanguageValue {
  lang: Lang
  t: Copy
  toggleLang: () => void
}

export const LanguageContext = createContext<LanguageValue>({
  lang: 'en',
  t: COPY.en,
  toggleLang: () => {},
})

export function useLang(): LanguageValue {
  return useContext(LanguageContext)
}
