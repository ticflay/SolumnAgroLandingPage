import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'
import { getIsReviewEnabled } from '@/flags'
import Testimonials from '@/components/sections/Testimonials'

export default async function Home() {
  const ENABLE_REVIEW_PAGE = await getIsReviewEnabled()
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Process />
      {ENABLE_REVIEW_PAGE && <Testimonials />}
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
