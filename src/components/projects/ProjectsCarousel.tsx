import { motion, useReducedMotion } from 'motion/react'
import type { ResolvedProject } from '../../data/projects'
import { CARD_GAP } from '../../hooks/useProjectsCarousel'
import { ProjectCard } from './ProjectCard'
import { ProjectsColumn } from './ProjectsColumn'

interface ProjectsCarouselProps {
  projects: ResolvedProject[]
  perView: number
  slide: number
  maxSlide: number
  onOpen: (index: number) => void
}

export function ProjectsCarousel({
  projects,
  perView,
  slide,
  maxSlide,
  onOpen,
}: ProjectsCarouselProps) {
  const reduced = useReducedMotion()
  const slideWidth = `(100% - ${(perView - 1) * CARD_GAP}px) / ${perView}`
  const step = `(${slideWidth} + ${CARD_GAP}px)`

  return (
    <div className="-mx-1.5 -mt-2 overflow-hidden px-1.5 pt-2">
      <motion.div
        className={`flex items-stretch ${perView === 3 && maxSlide === 0 ? 'justify-around' : ''}`}
        style={{ gap: `${CARD_GAP}px` }}
        animate={{ x: `calc(${-slide} * ${step})` }}
        transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="flex flex-none flex-col items-stretch"
            style={{ flexBasis: `calc(${slideWidth})` }}
          >
            <ProjectCard
              project={project}
              index={i}
              reveal={false}
              onOpen={() => onOpen(i)}
            />
            <ProjectsColumn />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
