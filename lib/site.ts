// Endereço principal do site. Tudo que o Google lê (sitemap, canonical,
// dados estruturados, links de compartilhamento) parte daqui.
// Ao trocar de domínio, defina NEXT_PUBLIC_SITE_URL na Vercel.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solumnsolucoesambientais.vercel.app'
).replace(/\/+$/, '')

export const SITE_NAME = 'Solumn Soluções Ambientais'

export const HOME_TITLE = 'CAR, PRAD e Laudos Agronômicos com ART | Solumn Soluções Ambientais'

export const HOME_DESCRIPTION =
  'Consultoria ambiental e agronômica: CAR, PRAD, licenciamento ambiental, regularização fundiária e laudos agronômicos com ART inclusa. Atendimento em todo o Brasil.'

// Base dos links de compartilhamento (WhatsApp, redes sociais). As páginas
// completam com url, title e description próprios.
export const BASE_OPEN_GRAPH = {
  type: 'website' as const,
  siteName: SITE_NAME,
  locale: 'pt_BR',
  // Substituir por imagem 1200×630px para melhor aparência no compartilhamento
  images: [{ url: '/logo.png', width: 512, height: 512, alt: SITE_NAME }],
}
