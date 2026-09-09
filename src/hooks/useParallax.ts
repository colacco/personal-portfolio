import { useScroll, useTransform, useReducedMotion } from 'motion/react'
import type { MotionValue } from 'motion/react'

export function useParallax(factor: number): MotionValue<number> {
  const { scrollY } = useScroll()
  const reduced = useReducedMotion()
  return useTransform(scrollY, (y) => (reduced ? 0 : y * factor))
}
