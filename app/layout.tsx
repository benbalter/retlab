import './globals.css'
import type { Metadata } from 'next'
import ClientScripts from '../components/ClientScripts'

export const metadata: Metadata = {
  title: 'Ben Balter',
  description: 'Attorney, open source developer, product manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/css/style.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  )
}
