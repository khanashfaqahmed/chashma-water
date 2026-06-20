import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPKR(amount: number): string {
  return `PKR ${amount.toLocaleString('en-PK')}`
}

export function generateOrderId(): string {
  const num = Math.floor(1000 + Math.random() * 9000)
  return `CW-${num}`
}

export const WHATSAPP_NUMBER = '923001234567'

export function whatsappLink(message = ''): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const DELIVERY_AREAS = [
  'dha',
  'gulberg',
  'johar town',
  'model town',
  'garden town',
  'bahria town',
  'wapda town',
  'cantt',
  'iqbal town',
  'defence',
  'faisal town',
  'township',
]

export function checkDeliveryArea(input: string): boolean {
  const val = input.toLowerCase().trim()
  if (!val) return false
  return DELIVERY_AREAS.some((area) => val.includes(area) || area.includes(val))
}
