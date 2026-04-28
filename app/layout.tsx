import type { Metadata } from 'next'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solumconsultoria.vercel.app'

const TITLE = 'Solum Consultoria — Consultoria Ambiental'
const DESCRIPTION =
  'Consultoria ambiental especializada em laudos agronômicos, PRAD, CAR e regularização fundiária. Atendimento em todo o Brasil. ART inclusa em todos os projetos.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Solum Consultoria',
    locale: 'pt_BR',
    title: TITLE,
    description: DESCRIPTION,
    // Substituir por imagem 1200×630px para melhor aparência no compartilhamento
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Solum Consultoria' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans text-sand-900 bg-white min-h-screen">
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
