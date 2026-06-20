'use client'

import { FormEvent } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { useToast } from '@/components/ui/toast'
import Button from '@/components/ui/button'
import { whatsappLink } from '@/lib/utils'

const contactCards = [
  { icon: Phone, label: '0300-1234567', sub: 'Call us anytime' },
  { icon: MessageCircle, label: '0300-1234567', sub: 'WhatsApp ordering' },
  { icon: Mail, label: 'info@chashmawater.pk', sub: 'Email support' },
  { icon: MapPin, label: '123 Water Plant Road', sub: 'Lahore, Punjab, Pakistan' },
  { icon: Clock, label: '7am – 10pm', sub: 'Delivery hours, 7 days a week' },
]

export default function ContactPage() {
  const { showToast } = useToast()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    showToast('Message sent! We will contact you shortly.')
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <>
      <div className="bg-dark px-4 py-10 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-white">
          Contact Us
        </h1>
        <p className="mt-1 text-sm text-white/60">
          We&apos;re here to help — reach us anytime
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="mb-4 text-base font-bold text-dark">
              Send us a message
            </h2>

            <div className="mb-3">
              <label htmlFor="name" className="mb-1 block text-xs font-semibold text-dark">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary-600"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="mb-1 block text-xs font-semibold text-dark">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="03xx-xxxxxxx"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary-600"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="mb-1 block text-xs font-semibold text-dark">
                Email (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary-600"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="mb-1 block text-xs font-semibold text-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="How can we help?"
                className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary-600"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="flex flex-col gap-3">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50">
                  <card.icon className="h-4 w-4 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{card.label}</p>
                  <p className="text-xs text-slate-500">{card.sub}</p>
                </div>
              </div>
            ))}

            <a
              href={whatsappLink("Hi! I'd like to ask about Chashma Water.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" className="w-full">
                Chat on WhatsApp
              </Button>
            </a>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Chashma Water location map"
                src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
