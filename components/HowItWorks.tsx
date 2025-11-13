'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FilePlus, MessageSquare, BarChart, Target, ArrowRight } from 'lucide-react'

const workflow = [
  {
    icon: FilePlus,
    title: 'Assign',
    description: 'Use pre-loaded exams or create custom assessment tasks',
  },
  {
    icon: MessageSquare,
    title: 'Feedback',
    description: 'AI-based marking aligned with board mark schemes',
  },
  {
    icon: BarChart,
    title: 'Analyse',
    description: 'Track class-wide performance and identify learning gaps',
  },
  {
    icon: Target,
    title: 'Refine Teaching',
    description: 'Use data insights to target interventions and improve outcomes',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" ref={ref} className="pt-[150px] pb-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Teacher Workflow on ExAIm
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            A continuous teacher improvement cycle powered by AI.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all group overflow-hidden hover-3d hover-glow-intense"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Arrow (Desktop) */}
                {index < workflow.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-3 z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary-400" />
                  </motion.div>
                )}

                <motion.div 
                  className="relative z-10 w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-xl border-2 border-white/30"
                  />
                  <step.icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

