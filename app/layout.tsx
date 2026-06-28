import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond, Cinzel, DM_Sans } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { Loader } from '@/components/loader'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})
const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kedarfly.com'),
  title: {
    default: 'KedarFly — Sacred Himalayan Pilgrimage Journeys',
    template: '%s · KedarFly',
  },
  description:
    'Premium Char Dham & Kedarnath pilgrimage experiences. Handpicked hotels, temple assistance, experienced drivers and helicopter assistance for a sacred once-in-a-lifetime journey.',
  keywords: [
    'Char Dham Yatra',
    'Kedarnath tour package',
    'Badrinath tour',
    'Kedarnath helicopter',
    'temple tours',
    'spiritual pilgrimage India',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5c-1 0-1.7.7-1.7 1.7 0 .3 0 .6.2.9C7.6 6 5.8 8.7 5.8 12v5.4c0 .9-.6 1.5-1.2 2.1-.3.3-.6.6-.6 1.1h16c0-.5-.3-.8-.6-1.1-.6-.6-1.2-1.2-1.2-2.1V12c0-3.3-1.8-6-4.7-6.9.2-.3.2-.6.2-.9 0-1-.7-1.7-1.7-1.7Z" fill="%23EA7317"/><circle cx="12" cy="21.2" r="1.4" fill="%23EA7317"/></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'KedarFly — Sacred Himalayan Pilgrimage Journeys',
    description:
      'Premium Char Dham & Kedarnath pilgrimage experiences crafted with devotion.',
    type: 'website',
    images: ['/images/hero-kedarnath.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${cinzel.variable} ${dmSans.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Loader />
        <CustomCursor />
        <SmoothScroll />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingActions />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
