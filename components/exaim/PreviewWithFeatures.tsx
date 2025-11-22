"use client"

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Clock, MessageSquare, BarChart3, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Simulated Exam Conditions',
    desc: 'Timed exercises with open-ended responses, essays, and long problem-solving questions in realistic exam environments.',
    gradient: 'from-primary-500 to-secondary-500',
  },
  {
    icon: MessageSquare,
    title: 'Personalised & Examiner-Level Feedback',
    desc: 'AI-powered feedback specific to each exam board, tailored to individual performance.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    desc: 'Pinpoint weak areas with comprehensive insights and gap analysis.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'AI Assisted Exam Creation',
    desc: 'Intelligent tools to create comprehensive assessments aligned with exam board requirements.',
    gradient: 'from-orange-500 to-red-500',
  },
]

const PreviewWithFeatures: React.FC = () => {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Simplified: Only use scroll for subtle image parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Subtle image scale effect only
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.98, 1, 0.98]
  )

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      },
    },
  }

  return (
    <div ref={ref} className="w-full container-wrapper section-padding relative z-30 bg-white">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full relative z-30"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
              Core Platform Features
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Powerful capabilities that make ExAIm the complete solution for exam preparation.
          </p>
        </motion.div>

        {/* Responsive Layout: Mobile stacked, Tablet 2x2, Desktop 3-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.8fr_1fr] gap-4 md:gap-6 lg:gap-8 items-stretch">
          
          {/* Left Side - First 2 Features */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-rows-2 gap-4 order-2 md:order-1 lg:order-1 w-full h-full"
          >
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="relative p-6 md:p-8 lg:p-10 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-200/60 hover:border-gray-300 w-full h-full flex flex-col"
              >
                {/* Subtle gradient accent on left */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.gradient} rounded-l-lg opacity-100`} />
                
                {/* Content */}
                <div className="relative z-10 flex items-start gap-3 md:gap-4 flex-1">
                  <div className={`w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0 flex flex-col">
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Preview Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 md:order-2 lg:order-2 md:col-span-2 lg:col-span-1 mb-4 md:mb-0 flex items-center justify-center h-full"
          >
            <motion.div
              style={{ scale: imageScale, willChange: 'transform' }}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200/40 w-full h-full flex items-center justify-center bg-gray-50 p-2"
            >
              <Image
                src="/img/preview/preview-image.png"
                alt="ExAIm Platform Preview"
                width={1600}
                height={1000}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                className="w-full h-auto max-h-full object-contain"
                priority
                fetchPriority="high"
                quality={85}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Last 2 Features */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-rows-2 gap-4 order-3 w-full h-full"
          >
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index + 2}
                variants={cardVariants}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="relative p-6 md:p-8 lg:p-10 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-200/60 hover:border-gray-300 w-full h-full flex flex-col"
              >
                {/* Subtle gradient accent on right */}
                <div className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.gradient} rounded-r-lg opacity-100`} />
                
                {/* Content */}
                <div className="relative z-10 flex items-start gap-3 md:gap-4 flex-1">
                  <div className={`w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0 flex flex-col">
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default PreviewWithFeatures

