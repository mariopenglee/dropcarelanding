/**
 * External destinations the design references but does not specify.
 *
 * The Figma file shows the store badges and the two LinkedIn tiles without
 * telling us where they point. Fill a value in here and that badge or tile
 * becomes a real link; left empty it still renders exactly as designed, it
 * just doesn't navigate. Nothing here is guessed.
 */
export const links = {
  appStore: '',
  googlePlay: '',
  linkedinAuguste: 'https://www.linkedin.com/in/auguste-zukaite/',
  linkedinMario: 'https://www.linkedin.com/in/mariopenglee/',
  /**
   * URL for the "How it works?" panel, which is an embed block in Figma.
   * Points at the file explicitly rather than the directory: Vite's dev server
   * hands a bare `/demo/` to the SPA fallback, which renders the whole site
   * inside the iframe.
   */
  demoEmbed: '/demo/index.html',
}

/** The address printed in the "Connect with us" block and the footer. */
export const CONTACT_EMAIL = 'dropcare@support.com'
