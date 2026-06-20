'use client'

import { useState, FormEvent } from 'react'
import { cn, formatPKR } from '@/lib/utils'
import Button from '@/components/ui/button'

interface CheckoutFormProps {
  total: number
  onPlaceOrder: () => void
}

export default function CheckoutForm({ total, onPlaceOrder }: CheckoutFormProps) {
  const [payment, setPayment] = useState<'cod' | 'bank_transfer'>('cod')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onPlaceOrder()
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-slate-100 p-6">
      <h3 className="mb-4 text-sm font-bold text-dark">Delivery Details</h3>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Full Name" id="fullName" placeholder="Muhammad Ali" required />
        <Field label="Phone" id="phone" type="tel" placeholder="03xx-xxxxxxx" required />
      </div>

      <Field
        label="Delivery Address"
        id="address"
        placeholder="House no, Street, Area"
        required
        className="mt-3"
      />

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="City" id="city" defaultValue="Lahore" required />
        <Field label="Area" id="area" placeholder="DHA, Gulberg..." required />
      </div>

      <Field
        label="Delivery Notes (optional)"
        id="notes"
        placeholder="Gate code, floor, special instructions"
        className="mt-3"
      />

      <p className="mb-2 mt-4 text-sm font-semibold text-dark">Payment Method</p>
      <div className="mb-5 flex gap-3">
        <PayOption
          label="💵 Cash on Delivery"
          selected={payment === 'cod'}
          onClick={() => setPayment('cod')}
        />
        <PayOption
          label="🏦 Bank Transfer"
          selected={payment === 'bank_transfer'}
          onClick={() => setPayment('bank_transfer')}
        />
      </div>

      <Button type="submit" className="w-full" size="lg">
        Place Order — {formatPKR(total)}
      </Button>
    </form>
  )
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
  defaultValue,
  required,
  className,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold text-dark">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-primary-600"
      />
    </div>
  )
}

function PayOption({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        'flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-semibold transition-colors',
        selected
          ? 'border-primary-600 bg-primary-50 text-primary-700'
          : 'border-slate-200 text-slate-500'
      )}
    >
      {label}
    </button>
  )
}
