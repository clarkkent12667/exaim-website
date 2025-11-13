'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check } from 'lucide-react'

type Subject = 'MATHEMATICS' | 'ECONOMICS' | 'PSYCHOLOGY' | 'ENGLISH' | 'COMPUTER SCIENCE' | 'GEOGRAPHY' | 'SCIENCE' | 'BUSINESS' | 'HISTORY'

const curricula: {
  british: {
    qualifications: string[]
    boards: string[]
    subjects: Subject[]
    comingSoon: Subject[]
  }
  ib: {
    qualifications: string[]
    boards: string[]
    subjects: Subject[]
    comingSoon: Subject[]
  }
} = {
  british: {
    qualifications: ['GCSE', 'A-Level'],
    boards: ['OCR', 'EDEXCEL', 'AQA'],
    subjects: ['MATHEMATICS', 'ENGLISH', 'SCIENCE', 'COMPUTER SCIENCE', 'ECONOMICS', 'BUSINESS'],
    comingSoon: ['PSYCHOLOGY', 'GEOGRAPHY', 'HISTORY'],
  },
  ib: {
    qualifications: ['MYP', 'DP'],
    boards: [],
    subjects: ['MATHEMATICS', 'ENGLISH', 'SCIENCE', 'COMPUTER SCIENCE', 'ECONOMICS', 'BUSINESS'],
    comingSoon: ['PSYCHOLOGY', 'GEOGRAPHY', 'HISTORY'],
  },
}

export default function CurriculumSupport() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<'british' | 'ib'>('british')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="curriculum" ref={ref} className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Curriculum & Subject Coverage
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            ExAIm supports ANY school following ANY board, not limited to specific regions.
          </p>
        </motion.div>

        {/* Curriculum Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCurriculum('british')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCurriculum === 'british'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            British Curriculum
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCurriculum('ib')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCurriculum === 'ib'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            International Baccalaureate
          </motion.button>
        </div>

        <motion.div
          key={selectedCurriculum}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          {/* Qualifications */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Qualifications</h3>
            <div className="flex flex-wrap gap-3">
              {curricula[selectedCurriculum].qualifications.map((qual) => (
                <motion.span
                  key={qual}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium"
                >
                  {qual}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Exam Boards */}
          {curricula[selectedCurriculum].boards.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Exam Boards</h3>
              <div className="flex flex-wrap gap-3">
                {curricula[selectedCurriculum].boards.map((board) => (
                  <motion.span
                    key={board}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg font-medium"
                  >
                    {board}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Subjects */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Subjects</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {curricula[selectedCurriculum].subjects.map((subject) => {
                const isComingSoon = curricula[selectedCurriculum].comingSoon.includes(subject)
                return (
                  <motion.div
                    key={subject}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg border-2 ${
                      isComingSoon
                        ? 'border-gray-200 bg-gray-50 opacity-60'
                        : 'border-primary-200 bg-primary-50 hover:border-primary-400 transition-colors'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{subject}</span>
                      {!isComingSoon && (
                        <Check className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                    {isComingSoon && (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs text-gray-500 mt-1 block"
                      >
                        Coming soon
                      </motion.span>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

