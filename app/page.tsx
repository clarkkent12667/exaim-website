'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import CorePlatformFeatures from '@/components/CorePlatformFeatures'
import StructuredData from '@/components/StructuredData'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Clock, Zap, BarChart3, Target } from 'lucide-react'

// Lazy load below-the-fold components
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="min-h-[600px]" />,
})
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[300px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})
const TestimonialsWithLogos = dynamic(() => import('@/components/TestimonialsWithLogos'), {
  loading: () => <div className="min-h-[400px]" />,
})

function WorkflowOverviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: BookOpen,
      label: 'Assign',
      description: 'Assign curriculum-aligned tasks',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      label: 'Practice',
      description: 'Students practice under exam conditions',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      label: 'AI Marking',
      description: 'Instant, examiner-style feedback',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: BarChart3,
      label: 'Insights',
      description: 'Detailed analytics and gap analysis',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Target,
      label: 'Intervention',
      description: 'Targeted teaching and improvement',
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
            A complete exam preparation loop
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            ExAIm connects assignments, grading, analytics, and feedback in one seamless platform, creating a continuous cycle of improvement.
          </p>
        </motion.div>

        {/* Workflow Diagram */}
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto md:flex-1 relative">
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center text-center space-y-2 sm:space-y-3 relative z-10 cursor-pointer w-full p-3 sm:p-4 md:p-5 lg:p-6"
                >
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-shadow duration-300 hover:shadow-xl flex-shrink-0`}
                    whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
                  >
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </motion.div>
                  <div className="w-full">
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg mb-1 md:mb-2">
                      {step.label}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-sm text-gray-600 max-w-[140px] sm:max-w-[160px] md:max-w-[140px] lg:max-w-[160px] mx-auto leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ExAIm',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '20',
  },
  description: 'AI-powered exam preparation platform for schools. Automated marking, personalised feedback, and comprehensive analytics. Trusted by 5,000+ students across 20+ schools.',
  featureList: [
    'AI-powered marking for open-ended answers',
    'Exam-board aligned feedback',
    'Comprehensive analytics and insights',
    'Student exam interface',
    'Assignment and assessment creation',
  ],
  screenshot: 'https://www.exaim.ai/img/preview/preview-image.png',
  url: 'https://www.exaim.ai',
  author: {
    '@type': 'Organization',
    name: 'ExAIm',
    url: 'https://www.exaim.ai',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={productSchema} />
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <div className="border-b border-gray-100 my-0"></div>
      <CorePlatformFeatures />
      <div className="border-b border-gray-100 my-0"></div>
      <WorkflowOverviewSection />
      <div className="border-b border-gray-100 my-0"></div>
      <TestimonialsWithLogos />
      <div className="border-b border-gray-100 my-0"></div>
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
