import { Product } from '@/types'

export const products: Product[] = [
  {
    id: 1,
    name: '19L Water Can',
    slug: '19l-water-can',
    spec: 'Reusable polycarbonate can',
    description:
      'Our most popular product. A 19-litre reusable polycarbonate can filled with purified, mineral-balanced drinking water. Perfect for homes and small offices. We collect your empty can on every delivery.',
    price: 150,
    category: 'cans',
    emoji: '💧',
    tag: 'Bestseller',
    stock: 485,
  },
  {
    id: 2,
    name: '20L Water Can',
    slug: '20l-water-can',
    spec: 'Extra capacity — office use',
    description:
      'A larger 20-litre can designed for offices and businesses with higher daily water needs. Same purification process, slightly more capacity for fewer refills.',
    price: 160,
    category: 'cans',
    emoji: '🪣',
    tag: 'Popular',
    stock: 200,
  },
  {
    id: 3,
    name: '1.5L Bottle (Pack of 12)',
    slug: '1-5l-bottle-pack',
    spec: 'Pack of 12 bottles',
    description:
      'A pack of 12 sealed 1.5-litre bottles. Convenient for gatherings, road trips, or stocking up the fridge. Tamper-proof seals on every bottle.',
    price: 360,
    category: 'bottles',
    emoji: '🍶',
    stock: 320,
  },
  {
    id: 4,
    name: '1L Bottle (Pack of 12)',
    slug: '1l-bottle-pack',
    spec: 'Pack of 12 bottles',
    description:
      'A pack of 12 sealed 1-litre bottles, ideal for daily use, lunchboxes, and on-the-go hydration.',
    price: 300,
    category: 'bottles',
    emoji: '🧴',
    stock: 410,
  },
  {
    id: 5,
    name: '500ml Bottle (Pack of 24)',
    slug: '500ml-bottle-pack',
    spec: 'Pack of 24 bottles',
    description:
      'A pack of 24 sealed 500ml bottles. Great for events, schools, and gyms where smaller portions are preferred.',
    price: 480,
    category: 'bottles',
    emoji: '💦',
    stock: 280,
  },
  {
    id: 6,
    name: 'Office Package S',
    slug: 'office-package-s',
    spec: '5× 19L cans weekly',
    description:
      'Five 19-litre cans delivered weekly — ideal for small offices with up to 15 people. Includes free dispenser maintenance check.',
    price: 650,
    category: 'packages',
    emoji: '🏢',
    tag: 'Popular',
    stock: 999,
  },
  {
    id: 7,
    name: 'Office Package L',
    slug: 'office-package-l',
    spec: '10× 19L cans weekly',
    description:
      'Ten 19-litre cans delivered weekly for larger offices with up to 40 people. Priority scheduling and dedicated support included.',
    price: 1200,
    category: 'packages',
    emoji: '🏗️',
    tag: 'Best Value',
    stock: 999,
  },
  {
    id: 8,
    name: 'Restaurant Pack',
    slug: 'restaurant-pack',
    spec: '15× 19L cans weekly',
    description:
      'Fifteen 19-litre cans delivered weekly for restaurants, cafes, and high-traffic businesses. Flexible delivery windows to fit your service hours.',
    price: 1700,
    category: 'packages',
    emoji: '🍽️',
    stock: 999,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}
