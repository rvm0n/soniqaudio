import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "soniqaudio | Cooking audio/music apps",
  description: "Creative audio studio cooking audio/music apps",
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://soniqaudio.com'),
  openGraph: {
    title: 'soniqaudio | Cooking audio/music apps',
    description: 'Creative audio studio cooking audio/music apps',
    url: 'https://soniqaudio.com',
    siteName: 'soniqaudio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'soniqaudio | Cooking audio/music apps',
    description: 'Creative audio studio cooking audio/music apps',
    creator: '@rvm0n_'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
