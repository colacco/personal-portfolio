import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useLang } from '../../i18n/language-context'
import githubIcon from '../../assets/links/github.svg'
import type { ResolvedProject } from '../../data/projects'
import { ImageSlot } from '../ui/ImageSlot'
import { NavArrow } from '../ui/NavArrow'

function ProjectPanel({
  project,
  onClose,
}: {
  project: ResolvedProject
  onClose: () => void
}) {
  const { t } = useLang()
  const reduced = useReducedMotion()
  const [shot, setShot] = useState(0)

  const total = project.resolvedShots.length

  const prevShot = useCallback(() => {
    if (total === 0) return
    setShot((s) => (s - 1 + total) % total)
  }, [total])

  const nextShot = useCallback(() => {
    if (total === 0) return
    setShot((s) => (s + 1) % total)
  }, [total])

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="border-pf-border bg-pf-bg relative max-h-[calc(100vh-32px)] w-[min(940px,100%)] overflow-y-auto rounded-[18px] border shadow-[0_30px_90px_rgba(0,0,0,.5)] flex flex-col"
    >
      <div className="flex items-start gap-4 px-5 pt-5 pb-3 shrink-0">
        <div className="flex-1">
          <h3 className="text-2xl tracking-[-0.02em]">{project.name}</h3>
          <p className="text-pf-muted max-w-none text-sm">{project.long}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="border-pf-border text-pf-text hover:border-pf-accent hover:bg-pf-accent-tint inline-flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-lg border bg-transparent transition-colors duration-250"
        >
          <i className="ph ph-x" aria-hidden="true" />
        </button>
      </div>

      <div className="border-pf-border bg-pf-surface-2 relative mx-5 overflow-hidden rounded-xl border h-[min(60vh,600px)] min-h-70 shrink-0">
        <div className="overflow-hidden h-full">
          <motion.div
            className="flex h-full"
            animate={{ x: `-${shot * 100}%` }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {project.resolvedShots.map((s) => (
              <div key={s.id} className="relative h-full flex-[0_0_100%]">
                <ImageSlot src={s.src} hint={s.hint} fit="contain" />
              </div>
            ))}
          </motion.div>
        </div>

        <NavArrow direction="left" onClick={prevShot} className="left-3" />
        <NavArrow direction="right" onClick={nextShot} className="right-3" />
      </div>

      <div className="flex flex-wrap items-center gap-2 px-5 pt-2 pb-2 shrink-0">
        <span className="flex-1" />
        <span className="text-pf-muted font-mono text-[11px]">
          {`${shot + 1} / ${total}`}
        </span>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener"
            className="border-pf-accent text-pf-accent hover:bg-pf-accent-tint inline-flex h-9 items-center gap-1.5 rounded-lg border px-3.5 text-[13px] no-underline transition-colors duration-250"
          >
            <img src={githubIcon} alt="" className="h-3.5 w-3.5" />
            {t.viewCode}
          </a>
        )}
      </div>
    </motion.div>
  )
}

interface ProjectModalProps {
  project: ResolvedProject | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-90 flex items-center justify-center p-2 backdrop-blur-[6px]"
          style={{ background: 'color-mix(in srgb, #0b0c14 72%, transparent)' }}
        >
          <ProjectPanel
            key={project.id}
            project={project}
            onClose={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
