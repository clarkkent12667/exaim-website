'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Target, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AnimatedHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding-lg pt-32 md:pt-40 lg:pt-44 relative overflow-hidden bg-white">
      <div className="container-wrapper relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight px-4">
            Our Products
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 px-4">
            A comprehensive suite of AI-powered tools designed to streamline exam preparation, reduce teacher workload, and improve student outcomes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <Link
              href="/book-a-demo"
              className="group px-4 sm:px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-sm sm:text-base font-semibold flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 md:mt-16 px-4 sm:px-0"
        >
          {[
            { icon: Users, value: '5,000+', label: 'Active Students' },
            { icon: Target, value: '20+', label: 'Partner Schools' },
            { icon: TrendingUp, value: '60%', label: 'Time Saved' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

