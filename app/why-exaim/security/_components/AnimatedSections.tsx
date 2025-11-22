'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Lock, CheckCircle, FileText, Eye, Database, Key, Server, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AnimatedHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding-lg pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-20 lg:pb-24 bg-white relative overflow-hidden">
      <div className="container-wrapper relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 md:mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Shield className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Built with privacy<br />
            <span className="gradient-text">and safety at the core</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
            ExAIm complies with GDPR and ICO guidelines, ensuring all student data is encrypted, protected, and never used to train public models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link href="/book-a-demo">
              <Button
                size="lg"
                className="rounded-full px-6 md:px-8 py-5 md:py-6 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                Book a demo
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </Link>
            <Link href="/our-products">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 md:px-8 py-5 md:py-6 font-medium text-sm md:text-base bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 w-full sm:w-auto"
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

export function AnimatedSecurityFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Shield,
      title: 'Data Protection & GDPR',
      description: 'Full compliance with European data protection regulations. Your student data is handled with the highest standards of privacy and security.',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      icon: Lock,
      title: 'ICO Alignment',
      description: 'Meets Information Commissioner\'s Office standards for data handling and privacy in the UK.',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
    },
    {
      icon: FileText,
      title: 'Data Processing Transparency',
      description: 'Clear policies on how data is processed and stored. Complete transparency in our data handling practices.',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
    },
    {
      icon: CheckCircle,
      title: 'Student Data Privacy',
      description: 'Student data is never used to train public models. Your students\' work remains private and secure.',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
    },
    {
      icon: Server,
      title: 'Secure Cloud Infrastructure',
      description: 'Enterprise-grade security on Google Cloud Platform. Same infrastructure trusted by leading organizations worldwide.',
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
    },
    {
      icon: Key,
      title: 'Full Teacher Override',
      description: 'Teachers maintain full control over AI decisions. You always have the final say on grading and feedback.',
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Comprehensive security measures
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every aspect of ExAIm is designed with security and privacy in mind, ensuring your students' data is always protected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AnimatedTrustBadges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const badges = [
    {
      icon: Database,
      title: 'Data Ownership',
      description: 'Schools retain full ownership and control of all data',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear visibility into how data is processed and stored',
    },
    {
      icon: Lock,
      title: 'Encryption',
      description: 'End-to-end encryption for all data in transit and at rest',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Your data, your control
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in complete transparency and giving you full control over your data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 md:p-8 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mb-4">
                <badge.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AnimatedLegalDocuments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-6"
        >
          <Link href="/privacy-policy">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 md:px-8 py-4 md:py-6 font-medium text-sm md:text-base bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FileText className="mr-2 w-5 h-5" />
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms-and-conditions">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 md:px-8 py-4 md:py-6 font-medium text-sm md:text-base bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FileText className="mr-2 w-5 h-5" />
              Terms and Conditions
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

