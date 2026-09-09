import type { MutableRefObject, RefObject } from 'react'
import type { Transition } from 'motion/react'
import type { TimelineEntry } from '../../i18n/types'
import type { Metrics } from '../../hooks/useRailMetrics'
import { ExperienceRail } from './ExperienceRail'
import { ExperienceDetail } from './ExperienceDetail'

interface ExperienceMasterDetailProps {
  items: TimelineEntry[]
  safeActive: number
  onSelect: (index: number) => void
  trackRef: RefObject<HTMLDivElement | null>
  headRefs: MutableRefObject<(HTMLButtonElement | null)[]>
  metrics: Metrics
  transition: Transition
  reduced: boolean | null
}

export function ExperienceMasterDetail({
  items,
  safeActive,
  onSelect,
  trackRef,
  headRefs,
  metrics,
  transition,
  reduced,
}: ExperienceMasterDetailProps) {
  return (
    <div className="hidden items-start gap-x-8 md:grid md:grid-cols-[240px_1px_1fr] lg:grid-cols-[360px_1px_1fr] lg:gap-x-14">
      <div className="flex flex-col">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            ref={(el) => {
              headRefs.current[i] = el
            }}
            onClick={() => onSelect(i)}
            aria-current={i === safeActive}
            className={`flex min-h-11 flex-col gap-1 py-4 text-left transition-opacity duration-300 hover:opacity-100 lg:gap-1.25 lg:py-5 ${
              i === safeActive ? 'opacity-100' : 'opacity-45'
            }`}
          >
            <span
              className={`font-mono text-[11px] tracking-[0.14em] transition-colors duration-300 lg:text-[11.5px] ${
                i === safeActive ? 'text-pf-experience-accent' : 'text-pf-experience-text-mono-muted'
              }`}
            >
              {item.period}
            </span>
            <span
              className={`text-[16px] leading-[1.35] font-medium transition-colors duration-300 lg:text-[18px] ${
                i === safeActive ? 'text-pf-experience-heading' : 'text-pf-experience-text-row'
              }`}
            >
              {item.role}
            </span>
            <span className="text-pf-experience-text-faint text-[12.5px] lg:text-[13.5px]">{item.org}</span>
          </button>
        ))}
      </div>

      <ExperienceRail
        trackRef={trackRef}
        metrics={metrics}
        items={items}
        safeActive={safeActive}
        transition={transition}
        onSelect={onSelect}
        className="bg-pf-experience-rail relative self-stretch"
      />

      <ExperienceDetail item={items[safeActive]} reduced={reduced} />
    </div>
  )
}
