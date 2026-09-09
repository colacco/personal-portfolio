import { motion, useReducedMotion } from 'motion/react'

export function StatCard({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="border-pf-border bg-pf-surface/70 hover:border-pf-accent hover:bg-pf-surface flex h-full flex-col justify-between gap-2.5 rounded-xl border px-4 py-3.75 transition-colors duration-300"
    >
      <p className="text-pf-muted font-mono text-[10px] tracking-widest uppercase wrap-anywhere">
        {label}
      </p>
      <p className="text-pf-text mt-auto text-[26px] leading-none font-medium tracking-[-0.03em]">
        {value}
        {suffix && <span className="text-pf-accent text-[15px]">{suffix}</span>}
      </p>
    </motion.div>
  )
}
