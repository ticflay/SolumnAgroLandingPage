import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solum Consultoria — Consultoria Ambiental',
  description:
    'Laudos agronômicos e projetos ambientais para empresas que precisam de agilidade, conformidade e segurança técnica.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans text-sand-900 bg-white min-h-screen">{children}</body>
    </html>
  )
}
