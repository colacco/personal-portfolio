import type { Copy } from '../i18n/copy'

export function useNavItems(t: Copy) {
  return [
    { href: '#about', label: t.navAbout },
    { href: '#projects', label: t.navProjects },
    { href: '#stack', label: t.navSkills },
    { href: '#services', label: t.navServices },
    { href: '#experience', label: t.navExperience },
    { href: '#contact', label: t.navContact },
  ]
}
