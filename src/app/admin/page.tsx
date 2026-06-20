'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import OrdersTab from './orders-tab'
import ProductsTab from './products-tab'
import CustomersTab from './customers-tab'

const stats = [
  { label: "Today's Revenue", value: 'PKR 84,500' },
  { label: 'Orders Today', value: '127' },
  { label: 'Active Customers', value: '2,341' },
  { label: 'Deliveries Today', value: '98' },
]

type Tab = 'orders' | 'products' | 'customers'

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>('orders')

  return (
    <div>
      <div className="flex items-center justify-between bg-dark px-4 py-4 sm:px-6">
        <h1 className="text-base font-extrabold text-white">
          💧 Chashma Admin Panel
        </h1>
        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to Site
        </Link>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between bg-dark px-6 py-4">
            <h2 className="text-sm font-bold text-white">Dashboard</h2>
            <span className="text-xs text-white/50">June 14, 2026</span>
          </div>

          <div className="border-b border-slate-100 p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-brand-bg p-4 text-center">
                  <p className="font-display text-xl font-extrabold text-primary-600">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex border-b border-slate-100">
            {(['orders', 'products', 'customers'] as Tab[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-selected={tab === t}
                className={`px-5 py-3 text-sm font-semibold capitalize transition-colors ${
                  tab === t
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-slate-500 hover:text-dark'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="p-6">
            {tab === 'orders' && <OrdersTab />}
            {tab === 'products' && <ProductsTab />}
            {tab === 'customers' && <CustomersTab />}
          </div>
        </div>
      </div>
    </div>
  )
}
