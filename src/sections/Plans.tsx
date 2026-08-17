import { BanknoteIcon, CheckIcon, StarIcon } from '../components/Icons'

const POSITIONING = [
  {
    Icon: StarIcon,
    title: 'High-end experience',
    body: 'Include in the surgery price for a premium patient experience.',
  },
  {
    Icon: BanknoteIcon,
    title: 'Additional revenue',
    body: 'Offer to patients as an optional extra feature for ~ 10€ extra.',
  },
]

const TIERS = [
  {
    name: 'Test',
    codes: '20',
    codesLabel: 'Verification Codes',
    plans: '10 treatment plans',
    cta: 'Start now',
    featured: true,
  },
  {
    name: 'Private Clinics',
    codes: '400',
    codesLabel: 'verification codes',
    plans: '10 treatment plans',
    cta: 'Get offer',
    featured: false,
  },
  {
    name: 'Clinic Chains',
    codes: '20 000',
    codesLabel: 'verification codes',
    plans: '20 treatment plans',
    cta: 'Get offer',
    featured: false,
  },
]

const SHARED_ROWS = ['Admin panel', 'Analytics', 'Admin panel when patients miss doses']

type PlansProps = {
  onContact: () => void
}

export function Plans({ onContact }: PlansProps) {
  return (
    <section className="shell mt-[157.8px] md:mt-[178px]">
      <hr className="rule border-[var(--line-strong)] mx-[calc(var(--gutter)*-1)] md:mx-0" />

      <h2 className="t-display mt-[80.4px] text-center md:mt-[69px]">Plans</h2>
      <p className="t-body mx-auto mt-[39.25px] max-w-[700px] text-center md:mt-[52px]">
        Depending on your clinic's size, we suggest to either include it in the price, or
        offer as an additional paid feature.
      </p>

      <div className="mt-[60.35px] flex flex-col items-center justify-center gap-[15.5px] md:mt-[39px] md:flex-row md:items-stretch md:gap-[38px]">
        {POSITIONING.map(({ Icon, title, body }, i) => (
          <div key={title} className="contents">
            {i === 1 && (
              <span aria-hidden="true" className="self-center text-[24px] text-[var(--ink-soft)]">
                /
              </span>
            )}
            <div className="flex w-[307px] max-w-[460px] flex-1 items-start gap-[22px] rounded-2xl bg-[var(--blue-tint)] px-6 py-5 text-[var(--blue)] max-md:flex-col md:w-auto">
              <Icon size={38} className="h-7 w-7 shrink-0 md:h-[38px] md:w-[38px]" strokeWidth={1.8} />
              <div>
                <h3 className="text-[length:var(--fs-plan-title)] leading-[1.15] tracking-[-0.038em]">
                  {title}
                </h3>
                <p className="mt-[10px] text-[length:var(--fs-body)] leading-[1.4]">{body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tier comparison. The first column is a raised card; the other two sit
          flat on the page. Below the md breakpoint the table scrolls sideways,
          starting 5px from the viewport edge rather than at the gutter, so it
          breaks out of the shell and sets its own inset. */}
      <div className="scroller mx-[calc(var(--gutter)*-1)] mt-[119px] px-[5px] md:mx-0 md:mt-[100px] md:px-0">
        <div className="grid w-max grid-cols-3 md:w-full">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`w-[200px] md:w-auto ${
                tier.featured
                  ? 'rounded-2xl border border-[var(--line)] bg-white'
                  : 'text-[var(--ink-mid)]'
              }`}
            >
              <div className="flex h-[95px] items-center justify-center px-4">
                <span
                  className={`t-heading text-center ${tier.featured ? 'text-[var(--ink)]' : ''}`}
                >
                  {tier.name}
                </span>
              </div>

              <div className="border-t border-[var(--line-strong)]">
                <Row featured={tier.featured} tall>
                  {/* The tier figures shrink hard on the mobile artboard --
                      18px against 40, and a 10.5px label against 18. */}
                  <span className="t-heading text-[length:var(--fs-tier-num)]">{tier.codes}</span>
                  <span className="text-[length:var(--fs-tier-label)] tracking-[-0.03em] md:ml-2">
                    {tier.codesLabel}
                  </span>
                </Row>
                <Row featured={tier.featured}>
                  <span className="text-[length:var(--fs-micro)]">{tier.plans}</span>
                </Row>
                {SHARED_ROWS.map((label) => (
                  <Row key={label} featured={tier.featured}>
                    <span className="text-[length:var(--fs-micro)]">{label}</span>
                  </Row>
                ))}

                <div className="flex h-[88px] items-center justify-center border-t border-[var(--line)] px-4">
                  <button
                    type="button"
                    onClick={onContact}
                    className={`btn ${tier.featured ? 'btn-primary' : 'btn-soft'}`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p aria-hidden="true" className="t-micro mt-3 text-center md:hidden">
        →
      </p>
    </section>
  )
}

function Row({
  children,
  featured,
  tall = false,
}: {
  children: React.ReactNode
  featured: boolean
  tall?: boolean
}) {
  return (
    <div
      /* Mobile rows are padded rather than fixed-height: at 200px wide the last
         label wraps to two lines and the artboard grows that row to match. */
      className={`flex items-center gap-[10px] px-[32px] ${
        tall ? 'py-[35.5px] md:h-[106px] md:py-0' : 'border-t border-[var(--line)] py-[32px] md:h-[81px] md:py-0'
      }`}
    >
      <CheckIcon
        size={13}
        strokeWidth={2.2}
        className={`shrink-0 ${featured ? 'text-[var(--ink)]' : 'text-[var(--ink-soft)]'}`}
      />
      {/* The figure and its label stack on the mobile artboard and sit on one
          baseline from md up. */}
      <span className="flex flex-col md:flex-row md:items-baseline">{children}</span>
    </div>
  )
}
