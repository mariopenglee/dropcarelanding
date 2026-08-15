import { images } from '../assets'
import { links } from '../links'
import { AppStoreBadge, GooglePlayBadge } from '../components/Icons'
import { MaybeLink } from '../components/MaybeLink'
import { Phone } from '../components/Phone'
import { Picture } from '../components/Picture'

export function Onboarding() {
  return (
    <section className="shell flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-0">
      <div className="lg:mt-[309px] lg:w-[52%]">
        <h2 className="t-display">
          Make it easy for
          <br />
          your patients
        </h2>
        <p className="t-body mt-[52px] max-w-[590px]">
          Onboard patients in less than 1 min from the admin panel. They download the app,
          enter their code, and everything is ready.
        </p>
        <p className="t-body mt-[21px]">
          Currently translated to <span className="not-italic">🇬🇧 🇱🇹 🇹🇷</span> , and adding
          more languages.
        </p>

        <div className="mt-[39px] flex gap-2">
          <MaybeLink href={links.googlePlay}>
            <GooglePlayBadge />
          </MaybeLink>
          <MaybeLink href={links.appStore}>
            <AppStoreBadge />
          </MaybeLink>
        </div>
      </div>

      {/* Two overlapping devices: the schedule sits behind and to the right,
          the onboarding message in front. The screenshot in front already
          carries its own bezel, so it is placed without a frame. */}
      <div className="lg:mt-[207px] lg:flex lg:flex-1 lg:justify-end">
        <div className="relative h-[556px] w-[376px] shrink-0 max-lg:mx-auto max-lg:scale-90 lg:mr-[107px]">
          <div
            aria-hidden="true"
            className="absolute left-0 top-[67px] h-[377px] w-full rounded-[28px] bg-[linear-gradient(180deg,var(--sky-top)_0%,var(--sky-mid)_40%,#fff_100%)]"
          />
          <Phone
            frame={images.phoneFrame}
            screen={images.screenSchedule}
            alt="Daily eye drop schedule in the DropCare app"
            width={242}
            className="absolute left-[102px] top-0"
          />
          <Picture
            source={images.screenOnboarding}
            alt="Onboarding message with the clinic verification code"
            className="absolute left-[10px] top-[81px] w-[280px]"
          />
        </div>
      </div>
    </section>
  )
}
