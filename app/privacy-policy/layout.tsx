import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy - GDPR & Data Protection',
  description: 'ExAIm\'s Privacy Policy detailing how we collect, process, and protect student and institutional data in compliance with UK GDPR and UAE PDPL regulations.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

