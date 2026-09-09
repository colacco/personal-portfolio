import type { RefObject } from 'react'
import { Moon, Settings, Sun } from 'lucide-react'
import type { Lang } from '../../i18n/copy'
import type { Theme } from '../../theme/theme-context'
import brazilFlag from '../../assets/flag/brazil.png'
import usaFlag from '../../assets/flag/eua.png'

const OVERLAY_TRANSITION_MS = 280

interface SettingsMenuProps {
  containerRef: RefObject<HTMLDivElement | null>
  lang: Lang
  theme: Theme
  mounted: boolean
  visible: boolean
  onToggle: () => void
  toggleLang: () => void
  toggleTheme: () => void
}

export function SettingsMenu({
  containerRef,
  lang,
  theme,
  mounted,
  visible,
  onToggle,
  toggleLang,
  toggleTheme,
}: SettingsMenuProps) {
  return (
    <div ref={containerRef} className="relative flex items-center">
      <button
        type="button"
        onClick={onToggle}
        aria-label={lang === 'en' ? 'Settings' : 'Configurações'}
        aria-expanded={mounted}
        className="text-pf-muted hover:text-pf-text inline-flex cursor-pointer items-center justify-center transition-colors duration-250"
      >
        <Settings
          size={22}
          aria-hidden="true"
          className="transition-transform ease-out"
          style={{
            transform: visible ? 'rotate(90deg)' : 'rotate(0deg)',
            transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
          }}
        />
      </button>

      {mounted && (
        <div
          className="border-pf-border bg-pf-surface shadow-pf absolute top-full right-0 mt-3 w-55 origin-top-right rounded-xl border p-2 transition-all ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(-6px)',
            transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
          }}
        >
          <button
            type="button"
            onClick={toggleLang}
            className="hover:bg-pf-accent-tint flex w-full items-center justify-between rounded-lg px-2.5 py-2 transition-colors duration-250"
          >
            <span className="text-pf-text text-[13px]">
              {lang === 'en' ? 'Language' : 'Idioma'}
            </span>
            <img
              src={lang === 'en' ? usaFlag : brazilFlag}
              alt=""
              className="h-4.5 w-4.5 rounded-full"
            />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="hover:bg-pf-accent-tint flex w-full items-center justify-between rounded-lg px-2.5 py-2 transition-colors duration-250"
          >
            <span className="text-pf-text text-[13px]">
              {lang === 'en' ? 'Theme' : 'Tema'}
            </span>
            {theme === 'light' ? (
              <Moon size={15} aria-hidden="true" />
            ) : (
              <Sun size={15} aria-hidden="true" />
            )}
          </button>
        </div>
      )}
    </div>
  )
}
