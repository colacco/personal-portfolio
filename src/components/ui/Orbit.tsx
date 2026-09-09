import { motion, useReducedMotion } from 'motion/react'

interface OrbitProps {
  from: number
  duration: number
  reverse?: boolean
  flatten: number
  className?: string
  ringClassName?: string
}

export function Orbit({
  from,
  duration,
  reverse = false,
  flatten,
  className = '',
  ringClassName = '',
}: OrbitProps) {
  const reduced = useReducedMotion()
  const to = reverse ? from - 360 : from + 360

  return (
    <motion.span
      aria-hidden="true"
      className={`absolute ${className}`}
      initial={{ rotate: from }}
      animate={{ rotate: reduced ? from : to }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration, repeat: Infinity, ease: 'linear' }
      }
    >
      <span
        className={`block h-full w-full rounded-full ${ringClassName}`}
        style={{ transform: `scaleY(${flatten})` }}
      />
    </motion.span>
  )
}
