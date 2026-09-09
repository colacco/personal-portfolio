import type { LucideIcon } from 'lucide-react'

interface ServiceRowProps {
  index: number
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceRow({ index, title, description, icon: Icon }: ServiceRowProps) {
  const isFirst = index === 0

  return (
    <li
      className="text-pf-services-heading flex flex-wrap items-start gap-[8px_clamp(16px,2.6cqi,32px)] rounded-[10px] p-[clamp(12px,1.6cqi,18px)_clamp(8px,1.4cqi,16px)] transition-colors duration-150 ease-out hover:bg-pf-services-row-hover"
      style={{
        borderTop: '1px solid',
        borderImage: `${isFirst ? 'var(--pf-services-rule-strong-gradient)' : 'var(--pf-services-rule-gradient)'} 1`,
      }}
    >
      <div className="flex w-[clamp(28px,4cqi,48px)] flex-none flex-col items-start gap-1.5">
        <Icon aria-hidden="true" className="text-pf-services-accent size-4.5" strokeWidth={1.75} />
        <span className="text-pf-services-accent-mono font-mono text-[13px]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="min-w-[clamp(80px,24cqi,120px)] flex-[1_1_140px] text-[clamp(18px,1.9cqi,22px)] font-semibold tracking-[-0.012em]">
        {title}
      </h3>
      <p className="text-pf-services-muted min-w-[clamp(140px,44cqi,220px)] flex-[1_1_340px] text-[clamp(14px,1.35cqi,15px)] leading-[1.6]">
        {description}
      </p>
    </li>
  )
}
