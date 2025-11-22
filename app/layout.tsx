import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'ExAIm - Improve Student Attainment with AI-Powered Exam Preparation',
  description: 'AI-powered exam preparation platform for schools. Automated marking, personalised feedback, and comprehensive analytics. Trusted by 5,000+ students across 20+ schools.',
  keywords: 'exam preparation, AI education, automated grading, GCSE, A-Level, IB, school assessment platform, student analytics, exam practice, British curriculum, International Baccalaureate',
  authors: [{ name: 'ExAIm' }],
  creator: 'ExAIm',
  publisher: 'ExAIm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.exaim.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ExAIm - Improve Student Attainment with AI-Powered Exam Preparation',
    description: 'AI-powered exam preparation platform for schools. Automated marking, personalised feedback, and comprehensive analytics. Trusted by 5,000+ students across 20+ schools.',
    url: 'https://www.exaim.ai',
    siteName: 'ExAIm',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
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
  verification: {
    // Add verification codes here when available
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ExAIm',
  url: 'https://www.exaim.ai',
  logo: 'https://www.exaim.ai/logo/logo.png',
  description: 'AI-powered exam preparation platform for schools',
  foundingDate: '2021',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@exaim.ai',
    contactType: 'Customer Service',
    areaServed: ['GB', 'AE', 'Worldwide'],
  },
  sameAs: [
    'https://www.linkedin.com/company/exaimltd',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressLocality: 'Aylesbury',
    addressRegion: 'Buckinghamshire',
    postalCode: 'HP18 0RA',
    streetAddress: '2 Crossways Business Centre, Bicester Road, Kingswood',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MSJ492NVMG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MSJ492NVMG');
            `,
          }}
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.exaim.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

