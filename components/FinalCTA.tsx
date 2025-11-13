'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Final Vision
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Mission: Transform the student learning experience by empowering educators to deliver measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                prefetch={true}
                className="group px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2"
              >
                Register Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.a
              href="mailto:contact@exaim.ai"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </motion.a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <a href="https://www.exaim.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              Website: www.exaim.ai
            </a>
            <a href="https://www.linkedin.com/company/exaimltd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn: @exaimltd
            </a>
            <a href="mailto:contact@exaim.ai" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email: contact@exaim.ai
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

