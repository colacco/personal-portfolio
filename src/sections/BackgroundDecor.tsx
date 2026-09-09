import { motion } from 'motion/react'
import { useParallax } from '../hooks/useParallax'

const DOT_MASK =
  'radial-gradient(ellipse 90% 60% at 50% 25%, #000 20%, transparent 75%)'

export function BackgroundDecor() {
  const y = useParallax(0.18)

  return (
    <motion.div
      aria-hidden="true"
      style={{ y }}
      className="pointer-events-none fixed inset-x-[-10%] top-[-10%] z-0 h-[120vh] opacity-90"
    >
      <div
        className="absolute top-[-18vh] left-1/2 h-[min(1100px,120vw)] w-[min(1100px,120vw)] -translate-x-1/2 rounded-full blur-[10px]"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, var(--pf-glow) 0%, transparent 62%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(var(--pf-border) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
          maskImage: DOT_MASK,
          WebkitMaskImage: DOT_MASK,
        }}
      />
    </motion.div>
  )
}
