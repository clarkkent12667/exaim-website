'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, FileText, MessageSquare, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Clock,
    title: 'Simulated Exam Conditions',
    description: 'Includes open-ended responses, essays, long problem-solving questions, and timed exam-style practice',
  },
  {
    icon: MessageSquare,
    title: 'Personalised Feedback',
    description: 'Board-specific examiner-level feedback with deep analytics to identify weak areas',
  },
]

export default function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="methodology" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How ExAIm Improves Student Attainment
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary-200 opacity-50">
                {index + 1}
              </div>
              <div className="relative z-10">
                <step.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

