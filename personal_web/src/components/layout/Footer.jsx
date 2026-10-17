import { site } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl">
      <div className="mx-auto max-w-[1200px] px-gutter">
        <div className="flex flex-col items-center justify-between gap-space-md pt-space-lg md:flex-row">
          <div className="flex flex-wrap items-center gap-space-md">
            <div className="flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface-variant">
              <Icon name="speed" size={14} className="text-outline" />
              <span>24ms</span>
            </div>
            <div className="flex items-center gap-space-xs font-code-sm text-code-sm text-secondary">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
              <span>All systems normal</span>
            </div>
            <div className="flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface-variant">
              <Icon name="schedule" size={14} className="text-outline" />
              <span>UTC+9 Tokyo</span>
            </div>
          </div>
          <div className="font-code-sm text-code-sm text-outline">
            © {site.year} {site.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
