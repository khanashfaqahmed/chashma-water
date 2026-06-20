'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeft, Minus, Plus, ShieldCheck, Truck, Star } from 'lucide-react'
import { Product } from '@/types'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/components/ui/toast'
import Button from '@/components/ui/button'
import { formatPKR } from '@/lib/utils'

const reviews = [
  {
    name: 'Bilal Hussain',
    rating: 5,
    comment: 'Always fresh and on time. Been ordering for 6 months now.',
  },
  {
    name: 'Mariam Khan',
    rating: 5,
    comment: 'Great quality water, the can is sturdy and well sealed.',
  },
  {
    name: 'Usman Tariq',
    rating: 4,
    comment: 'Good service overall, occasionally delivery is a bit late.',
  },
]

export default function ProductDetailClient({ product }: { product: Product }) {
  const [qty, setQty] = useState(1)
  const { addItem, changeQty } = useCart()
  const { showToast } = useToast()

  function handleAddToCart() {
    addItem(product)
    if (qty > 1) {
      changeQty(product.id, qty - 1)
    }
    showToast(`${product.emoji} ${qty} × ${product.name} added to cart!`)
    setQty(1)
  }

  return (
    <div>
      <Link
        href="/products"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary-600"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100">
          <span className="text-[8rem]" aria-hidden="true">
            {product.emoji}
          </span>
        </div>

        {/* Details */}
        <div>
          {product.tag && (
            <span className="mb-3 inline-block rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
              {product.tag}
            </span>
          )}
          <h1 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-1 text-sm text-slate-500">{product.spec}</p>

          <p className="mt-4 font-display text-3xl font-extrabold text-primary-600">
            {formatPKR(product.price)}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {product.description}
          </p>

          {/* Quantity selector */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-semibold text-dark">Quantity</span>
            <div className="flex items-center gap-3 rounded-full border border-slate-200 px-2 py-1">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <span className="w-6 text-center text-sm font-semibold" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={handleAddToCart} size="lg">
              Add to Cart — {formatPKR(product.price * qty)}
            </Button>
            <Link href="/#why">
              <Button variant="outline" size="lg" className="border-slate-300 text-dark hover:border-primary-600 hover:text-primary-600">
                View Subscription Plans
              </Button>
            </Link>
          </div>

          {/* Specs / Allergen-style info */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-primary-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-dark">Water Quality</p>
                <p className="text-xs text-slate-500">
                  TDS 50–150 ppm, UV sterilized, RO 7-stage filtered
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
              <Truck className="mt-0.5 h-5 w-5 text-primary-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-dark">Delivery</p>
                <p className="text-xs text-slate-500">
                  Same-day delivery for orders placed before 2pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-14">
        <h2 className="mb-5 font-display text-xl font-extrabold text-dark">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="mb-2 flex items-center gap-0.5 text-amber-400" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5"
                    fill={i < review.rating ? 'currentColor' : 'none'}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mb-3 text-sm italic leading-relaxed text-dark">
                &quot;{review.comment}&quot;
              </p>
              <p className="text-sm font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
