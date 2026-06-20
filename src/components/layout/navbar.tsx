'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    dropdown: [
      { label: 'Our Story', href: '/about' },
      { label: 'Quality & Safety', href: '/about#quality' },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'Track Order', href: '/track' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-xl font-extrabold text-primary-600">
          💧 Chashma Water
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setDropOpen(item.label)}
              onMouseLeave={() => item.dropdown && setDropOpen(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-dark transition-colors hover:bg-slate-50 hover:text-primary-600"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
              </Link>
              {item.dropdown && dropOpen === item.label && (
                <div className="absolute left-0 top-full w-48 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-dark hover:bg-slate-50 hover:text-primary-600"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-slate-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-dark hover:bg-slate-50"
              >
                {item.label}
              </Link>
              {item.dropdown?.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-6 py-1.5 text-xs text-slate-500 hover:bg-slate-50"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}
