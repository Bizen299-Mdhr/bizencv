import { Inter, Orbitron, Rajdhani } from "next/font/google"
import "../styles/globals.css"
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
    template: '%s | Bizen MDHR', // For dynamic titles in child pages
    absolute: 'Bizen MDHR'
  },

  description: 'Bizen MDHR is a software development company that provides custom software development services to businesses of all sizes.',
  keywords: ['cv','profile','custom software development', 'web development', 'mobile development', 'software development', 'software development company', 'software development services', 'software development company in nepal', 'software development company in kathmandu', 'software development company in biratnagar', 'software development company in birgunj', 'software development company in pokhara', 'software development company in nepal'],
  authors: [{ name: 'Bizen Mdhr', url: 'https://bizendra.com.np' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Bizen Mdhr',
    description: 'Bizen Mdhr is a software development company that provides custom software development services to businesses of all sizes.',
    url: 'https://bizendra.com.np',
    siteName: 'Bizen Mdhr',
    images: [
      {
        url: './favicon-32x32.png', // Path to your OG image
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: './favicon-32x32.png',
    apple: './apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: './favicon.ico',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
    images: ['./favicon-32x32.png'], // Path to your Twitter image
  },
} 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

