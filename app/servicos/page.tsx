import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getIsServicesEnabled } from '@/flags'
import NavWrapper from '@/components/layout/NavWrapper'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import ServicesPageHero from '@/components/sections/ServicesPageHero'
import ServiceCategory from '@/components/sections/ServiceCategory'
import { LAUDOS_AGRONOMICOS, PROJETOS_AMBIENTAIS } from '@/lib/services-page-content'
import ServicesPageCTA from '@/components/sections/ServicesPageCTA'
import { BASE_OPEN_GRAPH, SITE_NAME } from '@/lib/site'

const TITLE = 'Serviços: CAR, PRAD, Licenciamento e Laudos Agronômicos'
const DESCRIPTION =
  'PRAD, CAR, licenciamento ambiental, regularização fundiária e laudos agronômicos para financiamento rural, viabilidade agrícola e receituário. ART inclusa em todos os projetos.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/servicos' },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: '/servicos',
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
}

export default async function ServicosPage() {
  const isServicesEnabled = await getIsServicesEnabled()

  if (!isServicesEnabled) redirect('/')

  return (
    <main>
      <NavWrapper />
      <ServicesPageHero />
      <ServiceCategory
        id="projetos-ambientais"
        index="01"
        label="PROJETOS AMBIENTAIS"
        title="Regularização e gestão ambiental completa"
        description="Do cadastro obrigatório à recuperação de áreas degradadas, conduzimos cada etapa com rigor técnico e acompanhamento até a aprovação final."
        items={PROJETOS_AMBIENTAIS}
      />
      <ServiceCategory
        id="laudos-agronomicos"
        index="02"
        label="LAUDOS AGRONÔMICOS"
        title="Documentação técnica com respaldo agronômico"
        description="Laudos elaborados por engenheiro agrônomo habilitado, com ART inclusa e agilidade na entrega, para financiamentos, processos judiciais, licenciamentos e produção rural."
        items={LAUDOS_AGRONOMICOS}
      />
      <ServicesPageCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
