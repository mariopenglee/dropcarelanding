import { ArrowUpRightIcon } from '../components/Icons'
import { Logo } from '../components/Logo'

const LINKS = [
  { label: 'App', href: '#app' },
  { label: 'Admin Panel', href: '#admin' },
  { label: 'Contact Us', href: '#connect' },
]

type NavProps = {
  onContact: () => void
}

export function Nav({ onContact }: NavProps) {
  return (
    <header className="sticky top-0 z-50">
      <div className="shell relative flex h-[88px] items-center justify-between">
        <Logo />

        {/* Glass pill holding the section links. It reads as invisible on the
            white hero and only shows once coloured content scrolls under it. */}
        <nav className="absolute left-1/2 hidden h-[61px] -translate-x-1/2 items-center gap-7 rounded-full bg-white/40 px-6 backdrop-blur-[20px] md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] leading-none transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button type="button" onClick={onContact} className="btn btn-primary hidden gap-[3px] px-[19px] md:inline-flex">
          Contact
          <ArrowUpRightIcon size={11} strokeWidth={2.6} />
        </button>
      </div>
    </header>
  )
}
