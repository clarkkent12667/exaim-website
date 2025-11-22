'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AnimatedHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding-lg pt-32 md:pt-40 lg:pt-44 bg-white relative overflow-hidden">
      <div className="container-wrapper relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight px-4">
            Born in the classroom.
            <br />
            <span className="gradient-text">Built for the world.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed px-4">
            ExAIm was created by the founders of Improve ME Institute, an award-winning after-school centre in the UAE with over 1,000 students and 40 tutors. After years of witnessing the challenges teachers and students face in exam preparation, ExAIm was built to make exam excellence accessible, efficient, and data-driven. Discover our <Link href="/our-products" className="text-primary-600 hover:text-primary-700 underline">AI-powered exam preparation tools</Link> and see <Link href="/how-exaim-works" className="text-primary-600 hover:text-primary-700 underline">how ExAIm works</Link>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="/book-a-demo" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="rounded-full w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a demo
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link href="/our-products" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 font-medium text-sm sm:text-base bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Explore our products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

