'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

const steps = [
  {
    number: 1,
    text: 'Smart Assignments',
    description: 'Choose ready-made assessments or create new ones tailored to your curriculum.',
  },
  {
    number: 2,
    text: 'Real Exam Practice',
    description: 'Students attempt questions in exam-like conditions, building confidence.',
  },
  {
    number: 3,
    text: 'Instant Marking & Insights',
    description: 'AI grades instantly with exam-board aligned feedback and detailed analytics.',
  },
  {
    number: 4,
    text: 'Better Outcomes',
    description: 'Targeted teaching and personalised support help every student improve faster.',
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative section-padding bg-white overflow-hidden">
      {/* Large pale abstract background shape - right side */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] lg:w-[1200px] lg:h-[1200px] bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>


      <div className="relative z-10 container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Strengthened Hero-like Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 lg:space-y-10 relative"
          >
            {/* Icon/Visual Motif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-100 mb-4"
            >
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              How ExAIm works
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl font-normal mb-4">
              Transform assessment with AI-powered grading, instant feedback, and deep insights that help every student succeed.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="pt-2"
            >
              <Link href="/demo">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="rounded-full px-8 py-6 bg-gray-900 hover:bg-gray-800 text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Learn more about our AI
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Steps in Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Card Container with Background, Shadow, Rounded Corners */}
            <div className="relative bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
              <div className="relative space-y-6 md:space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                    className="relative flex items-start gap-6 group"
                  >
                    {/* Number Circle - 48px diameter, positioned so center aligns with line */}
                    {/* Circle left edge at padding (24px/32px), center at 48px/56px to match line */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-900 font-semibold text-lg shadow-sm transition-colors duration-200"
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: '#10b981',
                          transition: { duration: 0.2 }
                        }}
                      >
                        {step.number}
                      </motion.div>
                    </div>
                    
                    {/* Step Text */}
                    <div className="pt-1 flex-1">
                      <motion.p 
                        className="text-base md:text-lg text-gray-900 font-semibold transition-colors duration-200 mb-2"
                        whileHover={{ color: '#10b981' }}
                      >
                        {step.text}
                      </motion.p>
                      {step.description && (
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

