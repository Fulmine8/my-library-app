import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bibliothèque Associative',
  description: 'Mini-catalogue web pour une bibliothèque associative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}