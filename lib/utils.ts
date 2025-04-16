import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPricing = (price: number) =>
  price.toLocaleString('vi-vn', { style: 'currency', currency: 'VND' })
