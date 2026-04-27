import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solumn Consultoria — Consultoria Ambiental',
  description:
    'Laudos agronômicos e projetos ambientais para empresas e construtoras que exigem qualidade, conformidade e agilidade.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans text-sand-900 bg-white min-h-screen">{children}</body>
    </html>
  )
}
