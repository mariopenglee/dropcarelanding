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
    <section id="admin" className="shell mt-[139px]">
      <hr className="rule" />
      <p className="t-micro mt-[80px]">Admin panel</p>
      <h2 className="t-display mt-[38px]">Easy management</h2>
      <p className="t-body mt-[62px] max-w-[790px]">
        Set up your plans and medications. Get notified when patients are not taking their
        drops. Share post-surgery guide and FAQ with your patients. They can also ask a
        question straight through the app.
      </p>

      {ROWS.map(({ Icon, title, body, poster, video, alt, offset }, i) => (
        <div
          key={title}
          className={`mt-[86px] gap-14 lg:grid lg:grid-cols-[464px_minmax(0,1fr)] lg:gap-[54px] ${
            i === 0 ? 'lg:mt-[85px]' : ''
          }`}
        >
          <div className={offset}>
            <hr className="rule" />
            <div className="mt-[37px] flex items-center gap-4">
              <Icon size={32} className="shrink-0 text-[var(--blue)]" />
              <h3 className="t-heading text-[var(--ink-mid)]">{title}</h3>
            </div>
            <p className="t-body mt-[29px] whitespace-pre-line">{body}</p>
          </div>

          <Device poster={poster} video={video} alt={alt} className="max-lg:mt-14" />
        </div>
      ))}
    </section>
  )
}
