import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import StructuredData from '@/components/StructuredData'
import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import DemoBookingForm from './_components/DemoBookingForm'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})
const TestimonialsWithLogos = dynamic(() => import('@/components/TestimonialsWithLogos'), {
  loading: () => <div className="min-h-[400px]" />,
})

export const metadata: Metadata = {
  title: 'See ExAIm in Action - Book a Demo',
  description: 'Book a personalised demo to explore how ExAIm can support your school, reduce teacher workload, and improve student attainment. See our AI-powered exam preparation platform in action.',
  alternates: {
    canonical: 'https://www.exaim.ai/demo',
  },
  openGraph: {
    title: 'See ExAIm in Action - Book a Demo',
    description: 'See ExAIm in action with a personalised demo. Discover how AI-powered exam preparation can transform your school.',
    url: 'https://www.exaim.ai/demo',
    siteName: 'ExAIm',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'See ExAIm in Action',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'See ExAIm in Action - Book a Demo',
    description: 'See ExAIm in action with a personalised demo.',
    creator: '@exaimltd',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    question: 'How long does the demo take?',
    answer: 'Our demos typically last 30-45 minutes, giving you plenty of time to see all features and ask questions.',
  },
  {
    question: 'Can I try ExAIm before committing?',
    answer: 'Yes! We offer a 30-day free pilot with no commitment required.',
  },
  {
    question: 'What do I need for the demo?',
    answer: 'Just a computer or device with internet access. We\'ll handle the rest!',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <StructuredData data={faqSchema} />
      <ScrollAnimations />
      <Navbar />
      <section className="section-padding-lg pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-wrapper">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              See ExAIm in Action
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Book a personalised demo to explore how ExAIm can support your school, reduce teacher workload, and improve student attainment.
            </p>
          </div>


          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            {[
              'Reduce marking time by up to 60%',
              'Improve student exam readiness',
              'Get instant, personalised feedback',
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <Check className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Benefit {index + 1}</h3>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Demo Booking Form */}
          <DemoBookingForm />

          {/* FAQs */}
          <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TestimonialsWithLogos />
      <Footer />
    </main>
  )
}

