export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/avcioglu-logo.jpg"
      alt="Avcıoğlu Group"
      className={className ?? 'h-14 w-auto sm:h-16'}
    />
  )
}
