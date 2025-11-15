"use client"

import { motion, useInView } from 'framer-motion'
import { BookOpen, Home, BarChart, FileText, Search, Filter, Plus, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const AssignmentPreview: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedAssessment, setSelectedAssessment] = useState(0)

  const assessments = [
    {
      title: 'GCSE AQA Chemistry Paper 1',
      questions: 10,
      duration: '90 minutes',
      marks: 100,
      type: 'Mock Exam',
      board: 'AQA',
      subject: 'Chemistry',
    },
    {
      title: 'GCSE AQA Chemistry Paper 2',
      questions: 10,
      duration: '90 minutes',
      marks: 100,
      type: 'Mock Exam',
      board: 'AQA',
      subject: 'Chemistry',
    },
    {
      title: 'A-Level Chemistry Unit 1',
      questions: 15,
      duration: '120 minutes',
      marks: 120,
      type: 'End of Unit Test',
      board: 'AQA',
      subject: 'Chemistry',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div ref={ref} className="w-full flex justify-center px-4 pb-0">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full max-w-5xl rounded-2xl bg-white border border-gray-200/50 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.2)] relative z-10 overflow-hidden"
      >
        {/* Sidebar with Logo and Icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-br from-primary-50/80 to-secondary-50/80 border-r border-gray-200/60 flex flex-col items-center py-3"
        >
          <div className="mb-4">
            <Image
              src="/img/ExAIm Logo/small-logo.png"
              alt="ExAIm Logo"
              width={32}
              height={32}
              className="h-7 w-auto opacity-95 md:h-8"
              priority
            />
          </div>
          
          <div className="flex flex-col gap-2 flex-grow justify-start">
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200/60 transition-all group"
              title="Homepage"
            >
              <Home className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-primary-100 shadow-md border border-primary-200 transition-all group"
              title="Assignments"
            >
              <BookOpen className="w-4 h-4 text-primary-600" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200/60 transition-all group"
              title="Analytics"
            >
              <BarChart className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200/60 transition-all group"
              title="Mark Sheet"
            >
              <FileText className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="pl-[60px] md:pl-20 pt-3 pb-4 px-3 md:px-4 space-y-3">
          {/* Top Bar */}
          <motion.div variants={itemVariants}>
            <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 backdrop-blur-xl p-3 md:p-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-sm md:text-base font-semibold text-slate-900 mb-0.5">
                    Assign Assessment
                  </h2>
                  <p className="text-[10px] md:text-xs text-slate-600">
                    Select from question bank or create custom assessment
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Create New
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search assessments..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-xs font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <Filter className="w-3.5 h-3.5" />
              Filter
            </motion.button>
          </motion.div>

          {/* Assessment List */}
          <motion.div variants={itemVariants} className="space-y-2">
            {assessments.map((assessment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                onClick={() => setSelectedAssessment(index)}
                className={`rounded-xl border backdrop-blur-xl p-3 md:p-4 shadow-sm cursor-pointer transition-all ${
                  selectedAssessment === index
                    ? 'bg-gradient-to-br from-primary-50 to-white border-primary-300 shadow-md'
                    : 'bg-gradient-to-br from-gray-50 to-white border-gray-200/60 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-xs md:text-sm font-semibold text-slate-900">
                        {assessment.title}
                      </h3>
                      {selectedAssessment === index && (
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-600">
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 border border-blue-200">
                        {assessment.board}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-primary-100 border border-primary-200">
                        {assessment.subject}
                      </span>
                      <span>{assessment.questions} questions</span>
                      <span>•</span>
                      <span>{assessment.duration}</span>
                      <span>•</span>
                      <span>{assessment.marks} marks</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedAssessment === index
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md'
                        : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'
                    }`}
                  >
                    {selectedAssessment === index ? 'Selected' : 'Select'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Assign Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Assign to Class
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AssignmentPreview

