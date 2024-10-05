import '@/assets/css/index.css'

import { Open_Sans as OpenSans } from 'next/font/google'

import type { Metadata, Viewport } from 'next'

const openSans = OpenSans({ subsets: ['latin'], variable: '--font-sans' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Artesanato São Pio',
  description: 'Catálogo de artigos religosos.',
  icons: {
    icon: {
      url: 'icon.ico',
      type: 'image/x-icon',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.className} bg-dark text-neutral-900`}>
        {children}
      </body>
    </html>
  )
}
