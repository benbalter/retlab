import './styles/globals.scss'
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
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  )
}
