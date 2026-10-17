// 统一的页面内容容器:最大宽度 1200px,居中,左右留白
export default function PageContainer({ children, className = '' }) {
  return (
    <div className={`relative z-10 mx-auto max-w-[1200px] px-gutter pb-16 pt-8 ${className}`}>
      {children}
    </div>
  )
}
