import { FlaskConical, Zap, Wallet, RefreshCw, Smartphone, Award } from 'lucide-react'

const reasons = [
  {
    icon: FlaskConical,
    title: 'Lab Tested Daily',
    desc: 'Every batch tested for TDS, pH, bacteria and heavy metals before dispatch.',
  },
  {
    icon: Zap,
    title: 'Same-Day Delivery',
    desc: 'Order before 2pm and receive your water the same day.',
  },
  {
    icon: Wallet,
    title: 'Best Prices',
    desc: 'Competitive rates with bulk discounts and subscription savings.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Subscriptions',
    desc: 'Set it and forget it — we deliver on schedule automatically.',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Orders',
    desc: 'Place and track orders directly on WhatsApp in seconds.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    desc: 'ISO 22000 certified facility. PSQCA approved and regularly audited.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary-600">
        Why choose us
      </p>
      <h2 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">
        Trusted by thousands of families
      </h2>
      <p className="mt-1 max-w-md text-sm text-slate-500">
        From source to your door — quality you can taste
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
          >
            <reason.icon
              className="mx-auto mb-3 h-8 w-8 text-primary-600"
              aria-hidden="true"
            />
            <h3 className="mb-1 text-sm font-bold text-dark">{reason.title}</h3>
            <p className="text-xs leading-relaxed text-slate-500">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
