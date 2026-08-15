import { CONTACT_EMAIL } from '../links'

type ConnectProps = {
  onContact: () => void
}

export function Connect({ onContact }: ConnectProps) {
  return (
    <section id="connect" className="shell mt-[142px]">
      <hr className="rule" />
      <h2 className="t-display mt-[110px] text-center">Connect with us</h2>
      <p className="t-body mt-[52px] text-center">
        Message us on Linkedin or email us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline-offset-2 hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
      <button
        type="button"
        onClick={onContact}
        className="btn btn-primary mx-auto mt-[39px] flex w-full max-w-[600px]"
      >
        Contact
      </button>
    </section>
  )
}
