import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Our Story - Born in the Classroom, Built for the World',
  description: 'Learn about ExAIm\'s journey from Improve ME Institute to a global AI-powered exam preparation platform. Discover our mission, values, and commitment to transforming education.',
  path: '/our-story',
})

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

