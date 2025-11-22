import dynamic from 'next/dynamic'
import AnimatedHero from './_components/AnimatedHero'
import AnimatedProducts from './_components/AnimatedProducts'

const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-20" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})
const CurriculumSupport = dynamic(() => import('@/components/CurriculumSupport'), {
  loading: () => <div className="min-h-[600px]" />,
})

export default function OurProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AnimatedHero />
      <CurriculumSupport />
      <AnimatedProducts />
      <Footer />
    </main>
  )
}
