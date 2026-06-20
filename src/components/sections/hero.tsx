import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import Button from '@/components/ui/button'
import { whatsappLink } from '@/lib/utils'

const stats = [
  { value: '200+', label: 'Wholesale Partners' },
  { value: '50K+', label: 'Bottles Supplied Monthly' },
  { value: '15+', label: 'Areas Covered' },
  { value: '99.9%', label: 'Purity Rate' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark px-4 pb-16 pt-20 text-center sm:px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(2,132,199,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className="animate-float absolute left-[5%] top-[22%] hidden items-center gap-1.5 rounded-2xl bg-white px-4 py-2 text-sm font-medium text-dark shadow-xl sm:flex"
        aria-hidden="true"
      >
        Lab tested daily
      </div>
      <div
        className="animate-float-delayed absolute right-[5%] top-[32%] hidden items-center gap-1.5 rounded-2xl bg-white px-4 py-2 text-sm font-medium text-dark shadow-xl sm:flex"
        aria-hidden="true"
      >
        Bulk delivery available
      </div>

      <div className="relative mx-auto max-w-2xl">
        <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-primary-400/30 bg-primary-400/10 px-4 py-1.5 text-xs font-semibold text-primary-400">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          ISO Certified Pure Water
        </span>

        <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
          Bulk water supply,
          <br />
          <span className="text-primary-400">trusted by wholesalers</span>
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/65">
          Reliable, large-volume purified water supply for distributors, shops,
          and businesses. Competitive wholesale pricing with same-day delivery
          across Lahore.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/products">
            <Button size="lg">Order Now</Button>
          </Link>
          <a
            href={whatsappLink("Hi! I would like to inquire about wholesale water supply from Chashma Water.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              Order on WhatsApp
            </Button>
          </a>
          <Link href="/track">
            <Button variant="outline" size="lg">
              Track My Order
            </Button>
          </Link>
        </div>

        <dl className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="font-display text-2xl font-extrabold text-primary-400">
                {stat.value}
              </dd>
              <dt className="text-xs text-white/50">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
