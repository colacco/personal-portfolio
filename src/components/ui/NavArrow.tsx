interface NavArrowProps {
  direction: 'left' | 'right'
  onClick: () => void
  className?: string
}

const BASE =
  'border-pf-border text-pf-text hover:border-pf-accent absolute top-1/2 inline-flex h-[38px] w-[38px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border transition-colors duration-250'

const BACKGROUND = {
  background: 'color-mix(in srgb, var(--pf-bg) 82%, transparent)',
}

export function NavArrow({ direction, onClick, className }: NavArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
      className={className ? `${BASE} ${className}` : BASE}
      style={BACKGROUND}
    >
      <i
        className={`ph ph-caret-${direction === 'left' ? 'left' : 'right'}`}
        aria-hidden="true"
      />
    </button>
  )
}
