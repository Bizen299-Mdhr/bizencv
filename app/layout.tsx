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
    default: 'Bizen MDHR | Software Developer Nepal',
    template: '%s | Bizen MDHR | Software Developer Nepal', // For dynamic titles in child pages
    absolute: 'Bizen MDHR | Software Developer Nepal'
  },

  description: 'Bizen MDHR - Expert software development services for businesses. Specializing in custom software solutions, mobile app development, and  tech services in Nepal.',
  keywords: [
    'Bizen MDHR software',
    'Bizen MDHR',
    'Bizen Mdhr',
    'Bizen Developer',
    'Bizen Developer Nepal',
    'Bizen Developer Kathmandu',
    'custom software development Nepal',
    'mobile app development Nepal',
    'web application development Nepal',
    'software consulting Nepal',
    'React development Nepal',
    'full-stack developer Nepal',
    'e-commerce software Nepal',

  ],
  authors: [{ name: 'Bizen Mdhr', url: 'https://bizendra.com.np' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Bizen Mdhr',
    description: 'Bizen MDHR - Expert software development services for businesses. Specializing in custom software solutions, mobile app development, and  tech services in Nepal.',
    url: 'https://bizendra.com.np',
    siteName: 'Bizen Mdhr | Software Developer Nepal',
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
    title: 'Bizen MDHR | Software Developer Nepal',
    description: 'Bizen MDHR - Expert software development services for businesses. Specializing in custom software solutions, mobile app development, and  tech services in Nepal.',
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
      <body className={inter.className}>
        {children}
        <noscript>
          <style>
            {`
              body {
                display: none !important;
              }
            `}
          </style>
          <p>Please enable JavaScript to view this site.</p>
        </noscript>
      </body>
    </html>
  )
}

