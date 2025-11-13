import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

const RegistrationForm = dynamic(() => import('@/components/RegistrationForm'), {
  loading: () => <div className="min-h-[500px]" />,
})
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[300px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Contact & Register - ExAIm | Get Started Today',
  description: 'Register your interest in ExAIm. Join thousands of educators transforming student learning outcomes. Start your free trial.',
  openGraph: {
    title: 'Contact & Register - ExAIm',
    description: 'Register your school for ExAIm and start improving student attainment today.',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <RegistrationForm />
      <FinalCTA />
      <Footer />
    </main>
  )
}

