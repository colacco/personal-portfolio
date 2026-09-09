import { ProjectsParticles } from './ProjectsParticles'

const BAND_GRADIENT = 'linear-gradient(180deg, #2b2260 0%, #3b2f7d 45%, #2a2359 100%)'
const GLOW = 'radial-gradient(ellipse 70% 55% at 50% 12%, rgba(181,171,252,.30) 0%, transparent 70%)'
const BASE_FADE = 'linear-gradient(180deg, transparent, rgba(14,13,32,.55))'

export function ProjectsBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 overflow-hidden"
    >
      <div className="absolute inset-0" style={{ background: BAND_GRADIENT }} />
      <div className="absolute inset-0" style={{ background: GLOW }} />
      <ProjectsParticles />
      <div className="absolute inset-x-0 bottom-0 h-45" style={{ background: BASE_FADE }} />
    </div>
  )
}
