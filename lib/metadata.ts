import type { Metadata } from 'next'

const baseUrl = 'https://www.exaim.ai'
const siteName = 'ExAIm'
const defaultDescription = 'AI-powered exam preparation platform for schools. Automated marking, personalised feedback, and comprehensive analytics. Trusted by 5,000+ students across 20+ schools.'

export interface PageMetadataOptions {
  title: string
  description?: string
  path?: string
  noindex?: boolean
}

/**
 * Creates complete metadata for a page including Open Graph tags
 */
export function createPageMetadata({
  title,
  description,
  path = '/',
  noindex = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const fullDescription = description || defaultDescription
  const url = `${baseUrl}${path}`

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName,
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description: fullDescription,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}

/**
 * Creates breadcrumb structured data
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

