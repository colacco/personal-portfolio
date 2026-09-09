import { useMemo } from 'react'
import { useLang } from '../i18n/language-context'
import { stackGroups } from '../data/stack'
import { Reveal } from '../components/ui/Reveal'
import { SkillCard } from '../components/stack/SkillCard'

export function Stack() {
  const { t } = useLang()
  const groups = useMemo(() => stackGroups(t), [t])

  return (
    <section
      id="stack"
      className="w-screen mx-[calc(50%-50vw)] scroll-mt-20 pt-15 pb-22.5 px-5 sm:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal index={1}>
          <h2 className="mb-12 text-[clamp(28px,3.6vw,40px)] tracking-[-0.03em]">
            {t.skillsTitle}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, i) => {
            const isInfra = i === groups.length - 1
            return (
              <Reveal
                key={group.icon}
                index={i + 2}
                className={isInfra ? 'lg:col-span-3' : ''}
              >
                <SkillCard group={group} isInfra={isInfra} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
