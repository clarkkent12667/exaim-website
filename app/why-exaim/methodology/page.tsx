import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import StructuredData from '@/components/StructuredData'
import { createBreadcrumbSchema } from '@/lib/metadata'
import Methodology from '@/components/Methodology'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Methodology - Proven Approach to Student Improvement',
  description: 'A structured approach to measurable student improvement. Exam-style practice, personalised feedback, and analytics help schools improve GCSE, A-Level, and IB exam outcomes.',
  alternates: {
    canonical: 'https://www.exaim.ai/why-exaim/methodology',
  },
  openGraph: {
    title: 'Methodology - Why ExAIm',
    description: 'Proven methodology to improve student attainment through exam-style practice and personalised feedback.',
    url: 'https://www.exaim.ai/why-exaim/methodology',
    siteName: 'ExAIm',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Methodology - Why ExAIm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Methodology - Why ExAIm',
    description: 'Proven methodology to improve student attainment.',
    creator: '@exaimltd',
    images: ['/og-image.jpg'],
  },
}

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Why ExAIm', url: '/why-exaim' },
  { name: 'Methodology', url: '/why-exaim/methodology' },
])

export default function MethodologyPage() {
  return (
    <main className="min-h-screen">
      <StructuredData data={breadcrumbSchema} />
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              A structured approach to measurable student improvement
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ExAIm combines exam-style practice, personalised feedback, and analytics to deliver a proven improvement cycle that supports both teaching and learning.
            </p>
          </div>
        </div>
      </section>
      <Methodology />
      <Footer />
    </main>
  )
}

