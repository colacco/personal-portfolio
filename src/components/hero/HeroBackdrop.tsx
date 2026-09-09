import heroStatue from '../../assets/hero_statue.png'

export function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${heroStatue})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          backgroundSize: 'auto 120%',
          opacity: 0.4,
          mixBlendMode: 'luminosity',
          maskImage:
            'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,.55) 50%, black 78%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,.55) 50%, black 78%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          background:
            'radial-gradient(ellipse 52% 46% at 78% 38%, var(--pf-glow) 0%, transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-32"
        style={{
          backgroundImage:
            'linear-gradient(var(--pf-border) 1px, transparent 1px), linear-gradient(90deg, var(--pf-border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 0%, transparent 76%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, #000 0%, transparent 76%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--pf-border) 22%, var(--pf-border) 78%, transparent)',
        }}
      />
    </>
  )
}
