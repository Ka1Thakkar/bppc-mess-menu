import Nav from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BottomBar from '@/components/BottomBar'
import logo from '@/public/assets/download.png'
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react';

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
    <html lang="en" className=' scroll-smooth transition-all ease-in-out relative'>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
      <Analytics />
    </html>
  )
}
