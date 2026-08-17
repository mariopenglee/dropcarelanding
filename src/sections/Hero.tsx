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
        <h1 className="t-display mt-[38.5px] text-center md:mt-[49px]">
          The post-op routine - handled
        </h1>
      </div>

      {/* The phones hang over the top edge of the sky panel, so the two are
          stacked rather than sequential: the panel starts 101.5px into the row
          on the mobile artboard and 164px at 1280. Mobile runs the panel full
          bleed; from md it sits inside the gutters. */}
      <div className="relative mt-[57.5px] md:mt-[147px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[101.5px] h-[362px] md:top-[164px]"
        >
          {/* `.shell` is a component class, so it can't take a variant --
              inline the same box and switch only the padding. */}
          <div className="mx-auto h-full max-w-[calc(var(--content)+var(--gutter)*2)] px-0 md:px-[var(--gutter)]">
            <div className="h-full rounded-[28px] bg-[linear-gradient(180deg,var(--sky-top)_0%,var(--sky-mid)_40%,#fff_100%)]" />
          </div>
        </div>

        <div className="scroller relative">
          <div className="mx-auto flex w-max gap-[20px] px-[var(--gutter)] pb-[35px] md:gap-[42px] md:pb-[56px]">
            {PHONES.map((phone, i) => (
              <div key={phone.label} className="flex flex-col items-center">
                <Phone
                  frame={phone.frame}
                  screen={phone.screen}
                  alt={phone.label}
                  width="clamp(192.8px, 1.79vw + 186.09px, 209px)"
                  priority={i < 2}
                />
                <p className="mt-[14px] text-[length:var(--fs-label)] font-medium md:mt-[20px]">
                  {phone.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shell">
        <p className="mx-auto mt-[40px] w-fit rounded-full border border-[#a8e9fb] px-[32px] py-[13.2px] md:mt-[39px] md:px-[40px] md:py-[17px] text-center text-[length:var(--fs-lead)] leading-[1.35] tracking-[-0.03em] italic shadow-[0_0_20px_rgba(120,220,250,0.28)]">
          Premium Experience for the patient
        </p>
      </div>
    </section>
  )
}
