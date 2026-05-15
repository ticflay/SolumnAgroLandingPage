import NavWrapper from '@/components/layout/NavWrapper'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'
import { getIsReviewEnabled, getIsServicesEnabled } from '@/flags'
import Testimonials from '@/components/sections/Testimonials'

export default async function Home() {
  const [isReviewEnabled, isServicesEnabled] = await Promise.all([
    getIsReviewEnabled(),
    getIsServicesEnabled(),
  ])
  return (
    <main>
      <NavWrapper />
      <Hero />
      <Services isServicesEnabled={isServicesEnabled} />
      <Process />
      {isReviewEnabled && <Testimonials />}
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
