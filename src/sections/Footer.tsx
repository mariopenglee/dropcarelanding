import { images } from '../assets'
import { CONTACT_EMAIL } from '../links'
import { Picture } from '../components/Picture'

export function Footer() {
  return (
    <footer className="mt-[119px] border-t border-[var(--line)]">
      <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-5 py-[40px]">
        <div className="flex items-center gap-4">
          <Picture source={images.logoDrop} alt="" className="h-[30px] w-auto" />
          <span className="t-micro">© DropCare.</span>
          <span className="t-micro">2026</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {/* Not in the Figma design -- added so /privacy, /terms and /support
              stay reachable. The App Store listing requires a live privacy
              policy link. */}
          <nav className="flex items-center gap-6">
            <a href="/privacy" className="t-micro hover:text-[var(--ink)]">
              Privacy
            </a>
            <a href="/terms" className="t-micro hover:text-[var(--ink)]">
              Terms
            </a>
            <a href="/support" className="t-micro hover:text-[var(--ink)]">
              Support
            </a>
          </nav>
          <a href={`mailto:${CONTACT_EMAIL}`} className="t-micro hover:text-[var(--ink)]">
            {CONTACT_EMAIL}
          </a>
          <span className="t-micro">All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}
