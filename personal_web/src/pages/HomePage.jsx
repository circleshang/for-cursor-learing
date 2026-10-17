import PageContainer from '../components/ui/PageContainer.jsx'
import Hero from '../components/home/Hero.jsx'
import BentoGrid from '../components/home/BentoGrid.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import NomadSection from '../components/home/NomadSection.jsx'
import RoadmapSection from '../components/home/RoadmapSection.jsx'
import Newsletter from '../components/home/Newsletter.jsx'
export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 环境微光背景 */}
      <div className="pointer-events-none absolute left-1/2 top-12 h-[340px] w-[850px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-96 h-[420px] w-[420px] rounded-full bg-secondary/5 blur-[140px]" />

      <PageContainer>
        <Hero />
        <BentoGrid />
        <div className="mt-28 flex flex-col gap-28">
          <FeaturedProjects />
          <NomadSection />
          <RoadmapSection />
          <Newsletter />
        </div>
      </PageContainer>
    </div>
  )
}
