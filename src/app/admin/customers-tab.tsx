'use client'

import { useToast } from '@/components/ui/toast'

const customers = [
  { name: 'Ahmad Malik', phone: '0300-1111111', area: 'DHA Phase 5', orders: 42 },
  { name: 'Sana Riaz', phone: '0321-2222222', area: 'Gulberg III', orders: 28 },
  { name: 'Kamran Aslam', phone: '0333-3333333', area: 'Johar Town', orders: 15 },
  { name: 'Fatima Iqbal', phone: '0345-4444444', area: 'Model Town', orders: 8 },
]

export default function CustomersTab() {
  const { showToast } = useToast()

  return (
    <div>
      <p className="mb-4 text-sm font-bold text-dark">Customers (2,341)</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs font-semibold text-slate-500">
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Phone</th>
              <th className="px-3 py-2">Area</th>
              <th className="px-3 py-2">Orders</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.name} className="border-b border-slate-100">
                <td className="px-3 py-3 font-semibold">{customer.name}</td>
                <td className="px-3 py-3 text-slate-500">{customer.phone}</td>
                <td className="px-3 py-3 text-slate-500">{customer.area}</td>
                <td className="px-3 py-3">{customer.orders} orders</td>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    onClick={() => showToast('Customer profile opened!')}
                    className="rounded-md border border-slate-200 px-2.5 py-1 text-xs hover:bg-brand-bg"
                  >
                    View
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
