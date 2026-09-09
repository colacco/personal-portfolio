import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

export function useScrolled(threshold = 24): boolean {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > threshold))

  return scrolled
}
