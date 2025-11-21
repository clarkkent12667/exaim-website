import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'How ExAIm Works - AI-Powered Exam Preparation Platform',
  description: 'See how ExAIm transforms exam preparation with AI-powered marking, automated feedback, and comprehensive analytics. Learn how schools use ExAIm for GCSE, A-Level, and IB exam preparation.',
  path: '/how-exaim-works',
})

export default function HowExAImWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
