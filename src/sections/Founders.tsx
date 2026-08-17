import { images } from '../assets'
import { links } from '../links'
import { LinkedInIcon } from '../components/Icons'
import { MaybeLink } from '../components/MaybeLink'
import { Picture } from '../components/Picture'

const FOUNDERS = [
  {
    name: 'Auguste',
    photo: images.founderAuguste,
    bio: 'Founder and product designer across physical and digital (200k+ users) products.',
    linkedin: links.linkedinAuguste,
  },
  {
    name: 'Mario',
    photo: images.founderMario,
    bio: 'AI engineer with a background in computer vision research at UCLA and 4 years building AI products.',
    linkedin: links.linkedinMario,
  },
]

/** Same tile at both sizes; the artboards just scale it. */
function LinkedInTile({
  href,
  name,
  className,
  tile,
}: {
  href: string
  name: string
  className?: string
  tile: number
}) {
  return (
    <MaybeLink
      href={href}
      aria-label={`${name} on LinkedIn`}
      className={`flex shrink-0 items-center justify-center bg-[var(--linkedin)] text-white transition-opacity hover:opacity-85 ${className ?? ''}`}
    >
      {/* The mark measures 62.08% of the tile on the artboard. */}
      <LinkedInIcon size={tile * 0.6208} />
    </MaybeLink>
  )
}

export function Founders() {
  return (
    <section className="shell mt-[148.1px] md:mt-[209px]">
      <h2 className="t-display">Meet the founders</h2>

      {/* Two 207px cards that scroll sideways on mobile, a plain grid from md.
          The cards are a fixed height there so both LinkedIn tiles sit on the
          same line however long the bios run. */}
      <div className="scroller mt-[80px] md:mt-[90px] md:overflow-visible">
        <div className="grid w-max grid-flow-col auto-cols-[207px] md:w-auto md:grid-flow-row md:grid-cols-3 md:gap-5">
          {FOUNDERS.map((founder) => (
            <article key={founder.name} className="flex h-[567.5px] flex-col md:h-auto">
              <hr className="rule" />
              {/* The photo fills 90% of the mobile card, 69% of the desktop
                  column, and the name row 92%. */}
              <Picture
                source={founder.photo}
                alt={founder.name}
                className="mt-[60px] aspect-[266.7/304.8] w-[89.9%] rounded-2xl object-cover md:mt-[61px] md:w-[69%]"
              />
              <div className="mt-[40.8px] flex w-full items-center justify-between gap-4 md:mt-[33px] md:w-[92%]">
                <h3 className="t-heading">{founder.name}</h3>
                <LinkedInTile
                  href={founder.linkedin}
                  name={founder.name}
                  tile={60}
                  className="h-[60px] w-[60px] rounded-[14px] max-md:hidden"
                />
              </div>
              {/* The bio column matches the photo (89.9%) rather than the full
                  card -- the cards sit edge to edge on mobile, so full-width
                  copy would run right up against the next one. */}
              <p className="t-body mt-[19.75px] max-w-[89.9%] md:mt-[23px] md:max-w-none">
                {founder.bio}
              </p>
              <LinkedInTile
                href={founder.linkedin}
                name={founder.name}
                tile={48}
                className="mt-auto h-[48px] w-[48px] rounded-[11px] md:hidden"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
