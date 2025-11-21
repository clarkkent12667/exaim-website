'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  GraduationCap, 
  Lightbulb, 
  Target, 
  Users, 
  Award, 
  Rocket, 
  Heart,
  Sparkles,
  TrendingUp,
  BookOpen,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const FoundersTeam = dynamic(() => import('@/components/FoundersTeam'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

// Hero Section
function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding-lg pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="container-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-8 shadow-lg"
          >
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Born in the classroom.
            <br />
            <span className="gradient-text">Built for the world.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            ExAIm was created by the founders of Improve ME Institute, an award-winning after-school centre in the UAE with over 1,000 students and 40 tutors. After years of witnessing the challenges teachers and students face in exam preparation, ExAIm was built to make exam excellence accessible, efficient, and data-driven. Discover our <Link href="/our-products" className="text-primary-600 hover:text-primary-700 underline">AI-powered exam preparation tools</Link> and see <Link href="/how-exaim-works" className="text-primary-600 hover:text-primary-700 underline">how ExAIm works</Link>.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/book-a-demo">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 bg-gray-900 hover:bg-gray-800 text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/our-products">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 font-medium text-base bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Explore our products
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Timeline Section
function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const milestones = [
    {
      year: '2010',
      title: 'Improve ME Institute Founded',
      description: 'An award-winning after-school centre established in the UAE, growing to serve over 1,000 students with 40 dedicated tutors.',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
    },
    {
      year: '2015-2020',
      title: 'Recognizing the Challenge',
      description: 'Years of firsthand experience witnessing the struggles teachers and students face in exam preparation, marking, and feedback.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      year: '2021',
      title: 'The Vision Takes Shape',
      description: 'The idea for ExAIm emerges: leveraging AI to make exam excellence accessible, efficient, and data-driven for all.',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
    },
    {
      year: '2022',
      title: 'Building the Platform',
      description: 'Development begins, combining educational expertise with cutting-edge technology to create a revolutionary exam preparation platform.',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2023',
      title: 'Launch & Impact',
      description: 'ExAIm launches, transforming how schools prepare students for GCSE, A-Level, IB, and other curricula worldwide.',
      icon: Award,
      color: 'from-primary-500 to-secondary-500',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From classroom experience to global innovation—discover the milestones that shaped ExAIm.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 to-primary-200" />
          
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Icon and year */}
                    <div className="flex-shrink-0 flex items-center gap-4 md:w-48">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg relative z-10`}>
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className="md:hidden">
                        <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                      </div>
                      <div className="hidden md:block text-right md:text-left text-2xl font-bold text-gray-900">
                        {milestone.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 ${
                      isEven ? 'md:ml-auto' : 'md:mr-auto'
                    }`} style={{ maxWidth: '600px' }}>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Mission & Vision Section
function MissionVisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To revolutionize exam preparation by making examiner-quality feedback accessible to every student, empowering teachers with powerful tools, and transforming how schools prepare students for success.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              A world where every student has access to personalized, examiner-quality feedback, where teachers can focus on teaching rather than marking, and where data-driven insights drive continuous improvement in education.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Values Section
function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      icon: Heart,
      title: 'Student-Centered',
      description: 'Every decision we make prioritizes student success and learning outcomes.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously push boundaries to deliver cutting-edge educational technology.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We empower teachers and students with tools that make a real difference.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product quality to support.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'Accessibility',
      description: 'We believe exam excellence should be accessible to all students, regardless of background.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and a commitment to ethical AI practices.',
      color: 'from-primary-500 to-secondary-500',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at ExAIm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Impact Section
function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      number: '1,000+',
      label: 'Students Served',
      description: 'Through Improve ME Institute',
      icon: Users,
    },
    {
      number: '40+',
      label: 'Expert Tutors',
      description: 'Dedicated educators',
      icon: GraduationCap,
    },
    {
      number: 'Award-Winning',
      label: 'Recognition',
      description: 'After-school centre',
      icon: Award,
    },
    {
      number: '30+',
      label: 'Years Experience',
      description: 'In education',
      icon: BookOpen,
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
      
      <div className="container-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Built on a foundation of proven educational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/80">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function OurStoryPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <MissionVisionSection />
      <ValuesSection />
      <ImpactSection />
      <FoundersTeam />
      <Footer />
    </main>
  )
}

