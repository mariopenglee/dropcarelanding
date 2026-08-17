import { images } from '../assets'
import type { ImagePair } from '../assets'
import { Picture } from '../components/Picture'

/**
 * The three illustrations are placed differently inside their columns in the
 * source design -- the third is smaller and pushed right -- and all three are
 * cropped to a common baseline. `width`/`left`/`top` reproduce that placement
 * as percentages of the column, and the band clips them.
 */
const PROBLEMS: {
  image: ImagePair
  title: string
  body: string
  width: string
  left: string
  top: string
  /* The mobile artboard places the illustrations differently again -- the band
   * is taller relative to the card, so the offsets don't carry over. */
  mWidth: string
  mLeft: string
  mTop: string
}[] = [
  {
    image: images.problemConfusion,
    title: 'Confusion',
    body: "Multiple different bottles, strict sequences. Patients can't tell drops apart - and mistakes can affect recovery outcomes.",
    width: '92.2%',
    left: '0%',
    top: '-6.95%',
    mWidth: '87.5%',
    mLeft: '0%',
    mTop: '9.08%',
  },
  {
    image: images.problemAlarms,
    title: '6+ manual alarms',
    body: 'Patients must manually set up alarms and update them weekly as the regimen changes. It adds stress and confusion during recovery.',
    width: '92.2%',
    left: '0%',
    top: '-6.95%',
    mWidth: '87.5%',
    mLeft: '0%',
    mTop: '-0.86%',
  },
  {
    /* The mobile artboard stops after two cards, so this one's mobile placement
     * is the same treatment as the first, scaled by its own desktop width. */
    image: images.problemPaper,
    title: 'Tracking on paper',
    body: 'Patients track doses on paper or try to remember what they took. When things slip, they flood your reception with calls.',
    width: '81.8%',
    left: '10.7%',
    top: '7.43%',
    mWidth: '77.6%',
    mLeft: '10.7%',
    mTop: '9.08%',
  },
]

export function Problems() {
  return (
    <section className="shell mt-[97.7px] md:mt-[88px]">
      <h2 className="t-display">Instead of:</h2>

      <div className="scroller mt-[40px] md:mt-[90px]">
        <div className="grid w-max grid-flow-col auto-cols-[240px] gap-5 md:w-auto md:auto-cols-[255px] md:grid-flow-row md:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <article key={problem.title}>
              <hr className="rule" />
              {/* Fixed 347px band on mobile, where the cards are a constant
                  240 wide; a ratio from md up, where they flex. */}
              <div className="relative h-[347px] overflow-hidden md:aspect-[386.7/417.5] md:h-auto">
                <Picture
                  source={problem.image}
                  alt=""
                  className="absolute w-[var(--m-w)] left-[var(--m-l)] top-[var(--m-t)] md:w-[var(--d-w)] md:left-[var(--d-l)] md:top-[var(--d-t)]"
                  style={
                    {
                      '--m-w': problem.mWidth,
                      '--m-l': problem.mLeft,
                      '--m-t': problem.mTop,
                      '--d-w': problem.width,
                      '--d-l': problem.left,
                      '--d-t': problem.top,
                    } as React.CSSProperties
                  }
                />
              </div>
              <h3 className="t-heading mt-[9px] text-[var(--ink-soft)] md:mt-9">{problem.title}</h3>
              <p className="t-body mt-[40px] max-w-[355px] md:mt-[45px]">{problem.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
