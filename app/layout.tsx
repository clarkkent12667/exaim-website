import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'ExAIm - AI-Powered Exam Preparation Platform for Schools',
  description: 'Streamline assessments, automate grading, and boost learning outcomes with ExAIm. Trusted by 5,000+ students across 20+ schools. GDPR compliant, AI-powered exam preparation for GCSE, A-Level, and IB curricula.',
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
    title: 'ExAIm - AI-Powered Exam Preparation Platform',
    description: 'Improving student attainment with AI-powered exam preparation. Trusted by 5,000+ students across 20+ globally renowned schools.',
    url: 'https://www.exaim.ai',
    siteName: 'ExAIm',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ExAIm - AI-Powered Exam Preparation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExAIm - AI-Powered Exam Preparation Platform',
    description: 'Streamline assessments, automate grading, and boost learning outcomes.',
    creator: '@exaimltd',
    images: ['/og-image.jpg'],
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
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@exaim.ai',
    contactType: 'Customer Service',
  },
  sameAs: [
    'https://twitter.com/exaimltd',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
      </body>
    </html>
  )
}

