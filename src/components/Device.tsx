import { useEffect, useRef, useState } from 'react'

import type { ImagePair } from '../assets'
import { Picture } from './Picture'

type DeviceProps = {
  poster: ImagePair
  video?: string
  alt: string
  className?: string
}

/**
 * The admin-panel mockups: a black bezel around a screen recording.
 *
 * The clip only starts downloading once the device is near the viewport, so it
 * costs nothing on a visit that stops above it. The still image is the base
 * layer and the video fades in over it only once it is genuinely playing --
 * without that, a browser that blocks autoplay leaves the paused first frame
 * (which is black) covering the still.
 */
export function Device({ poster, video, alt, className }: DeviceProps) {
  const holder = useRef<HTMLDivElement>(null)
  const player = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!video || load) return
    const node = holder.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setLoad(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [video, load])

  useEffect(() => {
    if (!load) return
    player.current?.play().catch(() => {
      /* autoplay refused -- the still stays visible */
    })
  }, [load])

  return (
    <div
      ref={holder}
      className={`relative -mx-[10px] w-[363px] shrink-0 pb-[32px] md:mx-0 md:w-[686px] md:max-w-full md:pb-[25px] lg:max-w-none ${className ?? ''}`}
    >
      {/* Pale blue panel. On mobile it is a halo just behind the device,
          reaching 31px above and 32px below; from md it becomes the desktop
          panel peeking out at the lower left. Either way the bottom padding
          keeps it inside the box so it still drives the row height. */}
      <div
        aria-hidden="true"
        className="absolute -top-[31px] bottom-0 left-1/2 w-[356px] -translate-x-1/2 rounded-[28px] bg-[var(--sky-blob)] md:top-auto md:left-[-5%] md:h-[73%] md:w-[50%] md:translate-x-0"
      />
      <div className="relative aspect-[363/256] overflow-hidden rounded-[24px] border-4 border-black bg-black shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] md:aspect-[686/497]">
        <Picture source={poster} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
        {load && video && (
          <video
            ref={player}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onPlaying={() => setPlaying(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              playing ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
    </div>
  )
}
