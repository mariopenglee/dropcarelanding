import { images } from '../assets'
import { CircleCheckIcon, PhoneIcon, TrendingUpIcon } from '../components/Icons'
import { Picture } from '../components/Picture'

const BENEFITS = [
  {
    Icon: PhoneIcon,
    title: 'Save time - no more calls for info',
    body: 'Patients get their schedule, instructions, and reminders inside the app.',
  },
  {
    Icon: CircleCheckIcon,
    title: 'Patients will actually take all the drops',
    body: 'Automatic alarms at the right time, every day. No guessing, no forgetting, no missed doses.',
  },
  {
    Icon: TrendingUpIcon,
    title: 'Better adherence, better outcome, better clinic',
    body: 'Higher compliance means fewer complications, better recovery results, and patients who will recommend your clinic to their friends.',
  },
]

export function Benefits() {
  return (
    <section className="shell relative pt-[159.5px] md:pt-[169px]">
      <h2 className="t-display max-w-[560px]">
        Patients don't miss doses = fewer complications.
      </h2>
      <p className="t-body mt-[40.25px] max-w-[520px] md:mt-[52px]">
        App provides clear instructions on your plan, medication sequence, and other
        post-surgery information. They will not need to call for every question anymore.
      </p>

      {/* From lg up the illustration lifts out of the flow and sits to the
          right of the heading, starting slightly above it. Below that it stays
          in the flow, after the copy, as the mobile layout has it -- where the
          artboard overlaps it into the last line of copy. The illustration
          carries enough transparent padding that nothing collides. */}
      <Picture
        source={images.callsNurse}
        alt="A nurse and a patient both on the phone"
        className="pointer-events-none -mt-[40.45px] w-[311px] md:mx-auto md:mt-14 md:w-[300px] lg:absolute lg:right-[102px] lg:top-[-18px] lg:mx-0 lg:mt-0 lg:w-[467px]"
      />

      {/* Three across on desktop; stacked on mobile, where the artboard runs
          the first card at 240 and the other two at the full 343. */}
      <div className="-mt-[1.8px] grid gap-[39.25px] md:mt-[177px] md:grid-cols-3 md:gap-5">
        {BENEFITS.map(({ Icon, title, body }, i) => (
          <article key={title} className={i === 0 ? 'max-md:w-[240px]' : undefined}>
            <hr className="rule" />
            <Icon
              size={48}
              className="mt-[41px] h-8 w-8 text-[var(--blue)] md:mt-16 md:h-12 md:w-12"
            />
            {/* The copy column is inset from the card on both artboards --
                360 of 386.7 on desktop, and 89% on mobile. That inset is what
                drives the wrapping: it is the only ratio that reproduces every
                line break the artboard shows across all three cards. */}
            <h3 className="t-heading mt-[21.2px] max-w-[89%] text-[var(--ink-mid)] md:mt-16 md:max-w-none">
              {title}
            </h3>
            <p className="t-body mt-[20px] max-w-[89%] md:mt-[25px] md:max-w-[360px]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
