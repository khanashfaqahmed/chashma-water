export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-6 h-8 w-48 animate-pulse rounded-lg bg-slate-200" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="h-[150px] animate-pulse bg-slate-100" />
            <div className="p-4">
              <div className="mb-2 h-4 w-3/4 animate-pulse rounded bg-slate-200" />
              <div className="mb-3 h-3 w-1/2 animate-pulse rounded bg-slate-100" />
              <div className="flex items-center justify-between">
                <div className="h-4 w-16 animate-pulse rounded bg-slate-200" />
                <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
