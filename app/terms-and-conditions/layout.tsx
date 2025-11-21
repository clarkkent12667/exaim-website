import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Terms and Conditions - ExAIm Platform Terms',
  description: 'Terms and Conditions governing the use of ExAIm\'s AI-powered exam preparation platform. Read our terms of service, user responsibilities, and platform usage guidelines.',
  path: '/terms-and-conditions',
})

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
