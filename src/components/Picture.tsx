import type { ImagePair } from '../assets'

type PictureProps = {
  source: ImagePair
  alt: string
  className?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  sizes?: string
}

/**
 * WebP with a PNG/JPEG fallback.
 *
 * `contents` on the <picture> keeps it out of the box tree entirely, so the
 * <img> lays out exactly as it would without the wrapper -- several of these
 * images are absolutely positioned inside a phone frame or rely on `mx-auto`
 * from a block parent.
 */
export function Picture({
  source,
  alt,
  className,
  style,
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes,
}: PictureProps) {
  return (
    <picture className="contents">
      <source srcSet={source.webp} type="image/webp" sizes={sizes} />
      <img
        src={source.fallback}
        alt={alt}
        width={source.width}
        height={source.height}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </picture>
  )
}
