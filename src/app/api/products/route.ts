import { NextResponse } from 'next/server'
import { products } from '@/lib/products'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')?.toLowerCase()

  let result = products

  if (category && category !== 'all') {
    result = result.filter((p) => p.category === category)
  }

  if (search) {
    result = result.filter((p) => p.name.toLowerCase().includes(search))
  }

  return NextResponse.json({ products: result })
}
