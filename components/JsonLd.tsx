const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solumconsultoria.vercel.app'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: 'Solumn Soluções Ambientais',
      description:
        'Consultoria ambiental especializada em laudos agronômicos, PRAD, CAR e regularização fundiária. Atendimento em todo o Brasil. ART inclusa em todos os projetos.',
      url: SITE_URL,
      telephone: '+5581984172325',
      email: 'consultoriasolum@gmail.com',
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
      },
      knowsAbout: [
        'Laudos agronômicos',
        'Laudos de viabilidade agrícola',
        'Receituário agronômico',
        'PRAD — Recuperação de áreas degradadas',
        'Regularização fundiária',
        'CAR — Cadastro Ambiental Rural',
        'Licenciamento ambiental',
        'Compensação ambiental',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de Consultoria Ambiental',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': `${SITE_URL}/#service-laudos`,
              name: 'Laudos agronômicos',
              description:
                'Elaboração de laudos técnicos com emissão de ART para licenciamento ambiental, financiamentos, órgãos reguladores e processos judiciais.',
              serviceType: 'Agronomic Report',
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': `${SITE_URL}/#service-projetos`,
              name: 'Projetos ambientais',
              description:
                'Soluções completas em regularização ambiental e fundiária, com acompanhamento técnico do início à aprovação nos órgãos competentes.',
              serviceType: 'Environmental Consulting',
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Solumn Soluções Ambientais',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'pt-BR',
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
