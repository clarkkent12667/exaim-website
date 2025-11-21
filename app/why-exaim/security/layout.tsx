import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Security & Privacy - GDPR Compliant Exam Platform',
  description: 'ExAIm is built with privacy and security at its core. GDPR and ICO compliant, with encrypted data storage, secure cloud infrastructure, and full teacher control over AI decisions.',
  path: '/why-exaim/security',
})

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

