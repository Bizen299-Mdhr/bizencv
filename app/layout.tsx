import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bizen Manandhar',
  description: 'Bizen Manandhar is a software engineer and a product designer',
  generator: 'Bizen Manandhar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
