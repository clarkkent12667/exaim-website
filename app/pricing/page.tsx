import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="min-h-[600px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Pricing - ExAIm | Flexible Plans for Schools',
  description: 'Choose the right ExAIm plan for your school. Per-subject, bundle, or premium options. 30-day free trial available.',
  openGraph: {
    title: 'Pricing - ExAIm',
    description: 'Flexible pricing plans starting at $10 per subject. Start your 30-day free trial today.',
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <Pricing />
      <Footer />
    </main>
  )
}

