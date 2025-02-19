import { Inter, Orbitron, Rajdhani } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: {
    default: 'Bizen MDHR',
    template: '%s | Site Name', // For dynamic titles in child pages
  },
  description: 'Your default page description',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    url: 'bizendra.com.np',
    siteName: 'Bizen Mdhr',
    images: [
      {
        url: '/og-image.jpg', // Path to your OG image
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
    images: ['/twitter-image.jpg'], // Path to your Twitter image
  },
} 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

