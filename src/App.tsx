import { useState } from 'react'

import { ContactModal } from './components/ContactModal'
import { AdminPanel } from './sections/AdminPanel'
import { Benefits } from './sections/Benefits'
import { Connect } from './sections/Connect'
import { Footer } from './sections/Footer'
import { Founders } from './sections/Founders'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { Nav } from './sections/Nav'
import { Onboarding } from './sections/Onboarding'
import { Plans } from './sections/Plans'
import { Problems } from './sections/Problems'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)

  return (
    <div className="w-full overflow-x-hidden">
      <Nav onContact={openContact} />
      <main>
        <Hero />
        <Problems />
        <Onboarding />
        <HowItWorks />
        <Benefits />
        <AdminPanel />
        <Plans onContact={openContact} />
        <Founders />
        <Connect onContact={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
