import githubIcon from '../../assets/links/github.svg'
import linkedinIcon from '../../assets/links/LinkedIn.svg'
import { LINKS } from '../../i18n/copy'

const emailAddress = LINKS.email.replace(/^mailto:/, '')
const githubHandle = `@${new URL(LINKS.github).pathname.replace(/^\//, '')}`
const linkedinHandle = new URL(LINKS.linkedin).pathname

const CHANNELS = [
  {
    key: 'email',
    label: 'email',
    value: emailAddress,
    href: LINKS.email,
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="text-pf-contact-blue"
        aria-hidden="true"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2.5 6.5 12 13l9.5-6.5" />
      </svg>
    ),
  },
  {
    key: 'github',
    label: 'github',
    value: githubHandle,
    href: LINKS.github,
    external: true,
    icon: (
      <img
        src={githubIcon}
        alt=""
        className="h-4.5 w-4.5 dark:invert"
      />
    ),
  },
  {
    key: 'linkedin',
    label: 'linkedin',
    value: linkedinHandle,
    href: LINKS.linkedin,
    external: true,
    icon: <img src={linkedinIcon} alt="" className="h-4.5 w-4.5" />,
  },
]

interface ContactChannelsProps {
  onHover: (key: string) => void
}

export function ContactChannels({ onHover }: ContactChannelsProps) {
  return (
    <nav className="border-pf-contact-line bg-pf-contact-panel flex flex-col overflow-hidden rounded-xl border">
      {CHANNELS.map((c) => (
        <a
          key={c.key}
          href={c.href}
          onMouseEnter={() => onHover(c.key)}
          onFocus={() => onHover(c.key)}
          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="border-pf-contact-line text-pf-text hover:bg-pf-contact-hover grid grid-cols-[28px_1fr_auto_20px] items-center gap-4 border-b px-4.5 py-5 font-mono text-[15px] no-underline transition-colors duration-150 last:border-b-0 max-[720px]:grid-cols-[24px_1fr] max-[720px]:gap-x-3 max-[720px]:gap-y-2.5 max-[720px]:px-3.5 max-[720px]:py-4 max-[720px]:text-sm"
        >
          {c.icon}
          <span className="text-pf-contact-dim text-[13.5px]">{c.label}</span>
          <span>{c.value}</span>
          <span className="text-pf-contact-dim text-right text-[13px] max-[720px]:hidden">
            ↵
          </span>
        </a>
      ))}
    </nav>
  )
}
