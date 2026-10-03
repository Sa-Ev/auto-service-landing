import type { MetadataRoute } from 'next'
import { SITE_URL, LOCALES, localeHref } from '@/lib/site'

const ROUTES = ['', '/privacy', '/legal-notice']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return LOCALES.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${SITE_URL}${localeHref(locale, route)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.4,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${SITE_URL}${localeHref(l, route)}`])
        ),
      },
    }))
  )
}
