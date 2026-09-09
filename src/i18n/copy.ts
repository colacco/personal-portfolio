import type { Lang, Copy } from './types'
import { en } from './en'
import { pt } from './pt'

export type {
  Lang,
  StatCopy,
  ServiceCopy,
  ProjectCopy,
  TimelineEntry,
  Copy,
} from './types'

export const COPY: Record<Lang, Copy> = { en, pt }

export const LINKS = {
  email: 'mailto:gabrielramoscolaco@gmail.com',
  github: 'https://github.com/colacco',
  linkedin: 'https://www.linkedin.com/in/gabriel-colacco',
}
