import { useState } from 'react'
import { socialLinks } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 接入真实的订阅接口
    setEmail('')
    setDone(true)
  }

  return (
    <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-xl shadow-sm">
      <div className="max-w-2xl">
        <div className="mb-1 font-label-mono text-code-sm uppercase tracking-widest text-primary">STAY CONNECTED</div>
        <h2 className="mb-space-xs font-headline-lg text-headline-lg tracking-tight text-on-surface">
          Receive technical field notes &amp; memos.
        </h2>
        <p className="mb-space-lg font-body-md text-body-md text-on-surface-variant">
          不定期的技术深度备忘录、架构拓扑图谱及游民工作流思考。无垃圾邮件,极简纯文字,支持随时退订。
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-stretch gap-space-sm sm:flex-row sm:items-center"
        >
          <div className="relative flex-1">
            <Icon name="terminal" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setDone(false)
              }}
              placeholder="architect@domain.xyz"
              className="w-full rounded-lg bg-surface-container-lowest py-2.5 pl-10 pr-space-md font-label-mono text-code-md text-on-surface shadow-inner placeholder:text-outline/60 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-primary px-space-lg py-2.5 font-body-md font-medium text-on-primary transition-colors hover:bg-primary-fixed"
          >
            <span>Subscribe</span>
            <Icon name="arrow_forward" size={16} />
          </button>
        </form>
        {done && (
          <p className="mt-space-sm font-label-mono text-code-sm text-secondary">
            Acknowledged. You are registered.
          </p>
        )}

        <div className="mt-space-lg flex flex-wrap items-center gap-space-md pt-space-md font-label-mono text-code-sm text-outline">
          {socialLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-space-md">
              {i > 0 && <span className="text-surface-variant">•</span>}
              <a
                href={link.href}
                className="flex items-center gap-1 transition-colors hover:text-primary"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span>{link.label}</span>
                <span className="text-xs">↗</span>
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
