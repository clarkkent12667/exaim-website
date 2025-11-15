"use client"

import { motion, useInView } from 'framer-motion'
import { BarChart, Home, FileText, TrendingUp, Users, AlertTriangle, CheckCircle, ArrowUp, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const AnalyticsPreview: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedView, setSelectedView] = useState<'overview' | 'students' | 'topics'>('overview')

  const classStats = {
    averageScore: 72,
    totalStudents: 28,
    completed: 25,
    averageTime: '78 min',
    improvement: '+5%',
  }

  const studentPerformance = [
    { name: 'Emma Wilson', score: 85, status: 'excellent', trend: 'up' },
    { name: 'James Brown', score: 78, status: 'good', trend: 'up' },
    { name: 'Sarah Davis', score: 65, status: 'needs-improvement', trend: 'down' },
    { name: 'Michael Lee', score: 72, status: 'good', trend: 'up' },
    { name: 'Olivia Taylor', score: 58, status: 'needs-improvement', trend: 'down' },
  ]

  const topicAnalysis = [
    { topic: 'Ionic Bonding', averageScore: 78, studentsStruggling: 3 },
    { topic: 'Covalent Bonding', averageScore: 82, studentsStruggling: 2 },
    { topic: 'Metallic Bonding', averageScore: 65, studentsStruggling: 8 },
    { topic: 'Periodic Table', averageScore: 75, studentsStruggling: 5 },
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
              className="p-2 rounded-xl bg-white/60 hover:bg-white shadow-sm hover:shadow-md border border-gray-200/60 transition-all group"
              title="Assignments"
            >
              <FileText className="w-4 h-4 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-primary-100 shadow-md border border-primary-200 transition-all group"
              title="Analytics"
            >
              <BarChart className="w-4 h-4 text-primary-600" />
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
                    Class Analytics
                  </h2>
                  <p className="text-[10px] md:text-xs text-slate-600">
                    Chemistry: GCSE AQA Paper 1 • Year 11
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 rounded-full bg-green-100 border border-green-200 shadow-sm">
                    <span className="text-[10px] md:text-xs font-semibold text-green-700">
                      {classStats.completed}/{classStats.totalStudents} completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* View Tabs */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'students', label: 'Students' },
              { id: 'topics', label: 'Topics' },
            ].map((view) => (
              <motion.button
                key={view.id}
                onClick={() => setSelectedView(view.id as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all whitespace-nowrap ${
                  selectedView === view.id
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md'
                    : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'
                }`}
              >
                {view.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Overview View */}
          {selectedView === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <motion.div
                  variants={itemVariants}
                  className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/60 p-3 shadow-sm"
                >
                  <div className="text-[10px] text-slate-600 mb-1">Average Score</div>
                  <div className="text-lg font-bold text-slate-900">{classStats.averageScore}%</div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-[9px] text-green-600">{classStats.improvement}</span>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-200/60 p-3 shadow-sm"
                >
                  <div className="text-[10px] text-slate-600 mb-1">Total Students</div>
                  <div className="text-lg font-bold text-slate-900">{classStats.totalStudents}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Users className="w-3 h-3 text-primary-600" />
                    <span className="text-[9px] text-primary-600">{classStats.completed} completed</span>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-200/60 p-3 shadow-sm"
                >
                  <div className="text-[10px] text-slate-600 mb-1">Avg. Time</div>
                  <div className="text-lg font-bold text-slate-900">{classStats.averageTime}</div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-200/60 p-3 shadow-sm"
                >
                  <div className="text-[10px] text-slate-600 mb-1">Completion</div>
                  <div className="text-lg font-bold text-slate-900">
                    {Math.round((classStats.completed / classStats.totalStudents) * 100)}%
                  </div>
                </motion.div>
              </div>

              {/* Score Distribution Chart */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 p-3 md:p-4 shadow-sm"
              >
                <h3 className="text-xs font-semibold text-slate-900 mb-3">Score Distribution</h3>
                <div className="space-y-2">
                  {[
                    { range: '90-100', count: 5, color: 'bg-green-500' },
                    { range: '80-89', count: 8, color: 'bg-blue-500' },
                    { range: '70-79', count: 7, color: 'bg-yellow-500' },
                    { range: '60-69', count: 3, color: 'bg-orange-500' },
                    { range: '0-59', count: 2, color: 'bg-red-500' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-[9px] text-slate-600 w-12">{item.range}</span>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${(item.count / classStats.totalStudents) * 100}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                      <span className="text-[9px] text-slate-600 w-6">{item.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Students View */}
          {selectedView === 'students' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {studentPerformance.map((student, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 p-3 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        student.status === 'excellent' ? 'bg-green-500' :
                        student.status === 'good' ? 'bg-blue-500' : 'bg-amber-500'
                      }`} />
                      <span className="text-xs font-medium text-slate-900">{student.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-900">{student.score}%</span>
                      {student.trend === 'up' ? (
                        <ArrowUp className="w-3 h-3 text-green-600" />
                      ) : (
                        <ArrowDown className="w-3 h-3 text-red-600" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Topics View */}
          {selectedView === 'topics' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {topicAnalysis.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 p-3 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-900">{topic.topic}</span>
                    <span className="text-xs font-semibold text-slate-900">{topic.averageScore}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${topic.averageScore}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                        className={`h-full ${
                          topic.averageScore >= 75 ? 'bg-green-500' :
                          topic.averageScore >= 65 ? 'bg-yellow-500' : 'bg-red-500'
                        } rounded-full`}
                      />
                    </div>
                    {topic.studentsStruggling > 0 && (
                      <div className="flex items-center gap-1 text-[9px] text-amber-600">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{topic.studentsStruggling} struggling</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default AnalyticsPreview

