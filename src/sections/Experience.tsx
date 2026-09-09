import { useMemo, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { useLang } from '../i18n/language-context'
import type { TimelineType } from '../i18n/types'
import { Reveal } from '../components/ui/Reveal'
import { ExperienceTabs } from '../components/experience/ExperienceTabs'
import { ExperiencePanel } from '../components/experience/ExperiencePanel'

export function Experience() {
  const { t } = useLang()
  const reduced = useReducedMotion()

  const [tab, setTab] = useState<TimelineType>('trabalho')

  const itemsByTab = useMemo(
    () => ({
      trabalho: t.timeline.filter((item) => item.type === 'trabalho'),
      educacao: t.timeline.filter((item) => item.type === 'educacao'),
    }),
    [t.timeline],
  )

  const tabs: { key: TimelineType; label: string }[] = [
    { key: 'trabalho', label: t.experienceTabWork },
    { key: 'educacao', label: t.experienceTabEducation },
  ]

  return (
    <section id="experience" className="scroll-mt-20 pt-15 pb-22.5">
      <Reveal index={1}>
        <h2 className="text-pf-experience-heading mb-8 text-[34px] leading-tight font-normal tracking-[-0.02em] md:mb-11 md:text-[42px] lg:mb-15 lg:text-[52px]">
          {t.experienceTitle}
        </h2>
      </Reveal>

      <Reveal index={2}>
        <ExperienceTabs tabs={tabs} active={tab} onSelect={setTab} reduced={reduced} />

        <div className="grid">
          <ExperiencePanel items={itemsByTab.trabalho} visible={tab === 'trabalho'} reduced={reduced} />
          <ExperiencePanel items={itemsByTab.educacao} visible={tab === 'educacao'} reduced={reduced} />
        </div>
      </Reveal>
    </section>
  )
}
