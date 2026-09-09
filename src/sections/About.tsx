import { useLang } from '../i18n/language-context'
import { STAT_META } from '../data/stats'
import { Reveal } from '../components/ui/Reveal'
import { PhotoFrame } from '../components/about/PhotoFrame'
import { StatCard } from '../components/about/StatCard'

export function About() {
  const { t } = useLang()

  return (
    <section
      id="about"
      className="relative grid scroll-mt-20 grid-cols-1 items-center gap-12 py-22.5 min-[872px]:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] min-[872px]:gap-16"
    >
      <Reveal
        index={1}
        className="relative mx-auto w-full max-w-95 pt-3.5 pl-3.5 min-[872px]:col-start-2 min-[872px]:row-start-1 min-[872px]:mx-0 min-[872px]:max-w-105"
      >
        <div
          aria-hidden="true"
          className="border-pf-about-decor-border absolute top-0 left-0 h-[calc(100%-14px)] w-[calc(100%-14px)] rounded-3xl border"
          style={{
            background: 'var(--pf-about-decor-bg)',
          }}
        />
        <PhotoFrame />
      </Reveal>

      <div className="flex flex-col gap-7.5 min-[872px]:col-start-1 min-[872px]:row-start-1">
        <Reveal index={2}>
          <h2 className="max-w-160 text-[clamp(32px,4.4vw,48px)] leading-[1.05] font-medium tracking-[-0.028em] text-balance">
            {t.aboutTitle}
          </h2>
        </Reveal>

        <Reveal index={3}>
          <p className="text-pf-muted max-w-[56ch] text-[17px] leading-[1.65] text-pretty whitespace-pre-line">
            {t.aboutBody}
          </p>
        </Reveal>

        <Reveal index={4}>
          <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(148px,1fr))] gap-3">
            {STAT_META.map((stat, i) => (
              <StatCard
                key={t.stats[i].label}
                value={stat.value}
                suffix={stat.suffix}
                label={t.stats[i].label}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
