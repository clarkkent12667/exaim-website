'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function TestimonialsWithLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Vanessa North-Panting',
      role: 'Head of Digital Learning',
      school: 'Charterhouse',
      quote: 'The feature that allows students to answer questions and receive instant feedback is a game-changer. It has significantly enhanced our teaching process and student engagement.',
    },
    {
      name: 'Steve Porter',
      role: 'Head of Business & Economics',
      school: 'Tanglin Trust Singapore',
      quote: 'ExAIm has transformed how we prepare students for exams. The automated marking and detailed analytics save hours each week, allowing us to focus on what matters most—teaching.',
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
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 md:p-8 lg:p-12 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <Quote className="w-12 h-12 mb-6 opacity-80" />
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl font-medium mb-6 leading-relaxed"
              >
                {testimonials[0].quote}
              </motion.blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-lg">{testimonials[0].name}</div>
                  <div className="text-white/80">{testimonials[0].role}, {testimonials[0].school}</div>
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
          className="text-center mb-12"
        >
          <p className="text-base md:text-lg text-gray-700">
            Trusted by <span className="font-bold text-gray-900">5,000+ students</span> across{' '}
            <span className="font-bold text-gray-900">20+ globally recognised schools</span>
          </p>
        </motion.div>

        {/* School Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden py-8"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 md:gap-8 lg:gap-12 items-center overflow-x-auto pb-4">
            {schools.map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 h-16 md:h-20 grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={school.logo}
                  alt={school.name}
                  width={200}
                  height={80}
                  className="max-h-full w-auto object-contain"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

