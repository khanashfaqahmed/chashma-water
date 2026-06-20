import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hi! I'd like to order water from Chashma Water.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  )
}
