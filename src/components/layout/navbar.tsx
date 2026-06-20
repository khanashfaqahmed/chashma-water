'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Droplet, ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/track', label: 'Track Order' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { itemCount } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-extrabold text-white"
        >
          <Droplet className="h-5 w-5 text-primary-400" aria-hidden="true" />
          Chashma Water
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-primary-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/admin"
            className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/20 sm:block"
          >
            Admin Panel
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            aria-label={`Cart, ${itemCount} items`}
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Cart</span>
            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-cyan-400 px-1 text-[11px] font-bold text-dark">
              {itemCount}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-white/10 transition-all md:hidden',
          open ? 'max-h-64' : 'max-h-0 border-t-0'
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {[...navLinks, { href: '/admin', label: 'Admin Panel' }].map(
            (link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  )
}
