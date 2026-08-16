import { useState } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function TiltCard({ children, style }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: -y * 8, y: x * 8 })
  }

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        ...style,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? 6 : 0}px)`,
        transition: 'transform 0.15s ease',
        transformStyle: 'preserve-3d',
        cursor: 'default',
      }}
    >
      {children}
    </div>
  )
}
