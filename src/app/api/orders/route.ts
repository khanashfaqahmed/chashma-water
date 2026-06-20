import { NextResponse } from 'next/server'
import { generateOrderId } from '@/lib/utils'
import { Order, OrderItem } from '@/types'

// In-memory store for demo purposes.
// Replace with a database (e.g. Prisma + PostgreSQL) in production.
const orders: Order[] = []

export async function GET() {
  return NextResponse.json({ orders })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { customerName, phone, address, city, area, notes, paymentMethod, items } = body as {
      customerName: string
      phone: string
      address: string
      city: string
      area: string
      notes?: string
      paymentMethod: 'cod' | 'bank_transfer'
      items: OrderItem[]
    }

    if (!customerName || !phone || !address || !items?.length) {
      return NextResponse.json(
        { error: 'Missing required fields: customerName, phone, address, items' },
        { status: 400 }
      )
    }

    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
    const deliveryFee = 100
    const total = subtotal + deliveryFee

    const order: Order = {
      id: generateOrderId(),
      customerName,
      phone,
      address,
      city,
      area,
      notes,
      paymentMethod,
      items,
      subtotal,
      deliveryFee,
      total,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    orders.push(order)

    return NextResponse.json({ order }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
