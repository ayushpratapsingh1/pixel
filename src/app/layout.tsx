import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Pixel Dev - Creative Digital Solutions',
  description: 'Pixel Dev offers professional web design, logo creation, and web development services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <Head>
        <link rel="icon" href="/icons/logo.png" type="image/x-icon" />
      </Head>
      <body className="bg-black-900 text-white font-inter">{children}</body>
    </html>
  )
}
