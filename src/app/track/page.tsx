'use client'

import { useState, FormEvent, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone } from 'lucide-react'
import Button from '@/components/ui/button'

interface TimelineStep {
  title: string
  desc: string
  time?: string
  status: 'done' | 'active' | 'pending'
}

const timeline: TimelineStep[] = [
  { title: 'Order Placed', desc: 'Your order was received', time: '10:30 AM', status: 'done' },
  { title: 'Confirmed', desc: 'Order confirmed by our team', time: '10:45 AM', status: 'done' },
  { title: 'Driver Assigned', desc: 'Muhammad Bilal assigned', time: '11:15 AM', status: 'done' },
  { title: 'Out for Delivery', desc: 'Driver is on the way to you', time: '11:50 AM', status: 'active' },
  { title: 'Delivered', desc: 'Waiting...', status: 'pending' },
]

function TrackOrderContent() {
  const searchParams = useSearchParams()
  const [orderId, setOrderId] = useState(searchParams.get('order') ?? '')
  const [showResult, setShowResult] = useState(Boolean(searchParams.get('order')))

  function handleTrack(e: FormEvent) {
    e.preventDefault()
    if (!orderId.trim()) return
    setShowResult(true)
  }

  return (
    <>
      <div className="bg-dark px-4 py-10 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-white">
          Track Your Order
        </h1>
        <p className="mt-1 text-sm text-white/60">
          Enter your order ID to see live status
        </p>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <form onSubmit={handleTrack} className="mb-8 flex gap-3">
          <label htmlFor="order-id" className="sr-only">
            Order ID
          </label>
          <input
            id="order-id"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID (e.g. CW-1042)"
            className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary-600"
          />
          <Button type="submit">Track</Button>
        </form>

        {showResult && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-primary-600">
                  Order #{orderId || 'CW-1042'}
                </p>
                <p className="text-xs text-slate-500">
                  Placed: June 14, 2026 — 10:30 AM
                </p>
              </div>
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                Out for Delivery
              </span>
            </div>

            <div className="mb-6 rounded-xl bg-primary-50 p-4 text-sm">
              <p className="mb-1 flex items-center gap-2 font-bold text-primary-700">
                🚚 Driver: Muhammad Bilal
              </p>
              <p className="text-slate-500">Vehicle: Honda 70 • PKR-L-4521</p>
              <p className="mt-1 flex items-center gap-1 text-slate-500">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                0333-9876543 • Est. arrival: 12:45 PM
              </p>
            </div>

            <ol className="relative space-y-5 pl-7">
              <div className="absolute left-2 top-1 h-[calc(100%-8px)] w-0.5 bg-slate-200" aria-hidden="true" />
              {timeline.map((step) => (
                <li key={step.title} className="relative">
                  <span
                    className={`absolute -left-7 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      step.status === 'done'
                        ? 'border-green-500 bg-green-500'
                        : step.status === 'active'
                          ? 'border-primary-600 bg-primary-600'
                          : 'border-slate-200 bg-white'
                    }`}
                    aria-hidden="true"
                  >
                    {(step.status === 'done' || step.status === 'active') && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <p
                    className={`text-sm font-bold ${
                      step.status === 'pending' ? 'text-slate-400' : 'text-dark'
                    }`}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`text-xs ${
                      step.status === 'pending' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {step.desc}
                  </p>
                  {step.time && (
                    <p className="text-xs font-semibold text-primary-600">{step.time}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </>
  )
}

export default function TrackPage() {
  return (
    <Suspense fallback={null}>
      <TrackOrderContent />
    </Suspense>
  )
}
