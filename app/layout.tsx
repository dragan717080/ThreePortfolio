import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components'
import './globals.css'
import './index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dragan',
  description: 'Portfolio Website made with Next.js, Three.js, TypeScript, Tailwind and Blender',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="col-v min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
