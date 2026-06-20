import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import { ToastProvider } from '@/components/ui/toast'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import WhatsAppFloat from '@/components/ui/whatsapp-float'

export const metadata: Metadata = {
  title: {
    default: 'Chashma Water | Pure Water, Delivered Fresh',
    template: '%s | Chashma Water',
  },
  description:
    'Chashma Water delivers purified, lab-tested drinking water to homes, offices, restaurants and schools across Lahore. Order online, subscribe for regular delivery, or order on WhatsApp.',
  keywords: [
    'water delivery Lahore',
    'mineral water delivery',
    'water can delivery',
    'Chashma Water',
    'pure water subscription',
  ],
  openGraph: {
    title: 'Chashma Water | Pure Water, Delivered Fresh',
    description:
      'Purified drinking water delivered to your door across Lahore. Order online or via WhatsApp.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Chashma Water',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chashma Water | Pure Water, Delivered Fresh',
    description:
      'Purified drinking water delivered to your door across Lahore.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-brand-bg text-dark antialiased">
        <CartProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  )
}
