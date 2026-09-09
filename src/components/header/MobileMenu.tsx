import { Moon, Sun } from 'lucide-react'
import type { Lang } from '../../i18n/copy'
import type { Theme } from '../../theme/theme-context'
import brazilFlag from '../../assets/flag/brazil.png'
import usaFlag from '../../assets/flag/eua.png'
import githubIcon from '../../assets/links/github.svg'

const OVERLAY_TRANSITION_MS = 280

const BUTTON_CLASS =
  'border-pf-border hover:border-pf-accent hover:bg-pf-accent-tint inline-flex h-8 cursor-pointer items-center justify-center rounded-lg border bg-transparent transition-colors duration-250'

interface NavItem {
  href: string
  label: string
}

interface MobileMenuProps {
  mounted: boolean
  visible: boolean
  onClose: () => void
  navItems: NavItem[]
  githubHref: string
  lang: Lang
  theme: Theme
  toggleLang: () => void
  toggleTheme: () => void
}

export function MobileMenu({
  mounted,
  visible,
  onClose,
  navItems,
  githubHref,
  lang,
  theme,
  toggleLang,
  toggleTheme,
}: MobileMenuProps) {
  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 backdrop-blur-md transition-opacity ease-out md:hidden"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--pf-bg) 85%, black)',
        opacity: visible ? 0.88 : 0,
        transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
      }}
      onClick={onClose}
    >
      <nav
        aria-label="Mobile"
        className="flex w-full max-w-xs flex-col items-center gap-2"
        onClick={(event) => event.stopPropagation()}
      >
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-pf-text w-full rounded-xl px-4 py-3 text-center text-lg font-medium no-underline transition-all ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
              transitionDelay: visible ? `${60 + index * 45}ms` : '0ms',
            }}
          >
            {item.label}
          </a>
        ))}

        <a
          href={githubHref}
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
          className="text-pf-text mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-lg font-medium no-underline transition-all ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
            transitionDelay: visible ? `${60 + navItems.length * 45}ms` : '0ms',
          }}
        >
          <img src={githubIcon} alt="" className="h-4.5 w-4.5" />
          GitHub
        </a>

        <div
          className="mt-4 flex items-center gap-3 transition-all ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
            transitionDelay: visible ? `${60 + (navItems.length + 1) * 45}ms` : '0ms',
          }}
        >
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to Portuguese' : 'Switch to English'}
            className={`${BUTTON_CLASS} w-10 h-10`}
          >
            <img
              src={lang === 'en' ? usaFlag : brazilFlag}
              alt=""
              className="h-5 w-5 rounded-full"
            />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Theme"
            className={`${BUTTON_CLASS} w-10 h-10`}
          >
            {theme === 'light' ? (
              <Moon size={17} aria-hidden="true" />
            ) : (
              <Sun size={17} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </div>
  )
}
