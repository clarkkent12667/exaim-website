export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600" role="status" aria-label="Loading"></div>
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

