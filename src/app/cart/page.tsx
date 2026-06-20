'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/components/ui/toast'
import Button from '@/components/ui/button'
import { formatPKR, generateOrderId } from '@/lib/utils'
import CheckoutForm from './checkout-form'
import OrderSuccess from './order-success'

const DELIVERY_FEE = 100

export default function CartPage() {
  const { items, changeQty, removeItem, subtotal, clearCart } = useCart()
  const { showToast } = useToast()
  const [orderId, setOrderId] = useState<string | null>(null)

  const deliveryFee = items.length > 0 ? DELIVERY_FEE : 0
  const total = subtotal + deliveryFee

  function handlePlaceOrder() {
    const id = generateOrderId()
    setOrderId(id)
    clearCart()
  }

  if (orderId) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <OrderSuccess orderId={orderId} />
      </div>
    )
  }

  return (
    <div className="bg-dark px-4 py-10 text-center sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-white">
        Your Cart
      </h1>

      <div className="mx-auto mt-10 max-w-2xl text-left">
        {items.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center">
            <ShoppingCart
              className="mx-auto mb-4 h-12 w-12 text-slate-300"
              aria-hidden="true"
            />
            <p className="mb-1 font-semibold text-dark">Your cart is empty</p>
            <p className="mb-5 text-sm text-slate-500">
              Add some products first
            </p>
            <Link href="/products">
              <Button>Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-white">
            <div className="flex items-center justify-between bg-dark px-6 py-4">
              <h2 className="text-sm font-bold text-white">Order Summary</h2>
              <span className="text-xs text-white/50">
                {items.reduce((s, i) => s + i.qty, 0)} items
              </span>
            </div>

            <div className="divide-y divide-slate-100 px-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-2xl">
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-dark">{item.name}</p>
                    <p className="text-sm font-semibold text-primary-600">
                      {formatPKR(item.price * item.qty)}
                    </p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => changeQty(item.id, -1)}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-3 w-3" aria-hidden="true" />
                      </button>
                      <span className="w-5 text-center text-sm font-bold" aria-live="polite">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => changeQty(item.id, 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      removeItem(item.id)
                      showToast(`${item.name} removed from cart`)
                    }}
                    className="p-1 text-red-500 hover:text-red-600"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 bg-brand-bg px-6 py-4 text-sm">
              <div className="flex justify-between py-0.5 text-slate-500">
                <span>Subtotal</span>
                <span>{formatPKR(subtotal)}</span>
              </div>
              <div className="flex justify-between py-0.5 text-slate-500">
                <span>Delivery</span>
                <span>{formatPKR(deliveryFee)}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-slate-200 pt-2 text-base font-extrabold text-dark">
                <span>Total</span>
                <span>{formatPKR(total)}</span>
              </div>
            </div>

            <CheckoutForm total={total} onPlaceOrder={handlePlaceOrder} />
          </div>
        )}
      </div>
    </div>
  )
}
