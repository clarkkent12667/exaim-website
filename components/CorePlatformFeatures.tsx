'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Brain, TrendingUp, Monitor } from 'lucide-react'
import Image from 'next/image'

export default function CorePlatformFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      title: 'Assignment & Assessment Creation',
      description: 'Create exam-board aligned assessments with custom exams, mock papers, and practice tests tailored to your curriculum.',
      icon: BookOpen,
      iconBg: 'bg-blue-500',
      cardBg: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      title: 'AI-Powered Marking',
      description: 'Automated grading and feedback powered by examiner-trained AI. Reduce marking time by up to 60% while maintaining accuracy.',
      icon: Brain,
      iconBg: 'bg-purple-500',
      cardBg: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive performance analytics for students, classes, and schools. Track progress and identify gaps to drive improvement.',
      icon: TrendingUp,
      iconBg: 'bg-green-500',
      cardBg: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      title: 'Student Exam Interface',
      description: 'Intuitive exam-taking experience with simulated exam conditions. Students practice and take assessments in a familiar environment.',
      icon: Monitor,
      iconBg: 'bg-emerald-500',
      cardBg: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
  ]

  // Flexible card dimensions - min-height for consistency
  const cardMinHeight = 'min-h-[200px] md:min-h-[220px] lg:min-h-[240px]'
  const cardPadding = 'p-6 md:p-8 lg:p-10'
  const cardGap = 'gap-4 md:gap-6 lg:gap-8'

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-wrapper">
        {/* Header Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20 px-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Core Platform Features
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful capabilities that make ExAIm the complete solution for exam preparation.
          </p>
        </motion.div>

        {/* Main Content - Features Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8 lg:gap-12">
          {/* Left Side - Feature Grid 2x2 */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${cardGap} w-full lg:w-1/2 lg:flex-shrink-0`}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${feature.cardBg} ${feature.borderColor} rounded-2xl ${cardPadding} border shadow-sm hover:shadow-md transition-all duration-300 w-full ${cardMinHeight} flex flex-col`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`${feature.iconBg} w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm`}>
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-tight pt-1">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Main Product Screenshot */}
          <div className="w-full lg:w-1/2 lg:flex-shrink-0">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
              <div className="relative w-full aspect-video md:aspect-auto">
                <Image
                  src="/img/preview/preview-image.png"
                  alt="ExAIm AI-powered exam preparation platform interface showing automated marking, analytics dashboard, and student performance insights"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

