'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Which areas do you deliver to?',
    a: 'We currently deliver to DHA, Gulberg, Johar Town, Model Town, Garden Town, Bahria Town, and 10+ more areas across Lahore. Use the area checker above to confirm your address.',
  },
  {
    q: 'How do I pay?',
    a: 'We accept cash on delivery (COD) for all orders. Online payment via bank transfer is also available. Easypaisa and JazzCash coming soon.',
  },
  {
    q: 'Can I pause my subscription?',
    a: 'Yes! You can pause, resume or cancel your subscription anytime via WhatsApp or by calling us. No penalties or hidden fees.',
  },
  {
    q: 'How do I return empty bottles?',
    a: 'Our driver collects empty bottles on every delivery at no extra charge. Just leave them at your door when we arrive.',
  },
  {
    q: 'Is your water safe to drink directly?',
    a: 'Yes. Our water passes through 7-stage reverse osmosis filtration and is UV sterilized. TDS levels are maintained between 50–150 ppm — ideal for drinking.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-600">
          FAQ
        </p>
        <h2 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">
          Common questions
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-slate-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-dark hover:bg-brand-bg"
                >
                  {faq.q}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 flex-shrink-0 text-slate-400 transition-transform',
                      isOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={cn(
                    'px-5 text-sm leading-relaxed text-slate-500 transition-all',
                    isOpen ? 'max-h-40 pb-4' : 'max-h-0 overflow-hidden'
                  )}
                >
                  {faq.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
