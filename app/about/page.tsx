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
  title: 'About Us - ExAIm | Our Story',
  description: 'Born in the classroom. Built for the world. Learn about ExAIm\'s origin story and our mission to transform exam preparation.',
  openGraph: {
    title: 'About Us - ExAIm',
    description: 'Our story: from the classroom to the world.',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-16 md:pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-wrapper">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Born in the classroom. Built for the world.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              ExAIm was created by the founders of Improve ME Institute, an award-winning after-school centre in the UAE with over 1,000 students and 40 tutors. After years of witnessing the challenges teachers and students face in exam preparation, ExAIm was built to make exam excellence accessible, efficient, and data-driven.
            </p>
          </div>
        </div>
      </section>
      <FoundersTeam />
      <Footer />
    </main>
  )
}

