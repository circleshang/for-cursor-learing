import { Link } from 'react-router-dom'
import PagePlaceholder from '../components/ui/PagePlaceholder.jsx'

export default function NotFoundPage() {
  return (
    <>
      <PagePlaceholder eyebrow="404" title="Page not found" description="你访问的页面不存在。" />
      <div className="mx-auto max-w-[1200px] px-gutter">
        <Link to="/" className="font-label-mono text-code-sm text-primary hover:underline">
          ← Back to home
        </Link>
      </div>
    </>
  )
}
