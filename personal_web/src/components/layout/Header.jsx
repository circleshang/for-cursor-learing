import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems, site } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'
import PingDot from '../ui/PingDot.jsx'

const linkBase = 'rounded-lg px-space-sm py-1.5 transition-all'
const linkActive = 'bg-surface-container-high font-headline-sm font-medium text-on-surface'
const linkIdle =
  'font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'

const navClass = ({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-surface-container-lowest/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-space-md px-gutter">
        <div className="flex shrink-0 items-center gap-space-md">
          <Link to="/" className="group flex items-center gap-space-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-surface-container-high font-headline-sm text-primary">
              S
            </span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface transition-colors group-hover:text-primary">
                {site.name}
              </span>
              <span className="-mt-1 hidden font-code-sm text-code-sm uppercase tracking-wider text-outline sm:inline">
                {site.tagline}
              </span>
            </div>
          </Link>
          <div className="hidden items-center gap-space-xs rounded-full bg-surface-container-high/60 px-space-sm py-0.5 xl:flex">
            <PingDot />
            <span className="font-code-sm text-code-sm text-secondary">Online / {site.location}</span>
          </div>
        </div>

        <nav className="hidden items-center gap-1 rounded-xl bg-surface-container-low/60 p-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-space-sm">
          <div className="hidden cursor-pointer items-center gap-1.5 rounded-lg bg-surface-container-high px-space-sm py-1 font-code-sm text-code-sm text-on-surface-variant transition-all hover:bg-surface-bright hover:text-on-surface md:flex">
            <Icon name="terminal" size={14} />
            <span>⌘K</span>
          </div>
          <div className="hidden items-center gap-space-xs rounded-full bg-secondary-container/40 px-space-sm py-1 sm:flex">
            <PingDot size="h-1.5 w-1.5" />
            <span className="font-code-sm text-code-sm font-medium text-secondary">Available for Q3</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center rounded-lg p-1.5 text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface"
            >
              <Icon name="code" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share"
              className="flex items-center justify-center rounded-lg p-1.5 text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface"
            >
              <Icon name="share" />
            </a>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center rounded-lg p-1.5 text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-gutter pb-space-md lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
