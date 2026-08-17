import { useEffect, useState } from 'react'

import { CheckIcon, CloseIcon, CopyIcon, LinkedInIcon } from './Icons'

const EMAIL = 'augustezukaite@gmail.com'
const PHONE = '+37069831280'
const LINKEDIN = 'https://www.linkedin.com/in/auguste-zukaite/'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const copy = (value: string, which: 'email' | 'phone') => {
    navigator.clipboard.writeText(value)
    setCopied(which)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact DropCare"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-[440px] rounded-[28px] bg-white p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
          aria-label="Close"
        >
          <CloseIcon size={22} />
        </button>

        <h2 className="t-heading">Get in touch</h2>
        <p className="t-body mt-3">
          Message us on LinkedIn, or copy an address and we'll take it from there.
        </p>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex items-center gap-4 rounded-2xl bg-[var(--linkedin)] p-4 text-white transition-opacity hover:opacity-90"
        >
          <LinkedInIcon size={22} />
          <span className="text-[length:var(--fs-body)] font-medium">Connect on LinkedIn</span>
        </a>

        {(
          [
            ['Email', EMAIL, 'email'],
            ['Phone', PHONE, 'phone'],
          ] as const
        ).map(([label, value, key]) => (
          <div
            key={key}
            className="mt-3 flex items-center gap-3 rounded-2xl bg-[var(--blue-tint)] p-4"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-[1.5px] text-[var(--blue)]">
                {label}
              </p>
              <p className="mt-1 truncate text-[length:var(--fs-body)]">{value}</p>
            </div>
            <button
              type="button"
              onClick={() => copy(value, key)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[var(--blue)] shadow-sm transition-colors hover:bg-[var(--blue)] hover:text-white"
              aria-label={`Copy ${label.toLowerCase()}`}
            >
              {copied === key ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
