import Link from 'next/link'
import { Droplet } from 'lucide-react'
import Button from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Droplet className="mb-4 h-12 w-12 text-primary-300" aria-hidden="true" />
      <h1 className="font-display text-3xl font-extrabold text-dark">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist or has been
        moved. Let&apos;s get you back to fresh water.
      </p>
      <Link href="/" className="mt-6">
        <Button>Back to Home</Button>
      </Link>
    </div>
  )
}
