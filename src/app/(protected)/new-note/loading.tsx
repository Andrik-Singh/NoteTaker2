export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8 h-9 w-2/3 rounded bg-muted/60 animate-pulse" />

      <div className="space-y-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-4 w-full rounded bg-muted/40 animate-pulse"
          />
        ))}
      </div>
    </div>
  )
}
