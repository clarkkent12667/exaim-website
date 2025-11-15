'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Automated',
    desc: 'Examiner-trained AI grading and feedback significantly reduce marking time.',
    gradient: 'from-primary-500 to-secondary-500',
  },
  {
    icon: Zap,
    title: 'Versatile',
    desc: 'Built for any curriculum, qualification, and subject — including GCSE, A-Level, MYP, and more.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Compliant',
    desc: 'Fully aligned with GDPR and ICO standards, with strict data-privacy controls.',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function SolutionOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            An all-in-one AI-powered exam preparation platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ExAIm brings together exam creation, simulated assessment delivery, automated marking, analytics, and personalised feedback — all in a single, easy-to-use system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                rotateY: 10
              }}
              className="relative text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all group cursor-pointer overflow-hidden hover-3d"
            >
              {/* Animated background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={false}
              />
              
              {/* Floating icon container */}
              <motion.div
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.2
                }}
                transition={{ duration: 0.5 }}
                className={`relative z-10 w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl`}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-xl border-2 border-white/30"
                />
                <feature.icon className="w-10 h-10 text-white relative z-10" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-2 relative z-10 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 relative z-10">{feature.desc}</p>
              
              {/* Sparkle effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

