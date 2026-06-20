'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { products } from '@/lib/products'
import { ProductCategory } from '@/types'
import ProductCard from '@/components/ui/product-card'
import { cn } from '@/lib/utils'

const categories: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'cans', label: '💧 Water Cans' },
  { value: 'bottles', label: '🍶 Bottles' },
  { value: 'packages', label: '📦 Packages' },
]

type SortOption = '' | 'asc' | 'desc'

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<ProductCategory | 'all'>('all')
  const [sort, setSort] = useState<SortOption>('')

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category
      const matchesSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })

    if (sort === 'asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'desc') list = [...list].sort((a, b) => b.price - a.price)

    return list
  }, [search, category, sort])

  return (
    <>
      <div className="bg-dark px-4 py-10 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-white">
          Our Products
        </h1>
        <p className="mt-1 text-sm text-white/60">
          Pure water in every size — for every need
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <div className="relative min-w-[200px] flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>
            <input
              id="product-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary-600"
            />
          </div>
          <label htmlFor="sort-select" className="sr-only">
            Sort by
          </label>
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary-600"
          >
            <option value="">Sort by</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={category === cat.value}
              onClick={() => setCategory(cat.value)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors',
                category === cat.value
                  ? 'border-primary-600 bg-primary-600 text-white'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-primary-600 hover:text-primary-600'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-sm text-slate-500">
            No products found. Try a different search!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
