import PageContainer from './PageContainer.jsx'

// 尚未设计的页面占位
export default function PagePlaceholder({ eyebrow, title, description }) {
  return (
    <PageContainer className="pt-space-xl">
      <div className="font-label-mono text-code-sm uppercase tracking-widest text-primary">{eyebrow}</div>
      <h1 className="mt-1 font-headline-lg text-headline-lg tracking-tight text-on-surface">{title}</h1>
      <p className="mt-space-sm max-w-xl font-body-md text-body-md text-on-surface-variant">{description}</p>
    </PageContainer>
  )
}
