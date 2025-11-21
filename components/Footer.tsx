'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { href: '/our-products', label: 'Our Products' },
        { href: '/how-exaim-works', label: 'How ExAIm Works' },
        { href: '/book-a-demo', label: 'Book a Demo' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/our-story', label: 'Our Story' },
        { href: '/why-exaim/security', label: 'Security' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '/', label: 'Home' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-and-conditions', label: 'Terms and Conditions' },
      ],
    },
  ]

  const socialLinks = [
    {
      href: 'mailto:contact@exaim.ai',
      icon: Mail,
      label: 'contact@exaim.ai',
      external: false,
    },
    {
      href: 'https://www.linkedin.com/company/exaimltd',
      icon: Linkedin,
      label: 'LinkedIn',
      external: true,
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="inline-block mb-4">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo/logo.png" 
                  alt="ExAIm Logo" 
                  width={140}
                  height={50}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
              AI-powered exam preparation platform for schools worldwide.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-6 md:mb-8 text-base md:text-lg relative">
                {section.title}
                <motion.div
                  className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400"
                  initial={{ width: 0 }}
                  animate={mounted ? { width: 48 } : {}}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.3 }}
                />
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={mounted ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group relative text-sm text-gray-300 hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300"
                        initial={false}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-6 md:mb-8 text-base md:text-lg relative">
              Connect
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400"
                initial={{ width: 0 }}
                animate={mounted ? { width: 48 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {socialLinks.map((social, index) => (
                <motion.li
                  key={social.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={mounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <motion.a
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                  >
                    <motion.div
                      className="p-2 bg-gray-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.div>
                    <span>{social.label}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-3 md:pt-4 mt-6 md:mt-8"
        >
          <div className="text-center">
            <p className="text-xs md:text-sm text-gray-300">
              &copy; {new Date().getFullYear()} ExAIm. All rights reserved.{' '}
              <motion.a
                href="https://www.exaim.ai"
                className="text-xs md:text-sm text-gray-300 hover:text-primary-400 transition-colors relative group inline-block"
                whileHover={{ scale: 1.05 }}
              >
                www.exaim.ai
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"
                  initial={false}
                />
              </motion.a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

