import { MetadataRoute } from 'next'
import { products } from '@/lib/products'

const BASE_URL = 'https://www.chashmawater.pk'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/products', '/cart', '/track', '/contact'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes]
}
