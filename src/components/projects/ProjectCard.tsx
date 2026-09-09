import { motion, useReducedMotion } from 'motion/react'
import githubIcon from '../../assets/links/github.svg'
import type { ResolvedProject } from '../../data/projects'
import { ImageSlot } from '../ui/ImageSlot'
import { Reveal } from '../ui/Reveal'

interface ProjectCardProps {
  project: ResolvedProject
  index: number
  onOpen: () => void
  reveal?: boolean
}

export function ProjectCard({
  project,
  index,
  onOpen,
  reveal = true,
}: ProjectCardProps) {
  const reduced = useReducedMotion()

  const card = (
    <motion.article
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="border-pf-border bg-pf-surface shadow-pf hover:border-pf-accent flex h-full flex-col overflow-hidden rounded-2xl border transition-colors duration-350"
    >
      <button
        type="button"
        onClick={onOpen}
        className="flex h-full w-full flex-col text-left"
      >
        <div className="bg-pf-surface-2 border-pf-border relative aspect-video border-b ">
          <ImageSlot src={project.cover} hint={project.coverHint} />
        </div>

        <div className="flex flex-col justify-around p-4 h-full w-full">
          <h3 className="text-xl">{project.name}</h3>
          <p className="text-pf-muted min-h-[4.8em] text-sm leading-[1.6] text-pretty line-clamp-3">
            {project.blurb}
          </p>

          <div className="flex flex-wrap mt-3 mb-4 gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech.name}
                className="bg-pf-accent-tint text-pf-accent inline-flex items-center gap-1.25 rounded-md px-2.25 py-1 font-mono text-[10.5px]"
              >
                {tech.icon.startsWith('ph ') ? (
                  <i className={`${tech.icon} text-xs`} aria-hidden="true" />
                ) : tech.iconLight ? (
                  <>
                    <img
                      src={tech.iconLight}
                      alt=""
                      className="h-3 w-3 dark:hidden"
                    />
                    <img
                      src={tech.icon}
                      alt=""
                      className="hidden h-3 w-3 dark:block"
                    />
                  </>
                ) : (
                  <img src={tech.icon} alt="" className="h-3 w-3" />
                )}
                {tech.name}
              </span>
            ))}
          </div>

          {project.repo && (
            <div className='flex justify-end'>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener"
                onClick={(e) => e.stopPropagation()}
                className="border-pf-border text-pf-muted hover:border-pf-accent hover:bg-pf-accent-tint hover:text-pf-accent inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] no-underline transition-colors duration-250"
              >
                <img src={githubIcon} alt="" className="h-3.5 w-3.5" />
                GitHub
              </a>
            </div>
          )}
        </div>
      </button>
    </motion.article>
    
  )

  return reveal ? <Reveal index={index}>{card}</Reveal> : card
}
