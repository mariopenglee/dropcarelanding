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
    <section className="shell relative pt-[169px]">
      <h2 className="t-display max-w-[560px]">
        Patients don't miss doses = fewer complications.
      </h2>
      <p className="t-body mt-[52px] max-w-[520px]">
        App provides clear instructions on your plan, medication sequence, and other
        post-surgery information. They will not need to call for every question anymore.
      </p>

      {/* From lg up the illustration lifts out of the flow and sits to the
          right of the heading, starting slightly above it. Below that it stays
          in the flow, after the copy, as the mobile layout has it. */}
      <Picture
        source={images.callsNurse}
        alt="A nurse and a patient both on the phone"
        className="pointer-events-none mx-auto mt-14 w-[300px] lg:absolute lg:right-[102px] lg:top-[-18px] lg:mx-0 lg:mt-0 lg:w-[467px]"
      />

      {/* Three across on desktop; stacked full-width on mobile, as designed. */}
      <div className="mt-[177px] grid gap-14 md:grid-cols-3 md:gap-5">
        {BENEFITS.map(({ Icon, title, body }) => (
          <article key={title}>
            <hr className="rule" />
            <Icon size={48} className="mt-10 text-[var(--blue)] md:mt-16" />
            <h3 className="t-heading mt-10 text-[var(--ink-mid)] md:mt-16">{title}</h3>
            <p className="t-body mt-[25px] max-w-[360px]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
