'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'
import Button from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="mb-4 h-12 w-12 text-amber-500" aria-hidden="true" />
      <h1 className="font-display text-3xl font-extrabold text-dark">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        We hit an unexpected error. Please try again, or contact us if the
        problem continues.
      </p>
      <Button onClick={reset} className="mt-6">
        Try again
      </Button>
    </div>
  )
}
