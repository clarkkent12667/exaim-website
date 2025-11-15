'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, School, GraduationCap, Users } from 'lucide-react'

const stakeholders = [
  {
    icon: User,
    title: 'Teachers',
    benefits: [
      'Assign homework, classwork, assessments, and mocks — with automated marking and easy-to-read analytics.',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: GraduationCap,
    title: 'Students',
    benefits: [
      'Practise independently with simulated exam conditions and receive instant, personalised feedback.',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Parents',
    benefits: [
      'Track student performance and monitor progress transparently.',
    ],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: School,
    title: 'Schools & Leadership Teams',
    benefits: [
      'Access real-time, data-driven insights to support digital transformation and improve outcomes at scale.',
    ],
    color: 'from-primary-500 to-primary-600',
  },
]

export default function StakeholderBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stakeholders" ref={ref} className="section-padding bg-gray-50">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powering personalised exam preparation for an entire school ecosystem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                rotateY: 5
              }}
              className="relative bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all group cursor-pointer overflow-hidden hover-3d hover-glow-intense"
            >
              {/* Animated background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stakeholder.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={false}
              />
              
              <motion.div 
                className={`relative z-10 w-16 h-16 bg-gradient-to-r ${stakeholder.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
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
                <stakeholder.icon className="w-8 h-8 text-white relative z-10" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-primary-600 transition-colors">
                {stakeholder.title}
              </h3>
              <ul className="space-y-3 relative z-10">
                {stakeholder.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="text-gray-700 flex items-start group/item"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="text-primary-600 mr-2 font-bold"
                    >
                      •
                    </motion.span>
                    <span className="group-hover/item:text-primary-600 transition-colors">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

