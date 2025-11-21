import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Our Products - AI-Powered Exam Preparation Tools',
  description: 'Discover ExAIm\'s comprehensive suite of AI-powered exam preparation tools: assignment creation, automated marking, analytics, and student exam interface. Reduce marking time by 60% and improve student outcomes.',
  path: '/our-products',
})

export default function OurProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
