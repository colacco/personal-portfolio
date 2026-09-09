import { useEffect, useState } from 'react'
import type { Transition } from 'motion/react'
import type { TimelineEntry } from '../../i18n/types'
import { useRailMetrics } from '../../hooks/useRailMetrics'
import { ExperienceAccordion } from './ExperienceAccordion'
import { ExperienceMasterDetail } from './ExperienceMasterDetail'
import { EASE } from './ease'

interface ExperiencePanelProps {
  items: TimelineEntry[]
  visible: boolean
  reduced: boolean | null
}

export function ExperiencePanel({ items, visible, reduced }: ExperiencePanelProps) {
  const [active, setActive] = useState(0)

  const [prevVisible, setPrevVisible] = useState(visible)
  if (visible !== prevVisible) {
    setPrevVisible(visible)
    if (visible) setActive(0)
  }

  const safeActive = Math.max(0, Math.min(active, items.length - 1))

  const {
    trackRef: narrowTrackRef,
    headRefs: narrowHeadRefs,
    metrics: narrowMetrics,
    trackFor: narrowTrackFor,
  } = useRailMetrics(items.length, safeActive)
  const {
    trackRef: wideTrackRef,
    headRefs: wideHeadRefs,
    metrics: wideMetrics,
    trackFor: wideTrackFor,
  } = useRailMetrics(items.length, safeActive)

  useEffect(() => {
    const stop = narrowTrackFor(560)
    return stop
  }, [safeActive])

  useEffect(() => {
    const stop = wideTrackFor(420)
    return stop
  }, [safeActive])

  const moveTransition: Transition = reduced ? { duration: 0 } : { duration: 0.42, ease: EASE }

  return (
    <div
      className="[grid-area:1/1]"
      style={visible ? undefined : { visibility: 'hidden', pointerEvents: 'none' }}
      aria-hidden={!visible}
      inert={!visible}
    >
      <ExperienceAccordion
        items={items}
        safeActive={safeActive}
        onSelect={setActive}
        trackRef={narrowTrackRef}
        headRefs={narrowHeadRefs}
        metrics={narrowMetrics}
        transition={moveTransition}
        reduced={reduced}
      />

      <ExperienceMasterDetail
        items={items}
        safeActive={safeActive}
        onSelect={setActive}
        trackRef={wideTrackRef}
        headRefs={wideHeadRefs}
        metrics={wideMetrics}
        transition={moveTransition}
        reduced={reduced}
      />
    </div>
  )
}
