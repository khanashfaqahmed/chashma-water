export type ProductCategory = 'cans' | 'bottles' | 'packages'

export interface Product {
  id: number
  name: string
  slug: string
  spec: string
  description: string
  price: number
  category: ProductCategory
  emoji: string
  tag?: string
  stock: number
}

export interface CartItem extends Product {
  qty: number
}

export type OrderStatus = 'pending' | 'confirmed' | 'out_for_delivery' | 'delivered'

export interface OrderItem {
  productId: number
  name: string
  price: number
  qty: number
}

export interface Order {
  id: string
  customerName: string
  phone: string
  address: string
  city: string
  area: string
  notes?: string
  paymentMethod: 'cod' | 'bank_transfer'
  items: OrderItem[]
  subtotal: number
  deliveryFee: number
  total: number
  status: OrderStatus
  createdAt: string
}
