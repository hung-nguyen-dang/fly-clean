'use client'

import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import posthog from 'posthog-js'

export default function Footer() {
  const handleTrackCta = (ctaType: string) => () => {
    posthog.capture('contact_us_clicked', { ctaType })
  }

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-secondary-foreground mb-4 text-xl font-bold">
              Fly Clean
            </h3>
            <p className="mb-4 text-gray-400">
              Dịch vụ vệ sinh chuyên nghiệp, nhanh chóng, đáng tin cậy và phù
              hợp với nhu cầu của bạn.
            </p>
          </div>

          <div>
            <h3 className="text-secondary-foreground mb-4 text-lg font-semibold">
              Thông tin liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-primary mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">TP.Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-2 h-5 w-5" />
                <Link href="tel:0906865780" onClick={handleTrackCta('footer')}>
                  <span className="text-gray-400">0906.865.780</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fly Clean</p>
        </div>
      </div>
    </footer>
  )
}
