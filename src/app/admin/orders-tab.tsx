'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/toast'
import { OrderStatus } from '@/types'

interface AdminOrder {
  id: string
  customer: string
  items: string
  total: string
  status: OrderStatus
}

const initialOrders: AdminOrder[] = [
  { id: 'CW-1042', customer: 'Ahmad Malik', items: '2× 19L Can', total: 'PKR 400', status: 'out_for_delivery' },
  { id: 'CW-1041', customer: 'Sana Riaz', items: '1× Office Pack S', total: 'PKR 650', status: 'confirmed' },
  { id: 'CW-1040', customer: 'Kamran Aslam', items: '3× 19L Can', total: 'PKR 450', status: 'delivered' },
  { id: 'CW-1039', customer: 'Fatima Iqbal', items: '2× 1.5L Pack', total: 'PKR 720', status: 'pending' },
  { id: 'CW-1038', customer: 'Hassan Raza', items: '1× Restaurant Pack', total: 'PKR 1,700', status: 'delivered' },
]

const statusOrder: OrderStatus[] = ['pending', 'confirmed', 'out_for_delivery', 'delivered']

const statusLabels: Record<OrderStatus, string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  out_for_delivery: 'Out for Delivery',
  delivered: 'Delivered',
}

const statusStyles: Record<OrderStatus, string> = {
  pending: 'bg-amber-100 text-amber-800',
  confirmed: 'bg-blue-100 text-blue-800',
  out_for_delivery: 'bg-cyan-100 text-cyan-800',
  delivered: 'bg-green-100 text-green-800',
}

export default function OrdersTab() {
  const [orders, setOrders] = useState<AdminOrder[]>(initialOrders)
  const { showToast } = useToast()

  function cycleStatus(id: string) {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== id) return order
        const currentIndex = statusOrder.indexOf(order.status)
        const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length]
        showToast(`Status updated to: ${statusLabels[nextStatus]}`)
        return { ...order, status: nextStatus }
      })
    )
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-bold text-dark">Today&apos;s Orders (127)</p>
        <input
          type="text"
          placeholder="Search orders..."
          aria-label="Search orders"
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-primary-600"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs font-semibold text-slate-500">
              <th className="px-3 py-2">Order ID</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Items</th>
              <th className="px-3 py-2">Total</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-slate-100">
                <td className="px-3 py-3 font-semibold text-primary-600">{order.id}</td>
                <td className="px-3 py-3">{order.customer}</td>
                <td className="px-3 py-3 text-slate-500">{order.items}</td>
                <td className="px-3 py-3 font-semibold">{order.total}</td>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    onClick={() => cycleStatus(order.id)}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[order.status]}`}
                  >
                    {statusLabels[order.status]}
                  </button>
                </td>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    onClick={() => showToast('Invoice downloaded!')}
                    className="rounded-md border border-slate-200 px-2.5 py-1 text-xs hover:bg-brand-bg"
                  >
                    Invoice
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
