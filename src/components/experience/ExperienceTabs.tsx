import { motion } from 'motion/react'
import type { TimelineType } from '../../i18n/types'
import { EASE } from './ease'

interface ExperienceTabsProps {
  tabs: { key: TimelineType; label: string }[]
  active: TimelineType
  onSelect: (next: TimelineType) => void
  reduced: boolean | null
}

export function ExperienceTabs({ tabs, active, onSelect, reduced }: ExperienceTabsProps) {
  return (
    <div className="mb-6 inline-flex rounded-3xl bg-[#e8e6f0] p-1 md:mb-8 dark:bg-pf-surface-2">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          aria-pressed={key === active}
          onClick={() => onSelect(key)}
          className={`relative cursor-pointer rounded-[20px] border-0 bg-transparent px-4.5 py-2 font-sans text-[12px] font-semibold transition-colors duration-200 ${
            key === active
              ? `text-white dark:text-pf-bg-2 ${reduced ? '' : 'delay-150'}`
              : 'text-[#8a8798] dark:text-pf-muted'
          }`}
        >
          {key === active && (
            <motion.span
              layoutId="experience-tab-pill"
              className="absolute inset-0 rounded-[20px] bg-[#6a5cff] dark:bg-pf-accent"
              transition={reduced ? { duration: 0 } : { duration: 0.32, ease: EASE }}
            />
          )}
          <span className="relative">{label}</span>
        </button>
      ))}
    </div>
  )
}
