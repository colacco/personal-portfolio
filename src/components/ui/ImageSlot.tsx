interface ImageSlotProps {
  src: string | null
  hint: string
  fit?: 'cover' | 'contain'
}

export function ImageSlot({ src, hint, fit = 'cover' }: ImageSlotProps) {
  if (src) {
    const objectFit = fit === 'contain' ? 'object-contain' : 'object-cover'
    return (
      <img
        src={src}
        alt={hint}
        className={`absolute inset-0 h-full w-full ${objectFit}`}
      />
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[rgba(127,127,127,0.08)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border-[1.5px] border-dashed border-current opacity-35"
      />
      <div className="text-pf-muted flex h-full w-full select-none flex-col items-center justify-center gap-1.5 p-3 text-center">
        <i className="ph ph-image text-2xl opacity-70" aria-hidden="true" />
        <span className="font-mono text-[10.5px] leading-snug">{hint}</span>
      </div>
    </div>
  )
}
