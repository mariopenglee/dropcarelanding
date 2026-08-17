import type { ImagePair } from '../assets'
import { Picture } from './Picture'

type PhoneProps = {
  frame: ImagePair
  screen: ImagePair
  alt: string
  /**
   * Rendered width of the whole device, bezel included. Accepts any CSS length
   * so a caller can hand it a clamp() and have the mockup track the artboards
   * (the hero phones are 192.8 at 375 and 209 at 1280).
   */
  width: number | string
  className?: string
  priority?: boolean
}

/**
 * A device mockup: the screenshot sits behind the frame PNG, whose bezel
 * interior is transparent. The insets below are the measured cutout -- the
 * screen occupies 89.2% of the frame's width and sits 2.5% down from its top.
 */
export function Phone({ frame, screen, alt, width, className, priority = false }: PhoneProps) {
  return (
    <div
      className={`relative shrink-0 ${className ?? ''}`}
      style={
        {
          '--phone-w': typeof width === 'number' ? `${width}px` : width,
          width: 'var(--phone-w)',
          aspectRatio: `${frame.width} / ${frame.height}`,
        } as React.CSSProperties
      }
    >
      <Picture
        source={screen}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className="absolute object-cover"
        style={{
          left: '5.4%',
          top: '2.5%',
          width: '89.2%',
          height: '95.5%',
          borderRadius: 'calc(var(--phone-w) * 0.125)',
        }}
      />
      <Picture
        source={frame}
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className="relative h-full w-full"
      />
    </div>
  )
}
