import { CONTACT_EMAIL } from '../links'

type ConnectProps = {
  onContact: () => void
}

export function Connect({ onContact }: ConnectProps) {
  return (
    <section id="connect" className="shell mt-[101.7px] md:mt-[142px]">
      <hr className="rule mx-[calc(var(--gutter)*-1)] md:mx-0" />
      <h2 className="t-display mt-[79px] text-center md:mt-[110px]">Connect with us</h2>
      <p className="t-body mt-[40.15px] text-center md:mt-[52px]">
        Message us on Linkedin or email us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline-offset-2 hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
      <button
        type="button"
        onClick={onContact}
        className="btn btn-primary mx-auto mt-[40.33px] flex w-full max-w-[600px] md:mt-[39px]"
      >
        Contact
      </button>
    </section>
  )
}
