import dynamic from 'next/dynamic'
import AnimatedHero from './_components/AnimatedHero'
import AnimatedTimeline from './_components/AnimatedTimeline'
import { AnimatedMissionVision, AnimatedValues, AnimatedImpact } from './_components/AnimatedSections'

const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-20" />,
})

const FoundersTeam = dynamic(() => import('@/components/FoundersTeam'), {
  loading: () => <div className="min-h-[400px]" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})


export default function OurStoryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AnimatedHero />
      <AnimatedTimeline />
      <AnimatedMissionVision />
      <AnimatedValues />
      <AnimatedImpact />
      <FoundersTeam />
      <Footer />
    </main>
  )
}

