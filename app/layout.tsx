import './styles/globals.scss'
import type { Metadata } from 'next'
import ClientScripts from '../components/ClientScripts'
import { siteConfig } from '../config/site'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
