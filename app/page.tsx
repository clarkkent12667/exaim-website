'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import ExamAttemptPreview from '@/components/exaim/ExamAttemptPreview'

// Lazy load below-the-fold components
const CurriculumSupport = dynamic(() => import('@/components/CurriculumSupport'), {
  loading: () => <div className="min-h-[400px]" />,
})
const StakeholderBenefits = dynamic(() => import('@/components/StakeholderBenefits'), {
  loading: () => <div className="min-h-[400px]" />,
})
const FoundersTeam = dynamic(() => import('@/components/FoundersTeam'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="min-h-[600px]" />,
})
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[300px]" />,
})
const HowItWorksSection = dynamic(() => import('@/app/(marketing)/_components/how-it-works-section'), {
  loading: () => <div className="min-h-[600px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})
const TestimonialsWithLogos = dynamic(() => import('@/components/TestimonialsWithLogos'), {
  loading: () => <div className="min-h-[400px]" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <div className="relative -mt-20 md:-mt-24 lg:-mt-32 z-20 bg-gradient-to-b from-transparent via-transparent to-white">
        <ExamAttemptPreview />
      </div>
      <HowItWorksSection />
      <CurriculumSupport />
      <TestimonialsWithLogos />
      <StakeholderBenefits />
      <FoundersTeam />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
