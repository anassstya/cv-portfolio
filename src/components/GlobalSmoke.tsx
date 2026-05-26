export default function GlobalSmoke() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Big slow grey smoke — top */}
      <div
        style={{
          position: 'absolute',
          width: '90vw',
          height: '90vw',
          maxWidth: 1400,
          maxHeight: 1400,
          top: '-25%',
          left: '15%',
          background:
            'radial-gradient(circle, rgba(180,185,200,0.16) 0%, rgba(130,135,160,0.08) 35%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          mixBlendMode: 'screen',
          animation: 'smokeFloat1 26s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Cooler tone — bottom right */}
      <div
        style={{
          position: 'absolute',
          width: '80vw',
          height: '80vw',
          maxWidth: 1200,
          maxHeight: 1200,
          bottom: '-20%',
          right: '-10%',
          background:
            'radial-gradient(circle, rgba(160,170,195,0.13) 0%, rgba(120,130,155,0.06) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          mixBlendMode: 'screen',
          animation: 'smokeFloat2 32s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Mid grey blob — left */}
      <div
        style={{
          position: 'absolute',
          width: '70vw',
          height: '70vw',
          maxWidth: 1000,
          maxHeight: 1000,
          top: '35%',
          left: '-20%',
          background:
            'radial-gradient(circle, rgba(190,195,210,0.11) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(85px)',
          mixBlendMode: 'screen',
          animation: 'smokeFloat3 28s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Tiny warm hint — top right */}
      <div
        style={{
          position: 'absolute',
          width: '50vw',
          height: '50vw',
          maxWidth: 700,
          maxHeight: 700,
          top: '10%',
          right: '-5%',
          background:
            'radial-gradient(circle, rgba(200,180,150,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(95px)',
          mixBlendMode: 'screen',
          animation: 'smokeFloat1 34s ease-in-out infinite reverse',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
