import Icon from '../ui/Icon.jsx'

const statusTone = {
  secondary: 'bg-secondary-container/60 text-secondary',
  primary: 'bg-primary-container/40 text-primary',
  muted: 'bg-surface-container-high text-on-surface-variant',
}

export default function ProjectCard({ project }) {
  const { name, status, statusTone: tone, description, meta, lang } = project

  return (
    <div className="group flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-sm transition-all hover:bg-surface-container">
      <div>
        <div className="mb-space-md flex items-center justify-between">
          <span className={`rounded px-space-sm py-0.5 font-label-mono text-code-sm ${statusTone[tone]}`}>
            {status}
          </span>
          <Icon name="arrow_outward" size={20} className="text-outline transition-colors group-hover:text-primary" />
        </div>
        <h3 className="flex items-center gap-2 font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-primary">
          {name}
        </h3>
        <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
      <div className="mt-space-lg flex items-center justify-between pt-space-md font-label-mono text-code-sm text-outline">
        <span className="flex items-center gap-1 text-on-surface">
          <Icon name={meta.icon} size={14} className={meta.iconTone} /> {meta.text}
        </span>
        <span className="rounded bg-surface-container-high px-2 py-0.5 text-on-surface-variant">{lang}</span>
      </div>
    </div>
  )
}
