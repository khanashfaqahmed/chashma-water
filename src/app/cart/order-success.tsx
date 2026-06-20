'use client'

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/button'
import { whatsappLink } from '@/lib/utils'

export default function OrderSuccess({ orderId }: { orderId: string }) {
  return (
    <div className="rounded-2xl bg-white p-10 text-center">
      <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-500" aria-hidden="true" />
      <h2 className="font-display text-xl font-extrabold text-dark">
        Order placed!
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        We&apos;ll call you to confirm within 10 minutes.
      </p>

      <div className="mt-6 rounded-xl bg-primary-50 p-4 text-left text-sm">
        <p className="font-bold text-primary-700">Order ID: {orderId}</p>
        <p className="mt-1 text-slate-500">Payment: Cash on Delivery</p>
        <p className="mt-1 text-slate-500">Estimated delivery: Today, 2–4 PM</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link href={`/track?order=${orderId}`}>
          <Button>Track Order</Button>
        </Link>
        <a
          href={whatsappLink(`Hi! I just placed order ${orderId} and wanted to confirm.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="whatsapp">WhatsApp Us</Button>
        </a>
        <Link href="/products">
          <Button variant="outline" className="border-slate-300 text-dark hover:border-primary-600 hover:text-primary-600">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}
