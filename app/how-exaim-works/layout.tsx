import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How ExAIm Works - AI-Powered Exam Preparation Platform',
  description: 'Discover how ExAIm uses AI-powered assessments to streamline exam preparation, automate marking, and personalise learning to improve student outcomes across GCSE, A-Level, IB, and other curricula.',
  openGraph: {
    title: 'How ExAIm Works - AI-Powered Exam Preparation',
    description: 'Learn how ExAIm transforms exam preparation with AI-powered marking, instant feedback, and detailed analytics for teachers and students.',
  },
}

export default function HowExAImWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

