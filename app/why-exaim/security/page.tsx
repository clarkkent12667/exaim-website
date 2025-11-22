import dynamic from 'next/dynamic'
import StructuredData from '@/components/StructuredData'
import { createBreadcrumbSchema } from '@/lib/metadata'
import DataSecurity from '@/components/DataSecurity'
import { AnimatedHero, AnimatedSecurityFeatures, AnimatedTrustBadges, AnimatedLegalDocuments } from './_components/AnimatedSections'

const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-20" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Why ExAIm', url: '/why-exaim' },
  { name: 'Security', url: '/why-exaim/security' },
])

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={breadcrumbSchema} />
      <Navbar />
      <AnimatedHero />
      <div className="border-b border-gray-100 my-0"></div>
      <AnimatedSecurityFeatures />
      <div className="border-b border-gray-100 my-0"></div>
      <AnimatedTrustBadges />
      <div className="border-b border-gray-100 my-0"></div>
      <DataSecurity />
      <div className="border-b border-gray-100 my-0"></div>
      <AnimatedLegalDocuments />
      <Footer />
    </main>
  )
}
