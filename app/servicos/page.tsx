import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getIsServicesEnabled } from '@/flags'
import NavWrapper from '@/components/layout/NavWrapper'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import ServicesPageHero from '@/components/sections/ServicesPageHero'
import ProjetosAmbientais from '@/components/sections/ProjetosAmbientais'
import LaudosAgronomicos from '@/components/sections/LaudosAgronomicos'
import ServicesPageCTA from '@/components/sections/ServicesPageCTA'

export const metadata: Metadata = {
  title: 'Serviços — Solumn Soluções Ambientais',
  description:
    'Conheça os serviços da Solumn Soluções Ambientais: PRAD, CAR, licenciamento ambiental, regularização fundiária e laudos agronômicos. ART inclusa em todos os projetos.',
}

export default async function ServicosPage() {
  const isServicesEnabled = await getIsServicesEnabled()

  if (!isServicesEnabled) redirect('/')

  return (
    <main>
      <NavWrapper />
      <ServicesPageHero />
      <ProjetosAmbientais />
      <LaudosAgronomicos />
      <ServicesPageCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
