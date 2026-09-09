import githubIcon from '../../assets/links/github.svg'

const GITHUB_LINK_CLASS =
  'text-pf-muted hover:text-pf-accent inline-flex items-center justify-center transition-colors duration-250'

interface HeaderGithubLinkProps {
  href: string
}

export function HeaderGithubLink({ href }: HeaderGithubLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="GitHub"
      className={GITHUB_LINK_CLASS}
    >
      <img src={githubIcon} alt="" className="h-5.5 w-5.5 dark:invert" />
    </a>
  )
}
