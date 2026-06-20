'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Product } from '@/types'
import { useCart } from '@/lib/cart-context'
import { formatPKR } from '@/lib/utils'
import { useToast } from '@/components/ui/toast'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const { showToast } = useToast()

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    showToast(`${product.emoji} ${product.name} added to cart!`)
  }

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-100"
    >
      <div className="relative flex h-[150px] items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
        <span className="text-5xl" aria-hidden="true">
          {product.emoji}
        </span>
        {product.tag && (
          <span className="absolute right-2 top-2 rounded-full bg-primary-600 px-2.5 py-1 text-[11px] font-semibold text-white">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-dark">{product.name}</h3>
        <p className="mb-3 mt-0.5 text-xs text-slate-500">{product.spec}</p>
        <div className="flex items-center justify-between">
          <span className="text-base font-extrabold text-primary-600">
            {formatPKR(product.price)}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white transition-transform hover:scale-110 hover:bg-primary-700"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </Link>
  )
}
