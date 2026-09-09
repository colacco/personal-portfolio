import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  index?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}

export function Reveal({
  children,
  index = 0,
  className,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion()
  const Tag = motion[as]

  if (reduced) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px -6% 0px' }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 4) * 0.07,
      }}
    >
      {children}
    </Tag>
  )
}
