import Link from 'next/link'
import { Droplet, Phone, Mail } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

const footerColumns = [
  {
    title: 'Products',
    links: [
      { href: '/products', label: '19L Water Can' },
      { href: '/products', label: '1.5L Bottles' },
      { href: '/products', label: '1L Bottles' },
      { href: '/products', label: '500ml Bottles' },
      { href: '/products', label: 'Office Packages' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/#about', label: 'About Us' },
      { href: '/#why', label: 'Water Quality' },
      { href: '/#why', label: 'Certifications' },
      { href: '/contact', label: 'Careers' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/track', label: 'Track Order' },
      { href: '/contact', label: 'Contact Us' },
      { href: whatsappLink(), label: 'WhatsApp' },
      { href: '/#faq', label: 'FAQ' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="mb-2 flex items-center gap-2 font-display text-lg font-extrabold text-primary-400">
              <Droplet className="h-5 w-5" aria-hidden="true" />
              Chashma Water
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Pure, safe drinking water delivered fresh to your doorstep
              across Lahore.
            </p>
            <div className="mt-3 space-y-1 text-sm text-white/50">
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" /> 0300-1234567
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" /> info@chashmawater.pk
              </p>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/60">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link, idx) => (
                  <li key={`${col.title}-${idx}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Chashma Water. All rights reserved. |
          Lahore, Pakistan
        </div>
      </div>
    </footer>
  )
}
