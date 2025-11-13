import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

const FoundersTeam = dynamic(() => import('@/components/FoundersTeam'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'About Us - ExAIm | Founders & Team',
  description: 'Learn about ExAIm founders, our team, and our mission to transform student learning outcomes.',
  openGraph: {
    title: 'About Us - ExAIm',
    description: 'Meet the founders and learn about our mission to empower educators.',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <FoundersTeam />
      <Footer />
    </main>
  )
}

