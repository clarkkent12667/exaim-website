'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award } from 'lucide-react'

const founders = [
  {
    name: 'Shaun Daswani',
    role: 'CEO',
    credentials: [
      'MSc Mathematics (Imperial College London)',
      'BSc Mathematics & Economics (University College London)',
    ],
  },
  {
    name: 'Jason Daswani',
    role: 'COO & AI R&D',
    credentials: [
      'BSc Mathematics (London School of Economics)',
    ],
  },
]

const advisors = [
  { name: 'Iqbal Munshi', org: 'GEMS Education', years: '30+ years' },
]

export default function FoundersTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{founder.role}</p>
                <ul className="space-y-2">
                  {founder.credentials.map((cred, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <Award className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisory Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 border-t border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Advisory Team
          </h2>
          <p className="text-center text-gray-700 mb-8">
            80+ years of collective experience
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-6 max-w-sm">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-primary-300 transition-colors text-center"
                >
                  <div className="font-bold text-lg text-gray-900 mb-1">{advisor.name}</div>
                  <div className="text-gray-600 mb-2">{advisor.org}</div>
                  <div className="text-primary-600 font-semibold">{advisor.years}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

