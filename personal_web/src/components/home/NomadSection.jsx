import { footprints, gear } from '../../data/home.js'
import Icon from '../ui/Icon.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'

function Timeline() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-sm md:col-span-7">
      <div className="mb-space-md font-label-mono text-code-sm uppercase text-outline">RESIDENTIAL FOOTPRINTS</div>
      <div className="flex flex-col gap-space-md">
        {footprints.map((item) => (
          <div key={item.place} className="relative flex items-start gap-space-md">
            <div
              className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                item.current
                  ? 'bg-secondary shadow-[0_0_10px_rgba(152,210,189,0.5)]'
                  : 'bg-outline-variant'
              }`}
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface">{item.place}</span>
                <span
                  className={`font-label-mono text-code-sm ${item.current ? 'text-secondary' : 'text-outline'}`}
                >
                  {item.period}
                </span>
              </div>
              <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-space-lg flex items-center justify-between pt-space-md font-label-mono text-code-sm text-outline">
        <span>TIMEZONE: UTC+9 / UTC+7</span>
        <span className="font-code-sm text-on-surface">CURRENT SPEED: 850 Mbps Symmetrical</span>
      </div>
    </div>
  )
}

function GearManifest() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-sm md:col-span-5">
      <div>
        <div className="mb-space-md font-label-mono text-code-sm uppercase text-outline">ESSENTIAL RIG MANIFEST</div>
        <div className="space-y-space-sm">
          {gear.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg bg-surface-container p-space-sm"
            >
              <div className="flex items-center gap-space-sm">
                <Icon name={item.icon} className={item.iconTone} />
                <span className="font-body-md text-on-surface">{item.name}</span>
              </div>
              <span className="font-label-mono text-code-sm text-outline">{item.spec}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md flex items-center justify-between rounded bg-surface-container-lowest p-space-sm font-label-mono text-code-sm text-outline">
        <span>TOTAL DRY WEIGHT</span>
        <span className="font-medium text-on-surface">4.2 kg (Single Backpack)</span>
      </div>
    </div>
  )
}

export default function NomadSection() {
  return (
    <section>
      <SectionHeader
        eyebrow="03 // GEOGRAPHY & HARDWARE"
        title="Nomad Chronicle & Studio Setup"
        tone="secondary"
        description="物理地理与数字虚拟的映射记录。在高度动态的旅居中保持恒常的工程专注与极简随身负载。"
      />
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-12">
        <Timeline />
        <GearManifest />
      </div>
    </section>
  )
}
