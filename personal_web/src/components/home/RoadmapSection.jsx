import { milestones } from '../../data/home.js'
import SectionHeader from '../ui/SectionHeader.jsx'

const badgeTone = {
  primary: 'bg-primary-container/40 text-primary',
  secondary: 'bg-secondary-container/40 text-secondary',
  muted: 'bg-surface-container-high text-on-surface-variant',
}

const barTone = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  muted: 'bg-outline',
}

export default function RoadmapSection() {
  return (
    <section>
      <SectionHeader
        eyebrow="04 // RESEARCH & HORIZONS"
        title="Technical Roadmap 2025"
        description="公开的研究课题与验证原型。通过小步快跑的仿真测试与实践记录,持续推进系统可靠性前沿。"
      />
      <div className="flex flex-col gap-space-lg rounded-xl bg-surface-container-low p-space-lg shadow-sm">
        {milestones.map((m) => (
          <div key={m.title} className="flex flex-col gap-space-xs">
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className={`rounded px-2 py-0.5 font-label-mono text-code-sm ${badgeTone[m.tone]}`}>
                  {m.badge}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">{m.title}</span>
              </div>
              <span className="font-label-mono text-code-sm text-outline">{m.date}</span>
            </div>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{m.description}</p>
            <div className="mt-space-xs h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
              <div
                className={`h-full rounded-full ${barTone[m.tone]}`}
                style={{ width: `${m.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
