import { motion } from 'motion/react'
import type { Transition } from 'motion/react'

interface ExperienceDotProps {
  active: boolean
  y: number
  transition: Transition
  decorative?: boolean
  onClick?: () => void
  label?: string
}

export function ExperienceDot({ active, y, transition, decorative, onClick, label }: ExperienceDotProps) {
  const inner = (
    <span
      className={`flex h-4.75 w-4.75 items-center justify-center rounded-full border transition-colors duration-300 ${
        active
          ? 'border-pf-experience-accent motion-safe:animate-[pf-experience-pulse_2.6s_cubic-bezier(.4,0,.6,1)_infinite]'
          : 'border-pf-experience-dot-ring'
      }`}
    >
      <span
        className={`h-1.75 w-1.75 rounded-full transition-colors duration-300 ${
          active ? 'bg-pf-experience-accent' : 'bg-pf-experience-dot-core'
        }`}
      />
    </span>
  )

  const className =
    'bg-pf-bg absolute top-0 left-1/2 mt-[-9.5px] ml-[-9.5px] flex h-4.75 w-4.75 items-center justify-center rounded-full'

  if (decorative) {
    return (
      <motion.div aria-hidden className={className} animate={{ y }} transition={transition}>
        {inner}
      </motion.div>
    )
  }

  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={className}
      animate={{ y }}
      transition={transition}
    >
      {inner}
    </motion.button>
  )
}
