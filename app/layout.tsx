import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SWESCO MACHINE BOYS - 23rd Instrumentalist',
  description: 'A memorable celebration of music, culture, and school pride. Experience the 23rd Instrumentalist event at SWESCO MACHINE BOYS.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
