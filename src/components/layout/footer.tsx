import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="font-display text-xl font-extrabold">💧 Chashma Water</p>
          <p className="mt-2 max-w-md text-sm text-white/60">
            Reliable bulk water supply for distributors, shops, and businesses across Lahore.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
              Company
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
              Support
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/track" className="hover:text-white">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
              Follow Us
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Chashma Water. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
