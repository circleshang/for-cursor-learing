import { Link } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import TextType from '../typinglooks.jsx'

const headline =
  'Architecting resilient systems, crafting quiet software, and living on the edge of autonomy.'

const headingClass =
  'font-display-hero-mobile text-display-hero-mobile leading-tight tracking-tight text-on-surface md:font-display-hero md:text-display-hero'

export default function Hero() {
  return (
    <>
      {/* 坐标 / 元信息条 */}
      <div className="mb-space-lg flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-outline">
          <span className="text-secondary">[35.6762° N, 139.6503° E]</span>
          <span className="text-surface-variant">•</span>
          <span>SHANE // NODE: TOKYO-CORE</span>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-1.5 rounded bg-surface-container px-space-sm py-0.5 font-label-mono text-code-sm text-on-surface-variant">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            <span>UPTIME 99.98%</span>
          </div>
          <div className="font-label-mono text-code-sm text-outline">EPOCH #2025.1</div>
        </div>
      </div>

      {/* 主标题 */}
      <div className="flex max-w-4xl flex-col gap-space-md">
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="rounded bg-surface-container-high px-space-sm py-1 font-label-mono text-code-sm uppercase tracking-wider text-primary">
            ARCHITECTING FREEDOM
          </span>
          <span className="text-surface-variant">/</span>
          <span className="font-label-mono text-code-sm uppercase tracking-wider text-on-surface-variant">
            SYSTEM ARCHITECT &amp; INDEPENDENT RESEARCHER
          </span>
        </div>
        <div className="relative">
          {/* 不可见的完整标题:预先撑开高度,避免打字时下方内容跳动 */}
          <p aria-hidden="true" className={`invisible ${headingClass}`}>
            {headline}
          </p>
          <div className="absolute inset-0">
            <TextType
              as="h1"
              className={headingClass}
              text={headline}
              loop={false}
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={50}
              deleteMode="backspace"
              typeEffect="none"
              mistakes={0}
              cursorStyle="underscore"
              cursorGlide
              showCursor
              cursorColor="currentColor"
              prefixColor="currentColor"
              cursorBlinkDuration={0.5}
              cursorCharacter="_"
              prefix=""
            />
          </div>
        </div>
        <p className="mt-space-xs max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          致力于高可用分布式系统架构、轻量边缘存储协议与低感知交互工具的独立研发。信奉理性工程美学,以确定的系统韧性对抗无序,实践全球旅居与技术自足。
        </p>

        <div className="mt-space-sm flex flex-wrap items-center gap-space-md">
          <Link
            to="/projects"
            className="inline-flex items-center gap-space-sm rounded-lg bg-primary-container px-space-lg py-2.5 font-body-md font-medium text-on-primary shadow-md shadow-primary/10 transition-all hover:bg-primary"
          >
            <span>Explore Projects 探索项目</span>
            <Icon name="arrow_forward" />
          </Link>
          <Link
            to="/research"
            className="inline-flex items-center gap-space-sm rounded-lg bg-surface-container-high px-space-lg py-2.5 font-body-md text-on-surface transition-all hover:bg-surface-bright"
          >
            <Icon name="science" size={16} className="text-primary" />
            <span>Read Research 研究路线</span>
          </Link>
          <div className="hidden items-center gap-space-xs rounded-lg bg-surface-container-low px-space-md py-2 font-label-mono text-code-sm text-on-surface-variant sm:flex">
            <Icon name="flight_takeoff" size={15} className="text-secondary" />
            <span>Current Base: Tokyo (UTC+9)</span>
          </div>
        </div>
      </div>
    </>
  )
}
