interface NavItem {
  href: string
  label: string
}

const LINK_CLASS =
  'text-pf-muted hover:text-pf-text hover:bg-pf-accent-tint rounded-lg px-[11px] py-[7px] text-[13px] no-underline transition-colors duration-250'

interface DesktopNavProps {
  navItems: NavItem[]
}

export function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 md:flex">
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className={LINK_CLASS}>
          {item.label}
        </a>
      ))}
    </div>
  )
}
