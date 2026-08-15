import { images } from '../assets'
import { Phone } from '../components/Phone'

const PHONES = [
  { screen: images.screenAlarms, frame: images.phoneFrame, label: 'Add wake up times' },
  { screen: images.screenSchedule, frame: images.phoneFrame, label: 'get your schedule' },
  { screen: images.screenLock, frame: images.phoneFrameDark, label: 'automatic alarms' },
  { screen: images.screenGuide, frame: images.phoneFrame, label: '& post surgery guide' },
]

export function Hero() {
  return (
    <section id="app">
      <div className="shell">
        <h1 className="t-display mt-[49px] text-center">The post-op routine - handled</h1>
      </div>

      {/* The phones hang over the top edge of the sky panel, so the two are
          stacked rather than sequential: the panel starts 164px into the row. */}
      <div className="relative mt-[147px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[164px] h-[362px]"
        >
          <div className="shell h-full">
            <div className="h-full rounded-[28px] bg-[linear-gradient(180deg,var(--sky-top)_0%,var(--sky-mid)_40%,#fff_100%)]" />
          </div>
        </div>

        <div className="scroller relative">
          <div className="mx-auto flex w-max gap-[42px] px-[var(--gutter)] pb-[56px]">
            {PHONES.map((phone, i) => (
              <div key={phone.label} className="flex flex-col items-center">
                <Phone
                  frame={phone.frame}
                  screen={phone.screen}
                  alt={phone.label}
                  width={209}
                  priority={i < 2}
                />
                <p className="mt-[20px] text-[length:var(--fs-label)] font-medium">
                  {phone.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shell">
        <p className="mx-auto mt-[39px] w-fit rounded-full border border-[#a8e9fb] px-6 py-[17px] md:px-[40px] text-center text-[length:var(--fs-lead)] leading-[1.35] tracking-[-0.03em] italic shadow-[0_0_20px_rgba(120,220,250,0.28)]">
          Premium Experience for the patient
        </p>
      </div>
    </section>
  )
}
