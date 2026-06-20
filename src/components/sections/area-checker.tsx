'use client'

import { useState, FormEvent } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'
import { checkDeliveryArea } from '@/lib/utils'
import Button from '@/components/ui/button'

export default function AreaChecker() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<'ok' | 'no' | null>(null)

  function handleCheck(e: FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    setResult(checkDeliveryArea(input) ? 'ok' : 'no')
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-600">
          Coverage checker
        </p>
        <h2 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">
          Do we deliver to your area?
        </h2>

        <form
          onSubmit={handleCheck}
          className="mx-auto mt-6 max-w-md rounded-2xl border border-slate-200 bg-brand-bg p-6"
        >
          <label htmlFor="area-input" className="sr-only">
            Enter your area or postal code
          </label>
          <input
            id="area-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your area or postal code (e.g. DHA, Gulberg, 54000)"
            className="mb-3 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-600"
          />
          <Button type="submit" className="w-full">
            Check Availability
          </Button>

          {result === 'ok' && (
            <div className="mt-3 flex items-start gap-2 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
              Great news! We deliver to your area. Estimated delivery within
              2–4 hours.
            </div>
          )}
          {result === 'no' && (
            <div className="mt-3 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">
              <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
              Sorry, we don&apos;t cover this area yet. Call us at
              0300-1234567 to check alternatives.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
