export function GlassCard({
  children,
  className = '',
  hover = false,
  edge = false,
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
  edge?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/8 backdrop-blur-xl ${edge ? 'glass-edge' : ''} ${hover ? 'transition-all duration-300 hover:bg-white/12 hover:border-mint/30 hover:shadow-[0_0_30px_rgba(138,255,196,0.1)]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
