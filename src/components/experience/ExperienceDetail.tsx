import { AnimatePresence, motion } from 'motion/react'
import type { TimelineEntry } from '../../i18n/types'
import { EASE } from './ease'

interface ExperienceDetailProps {
  item: TimelineEntry | undefined
  reduced: boolean | null
}

export function ExperienceDetail({ item, reduced }: ExperienceDetailProps) {
  return (
    <div className="pt-4 lg:pt-5">
      <AnimatePresence mode="wait">
        {item && (
          <motion.div
            key={item.id}
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={reduced ? { duration: 0 } : { duration: 0.34, ease: EASE }}
          >
            <div className="mb-3.5 flex items-center gap-3 lg:mb-4.5 lg:gap-3.5">
              <span className="text-pf-experience-text-mono-muted font-mono text-[11px] tracking-[0.14em] lg:text-[12px]">
                {item.period}
              </span>
            </div>
            <h3 className="text-pf-experience-heading mb-1.5 text-[25px] leading-[1.22] font-normal tracking-[-0.015em] lg:mb-2 lg:text-[32px] lg:leading-[1.2]">
              {item.role}
            </h3>
            <p className="text-pf-experience-text-muted mb-5 text-[14px] lg:mb-6.5 lg:text-[15px]">{item.org}</p>
            <p className="text-pf-experience-text-mid text-[15.5px] leading-[1.68] text-pretty lg:max-w-[52ch] lg:text-[17px] lg:leading-[1.7]">
              {item.body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
