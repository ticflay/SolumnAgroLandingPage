import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { BASE_OPEN_GRAPH, HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL } from '@/lib/site'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
// Fontes hospedadas no próprio projeto (app/fonts) para o build não depender
// de baixar arquivos do Google Fonts, o que vinha falhando na Vercel.
const plexSans = localFont({
  src: [{ path: './fonts/IBMPlexSans-latin.woff2', weight: '100 700', style: 'normal' }],
  variable: '--font-plex-sans',
  display: 'swap',
})
const plexMono = localFont({
  src: [
    { path: './fonts/IBMPlexMono-400-latin.woff2', weight: '400', style: 'normal' },
    { path: './fonts/IBMPlexMono-500-latin.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-plex-mono',
  display: 'swap',
})
const fraunces = localFont({
  src: [{ path: './fonts/Fraunces-600-latin.woff2', weight: '600', style: 'normal' }],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  verification: {
    google: 'mKSdIyaLSfCdCJ70lnezC8EnJJ6sSD3LMkdDDPd1WWw',
  },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: '/',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${plexSans.variable} ${plexMono.variable} ${fraunces.variable}`}>
      <body className="font-sans text-ink bg-paper min-h-screen antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KRNJDTYQKY" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KRNJDTYQKY');`}
        </Script>
        <Analytics />
        <SpeedInsights />
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
