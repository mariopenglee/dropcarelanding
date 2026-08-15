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

export function Founders() {
  return (
    <section className="shell mt-[209px]">
      <h2 className="t-display">Meet the founders</h2>

      <div className="mt-[90px] grid grid-cols-2 gap-5 md:grid-cols-3">
        {FOUNDERS.map((founder) => (
          <article key={founder.name}>
            <hr className="rule" />
            {/* The photo fills 69% of the column and the name row 92%, which
                is how the founder blocks are laid out in the design. */}
            <Picture
              source={founder.photo}
              alt={founder.name}
              className="mt-[61px] aspect-[266.7/304.8] w-full rounded-2xl md:w-[69%] object-cover"
            />
            <div className="mt-[33px] flex w-full items-center md:w-[92%] justify-between gap-4">
              <h3 className="t-heading">{founder.name}</h3>
              <MaybeLink
                href={founder.linkedin}
                aria-label={`${founder.name} on LinkedIn`}
                className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[15px] bg-[var(--linkedin)] text-white transition-opacity hover:opacity-85"
              >
                <LinkedInIcon size={32} />
              </MaybeLink>
            </div>
            <p className="t-body mt-[23px]">{founder.bio}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
