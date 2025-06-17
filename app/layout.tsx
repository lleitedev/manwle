import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emanuele Silveira',
  description: 'Olá, sou a Emanuele!',
  generator: 'manwle',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
