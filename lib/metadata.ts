import type { Metadata } from 'next'

const baseUrl = 'https://www.exaim.ai'
const siteName = 'ExAIm'
const defaultDescription = 'AI-powered exam preparation platform for schools. Streamline assessments, automate grading, and boost learning outcomes with ExAIm.'

export interface PageMetadataOptions {
  title: string
  description?: string
  path?: string
  ogImage?: string
  noindex?: boolean
}

/**
 * Creates complete metadata for a page including Open Graph and Twitter cards
 */
export function createPageMetadata({
  title,
  description,
  path = '/',
  ogImage = '/og-image.jpg',
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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      creator: '@exaimltd',
      images: [ogImage],
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

