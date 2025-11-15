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
    { href: '/how-exaim-works', label: 'How ExAIm Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/demo', label: 'See ExAIm in Action' },
    { href: '/about', label: 'About' },
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
                alt="ExAIm Logo" 
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isHowItWorks = link.href === '/how-exaim-works'
              return (
                <motion.div key={link.href} whileHover={{ y: -2 }}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className={`relative flex items-center gap-2 transition-all font-medium group ${
                      isHowItWorks
                        ? 'px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg text-primary-600 font-semibold border border-primary-200 hover:from-primary-500/20 hover:to-secondary-500/20'
                        : pathname === link.href
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 ${
                        pathname === link.href || isHowItWorks ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      initial={false}
                      animate={{ width: pathname === link.href || isHowItWorks ? '100%' : 0 }}
                    />
                  </Link>
                </motion.div>
              )
            })}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book-a-demo"
                prefetch={true}
                className="relative px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium transition-opacity hover:opacity-90"
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
          className="md:hidden bg-white border-t"
        >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const isHowItWorks = link.href === '/how-exaim-works'
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`relative flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-all ${
                      isHowItWorks
                        ? 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 font-semibold border border-primary-200'
                        : pathname === link.href
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
                className="block px-6 py-2 bg-primary-600 text-white rounded-lg text-center font-medium"
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

