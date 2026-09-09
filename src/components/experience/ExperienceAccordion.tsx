import type { MutableRefObject, RefObject } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { Transition } from 'motion/react'
import type { TimelineEntry } from '../../i18n/types'
import type { Metrics } from '../../hooks/useRailMetrics'
import { ExperienceRail } from './ExperienceRail'
import { EASE } from './ease'

interface ExperienceAccordionProps {
  items: TimelineEntry[]
  safeActive: number
  onSelect: (index: number) => void
  trackRef: RefObject<HTMLDivElement | null>
  headRefs: MutableRefObject<(HTMLButtonElement | null)[]>
  metrics: Metrics
  transition: Transition
  reduced: boolean | null
}

export function ExperienceAccordion({
  items,
  safeActive,
  onSelect,
  trackRef,
  headRefs,
  metrics,
  transition,
  reduced,
}: ExperienceAccordionProps) {
  return (
    <div className="grid grid-cols-[19px_1fr] gap-x-4.5 md:hidden">
      <ExperienceRail
        trackRef={trackRef}
        metrics={metrics}
        items={items}
        safeActive={safeActive}
        transition={transition}
        decorative
        className="bg-pf-experience-rail relative col-start-1 row-span-full w-px justify-self-center"
      />

      {items.map((item, i) => {
        const open = i === safeActive
        return (
          <div key={item.id} className="col-start-2 pt-3.5 pb-4.5">
            <button
              type="button"
              ref={(el) => {
                headRefs.current[i] = el
              }}
              onClick={() => onSelect(i)}
              aria-expanded={open}
              className={`flex min-h-11 w-full flex-col gap-1 text-left transition-opacity duration-300 ${
                open ? 'opacity-100' : 'opacity-45'
              }`}
            >
              <span
                className={`font-mono text-[11px] tracking-[0.14em] transition-colors duration-300 ${
                  open ? 'text-pf-experience-accent' : 'text-pf-experience-text-mono-muted'
                }`}
              >
                {item.period}
              </span>
              <span
                className={`text-[17px] leading-[1.35] font-medium transition-colors duration-300 ${
                  open ? 'text-pf-experience-heading' : 'text-pf-experience-text-row'
                }`}
              >
                {item.role}
              </span>
              <span className="text-pf-experience-text-faint text-[13px]">{item.org}</span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={reduced ? { duration: 0 } : { duration: 0.38, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="text-pf-experience-text-mid mt-3.5 text-[15px] leading-[1.65] text-pretty">
                    {item.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
