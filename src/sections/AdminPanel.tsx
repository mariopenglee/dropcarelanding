import { images } from '../assets'
import adminDashboardVideo from '../assets/admin-dashboard.mp4'
import adminPlansVideo from '../assets/admin-plans.mp4'
import { Device } from '../components/Device'
import { CheckIcon, RepeatIcon } from '../components/Icons'

const ROWS = [
  {
    Icon: CheckIcon,
    title: 'Set up ONCE',
    body: 'Add the medications and plans you use.\nDesign any type of plan: pre-operation pills, hourly medications on the surgery day etc.',
    poster: images.adminPlans,
    video: adminPlansVideo,
    alt: 'Building a treatment plan in the DropCare admin panel',
    offset: 'lg:mt-[158px]',
  },
  {
    Icon: RepeatIcon,
    title: 'Add new patient in 30s',
    body: "Add patient's name, contact, and select their treatment plan. They're set up and ready to go in under a minute.",
    poster: images.adminDashboard,
    video: adminDashboardVideo,
    alt: 'Adding a patient and sending them a verification code',
    offset: 'lg:mt-[147px]',
  },
]

export function AdminPanel() {
  return (
    <section id="admin" className="shell mt-[77.9px] md:mt-[139px]">
      {/* The artboard runs these rules edge to edge on mobile. */}
      <hr className="rule mx-[calc(var(--gutter)*-1)] md:mx-0" />
      <p className="t-micro mt-[79px] md:mt-[80px]">Admin panel</p>
      <h2 className="t-display mt-[31.2px] max-w-[89%] md:mt-[38px] md:max-w-none">
        Easy management
      </h2>
      <p className="t-body mt-[29.35px] max-w-[790px] md:mt-[62px]">
        Set up your plans and medications. Get notified when patients are not taking their
        drops. Share post-surgery guide and FAQ with your patients. They can also ask a
        question straight through the app.
      </p>

      {ROWS.map(({ Icon, title, body, poster, video, alt, offset }, i) => (
        <div
          key={title}
          className={`mt-[89.25px] gap-14 md:mt-[86px] lg:grid lg:grid-cols-[464px_minmax(0,1fr)] lg:gap-[54px] ${
            i === 0 ? 'lg:mt-[85px]' : ''
          }`}
        >
          <div className={offset}>
            <hr className="rule mx-[calc(var(--gutter)*-1)] md:mx-0" />
            {/* The artboard sets these two rows slightly differently (44.1 and
                39.7 above the title, 27.65 and 24.05 above the copy); one value
                splits the difference and lands every anchor within ~4px. The
                title column is capped so "Add new patient in 30s" breaks over
                two lines the way the artboard shows. */}
            <div className="mt-[42px] flex items-center gap-4 md:mt-[37px]">
              <Icon size={32} className="shrink-0 text-[var(--blue)]" />
              <h3 className="t-heading max-w-[250px] text-[var(--ink-mid)] md:max-w-none">
                {title}
              </h3>
            </div>
            <p className="t-body mt-[26px] whitespace-pre-line md:mt-[29px]">{body}</p>
          </div>

          <Device poster={poster} video={video} alt={alt} className="mt-[90.75px] md:mt-14 lg:mt-0" />
        </div>
      ))}
    </section>
  )
}
