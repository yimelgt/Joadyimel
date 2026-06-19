export function SectionTitle({
  number,
  title,
  subtitle,
}: {
  number: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="text-sm font-mono text-mint tracking-widest">{number}</span>
      <h2 className="text-3xl md:text-5xl font-bold text-heading mt-2 mb-4">{title}</h2>
      {subtitle && <p className="text-body text-lg max-w-2xl">{subtitle}</p>}
    </div>
  )
}
