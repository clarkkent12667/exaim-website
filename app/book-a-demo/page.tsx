import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'
import { Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'

const DemoBookingForm = dynamic(() => import('./_components/DemoBookingForm'), {
  loading: () => <div className="min-h-[400px]" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Book a Demo - Schedule Your Personalized Demo',
  description: 'Book a personalized demo to explore how ExAIm can support your school, reduce teacher workload, and improve student attainment. See how AI-powered exam preparation can transform your school.',
  alternates: {
    canonical: 'https://www.exaim.ai/book-a-demo',
  },
  openGraph: {
    title: 'Book a Demo - ExAIm',
    description: 'Schedule your personalized demo with ExAIm to see how AI-powered exam preparation can transform your school.',
    url: 'https://www.exaim.ai/book-a-demo',
    siteName: 'ExAIm',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function BookADemoPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="section-padding-lg pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-wrapper">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Book a Demo
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you to schedule a personalized demo at a time that works for you. Learn more about <Link href="/our-products" className="text-primary-600 hover:text-primary-700 underline font-medium">our products</Link> or see <Link href="/how-exaim-works" className="text-primary-600 hover:text-primary-700 underline font-medium">how ExAIm works</Link>.
            </p>
          </div>

          {/* Demo Booking Form */}
          <DemoBookingForm />

          {/* Contact Details */}
          <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-xl mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:contact@exaim.ai"
                  className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
                >
                  contact@exaim.ai
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                  <Linkedin className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/company/exaimltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
                >
                  @exaimltd
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

