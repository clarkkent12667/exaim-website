'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, School, GraduationCap, Users } from 'lucide-react'

const stakeholders = [
  {
    icon: GraduationCap,
    title: 'Students',
    benefits: [
      'Tailored exam preparation',
      'Independent, self-paced learning',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: User,
    title: 'Teachers',
    benefits: [
      'Assign homework, quizzes, tests, and mock exams',
      'Track progress with ease',
      'Identify struggling students',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Parents',
    benefits: [
      'Better visibility into student improvement',
      'Transparent analytics',
    ],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: School,
    title: 'Schools',
    benefits: [
      'Digital transformation',
      'Data-driven decision-making',
      'Holistic school-wide progress tracking',
    ],
    color: 'from-purple-500 to-purple-600',
  },
]

export default function StakeholderBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stakeholders" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who ExAIm Serves & How
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            ExAIm impacts all stakeholders in the school ecosystem.
          </p>
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
              className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all group cursor-pointer overflow-hidden hover-3d hover-glow-intense"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-primary-600 transition-colors">
                {stakeholder.title}
              </h3>
              <ul className="space-y-3 relative z-10">
                {stakeholder.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="text-gray-600 flex items-start group/item"
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

