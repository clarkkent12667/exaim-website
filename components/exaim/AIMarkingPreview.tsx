"use client"

import { motion, useInView } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, Home, BarChart, FileText, Sparkles, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const AIMarkingPreview: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedQuestion, setSelectedQuestion] = useState(2) // Start with Q3

  const questions = [
    {
      number: 1,
      studentAnswer: 'transferred',
      correct: true,
      marksAwarded: 1,
      totalMarks: 1,
      feedback: 'Correct! Electrons are transferred in ionic bonding.',
    },
    {
      number: 2,
      studentAnswer: '-1',
      correct: true,
      marksAwarded: 1,
      totalMarks: 1,
      feedback: 'Correct! Chloride ions have a -1 charge.',
    },
    {
      number: 3,
      studentAnswer: 'Sodium chloride has a high melting point because the ions are held together by strong forces. It takes a lot of energy to break these bonds.',
      correct: false,
      marksAwarded: 2,
      totalMarks: 3,
      correctPoints: [
        'Identified strong forces between ions',
        'Mentioned energy needed to break bonds',
      ],
      improvements: [
        "Specify 'electrostatic forces' and 'oppositely charged ions'",
        'Mention the lattice structure',
      ],
      correctAnswer: 'Sodium chloride has a high melting point because:\n\n• Strong electrostatic forces of attraction between oppositely charged ions (Na⁺ and Cl⁻)\n• These ionic bonds require a lot of energy to overcome\n• The lattice structure means many bonds must be broken simultaneously',
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

  const currentQuestion = questions[selectedQuestion]

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
              className="p-2 rounded-xl bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200/60 transition-all group"
              title="Assignments"
            >
              <FileText className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-primary-100 shadow-md border border-primary-200 transition-all group"
              title="Marking"
            >
              <Sparkles className="w-4 h-4 text-primary-600" />
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
          {/* Top Bar */}
          <motion.div variants={itemVariants}>
            <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 backdrop-blur-xl p-3 md:p-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-sm md:text-base font-semibold text-slate-900 mb-0.5">
                    AI Marking Complete
                  </h2>
                  <p className="text-[10px] md:text-xs text-slate-600">
                    Chemistry: GCSE AQA Paper 1 • Student: John Smith
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm shadow-sm gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-[10px] font-semibold text-green-700">
                      AI Graded
                    </span>
                  </motion.div>
                  <div className="px-2 py-1 rounded-full bg-primary-100 border border-primary-200 shadow-sm">
                    <span className="text-[10px] md:text-xs font-semibold text-primary-700">
                      {questions.reduce((sum, q) => sum + q.marksAwarded, 0)}/{questions.reduce((sum, q) => sum + q.totalMarks, 0)} marks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Question Selector */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 overflow-x-auto pb-2">
            {questions.map((q, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedQuestion(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all whitespace-nowrap ${
                  selectedQuestion === index
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md'
                    : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'
                }`}
              >
                Q{q.number} {q.correct ? '✓' : `${q.marksAwarded}/${q.totalMarks}`}
              </motion.button>
            ))}
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-3">
            {/* Left Column - Question & Student Answer */}
            <motion.div variants={itemVariants} className="space-y-3">
              {/* Question */}
              <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 backdrop-blur-xl p-3 md:p-4 shadow-sm">
                <div className="text-[9px] font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent uppercase tracking-wide mb-2">
                  Question {currentQuestion.number}
                </div>
                <p className="text-xs md:text-sm text-slate-900 leading-relaxed mb-3">
                  {currentQuestion.number === 1 && 'Complete the sentence: In an ionic bond, electrons are ________ from one atom to another.'}
                  {currentQuestion.number === 2 && 'What is the charge on a chloride ion?'}
                  {currentQuestion.number === 3 && 'Explain why sodium chloride has a high melting point.'}
                </p>
              </div>

              {/* Student Answer */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-200/60 backdrop-blur-xl p-3 md:p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[10px] font-semibold text-slate-700">Student Answer</h4>
                  <div className={`px-2 py-0.5 rounded-full border shadow-sm ${
                    currentQuestion.correct 
                      ? 'bg-green-500/10 border-green-500/30' 
                      : 'bg-amber-500/10 border-amber-500/30'
                  }`}>
                    <span className={`text-[10px] font-semibold ${
                      currentQuestion.correct ? 'text-green-700' : 'text-amber-700'
                    }`}>
                      {currentQuestion.correct ? 'Correct' : 'Partially Correct'}
                    </span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 min-h-[60px]">
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {currentQuestion.studentAnswer}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-200">
                  <span className="text-[10px] text-slate-600 font-medium">
                    {currentQuestion.marksAwarded}/{currentQuestion.totalMarks} marks awarded
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - AI Feedback */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-200/60 backdrop-blur-xl p-3 md:p-4 shadow-md flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-green-600" />
                <h4 className="text-[10px] font-semibold text-green-700">AI Feedback</h4>
              </div>

              <div className="space-y-3 flex-grow">
                {currentQuestion.correct ? (
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-[10px] text-slate-700 leading-relaxed">
                        {currentQuestion.feedback}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* What You Got Correct */}
                    {currentQuestion.correctPoints && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                          <h5 className="text-[10px] font-semibold text-green-700">What You Got Correct</h5>
                        </div>
                        <ul className="space-y-1 ml-5">
                          {currentQuestion.correctPoints.map((point, index) => (
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
                    )}

                    {/* Complete Answer */}
                    {currentQuestion.correctAnswer && (
                      <div className="space-y-1.5 pt-2 border-t border-green-200/60">
                        <div className="flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <h5 className="text-[10px] font-semibold text-blue-700">Complete Answer</h5>
                        </div>
                        <div className="ml-5 bg-blue-50/50 border border-blue-200/50 rounded-md p-2.5">
                          <p className="text-[10px] text-slate-700 leading-relaxed whitespace-pre-wrap">
                            {currentQuestion.correctAnswer}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* How to Improve */}
                    {currentQuestion.improvements && (
                      <div className="space-y-1.5 pt-2 border-t border-green-200/60">
                        <div className="flex items-center gap-1.5">
                          <XCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <h5 className="text-[10px] font-semibold text-amber-700">How to Improve</h5>
                        </div>
                        <ul className="space-y-1 ml-5">
                          {currentQuestion.improvements.map((improvement, index) => (
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
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AIMarkingPreview

