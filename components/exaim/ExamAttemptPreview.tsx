"use client"

import { motion, useInView } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, TrendingUp, ChevronLeft, ChevronRight, Home, BarChart, FileText } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const ExamAttemptPreview: React.FC = () => {
  const ref = useRef(null)
  const questionContainerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentQuestion, setCurrentQuestion] = useState(2) // Start with Q3 (index 2)
  const [containerHeight, setContainerHeight] = useState<number | null>(null)
  
  // Measure height when open-ended question (Q3) is displayed and lock it
  useEffect(() => {
    if (currentQuestion === 2 && questionContainerRef.current && isInView && !containerHeight) {
      const measureHeight = () => {
        if (questionContainerRef.current) {
          const height = questionContainerRef.current.scrollHeight
          setContainerHeight(height)
        }
      }
      
      // Measure after a short delay to ensure content is fully rendered
      const timer = setTimeout(measureHeight, 100)
      
      // Also measure immediately in case content is already rendered
      measureHeight()
      
      return () => clearTimeout(timer)
    }
  }, [currentQuestion, isInView, containerHeight])
  
  const studentAttempt = "Sodium chloride has a high melting point because the ions are held together by strong forces. It takes a lot of energy to break these bonds."
  
  const feedback = {
    marksAwarded: 2,
    totalMarks: 3,
    correctPoints: [
      "Identified strong forces between ions",
      "Mentioned energy needed to break bonds"
    ],
    correctAnswer: "Sodium chloride has a high melting point because:\n\n• Strong electrostatic forces of attraction between oppositely charged ions (Na⁺ and Cl⁻)\n• These ionic bonds require a lot of energy to overcome\n• The lattice structure means many bonds must be broken simultaneously",
    improvements: [
      "Specify 'electrostatic forces' and 'oppositely charged ions'",
      "Mention the lattice structure"
    ]
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

  const slideInVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div ref={ref} className="w-full flex justify-center container-padding pb-0">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full max-w-5xl rounded-xl bg-white border border-gray-200 backdrop-blur-2xl shadow-xl relative z-10 overflow-hidden"
      >
        {/* Sidebar with Logo and Icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-br from-primary-50/80 to-secondary-50/80 border-r border-gray-200 flex flex-col items-center py-3"
        >
          {/* Logo */}
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
          
          {/* Navigation Icons */}
          <div className="flex flex-col gap-2 flex-grow justify-start">
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200 transition-all group"
              title="Homepage"
            >
              <Home className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200 transition-all group"
              title="Analyse"
            >
              <BarChart className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200 transition-all group"
              title="Mark Sheet"
            >
              <FileText className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="pl-[60px] md:pl-20 pt-3 pb-4 px-3 md:px-4 space-y-3">
          {/* Top Bar - Exam Info + Timer + Progress */}
          <motion.div variants={itemVariants}>
            <div className="rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 backdrop-blur-xl p-3 md:p-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <h2 className="text-sm md:text-base font-semibold text-slate-900 mb-0.5">
                    Chemistry: GCSE AQA Paper 1
                  </h2>
                  <p className="text-[10px] md:text-xs text-slate-600">
                    Question {currentQuestion + 1} of 10
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 rounded-full bg-primary-100 border border-primary-200 shadow-sm">
                    <span className="text-[10px] md:text-xs font-semibold text-primary-700">
                      {currentQuestion === 0 ? '1' : currentQuestion === 1 ? '1' : '3'} marks
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 backdrop-blur-sm shadow-sm"
                  >
                    <span className="text-[10px] font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      00:23:45
                    </span>
                  </motion.div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-gray-200/60 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '30%' }}
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
              {[0, 1, 2].map((index) => (
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
              onClick={() => setCurrentQuestion(Math.min(2, currentQuestion + 1))}
              disabled={currentQuestion === 2}
              className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </motion.button>
          </motion.div>

          {/* Two Column Main Area */}
          <div 
            ref={questionContainerRef}
            style={containerHeight ? { height: `${containerHeight}px` } : undefined}
            className={containerHeight ? '' : 'min-h-[200px]'}
          >
        {currentQuestion === 0 && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-3 items-start">
            <motion.div
              key="q1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 backdrop-blur-xl p-3 md:p-4 shadow-sm flex flex-col h-full"
            >
              <div className="mb-2">
                <div className="text-[9px] font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent uppercase tracking-wide">
                  Question Q1
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-900 leading-relaxed mb-3">
                Complete the sentence: In an ionic bond, electrons are <span className="inline-block px-2 py-1 bg-blue-100 border-b-2 border-blue-400 rounded-md font-semibold text-blue-700 min-w-[80px] text-center shadow-sm text-xs">transferred</span> from one atom to another.
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                <div className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 shadow-sm">
                  <span className="text-[10px] font-semibold text-green-700">Correct</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">1/1 marks</span>
              </div>
            </motion.div>

            {/* Knowledge Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200 backdrop-blur-xl p-3 md:p-4 shadow-sm flex flex-col h-full"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-3 h-3 text-primary-600" />
                <h4 className="text-[10px] font-semibold text-primary-900">Knowledge Check</h4>
              </div>
              <div className="space-y-1.5 text-[9px] text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-primary-900">Ionic bonds</strong> form when atoms transfer electrons to achieve a full outer shell.
                </p>
                <p>
                  • Metals lose electrons to form <strong>positive ions</strong> (cations)
                </p>
                <p>
                  • Non-metals gain electrons to form <strong>negative ions</strong> (anions)
                </p>
                <p>
                  • The transfer creates strong electrostatic attraction between oppositely charged ions
                </p>
                <div className="mt-auto pt-3 border-t border-primary-200/60">
                  <p className="text-[9px] text-primary-700 font-medium">
                    Example: Na loses 1 electron → Na⁺, Cl gains 1 electron → Cl⁻
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {currentQuestion === 1 && (
          <motion.div
            key="q2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 backdrop-blur-xl p-3 md:p-4 shadow-sm flex flex-col"
          >
            <div className="mb-2">
              <div className="text-[9px] font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent uppercase tracking-wide">
                Question Q2
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-900 leading-relaxed mb-3">
              What is the charge on a chloride ion?
            </p>
            <div className="space-y-1.5 mb-3">
              <div className="px-2.5 py-2 rounded-lg bg-green-100 border-2 border-green-500 text-[10px] font-medium text-green-800 shadow-sm">
                A) -1 ✓
              </div>
              <div className="px-2.5 py-2 rounded-lg bg-gray-50 border border-gray-200 text-[10px] text-slate-600 shadow-sm">
                B) +1
              </div>
              <div className="px-2.5 py-2 rounded-lg bg-gray-50 border border-gray-200 text-[10px] text-slate-600 shadow-sm">
                C) 0
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
              <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 shadow-sm">
                <span className="text-[9px] font-semibold text-green-700">Correct</span>
              </div>
              <span className="text-[10px] text-slate-600 font-medium">1/1 marks</span>
            </div>
          </motion.div>
        )}

        {currentQuestion === 2 && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-3 items-start">
            {/* Left Column - Question + Student Attempt */}
            <motion.div variants={itemVariants} className="space-y-3 flex flex-col h-full">
              {/* Question Card */}
              <div className="rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 backdrop-blur-xl p-3 md:p-4 space-y-2 shadow-sm">
                {/* Question Label */}
                <div className="text-[9px] font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent uppercase tracking-wide">
                  Question Q3
                </div>

                {/* Question Text */}
                <h3 className="text-xs md:text-sm font-medium text-slate-900 leading-relaxed">
                  Explain why sodium chloride has a high melting point.
                </h3>
              </div>

            {/* Student Attempt Card */}
            <motion.div 
              variants={itemVariants}
              className="rounded-lg bg-gradient-to-br from-blue-50/50 to-white border border-blue-200 backdrop-blur-xl p-3 md:p-4 space-y-3 shadow-sm flex flex-col flex-grow"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-semibold text-slate-700">Your Attempt</h4>
                <div className="flex items-center gap-1.5">
                  <div className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 shadow-sm">
                    <span className="text-[10px] font-semibold text-amber-700">
                      Partially Correct
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 border border-amber-200 shadow-sm">
                    <span className="text-[10px] font-semibold text-amber-700">
                      {feedback.marksAwarded}/{feedback.totalMarks} marks
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 min-h-[90px] flex-grow">
                <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {studentAttempt}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Submit Answer
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - AI Feedback */}
          <div className="flex h-full">
            {/* Feedback Card */}
            <motion.div
              variants={slideInVariants}
              className="rounded-lg bg-gradient-to-br from-green-50 to-white border border-green-200 backdrop-blur-xl p-3 md:p-4 pb-4 shadow-md w-full flex flex-col h-full"
            >
              {/* Content */}
              <div className="space-y-3 pb-0">
                {/* What You Got Correct */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    <h5 className="text-[10px] font-semibold text-green-700">What You Got Correct</h5>
                  </div>
                  <ul className="space-y-1 ml-5">
                    {feedback.correctPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-[10px] text-slate-700 leading-relaxed flex items-start gap-1.5"
                      >
                        <span className="text-green-600 mt-0.5">•</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Correct Answer */}
                <div className="space-y-1.5 pt-2 border-t border-green-200">
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <h5 className="text-[10px] font-semibold text-blue-700">Complete Answer</h5>
                  </div>
                  <div className="ml-5 bg-blue-50/50 border border-blue-200/50 rounded-md p-2.5">
                    <p className="text-[10px] text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {feedback.correctAnswer}
                    </p>
                  </div>
                </div>

                {/* How to Improve */}
                <div className="space-y-1.5 pt-2 border-t border-green-200">
                  <div className="flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <h5 className="text-[10px] font-semibold text-amber-700">How to Improve</h5>
                  </div>
                  <ul className="space-y-1 ml-5">
                    {feedback.improvements.map((improvement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-[10px] text-slate-700 leading-relaxed flex items-start gap-1.5"
                      >
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>{improvement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ExamAttemptPreview
