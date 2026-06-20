import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products'
import ProductCard from '@/components/ui/product-card'
import ProductDetailClient from './product-detail-client'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Chashma Water`,
      description: product.description,
    },
  }
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getRelatedProducts(product)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <ProductDetailClient product={product} />

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 font-display text-xl font-extrabold text-dark">
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
