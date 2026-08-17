import { links } from '../links'

export function HowItWorks() {
  return (
    <section className="shell mt-[68.2px] md:mt-[190px]">
      <p className="t-micro">The logic behind</p>
      <h2 className="t-display mt-[30.3px] md:mt-[38px]">How it works?</h2>
      <p className="t-body mt-[30.5px] md:mt-[62px]">
        App calculates your awake hours and automatically sets the alarms.
        <br />
        Change the times to see how it works in the demo below.
      </p>

      {/* The schedule demo is an embed block in Figma, so it stays a
          self-contained page under public/demo and is framed in here. It
          brings its own background -- white on desktop, grey once its stacked
          layout kicks in at 900px -- and the frame switches height at the same
          width: 728px above (the panel height in the design, and the demo's
          own fixed height), 886px below, which is what the stacked cards
          measure. Sized to its content, it never needs to scroll. */}
      <div className="mt-[60px] h-[892px] w-full overflow-hidden rounded-[28px] bg-white md:mt-[59px] min-[900px]:h-[728px]">
        {links.demoEmbed ? (
          <iframe
            src={links.demoEmbed}
            title="Interactive demo: set a wake-up time and bedtime to see the generated drop schedule"
            loading="lazy"
            scrolling="no"
            className="h-full w-full border-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[length:var(--fs-body)] text-[var(--ink-soft)]">
              Interactive demo
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
