'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, School } from 'lucide-react'
import { useEffect, useState } from 'react'

// Animation variants for reusable animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{
    startX: number
    startY: number
    endX: number
    endY: number
    duration: number
  }>>([])

  useEffect(() => {
    setMounted(true)
    
    // Pre-calculate particle positions and animations for better performance
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      const height = window.innerHeight
      
      const calculatedParticles = Array.from({ length: 25 }, () => {
        const startX = Math.random() * width
        const startY = Math.random() * height
        const endX = Math.random() * width
        const endY = Math.random() * height
        const duration = Math.random() * 8 + 8 // 8-16 seconds
        
        return {
          startX,
          startY,
          endX,
          endY,
          duration,
        }
      })
      
      setParticles(calculatedParticles)
    }
  }, [])

  const stats = [
    { value: '5,000+', label: 'Students', icon: Users },
    { value: '20+', label: 'Schools', icon: School },
    { value: '100%', label: 'GDPR Compliant', icon: TrendingUp },
  ]

  // Split headline into words for stagger animation
  const headlineWords = "Improving Student Attainment with".split(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Additional floating orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Enhanced Particle Effect Background */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20 will-change-transform"
              initial={{
                x: particle.startX,
                y: particle.startY,
                scale: 0,
              }}
              animate={{
                x: particle.endX,
                y: particle.endY,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        <div className="text-center">
          {/* Enhanced Main Headline with Stagger Animation */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={textVariants}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
            {' '}
            <motion.span
              variants={textVariants}
              className="gradient-text text-shimmer inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              AI-Powered
            </motion.span>
            {' '}
            <motion.span
              variants={textVariants}
              className="inline-block"
            >
              Exam Preparation
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            ExAIm is an AI-powered exam preparation platform designed to improve student learning outcomes by giving schools a smarter way to plan, assign, grade, and analyse assessments.
          </motion.p>

          {/* Enhanced CTA Buttons with Spring Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/contact"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-lg font-semibold flex items-center gap-2 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.6 }}
                style={{ borderRadius: '50%', x: '-50%', y: '-50%' }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.a>
            
            <motion.a
              href="/how-it-works"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="relative px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold border-2 border-primary-600 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">How It Works</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Stats with Stagger Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 2,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-glow-intense hover-3d group cursor-pointer overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    rotate: [0, 10, -10, 0],
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                  className="relative z-10"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-1 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.2,
            borderColor: "rgb(37, 99, 235)",
            transition: { type: "spring", stiffness: 400, damping: 17 }
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
