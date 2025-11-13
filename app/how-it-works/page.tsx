import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

// Lazy load components for better initial load
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Methodology = dynamic(() => import('@/components/Methodology'), {
  loading: () => <div className="min-h-[400px]" />,
})
const CurriculumSupport = dynamic(() => import('@/components/CurriculumSupport'), {
  loading: () => <div className="min-h-[400px]" />,
})
const StakeholderBenefits = dynamic(() => import('@/components/StakeholderBenefits'), {
  loading: () => <div className="min-h-[400px]" />,
})
const DataSecurity = dynamic(() => import('@/components/DataSecurity'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'How It Works - ExAIm | Step-by-Step Guide',
  description: 'Learn how ExAIm works: from assigning exams to analyzing results. Discover our methodology, curriculum support, and how we serve all stakeholders.',
  openGraph: {
    title: 'How It Works - ExAIm',
    description: 'Step-by-step guide to using ExAIm for exam preparation and assessment.',
  },
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <HowItWorks />
      <Methodology />
      <CurriculumSupport />
      <StakeholderBenefits />
      <DataSecurity />
      <Footer />
    </main>
  )
}

