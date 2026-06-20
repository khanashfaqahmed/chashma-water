import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Browse Chashma Water products: 19L and 20L water cans, bottled water packs, and office or restaurant delivery packages.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
