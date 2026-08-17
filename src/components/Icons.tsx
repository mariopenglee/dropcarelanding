type IconProps = {
  size?: number
  className?: string
  strokeWidth?: number
}

/**
 * Line icons drawn on the 24x24 grid the design uses, stroked in
 * `currentColor` so each call site sets the colour.
 */
function Line({
  size = 24,
  className,
  strokeWidth = 2,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function PhoneIcon(p: IconProps) {
  return (
    <Line {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.18 4.18 2 2 0 0 1 4.16 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </Line>
  )
}

export function CircleCheckIcon(p: IconProps) {
  return (
    <Line {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="m8.5 12.2 2.5 2.5 4.8-5" />
    </Line>
  )
}

export function TrendingUpIcon(p: IconProps) {
  return (
    <Line {...p}>
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </Line>
  )
}

export function CheckIcon(p: IconProps) {
  return (
    <Line {...p}>
      <path d="M20 6 9 17l-5-5" />
    </Line>
  )
}

export function RepeatIcon(p: IconProps) {
  return (
    <Line {...p}>
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </Line>
  )
}

export function StarIcon(p: IconProps) {
  return (
    <Line {...p}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </Line>
  )
}

/** Banknote with the corner flourishes and the stacked bills beneath it. */
export function BanknoteIcon({ size = 24, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="4" width="20" height="12" rx="2" />
      <circle cx="12" cy="10" r="2.6" />
      <path d="M2 7.2A2.6 2.6 0 0 0 4.6 4.6" />
      <path d="M22 7.2a2.6 2.6 0 0 1-2.6-2.6" />
      <path d="M2 12.8a2.6 2.6 0 0 1 2.6 2.6" />
      <path d="M22 12.8a2.6 2.6 0 0 0-2.6 2.6" />
      <path d="M4.5 18.5h15" />
      <path d="M6.5 21h11" />
    </svg>
  )
}

export function CloseIcon(p: IconProps) {
  return (
    <Line {...p}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Line>
  )
}

export function CopyIcon(p: IconProps) {
  return (
    <Line {...p}>
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </Line>
  )
}

export function ArrowUpRightIcon(p: IconProps) {
  return (
    <Line {...p}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </Line>
  )
}

/**
 * The official LinkedIn "in" mark. The viewBox is the path's own bounding box
 * rather than the usual 0 0 24 24, so `size` is the width of the glyph itself
 * and it centres on its ink -- the artwork sits left of centre in a 24-wide
 * box, which would push it off-centre inside the blue tile.
 */
export function LinkedInIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="3.274 3.305 17.174 17.147"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  )
}

/* --------------------------------------------------------- store badges ---
 * Drawn inline rather than shipped as bitmaps so they stay crisp; the sizing
 * matches the 120x40 badges in the design.
 */

export function AppStoreBadge({ className }: { className?: string }) {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      className={className}
      role="img"
      aria-label="Download on the App Store"
    >
      <rect width="120" height="40" rx="8" fill="#000" />
      <path
        fill="#fff"
        d="M22.3 20.3c0-2 1.1-3.2 2-3.9-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.5Zm-2.3-6.4c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.7-1.3Z"
      />
      <text x="34" y="16" fill="#fff" fontFamily="Inter, sans-serif" fontSize="7.5">
        Download on the
      </text>
      <text
        x="34"
        y="30"
        fill="#fff"
        fontFamily="Inter, sans-serif"
        fontSize="15"
        fontWeight="500"
        letterSpacing="-0.4"
      >
        App Store
      </text>
    </svg>
  )
}

export function GooglePlayBadge({ className }: { className?: string }) {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      className={className}
      role="img"
      aria-label="Get it on Google Play"
    >
      <rect width="120" height="40" rx="8" fill="#000" />
      <path fill="#4285f4" d="M10.4 10.4c-.3.3-.4.8-.4 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1 9.2-9.2v-.2l-9.2-9.2-.2.3Z" />
      <path fill="#fbbc04" d="m22.8 23.6-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.8 2Z" />
      <path fill="#ea4335" d="m22.9 23.5-3.2-3.1-9.3 9.2c.4.4 1 .4 1.7 0l10.8-6.1" />
      <path fill="#34a853" d="M22.9 16.4 12.1 10.3c-.7-.4-1.3-.3-1.7.1l9.3 9.2 3.2-3.2Z" />
      <text x="34" y="16" fill="#fff" fontFamily="Inter, sans-serif" fontSize="7.5">
        GET IT ON
      </text>
      <text
        x="34"
        y="30"
        fill="#fff"
        fontFamily="Inter, sans-serif"
        fontSize="15"
        fontWeight="500"
        letterSpacing="-0.4"
      >
        Google Play
      </text>
    </svg>
  )
}
