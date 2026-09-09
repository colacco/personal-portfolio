import type { SkillItem, SkillGroup } from '../../data/stack'

function SkillIcon({ item }: { item: SkillItem }) {
  if (item.svg && item.svgLight) {
    return (
      <>
        <img
          src={item.svgLight}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-8 w-8 object-contain dark:hidden"
        />
        <img
          src={item.svg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="hidden h-8 w-8 object-contain dark:block"
        />
      </>
    )
  }

  if (item.svg) {
    return (
      <img
        src={item.svg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={`h-8 w-8 object-contain ${
          item.invertOnDark ? 'dark:brightness-0 dark:invert' : ''
        }`}
      />
    )
  }

  return (
    <i
      className={`${item.icon} text-pf-accent text-[32px]`}
      aria-hidden="true"
    />
  )
}

export function SkillCard({ group, isInfra }: { group: SkillGroup; isInfra?: boolean }) {
  return (
    <div className="border-pf-border bg-pf-surface shadow-pf rounded-2xl border p-4 h-full flex flex-col">
      <div className="mb-2 flex items-center gap-4">
        <span className="bg-pf-accent text-white inline-flex h-10 w-10 items-center justify-center rounded-lg shrink-0">
          <i
            className={`${group.icon} text-[20px]`}
            aria-hidden="true"
          />
        </span>
        <h3 className="text-[18px] font-semibold tracking-[-0.01em]">
          {group.title}
        </h3>
      </div>

      <div
        className={`grid grid-cols-3 ${isInfra ? 'lg:grid-cols-4' : ''} justify-items-center gap-2 sm:gap-3`}
      >
        {group.items.map((item) => (
          <div
            key={item.name}
            className="group flex items-center justify-center"
            tabIndex={0}
            aria-label={item.name}
          >
            <div className="flex w-full h-24 flex-col items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300 outline-none group-hover:bg-pf-surface-2 group-hover:-translate-y-1 group-focus-visible:bg-pf-surface-2 group-focus-visible:-translate-y-1">
              <div className="relative">
                <SkillIcon item={item} />
                <span
                  role="tooltip"
                  className="border-pf-border bg-pf-surface text-pf-text shadow-pf pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 -translate-y-full rounded-md border px-2.5 py-1.5 font-mono text-[11px] whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {item.name}
                </span>
              </div>
              <p className="text-center text-[12px] text-pf-text font-medium leading-tight">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
