export default function Loading() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-10 h-7 w-32 rounded-md bg-muted/60 animate-pulse" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="mb-4 h-5 w-3/4 rounded bg-muted/60 animate-pulse" />
            <div className="mb-2 h-4 w-full rounded bg-muted/50 animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-muted/40 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}
