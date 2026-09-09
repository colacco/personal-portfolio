import type { Copy } from '../types'
import { nav } from './nav'
import { hero } from './hero'
import { about } from './about'
import { projects } from './projects'
import { skills } from './skills'
import { services } from './services'
import { experience } from './experience'
import { contact } from './contact'
import { footer } from './footer'
import { misc } from './misc'

export const pt: Copy = {
  ...nav,
  ...hero,
  ...about,
  ...projects,
  ...skills,
  ...services,
  ...experience,
  ...contact,
  ...footer,
  ...misc,
}
