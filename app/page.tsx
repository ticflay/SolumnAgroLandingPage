import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
