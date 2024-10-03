import type { Metadata, Viewport } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import './globals.css'

const openSans = OpenSans({ subsets: ['latin'], variable: '--font-sans' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Artesanato São Pio',
  description: 'Catálogo de Terços, Velas e Imagens do Artesanato São Pio',
  icons: [
    {
      url: '/icon.ico',
      type: 'image/x-icon',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.className} text-neutral-600`}>
        {children}
      </body>
    </html>
  )
}
