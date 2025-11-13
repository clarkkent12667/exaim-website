'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Calendar } from 'lucide-react'

const founders = [
  {
    name: 'Shaun Daswani',
    role: 'CEO',
    credentials: [
      'MSc Mathematics, Imperial College',
      'BSc Mathematics and Economics, UCL',
    ],
  },
  {
    name: 'Jason Daswani',
    role: 'COO, AI R&D',
    credentials: [
      'BSc Mathematics, London School of Economics',
    ],
  },
]

const advisors = [
  { name: 'Alex More', org: 'STEM Learning', years: '20+ years' },
  { name: 'Chris Hillidge', org: 'DfE, TCAT', years: '30+ years' },
  { name: 'Iqbal Munshi', org: 'GEMS Education', years: '30+ years' },
]

const stats = [
  { icon: Users, value: '1,000+', label: 'Students' },
  { icon: Users, value: '40', label: 'Tutors' },
  { icon: Calendar, value: '2018', label: 'Founded' },
]

export default function FoundersTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="pt-[150px] pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Company Background
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Founders (also founders of Improve ME Institute)
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
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

        {/* Advisory Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Advisory Board (80+ years of experience)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors"
              >
                <div className="font-bold text-lg text-gray-900 mb-1">{advisor.name}</div>
                <div className="text-gray-600 mb-2">{advisor.org}</div>
                <div className="text-primary-600 font-semibold">{advisor.years}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

