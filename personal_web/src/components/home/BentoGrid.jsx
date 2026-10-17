import { latencyNodes, stack } from '../../data/home.js'
import GlowCursor from '../../effects/GlowCursor/GlowCursor.jsx'

const stackTone = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  default: 'text-on-surface',
  muted: 'text-on-surface-variant',
}

const dotTone = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
}

function PhilosophyCard() {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-sm md:col-span-5">
      <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-primary/5 blur-2xl transition-colors group-hover:bg-primary/10" />
      <div>
        <div className="mb-space-md flex items-center justify-between font-label-mono text-code-sm text-outline">
          <span>PHILOSOPHY // 01</span>
          <span className="font-code-sm text-secondary">PARADIGM</span>
        </div>
        <h2 className="mb-space-sm font-headline-md text-headline-md text-on-surface">Architecting Freedom</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          自由并非放任无度,而是系统在极端扰动下的优雅降级。通过极致精简外部依赖与契约式工程,将数字基础设施的控制权完整交还于个体,释放最高维度的创造潜能。
        </p>
      </div>
      <div className="mt-space-lg flex items-center justify-between pt-space-md font-label-mono text-code-sm text-outline">
        <span>RESILIENCE OVER ENTROPY</span>
        <span className="font-medium text-on-surface">MAX AUTONOMY</span>
      </div>
    </div>
  )
}

function LatencyCard() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-sm md:col-span-7">
      <div>
        <div className="mb-space-sm flex items-center justify-between font-label-mono text-code-sm text-outline">
          <div className="flex items-center gap-space-xs">
            <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
            <span>GLOBAL EDGE LATENCY</span>
          </div>
          <span className="font-code-sm text-on-surface">18 ACTIVE NODES</span>
        </div>

        <div className="relative my-space-sm h-24 w-full overflow-hidden rounded-lg bg-surface-container-lowest">
          <GlowCursor
            color="#5f8bff"
            intensity={1.3}
            trailWidth={3}
            linger={1.4}
            glow={1.2}
            clickBurst
            theme="dark"
          >
          <svg className="h-full w-full p-space-sm text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 400 60">
            <path
              d="M0,45 Q50,20 100,35 T200,15 T300,40 T400,22"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M0,45 Q50,20 100,35 T200,15 T300,40 T400,22 L400,60 L0,60 Z"
              fill="currentColor"
              fillOpacity="0.08"
            />
            <circle cx="100" cy="35" fill="#8AB4F8" r="3" />
            <circle cx="200" cy="15" fill="#8AB4F8" r="3" />
            <circle cx="300" cy="40" fill="#8AB4F8" r="3" />
          </svg>
          </GlowCursor>
        </div>

        <div className="grid grid-cols-3 gap-space-sm text-center">
          {latencyNodes.map((node) => (
            <div key={node.code} className="rounded bg-surface-container p-space-sm">
              <div className="font-label-mono text-code-sm text-outline">{node.code}</div>
              <div
                className={`font-headline-sm text-headline-sm font-medium ${
                  node.accent ? 'text-secondary' : 'text-on-surface'
                }`}
              >
                {node.value}
              </div>
              <div className="font-label-mono text-code-sm text-on-surface-variant">{node.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md flex items-center justify-between font-label-mono text-code-sm text-outline">
        <span>PROTOCOL: QUIC / WIREGUARD</span>
        <span className="font-medium text-secondary">SYNC COMPLETE [P99 &lt; 95ms]</span>
      </div>
    </div>
  )
}

function StackCard() {
  return (
    <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-low p-space-lg shadow-sm md:col-span-12 md:flex-row md:items-center">
      <div className="flex flex-col">
        <span className="font-label-mono text-code-sm uppercase text-outline">CORE PRIMITIVES &amp; SYSTEM STACK</span>
        <span className="font-headline-sm text-headline-sm text-on-surface">零妥协的技术选型与工匠基底</span>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm font-label-mono text-code-sm">
        {stack.map((item) => (
          <span
            key={item.name}
            className={`flex items-center gap-1.5 rounded-lg bg-surface-container px-space-md py-1.5 ${stackTone[item.tone]}`}
          >
            {item.dot && <span className={`h-1.5 w-1.5 rounded-full ${dotTone[item.tone]}`} />}
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function BentoGrid() {
  return (
    <div className="mt-space-xl grid grid-cols-1 gap-space-md md:grid-cols-12">
      <PhilosophyCard />
      <LatencyCard />
      <StackCard />
    </div>
  )
}
