// Google Material Symbols 图标封装,size 为 px
export default function Icon({ name, size = 18, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  )
}
