import Link from 'next/link'
import Button from '@/components/ui/button'
import { whatsappLink } from '@/lib/utils'

export default function CtaBanner() {
  return (
    <section className="bg-primary-600 px-4 py-12 text-center text-white sm:px-6">
      <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
        Ready to order?
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm opacity-85">
        Get fresh purified water delivered today
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link href="/products">
          <Button className="bg-white text-primary-600 hover:bg-slate-100" size="lg">
            Browse Products
          </Button>
        </Link>
        <a
          href={whatsappLink("Hi! I'd like to order water from Chashma Water.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="whatsapp" size="lg">
            WhatsApp Order
          </Button>
        </a>
      </div>
    </section>
  )
}
