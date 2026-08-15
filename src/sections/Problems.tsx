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
}[] = [
  {
    image: images.problemConfusion,
    title: 'Confusion',
    body: "Multiple different bottles, strict sequences. Patients can't tell drops apart - and mistakes can affect recovery outcomes.",
    width: '92.2%',
    left: '0%',
    top: '-6.95%',
  },
  {
    image: images.problemAlarms,
    title: '6+ manual alarms',
    body: 'Patients must manually set up alarms and update them weekly as the regimen changes. It adds stress and confusion during recovery.',
    width: '92.2%',
    left: '0%',
    top: '-6.95%',
  },
  {
    image: images.problemPaper,
    title: 'Tracking on paper',
    body: 'Patients track doses on paper or try to remember what they took. When things slip, they flood your reception with calls.',
    width: '81.8%',
    left: '10.7%',
    top: '7.43%',
  },
]

export function Problems() {
  return (
    <section className="shell mt-[88px]">
      <h2 className="t-display">Instead of:</h2>

      <div className="scroller mt-[90px]">
        <div className="grid w-max grid-flow-col auto-cols-[255px] gap-5 md:w-auto md:grid-flow-row md:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <article key={problem.title}>
              <hr className="rule" />
              <div className="relative aspect-[386.7/417.5] overflow-hidden">
                <Picture
                  source={problem.image}
                  alt=""
                  className="absolute"
                  style={{ width: problem.width, left: problem.left, top: problem.top }}
                />
              </div>
              <h3 className="t-heading mt-9 text-[var(--ink-soft)]">{problem.title}</h3>
              <p className="t-body mt-[45px] max-w-[355px]">{problem.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
