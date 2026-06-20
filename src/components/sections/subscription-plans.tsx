'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { useToast } from '@/components/ui/toast'
import { formatPKR } from '@/lib/utils'

const plans = [
  {
    name: 'Daily Plan',
    price: 150,
    period: 'per 19L delivery',
    features: ['Daily morning delivery', 'Free bottle exchange', 'Pause anytime'],
    featured: false,
  },
  {
    name: 'Weekly Plan',
    price: 900,
    period: 'per week (save 10%)',
    features: [
      '2× deliveries per week',
      'Free bottle exchange',
      'Priority support',
      'Pause anytime',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Monthly Plan',
    price: 3200,
    period: 'per month (save 20%)',
    features: [
      'Flexible delivery days',
      'Free bottle exchange',
      'Priority support',
      'Dedicated account manager',
      'Pause anytime',
    ],
    featured: false,
  },
]

export default function SubscriptionPlans() {
  const { showToast } = useToast()

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary-600">
        Subscription plans
      </p>
      <h2 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">
        Save more with subscriptions
      </h2>
      <p className="mt-1 max-w-md text-sm text-slate-500">
        Regular deliveries at discounted rates
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border-2 p-6 text-center ${
              plan.featured
                ? 'border-primary-600 bg-primary-50'
                : 'border-slate-200 bg-white'
            }`}
          >
            {plan.badge && (
              <span className="mb-3 inline-block rounded-full bg-primary-600 px-3 py-1 text-[11px] font-semibold text-white">
                {plan.badge}
              </span>
            )}
            <h3 className="font-display text-base font-extrabold text-dark">
              {plan.name}
            </h3>
            <p className="mt-1 font-display text-3xl font-extrabold text-primary-600">
              {formatPKR(plan.price)}
            </p>
            <p className="mb-4 text-xs text-slate-500">{plan.period}</p>
            <ul className="mb-5 space-y-1.5 text-left text-sm text-slate-600">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-shrink-0 text-green-600" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/products"
              onClick={() => showToast(`${plan.name} selected! Choose your products.`)}
              className="block w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Subscribe {plan.name.split(' ')[0]}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
