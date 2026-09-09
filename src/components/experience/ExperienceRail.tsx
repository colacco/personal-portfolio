import type { RefObject } from 'react'
import { motion } from 'motion/react'
import type { Transition } from 'motion/react'
import type { TimelineEntry } from '../../i18n/types'
import type { Metrics } from '../../hooks/useRailMetrics'
import { ExperienceDot } from './ExperienceDot'

interface ExperienceRailProps {
  trackRef: RefObject<HTMLDivElement | null>
  metrics: Metrics
  items: TimelineEntry[]
  safeActive: number
  transition: Transition
  decorative?: boolean
  onSelect?: (index: number) => void
  className?: string
}

export function ExperienceRail({
  trackRef,
  metrics,
  items,
  safeActive,
  transition,
  decorative,
  onSelect,
  className,
}: ExperienceRailProps) {
  return (
    <div ref={trackRef} className={className ?? 'bg-pf-experience-rail relative'}>
      <motion.div
        className="bg-pf-experience-accent absolute -left-px w-0.75 rounded-full"
        animate={{ y: metrics.top, height: metrics.height }}
        transition={transition}
      />
      {items.map((item, i) => (
        <ExperienceDot
          key={item.id}
          decorative={decorative}
          active={i === safeActive}
          label={item.role}
          onClick={onSelect ? () => onSelect(i) : undefined}
          y={metrics.centers[i] ?? 0}
          transition={transition}
        />
      ))}
    </div>
  )
}
