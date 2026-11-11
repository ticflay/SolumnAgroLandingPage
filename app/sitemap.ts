import { MetadataRoute } from 'next'
import { getIsServicesEnabled } from '@/flags'
import { SITE_URL } from '@/lib/site'
import { SERVICE_PAGES } from '@/lib/service-pages'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date().toISOString().replace(/\.\d{3}Z$/, '+00:00')
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]

  // /servicos só entra quando a página está ligada; com a flag desligada ela
  // redireciona para a home e não deve ser oferecida ao Google.
  if (await getIsServicesEnabled()) {
    entries.push({
      url: `${SITE_URL}/servicos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    })
    for (const page of SERVICE_PAGES) {
      entries.push({
        url: `${SITE_URL}/servicos/${page.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return entries
}
