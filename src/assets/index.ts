import logoDropWebp from './logo-drop.webp'
import logoDropFb from './logo-drop.png'
import phoneFrameWebp from './phone-frame.webp'
import phoneFrameFb from './phone-frame.png'
import phoneFrameDarkWebp from './phone-frame-dark.webp'
import phoneFrameDarkFb from './phone-frame-dark.png'
import screenAlarmsWebp from './screen-alarms.webp'
import screenAlarmsFb from './screen-alarms.png'
import screenScheduleWebp from './screen-schedule.webp'
import screenScheduleFb from './screen-schedule.png'
import screenLockWebp from './screen-lock.webp'
import screenLockFb from './screen-lock.png'
import screenGuideWebp from './screen-guide.webp'
import screenGuideFb from './screen-guide.png'
import screenOnboardingWebp from './screen-onboarding.webp'
import screenOnboardingFb from './screen-onboarding.png'
import problemConfusionWebp from './problem-confusion.webp'
import problemConfusionFb from './problem-confusion.png'
import problemAlarmsWebp from './problem-alarms.webp'
import problemAlarmsFb from './problem-alarms.png'
import problemPaperWebp from './problem-paper.webp'
import problemPaperFb from './problem-paper.png'
import callsNurseWebp from './calls-nurse.webp'
import callsNurseFb from './calls-nurse.png'
import adminPlansWebp from './admin-plans.webp'
import adminPlansFb from './admin-plans.jpg'
import adminDashboardWebp from './admin-dashboard.webp'
import adminDashboardFb from './admin-dashboard.jpg'
import founderAugusteWebp from './founder-auguste.webp'
import founderAugusteFb from './founder-auguste.jpg'
import founderMarioWebp from './founder-mario.webp'
import founderMarioFb from './founder-mario.jpg'

/**
 * Every image ships as WebP with a PNG/JPEG fallback. The intrinsic width and
 * height are carried alongside so lazily-loaded images reserve their box before
 * the bytes land -- without them the layout collapses on first paint.
 */
export type ImagePair = {
  webp: string
  fallback: string
  width: number
  height: number
}

export const images = {
  logoDrop: { webp: logoDropWebp, fallback: logoDropFb, width: 120, height: 135 },
  phoneFrame: { webp: phoneFrameWebp, fallback: phoneFrameFb, width: 440, height: 900 },
  phoneFrameDark: { webp: phoneFrameDarkWebp, fallback: phoneFrameDarkFb, width: 440, height: 899 },
  screenAlarms: { webp: screenAlarmsWebp, fallback: screenAlarmsFb, width: 380, height: 826 },
  screenSchedule: { webp: screenScheduleWebp, fallback: screenScheduleFb, width: 380, height: 826 },
  screenLock: { webp: screenLockWebp, fallback: screenLockFb, width: 380, height: 822 },
  screenGuide: { webp: screenGuideWebp, fallback: screenGuideFb, width: 380, height: 826 },
  screenOnboarding: { webp: screenOnboardingWebp, fallback: screenOnboardingFb, width: 580, height: 982 },
  problemConfusion: { webp: problemConfusionWebp, fallback: problemConfusionFb, width: 720, height: 1080 },
  problemAlarms: { webp: problemAlarmsWebp, fallback: problemAlarmsFb, width: 720, height: 1080 },
  problemPaper: { webp: problemPaperWebp, fallback: problemPaperFb, width: 720, height: 1080 },
  callsNurse: { webp: callsNurseWebp, fallback: callsNurseFb, width: 832, height: 1248 },
  adminPlans: { webp: adminPlansWebp, fallback: adminPlansFb, width: 1360, height: 982 },
  adminDashboard: { webp: adminDashboardWebp, fallback: adminDashboardFb, width: 1360, height: 981 },
  founderAuguste: { webp: founderAugusteWebp, fallback: founderAugusteFb, width: 540, height: 617 },
  founderMario: { webp: founderMarioWebp, fallback: founderMarioFb, width: 540, height: 618 },
} satisfies Record<string, ImagePair>
