// 带脉冲动画的状态小圆点
export default function PingDot({ size = 'h-2 w-2', animate = true }) {
  return (
    <span className={`relative flex ${size}`}>
      {animate && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
      )}
      <span className={`relative inline-flex rounded-full bg-secondary ${size}`} />
    </span>
  )
}
