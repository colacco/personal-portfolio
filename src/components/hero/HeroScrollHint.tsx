interface HeroScrollHintProps {
  label: string
}

export function HeroScrollHint({ label }: HeroScrollHintProps) {
  return (
    <a
      href="#about"
      aria-label={label}
      className="text-pf-muted hover:text-pf-accent absolute bottom-4.5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.25 font-mono text-[9px] tracking-[0.16em] uppercase no-underline transition-colors duration-250 sm:inline-flex"
    >
      {label}
      <i
        className="ph ph-caret-down text-[13px] animate-[pf-float_2.6s_ease-in-out_infinite]"
        aria-hidden="true"
      />
    </a>
  )
}
