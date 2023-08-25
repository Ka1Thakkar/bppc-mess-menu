import Nav from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BottomBar from '@/components/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mess Menu - SSMS, BITS Pilani',
  description: 'Mess Menu for the week, an initiative by SSMS, BITS Pilani',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Nav />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
