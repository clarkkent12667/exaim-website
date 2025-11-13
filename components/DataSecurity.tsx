'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Lock, CheckCircle, Cloud } from 'lucide-react'

const securityFeatures = [
  {
    icon: Cloud,
    title: 'Hosted on Google Cloud (GCP)',
    description: 'Same security infrastructure used by tech giants',
  },
  {
    icon: Shield,
    title: 'GDPR & ICO Compliant',
    description: 'Meets UK + EU data protection requirements. Important for schools and student safety',
  },
  {
    icon: Lock,
    title: 'Role-Based Access',
    description: 'Only authorised staff can access sensitive data',
  },
  {
    icon: CheckCircle,
    title: 'Full Data Ownership',
    description: 'Schools can export/delete data anytime',
  },
]

export default function DataSecurity() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="data-security" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Data Security & Compliance
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            ExAIm ensures top-tier data security for schools and student safety.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all group cursor-pointer border-2 border-gray-100 hover:border-primary-200"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

