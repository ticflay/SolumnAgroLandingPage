import { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solumconsultoria.vercel.app/'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString().replace(/\.\d{3}Z$/, '+00:00'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
