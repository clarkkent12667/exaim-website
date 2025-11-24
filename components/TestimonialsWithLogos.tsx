'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsWithLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Steve Porter',
      role: 'Head of Business & Economics',
      school: 'Tanglin Trust Singapore',
      quote: 'Significantly enhanced my teaching process. Excited to continue using it.',
    },
    {
      name: 'Vanessa North-Panting',
      role: 'Head of Digital Learning',
      school: 'Charterhouse',
      quote: 'The feature that allows students to answer questions and receive instant feedback is a game-changer.',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const schools = [
    { name: 'Harrow School', logo: '/companies/Harrow_Crest.svg (1).png' },
    { name: 'Stowe', logo: '/companies/Arms_of_Stowe_School.svg (1).png' },
    { name: 'UCS Hampstead', logo: '/companies/UCS_RGB (1).png' },
    { name: 'Uppingham', logo: '/companies/logo-137424 (1).png' },
    { name: 'Charterhouse', logo: '/companies/logo-370x90-1.png' },
    { name: 'Improve ME Institute', logo: '/companies/image (33).png' },
    { name: 'Batley Girls', logo: '/companies/images (3).png' },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 opacity-80" />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-4 md:mb-6 leading-relaxed px-2 sm:px-0"
                >
                  {testimonials[currentTestimonial].quote}
                </motion.blockquote>
              </AnimatePresence>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`name-${currentTestimonial}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="font-semibold text-sm sm:text-base">{testimonials[currentTestimonial].name}</div>
                      <div className="text-white/80 text-xs sm:text-sm">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].school}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  {/* Carousel Indicators */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial
                            ? 'bg-white w-6'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  {/* Navigation Buttons */}
                  <div className="flex gap-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        setCurrentTestimonial(
                          (prev) => (prev - 1 + testimonials.length) % testimonials.length
                        )
                      }
                      className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                      }
                      className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed px-4">
            Trusted by <span className="font-bold text-gray-900">5,000+ students</span> across{' '}
            <span className="font-bold text-gray-900">20+ globally recognised schools</span>
          </p>
        </motion.div>

        {/* School Logos - Marquee Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden py-4 md:py-6"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <div className="flex gap-6 md:gap-8 lg:gap-12 items-center shrink-0 marquee">
              {[...schools, ...schools].map((school, index) => (
                <div
                  key={`marquee-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 px-4 hover:scale-110"
                >
                  <Image
                    src={school.logo}
                    alt={school.name}
                    width={180}
                    height={80}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

