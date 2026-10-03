export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://auto-service-landing-five.vercel.app'

export const LOCALES = ['de', 'ru', 'en'] as const
export const DEFAULT_LOCALE = 'de'

/**
 * Путь для локали. Локаль по умолчанию (de) отдаётся БЕЗ префикса:
 * localeHref('de')             -> '/'
 * localeHref('de', '/privacy') -> '/privacy'
 * localeHref('ru', '/privacy') -> '/ru/privacy'
 */
export function localeHref(locale: string, route = ''): string {
  if (locale === DEFAULT_LOCALE) return route || '/'
  return `/${locale}${route}`
}
