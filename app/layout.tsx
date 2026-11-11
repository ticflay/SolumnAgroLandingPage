import type { Metadata } from 'next'
import Script from 'next/script'
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { BASE_OPEN_GRAPH, HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL } from '@/lib/site'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600'],
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
  icons: {
    icon: '/logo.png',
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
