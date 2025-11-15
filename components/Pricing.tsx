'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Per Subject',
    price: '$10',
    period: 'per student/year',
    subjects: 1,
    features: ['Single subject access', 'Full feature set', 'All curricula support'],
    popular: false,
  },
  {
    name: '4-Subject Bundle',
    price: '$36',
    period: 'per student/year',
    subjects: 4,
    features: ['4 subjects', 'Best value', 'Full feature set', 'All curricula support'],
    popular: true,
  },
  {
    name: '6-Subject Premium',
    price: '$60',
    period: 'per student/year',
    subjects: 6,
    features: ['6 subjects', 'Maximum coverage', 'Full feature set', 'All curricula support', 'Priority support'],
    popular: false,
  },
]

const benefits = [
  'Pilot Test: 30-day commitment-free trial',
  'Onboarding: Institution setup and teacher training',
  'Subscribe: Full access for the academic year',
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" ref={ref} className="section-padding">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple pricing. Powerful results.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the plan that fits your institution's needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative bg-white rounded-xl p-6 md:p-8 lg:p-10 border-2 transition-all flex flex-col h-full ${
                plan.popular 
                  ? 'border-primary-600 shadow-xl scale-105 md:scale-110' 
                  : 'border-gray-200 hover:border-primary-300 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-md text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-2">{plan.period}</p>
                {plan.subjects > 1 && (
                  <p className="text-xs md:text-sm text-gray-500">({plan.subjects} subjects)</p>
                )}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start"
                  >
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all mt-auto ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 md:p-10 lg:p-12 text-white shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Getting Started is Easy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 text-primary-400">{index + 1}</div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

