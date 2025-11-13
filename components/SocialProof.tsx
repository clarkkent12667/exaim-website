'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Steve Porter',
    role: 'Head of Business & Economics',
    school: '',
    quote: 'Significantly enhanced my teaching process.',
    logo: '',
  },
  {
    name: 'Vanessa North-Panting',
    role: 'Head of Digital Learning',
    school: '',
    quote: 'Instant feedback for students is a game-changer.',
    logo: '',
  },
]

const schools = [
  { name: 'Harrow School', logo: '/companies/Harrow_Crest.svg (1).png' },
  { name: 'Stowe', logo: '/companies/Arms_of_Stowe_School.svg (1).png' },
  { name: 'UCS Hampstead', logo: '/companies/UCS_RGB (1).png' },
  { name: 'Uppingham', logo: '/companies/logo-137424 (1).png' },
  { name: 'Charterhouse', logo: '/companies/logo-370x90-1.png' },
  { name: 'Improve ME Institute', logo: '/companies/image (33).png' },
  { name: 'Batley Girls', logo: '/companies/images (3).png' },
].filter((school) => {
  // Filter out ExAIm logos - check if filename matches ExAIm logo patterns
  const fileName = school.logo.toLowerCase()
  const exaimPatterns = ['full logo', 'small logo', 'only graphic', '/logo.png']
  return !exaimPatterns.some(pattern => fileName.includes(pattern))
})

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full text-2xl font-bold mb-8 shadow-lg"
          >
            5,000 users across 20 globally renowned schools
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-primary-200" />
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 italic"
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.p>
              </AnimatePresence>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                      setCurrentTestimonial(
                        (prev) => (prev - 1 + testimonials.length) % testimonials.length
                      )
                    }
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                    }
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* School Logos - Scrolling Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden py-8">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container */}
            <div className="flex">
              {/* First set of logos */}
              <motion.div
                className="flex gap-8 md:gap-12 shrink-0"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
              >
                {[...schools, ...schools].map((school, index) => (
                  <motion.div
                    key={`first-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors h-32 w-48 md:w-56 shrink-0"
                  >
                    <Image
                      src={school.logo}
                      alt={school.name}
                      width={200}
                      height={80}
                      className="max-w-full max-h-full object-contain"
                      unoptimized
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

