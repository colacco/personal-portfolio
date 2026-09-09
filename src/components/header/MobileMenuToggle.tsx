import type { Lang } from '../../i18n/copy'

const BUTTON_CLASS =
  'border-pf-border hover:border-pf-accent hover:bg-pf-accent-tint inline-flex h-8 cursor-pointer items-center justify-center rounded-lg border bg-transparent transition-colors duration-250'

const OVERLAY_TRANSITION_MS = 280

interface MobileMenuToggleProps {
  lang: Lang
  mounted: boolean
  visible: boolean
  onClick: () => void
}

export function MobileMenuToggle({ lang, mounted, visible, onClick }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        mounted
          ? lang === 'en'
            ? 'Close menu'
            : 'Fechar menu'
          : lang === 'en'
            ? 'Open menu'
            : 'Abrir menu'
      }
      aria-expanded={mounted}
      className={`${BUTTON_CLASS} w-8 flex-none md:hidden`}
    >
      <span className="relative flex h-3.5 w-4 flex-none flex-col justify-between">
        <span
          className="bg-pf-text block h-[1.5px] w-full rounded-full transition-transform ease-out"
          style={{
            transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
            transform: visible ? 'translateY(6px) rotate(45deg)' : 'translateY(0) rotate(0deg)',
          }}
        />
        <span
          className="bg-pf-text block h-[1.5px] w-full rounded-full transition-all ease-out"
          style={{
            transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
            opacity: visible ? 0 : 1,
            transform: visible ? 'scaleX(0)' : 'scaleX(1)',
          }}
        />
        <span
          className="bg-pf-text block h-[1.5px] w-full rounded-full transition-transform ease-out"
          style={{
            transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
            transform: visible ? 'translateY(-6px) rotate(-45deg)' : 'translateY(0) rotate(0deg)',
          }}
        />
      </span>
    </button>
  )
}
