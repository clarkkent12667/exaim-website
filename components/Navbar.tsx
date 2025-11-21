'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/our-products', label: 'Our Products' },
    { href: '/how-exaim-works', label: 'How ExAIm Works' },
    { href: '/our-story', label: 'Our Story' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wrapper">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" prefetch={true} className="flex items-center">
              <Image 
                src="/logo/logo.png" 
                alt="ExAIm - AI-Powered Exam Preparation Platform" 
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 md:gap-6">
            {navLinks.map((link) => {
              return (
                <motion.div key={link.href} whileHover={{ y: -2 }}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className={`relative flex items-center gap-2 transition-all font-medium group ${
                      pathname === link.href
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 ${
                        pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      initial={false}
                      animate={{ width: pathname === link.href ? '100%' : 0 }}
                    />
                  </Link>
                </motion.div>
              )
            })}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book-a-demo"
                prefetch={true}
                className="relative px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Book a Demo
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t shadow-lg"
        >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`relative flex items-center gap-2 font-medium px-3 py-3 rounded-lg transition-all ${
                      pathname === link.href
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/book-a-demo"
                prefetch={true}
                className="block px-6 py-3 bg-primary-600 text-white rounded-lg text-center font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
      )}
    </nav>
  )
}

