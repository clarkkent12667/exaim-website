'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Puzzle, User, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: Puzzle,
    title: 'Disconnected Tools',
    description: 'No unified system to manage assignments, grading, feedback, and analytics',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    icon: User,
    title: 'Lack of Personalised Learning',
    description: 'Teachers cannot give tailored support due to heavy admin workload',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: TrendingDown,
    title: 'Subpar Academic Outcomes',
    description: 'Students are not tested frequently enough in preparation for critical examinations',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
]

export default function ProblemStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problems" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Traditional teaching approaches consume{' '}
            <span className="text-red-600">60% of teachers' time</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${problem.bgColor} rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all cursor-pointer group border-2 ${problem.borderColor} hover-lift`}
            >
              <div className={`${problem.color} mb-4`}>
                <problem.icon className="w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

