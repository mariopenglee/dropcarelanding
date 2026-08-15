import { images } from '../assets'
import { Picture } from './Picture'

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-5 no-underline">
      <Picture
        source={images.logoDrop}
        alt=""
        loading="eager"
        fetchPriority="high"
        className="h-[30px] w-auto"
      />
      <span className="text-[length:var(--fs-logo)] font-medium tracking-[-0.05em] text-[var(--ink)]">
        DropCare
      </span>
    </a>
  )
}
