import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import StructuredData from '@/components/StructuredData'
import { createBreadcrumbSchema } from '@/lib/metadata'
import FoundersTeam from '@/components/FoundersTeam'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Advisory Team - Global Education Experts',
  description: 'Built by educators. Guided by global experts. Meet our advisory team with 80+ years of collective experience in education, assessment, and AI technology.',
  alternates: {
    canonical: 'https://www.exaim.ai/why-exaim/advisory-team',
  },
  openGraph: {
    title: 'Advisory Team - Why ExAIm',
    description: 'Expert guidance from global education leaders with decades of experience.',
    url: 'https://www.exaim.ai/why-exaim/advisory-team',
    siteName: 'ExAIm',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Advisory Team - Why ExAIm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advisory Team - Why ExAIm',
    description: 'Expert guidance from global education leaders.',
    creator: '@exaimltd',
    images: ['/og-image.jpg'],
  },
}

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Why ExAIm', url: '/why-exaim' },
  { name: 'Advisory Team', url: '/why-exaim/advisory-team' },
])

export default function AdvisoryTeamPage() {
  return (
    <main className="min-h-screen">
      <StructuredData data={breadcrumbSchema} />
      <ScrollAnimations />
      <Navbar />
      <FoundersTeam />
      <Footer />
    </main>
  )
}

