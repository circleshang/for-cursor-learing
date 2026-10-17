import { projects } from '../../data/home.js'
import SectionHeader from '../ui/SectionHeader.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function FeaturedProjects() {
  return (
    <section>
      <SectionHeader
        eyebrow="02 // ARTIFACTS"
        title="Featured Projects & Systems"
        description="以开源与生产级标准打造的独立工具。专注于极小内存占用、离线协同及纯粹的无缝交互体验。"
      />
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
