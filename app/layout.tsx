import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pacific Mobile Home Service | San Diego County Roofing',
  description:
    'Pacific Mobile Home Service provides expert mobile home roofing in San Diego County: roof installation, roof repair, metal roofing, and roof refurbishing. Licensed & insured with 48 years of experience. Call (619) 750-9125 to request an estimate.',
  keywords:
    'mobile home roofing, San Diego County, roof repair, roof installation, metal roofing, roof refurbishing, manufactured home roofing',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
