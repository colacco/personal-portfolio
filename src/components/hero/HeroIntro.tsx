import type { Copy } from '../../i18n/copy'
import type { TypedPhase } from '../../hooks/useTypedHero'
import { Reveal } from '../ui/Reveal'

const CARET_CLASS =
  'ml-[0.06em] inline-block text-pf-accent animate-[pf-blink_1s_steps(1,end)_infinite]'

interface HeroIntroProps {
  t: Copy
  name: string
  sub: string
  phase: TypedPhase
}

export function HeroIntro({ t, name, sub, phase }: HeroIntroProps) {
  return (
    <div className="min-w-0">
      <Reveal index={0}>
        <p className="text-pf-muted mb-1 font-mono text-[13px] sm:mb-[clamp(4px,1.2vh,10px)]">{t.heroHello}</p>
      </Reveal>

      <Reveal index={1}>
        <h1
          aria-label="Gabriel Colaço"
          className="mb-2 min-h-[1.98em] text-[clamp(36px,min(6.6vw,8vh),78px)] leading-none font-semibold tracking-[-0.04em] whitespace-pre-line sm:mb-[clamp(8px,1.8vh,16px)]"
        >
          {name}
          {phase !== 'name' && (
            <span className="text-pf-accent" aria-hidden="true">
              .
            </span>
          )}
          {phase === 'name' && (
            <span className={CARET_CLASS} aria-hidden="true">
              ▌
            </span>
          )}
        </h1>
      </Reveal>

      <Reveal index={2}>
        <p className="text-pf-text mb-2 max-w-[26ch] text-[clamp(17px,2.1vw,23px)] font-medium tracking-[-0.02em] text-balance sm:mb-[clamp(8px,1.8vh,16px)]">
          {t.heroTagline}
        </p>
      </Reveal>

      <Reveal index={3}>
        <p className="text-pf-muted mb-4 min-h-[clamp(2.4em,4.5vh,3.3em)] max-w-[46ch] text-[clamp(15.5px,1.6vw,17.5px)] leading-[1.65] text-pretty sm:mb-[clamp(14px,3vh,32px)]">
          {sub}
          {(phase === 'sub' || phase === 'done') && (
            <span className={CARET_CLASS} aria-hidden="true">
              ▌
            </span>
          )}
        </p>
      </Reveal>

      <Reveal index={4}>
        <div className="hidden flex-wrap gap-3 sm:flex">
          <a
            href="#about"
            className="border-pf-border text-pf-text hover:border-pf-accent inline-flex h-12 items-center gap-2.25 rounded-lg border px-5.5 font-mono text-[12.5px] tracking-[0.04em] no-underline transition-[border-color,background,transform] duration-250 hover:-translate-y-0.5"
          >
            <i className="ph ph-user-focus text-[16px]" aria-hidden="true" />
            {t.heroCtaAbout}
          </a>
          <a
            href="#projects"
            className="border-pf-accent text-pf-accent hover:bg-pf-accent-tint inline-flex h-12 items-center gap-2.25 rounded-lg border px-5.5 font-mono text-[12.5px] tracking-[0.04em] no-underline transition-[border-color,background,transform] duration-250 hover:-translate-y-0.5"
          >
            <i className="ph ph-folder-open text-[16px]" aria-hidden="true" />
            {t.heroViewProjects}
          </a>
        </div>
      </Reveal>
    </div>
  )
}
