const eyebrowTone = {
  primary: 'text-primary',
  secondary: 'text-secondary',
}

export default function SectionHeader({ eyebrow, title, description, tone = 'primary' }) {
  return (
    <div className="mb-space-lg flex flex-col justify-between gap-space-sm md:flex-row md:items-end">
      <div>
        <div className={`mb-1 font-label-mono text-code-sm uppercase tracking-widest ${eyebrowTone[tone]}`}>
          {eyebrow}
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">{title}</h2>
      </div>
      {description && (
        <p className="max-w-md font-body-md text-body-md text-on-surface-variant">{description}</p>
      )}
    </div>
  )
}
