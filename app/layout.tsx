import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { PostHogProvider } from '@/lib/posthog-provider'
import './globals.css'

import Footer from '@/components/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fly Clean',
  description: 'Dọn nhanh giá tốt',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <PostHogProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex min-h-screen flex-col">
            {/*<NavigationMenu />*/}
            <div className="z-[1] flex-1">{children}</div>
            <Footer />
          </div>
        </body>
      </PostHogProvider>
    </html>
  )
}
