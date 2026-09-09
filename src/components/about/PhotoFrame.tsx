import { motion, useReducedMotion } from 'motion/react'
import aboutPhoto from '../../assets/about/me.jpeg'

export function PhotoFrame() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="border-pf-surface/85 shadow-[0_26px_60px_-30px_var(--pf-glow)] hover:shadow-[0_34px_70px_-34px_var(--pf-glow)] relative origin-top-left overflow-hidden rounded-[22px] border transition-shadow duration-700 ease-pf"
      whileHover={reduced ? undefined : { x: 10, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.6 }}
    >
      <img
        src={aboutPhoto}
        alt="Gabriel Colaço"
        className="block aspect-4/5 w-full scale-[1.02] object-cover object-[34%_26%] saturate-[0.86] contrast-[1.02]"
      />
    </motion.div>
  )
}
