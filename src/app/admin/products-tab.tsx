'use client'

import { useToast } from '@/components/ui/toast'
import { products } from '@/lib/products'
import { formatPKR } from '@/lib/utils'

const categoryStyles: Record<string, string> = {
  cans: 'bg-blue-100 text-blue-800',
  bottles: 'bg-cyan-100 text-cyan-800',
  packages: 'bg-violet-100 text-violet-800',
}

const categoryLabels: Record<string, string> = {
  cans: 'Cans',
  bottles: 'Bottles',
  packages: 'Packages',
}

export default function ProductsTab() {
  const { showToast } = useToast()

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-bold text-dark">Products ({products.length})</p>
        <button
          type="button"
          onClick={() => showToast('Add Product form coming in Phase 2!')}
          className="rounded-full bg-primary-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-primary-700"
        >
          + Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs font-semibold text-slate-500">
              <th className="px-3 py-2">Product</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">Stock</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-slate-100">
                <td className="px-3 py-3 font-semibold">{product.name}</td>
                <td className="px-3 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${categoryStyles[product.category]}`}>
                    {categoryLabels[product.category]}
                  </span>
                </td>
                <td className="px-3 py-3 font-semibold text-primary-600">
                  {formatPKR(product.price)}
                </td>
                <td className="px-3 py-3">
                  {product.stock < 999 ? (
                    <span className={product.stock < 50 ? 'text-red-600' : 'text-green-600'}>
                      {product.stock} units
                    </span>
                  ) : (
                    'Unlimited'
                  )}
                </td>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    onClick={() => showToast('Edit product opened!')}
                    className="mr-1.5 rounded-md border border-slate-200 px-2.5 py-1 text-xs hover:bg-brand-bg"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast('Product deleted!')}
                    className="rounded-md border border-red-200 px-2.5 py-1 text-xs text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
