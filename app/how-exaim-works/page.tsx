'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BookOpen,
  Clock,
  FileCheck,
  BarChart3,
  Target,
  Check,
  Minus,
  User,
  GraduationCap,
  School,
  Users,
  Sparkles,
  Zap,
  Brain,
  TrendingUp,
  Layers,
  Shield,
  FileText,
  MessageSquare,
  Lightbulb,
} from 'lucide-react'
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

// Section components
function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding-lg pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-100"
            >
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-primary-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              How ExAIm works
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              ExAIm uses AI-powered assessments to streamline exam preparation, automate marking, and personalise learning to improve student outcomes. Transform how your school prepares students for GCSE, A-Level, IB, and other curricula. Explore our <Link href="/our-products" className="text-primary-600 hover:text-primary-700 underline font-medium">complete product suite</Link> or learn about our <Link href="/why-exaim/methodology" className="text-primary-600 hover:text-primary-700 underline font-medium">proven methodology</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/book-a-demo">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 bg-gray-900 hover:bg-gray-800 text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    Book a demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 font-medium text-base w-full sm:w-auto bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                  >
                    Talk to our team
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Preview Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative w-full lg:w-full"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <Image
                src="/img/preview/preview-image.png"
                alt="ExAIm AI-powered exam preparation platform dashboard showing assignment creation and student analytics"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WalkthroughSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: 1,
      title: 'Assign a mock exam in seconds',
      description: 'Teachers select from thousands of exam-board specific past-paper questions or create custom assessments. Assign homework, class activities, end-of-unit tests, or full mock exams with a few clicks.',
      icon: BookOpen,
      image: '/img/preview/assessment assigning.png',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      title: 'Students complete under exam conditions',
      description: 'Students access assessments through ExAIm and complete them under timed, simulated exam conditions. Open-ended questions encourage critical thinking and exam technique development.',
      icon: Clock,
      image: '/img/preview/student exam attempt.png',
      color: 'from-green-500 to-green-600',
    },
    {
      number: 3,
      title: 'AI marks with examiner-level feedback',
      description: 'ExAIm instantly marks responses using exam-board specific mark schemes. Students receive detailed, examiner-style feedback that highlights strengths and areas for improvement.',
      icon: FileCheck,
      image: '/img/preview/preview-image.png',
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: 4,
      title: 'Teachers see analytics and adjust teaching',
      description: 'Comprehensive analytics reveal class-wide and individual gaps. Teachers can identify struggling students early and adjust their teaching to address specific knowledge gaps.',
      icon: BarChart3,
      image: '/img/preview/analytics-preview.png',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 mb-4 md:mb-6"
          >
            <Sparkles className="w-7 h-7 text-primary-600" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Walk through an example
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how ExAIm transforms the exam preparation workflow for teachers and students.
          </p>
        </motion.div>

        {/* Progress indicator for mobile */}
        <div className="flex justify-center gap-2 mb-8 md:hidden">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === index ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop: Vertical timeline layout */}
        <div className="hidden md:block relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200" />
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-6 md:gap-8 group"
              >
                {/* Step number circle on timeline */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-primary-600 flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-primary-600">{step.number}</span>
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group/card"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Text content */}
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[280px]">
                      <div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.15 + 0.25 }}
                          className="inline-block text-sm font-semibold text-primary-600 mb-2"
                        >
                          Step {step.number}
                        </motion.span>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                          className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight"
                        >
                          {step.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                          className="text-gray-600 leading-relaxed text-base md:text-lg"
                        >
                          {step.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-video lg:aspect-auto">
                      <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, delay: index * 0.15 + 0.5 }}
                        className="relative w-full h-full flex items-center justify-center p-4 lg:p-6"
                      >
                        <Image
                          src={step.image}
                          alt={`${step.title} - ${step.description}`}
                          width={1200}
                          height={800}
                          className="w-full h-full object-contain transition-transform duration-700 group-hover/card:scale-105"
                          priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 lg:bg-gradient-to-l lg:from-white/10 lg:via-transparent lg:to-transparent pointer-events-none" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                    className="absolute left-8 top-20 w-6 h-6 text-primary-400"
                  >
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Carousel-style layout */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView && activeStep === index ? { opacity: 1, y: 0 } : { opacity: activeStep === index ? 1 : 0.3, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all duration-300 ${
                activeStep === index ? 'border-primary-500 shadow-xl' : 'border-gray-100'
              }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-primary-600">{step.number}</span>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden bg-gray-50 aspect-video">
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <Image
                    src={step.image}
                    alt={`${step.title} - ${step.description}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MethodologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What happens behind the scenes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ExAIm combines exam-board specific mark schemes, advanced AI, and educational expertise to deliver accurate, actionable feedback.
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Input Stage */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-blue-500 flex items-center justify-center shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Student Response</h3>
              <p className="text-sm text-gray-600">Open-ended answers</p>
            </motion.div>

            <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 mx-auto" />

            {/* Processing Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="text-center space-y-3 relative"
            >
              <motion.div
                className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-xl"
                animate={{ 
                  boxShadow: [
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    '0 25px 50px -12px rgba(33, 96, 243, 0.5)',
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="font-semibold text-gray-900">ExAIm AI Engine</h3>
              <p className="text-sm text-gray-600">Board-specific analysis</p>
            </motion.div>

            <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 mx-auto" />

            {/* Output Stage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Feedback & Insights</h3>
              <p className="text-sm text-gray-600">Personalised analytics</p>
            </motion.div>
          </div>

          {/* Additional details */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Exam-board aligned mark schemes</p>
              </div>
              <div className="text-center">
                <Layers className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Essay-style and problem-solving questions</p>
              </div>
              <div className="text-center">
                <Lightbulb className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Actionable insights for improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '5,000+', label: 'Students using ExAIm', icon: GraduationCap },
    { value: '20+', label: 'Schools worldwide', icon: School },
    { value: '80%', label: 'Reduction in marking time', icon: Clock },
    { value: '3x', label: 'Faster feedback cycles', icon: Zap },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Grade faster, teach smarter, improve outcomes
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl border border-gray-100 text-center cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4">Key Benefits</h3>
              <ul className="space-y-4 md:space-y-6 text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Reduced manual grading workload frees up time for teaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>More frequent exam-style practice builds student confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Faster feedback cycles enable timely intervention</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Data-driven insights improve teaching effectiveness</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    { feature: 'AI marking for open-ended answers', traditional: false, exaim: true },
    { feature: 'Exam-board aligned feedback', traditional: false, exaim: true },
    { feature: 'All-in-one workflow (assignments, grading, analytics)', traditional: false, exaim: true },
    { feature: 'Support for independent learning', traditional: false, exaim: true },
    { feature: 'Data transparency for schools and parents', traditional: false, exaim: true },
    { feature: 'Simulated exam conditions', traditional: false, exaim: true },
    { feature: 'Instant feedback and marking', traditional: false, exaim: true },
    { feature: 'Detailed gap analysis and insights', traditional: false, exaim: true },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why schools choose ExAIm
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how ExAIm compares to traditional assessment methods and multiple-tool workflows.
          </p>
        </motion.div>

        <div className="bg-gray-50 rounded-xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 md:py-4 px-4 font-semibold text-gray-900">Feature</th>
                <th className="text-center py-3 md:py-4 px-4 font-semibold text-gray-900">Traditional / Multiple Tools</th>
                <th className="text-center py-3 md:py-4 px-4 font-semibold text-gray-900">ExAIm</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-white transition-colors"
                >
                  <td className="py-3 md:py-4 px-4 text-gray-700 leading-relaxed">{item.feature}</td>
                  <td className="py-3 md:py-4 px-4 text-center">
                    {item.traditional ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 md:py-4 px-4 text-center">
                    {item.exaim ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function StakeholderWorkflowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stakeholders = [
    {
      icon: User,
      title: 'Teachers',
      benefits: [
        'Assign homework, class activities, and assessments with automated marking',
        'Track progress and identify gaps through detailed analytics',
        'Focus on teaching, not grading',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Students',
      benefits: [
        'Practice with real exam-style questions under timed conditions',
        'Receive instant, personalised feedback to improve',
        'Build confidence through frequent exam practice',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: School,
      title: 'Schools',
      benefits: [
        'Access data-driven progress tracking across all subjects',
        'Support digital transformation initiatives',
        'Ensure consistency and quality in assessment practices',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Users,
      title: 'Parents',
      benefits: [
        'Clear visibility on student progress and performance',
        'Understand areas where support is needed',
        'Track improvement over time',
      ],
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            ExAIm fits into your existing workflow
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Designed to work seamlessly with your school's processes and benefit every stakeholder.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stakeholder.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <stakeholder.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 md:mb-4">{stakeholder.title}</h3>
              <ul className="space-y-4 md:space-y-6">
                {stakeholder.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-600 flex items-start gap-2 text-sm leading-relaxed">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto container-wrapper text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Would you like to see ExAIm in action?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a live walkthrough and discover how ExAIm can transform exam preparation at your school.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/book-a-demo" className="group">
                <Button
                  size="lg"
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 rounded-lg text-base md:text-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Book a demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function HowExAImWorksPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <HeroSection />
      <WalkthroughSection />
      <MethodologySection />
      <ImpactSection />
      <ComparisonSection />
      <StakeholderWorkflowSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

