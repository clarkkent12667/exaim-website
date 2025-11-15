"use client"

import { motion, useInView } from 'framer-motion'
import { Clock, Home, BarChart, FileText, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const StudentExamPreview: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(89 * 60) // 89 minutes in seconds

  const questions = [
    {
      number: 1,
      text: 'Complete the sentence: In an ionic bond, electrons are ________ from one atom to another.',
      type: 'fill-in',
      marks: 1,
    },
    {
      number: 2,
      text: 'What is the charge on a chloride ion?',
      type: 'multiple-choice',
      marks: 1,
      options: ['-1', '+1', '0'],
    },
    {
      number: 3,
      text: 'Explain why sodium chloride has a high melting point.',
      type: 'open-ended',
      marks: 3,
    },
  ]

  // Format time remaining
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

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
              title="Exam"
            >
              <FileText className="w-4 h-4 text-primary-600" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200/60 transition-all group"
              title="Analytics"
            >
              <BarChart className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="pl-[60px] md:pl-20 pt-3 pb-4 px-3 md:px-4 space-y-3">
          {/* Top Bar - Exam Info + Timer */}
          <motion.div variants={itemVariants}>
            <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 backdrop-blur-xl p-3 md:p-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <h2 className="text-sm md:text-base font-semibold text-slate-900 mb-0.5">
                    Chemistry: GCSE AQA Paper 1
                  </h2>
                  <p className="text-[10px] md:text-xs text-slate-600">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 rounded-full bg-primary-100 border border-primary-200 shadow-sm">
                    <span className="text-[10px] md:text-xs font-semibold text-primary-700">
                      {questions[currentQuestion].marks} marks
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 backdrop-blur-sm shadow-sm gap-2"
                  >
                    <Clock className="w-3.5 h-3.5 text-primary-600" />
                    <span className="text-[10px] font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      {formatTime(timeRemaining)}
                    </span>
                  </motion.div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-gray-200/60 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-sm"
                />
              </div>
            </div>
          </motion.div>

          {/* Question Navigation */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-slate-600" />
            </motion.button>
            
            <div className="flex items-center gap-1.5 px-2 py-1.5 bg-gray-50/80 rounded-xl border border-gray-200 shadow-sm">
              {questions.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-all ${
                    currentQuestion === index
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-gray-100'
                  }`}
                >
                  Q{index + 1}
                </motion.button>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
              disabled={currentQuestion === questions.length - 1}
              className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </motion.button>
          </motion.div>

          {/* Question Content */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 backdrop-blur-xl p-3 md:p-4 shadow-sm"
          >
            <div className="mb-2">
              <div className="text-[9px] font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent uppercase tracking-wide">
                Question {questions[currentQuestion].number}
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-slate-900 leading-relaxed mb-4">
              {questions[currentQuestion].text}
            </p>

            {questions[currentQuestion].type === 'fill-in' && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Enter your answer..."
                  className="w-full px-3 py-2 rounded-lg bg-white border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                />
              </div>
            )}

            {questions[currentQuestion].type === 'multiple-choice' && (
              <div className="space-y-2">
                {questions[currentQuestion].options?.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-3 py-2 rounded-lg bg-white border-2 border-gray-200 hover:border-primary-300 text-left text-xs text-slate-700 transition-all"
                  >
                    {String.fromCharCode(65 + idx)}) {option}
                  </motion.button>
                ))}
              </div>
            )}

            {questions[currentQuestion].type === 'open-ended' && (
              <div className="space-y-2">
                <textarea
                  placeholder="Type your answer here..."
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg bg-white border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-xs resize-none"
                />
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <AlertCircle className="w-3 h-3" />
                  <span>Answer will be marked automatically after submission</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Submit Answer
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default StudentExamPreview

