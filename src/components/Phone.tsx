import type { ImagePair } from '../assets'
import { Picture } from './Picture'

type PhoneProps = {
  frame: ImagePair
  screen: ImagePair
  alt: string
  /** Rendered width of the whole device, bezel included. */
  width: number
  className?: string
  priority?: boolean
}

/**
 * A device mockup: the screenshot sits behind the frame PNG, whose bezel
 * interior is transparent. The insets below are the measured cutout -- the
 * screen occupies 89.2% of the frame's width and sits 2.5% down from its top.
 */
export function Phone({ frame, screen, alt, width, className, priority = false }: PhoneProps) {
  const ratio = frame.height / frame.width
  return (
    <div
      className={`relative shrink-0 ${className ?? ''}`}
      style={{ width, height: width * ratio }}
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
          borderRadius: width * 0.125,
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
