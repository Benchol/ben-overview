export default function Cube3D({ size = 180 }: { size?: number }) {
  const h = size / 2
  const face: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    border: '1px solid rgba(91, 143, 255, 0.2)',
    background: 'rgba(91, 143, 255, 0.012)',
    boxShadow: '0 0 16px rgba(91, 143, 255, 0.05)',
  }

  const faces = [
    { transform: `translateZ(${h}px)` },
    { transform: `rotateY(180deg) translateZ(${h}px)` },
    { transform: `rotateY(-90deg) translateZ(${h}px)` },
    { transform: `rotateY(90deg) translateZ(${h}px)` },
    { transform: `rotateX(90deg) translateZ(${h}px)` },
    { transform: `rotateX(-90deg) translateZ(${h}px)` },
  ]

  return (
    <div style={{ width: size, height: size, perspective: `${size * 5}px` }}>
      <div
        style={{
          width: size,
          height: size,
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'cube-spin 28s linear infinite',
        }}
      >
        {faces.map((f, i) => (
          <div key={i} style={{ ...face, ...f }} />
        ))}
      </div>
    </div>
  )
}
