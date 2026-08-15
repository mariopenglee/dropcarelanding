type MaybeLinkProps = {
  href: string
  className?: string
  'aria-label'?: string
  children: React.ReactNode
}

/**
 * Renders an anchor when we have a destination and a plain span when we don't,
 * so an unfilled entry in `links.ts` degrades to inert rather than to a dead
 * link that looks clickable.
 */
export function MaybeLink({ href, className, children, ...rest }: MaybeLinkProps) {
  if (!href) return <span className={className}>{children}</span>
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  )
}
