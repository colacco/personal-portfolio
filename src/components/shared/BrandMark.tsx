import type { ReactNode } from 'react'
import { Orbit } from '../ui/Orbit'

interface BrandMarkProps {
  label: ReactNode
  className?: string
}

export function BrandMark({ label, className }: BrandMarkProps) {
  return (
    <a
      href="#top"
      className={className ?? 'text-pf-text flex items-center gap-2.5 no-underline'}
    >
      <span className="relative inline-flex h-6.5 w-6.5 flex-none items-center justify-center">
        <Orbit
          from={0}
          duration={9}
          flatten={0.42}
          className="inset-0"
          ringClassName="border-pf-accent border-[1.5px]"
        />
        <Orbit
          from={60}
          duration={12}
          reverse
          flatten={0.42}
          className="inset-0 opacity-75"
          ringClassName="border-pf-accent-soft border-[1.5px]"
        />
        <span className="bg-pf-accent h-1.5 w-1.5 rounded-full" />
      </span>
      <span className="font-mono text-sm font-bold tracking-[-0.01em]">{label}</span>
    </a>
  )
}
