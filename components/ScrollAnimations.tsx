'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimations() {
  const scrollTriggersRef = useRef<any[]>([])
  const gsapLoadedRef = useRef(false)
  const pathname = usePathname()

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    let isMounted = true
    let rafId: number | null = null
    let idleCallbackId: number | null = null

    // Cleanup function
    const cleanup = () => {
      if (scrollTriggersRef.current.length > 0) {
        scrollTriggersRef.current.forEach((trigger) => {
          if (trigger && typeof trigger.kill === 'function') {
            try {
              trigger.kill()
            } catch (e) {
              // Ignore cleanup errors
            }
          }
        })
        scrollTriggersRef.current = []
      }
      
      // Cleanup GSAP ScrollTrigger if loaded
      if (gsapLoadedRef.current && typeof window !== 'undefined') {
        try {
          // @ts-ignore - GSAP may not be loaded
          if (window.ScrollTrigger) {
            // @ts-ignore
            window.ScrollTrigger.getAll().forEach((trigger: any) => {
              try {
                trigger.kill()
              } catch (e) {
                // Ignore cleanup errors
              }
            })
          }
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    }

    // Cleanup on pathname change (navigation)
    cleanup()

    // Dynamically import GSAP using requestIdleCallback for better performance
    const loadGSAP = async () => {
      try {
        // Use requestIdleCallback if available, otherwise use setTimeout
        const scheduleLoad = (callback: () => Promise<void>) => {
          return new Promise<void>((resolve) => {
            if ('requestIdleCallback' in window && window.requestIdleCallback) {
              idleCallbackId = window.requestIdleCallback(() => {
                callback().then(resolve)
              }, { timeout: 200 })
            } else {
              setTimeout(() => {
                callback().then(resolve)
              }, 0)
            }
          })
        }

        await scheduleLoad(async () => {
          if (!isMounted) return

          const [{ gsap }, { ScrollTrigger }] = await Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger'),
          ])

          if (!isMounted) return

          gsap.registerPlugin(ScrollTrigger)
          gsapLoadedRef.current = true

          // Use requestAnimationFrame to ensure DOM is ready
          rafId = requestAnimationFrame(() => {
            if (!isMounted) return

            // Fade in on scroll for sections
            const sections = document.querySelectorAll('[data-fade-in]')
            sections.forEach((section) => {
              const animation = gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out',
                paused: true,
              })
              
              const trigger = ScrollTrigger.create({
                trigger: section,
                start: 'top 80%',
                animation: animation,
                toggleActions: 'play none none none',
                once: true, // Only animate once
              })
              scrollTriggersRef.current.push(trigger)
            })

            // Scale animation for cards
            const cards = document.querySelectorAll('[data-scale-in]')
            cards.forEach((card) => {
              const animation = gsap.from(card, {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                ease: 'back.out(1.7)',
                paused: true,
              })
              
              const trigger = ScrollTrigger.create({
                trigger: card,
                start: 'top 85%',
                animation: animation,
                toggleActions: 'play none none none',
                once: true, // Only animate once
              })
              scrollTriggersRef.current.push(trigger)
            })
          })
        })
      } catch (error) {
        console.error('Failed to load GSAP:', error)
      }
    }

    loadGSAP()

    return () => {
      isMounted = false
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      if (idleCallbackId !== null && 'cancelIdleCallback' in window && window.cancelIdleCallback) {
        window.cancelIdleCallback(idleCallbackId)
      }
      cleanup()
    }
  }, [pathname]) // Re-run on pathname change

  return null
}

